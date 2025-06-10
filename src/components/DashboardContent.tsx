
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Users, UserPlus, Brain, Rocket, BarChart3, Bell, Search } from "lucide-react";
import { InviteTeamDialog } from "./InviteTeamDialog";
import { AddFreelancerDialog } from "./AddFreelancerDialog";
import { useNavigate } from "react-router-dom";

export function DashboardContent() {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/manage-projects');
  };

  return (
    <SidebarInset className="flex flex-col">
      {/* Top Navigation */}
      <header className="flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
          <span>/</span>
          <span>Dashboard</span>
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
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your SEO projects today.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleProjectsClick}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Total Projects</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 mb-1">2</div>
              <p className="text-xs text-blue-600">Active SEO campaigns</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-pink-700">Technology Detector</CardTitle>
              <Brain className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-900 mb-1">Advanced</div>
              <p className="text-xs text-pink-600">AI-powered analysis</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-700">Website Speed</CardTitle>
              <Rocket className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900 mb-1">Fast</div>
              <p className="text-xs text-orange-600">Optimized performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Features</h2>
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Explore All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Keyword Ranking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Track your website's keyword positions across search engines with real-time monitoring.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Check Rankings
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Google Index Meta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Analyze your website's indexing status and optimize meta tags for better visibility.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Analyze Meta
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">Tech Detect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Discover technologies used by websites and get insights for optimization.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Detect Tech
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

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
