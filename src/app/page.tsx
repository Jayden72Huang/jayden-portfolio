import Header from "@/components/header";
import Hero from "@/components/hero";
import LiveDashboard from "@/components/live-dashboard";
import Projects from "@/components/projects";
import Hackathons from "@/components/hackathons";
import Products from "@/components/products";
import AigcGallery from "@/components/aigc-gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LiveDashboard />
        <Projects />
        <Hackathons />
        <Products />
        <AigcGallery />
      </main>
      <Footer />
    </>
  );
}
