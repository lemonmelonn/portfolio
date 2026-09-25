"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  ShuffleIcon,
  RepeatIcon,
  VolumeIcon,
  HeartIcon,
} from "./icons";

const TRACK_TITLE = "Portfolio Experience";
const TRACK_LENGTH = 214; // seconds (3:34)

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PlayerBar() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(42);
  const [volume, setVolume] = useState(70);
  const [liked, setLiked] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setProgress((p) => (p >= TRACK_LENGTH ? 0 : p + 1));
      }, 1000);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const pct = (progress / TRACK_LENGTH) * 100;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 h-[72px] bg-spotify-black border-t border-white/10 px-3 md:px-4 flex items-center gap-3">
      {/* Track info */}
      <div className="flex items-center gap-3 w-1/3 min-w-0">
        <div className="w-12 h-12 rounded bg-gradient-to-br from-spotify-green/40 to-spotify-lightGray flex items-center justify-center shrink-0">
          <img
            src="/assets/tech.jpg"
            alt="Now playing"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="min-w-0 hidden sm:block">
          <p className="truncate text-sm font-semibold text-white">
            {TRACK_TITLE}
          </p>
          <p className="truncate text-xs text-spotify-textMuted">
            {profile.name}
          </p>
        </div>
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Like"
          className={`ml-1 shrink-0 transition-colors ${
            liked ? "text-spotify-green" : "text-spotify-textMuted hover:text-white"
          }`}
        >
          <HeartIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-1 flex-col items-center gap-1">
        <div className="flex items-center gap-4 md:gap-5">
          <button className="text-spotify-textMuted hover:text-white transition-colors hidden sm:block">
            <ShuffleIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setProgress(0)}
            className="text-spotify-textMuted hover:text-white transition-colors"
            aria-label="Previous"
          >
            <SkipBackIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? "Pause" : "Play"}
            className="w-9 h-9 rounded-full bg-white hover:scale-105 text-black flex items-center justify-center transition-transform active:scale-95"
          >
            {playing ? (
              <PauseIcon className="w-4 h-4" />
            ) : (
              <PlayIcon className="w-4 h-4 ml-0.5" />
            )}
          </button>
          <button
            onClick={() => setProgress(TRACK_LENGTH)}
            className="text-spotify-textMuted hover:text-white transition-colors"
            aria-label="Next"
          >
            <SkipForwardIcon className="w-5 h-5" />
          </button>
          <button className="text-spotify-textMuted hover:text-white transition-colors hidden sm:block">
            <RepeatIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="hidden sm:flex w-full max-w-md items-center gap-2">
          <span className="text-[10px] tabular-nums text-spotify-textMuted w-8 text-right">
            {fmt(progress)}
          </span>
          <input
            type="range"
            min={0}
            max={TRACK_LENGTH}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="player-range group flex-1"
            style={{
              background: `linear-gradient(to right, #1DB954 ${pct}%, #4d4d4d ${pct}%)`,
            }}
            aria-label="Seek"
          />
          <span className="text-[10px] tabular-nums text-spotify-textMuted w-8">
            {fmt(TRACK_LENGTH)}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="hidden md:flex w-1/3 items-center justify-end gap-2">
        <VolumeIcon className="w-4 h-4 text-spotify-textMuted" />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="player-range w-24"
          style={{
            background: `linear-gradient(to right, #1DB954 ${volume}%, #4d4d4d ${volume}%)`,
          }}
          aria-label="Volume"
        />
      </div>
    </footer>
  );
}
