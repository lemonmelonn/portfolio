"use client";

import { useTab } from "./TabContext";
import { NAV_ITEMS } from "./nav";
import { PlayIcon } from "./icons";

export default function Sidebar() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col gap-2 h-full">
      {/* Brand */}
      <div className="bg-spotify-black rounded-lg p-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-spotify-green flex items-center justify-center text-black shadow-lg shadow-spotify-green/20">
            <PlayIcon className="w-4 h-4 ml-0.5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            Portfolio Player
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-spotify-black rounded-lg p-3 flex-1 flex flex-col gap-1">
        <span className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-spotify-textMuted">
          Menu
        </span>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex items-center gap-4 px-3 py-2.5 rounded-md text-sm font-semibold transition-all ${
                isActive
                  ? "bg-spotify-lightGray text-white"
                  : "text-spotify-textMuted hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r bg-spotify-green" />
              )}
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive
                    ? "text-spotify-green"
                    : "group-hover:text-spotify-green"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}

        <div className="mt-auto rounded-lg bg-spotify-darkGray border border-white/5 p-4 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-spotify-textMuted">
            Status
          </span>
          <p className="text-xs text-spotify-textMuted leading-relaxed">
            Open to data science and machine learning opportunities.
          </p>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-spotify-green">
            <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
            Available now
          </span>
        </div>
      </nav>
    </aside>
  );
}
