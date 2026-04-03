"use client";

import { PixelStar } from "./pixel-decorations";

interface AigcWork {
  title: string;
  description: string;
  type: "video" | "image" | "tool";
  platform: string;
  color: string;
  patternType: number;
}

const works: AigcWork[] = [
  {
    title: "AI 沙丘3衍生预告片",
    description: "使用 AI 视频生成技术创作的沙丘3同人预告片，在小红书获得广泛传播",
    type: "video",
    platform: "小红书",
    color: "#D97757",
    patternType: 0,
  },
  {
    title: "唐朝夜生活 AI 复原",
    description: "用 AI 重现唐朝长安城的夜市盛况，30秒带你穿越千年",
    type: "video",
    platform: "小红书",
    color: "#c4603f",
    patternType: 1,
  },
  {
    title: "AI 车膜改色效果集",
    description: "CarGo Lux 产品实际效果展示，AI 生成的高品质车膜换色对比图",
    type: "image",
    platform: "产品内",
    color: "#5b9bd5",
    patternType: 2,
  },
  {
    title: "AI 汉服写真",
    description: "Hanfu AI 黑客松项目，AI 生成的中式传统服饰写真作品集",
    type: "image",
    platform: "黑客松",
    color: "#e88fa5",
    patternType: 3,
  },
  {
    title: "AI 宠物电商素材",
    description: "Pet Try-on 产品生成的宠物穿搭电商图，帮助商家降低拍摄成本",
    type: "image",
    platform: "产品内",
    color: "#6abf69",
    patternType: 4,
  },
  {
    title: "AI 搞笑插画动画",
    description: "AI 插画风格的搞笑短视频，用 AI 工具链完成从绘图到动画的全流程",
    type: "video",
    platform: "小红书",
    color: "#9b7ed8",
    patternType: 5,
  },
];

/* Pixel art patterns for gallery preview areas */
function PixelPattern({ color, type }: { color: string; type: number }) {
  const lightColor = `${color}30`;
  const midColor = `${color}60`;

  switch (type) {
    case 0: // Film reel
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="0" y="0" width="2" height="10" fill={color} />
          <rect x="8" y="0" width="2" height="10" fill={color} />
          <rect x="2" y="0" width="6" height="1" fill={midColor} />
          <rect x="2" y="9" width="6" height="1" fill={midColor} />
          <rect x="3" y="3" width="4" height="4" fill={color} />
          <rect x="4" y="4" width="2" height="2" fill={lightColor} />
          <rect x="0" y="2" width="1" height="1" fill={lightColor} />
          <rect x="0" y="5" width="1" height="1" fill={lightColor} />
          <rect x="0" y="8" width="1" height="1" fill={lightColor} />
          <rect x="9" y="2" width="1" height="1" fill={lightColor} />
          <rect x="9" y="5" width="1" height="1" fill={lightColor} />
          <rect x="9" y="8" width="1" height="1" fill={lightColor} />
        </svg>
      );
    case 1: // Castle/temple
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="4" y="0" width="2" height="1" fill={color} />
          <rect x="3" y="1" width="4" height="1" fill={color} />
          <rect x="1" y="2" width="2" height="1" fill={color} /><rect x="7" y="2" width="2" height="1" fill={color} />
          <rect x="1" y="3" width="8" height="1" fill={midColor} />
          <rect x="2" y="4" width="6" height="4" fill={color} />
          <rect x="4" y="5" width="2" height="3" fill={lightColor} />
          <rect x="0" y="8" width="10" height="2" fill={midColor} />
        </svg>
      );
    case 2: // Car
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="3" y="2" width="4" height="2" fill={midColor} />
          <rect x="1" y="4" width="8" height="3" fill={color} />
          <rect x="0" y="5" width="10" height="2" fill={color} />
          <rect x="2" y="7" width="2" height="1" fill="#2b2b2b" />
          <rect x="6" y="7" width="2" height="1" fill="#2b2b2b" />
          <rect x="7" y="5" width="2" height="1" fill={lightColor} />
        </svg>
      );
    case 3: // Kimono/dress
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="4" y="0" width="2" height="2" fill="#fcd5c0" />
          <rect x="3" y="2" width="4" height="1" fill={color} />
          <rect x="2" y="3" width="6" height="2" fill={color} />
          <rect x="4" y="3" width="2" height="2" fill={midColor} />
          <rect x="1" y="5" width="8" height="3" fill={color} />
          <rect x="0" y="8" width="4" height="2" fill={color} />
          <rect x="6" y="8" width="4" height="2" fill={color} />
        </svg>
      );
    case 4: // Paw print
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="2" y="1" width="2" height="2" fill={color} />
          <rect x="6" y="1" width="2" height="2" fill={color} />
          <rect x="0" y="4" width="2" height="2" fill={color} />
          <rect x="8" y="4" width="2" height="2" fill={color} />
          <rect x="3" y="5" width="4" height="3" fill={color} />
          <rect x="4" y="4" width="2" height="1" fill={color} />
          <rect x="3" y="8" width="1" height="1" fill={midColor} />
          <rect x="6" y="8" width="1" height="1" fill={midColor} />
        </svg>
      );
    default: // Pencil/brush
      return (
        <svg width="64" height="64" viewBox="0 0 10 10">
          <rect x="7" y="0" width="2" height="2" fill={color} />
          <rect x="6" y="2" width="2" height="2" fill={color} />
          <rect x="5" y="4" width="2" height="2" fill={midColor} />
          <rect x="4" y="6" width="2" height="1" fill={midColor} />
          <rect x="3" y="7" width="2" height="1" fill={midColor} />
          <rect x="2" y="8" width="2" height="1" fill="#f5c542" />
          <rect x="1" y="9" width="2" height="1" fill="#2b2b2b" />
        </svg>
      );
  }
}

const typeStyles: Record<string, string> = {
  video: "text-[#D97757] bg-[#D97757]/10 border-[#D97757]/20",
  image: "text-[#6abf69] bg-[#6abf69]/10 border-[#6abf69]/20",
  tool: "text-[#5b9bd5] bg-[#5b9bd5]/10 border-[#5b9bd5]/20",
};

export default function AigcGallery() {
  return (
    <section id="aigc" className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <PixelStar size={28} color="#D97757" />
            <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight">
              AIGC Creative Works
            </h2>
          </div>
          <p className="text-[#666] text-lg max-w-2xl">
            AI 不只是工具，也是创作的画笔。
            <br className="hidden md:block" />
            这些作品诞生于好奇心和 AI 技术的交汇处。
          </p>
        </div>

        {/* Gallery grid — pixel art style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work) => (
            <div
              key={work.title}
              className="group bg-white border-2 border-[#e8e4de] overflow-hidden pixel-card"
            >
              {/* Pixel art preview */}
              <div
                className="h-40 flex items-center justify-center relative"
                style={{ backgroundColor: `${work.color}08` }}
              >
                <div className="group-hover:scale-125 transition-transform duration-300">
                  <PixelPattern color={work.color} type={work.patternType} />
                </div>
                {/* Grid overlay for pixel feel */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(#2b2b2b 1px, transparent 1px), linear-gradient(90deg, #2b2b2b 1px, transparent 1px)`,
                    backgroundSize: "8px 8px",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-pixel uppercase border ${typeStyles[work.type]}`}
                  >
                    {work.type}
                  </span>
                  <span className="text-[10px] text-[#999] font-pixel">
                    {work.platform}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#2b2b2b] mb-2 group-hover:text-[#D97757] transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
