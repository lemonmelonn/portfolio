"use client";

import { workExperience, education, extracurricular } from "@/lib/data";
import { BriefcaseIcon, GradIcon, BoltIcon } from "../icons";

function dateRange(start?: string, end?: string, single?: string) {
  if (single) return single;
  if (start && end) return `${start} — ${end}`;
  return start ?? end ?? "";
}

export default function Experience() {
  return (
    <div className="flex flex-col gap-10 animate-fade-in">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Experience</h1>
        <p className="text-sm text-spotify-textMuted">
          Professional roles, education, and the things I do on the side.
        </p>
      </div>

      {/* Work */}
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center gap-2 text-lg font-bold text-white">
          <BriefcaseIcon className="h-5 w-5 text-spotify-green" /> Work
        </h2>
        <ol className="relative flex flex-col gap-6 border-l border-white/10 pl-6">
          {workExperience.map((job) => (
            <li key={`${job.company}-${job.position}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-spotify-black bg-spotify-green" />
              <div className="rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-colors hover:bg-spotify-hover">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-white">{job.position}</h3>
                  <span className="text-xs font-medium text-spotify-textMuted">
                    {dateRange(job.start_date, job.end_date)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-spotify-green">
                  {job.company}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {job.description.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs leading-relaxed text-spotify-textMuted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-spotify-green" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center gap-2 text-lg font-bold text-white">
          <GradIcon className="h-5 w-5 text-spotify-green" /> Education
        </h2>
        <ol className="relative flex flex-col gap-6 border-l border-white/10 pl-6">
          {education.map((ed) => (
            <li key={ed.qualification} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-spotify-black bg-spotify-green" />
              <div className="rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-colors hover:bg-spotify-hover">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-white">{ed.qualification}</h3>
                  <span className="text-xs font-medium text-spotify-textMuted">
                    {dateRange(ed.start_date, ed.end_date, ed.date)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-spotify-green">
                  {ed.institution}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-spotify-textMuted">
                  {ed.cgpa && (
                    <span className="rounded bg-spotify-lightGray px-2 py-0.5">CGPA {ed.cgpa}</span>
                  )}
                  {ed.grade && (
                    <span className="rounded bg-spotify-lightGray px-2 py-0.5">{ed.grade}</span>
                  )}
                  {ed.achievement && (
                    <span className="rounded bg-spotify-green/15 px-2 py-0.5 font-semibold text-spotify-green">
                      {ed.achievement}
                    </span>
                  )}
                </div>
                {ed.relevant_modules && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ed.relevant_modules.map((m) => (
                      <span
                        key={m}
                        className="rounded bg-spotify-lightGray px-2 py-0.5 text-[10px] text-spotify-textMuted"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Extracurricular */}
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center gap-2 text-lg font-bold text-white">
          <BoltIcon className="h-5 w-5 text-spotify-green" /> Leadership & Community
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {extracurricular.map((x) => (
            <div
              key={x.position}
              className="rounded-lg border border-white/5 bg-spotify-darkGray p-5 transition-colors hover:bg-spotify-hover"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white">{x.position}</h3>
                <span className="text-xs font-medium text-spotify-textMuted">
                  {dateRange(x.start_date, x.end_date)}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {x.description.map((d, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-xs leading-relaxed text-spotify-textMuted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-spotify-green" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
