"use client";

/* ============================================
   Pixel Art Decorative Components
   All visuals are CSS/SVG — no icon libraries
   ============================================ */

export function PixelCloud({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 16 8" className={`${className}`}>
      <rect x="4" y="0" width="8" height="2" fill="#e8e4de" />
      <rect x="2" y="2" width="12" height="2" fill="#e8e4de" />
      <rect x="0" y="4" width="16" height="2" fill="#e8e4de" />
      <rect x="2" y="6" width="12" height="2" fill="#e8e4de" />
    </svg>
  );
}

export function PixelStar({ className = "", size = 20, color = "#D97757" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 7 7" className={className}>
      <rect x="3" y="0" width="1" height="1" fill={color} />
      <rect x="2" y="1" width="3" height="1" fill={color} />
      <rect x="0" y="2" width="7" height="1" fill={color} />
      <rect x="1" y="3" width="5" height="1" fill={color} />
      <rect x="1" y="4" width="2" height="1" fill={color} />
      <rect x="4" y="4" width="2" height="1" fill={color} />
      <rect x="0" y="5" width="2" height="1" fill={color} />
      <rect x="5" y="5" width="2" height="1" fill={color} />
    </svg>
  );
}

export function PixelHeart({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 9 8" className={className}>
      <rect x="1" y="0" width="2" height="1" fill="#D97757" />
      <rect x="6" y="0" width="2" height="1" fill="#D97757" />
      <rect x="0" y="1" width="4" height="1" fill="#D97757" />
      <rect x="5" y="1" width="4" height="1" fill="#D97757" />
      <rect x="0" y="2" width="9" height="1" fill="#D97757" />
      <rect x="0" y="3" width="9" height="1" fill="#e8956e" />
      <rect x="1" y="4" width="7" height="1" fill="#D97757" />
      <rect x="2" y="5" width="5" height="1" fill="#D97757" />
      <rect x="3" y="6" width="3" height="1" fill="#c4603f" />
      <rect x="4" y="7" width="1" height="1" fill="#c4603f" />
    </svg>
  );
}

export function PixelDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-3 py-8 ${className}`}>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#e8e4de] to-transparent" />
      <PixelStar size={12} color="#D97757" />
      <PixelStar size={16} color="#e8956e" />
      <PixelStar size={12} color="#D97757" />
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#e8e4de] to-transparent" />
    </div>
  );
}

export function PixelArrow({ direction = "down", className = "" }: { direction?: "down" | "right"; className?: string }) {
  if (direction === "right") {
    return (
      <svg width="12" height="12" viewBox="0 0 5 5" className={className}>
        <rect x="0" y="2" width="1" height="1" fill="currentColor" />
        <rect x="1" y="1" width="1" height="3" fill="currentColor" />
        <rect x="2" y="0" width="1" height="5" fill="currentColor" />
        <rect x="3" y="1" width="1" height="3" fill="currentColor" />
        <rect x="4" y="2" width="1" height="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 5 5" className={className}>
      <rect x="2" y="0" width="1" height="1" fill="currentColor" />
      <rect x="1" y="1" width="3" height="1" fill="currentColor" />
      <rect x="0" y="2" width="5" height="1" fill="currentColor" />
      <rect x="1" y="3" width="3" height="1" fill="currentColor" />
      <rect x="2" y="4" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

export function FloatingPixelElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating clouds */}
      <div className="absolute top-[15%] left-[5%] animate-float-slow opacity-40">
        <PixelCloud size={100} />
      </div>
      <div className="absolute top-[8%] right-[12%] animate-float opacity-30">
        <PixelCloud size={70} />
      </div>
      <div className="absolute top-[45%] right-[3%] animate-float-delay opacity-20">
        <PixelCloud size={90} />
      </div>

      {/* Floating stars */}
      <div className="absolute top-[20%] right-[25%] animate-sparkle" style={{ animationDelay: "0s" }}>
        <PixelStar size={14} color="#D97757" />
      </div>
      <div className="absolute top-[60%] left-[15%] animate-sparkle" style={{ animationDelay: "0.7s" }}>
        <PixelStar size={10} color="#e8956e" />
      </div>
      <div className="absolute top-[35%] left-[80%] animate-sparkle" style={{ animationDelay: "1.4s" }}>
        <PixelStar size={12} color="#f5c542" />
      </div>
      <div className="absolute bottom-[20%] right-[30%] animate-sparkle" style={{ animationDelay: "2.1s" }}>
        <PixelStar size={8} color="#D97757" />
      </div>
    </div>
  );
}

export function PixelSceneDivider() {
  return (
    <div className="relative w-full h-32 md:h-48 overflow-hidden">
      {/* Ground */}
      <div className="absolute bottom-0 w-full h-12 bg-[#e8e4de]/50" />
      <div className="absolute bottom-12 w-full h-4 bg-[#d4cfc7]/30" />

      {/* Pixel trees */}
      <div className="absolute bottom-12 left-[10%]">
        <svg width="24" height="40" viewBox="0 0 6 10">
          <rect x="2" y="7" width="2" height="3" fill="#8B6914" />
          <rect x="1" y="4" width="4" height="3" fill="#6abf69" />
          <rect x="0" y="2" width="6" height="2" fill="#5a9f59" />
          <rect x="1" y="0" width="4" height="2" fill="#4a8f49" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-[25%]">
        <svg width="20" height="32" viewBox="0 0 5 8">
          <rect x="2" y="6" width="1" height="2" fill="#8B6914" />
          <rect x="1" y="3" width="3" height="3" fill="#6abf69" />
          <rect x="0" y="1" width="5" height="2" fill="#5a9f59" />
          <rect x="1" y="0" width="3" height="1" fill="#4a8f49" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-[15%]">
        <svg width="28" height="44" viewBox="0 0 7 11">
          <rect x="3" y="8" width="2" height="3" fill="#8B6914" />
          <rect x="1" y="5" width="5" height="3" fill="#6abf69" />
          <rect x="0" y="2" width="7" height="3" fill="#5a9f59" />
          <rect x="1" y="0" width="5" height="2" fill="#4a8f49" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-[35%]">
        <svg width="18" height="28" viewBox="0 0 5 7">
          <rect x="2" y="5" width="1" height="2" fill="#8B6914" />
          <rect x="1" y="3" width="3" height="2" fill="#6abf69" />
          <rect x="0" y="1" width="5" height="2" fill="#5a9f59" />
          <rect x="1" y="0" width="3" height="1" fill="#4a8f49" />
        </svg>
      </div>

      {/* Drifting clouds */}
      <div className="absolute top-4 animate-float-slow opacity-40">
        <PixelCloud size={80} />
      </div>
      <div className="absolute top-8 left-[40%] animate-float opacity-30">
        <PixelCloud size={60} />
      </div>
      <div className="absolute top-2 right-[20%] animate-float-delay opacity-35">
        <PixelCloud size={70} />
      </div>
    </div>
  );
}
