
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Mail, 
  Globe, 
  Edit3, 
  Save, 
  X,
  MapPin,
  Phone,
  Users,
  Calendar
} from "lucide-react";

export function CompanyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [companyProfile, setCompanyProfile] = useState({
    companyName: "Pavan Vaishnav",
    domain: "pavanvaishnav.com",
    email: "pavangvaishnav@gmail.com",
    phone: "+91 9876543210",
    address: "Mumbai, Maharashtra, India",
    description: "Leading digital marketing and SEO solutions provider",
    employeeCount: "10-50",
    foundedYear: "2020"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form values if needed
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
          Company Profile
        </h1>
        <p className="text-slate-600">Manage your company information and settings</p>
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center">
              <Building2 className="w-6 h-6 mr-3" />
              Company Profile
            </CardTitle>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                Premium Plan
              </Badge>
              {!isEditing ? (
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setIsEditing(true)}
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={handleSave}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={handleCancel}
                    className="bg-red-500 hover:bg-red-600 text-white border-0"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Basic Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Company Name</Label>
                  <Input
                    value={companyProfile.companyName}
                    disabled={!isEditing}
                    className={`${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                    onChange={(e) => setCompanyProfile({...companyProfile, companyName: e.target.value})}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Domain</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={companyProfile.domain}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                      onChange={(e) => setCompanyProfile({...companyProfile, domain: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={companyProfile.email}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                      onChange={(e) => setCompanyProfile({...companyProfile, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={companyProfile.phone}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                      onChange={(e) => setCompanyProfile({...companyProfile, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Additional Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                    <Textarea
                      value={companyProfile.address}
                      disabled={!isEditing}
                      className={`pl-10 min-h-[80px] resize-none ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                      onChange={(e) => setCompanyProfile({...companyProfile, address: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Company Description</Label>
                  <Textarea
                    value={companyProfile.description}
                    disabled={!isEditing}
                    className={`min-h-[80px] resize-none ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                    onChange={(e) => setCompanyProfile({...companyProfile, description: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">Employee Count</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        value={companyProfile.employeeCount}
                        disabled={!isEditing}
                        className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                        onChange={(e) => setCompanyProfile({...companyProfile, employeeCount: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">Founded Year</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        value={companyProfile.foundedYear}
                        disabled={!isEditing}
                        className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-purple-300 focus:border-purple-500'} transition-colors`}
                        onChange={(e) => setCompanyProfile({...companyProfile, foundedYear: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium">Active Projects</p>
                  <p className="text-2xl font-bold text-blue-800">12</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-600 font-medium">Years in Business</p>
                  <p className="text-2xl font-bold text-emerald-800">5</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium">Team Members</p>
                  <p className="text-2xl font-bold text-purple-800">25</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
