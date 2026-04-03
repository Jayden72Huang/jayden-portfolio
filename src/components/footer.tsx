import { Mail, ExternalLink, Heart } from "lucide-react";
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
    <footer className="border-t border-[#e8e4de] bg-[#f9f6f1]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#D97757] flex items-center justify-center text-white font-bold text-sm">
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
                className="w-9 h-9 rounded-lg bg-[#2b2b2b]/[0.05] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/50 transition-all"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="mailto:jayden@inflowx.ai"
                className="w-9 h-9 rounded-lg bg-[#2b2b2b]/[0.05] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/50 transition-all"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/5971d8445e87e712388e9ccb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#2b2b2b]/[0.05] hover:bg-[#D97757]/10 hover:text-[#D97757] flex items-center justify-center text-[#2b2b2b]/50 transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999] mb-4">
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
        <div className="mt-12 pt-6 border-t border-[#e8e4de] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999]">
            &copy; {new Date().getFullYear()} Jayden. Built with Next.js &
            Claude.
          </p>
          <p className="text-xs text-[#999] flex items-center gap-1">
            Made with <Heart size={12} className="text-[#D97757]" /> and lots of
            AI tokens
          </p>
        </div>
      </div>
    </footer>
  );
}
