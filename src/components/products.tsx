"use client";

import { PixelArrow } from "./pixel-decorations";

interface Product {
  title: string;
  description: string;
  link: string;
  category: string;
  color: string; // accent color for the card top
}

const products: Product[] = [
  {
    title: "AI Halloween Make-up Gen",
    description: "AI 万圣节妆容生成器，上传自拍一键变身",
    link: "https://app-72yy98paj8jl.appmiaoda.com",
    category: "Image Gen",
    color: "#D97757",
  },
  {
    title: "AI Magazine Cover Gen",
    description: "AI 杂志封面生成，一键打造时尚大片效果",
    link: "https://app-72wio9bauozl.appmiaoda.com",
    category: "Image Gen",
    color: "#e88fa5",
  },
  {
    title: "AI CarGo Lux",
    description: "AI 车膜换色生成器，可视化对比改色效果",
    link: "https://app-77echj79mcxt.appmiaoda.com",
    category: "E-commerce",
    color: "#5b9bd5",
  },
  {
    title: "AI Pet Try-on",
    description: "宠物 AI 试穿，为电商商家生成宠物穿搭图",
    link: "https://app-74n0tquwnqwx.appmiaoda.com",
    category: "E-commerce",
    color: "#6abf69",
  },
  {
    title: "AI Jewelry Try-on",
    description: "珠宝 AI 试戴，帮助商家生成本地化模特佩戴图",
    link: "#",
    category: "E-commerce",
    color: "#f5c542",
  },
  {
    title: "AI Subscription Manager",
    description: "AI 订阅管理 SaaS，自动追踪账单、提醒续费、分析支出",
    link: "https://app-6pkqx6qxf85d.appmiaoda.com",
    category: "SaaS",
    color: "#9b7ed8",
  },
];

/* Pixel art app icon generator — unique pattern per card */
function PixelAppIcon({ color, index }: { color: string; index: number }) {
  const patterns = [
    // Pattern 0: Face
    <svg key={0} width="48" height="48" viewBox="0 0 8 8">
      <rect x="2" y="1" width="4" height="1" fill={color} />
      <rect x="1" y="2" width="6" height="1" fill={color} />
      <rect x="1" y="3" width="1" height="1" fill={color} /><rect x="3" y="3" width="1" height="1" fill="#2b2b2b" /><rect x="5" y="3" width="1" height="1" fill="#2b2b2b" /><rect x="6" y="3" width="1" height="1" fill={color} />
      <rect x="1" y="4" width="6" height="1" fill={color} />
      <rect x="1" y="5" width="1" height="1" fill={color} /><rect x="3" y="5" width="2" height="1" fill="#2b2b2b" /><rect x="6" y="5" width="1" height="1" fill={color} />
      <rect x="2" y="6" width="4" height="1" fill={color} />
    </svg>,
    // Pattern 1: Star/sparkle
    <svg key={1} width="48" height="48" viewBox="0 0 8 8">
      <rect x="3" y="0" width="2" height="1" fill={color} />
      <rect x="3" y="1" width="2" height="1" fill={color} />
      <rect x="0" y="3" width="8" height="2" fill={color} />
      <rect x="2" y="2" width="4" height="1" fill={color} />
      <rect x="2" y="5" width="4" height="1" fill={color} />
      <rect x="3" y="6" width="2" height="1" fill={color} />
      <rect x="3" y="7" width="2" height="1" fill={color} />
    </svg>,
    // Pattern 2: Car
    <svg key={2} width="48" height="48" viewBox="0 0 8 8">
      <rect x="2" y="2" width="4" height="1" fill={color} />
      <rect x="1" y="3" width="6" height="1" fill={color} />
      <rect x="0" y="4" width="8" height="2" fill={color} />
      <rect x="1" y="6" width="2" height="1" fill="#2b2b2b" />
      <rect x="5" y="6" width="2" height="1" fill="#2b2b2b" />
    </svg>,
    // Pattern 3: Paw
    <svg key={3} width="48" height="48" viewBox="0 0 8 8">
      <rect x="1" y="0" width="2" height="2" fill={color} />
      <rect x="5" y="0" width="2" height="2" fill={color} />
      <rect x="0" y="3" width="2" height="2" fill={color} />
      <rect x="6" y="3" width="2" height="2" fill={color} />
      <rect x="2" y="4" width="4" height="3" fill={color} />
      <rect x="3" y="3" width="2" height="1" fill={color} />
    </svg>,
    // Pattern 4: Diamond/gem
    <svg key={4} width="48" height="48" viewBox="0 0 8 8">
      <rect x="3" y="0" width="2" height="1" fill={color} />
      <rect x="2" y="1" width="4" height="1" fill={color} />
      <rect x="1" y="2" width="6" height="1" fill={color} />
      <rect x="0" y="3" width="8" height="1" fill={color} />
      <rect x="1" y="4" width="6" height="1" fill={color} />
      <rect x="2" y="5" width="4" height="1" fill={color} />
      <rect x="3" y="6" width="2" height="1" fill={color} />
    </svg>,
    // Pattern 5: Chart/dashboard
    <svg key={5} width="48" height="48" viewBox="0 0 8 8">
      <rect x="0" y="0" width="8" height="1" fill={color} />
      <rect x="0" y="0" width="1" height="8" fill={color} />
      <rect x="0" y="7" width="8" height="1" fill={color} />
      <rect x="2" y="5" width="1" height="2" fill={color} />
      <rect x="4" y="3" width="1" height="4" fill={color} />
      <rect x="6" y="2" width="1" height="5" fill={color} />
    </svg>,
  ];
  return patterns[index % patterns.length];
}

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

        {/* Product grid — pixel card style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#fdfbf7] border-2 border-[#e8e4de] pixel-card overflow-hidden"
            >
              {/* Pixel art header */}
              <div
                className="h-28 flex items-center justify-center relative"
                style={{ backgroundColor: `${product.color}10` }}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <PixelAppIcon color={product.color} index={i} />
                </div>
                {/* Pixel corner accent */}
                <div
                  className="absolute top-0 left-0 w-2 h-2"
                  style={{ backgroundColor: product.color }}
                />
                <div
                  className="absolute top-0 right-0 w-2 h-2"
                  style={{ backgroundColor: product.color }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="font-pixel text-[9px] uppercase tracking-wider text-[#999]">
                  {product.category}
                </span>
                <h3 className="text-base font-semibold text-[#2b2b2b] mt-1 mb-2 group-hover:text-[#D97757] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-1.5 text-xs font-pixel text-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>TRY IT</span>
                  <PixelArrow direction="right" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
