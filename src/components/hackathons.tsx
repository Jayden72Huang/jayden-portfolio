"use client";

import { useState } from "react";
import { Trophy, MapPin, Calendar, Award } from "lucide-react";

interface Hackathon {
  year: string;
  name: string;
  organizer: string;
  location?: string;
  award: string;
  highlight: boolean;
  project?: string;
  description: string;
}

const hackathons: Hackathon[] = [
  {
    year: "2026",
    name: "爱XIA黑客松",
    organizer: "厦门人工智能孵化器",
    location: "厦门",
    award: "二等奖",
    highlight: false,
    description: "AI 应用创新赛道，组长带队参赛，展示 AI Agent 在营销自动化领域的落地方案。",
  },
  {
    year: "2026",
    name: "环球黑客松",
    organizer: "魔搭 & 观猎",
    award: "银奖",
    highlight: false,
    description: "全球 AI 开发者大赛，基于魔搭社区模型构建创新应用。",
  },
  {
    year: "2025",
    name: "深客松",
    organizer: "抖音",
    location: "深圳",
    award: "青年共鸣之星",
    highlight: true,
    description: "抖音官方黑客松，获评青年共鸣之星奖项，作品在抖音生态内获得广泛关注。",
  },
  {
    year: "2025",
    name: "AI工具出海黑客松",
    organizer: "哥飞",
    award: "二等奖",
    highlight: false,
    project: "AI Tools",
    description: "聚焦 AI 工具国际化赛道，打造面向海外市场的 AI SaaS 产品原型。",
  },
  {
    year: "2025",
    name: "妙哒黑客松",
    organizer: "百度",
    award: "卓越奖 + 优秀奖",
    highlight: true,
    project: "Hanfu AI",
    description: "百度 AI 开发者大赛，基于妙哒平台构建 AI 应用，一举获得双奖。",
  },
  {
    year: "2024",
    name: "夏令营创业赛",
    organizer: "深圳科创学院",
    location: "深圳",
    award: "二等奖",
    highlight: false,
    description: "创新创业赛道，展示 AI 驱动的商业模式和产品落地能力。",
  },
  {
    year: "2024",
    name: "AI社交产品黑客松",
    organizer: "Bondee",
    award: "一等奖 🥇",
    highlight: true,
    description: "AI 社交产品创新赛，从需求洞察到产品原型全流程，夺得最高奖项。",
  },
  {
    year: "2023",
    name: "Brainstorm创意挑战赛",
    organizer: "欧莱雅",
    award: "Top 50",
    highlight: false,
    description: "全球美妆科技创意挑战赛，入围前 50 强方案，初次接触 AI 产品化思维。",
  },
];

export default function Hackathons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = hackathons[activeIndex];

  return (
    <section id="hackathons" className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight mb-4">
            Hackathons
          </h2>
          <p className="text-[#666] text-lg">
            7 次作为组长带队获奖，累计奖金 ¥20,000+
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
          {/* Left: Timeline stepper */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {hackathons.map((h, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap md:whitespace-normal transition-all duration-200 min-w-fit ${
                  i === activeIndex
                    ? "bg-[#D97757]/[0.08] border border-[#D97757]/20"
                    : "hover:bg-[#2b2b2b]/[0.03] border border-transparent"
                }`}
              >
                <span
                  className={`font-display text-2xl tabular-nums ${
                    i === activeIndex ? "text-[#D97757]" : "text-[#ccc]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className={`text-sm font-medium transition-colors ${
                      i === activeIndex ? "text-[#2b2b2b]" : "text-[#999]"
                    }`}
                  >
                    {h.name}
                  </p>
                  <p className="text-xs text-[#bbb]">{h.year}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail card */}
          <div className="bg-white rounded-2xl border border-[#e8e4de] p-8 md:p-10 shadow-sm">
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97757]/[0.08] border border-[#D97757]/20 mb-6">
              <Trophy size={14} className="text-[#D97757]" />
              <span className="text-sm font-medium text-[#D97757]">
                {active.award}
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-[#2b2b2b] tracking-tight mb-2">
              {active.name}
            </h3>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#666]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#999]" />
                {active.year}
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-[#999]" />
                {active.organizer}
              </span>
              {active.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#999]" />
                  {active.location}
                </span>
              )}
            </div>

            <p className="text-[#2b2b2b]/80 text-lg leading-relaxed mb-8">
              {active.description}
            </p>

            {active.project && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2b2b2b]/[0.04] border border-[#e8e4de] text-sm">
                <span className="text-[#999]">Related project:</span>
                <span className="font-medium text-[#2b2b2b]">
                  {active.project}
                </span>
              </div>
            )}

            {/* Progress dots */}
            <div className="flex items-center gap-1.5 mt-8 pt-6 border-t border-[#e8e4de]">
              {hackathons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-[#D97757]"
                      : "w-1.5 bg-[#ddd] hover:bg-[#bbb]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
