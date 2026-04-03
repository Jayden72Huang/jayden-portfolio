"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/**
 * Global scroll-driven parallax layer.
 * Large pixel art elements float throughout the entire page at different speeds.
 * Positioned fixed and driven by scroll position — not confined to one section.
 */

interface FloatingElement {
  id: string;
  src: string;
  width: number;
  height: number;
  // Position anchors (% of page height for Y, viewport edge for X)
  startY: number; // When this element starts being visible (px from top)
  endY: number;   // When it leaves
  // X position
  side: "left" | "right";
  xOffset: number; // % from edge
  // Parallax
  speed: number; // 0.1 = slow, 1 = normal scroll speed
  // Opacity
  opacity: number;
}

const elements: FloatingElement[] = [
  // Cloud drifting near Hero → Dashboard transition
  {
    id: "cloud-hero-left",
    src: "/images/cloud-left.png",
    width: 380,
    height: 280,
    startY: 200,
    endY: 1200,
    side: "left",
    xOffset: -8,
    speed: 0.3,
    opacity: 0.55,
  },
  // Cloud on right near Dashboard
  {
    id: "cloud-dash-right",
    src: "/images/cloud-right.png",
    width: 320,
    height: 240,
    startY: 600,
    endY: 1800,
    side: "right",
    xOffset: -5,
    speed: 0.2,
    opacity: 0.45,
  },
  // Robot floating near Projects
  {
    id: "robot-projects",
    src: "/images/px-robot.png",
    width: 100,
    height: 100,
    startY: 1800,
    endY: 3200,
    side: "right",
    xOffset: 5,
    speed: 0.15,
    opacity: 0.35,
  },
  // Large cloud near Hackathons
  {
    id: "cloud-hack-left",
    src: "/images/cloud-left.png",
    width: 350,
    height: 260,
    startY: 3000,
    endY: 4500,
    side: "left",
    xOffset: -10,
    speed: 0.25,
    opacity: 0.4,
  },
  // Rocket floating near Products
  {
    id: "rocket-products",
    src: "/images/px-rocket.png",
    width: 80,
    height: 80,
    startY: 4000,
    endY: 5500,
    side: "left",
    xOffset: 8,
    speed: 0.1,
    opacity: 0.3,
  },
  // Cloud on right near AIGC
  {
    id: "cloud-aigc-right",
    src: "/images/cloud-right.png",
    width: 300,
    height: 220,
    startY: 5000,
    endY: 6500,
    side: "right",
    xOffset: -8,
    speed: 0.2,
    opacity: 0.5,
  },
  // Sparkle floating midpage
  {
    id: "sparkle-mid",
    src: "/images/px-sparkle.png",
    width: 70,
    height: 70,
    startY: 2200,
    endY: 3500,
    side: "left",
    xOffset: 15,
    speed: 0.08,
    opacity: 0.25,
  },
  // Trophy floating near hackathons
  {
    id: "trophy-hack",
    src: "/images/px-trophy.png",
    width: 90,
    height: 90,
    startY: 3400,
    endY: 4800,
    side: "right",
    xOffset: 10,
    speed: 0.12,
    opacity: 0.25,
  },
];

export default function ParallaxLayer() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {elements.map((el) => {
        // Calculate if element is in visible range
        const viewportH = typeof window !== "undefined" ? window.innerHeight : 900;
        const elementCenter = (el.startY + el.endY) / 2;
        const range = el.endY - el.startY;

        // Progress: how far through the element's scroll range we are
        const progress = Math.max(
          0,
          Math.min(1, (scrollY - el.startY + viewportH) / (range + viewportH))
        );

        // Only render if in range
        const isVisible = scrollY + viewportH > el.startY && scrollY < el.endY;
        if (!isVisible) return null;

        // Parallax Y offset: element moves slower than scroll
        const parallaxY = elementCenter - scrollY * (1 - el.speed) - viewportH * 0.3;

        // Fade in/out at edges
        const fadeIn = Math.min(1, progress * 4);
        const fadeOut = Math.min(1, (1 - progress) * 4);
        const opacity = el.opacity * fadeIn * fadeOut;

        const style: React.CSSProperties = {
          position: "absolute",
          top: parallaxY,
          ...(el.side === "left"
            ? { left: `${el.xOffset}%` }
            : { right: `${el.xOffset}%` }),
          width: el.width,
          height: el.height,
          opacity,
          transition: "none",
          willChange: "transform",
        };

        return (
          <div key={el.id} style={style}>
            <Image
              src={el.src}
              alt=""
              fill
              className="object-contain pixel-art"
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
}
