import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "./components/HeroAbout";
import TimelineAbout from "./components/TimelineAbout";
import MVVAbout from "./components/MVVAbout";
import GalleryAbout from "./components/GalleryAbout";
import PlatformCTAAbout from "./components/PlatformCTAAbout";

export const metadata = {
  title: "Quem Somos | Ratoeira Hub",
  description: "Conheça a história, missão e valores do Ratoeira Hub, o ecossistema definitivo para escalar no tráfego pago.",
};

export default function QuemSomosPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      {/* 1. Hero Section - "Conheça nossa jornada" */}
      <HeroAbout />
      
      {/* 2. Timeline / História (Zig-Zag) */}
      <TimelineAbout />
      
      {/* 3. Missão, Visão e Valores */}
      <MVVAbout />
      
      {/* 4. Galeria / Fotos da Equipe/Eventos */}
      <GalleryAbout />
      
      {/* 5. CTA Plataforma Inovadora */}
      <PlatformCTAAbout />

      <Footer />
    </main>
  );
}
