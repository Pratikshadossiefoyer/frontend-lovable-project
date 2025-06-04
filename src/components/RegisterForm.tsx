
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
    <div className="relative">
      {/* Background glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
      
      <Card className="relative bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Join SEO Master
          </CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            Supercharge your website's performance
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/90 font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                Business Name
              </Label>
              <div className="relative group">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/15"
                  required
                />
              </div>
            </div>

            {/* Domain Field */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-white/90 font-medium flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Domain
              </Label>
              <div className="relative group">
                <Input
                  id="domain"
                  name="domain"
                  type="text"
                  value={formData.domain}
                  onChange={handleChange}
                  placeholder="yourwebsite.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/15"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="admin_email" className="text-white/90 font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Admin Email
              </Label>
              <div className="relative group">
                <Input
                  id="admin_email"
                  name="admin_email"
                  type="email"
                  value={formData.admin_email}
                  onChange={handleChange}
                  placeholder="admin@yourcompany.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/15"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="admin_password" className="text-white/90 font-medium flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Admin Password
              </Label>
              <div className="relative group">
                <Input
                  id="admin_password"
                  name="admin_password"
                  type={showPassword ? "text" : "password"}
                  value={formData.admin_password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300 group-hover:bg-white/15 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Start SEO Journey
                </div>
              )}
            </Button>
          </form>

          {/* Features List */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Free Analytics
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                SEO Insights
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Rank Tracking
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
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
