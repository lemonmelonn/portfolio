"use client";

import { useTab } from "./TabContext";
import { NAV_ITEMS } from "./nav";
import { profile, asset } from "@/lib/data";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GithubIcon,
} from "./icons";

export default function TopBar() {
  const { activeTab, setActiveTab } = useTab();
  const current = NAV_ITEMS.find((i) => i.id === activeTab);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 bg-black/40 px-4 md:px-6 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-3 min-w-0">
        <div className="hidden sm:flex gap-2">
          <span className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-spotify-textMuted">
            <ChevronLeftIcon className="w-4 h-4" />
          </span>
          <span className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-spotify-textMuted">
            <ChevronRightIcon className="w-4 h-4" />
          </span>
        </div>
        <h2 className="truncate text-base md:text-lg font-bold text-white">
          {current?.label}
        </h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" /> GitHub
        </a>
        <button
          onClick={() => setActiveTab("contact")}
          className="rounded-full bg-spotify-green hover:bg-spotify-greenHover px-4 sm:px-5 py-2 text-xs font-bold text-black transition-transform active:scale-95 shadow-lg shadow-spotify-green/20"
        >
          Get in Touch
        </button>
        <div className="flex items-center gap-2 rounded-full bg-black/60 py-1 pl-1 pr-3">
          <img
            src={asset("/assets/profile.jpeg")}
            alt={profile.name}
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-xs font-semibold text-white">
            {profile.name.split(" ")[0]}
          </span>
        </div>
      </div>
    </header>
  );
}
