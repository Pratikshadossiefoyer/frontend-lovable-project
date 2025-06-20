
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Users, UserPlus, Edit, Trash2, ExternalLink, Eye, Globe, Calendar, FolderOpen } from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";

const projects = [
  {
    id: 1,
    name: "Test",
    targetUrl: "https://test.com/",
    description: "test website",
    teamMembers: [
      "nangaresaurabh18@gmail.com",
      "nangarepratiksha18@gmail.com", 
      "freelancer9@gmail.com"
    ],
    status: "Active"
  },
  {
    id: 2,
    name: "Inora",
    targetUrl: "https://www.inora.in/",
    description: "test",
    teamMembers: [
      "viveknangare02@gmail.com",
      "freelancer7@gmail.com",
      "teammember6@gmail.com"
    ],
    status: "Active"
  },
  {
    id: 3,
    name: "Technolearn",
    targetUrl: "https://technolearn.in/",
    description: "test",
    teamMembers: [
      "freelancer7@gmail.com",
      "freelancer8@gmail.com",
      "freelancer12@gmail.com",
      "user02@gmail.com"
    ],
    status: "In Progress"
  },
  {
    id: 4,
    name: "TCS",
    targetUrl: "https://www.tcs.com/",
    description: "testing tcs website",
    teamMembers: [
      "viveknangare02@gmail.com",
      "freelancer12@gmail.com",
      "teammember6@gmail.com"
    ],
    status: "Active"
  }
];

const stats = [
  {
    title: "Total Projects",
    value: projects.length.toString(),
    icon: FolderOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+2 this month"
  },
  {
    title: "Active Projects",
    value: projects.filter(p => p.status === 'Active').length.toString(),
    icon: Calendar,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+1 this week"
  },
  {
    title: "Team Members",
    value: "15",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    change: "+3 this month"
  },
  {
    title: "Websites",
    value: projects.length.toString(),
    icon: Globe,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    change: "All active"
  }
];

export function ManageProjectsContent() {
  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.slice(0, 2).toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
      <main className="flex-1 p-6 bg-gray-50 space-y-6">
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Projects Table */}
        <Card className="border-0 shadow-sm overflow-hidden bg-white">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">All Projects</h2>
                <p className="text-sm text-gray-600 mt-1">Manage your active SEO campaigns and team assignments</p>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                {projects.length} Projects
              </Badge>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-b border-gray-200">
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm">Sr No.</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm">Project Details</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm">Target URL</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm">Team Members</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 text-sm text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100">
                    <TableCell className="font-semibold text-gray-900 py-6 px-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {project.id}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900 text-base">{project.name}</div>
                        <div className="text-sm text-gray-600">{project.description}</div>
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <a 
                        href={project.targetUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <div className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm font-medium truncate max-w-[200px]">
                            {project.targetUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </span>
                          <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                        </div>
                      </a>
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {project.teamMembers.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="w-8 h-8 border-2 border-white shadow-sm">
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-medium">
                                {getInitials(member)}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.teamMembers.length > 3 && (
                            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600">
                              +{project.teamMembers.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-gray-600 ml-2 font-medium">
                          {project.teamMembers.length} member{project.teamMembers.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <Badge 
                        variant="outline" 
                        className={`font-medium text-xs px-3 py-1 ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          title="View Project"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 p-0 hover:bg-green-50 hover:text-green-600 transition-colors"
                          title="Edit Project"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 p-0 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete Project"
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
