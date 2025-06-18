
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TeamMembersContent } from "@/components/TeamMembersContent";

const TeamMembers = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <TeamMembersContent />
      </div>
    </SidebarProvider>
  );
};

export default TeamMembers;
