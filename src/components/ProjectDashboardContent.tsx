import React, { useState } from 'react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Users, 
  UserPlus, 
  BarChart3, 
  TrendingUp,
  Gauge,
  History,
  FileText,
  PieChart
} from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";
import { CrawlStatusCard } from "./CrawlStatusCard";
import { SiteHealthCard } from "./SiteHealthCard";
import { SocialMediaStats } from "./SocialMediaStats";
import { CrawledUrlsTable } from "./CrawledUrlsTable";
import { KeywordRankingContent } from "./KeywordRankingContent";
import { WebsiteSpeedContent } from "./WebsiteSpeedContent";
import { HistoryContent } from "./HistoryContent";
import { ProjectTabsPlaceholder } from "./ProjectTabsPlaceholder";
import { ProfessionalFooter } from "./ProfessionalFooter";

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
              <CrawlStatusCard 
                isCrawling={isCrawling} 
                onStartCrawling={handleStartCrawling} 
              />
              <SiteHealthCard />
            </div>

            {/* Enhanced Social Media Stats */}
            <SocialMediaStats />

            {/* Enhanced Crawled URLs Table */}
            <CrawledUrlsTable />
          </TabsContent>

          <TabsContent value="keyword-ranking" className="space-y-8 mt-8">
            <KeywordRankingContent />
          </TabsContent>

          <TabsContent value="website-speed" className="space-y-8 mt-8">
            <WebsiteSpeedContent />
          </TabsContent>

          <TabsContent value="history" className="space-y-8 mt-8">
            <HistoryContent />
          </TabsContent>

          <TabsContent value="report" className="space-y-8 mt-8">
            <ProjectTabsPlaceholder 
              icon="report"
              title="SEO Reports"
              description="Generate comprehensive SEO reports with actionable insights and recommendations."
            />
          </TabsContent>

          <TabsContent value="compare-report" className="space-y-8 mt-8">
            <ProjectTabsPlaceholder 
              icon="compare"
              title="Compare Reports"
              description="Compare SEO metrics across different time periods and identify trends and improvements."
            />
          </TabsContent>
        </Tabs>

        {/* Enhanced Footer */}
        <ProfessionalFooter />
      </main>
    </SidebarInset>
  );
}
