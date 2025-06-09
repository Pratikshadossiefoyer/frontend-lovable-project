
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Globe, Users, FileText } from "lucide-react";
import { ProjectData, EmployeeOption } from "@/hooks/useProjectForm";

interface ProjectFormFieldsProps {
  projectData: ProjectData;
  selectedEmployees: EmployeeOption[];
  employeeOptions: EmployeeOption[];
  isValidUrl: boolean;
  userRole: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onEmployeeChange: (selected: EmployeeOption[] | null) => void;
}

export const ProjectFormFields: React.FC<ProjectFormFieldsProps> = ({
  projectData,
  selectedEmployees,
  employeeOptions,
  isValidUrl,
  userRole,
  onInputChange,
  onEmployeeChange
}) => {
  return (
    <div className="space-y-6">
      {/* Project Name */}
      <div className="space-y-2">
        <Label htmlFor="projectName" className="font-medium flex items-center gap-2 text-sm">
          <div className="w-5 h-5 bg-blue-100 rounded-lg flex items-center justify-center">
            <FileText className="w-3 h-3 text-blue-600" />
          </div>
          Project Name
        </Label>
        <Input
          id="projectName"
          type="text"
          name="name"
          value={projectData.name}
          onChange={onInputChange}
          placeholder="Enter project name"
          className="h-11"
          required
        />
      </div>

      {/* Website URL */}
      <div className="space-y-2">
        <Label htmlFor="url" className="font-medium flex items-center gap-2 text-sm">
          <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center">
            <Globe className="w-3 h-3 text-green-600" />
          </div>
          Website URL
        </Label>
        <Input
          id="url"
          type="url"
          name="domain"
          value={projectData.domain}
          onChange={onInputChange}
          placeholder="https://example.com"
          className={`h-11 ${!isValidUrl ? "border-red-500 focus:border-red-500" : ""}`}
          required
        />
        {!isValidUrl && (
          <p className="text-red-500 text-sm">Please enter a valid URL</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="font-medium flex items-center gap-2 text-sm">
          <div className="w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center">
            <FileText className="w-3 h-3 text-purple-600" />
          </div>
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          value={projectData.description}
          onChange={onInputChange}
          placeholder="Describe your SEO goals and objectives..."
          className="min-h-[80px] resize-none"
          required
        />
      </div>

      {/* Employee Selection - Only for admin */}
      {userRole === 'admin' && (
        <div className="space-y-2">
          <Label htmlFor="employees" className="font-medium flex items-center gap-2 text-sm">
            <div className="w-5 h-5 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-3 h-3 text-orange-600" />
            </div>
            Team Members
          </Label>
          <div className="text-sm text-gray-600 mb-2">
            Select employees to add to this project
          </div>
          {/* Note: This would need a proper multi-select component or custom implementation */}
          <div className="text-sm text-gray-500 p-3 border border-gray-200 rounded-lg">
            Multi-select for employees would go here
          </div>
        </div>
      )}
    </div>
  );
};
