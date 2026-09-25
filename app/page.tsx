import { TabProvider } from "@/components/TabContext";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MobileNav from "@/components/MobileNav";
import PlayerBar from "@/components/PlayerBar";

export default function Home() {
  return (
    <TabProvider>
      <div className="flex h-screen flex-col gap-2 bg-black p-2">
        {/* Shell: sidebar + main content. Leaves room for the fixed player (72px)
            and, on mobile, the bottom nav (~52px). */}
        <div className="flex min-h-0 flex-1 gap-2 pb-[72px] md:pb-[80px]">
          <Sidebar />
          <MainContent />
        </div>
        <MobileNav />
        <PlayerBar />
      </div>
    </TabProvider>
  );
}
