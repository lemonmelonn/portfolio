"use client";

import { useTab } from "../TabContext";
import {
  profile,
  projects,
  workExperience,
  skills,
  competitions,
  asset,
} from "@/lib/data";
import { PlayIcon, CodeIcon, BriefcaseIcon, BoltIcon, SendIcon, TrophyIcon } from "../icons";
import type { TabId } from "../TabContext";
import type { ComponentType, SVGProps } from "react";

const stats = [
  { label: "Projects", value: `${projects.length}` },
  { label: "Past Roles", value: `${workExperience.length}` },
  { label: "Skills", value: `${skills.technical_skills_and_tools.length}+` },
  { label: "Awards", value: `${competitions.length}` },
];

const quickCards: {
  id: TabId;
  title: string;
  subtitle: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
}[] = [
  { id: "projects", title: "Projects", subtitle: "ML and DS builds", icon: CodeIcon, accent: "text-spotify-green bg-spotify-green/15" },
  { id: "experience", title: "Experience", subtitle: "Roles & milestones", icon: BriefcaseIcon, accent: "text-emerald-400 bg-emerald-500/15" },
  { id: "skills", title: "Skills & Stack", subtitle: "Tools I work with", icon: BoltIcon, accent: "text-cyan-400 bg-cyan-500/15" },
  { id: "contact", title: "Contact", subtitle: "Let's talk", icon: SendIcon, accent: "text-purple-400 bg-purple-500/15" },
];

export default function Overview() {
  const { setActiveTab } = useTab();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-emerald-900/50 via-spotify-darkGray to-spotify-black p-6 md:p-10 shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-spotify-green/10 blur-3xl" />
        <div className="relative z-10 flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-spotify-green/30 bg-spotify-green/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-spotify-green">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-spotify-green" />
              Now Playing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Hi, I&apos;m <span className="text-spotify-green">{profile.name.split(" ")[0]}</span>
            </h1>
            <p className="text-sm font-semibold text-white/90">{profile.headline}</p>
            <p className="text-sm md:text-base leading-relaxed text-spotify-textMuted">
              {profile.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab("projects")}
                className="flex items-center gap-3 rounded-full bg-spotify-green px-6 py-3 font-bold text-black shadow-xl shadow-spotify-green/20 transition-transform hover:bg-spotify-greenHover active:scale-95"
              >
                <PlayIcon className="w-4 h-4" /> Browse Projects
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className="rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl md:h-52 md:w-52">
            <img
              src={asset("/assets/profile.jpeg")}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-white/5 bg-spotify-darkGray p-5 text-center transition-colors hover:bg-spotify-hover"
          >
            <div className="text-3xl font-extrabold text-spotify-green">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-spotify-textMuted">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* Quick nav */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Jump back in</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickCards.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className="group flex items-center gap-4 rounded-lg border border-white/5 bg-spotify-darkGray p-4 text-left transition-all hover:bg-spotify-hover"
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-xl transition-transform group-hover:scale-105 ${c.accent}`}>
                  <Icon className="w-6 h-6" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-bold text-white">{c.title}</span>
                  <span className="truncate text-xs text-spotify-textMuted">{c.subtitle}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Featured projects */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white">Featured work</h2>
          <button
            onClick={() => setActiveTab("projects")}
            className="text-xs font-bold text-spotify-textMuted transition-colors hover:text-white"
          >
            See all
          </button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col gap-3 rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-all hover:bg-spotify-hover"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-spotify-green/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-spotify-green">
                {p.category}
              </span>
              <h3 className="font-bold text-white group-hover:text-spotify-green transition-colors">
                {p.name}
              </h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-spotify-textMuted">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards strip */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Recent wins</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {competitions.map((c) => (
            <div
              key={c.name}
              className="flex items-start gap-4 rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-colors hover:bg-spotify-hover"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-spotify-green/15 text-spotify-green">
                <TrophyIcon className="w-5 h-5" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-white">{c.name}</p>
                <span className="w-fit rounded-full bg-spotify-green/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-spotify-green">
                  {c.result}
                </span>
                <p className="mt-1 line-clamp-2 text-xs text-spotify-textMuted">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
