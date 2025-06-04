
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Zap, Mail, Globe, User, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    admin_email: '',
    admin_password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registration data:', formData);
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to your SEO tool dashboard!",
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
        <CardHeader className="text-center space-y-6 bg-gradient-to-br from-slate-50 to-gray-100 pb-8 pt-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
              Join SEO Master
            </CardTitle>
            <CardDescription className="text-gray-600 text-base sm:text-lg">
              Supercharge your website's performance
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-6 sm:p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-gray-500" />
                Business Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your business name"
                className="h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-lg"
                required
              />
            </div>

            {/* Domain Field */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-gray-700 font-medium flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-gray-500" />
                Domain
              </Label>
              <Input
                id="domain"
                name="domain"
                type="text"
                value={formData.domain}
                onChange={handleChange}
                placeholder="yourwebsite.com"
                className="h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-lg"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="admin_email" className="text-gray-700 font-medium flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gray-500" />
                Admin Email
              </Label>
              <Input
                id="admin_email"
                name="admin_email"
                type="email"
                value={formData.admin_email}
                onChange={handleChange}
                placeholder="admin@yourcompany.com"
                className="h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-lg"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="admin_password" className="text-gray-700 font-medium flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-gray-500" />
                Admin Password
              </Label>
              <div className="relative">
                <Input
                  id="admin_password"
                  name="admin_password"
                  type={showPassword ? "text" : "password"}
                  value={formData.admin_password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 rounded-lg pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Start SEO Journey
                </div>
              )}
            </Button>
          </form>

          {/* Features List */}
          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Analytics
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                SEO Insights
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Rank Tracking
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                24/7 Support
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
