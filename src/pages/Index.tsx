import { LinkedInNav } from "@/components/LinkedInNav";
import { LeftSidebar } from "@/components/LeftSidebar";
import { CenterFeed } from "@/components/CenterFeed";
import { RightSidebar } from "@/components/RightSidebar";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <LinkedInNav />

      {/* Three-column layout */}
      <main className="max-w-[1128px] mx-auto px-4 py-4">
        <div className="flex gap-4 items-start">
          <LeftSidebar />
          <CenterFeed />
          <RightSidebar />
        </div>
      </main>

      <Toaster />
    </div>
  );
};

export default Index;
