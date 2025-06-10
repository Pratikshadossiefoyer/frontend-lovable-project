
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ProjectDashboardContent } from "@/components/ProjectDashboardContent";

const ProjectDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <ProjectDashboardContent />
      </div>
    </SidebarProvider>
  );
};

export default ProjectDashboard;
