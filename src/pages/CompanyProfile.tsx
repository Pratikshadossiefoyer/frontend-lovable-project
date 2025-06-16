
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CompanyProfile } from "@/components/CompanyProfile";

const CompanyProfilePage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-blue-600 hover:underline cursor-pointer">Home</span>
              <span>/</span>
              <span>Company Profile</span>
            </div>
          </header>
          <main className="flex-1">
            <CompanyProfile />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CompanyProfilePage;
