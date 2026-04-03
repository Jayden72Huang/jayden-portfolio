"use client";

import { useMemo } from "react";
import { Activity, GitCommit } from "lucide-react";

function generateHeatmapData(weeks: number, baseIntensity: number) {
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      if (rand < 0.15) week.push(0);
      else if (rand < 0.35) week.push(1);
      else if (rand < 0.6) week.push(2);
      else if (rand < 0.8) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

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
    <div>
      <div className="flex gap-[3px]">
        {data.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((val, di) => (
              <div
                key={di}
                className={`w-[11px] h-[11px] rounded-[2px] ${colors[val]} heatmap-cell`}
                title={`${label}: Level ${val}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveDashboard() {
  const tokenData = useMemo(() => generateHeatmapData(20, 3), []);
  const githubData = useMemo(() => generateHeatmapData(20, 2), []);

  return (
    <section id="dashboard" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight mb-4">
            Live Dashboard
          </h2>
          <p className="text-[#666] text-lg">
            Real-time building activity — tokens burned & code shipped.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Token Usage Card */}
          <div className="bg-[#fdfbf7] rounded-2xl border border-[#e8e4de] p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D97757]/10 flex items-center justify-center">
                  <Activity size={18} className="text-[#D97757]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2b2b2b]">
                    AI Token Usage
                  </h3>
                  <p className="text-xs text-[#999]">Last 20 weeks</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#D97757] font-mono">
                  2.4M
                </p>
                <p className="text-xs text-[#999]">tokens this month</p>
              </div>
            </div>
            <div className="overflow-x-auto pb-2">
              <Heatmap data={tokenData} colors={tokenColors} label="Token usage" />
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-[#999]">
              <span>Less</span>
              <div className="flex gap-1">
                {tokenColors.map((c, i) => (
                  <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${c}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          {/* GitHub Activity Card */}
          <div className="bg-[#fdfbf7] rounded-2xl border border-[#e8e4de] p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2d6a1e]/10 flex items-center justify-center">
                  <GitCommit size={18} className="text-[#2d6a1e]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2b2b2b]">
                    GitHub Contributions
                  </h3>
                  <p className="text-xs text-[#999]">Last 20 weeks</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#2d6a1e] font-mono">
                  847
                </p>
                <p className="text-xs text-[#999]">contributions this year</p>
              </div>
            </div>
            <div className="overflow-x-auto pb-2">
              <Heatmap
                data={githubData}
                colors={githubColors}
                label="GitHub contributions"
              />
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-[#999]">
              <span>Less</span>
              <div className="flex gap-1">
                {githubColors.map((c, i) => (
                  <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${c}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Repos", value: "28", sub: "on GitHub" },
            { label: "Products", value: "6+", sub: "shipped" },
            { label: "Hackathons", value: "7x", sub: "award-winning" },
            { label: "Prize Total", value: "¥20K+", sub: "累计奖金" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#fdfbf7] rounded-xl border border-[#e8e4de] p-4 text-center hover:border-[#D97757]/30 transition-colors"
            >
              <p className="text-2xl font-bold text-[#2b2b2b] font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-[#999] mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
