"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
} from "../icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: profile.socials.email, icon: MailIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — open the user's mail client with the message prefilled.
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Contact</h1>
        <p className="text-sm text-spotify-textMuted">
          Want to have a conversation? Drop a lines.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 flex flex-col gap-4 rounded-xl border border-white/5 bg-spotify-darkGray p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-spotify-textMuted">
              Name
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="rounded-md border border-white/5 bg-spotify-lightGray px-3 py-2.5 text-sm text-white placeholder:text-spotify-textMuted focus:outline-none focus:ring-1 focus:ring-spotify-green"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-xs font-semibold text-spotify-textMuted">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className="rounded-md border border-white/5 bg-spotify-lightGray px-3 py-2.5 text-sm text-white placeholder:text-spotify-textMuted focus:outline-none focus:ring-1 focus:ring-spotify-green"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-spotify-textMuted">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project or opportunity..."
              className="resize-none rounded-md border border-white/5 bg-spotify-lightGray px-3 py-2.5 text-sm text-white placeholder:text-spotify-textMuted focus:outline-none focus:ring-1 focus:ring-spotify-green"
            />
          </label>
          <button
            type="submit"
            className="flex w-fit items-center gap-2 rounded-full bg-spotify-green px-6 py-3 font-bold text-black shadow-lg shadow-spotify-green/20 transition-transform hover:bg-spotify-greenHover active:scale-95"
          >
            <SendIcon className="h-4 w-4" /> Send message
          </button>
          {sent && (
            <p className="text-xs font-medium text-spotify-green">
              Opening your mail client — thanks for reaching out!
            </p>
          )}
        </form>

        {/* Details */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-spotify-darkGray p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-spotify-textMuted">
              Reach me directly
            </h2>
            <a
              href={profile.socials.email}
              className="flex items-center gap-3 text-sm text-white transition-colors hover:text-spotify-green"
            >
              <MailIcon className="h-5 w-5 text-spotify-green" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-white">
              <PhoneIcon className="h-5 w-5 text-spotify-green" /> {profile.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-white">
              <MapPinIcon className="h-5 w-5 text-spotify-green" /> {profile.location}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-spotify-darkGray p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-spotify-textMuted">
              Find me online
            </h2>
            <div className="flex flex-col gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-md border border-white/5 bg-spotify-lightGray px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-spotify-green/40 hover:text-spotify-green"
                  >
                    <Icon className="h-5 w-5" /> {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
