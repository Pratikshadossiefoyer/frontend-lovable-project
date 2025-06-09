
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Globe, Users, FileText, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    url: '',
    description: '',
    employees: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Project data:', formData);
      toast({
        title: "Project Added Successfully! 🎉",
        description: "Your new project has been created and is ready for SEO optimization.",
      });
      setIsLoading(false);
      // Reset form
      setFormData({
        projectName: '',
        url: '',
        description: '',
        employees: ''
      });
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const employeeOptions = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "500+ employees"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/95">
        {/* Header Section */}
        <CardHeader className="text-center space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 pb-8 pt-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full -translate-x-10 -translate-y-10 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-indigo-100 rounded-full translate-x-8 translate-y-8 opacity-50"></div>
          
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Plus className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-3 relative z-10">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Add New Project
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
              Create a new SEO project and start optimizing your website's performance
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-8 sm:p-10 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Name Field */}
            <div className="space-y-3">
              <Label htmlFor="projectName" className="text-gray-800 font-semibold flex items-center gap-3 text-base">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                Project Name
              </Label>
              <Input
                id="projectName"
                type="text"
                value={formData.projectName}
                onChange={(e) => handleChange('projectName', e.target.value)}
                placeholder="Enter your project name"
                className="h-14 bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-xl text-base font-medium"
                required
              />
            </div>

            {/* URL Field */}
            <div className="space-y-3">
              <Label htmlFor="url" className="text-gray-800 font-semibold flex items-center gap-3 text-base">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-green-600" />
                </div>
                Website URL
              </Label>
              <Input
                id="url"
                type="url"
                value={formData.url}
                onChange={(e) => handleChange('url', e.target.value)}
                placeholder="https://example.com"
                className="h-14 bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-xl text-base font-medium"
                required
              />
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-gray-800 font-semibold flex items-center gap-3 text-base">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Describe your project and SEO goals..."
                className="min-h-[120px] bg-gray-50/50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-xl text-base resize-none"
                required
              />
            </div>

            {/* Employee Selection */}
            <div className="space-y-3">
              <Label htmlFor="employees" className="text-gray-800 font-semibold flex items-center gap-3 text-base">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-orange-600" />
                </div>
                Company Size
              </Label>
              <Select value={formData.employees} onValueChange={(value) => handleChange('employees', value)}>
                <SelectTrigger className="h-14 bg-gray-50/50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-xl text-base font-medium">
                  <SelectValue placeholder="Search and select employees..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
                  {employeeOptions.map((option) => (
                    <SelectItem key={option} value={option} className="text-base py-3 hover:bg-blue-50 focus:bg-blue-50">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating Project...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Add Project
                    <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Features Section */}
          <div className="pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                <span className="font-medium">SEO Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                <span className="font-medium">Performance Tracking</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm"></div>
                <span className="font-medium">Keyword Research</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
                <span className="font-medium">Competitor Analysis</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProjectForm;
