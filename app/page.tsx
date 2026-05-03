import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Firm from "@/components/Firm";
import Knowledge from "@/components/Knowledge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Approach />
      <Firm />
      <Knowledge />
      <Contact />
      <Footer />
    </main>
  );
}
