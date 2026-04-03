"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxClouds() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress 0 = section just entering viewport, 1 = fully scrolled past
      const raw = 1 - rect.bottom / (windowH + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cloud positions driven by scroll progress
  const leftX = -60 + progress * 110; // from -60% to +50%
  const rightX = 60 - progress * 110; // from +60% to -50%
  const cloudOpacity = Math.min(1, progress * 2.5);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[420px] md:h-[500px] overflow-hidden bg-[#2b2b2b] flex items-center justify-center"
    >
      {/* Left cloud */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[220px] md:h-[320px] transition-none"
        style={{
          transform: `translateX(${leftX}%) translateY(-50%)`,
          opacity: cloudOpacity,
        }}
      >
        <Image
          src="/images/cloud-left.png"
          alt=""
          fill
          className="object-contain pixel-art"
          unoptimized
        />
        {/* Fallback CSS cloud */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 20 12" className="opacity-20">
            <rect x="6" y="0" width="8" height="2" fill="#e8e4de" />
            <rect x="4" y="2" width="12" height="2" fill="#e8e4de" />
            <rect x="2" y="4" width="16" height="2" fill="#d4cfc7" />
            <rect x="0" y="6" width="20" height="2" fill="#e8e4de" />
            <rect x="1" y="8" width="18" height="2" fill="#d4cfc7" />
            <rect x="3" y="10" width="14" height="2" fill="#e8e4de" />
          </svg>
        </div>
      </div>

      {/* Right cloud */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[200px] md:h-[300px] transition-none"
        style={{
          transform: `translateX(${rightX}%) translateY(-50%)`,
          opacity: cloudOpacity,
        }}
      >
        <Image
          src="/images/cloud-right.png"
          alt=""
          fill
          className="object-contain pixel-art"
          unoptimized
        />
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 18 10" className="opacity-20">
            <rect x="4" y="0" width="10" height="2" fill="#e8e4de" />
            <rect x="2" y="2" width="14" height="2" fill="#d4cfc7" />
            <rect x="0" y="4" width="18" height="2" fill="#e8e4de" />
            <rect x="1" y="6" width="16" height="2" fill="#d4cfc7" />
            <rect x="3" y="8" width="12" height="2" fill="#e8e4de" />
          </svg>
        </div>
      </div>

      {/* Floating pixel stars in the dark section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[30%] animate-sparkle" style={{ animationDelay: "0s" }}>
          <svg width="8" height="8" viewBox="0 0 3 3">
            <rect x="1" y="0" width="1" height="1" fill="#D97757" />
            <rect x="0" y="1" width="3" height="1" fill="#D97757" />
            <rect x="1" y="2" width="1" height="1" fill="#D97757" />
          </svg>
        </div>
        <div className="absolute top-[70%] right-[25%] animate-sparkle" style={{ animationDelay: "1s" }}>
          <svg width="6" height="6" viewBox="0 0 3 3">
            <rect x="1" y="0" width="1" height="1" fill="#e8956e" />
            <rect x="0" y="1" width="3" height="1" fill="#e8956e" />
            <rect x="1" y="2" width="1" height="1" fill="#e8956e" />
          </svg>
        </div>
        <div className="absolute top-[25%] right-[40%] animate-sparkle" style={{ animationDelay: "2s" }}>
          <svg width="5" height="5" viewBox="0 0 3 3">
            <rect x="1" y="0" width="1" height="1" fill="#f5c542" />
            <rect x="0" y="1" width="3" height="1" fill="#f5c542" />
            <rect x="1" y="2" width="1" height="1" fill="#f5c542" />
          </svg>
        </div>
      </div>

      {/* Center text */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight mb-4">
          Building for <em className="text-[#D97757]">everyone.</em>
        </h2>
        <p className="text-base md:text-lg text-white/60 leading-relaxed">
          For creators. For builders. For people who just want things done.
          <br className="hidden md:block" />
          For productivity. And for fun.
        </p>
      </div>
    </section>
  );
}
