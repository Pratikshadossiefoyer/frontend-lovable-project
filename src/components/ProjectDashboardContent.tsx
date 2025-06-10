import React, { useState } from 'react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Plus, 
  Users, 
  UserPlus, 
  BarChart3, 
  Search, 
  Eye, 
  RefreshCw, 
  ExternalLink,
  Clock,
  Globe,
  TrendingUp,
  FileText,
  Gauge,
  History,
  BarChart,
  PieChart,
  Play,
  Pause,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";

// Mock data - replace with your actual data
const crawledUrls = [
  {
    id: 1,
    url: "https://www.technolearn.in/",
    status: "200",
    h1: "Improving Operations Through...",
    index: "No",
    wordCount: 2151,
    canonical: "https://www.technolearn.in/per...",
    statusColor: "bg-green-500"
  },
  {
    id: 2,
    url: "https://www.technolearn.in/about.php",
    status: "200", 
    h1: "Navigate your next in Aerospace...",
    index: "No",
    wordCount: 1122,
    canonical: "https://www.technolearn.in/about.php",
    statusColor: "bg-green-500"
  },
  {
    id: 3,
    url: "https://www.technolearn.in/services/digital-se...",
    status: "200",
    h1: "Infosys Sustainability Services",
    index: "No", 
    wordCount: 1023,
    canonical: "https://www.technolearn.in/servic...",
    statusColor: "bg-green-500"
  },
  // Add more mock data as needed
];

const projectStats = [
  { title: "SSL", value: "Yes", color: "text-green-600" },
  { title: "Google Analytics", value: "Yes", color: "text-green-600" },
  { title: "Favicon", value: "✓", color: "text-green-600" },
  { title: "Broken Pages", value: "0", color: "text-green-600" },
  { title: "Total Page Links", value: "28", color: "text-blue-600" }
];

const socialMediaStats = [
  { platform: "Facebook", color: "bg-blue-600", count: "1.2K" },
  { platform: "Instagram", color: "bg-pink-500", count: "856" },
  { platform: "LinkedIn", color: "bg-blue-700", count: "2.1K" }
];

export function ProjectDashboardContent() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCrawling, setIsCrawling] = useState(false);

  const handleStartCrawling = () => {
    setIsCrawling(true);
    // Simulate crawling process
    setTimeout(() => {
      setIsCrawling(false);
    }, 5000);
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
          <span className="text-blue-600 hover:underline cursor-pointer">Manage Project</span>
          <span>/</span>
          <span>technolearn</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-9 px-4 border-gray-200 hover:bg-gray-50">
              <Plus className="w-4 h-4 mr-2" />
              Add Projects
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
        {/* Project Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-gray-900 p-1 rounded-lg">
            <TabsTrigger 
              value="dashboard" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              Project Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="keyword-ranking" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Keyword Ranking Tracker
            </TabsTrigger>
            <TabsTrigger 
              value="website-speed" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <Gauge className="w-4 h-4" />
              Website Speed
            </TabsTrigger>
            <TabsTrigger 
              value="history" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              History
            </TabsTrigger>
            <TabsTrigger 
              value="report" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Report
            </TabsTrigger>
            <TabsTrigger 
              value="compare-report" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 flex items-center gap-2"
            >
              <PieChart className="w-4 h-4" />
              Compare Report
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 mt-6">
            {/* Crawl Status and Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Crawl Control */}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">Crawl Status</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        Crawl Number: 1 | Crawl Time: 6/10/2025, 5:01:49 PM
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Urls Count: 70
                      </Badge>
                      <Button 
                        onClick={handleStartCrawling}
                        disabled={isCrawling}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isCrawling ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            Crawling...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Re-Crawl
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isCrawling ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Starting crawl, please wait...</p>
                    </div>
                  ) : (
                    <div className="text-sm text-orange-600">
                      Crawl on cooldown. Next attempt in: 11h 39m 37s
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projectStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{stat.title}</span>
                      <span className={`text-sm font-medium ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Social Media Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMediaStats.map((social, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 ${social.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{social.platform}</h3>
                    <p className="text-2xl font-bold text-gray-900">{social.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Crawled URLs Table */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Crawled URLs</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-white font-semibold">Fetching URL</TableHead>
                        <TableHead className="text-white font-semibold">Status</TableHead>
                        <TableHead className="text-white font-semibold">H1</TableHead>
                        <TableHead className="text-white font-semibold">Index</TableHead>
                        <TableHead className="text-white font-semibold">Word Count</TableHead>
                        <TableHead className="text-white font-semibold">Canonical</TableHead>
                        <TableHead className="text-white font-semibold text-center">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {crawledUrls.map((url) => (
                        <TableRow key={url.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <a 
                                href={url.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm max-w-xs truncate"
                              >
                                {url.url}
                              </a>
                              <ExternalLink className="w-3 h-3 text-gray-400" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${url.statusColor} text-white text-xs`}>
                              {url.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm max-w-xs truncate">{url.h1}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="text-xs">
                              {url.index}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm">{url.wordCount}</TableCell>
                          <TableCell className="text-sm max-w-xs truncate">{url.canonical}</TableCell>
                          <TableCell className="text-center">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="w-4 h-4 text-blue-600" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tab contents */}
          <TabsContent value="keyword-ranking" className="space-y-6 mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Keyword Ranking Tracker</h3>
                <p className="text-gray-600">Track your website's keyword positions across search engines.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="website-speed" className="space-y-6 mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <Gauge className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Website Speed Analysis</h3>
                <p className="text-gray-600">Analyze your website's performance and loading speed.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <History className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Crawl History</h3>
                <p className="text-gray-600">View your previous crawl results and historical data.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report" className="space-y-6 mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">SEO Reports</h3>
                <p className="text-gray-600">Generate comprehensive SEO reports for your website.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compare-report" className="space-y-6 mt-6">
            <Card>
              <CardContent className="p-8 text-center">
                <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Compare Reports</h3>
                <p className="text-gray-600">Compare SEO metrics across different time periods.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
