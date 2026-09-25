"use client";

import { skillCategories } from "@/lib/data";
import { BoltIcon } from "../icons";

export default function Skills() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Skills &amp; Stack</h1>
        <p className="text-sm text-spotify-textMuted">
          The languages, frameworks, and tools on heavy rotation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <section
            key={cat.title}
            className="flex flex-col gap-4 rounded-lg border border-white/5 bg-spotify-darkGray p-6 transition-colors hover:bg-spotify-hover"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-spotify-green/15 text-spotify-green">
                <BoltIcon className="h-4 w-4" />
              </span>
              <h2 className="text-base font-bold text-white">{cat.title}</h2>
              <span className="ml-auto text-xs text-spotify-textMuted">
                {cat.items.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/5 bg-spotify-lightGray px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-spotify-green/40 hover:text-spotify-green"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
