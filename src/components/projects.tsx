"use client";

import Image from "next/image";
import { PixelArrow } from "./pixel-decorations";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  link?: string;
  pixelIcon: string; // path to pixel art image
}

const projects: Project[] = [
  {
    title: "ATM-OS",
    description: "AI Marketing Agent Operating System",
    longDescription:
      "当前主力项目。一个完整的 AI 营销代理操作系统，自动化策略规划、多平台内容生产、排期发布和反馈闭环。",
    tags: ["TypeScript", "Next.js", "Multi-Agent", "Marketing"],
    github: "https://github.com/Jayden72Huang/ATM-OS",
    pixelIcon: "/images/px-robot.png",
  },
  {
    title: "OPC-MKT-Agent-OS",
    description: "One-Person Company Marketing Agent",
    longDescription:
      "为一人公司打造的多 Agent 营销框架。包含 Context Vault、Strategy Planner、Content Studio、Publisher 和 Feedback Agent 五大模块。",
    tags: ["TypeScript", "Multi-Agent", "小红书", "抖音", "微信"],
    github: "https://github.com/Jayden72Huang/OPC-MKT-Agent-OS",
    pixelIcon: "/images/px-megaphone.png",
  },
  {
    title: "Cotify",
    description: "Voice Notification for Claude Code",
    longDescription:
      "开源 Claude Code 语音通知 Skill。零依赖 macOS 工具，5 种情绪预设、3 级强度、时间感知、多 Agent 团队语音分配。",
    tags: ["Shell", "Claude Code", "Open Source", "macOS"],
    github: "https://github.com/Jayden72Huang/Cotify",
    link: "https://cotify.space",
    pixelIcon: "/images/px-bell.png",
  },
  {
    title: "IP-Flow",
    description: "AI Studio for IP Design & Marketing",
    longDescription:
      "全合一 AI 工作室，基于 Google Gemini API，用于 IP 角色创作和营销素材生成。支持风格迁移和批量生产。",
    tags: ["TypeScript", "React", "Gemini API", "Vite"],
    github: "https://github.com/Jayden72Huang/IP-Flow-New",
    pixelIcon: "/images/px-palette.png",
  },
  {
    title: "InflowX AI",
    description: "Founder IP Automation Platform",
    longDescription:
      "为创业者和创作者打造的 AI 个人品牌自动化平台。一条语音备忘录自动生成 LinkedIn 长文、Newsletter、多平台内容。",
    tags: ["TypeScript", "React 19", "Framer Motion", "Vercel"],
    link: "https://inflowx.ai",
    pixelIcon: "/images/px-rocket.png",
  },
  {
    title: "Lumina",
    description: "Event Marketing AI Agent",
    longDescription:
      "将活动创意转化为落地方案的 AI Agent。自动生成文案、视觉素材，一键完成活动营销全流程。",
    tags: ["TypeScript", "AI Agent", "Event Marketing"],
    github: "https://github.com/Jayden72Huang/Lumina",
    pixelIcon: "/images/px-sparkle.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-[#666] text-lg max-w-2xl">
            From multi-agent operating systems to open-source tools —
            <br className="hidden md:block" />
            every project ships, every agent works.
          </p>
        </div>

        {/* Alternating layout */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Visual card with pixel art */}
              <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <div className="bg-[#fdfbf7] border-2 border-[#e8e4de] p-8 md:p-10 pixel-card group relative overflow-hidden">
                  {/* Pixel art icon */}
                  <div className="w-20 h-20 mb-6 relative">
                    <Image
                      src={project.pixelIcon}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="pixel-art"
                      unoptimized
                    />
                  </div>

                  <div className="font-pixel text-[10px] text-[#999] mb-2 uppercase tracking-wider">
                    {project.tags[0]}
                  </div>
                  <h3 className="font-display text-3xl text-[#2b2b2b] mb-2 group-hover:text-[#D97757] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#666]">{project.description}</p>

                  {/* Tech tags — pixel style */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono bg-[#2b2b2b]/[0.03] text-[#666] border border-[#e8e4de]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D97757]/20" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D97757]/20" />
                </div>
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p className="text-lg text-[#2b2b2b]/80 leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#2b2b2b]/70 bg-[#2b2b2b]/[0.03] border-2 border-[#e8e4de] hover:border-[#D97757]/30 hover:text-[#D97757] transition-colors"
                    >
                      <span className="font-pixel text-xs">{'<>'}</span>
                      Source
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#D97757] hover:bg-[#c4603f] transition-colors"
                    >
                      Live
                      <PixelArrow direction="right" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
