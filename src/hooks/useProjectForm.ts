
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ProjectData {
  name: string;
  domain: string;
  description: string;
}

export interface EmployeeOption {
  value: string;
  label: string;
}

export const useProjectForm = () => {
  const [projectData, setProjectData] = useState<ProjectData>({
    name: "",
    domain: "",
    description: "",
  });
  
  const [selectedEmployees, setSelectedEmployees] = useState<EmployeeOption[]>([]);
  const [employeeOptions, setEmployeeOptions] = useState<EmployeeOption[]>([
    { value: '1', label: 'John Doe' },
    { value: '2', label: 'Jane Smith' },
    { value: '3', label: 'Mike Johnson' },
  ]);
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<'success' | 'warning' | 'error'>('success');
  const [error, setError] = useState<string | null>(null);
  const [pendingNavigation, setPendingNavigation] = useState<any>(null);
  
  const navigate = useNavigate();

  // Auto-navigation effect for success popup
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showPopup && popupType === 'success' && pendingNavigation) {
      timer = setTimeout(() => {
        const { projectId, encodedUrl } = pendingNavigation;
        setShowPopup(false);
        navigate(`/dashboard/manage-project/${projectId}/${encodedUrl}`);
        setPendingNavigation(null);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [showPopup, popupType, pendingNavigation, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectData(prev => ({ ...prev, [name]: value }));
    
    if (name === "domain") {
      setIsValidUrl(true);
    }
  };

  const handleEmployeeChange = (selected: EmployeeOption[] | null) => {
    setSelectedEmployees(selected || []);
  };

  const normalizeUrl = (input: string): string | null => {
    let url = input.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }
    try {
      const urlObj = new URL(url);
      return urlObj.href;
    } catch (e) {
      return null;
    }
  };

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const showAnimatedPopup = (type: 'success' | 'warning' | 'error', popupData?: any) => {
    setPopupType(type);
    if (type === 'warning' || type === 'error') {
      setError(popupData?.message || 'An error occurred');
    }
    setShowPopup(true);
    if (popupData) {
      setPendingNavigation(popupData);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setPendingNavigation(null);
    setError(null);
  };

  const resetForm = () => {
    setProjectData({ name: "", domain: "", description: "" });
    setSelectedEmployees([]);
    setIsValidUrl(true);
    setError(null);
  };

  return {
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
  };
};
