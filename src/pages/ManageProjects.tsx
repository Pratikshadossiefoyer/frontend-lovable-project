
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ManageProjectsContent } from "@/components/ManageProjectsContent";

const ManageProjects = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <ManageProjectsContent />
      </div>
    </SidebarProvider>
  );
};

export default ManageProjects;
