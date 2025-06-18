
import React, { useState } from 'react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Search, FolderOpen, Users, Calendar, Filter, Download, UserPlus, Eye, Edit, Trash2, Building2 } from "lucide-react";

// Sample projects with team members data
const projectsData = [
  {
    id: 1,
    name: "Test",
    teamMembers: [
      { email: "nangaresaurabh18@gmail.com", name: "Saurabh Nangare", role: "Project Manager", avatar: "SN" },
      { email: "user02@gmail.com", name: "User Two", role: "Developer", avatar: "U2" }
    ]
  },
  {
    id: 2,
    name: "Inora",
    teamMembers: [
      { email: "viveknangare02@gmail.com", name: "Vivek Nangare", role: "Developer", avatar: "VN" },
      { email: "freelancer7@gmail.com", name: "Freelancer User", role: "Freelancer", avatar: "FU" },
      { email: "teammember6@gmail.com", name: "Team Member", role: "SEO Specialist", avatar: "TM" }
    ]
  },
  {
    id: 3,
    name: "Technolearn",
    teamMembers: [
      { email: "freelancer7@gmail.com", name: "Freelancer User", role: "Freelancer", avatar: "FU" },
      { email: "freelancer8@gmail.com", name: "Freelancer Eight", role: "Freelancer", avatar: "F8" },
      { email: "freelancer12@gmail.com", name: "Freelancer Twelve", role: "Content Writer", avatar: "F12" },
      { email: "user02@gmail.com", name: "User Two", role: "Developer", avatar: "U2" }
    ]
  },
  {
    id: 4,
    name: "TCS",
    teamMembers: [
      { email: "viveknangare02@gmail.com", name: "Vivek Nangare", role: "Developer", avatar: "VN" },
      { email: "freelancer12@gmail.com", name: "Freelancer Twelve", role: "Content Writer", avatar: "F12" },
      { email: "teammember6@gmail.com", name: "Team Member", role: "SEO Specialist", avatar: "TM" }
    ]
  },
  {
    id: 5,
    name: "Growbizz Server",
    teamMembers: [
      { email: "nangaresaurabh18@gmail.com", name: "Saurabh Nangare", role: "Project Manager", avatar: "SN" }
    ]
  },
  {
    id: 6,
    name: "React",
    teamMembers: [
      { email: "viveknangare02@gmail.com", name: "Vivek Nangare", role: "Developer", avatar: "VN" },
      { email: "teammember6@gmail.com", name: "Team Member", role: "SEO Specialist", avatar: "TM" }
    ]
  },
  {
    id: 7,
    name: "Top",
    teamMembers: [
      { email: "freelancer7@gmail.com", name: "Freelancer User", role: "Freelancer", avatar: "FU" },
      { email: "freelancer9@gmail.com", name: "Freelancer Nine", role: "Designer", avatar: "F9" }
    ]
  },
  {
    id: 8,
    name: "Infosys",
    teamMembers: [
      { email: "nangaresaurabh18@gmail.com", name: "Saurabh Nangare", role: "Project Manager", avatar: "SN" },
      { email: "viveknangare02@gmail.com", name: "Vivek Nangare", role: "Developer", avatar: "VN" }
    ]
  }
];

const stats = [
  {
    title: "Total Projects",
    value: projectsData.length.toString(),
    icon: FolderOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+2 this month"
  },
  {
    title: "Active Members",
    value: "15",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+3 this week"
  },
  {
    title: "Teams",
    value: "8",
    icon: Building2,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    change: "+1 this month"
  },
  {
    title: "Avg Team Size",
    value: "2.3",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    change: "Optimal size"
  }
];

export function TeamMembersContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.teamMembers.some(member => 
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Project Manager':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Developer':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'SEO Specialist':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Freelancer':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Designer':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Content Writer':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
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
          <span>Project Teams</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="h-9 px-4 border-gray-200 hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="h-9 px-4 bg-blue-600 hover:bg-blue-700">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Teams</h1>
            <p className="text-gray-600">Manage project teams and member assignments across all projects</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search projects or team members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects and Teams Table */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Project Teams ({filteredProjects.length} Projects)
            </CardTitle>
            <p className="text-sm text-gray-600">View all projects and their assigned team members</p>
          </CardHeader>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold text-gray-900 w-16">Sr. No.</TableHead>
                  <TableHead className="font-semibold text-gray-900 min-w-[200px]">Project Name</TableHead>  
                  <TableHead className="font-semibold text-gray-900">Team Members</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-center w-32">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project, index) => (
                  <TableRow key={project.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell className="font-medium text-gray-900">
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{project.name}</div>
                          <div className="text-sm text-gray-500">{project.teamMembers.length} members</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-3">
                        {project.teamMembers.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-white text-gray-700 text-xs font-medium border">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-sm truncate">{member.name}</div>
                              <div className="text-xs text-gray-500 truncate">{member.email}</div>
                            </div>
                            <Badge 
                              variant="outline" 
                              className={`text-xs font-medium ${getRoleBadgeColor(member.role)}`}
                            >
                              {member.role}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
                          title="Edit Team"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                          title="Remove Project"
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
