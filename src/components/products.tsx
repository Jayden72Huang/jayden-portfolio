"use client";

import { ExternalLink } from "lucide-react";

interface Product {
  title: string;
  description: string;
  link: string;
  emoji: string;
  category: string;
}

const products: Product[] = [
  {
    title: "AI Halloween Make-up Gen",
    description: "AI 万圣节妆容生成器，上传自拍一键变身",
    link: "https://app-72yy98paj8jl.appmiaoda.com",
    emoji: "🎃",
    category: "Image Gen",
  },
  {
    title: "AI Magazine Cover Gen",
    description: "AI 杂志封面生成，一键打造时尚大片效果",
    link: "https://app-72wio9bauozl.appmiaoda.com",
    emoji: "📰",
    category: "Image Gen",
  },
  {
    title: "AI CarGo Lux",
    description: "AI 车膜换色生成器，可视化对比改色效果",
    link: "https://app-77echj79mcxt.appmiaoda.com",
    emoji: "🚗",
    category: "E-commerce",
  },
  {
    title: "AI Pet Try-on",
    description: "宠物 AI 试穿，为电商商家生成宠物穿搭图",
    link: "https://app-74n0tquwnqwx.appmiaoda.com",
    emoji: "🐕",
    category: "E-commerce",
  },
  {
    title: "AI Jewelry Try-on",
    description: "珠宝 AI 试戴，帮助商家生成本地化模特佩戴图",
    link: "#",
    emoji: "💍",
    category: "E-commerce",
  },
  {
    title: "AI Subscription Manager",
    description: "AI 订阅管理 SaaS，自动追踪账单、提醒续费、分析支出",
    link: "https://app-6pkqx6qxf85d.appmiaoda.com",
    emoji: "📊",
    category: "SaaS",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#2b2b2b] tracking-tight mb-4">
            Products
          </h2>
          <p className="text-[#666] text-lg max-w-2xl">
            已上线的 AI 产品 — 从发现需求到上线，平均 48 小时。
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#fdfbf7] rounded-2xl border border-[#e8e4de] p-6 hover:shadow-lg hover:border-[#D97757]/25 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{product.emoji}</div>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#2b2b2b]/[0.04] text-[#999] border border-[#e8e4de]">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#2b2b2b] mb-2 group-hover:text-[#D97757] transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Link indicator */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Try it live</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
