
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Building2, 
  Globe, 
  CheckCircle2, 
  Edit3, 
  Save, 
  X 
} from "lucide-react";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    firstName: "Vivek",
    lastName: "Nangare",
    email: "viveknangare02@gmail.com",
    organizationName: "Growbizz",
    organizationDomain: "growbizz.com",
    organizationAdminEmail: "saurabhnangare01@gmail.com",
    isVerified: true
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
          User Profile
        </h1>
        <p className="text-slate-600">Manage your personal and organization information</p>
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center">
              <User className="w-6 h-6 mr-3" />
              User Profile
            </CardTitle>
            <div className="flex items-center gap-3">
              {userProfile.isVerified && (
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  Verified
                </Badge>
              )}
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
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Personal Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">First Name</Label>
                  <Input
                    value={userProfile.firstName}
                    disabled={!isEditing}
                    className={`${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                    onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value})}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Last Name</Label>
                  <Input
                    value={userProfile.lastName}
                    disabled={!isEditing}
                    className={`${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                    onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value})}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={userProfile.email}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                      onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Information */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Organization Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Organization Name</Label>
                  <Input
                    value={userProfile.organizationName}
                    disabled={!isEditing}
                    className={`${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                    onChange={(e) => setUserProfile({...userProfile, organizationName: e.target.value})}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Organization Domain</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={userProfile.organizationDomain}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                      onChange={(e) => setUserProfile({...userProfile, organizationDomain: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">Organization Admin Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      value={userProfile.organizationAdminEmail}
                      disabled={!isEditing}
                      className={`pl-10 ${!isEditing ? 'bg-slate-50 border-slate-200' : 'border-blue-300 focus:border-blue-500'} transition-colors`}
                      onChange={(e) => setUserProfile({...userProfile, organizationAdminEmail: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Status */}
          <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3" />
              <div>
                <h4 className="font-semibold text-emerald-800">Account Verified</h4>
                <p className="text-sm text-emerald-700">Your account has been successfully verified and is ready to use.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
