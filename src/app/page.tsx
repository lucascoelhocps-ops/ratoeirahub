import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Benefits from "@/components/sections/Benefits";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Metrics />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
