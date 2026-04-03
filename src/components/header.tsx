"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Products", href: "#products" },
  { label: "AIGC", href: "#aigc" },
];

function PixelHamburger({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 7 7">
        <rect x="0" y="0" width="1" height="1" fill="currentColor" />
        <rect x="6" y="0" width="1" height="1" fill="currentColor" />
        <rect x="1" y="1" width="1" height="1" fill="currentColor" />
        <rect x="5" y="1" width="1" height="1" fill="currentColor" />
        <rect x="2" y="2" width="1" height="1" fill="currentColor" />
        <rect x="4" y="2" width="1" height="1" fill="currentColor" />
        <rect x="3" y="3" width="1" height="1" fill="currentColor" />
        <rect x="2" y="4" width="1" height="1" fill="currentColor" />
        <rect x="4" y="4" width="1" height="1" fill="currentColor" />
        <rect x="1" y="5" width="1" height="1" fill="currentColor" />
        <rect x="5" y="5" width="1" height="1" fill="currentColor" />
        <rect x="0" y="6" width="1" height="1" fill="currentColor" />
        <rect x="6" y="6" width="1" height="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 7 5">
      <rect x="0" y="0" width="7" height="1" fill="currentColor" />
      <rect x="0" y="2" width="7" height="1" fill="currentColor" />
      <rect x="0" y="4" width="7" height="1" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f6f1]/80 backdrop-blur-md border-b-2 border-[#e8e4de] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo — pixel style */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[#D97757] flex items-center justify-center text-white font-pixel text-sm">
            J
          </div>
          <span className="font-display text-xl text-[#2b2b2b] group-hover:text-[#D97757] transition-colors">
            Jayden
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2b2b2b]/60 hover:text-[#D97757] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Jayden72Huang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#2b2b2b]/60 hover:text-[#D97757] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:jayden@inflowx.ai"
            className="px-5 py-2 bg-[#D97757] text-white text-sm font-pixel hover:bg-[#c4603f] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#2b2b2b]/70"
        >
          <PixelHamburger open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-[#fdfbf7] shadow-lg border-2 border-[#e8e4de] p-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-[#2b2b2b]/70 hover:text-[#D97757] hover:bg-[#D97757]/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
