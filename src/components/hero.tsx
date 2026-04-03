"use client";

import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/Jayden72Huang",
    label: "GitHub",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
    href: "https://t.me/jayden_ai",
    label: "Telegram",
  },
  {
    icon: ExternalLink,
    href: "https://www.xiaohongshu.com/user/profile/5971d8445e87e712388e9ccb",
    label: "小红书",
  },
  {
    icon: Mail,
    href: "mailto:jayden@inflowx.ai",
    label: "Email",
  },
];

const tags = [
  "NUS 硕士",
  "InflowX AI 创始人",
  "7x 黑客松获奖",
  "Mulerun Ambassador",
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#D97757]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-[#D97757]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[5fr_4fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97757]/[0.08] border border-[#D97757]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97757] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97757]" />
              </span>
              <span className="text-xs font-medium text-[#D97757]">
                Currently building ATM-OS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#2b2b2b] tracking-tight leading-[1.1] mb-6">
              I build AI agents
              <br />
              <span className="italic text-[#D97757]">that ship.</span>
            </h1>

            {/* Bio */}
            <p className="text-lg md:text-xl text-[#666] leading-relaxed max-w-xl mb-4">
              00后 AI 创业者，从产品经理到 Agent 赛道创始人。
              <br />
              前 AI 孵化器产品负责人，ex 腾讯 &amp; 欧莱雅电商。
              <br />
              专攻 AI 自动化营销 Agent，让 AI 不只是 demo。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#2b2b2b]/[0.05] text-[#2b2b2b]/70 border border-[#2b2b2b]/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="w-10 h-10 rounded-xl bg-[#2b2b2b]/[0.05] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/60 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="relative bg-[#fdfbf7] rounded-3xl border border-[#e8e4de] p-8 shadow-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-mono text-[#999]">
                  jayden.config.ts
                </span>
              </div>

              {/* Code block */}
              <div className="font-mono text-sm leading-7 text-[#2b2b2b]">
                <div>
                  <span className="text-[#D97757]">const</span>{" "}
                  <span className="text-[#2b2b2b]">jayden</span>{" "}
                  <span className="text-[#999]">=</span>{" "}
                  <span className="text-[#999]">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">role:</span>{" "}
                  <span className="text-[#D97757]">
                    &quot;AI Agent Builder&quot;
                  </span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">company:</span>{" "}
                  <span className="text-[#D97757]">
                    &quot;InflowX AI&quot;
                  </span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">school:</span>{" "}
                  <span className="text-[#D97757]">&quot;NUS&quot;</span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">hackathons:</span>{" "}
                  <span className="text-[#2b2b2b]">7</span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">ships:</span>{" "}
                  <span className="text-[#2b2b2b]">true</span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">motto:</span>{" "}
                  <span className="text-[#D97757]">
                    &quot;Code {'>'} Slides&quot;
                  </span>
                </div>
                <div>
                  <span className="text-[#999]">{"}"}</span>
                </div>
              </div>

              {/* Floating decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D97757]/[0.06] rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#D97757]/[0.04] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
