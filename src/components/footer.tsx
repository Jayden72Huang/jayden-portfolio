import Image from "next/image";
import { PixelHeart, PixelStar, PixelCloud } from "./pixel-decorations";
import { GithubIcon } from "./icons";

const footerLinks = {
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Projects", href: "#projects" },
    { label: "Hackathons", href: "#hackathons" },
  ],
  Products: [
    { label: "InflowX AI", href: "https://inflowx.ai" },
    { label: "Cotify", href: "https://cotify.space" },
    { label: "ATM-OS", href: "https://github.com/Jayden72Huang/ATM-OS" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/Jayden72Huang" },
    {
      label: "小红书",
      href: "https://www.xiaohongshu.com/user/profile/5971d8445e87e712388e9ccb",
    },
    { label: "Email", href: "mailto:jayden@inflowx.ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#e8e4de] bg-[#f9f6f1] relative overflow-hidden">
      {/* Pixel art landscape illustration */}
      <div className="w-full h-40 md:h-56 relative overflow-hidden">
        <Image
          src="/images/footer-landscape.png"
          alt="Pixel art landscape"
          fill
          className="object-cover pixel-art"
          unoptimized
        />
        {/* Fallback gradient if image not loaded */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f6f1] via-[#fdf0e8] to-[#f0e8d8] -z-10">
          {/* CSS pixel art scene as fallback */}
          <div className="absolute bottom-0 w-full h-12 bg-[#d4cfc7]/40" />
          <div className="absolute top-8 left-[10%] animate-float-slow opacity-40">
            <PixelCloud size={80} />
          </div>
          <div className="absolute top-4 right-[20%] animate-float opacity-30">
            <PixelCloud size={60} />
          </div>
          <div className="absolute top-12 left-[50%] animate-sparkle">
            <PixelStar size={16} color="#D97757" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#D97757] flex items-center justify-center text-white font-pixel text-sm">
                J
              </div>
              <span className="font-display text-xl text-[#2b2b2b]">
                Jayden
              </span>
            </div>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs mb-6">
              AI Builder & Agent Entrepreneur.
              <br />
              Building tools that ship, not slides.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Jayden72Huang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#2b2b2b]/[0.04] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/50 transition-all border-2 border-transparent hover:border-[#D97757]/20"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="mailto:jayden@inflowx.ai"
                className="w-9 h-9 bg-[#2b2b2b]/[0.04] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/50 transition-all border-2 border-transparent hover:border-[#D97757]/20"
              >
                <svg width="16" height="16" viewBox="0 0 8 6" fill="currentColor">
                  <rect x="0" y="0" width="8" height="1" />
                  <rect x="0" y="1" width="1" height="1" /><rect x="7" y="1" width="1" height="1" />
                  <rect x="1" y="1" width="1" height="1" /><rect x="6" y="1" width="1" height="1" />
                  <rect x="2" y="2" width="1" height="1" /><rect x="5" y="2" width="1" height="1" /><rect x="0" y="2" width="1" height="1" /><rect x="7" y="2" width="1" height="1" />
                  <rect x="3" y="3" width="2" height="1" /><rect x="0" y="3" width="1" height="1" /><rect x="7" y="3" width="1" height="1" />
                  <rect x="0" y="4" width="1" height="1" /><rect x="7" y="4" width="1" height="1" />
                  <rect x="0" y="5" width="8" height="1" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-pixel text-[10px] uppercase tracking-wider text-[#999] mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-[#666] hover:text-[#D97757] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t-2 border-[#e8e4de] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999]">
            &copy; {new Date().getFullYear()} Jayden. Built with Next.js &
            Claude.
          </p>
          <p className="text-xs text-[#999] flex items-center gap-1.5">
            Made with <PixelHeart size={14} /> and lots of AI tokens
          </p>
        </div>
      </div>
    </footer>
  );
}
