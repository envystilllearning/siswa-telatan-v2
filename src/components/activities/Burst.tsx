"use client";

import type { CSSProperties } from "react";

interface ParticleConfig {
  cx: string;
  cy: string;
  cr: string;
  color: string;
  delay: string;
  shape: "circle" | "rect";
}

const PARTICLES: ParticleConfig[] = [
  { cx: "-120px", cy: "-80px", cr: "40deg", color: "#4ADE80", delay: "0s", shape: "circle" },
  { cx: "95px", cy: "-130px", cr: "210deg", color: "#FBBF24", delay: "0.05s", shape: "rect" },
  { cx: "-45px", cy: "-35px", cr: "300deg", color: "#60A5FA", delay: "0.09s", shape: "circle" },
  { cx: "65px", cy: "-60px", cr: "120deg", color: "#EC4899", delay: "0.02s", shape: "rect" },
  { cx: "-95px", cy: "-55px", cr: "230deg", color: "#FBBF24", delay: "0.12s", shape: "circle" },
  { cx: "35px", cy: "-115px", cr: "80deg", color: "#4ADE80", delay: "0.04s", shape: "rect" },
  { cx: "-115px", cy: "-125px", cr: "340deg", color: "#EC4899", delay: "0.07s", shape: "circle" },
  { cx: "115px", cy: "-45px", cr: "160deg", color: "#60A5FA", delay: "0.15s", shape: "rect" },
  { cx: "-70px", cy: "-105px", cr: "25deg", color: "#FBBF24", delay: "0.03s", shape: "rect" },
  { cx: "5px", cy: "-140px", cr: "265deg", color: "#4ADE80", delay: "0.1s", shape: "circle" },
  { cx: "120px", cy: "-95px", cr: "105deg", color: "#EC4899", delay: "0.06s", shape: "circle" },
  { cx: "-25px", cy: "-70px", cr: "185deg", color: "#60A5FA", delay: "0.13s", shape: "rect" },
];

export default function Burst({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`animate-confetti absolute left-1/2 top-1/2 ${
            p.shape === "circle" ? "size-2 rounded-full" : "size-2.5 rounded-[2px]"
          }`}
          style={
            {
              "--cx": p.cx,
              "--cy": p.cy,
              "--cr": p.cr,
              backgroundColor: p.color,
              animationDelay: p.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
