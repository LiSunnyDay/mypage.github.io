import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Life from "@/components/Life";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Expertise />
      <Projects />
      <Life />
      <Portfolio />
      <Footer />
    </main>
  );
}
