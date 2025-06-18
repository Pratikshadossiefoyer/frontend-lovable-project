
import React, { useState } from 'react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, FolderOpen, Users, Calendar, Filter, Download, UserPlus, Eye, Edit, Trash2, Building2, ChevronDown, ChevronUp } from "lucide-react";

// Sample projects with team members data
const projectsData = [
  {
    id: 1,
    name: "Test",
    description: "Test project for development",
    status: "Active",
    teamMembers: [
      { email: "nangaresaurabh18@gmail.com", firstName: "Saurabh", lastName: "Nangare", role: "Project Manager", avatar: "SN", status: "Active" },
      { email: "user02@gmail.com", firstName: "User", lastName: "Two", role: "Developer", avatar: "U2", status: "Active" }
    ]
  },
  {
    id: 2,
    name: "Inora",
    description: "Enterprise management system",
    status: "Active",
    teamMembers: [
      { email: "viveknangare02@gmail.com", firstName: "Vivek", lastName: "Nangare", role: "Developer", avatar: "VN", status: "Active" },
      { email: "freelancer7@gmail.com", firstName: "Freelancer", lastName: "User", role: "Freelancer", avatar: "FU", status: "Active" },
      { email: "teammember6@gmail.com", firstName: "Team", lastName: "Member", role: "SEO Specialist", avatar: "TM", status: "Active" }
    ]
  },
  {
    id: 3,
    name: "Technolearn",
    description: "E-learning platform development",
    status: "In Progress",
    teamMembers: [
      { email: "freelancer7@gmail.com", firstName: "Freelancer", lastName: "User", role: "Freelancer", avatar: "FU", status: "Active" },
      { email: "freelancer8@gmail.com", firstName: "Freelancer", lastName: "Eight", role: "Freelancer", avatar: "F8", status: "Active" },
      { email: "freelancer12@gmail.com", firstName: "Freelancer", lastName: "Twelve", role: "Content Writer", avatar: "F12", status: "Active" },
      { email: "user02@gmail.com", firstName: "User", lastName: "Two", role: "Developer", avatar: "U2", status: "Active" }
    ]
  },
  {
    id: 4,
    name: "TCS",
    description: "Corporate solutions project",
    status: "Active",
    teamMembers: [
      { email: "viveknangare02@gmail.com", firstName: "Vivek", lastName: "Nangare", role: "Developer", avatar: "VN", status: "Active" },
      { email: "freelancer12@gmail.com", firstName: "Freelancer", lastName: "Twelve", role: "Content Writer", avatar: "F12", status: "Active" },
      { email: "teammember6@gmail.com", firstName: "Team", lastName: "Member", role: "SEO Specialist", avatar: "TM", status: "Active" }
    ]
  },
  {
    id: 5,
    name: "Growbizz Server",
    description: "Server infrastructure project",
    status: "Completed",
    teamMembers: [
      { email: "nangaresaurabh18@gmail.com", firstName: "Saurabh", lastName: "Nangare", role: "Project Manager", avatar: "SN", status: "Active" }
    ]
  },
  {
    id: 6,
    name: "React",
    description: "React application development",
    status: "Active",
    teamMembers: [
      { email: "viveknangare02@gmail.com", firstName: "Vivek", lastName: "Nangare", role: "Developer", avatar: "VN", status: "Active" },
      { email: "teammember6@gmail.com", firstName: "Team", lastName: "Member", role: "SEO Specialist", avatar: "TM", status: "Active" }
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
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const filteredProjects = projectsData.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.teamMembers.some(member => 
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleProjectExpansion = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

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

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'On Hold':
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
      <main className="flex-1 p-6 bg-gray-50 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Teams</h1>
            <p className="text-gray-600">View all projects and their assigned team members</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
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

        {/* Search Bar */}
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search members by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200 h-11 px-4">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                      <FolderOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-1">{project.name}</CardTitle>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={`${getStatusBadgeColor(project.status)} font-medium`}>
                      {project.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">Total Members - {project.teamMembers.length}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="h-9 px-3 text-blue-600 hover:bg-blue-50"
                    >
                      {expandedProjects.has(project.id) ? "Hide Details" : "Show Details"}
                      {expandedProjects.has(project.id) ? 
                        <ChevronUp className="w-4 h-4 ml-2" /> : 
                        <ChevronDown className="w-4 h-4 ml-2" />
                      }
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {expandedProjects.has(project.id) && (
                <CardContent className="pt-0">
                  <div className="border-t pt-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <div>Email</div>
                        <div>First Name</div>
                        <div>Last Name</div>
                        <div>Role</div>
                        <div>Status</div>
                      </div>
                      {project.teamMembers.map((member, index) => (
                        <div key={index} className="grid grid-cols-5 gap-4 items-center p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-medium">
                                {member.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-sm text-gray-900 font-medium truncate">{member.email}</div>
                          </div>
                          <div className="text-sm text-gray-900 font-medium">{member.firstName}</div>
                          <div className="text-sm text-gray-900 font-medium">{member.lastName}</div>
                          <div>
                            <Badge variant="outline" className={`text-xs font-medium ${getRoleBadgeColor(member.role)}`}>
                              {member.role}
                            </Badge>
                          </div>
                          <div>
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 text-xs font-medium">
                              {member.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <p>© 2025 SEO Detective - SEO TOOL.</p>
            <p>Powered by GrowBizz</p>
          </div>
        </footer>
      </main>
    </SidebarInset>
  );
}
