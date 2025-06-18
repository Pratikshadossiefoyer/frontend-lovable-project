
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
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar";
import { Search, Users, Mail, Calendar, Filter, Download, UserPlus, Eye, Edit, Trash2 } from "lucide-react";

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Saurabh Nangare",
    email: "saurabhnangare01@gmail.com",
    role: "Project Manager",
    joinDate: "2024-01-15",
    status: "Active",
    projects: ["TCS", "React", "Growbizz Server"],
    avatar: "SN",
    totalProjects: 3
  },
  {
    id: 2,
    name: "Pratiksha Nangare",
    email: "nangarepratiksaha18@gmail.com",
    role: "SEO Specialist",
    joinDate: "2024-02-10",
    status: "Active",
    projects: ["TCS", "Infosys"],
    avatar: "PN",
    totalProjects: 2
  },
  {
    id: 3,
    name: "Vivek Nangare",
    email: "viveknangare02@gmail.com",
    role: "Developer",
    joinDate: "2024-01-20",
    status: "Active",
    projects: ["React", "TCS", "Technolearn", "top"],
    avatar: "VN",
    totalProjects: 4
  },
  {
    id: 4,
    name: "Team Member",
    email: "teammember6@gmail.com",
    role: "Freelancer",
    joinDate: "2024-03-05",
    status: "Active",
    projects: ["Technolearn", "Growbizz"],
    avatar: "TM",
    totalProjects: 2
  },
  {
    id: 5,
    name: "Freelancer User",
    email: "freelancer7@gmail.com",
    role: "Freelancer",
    joinDate: "2024-02-28",
    status: "Active",
    projects: ["top", "Infosys"],
    avatar: "FU",
    totalProjects: 2
  }
];

const stats = [
  {
    title: "Total Members",
    value: "12",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    change: "+2 this month"
  },
  {
    title: "Active Projects",
    value: "9",
    icon: Calendar,
    color: "text-green-600",
    bgColor: "bg-green-50",
    change: "+1 this week"
  },
  {
    title: "Freelancers",
    value: "5",
    icon: UserPlus,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    change: "+3 this month"
  },
  {
    title: "Team Leads",
    value: "3",
    icon: Mail,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    change: "No change"
  }
];

export function TeamMembersContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

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
          <span>Team Members</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="h-9 px-4 border-gray-200 hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="h-9 px-4 bg-blue-600 hover:bg-blue-700">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Members</h1>
            <p className="text-gray-600">Manage your team members and their project associations</p>
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
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="All">All Roles</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="SEO Specialist">SEO Specialist</option>
                  <option value="Developer">Developer</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
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

        {/* Team Members Table */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Team Members ({filteredMembers.length})
            </CardTitle>
            <p className="text-sm text-gray-600">View and manage all team members and their project assignments</p>
          </CardHeader>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold text-gray-900">Member</TableHead>
                  <TableHead className="font-semibold text-gray-900">Role</TableHead>
                  <TableHead className="font-semibold text-gray-900">Join Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Projects</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={
                          member.role === 'Project Manager' ? 'bg-blue-100 text-blue-800' :
                          member.role === 'SEO Specialist' ? 'bg-green-100 text-green-800' :
                          member.role === 'Developer' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }
                      >
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-700">{member.joinDate}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {member.projects.slice(0, 3).map((project, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {project}
                          </Badge>
                        ))}
                        {member.projects.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.projects.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Total: {member.totalProjects} projects
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={member.status === 'Active' ? 'default' : 'secondary'}
                        className={member.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {member.status}
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
