"use client";

import { Sparkles } from "lucide-react";

interface AigcWork {
  title: string;
  description: string;
  type: "video" | "image" | "tool";
  platform: string;
  emoji: string;
  gradient: string;
}

const works: AigcWork[] = [
  {
    title: "AI 沙丘3衍生预告片",
    description: "使用 AI 视频生成技术创作的沙丘3同人预告片，在小红书获得广泛传播",
    type: "video",
    platform: "小红书",
    emoji: "🎬",
    gradient: "from-amber-100 to-orange-100",
  },
  {
    title: "唐朝夜生活 AI 复原",
    description: "用 AI 重现唐朝长安城的夜市盛况，30秒带你穿越千年",
    type: "video",
    platform: "小红书",
    emoji: "🏯",
    gradient: "from-red-50 to-amber-50",
  },
  {
    title: "AI 车膜改色效果集",
    description: "CarGo Lux 产品实际效果展示，AI 生成的高品质车膜换色对比图",
    type: "image",
    platform: "产品内",
    emoji: "🎨",
    gradient: "from-blue-50 to-indigo-50",
  },
  {
    title: "AI 汉服写真",
    description: "Hanfu AI 黑客松项目，AI 生成的中式传统服饰写真作品集",
    type: "image",
    platform: "黑客松",
    emoji: "👘",
    gradient: "from-pink-50 to-rose-50",
  },
  {
    title: "AI 宠物电商素材",
    description: "Pet Try-on 产品生成的宠物穿搭电商图，帮助商家降低拍摄成本",
    type: "image",
    platform: "产品内",
    emoji: "🐾",
    gradient: "from-green-50 to-emerald-50",
  },
  {
    title: "AI 搞笑插画动画",
    description: "AI 插画风格的搞笑短视频，用 AI 工具链完成从绘图到动画的全流程",
    type: "video",
    platform: "小红书",
    emoji: "😂",
    gradient: "from-violet-50 to-purple-50",
  },
];

const typeLabels = {
  video: { text: "Video", color: "text-blue-600 bg-blue-50 border-blue-100" },
  image: {
    text: "Image",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  tool: {
    text: "Tool",
    color: "text-violet-600 bg-violet-50 border-violet-100",
  },
};

export default function AigcGallery() {
  return (
    <section id="aigc" className="py-20 md:py-28 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={24} className="text-[#D97757]" />
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

        {/* Gallery grid - masonry-like */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work, index) => (
            <div
              key={work.title}
              className={`group bg-white rounded-2xl border border-[#e8e4de] overflow-hidden hover:shadow-lg hover:border-[#D97757]/20 transition-all duration-300 ${
                index === 0 || index === 3 ? "sm:row-span-1" : ""
              }`}
            >
              {/* Gradient preview area */}
              <div
                className={`h-40 bg-gradient-to-br ${work.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {work.emoji}
                </span>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/30 blur-xl" />
                <div className="absolute bottom-2 left-4 w-12 h-12 rounded-full bg-white/20 blur-lg" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                      typeLabels[work.type].color
                    }`}
                  >
                    {typeLabels[work.type].text}
                  </span>
                  <span className="text-[10px] text-[#999]">
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
