
import React from 'react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, UserPlus, Edit, Trash2, ExternalLink, Eye } from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";

const projects = [
  {
    id: 1,
    name: "TCS",
    targetUrl: "https://www.tcs.com/",
    description: "test website",
    teamMembers: ["saurabhnangare01@gmail.com"],
    status: "Active"
  },
  {
    id: 2,
    name: "React",
    targetUrl: "https://react.dev/",
    description: "test",
    teamMembers: [],
    status: "Active"
  }
];

export function ManageProjectsContent() {
  return (
    <SidebarInset className="flex flex-col">
      {/* Top Navigation */}
      <header className="flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-blue-600 hover:underline cursor-pointer">Dashboard</span>
          <span>/</span>
          <span>Manage Projects</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-9 px-4 border-gray-200 hover:bg-gray-50">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
            <InviteTeamDialog>
              <Button variant="outline" size="sm" className="h-9 px-4 border-gray-200 hover:bg-gray-50">
                <Users className="w-4 h-4 mr-2" />
                Invite Team
              </Button>
            </InviteTeamDialog>
            <AddFreelancerDialog>
              <Button size="sm" className="h-9 px-4 bg-blue-600 hover:bg-blue-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Freelancer
              </Button>
            </AddFreelancerDialog>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Projects</h1>
            <p className="text-gray-600">Monitor and manage all your SEO projects in one place</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 h-11 px-6">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </div>

        {/* Projects Table */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">All Projects</h2>
            <p className="text-sm text-gray-600">Manage your active SEO campaigns</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold text-gray-900">Sr No.</TableHead>
                  <TableHead className="font-semibold text-gray-900">Project Name</TableHead>
                  <TableHead className="font-semibold text-gray-900">Target URL</TableHead>
                  <TableHead className="font-semibold text-gray-900">Description</TableHead>
                  <TableHead className="font-semibold text-gray-900">Team Members</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium">{project.id}</TableCell>
                    <TableCell>
                      <div className="font-medium text-gray-900">{project.name}</div>
                    </TableCell>
                    <TableCell>
                      <a 
                        href={project.targetUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                      >
                        {project.targetUrl}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700">{project.description}</span>
                    </TableCell>
                    <TableCell>
                      {project.teamMembers.length > 0 ? (
                        <div className="space-y-1">
                          {project.teamMembers.map((member, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm">No team members</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={project.status === 'Active' ? 'default' : 'secondary'}
                        className={project.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2025 SEO Detective - SEO TOOL.</p>
            <p>Powered by GrowBizz</p>
          </div>
        </footer>
      </main>
    </SidebarInset>
  );
}
