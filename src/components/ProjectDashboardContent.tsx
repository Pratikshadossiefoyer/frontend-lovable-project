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
  AlertCircle,
  Activity,
  Shield,
  Link,
  Database,
  Zap
} from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";

// Mock data - replace with your actual data
const crawledUrls = [
  {
    id: 1,
    url: "https://www.technolearn.in/",
    status: "200",
    h1: "Improving Operations Through Digital Innovation",
    index: "No",
    wordCount: 2151,
    canonical: "https://www.technolearn.in/",
    statusColor: "bg-emerald-500"
  },
  {
    id: 2,
    url: "https://www.technolearn.in/about.php",
    status: "200", 
    h1: "Navigate your next in Aerospace Technology",
    index: "No",
    wordCount: 1122,
    canonical: "https://www.technolearn.in/about.php",
    statusColor: "bg-emerald-500"
  },
  {
    id: 3,
    url: "https://www.technolearn.in/services/digital-services",
    status: "200",
    h1: "Infosys Sustainability Services",
    index: "No", 
    wordCount: 1023,
    canonical: "https://www.technolearn.in/services/",
    statusColor: "bg-emerald-500"
  },
  {
    id: 4,
    url: "https://www.technolearn.in/contact",
    status: "404",
    h1: "Page Not Found",
    index: "No", 
    wordCount: 0,
    canonical: "N/A",
    statusColor: "bg-red-500"
  },
];

const projectStats = [
  { title: "SSL Certificate", value: "Secured", color: "text-emerald-600", icon: Shield, bgColor: "bg-emerald-50" },
  { title: "Google Analytics", value: "Connected", color: "text-blue-600", icon: BarChart3, bgColor: "bg-blue-50" },
  { title: "Favicon", value: "Present", color: "text-emerald-600", icon: CheckCircle2, bgColor: "bg-emerald-50" },
  { title: "Broken Pages", value: "1 Found", color: "text-red-600", icon: AlertCircle, bgColor: "bg-red-50" },
  { title: "Total Pages", value: "28 Links", color: "text-purple-600", icon: Link, bgColor: "bg-purple-50" }
];

const socialMediaStats = [
  { platform: "Facebook", color: "from-blue-600 to-blue-700", count: "1.2K", growth: "+12%" },
  { platform: "Instagram", color: "from-pink-500 to-pink-600", count: "856", growth: "+8%" },
  { platform: "LinkedIn", color: "from-blue-700 to-blue-800", count: "2.1K", growth: "+15%" }
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
    <SidebarInset className="flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Enhanced Top Navigation */}
      <header className="flex h-20 shrink-0 items-center gap-4 border-b border-slate-200/60 bg-white/80 backdrop-blur-sm px-8 shadow-sm">
        <SidebarTrigger className="-ml-1 hover:bg-slate-100 rounded-lg transition-colors" />
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium transition-colors">Home</span>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium transition-colors">Dashboard</span>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium transition-colors">Manage Project</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold">technolearn</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Button variant="outline" size="sm" className="h-10 px-5 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Projects
          </Button>
          <InviteTeamDialog>
            <Button variant="outline" size="sm" className="h-10 px-5 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm">
              <Users className="w-4 h-4 mr-2" />
              Invite Team
            </Button>
          </InviteTeamDialog>
          <AddFreelancerDialog>
            <Button size="sm" className="h-10 px-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Freelancer
            </Button>
          </AddFreelancerDialog>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="flex-1 p-8 space-y-8">
        {/* Enhanced Project Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-slate-900 p-1.5 rounded-xl shadow-lg">
            <TabsTrigger 
              value="dashboard" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="keyword-ranking" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Keywords</span>
            </TabsTrigger>
            <TabsTrigger 
              value="website-speed" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <Gauge className="w-4 h-4" />
              <span className="hidden sm:inline">Speed</span>
            </TabsTrigger>
            <TabsTrigger 
              value="history" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
            <TabsTrigger 
              value="report" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
            <TabsTrigger 
              value="compare-report" 
              className="text-white data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-lg flex items-center gap-2 rounded-lg transition-all duration-200 py-3"
            >
              <PieChart className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8 mt-8">
            {/* Enhanced Crawl Status and Stats */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Enhanced Crawl Control */}
              <Card className="xl:col-span-2 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        Crawl Analytics
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-blue-500" />
                          <span>Crawl #1</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-500" />
                          <span>6/10/2025, 5:01:49 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-semibold">
                        <Activity className="w-4 h-4 mr-2" />
                        70 URLs
                      </Badge>
                      <Button 
                        onClick={handleStartCrawling}
                        disabled={isCrawling}
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6"
                      >
                        {isCrawling ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            Crawling...
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Start Crawl
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isCrawling ? (
                    <div className="text-center py-12">
                      <div className="relative mx-auto mb-6">
                        <div className="w-20 h-20 border-4 border-emerald-200 rounded-full"></div>
                        <div className="w-20 h-20 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Crawling in Progress</h3>
                      <p className="text-slate-600">Analyzing your website structure and content...</p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-orange-800">Crawl Cooldown Active</p>
                          <p className="text-sm text-orange-600">Next crawl available in: 11h 39m 37s</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Enhanced Quick Stats */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Site Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projectStats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${stat.bgColor} transition-all hover:scale-105 cursor-pointer`}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <IconComponent className={`w-4 h-4 ${stat.color}`} />
                          </div>
                          <span className="text-sm font-medium text-slate-700">{stat.title}</span>
                        </div>
                        <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Social Media Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMediaStats.map((social, index) => (
                <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{social.platform}</h3>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{social.count}</p>
                      <p className="text-sm font-semibold text-emerald-600">{social.growth} this month</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Crawled URLs Table */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Crawled URLs
                    </CardTitle>
                    <p className="text-sm text-slate-600 mt-1">Detailed analysis of your website pages</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                      <Search className="w-4 h-4 mr-2" />
                      Search URLs
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-900 hover:to-slate-800">
                        <TableHead className="text-white font-bold text-sm">URL</TableHead>
                        <TableHead className="text-white font-bold text-sm">Status</TableHead>
                        <TableHead className="text-white font-bold text-sm">H1 Tag</TableHead>
                        <TableHead className="text-white font-bold text-sm">Indexed</TableHead>
                        <TableHead className="text-white font-bold text-sm">Words</TableHead>
                        <TableHead className="text-white font-bold text-sm">Canonical</TableHead>
                        <TableHead className="text-white font-bold text-sm text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {crawledUrls.map((url) => (
                        <TableRow key={url.id} className="hover:bg-slate-50/80 transition-colors">
                          <TableCell className="max-w-xs">
                            <div className="flex items-center gap-2">
                              <a 
                                href={url.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 text-sm truncate font-medium transition-colors"
                              >
                                {url.url}
                              </a>
                              <ExternalLink className="w-3 h-3 text-slate-400 hover:text-slate-600 transition-colors" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${url.statusColor} text-white text-xs font-semibold px-3 py-1`}>
                              {url.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <span className="text-sm text-slate-700 truncate block font-medium">{url.h1}</span>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-700">
                              {url.index}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-semibold text-slate-800">{url.wordCount.toLocaleString()}</span>
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <span className="text-sm text-slate-600 truncate block">{url.canonical}</span>
                          </TableCell>
                          <TableCell className="text-center">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50">
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

          {/* Other enhanced tab contents */}
          <TabsContent value="keyword-ranking" className="space-y-8 mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Keyword Ranking Tracker</h3>
                <p className="text-slate-600 text-lg">Track your website's keyword positions across search engines and monitor your SEO performance.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="website-speed" className="space-y-8 mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Gauge className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Website Speed Analysis</h3>
                <p className="text-slate-600 text-lg">Analyze your website's performance and loading speed across different devices and locations.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-8 mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <History className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Crawl History</h3>
                <p className="text-slate-600 text-lg">View your previous crawl results and historical data to track your website's evolution.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="report" className="space-y-8 mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">SEO Reports</h3>
                <p className="text-slate-600 text-lg">Generate comprehensive SEO reports with actionable insights and recommendations.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compare-report" className="space-y-8 mt-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <PieChart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Compare Reports</h3>
                <p className="text-slate-600 text-lg">Compare SEO metrics across different time periods and identify trends and improvements.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced Footer */}
        <footer className="pt-8 border-t border-slate-200/60">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <p className="font-medium">© 2025 SEO Detective - Professional SEO Analytics Platform</p>
            <p className="font-medium">Powered by <span className="text-blue-600 font-semibold">GrowBizz</span></p>
          </div>
        </footer>
      </main>
    </SidebarInset>
  );
}
