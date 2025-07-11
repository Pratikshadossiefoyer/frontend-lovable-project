
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AddProject from "./pages/AddProject";
import Dashboard from "./pages/Dashboard";
import ManageProjects from "./pages/ManageProjects";
import ProjectDashboard from "./pages/ProjectDashboard";
import CompanyProfile from "./pages/CompanyProfile";
import UserProfile from "./pages/UserProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WebsiteAnalysis from "./pages/WebsiteAnalysis";
import TeamMembers from "./pages/TeamMembers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
          <Route path="/project-dashboard" element={<ProjectDashboard />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/website-analysis" element={<WebsiteAnalysis />} />
          <Route path="/team-members" element={<TeamMembers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
