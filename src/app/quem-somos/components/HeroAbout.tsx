"use client";

import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700">
              <span className="text-sm font-semibold">NOSSA HISTÓRIA</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              Conheça um pouco mais sobre a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Nossa Jornada
              </span>
            </h1>

            <div className="space-y-6 text-gray-600 font-medium leading-relaxed max-w-xl text-lg">
              <p>
                Nascemos com um propósito claro: aniquilar o desperdício de verba no tráfego pago.
                No início, éramos apenas uma equipe de estrategistas cansados de ferramentas soltas
                e dados imprecisos. Percebemos que o verdadeiro gargalo das operações não estava no anúncio,
                mas no ecossistema que o sustentava.
              </p>
              <p>
                Foi assim que decidimos construir o Ratoeira Hub. Um ambiente unificado onde
                rastreamento cirúrgico e páginas de altíssima conversão trabalham juntos.
                Nossa jornada é marcada pela obsessão por performance e pelo sucesso
                dos mais de 1.500 parceiros que escalam conosco todos os dias.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual / Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square">
              {/* Main Image placeholder (Top Right) */}
              <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-gray-100 rounded-3xl shadow-xl overflow-hidden group border border-gray-200">
                <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-sm">
                  Equipe Fundadora
                </div>
              </div>

              {/* Secondary Image placeholder (Bottom Left) */}
              <div className="absolute bottom-10 left-0 w-[60%] h-[50%] bg-gray-50 rounded-3xl shadow-2xl overflow-hidden z-10 group border border-gray-200">
                <div className="absolute inset-0 bg-gray-100 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-sm">
                  Primeiro Evento
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-[50%] left-[50%] w-24 h-24 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
