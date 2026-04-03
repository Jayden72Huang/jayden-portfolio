import Header from "@/components/header";
import Hero from "@/components/hero";
import LiveDashboard from "@/components/live-dashboard";
import Projects from "@/components/projects";
import Hackathons from "@/components/hackathons";
import Products from "@/components/products";
import AigcGallery from "@/components/aigc-gallery";
import Footer from "@/components/footer";
import ParallaxLayer from "@/components/parallax-clouds";
import { PixelDivider } from "@/components/pixel-decorations";

export default function Home() {
  return (
    <>
      <Header />
      {/* Global parallax layer — floating pixel art elements throughout the page */}
      <ParallaxLayer />
      <main className="relative z-[2]">
        <Hero />
        <PixelDivider />
        <LiveDashboard />
        <PixelDivider />
        <Projects />
        <PixelDivider />
        <Hackathons />
        <PixelDivider />
        <Products />
        <AigcGallery />
      </main>
      <Footer />
    </>
  );
}
