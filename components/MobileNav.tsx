"use client";

import { useTab } from "./TabContext";
import { NAV_ITEMS } from "./nav";

export default function MobileNav() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <nav className="md:hidden fixed bottom-[72px] left-0 right-0 z-30 border-t border-white/5 bg-spotify-black/95 backdrop-blur-md">
      <div className="flex items-stretch justify-around">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition-colors ${
                isActive ? "text-spotify-green" : "text-spotify-textMuted"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.shortLabel}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
