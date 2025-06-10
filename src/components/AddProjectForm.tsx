
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { ProjectFormFields } from './ProjectFormFields';
import { ProjectFormPopup } from './ProjectFormPopup';
import { useProjectForm } from '@/hooks/useProjectForm';

const AddProjectForm = () => {
  const {
    projectData,
    selectedEmployees,
    employeeOptions,
    isValidUrl,
    loading,
    showPopup,
    popupType,
    error,
    handleInputChange,
    handleEmployeeChange,
    showAnimatedPopup,
    handlePopupClose,
    resetForm,
  } = useProjectForm();

  // Mock user role for now - in real app this would come from auth context
  const userRole = 'admin';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectData.domain) {
      showAnimatedPopup('warning', { message: "Domain is required." });
      return;
    }

    if (!projectData.name) {
      showAnimatedPopup('warning', { message: "Project name is required." });
      return;
    }

    if (!projectData.description) {
      showAnimatedPopup('warning', { message: "Description is required." });
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success
      resetForm();
      showAnimatedPopup('success', {
        projectId: 'mock-id',
        encodedUrl: encodeURIComponent(projectData.domain)
      });
    } catch (error) {
      showAnimatedPopup('error', { message: 'Failed to create project. Please try again.' });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <h4 className="text-lg font-medium text-gray-900">Loading...</h4>
          <p className="text-gray-600">Setting up your workspace</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] animate-pulse"></div>
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg mb-4 backdrop-blur-sm">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold mb-2">Add New Project</CardTitle>
            <p className="text-blue-100 text-sm">
              Create a new SEO project and start optimizing your website's performance
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <ProjectFormFields
              projectData={projectData}
              selectedEmployees={selectedEmployees}
              employeeOptions={employeeOptions}
              isValidUrl={isValidUrl}
              userRole={userRole}
              onInputChange={handleInputChange}
              onEmployeeChange={handleEmployeeChange}
            />

            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Creating Project...
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 mr-2" />
                    Create Project
                  </>
                )}
              </Button>
            </div>
          </form>
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
