
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LayoutDashboard, FolderOpen, Search, Globe, Settings, LogOut, ChevronDown, Building2, User, BarChart3, Users } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
    isActive: true,
  },
  {
    title: "Manage Project",
    icon: FolderOpen,
    url: "/projects",
    hasSubmenu: true,
  },
];

const profileItems = [
  {
    title: "Company Profile",
    icon: Building2,
    url: "/company-profile",
  },
  {
    title: "User Profile",
    icon: User,
    url: "/user-profile",
  },
  {
    title: "Team Members",
    icon: Users,
    url: "/team-members",
  },
];

const toolsItems = [
  {
    title: "Check Keyword Ranking",
    icon: Search,
    url: "/keyword-ranking",
  },
  {
    title: "Google Index Meta",
    icon: Globe,
    url: "/google-index",
  },
  {
    title: "Website Analysis",
    icon: BarChart3,
    url: "/website-analysis",
  },
  {
    title: "Tech Detect",
    icon: Settings,
    url: "/tech-detect",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">SEO Detective</h1>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.isActive}
                    className="w-full mb-1 h-12 rounded-xl hover:bg-blue-50 data-[active=true]:bg-blue-600 data-[active=true]:text-white transition-all duration-200"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-4">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                      {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <div className="px-4 py-2 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Profile</h3>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="w-full mb-1 h-12 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-4">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <div className="px-4 py-2 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">List of Tools</h3>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="w-full mb-1 h-12 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-4">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="w-full h-12 rounded-xl hover:bg-red-50 text-gray-600 hover:text-red-600 transition-all duration-200">
              <a href="/logout" className="flex items-center gap-3 px-4">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
