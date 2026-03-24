"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden animated-gradient" id="parcerias">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-yellow-300/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Emoji + tagline */}
          

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Pronto para acabar com o desperdício de verba e{" "}
            <span className="text-yellow-300">multiplicar suas vendas</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-yellow-200/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Comece a usar a Ratoeira Hub hoje. Configure sua estrutura em minutos e veja a diferença que uma plataforma orientada a conversão faz no seu bolso.
          </p>

          {/* Garantia */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-yellow-200 text-sm">
            <span className="text-green-400">✓</span> Risco Zero. Teste por 7 dias e, se não gostar, devolvemos seu dinheiro.
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#fale-conosco"
              className="inline-flex items-center gap-2.5 px-10 py-5 bg-white text-gray-900 font-black rounded-2xl text-lg hover:bg-yellow-400 transition-all duration-200 shadow-2xl shadow-yellow-900/30 hover:-translate-y-0.5 group"
            >
              Quero Acessar a Ratoeira Hub
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
