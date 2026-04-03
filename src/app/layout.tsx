import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayden — AI Builder & Agent Entrepreneur",
  description:
    "00后AI创业者 | NUS硕 | InflowX AI创始人 | 7x黑客松获奖 | 专攻AI自动化营销Agent",
  openGraph: {
    title: "Jayden — AI Builder & Agent Entrepreneur",
    description:
      "Building AI agents that ship. Founder of InflowX AI, 7x Hackathon Winner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
