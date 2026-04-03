"use client";

import Image from "next/image";
import { FloatingPixelElements, PixelStar } from "./pixel-decorations";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Jayden72Huang",
    px: (
      <svg width="20" height="20" viewBox="0 0 8 8" fill="currentColor">
        <rect x="2" y="0" width="4" height="1" />
        <rect x="1" y="1" width="6" height="1" />
        <rect x="0" y="2" width="8" height="1" />
        <rect x="0" y="3" width="2" height="1" /><rect x="3" y="3" width="2" height="1" /><rect x="6" y="3" width="2" height="1" />
        <rect x="0" y="4" width="8" height="1" />
        <rect x="1" y="5" width="6" height="1" />
        <rect x="1" y="6" width="2" height="1" /><rect x="5" y="6" width="2" height="1" />
        <rect x="0" y="7" width="2" height="1" />
      </svg>
    ),
  },
  {
    label: "小红书",
    href: "https://www.xiaohongshu.com/user/profile/5971d8445e87e712388e9ccb",
    px: (
      <svg width="20" height="20" viewBox="0 0 8 8" fill="currentColor">
        <rect x="1" y="0" width="6" height="1" />
        <rect x="0" y="1" width="8" height="1" />
        <rect x="0" y="2" width="1" height="4" /><rect x="7" y="2" width="1" height="4" />
        <rect x="2" y="3" width="4" height="1" />
        <rect x="2" y="5" width="4" height="1" />
        <rect x="0" y="6" width="8" height="1" />
        <rect x="1" y="7" width="6" height="1" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/jayden_ai",
    px: (
      <svg width="20" height="20" viewBox="0 0 8 8" fill="currentColor">
        <rect x="0" y="3" width="1" height="1" />
        <rect x="1" y="2" width="2" height="1" /><rect x="1" y="3" width="1" height="1" />
        <rect x="3" y="1" width="2" height="1" /><rect x="2" y="3" width="2" height="1" />
        <rect x="5" y="0" width="3" height="1" /><rect x="4" y="2" width="2" height="2" />
        <rect x="6" y="1" width="2" height="2" />
        <rect x="5" y="3" width="2" height="1" />
        <rect x="4" y="4" width="2" height="1" />
        <rect x="3" y="5" width="2" height="1" />
        <rect x="2" y="6" width="2" height="1" />
        <rect x="3" y="7" width="1" height="1" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jayden@inflowx.ai",
    px: (
      <svg width="20" height="20" viewBox="0 0 8 6" fill="currentColor">
        <rect x="0" y="0" width="8" height="1" />
        <rect x="0" y="1" width="1" height="1" /><rect x="7" y="1" width="1" height="1" />
        <rect x="1" y="1" width="1" height="1" /><rect x="6" y="1" width="1" height="1" />
        <rect x="0" y="2" width="1" height="1" /><rect x="2" y="2" width="1" height="1" /><rect x="5" y="2" width="1" height="1" /><rect x="7" y="2" width="1" height="1" />
        <rect x="0" y="3" width="1" height="1" /><rect x="3" y="3" width="2" height="1" /><rect x="7" y="3" width="1" height="1" />
        <rect x="0" y="4" width="1" height="1" /><rect x="7" y="4" width="1" height="1" />
        <rect x="0" y="5" width="8" height="1" />
      </svg>
    ),
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
      <FloatingPixelElements />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[5fr_4fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="relative z-10">
            {/* Status indicator — pixel style */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border-2 border-[#D97757]/30 bg-[#D97757]/[0.06] mb-8">
              <span className="w-2 h-2 bg-[#D97757] animate-blink" />
              <span className="text-xs font-pixel text-[#D97757]">
                Building ATM-OS
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

            {/* Tags — pixel style */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-[#2b2b2b]/[0.04] text-[#2b2b2b]/70 border-2 border-[#2b2b2b]/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links — pixel art icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="w-10 h-10 bg-[#2b2b2b]/[0.04] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/60 transition-all duration-200 border-2 border-transparent hover:border-[#D97757]/20"
                >
                  {link.px}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Pixel art scene */}
          <div className="relative">
            <div className="relative bg-[#fdfbf7] border-2 border-[#e8e4de] p-6 md:p-8 shadow-[4px_4px_0_0_rgba(217,119,87,0.1)]">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#D97757]" />
                <div className="w-3 h-3 bg-[#f5c542]" />
                <div className="w-3 h-3 bg-[#6abf69]" />
                <span className="ml-3 font-pixel text-[10px] text-[#999]">
                  jayden.config.ts
                </span>
              </div>

              {/* Pixel art computer illustration */}
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/images/px-computer.png"
                  alt="Pixel art computer"
                  width={120}
                  height={120}
                  className="pixel-art animate-float-slow"
                  unoptimized
                />
              </div>

              {/* Code block — pixel mono style */}
              <div className="font-mono text-sm leading-7 text-[#2b2b2b]">
                <div>
                  <span className="text-[#D97757]">const</span>{" "}
                  <span className="text-[#2b2b2b]">jayden</span>{" "}
                  <span className="text-[#999]">=</span>{" "}
                  <span className="text-[#999]">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">role:</span>{" "}
                  <span className="text-[#D97757]">&quot;AI Agent Builder&quot;</span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">ships:</span>{" "}
                  <span className="text-[#2b2b2b]">true</span>
                  <span className="text-[#999]">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#666]">motto:</span>{" "}
                  <span className="text-[#D97757]">&quot;Code {'>'} Slides&quot;</span>
                </div>
                <div>
                  <span className="text-[#999]">{"}"}</span>
                  <span className="animate-blink text-[#D97757]">|</span>
                </div>
              </div>
            </div>
            {/* Pixel shadow */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D97757]/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
