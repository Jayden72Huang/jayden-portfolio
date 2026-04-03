"use client";

import { useEffect, useState } from "react";

const tokenColors = [
  "bg-[#f0ece6]",
  "bg-[#fcd5c0]",
  "bg-[#f0a882]",
  "bg-[#D97757]",
  "bg-[#b85a3a]",
];

const githubColors = [
  "bg-[#f0ece6]",
  "bg-[#d4e4c8]",
  "bg-[#a0cc8a]",
  "bg-[#5fa04e]",
  "bg-[#2d6a1e]",
];

function Heatmap({
  data,
  colors,
  label,
}: {
  data: number[][];
  colors: string[];
  label: string;
}) {
  return (
    <div className="flex gap-[3px]">
      {data.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {week.map((val, di) => (
            <div
              key={di}
              className={`w-[11px] h-[11px] ${colors[val] || colors[0]} heatmap-cell`}
              title={`${label}: Level ${val}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function PixelChart({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 8 8">
      <rect x="1" y="6" width="1" height="2" fill={color} opacity="0.4" />
      <rect x="3" y="4" width="1" height="4" fill={color} opacity="0.6" />
      <rect x="5" y="2" width="1" height="6" fill={color} opacity="0.8" />
      <rect x="7" y="0" width="1" height="8" fill={color} />
    </svg>
  );
}

interface GithubData {
  publicRepos: number;
  yearContributions: number;
  heatmap: number[][];
}

export default function LiveDashboard() {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const emptyHeatmap = Array.from({ length: 20 }, () => Array(7).fill(0));

  return (
    <section id="dashboard" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <PixelChart color="#D97757" />
            <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight">
              Live Dashboard
            </h2>
          </div>
          <p className="text-[#666] text-lg">
            Real-time building activity — tokens burned & code shipped.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Token Usage Card — Tokscale embed */}
          <div className="bg-[#fdfbf7] border-2 border-[#e8e4de] p-6 pixel-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#D97757]/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 6 6">
                    <rect x="0" y="5" width="1" height="1" fill="#D97757" />
                    <rect x="1" y="3" width="1" height="3" fill="#D97757" />
                    <rect x="2" y="4" width="1" height="2" fill="#e8956e" />
                    <rect x="3" y="1" width="1" height="5" fill="#D97757" />
                    <rect x="4" y="2" width="1" height="4" fill="#e8956e" />
                    <rect x="5" y="0" width="1" height="6" fill="#c4603f" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2b2b2b]">
                    AI Token Usage
                  </h3>
                  <p className="text-xs text-[#999] font-pixel">via Tokscale</p>
                </div>
              </div>
            </div>
            {/* Tokscale SVG embed */}
            <div className="w-full overflow-hidden rounded">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://tokscale.ai/api/embed/jayden72huang/svg?theme=light&compact=1"
                alt="Token usage from Tokscale"
                className="w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  // If embed fails, show placeholder
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="hidden flex-col items-center justify-center py-8 text-center">
                <p className="font-pixel text-xs text-[#999] mb-2">TOKEN DATA</p>
                <a
                  href="https://tokscale.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#D97757] hover:underline"
                >
                  View on Tokscale →
                </a>
              </div>
            </div>
          </div>

          {/* GitHub Activity Card — Real data */}
          <div className="bg-[#fdfbf7] border-2 border-[#e8e4de] p-6 pixel-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#2d6a1e]/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 7 7">
                    <rect x="3" y="0" width="1" height="7" fill="#2d6a1e" />
                    <rect x="0" y="3" width="7" height="1" fill="#2d6a1e" />
                    <rect x="1" y="1" width="1" height="1" fill="#5fa04e" />
                    <rect x="5" y="1" width="1" height="1" fill="#5fa04e" />
                    <rect x="1" y="5" width="1" height="1" fill="#5fa04e" />
                    <rect x="5" y="5" width="1" height="1" fill="#5fa04e" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2b2b2b]">
                    GitHub Contributions
                  </h3>
                  <p className="text-xs text-[#999] font-pixel">
                    {loading ? "loading..." : "real-time"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#2d6a1e] font-mono">
                  {loading ? "—" : githubData?.yearContributions || 0}
                </p>
                <p className="text-xs text-[#999]">this year</p>
              </div>
            </div>
            <div className="overflow-x-auto pb-2">
              {loading ? (
                <div className="flex items-center justify-center h-20">
                  <p className="font-pixel text-xs text-[#999] animate-blink">
                    FETCHING DATA...
                  </p>
                </div>
              ) : (
                <Heatmap
                  data={githubData?.heatmap || emptyHeatmap}
                  colors={githubColors}
                  label="GitHub"
                />
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4 text-xs text-[#999]">
                <span className="font-pixel">Less</span>
                <div className="flex gap-1">
                  {githubColors.map((c, i) => (
                    <div key={i} className={`w-[11px] h-[11px] ${c}`} />
                  ))}
                </div>
                <span className="font-pixel">More</span>
              </div>
              <a
                href="https://github.com/Jayden72Huang"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] text-[#D97757] hover:underline"
              >
                @Jayden72Huang
              </a>
            </div>
          </div>
        </div>

        {/* Stats row — real data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            {
              value: loading ? "—" : String(githubData?.publicRepos || 12),
              sub: "on GitHub",
            },
            { value: "6+", sub: "shipped" },
            { value: "7x", sub: "winning" },
            { value: "¥20K+", sub: "累计奖金" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#fdfbf7] border-2 border-[#e8e4de] p-4 text-center hover:border-[#D97757]/40 transition-colors"
            >
              <p className="text-2xl font-bold text-[#2b2b2b] font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-[#999] font-pixel mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
