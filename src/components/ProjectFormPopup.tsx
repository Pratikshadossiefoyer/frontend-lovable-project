
import React from 'react';
import { FaCheck, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface ProjectFormPopupProps {
  isVisible: boolean;
  type: 'success' | 'warning' | 'error';
  error?: string | null;
  onClose: () => void;
}

export const ProjectFormPopup: React.FC<ProjectFormPopupProps> = ({
  isVisible,
  type,
  error,
  onClose
}) => {
  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheck className="w-8 h-8 text-green-500" />;
      case 'warning':
        return <FaExclamationTriangle className="w-8 h-8 text-yellow-500" />;
      case 'error':
        return <FaExclamationTriangle className="w-8 h-8 text-red-500" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'success':
        return 'Project added successfully!';
      case 'warning':
        return 'Validation Error';
      case 'error':
        return 'Project addition failed!';
    }
  };

  const getSubMessage = () => {
    switch (type) {
      case 'success':
        return 'Redirecting to project dashboard in a moment...';
      case 'warning':
      case 'error':
        return error || 'An error occurred';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'error':
        return 'bg-red-50 border-red-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className={`${getBackgroundColor()} p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 border-2 animate-scale-in`}>
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            {getIcon()}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {getTitle()}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {getSubMessage()}
          </p>

          {(type === 'warning' || type === 'error') && (
            <Button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              OK
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
