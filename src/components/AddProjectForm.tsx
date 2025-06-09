import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { ProjectFormFields } from "@/components/ProjectFormFields";
import { ProjectFormPopup } from "@/components/ProjectFormPopup";
import { useProjectForm } from "@/hooks/useProjectForm";
import { createProject, fetchEmployeesInsideOrganization } from "../../services/api";
import { useProjects } from "./ProjectsContext";

const AddProjectForm = () => {
  const {
    projectData,
    selectedEmployees,
    employeeOptions,
    setEmployeeOptions,
    isValidUrl,
    setIsValidUrl,
    loading,
    setLoading,
    showPopup,
    popupType,
    error,
    handleInputChange,
    handleEmployeeChange,
    normalizeUrl,
    validateUrl,
    showAnimatedPopup,
    handlePopupClose,
    resetForm,
  } = useProjectForm();

  const authToken = localStorage.getItem("authToken");
  const userRole = localStorage.getItem('userRole');
  const { refreshProjects } = useProjects();

  // Load employees on component mount
  useEffect(() => {
    const loadEmployees = async () => {
      if (!authToken) {
        showAnimatedPopup('error', { message: "Authentication token is missing." });
        return;
      }
      
      setLoading(true);
      try {
        const data = await fetchEmployeesInsideOrganization(authToken);
        const employees = data.employees || [];
        const options = employees.map((emp) => ({
          value: emp.id,
          label: emp.first_name
            ? `${emp.first_name} ${emp.last_name}: ${emp.id}`
            : `${emp.email} : ${emp.id}`
        }));
        setEmployeeOptions(options);
      } catch (err) {
        console.error('Failed to load employees:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, [authToken]);

  const getFriendlyErrorMessage = (errorMessage) => {
    const errorMap = {
      'project with this target url already exists.': 'Project already exists',
      'Invalid pk "118" - object does not exist.': 'Some employees haven\'t joined or verified their accounts yet.',
    };
    return errorMap[errorMessage] || 'Project may already exist or include unverified employees. Please review the details.';
  };

  const handleSubmitProject = async () => {
    if (!authToken) {
      showAnimatedPopup('error', { message: "Authentication token is missing." });
      return;
    }

    if (!projectData.domain) {
      showAnimatedPopup('warning', { message: "Domain is required." });
      return;
    }

    const normalizedUrl = normalizeUrl(projectData.domain);
    if (!normalizedUrl || !validateUrl(normalizedUrl)) {
      setIsValidUrl(false);
      showAnimatedPopup('warning', { message: "Please enter a valid URL" });
      return;
    }

    setLoading(true);
    try {
      const employeeIds = selectedEmployees.map((emp) => emp.value);
      
      const response = await createProject(authToken, {
        ...projectData,
        target_url: normalizedUrl,
        team_members: employeeIds,
      });

      resetForm();
      
      await refreshProjects();

      const encodedUrl = encodeURIComponent(response.data.target_url);
      localStorage.setItem(`firstCrawl_${response.data.id}`, "true");

      showAnimatedPopup('success', {
        projectId: response.data.id,
        encodedUrl: encodedUrl
      });

    } catch (error) {
      const errorMessage = error.message || 'An unexpected error occurred.';
      showAnimatedPopup('error', { message: getFriendlyErrorMessage(errorMessage) });
    } finally {
      setLoading(false);
    }
  };

  if (loading && employeeOptions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
          <h4 className="text-lg font-medium text-gray-900">Loading...</h4>
          <p className="text-gray-600">Setting up your project form</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Add New Project
              </CardTitle>
              <p className="text-gray-600 mt-1">
                Create a new SEO project and start optimizing your website's performance
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <ProjectFormFields
            projectData={projectData}
            selectedEmployees={selectedEmployees}
            employeeOptions={employeeOptions}
            isValidUrl={isValidUrl}
            userRole={userRole}
            onInputChange={handleInputChange}
            onEmployeeChange={handleEmployeeChange}
          />

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Button
              onClick={handleSubmitProject}
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Creating Project...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Create Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <ProjectFormPopup
        isVisible={showPopup}
        type={popupType}
        error={error}
        onClose={handlePopupClose}
      />
    </>
  );
};

export default AddProjectForm;
