"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { SearchIcon, ExternalIcon, GithubIcon, PlayIcon } from "../icons";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Projects</h1>
        <p className="text-sm text-spotify-textMuted">
          A playlist of projects I previously worked on.
        </p>
      </div>


      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-spotify-textMuted">
          No tracks match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col justify-between gap-4 rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-all hover:bg-spotify-hover"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-spotify-green/15 text-spotify-green">
                  <PlayIcon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-spotify-green/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-spotify-green">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-spotify-textMuted">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white transition-colors group-hover:text-spotify-green">
                    {p.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-spotify-textMuted">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 border-t border-white/5 pt-3">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-spotify-lightGray px-2 py-0.5 text-[10px] font-medium text-spotify-textMuted"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto flex items-center gap-1.5 text-xs font-bold text-white transition-colors hover:text-spotify-green"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Repo</span>
                  <ExternalIcon className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
