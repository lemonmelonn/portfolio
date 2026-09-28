import { TabProvider } from "@/components/TabContext";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <TabProvider>
      <div className="flex h-screen flex-col gap-2 bg-black p-2">
        {/* Shell: sidebar + main content. Leaves room for the mobile bottom nav (~52px). */}
        <div className="flex min-h-0 flex-1 gap-2 pb-[52px] md:pb-0">
          <Sidebar />
          <MainContent />
        </div>
        <MobileNav />
      </div>
    </TabProvider>
  );
}
