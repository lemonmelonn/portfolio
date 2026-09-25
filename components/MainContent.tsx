"use client";

import { useTab } from "./TabContext";
import TopBar from "./TopBar";
import Overview from "./views/Overview";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Contact from "./views/Contact";

export default function MainContent() {
  const { activeTab } = useTab();

  return (
    <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg bg-gradient-to-b from-[#1f1f1f] to-spotify-black shadow-2xl">
      <TopBar />
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8">
        {activeTab === "overview" && <Overview />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "contact" && <Contact />}
        {/* Spacer so content clears the fixed player + mobile nav */}
        <div className="h-6 md:h-2" />
      </div>
    </main>
  );
}
