"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Zap, Globe, Smartphone, CheckCircle, Bell, Link2, Rocket, Palette, Clock, Shield } from "lucide-react";

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-gray-50" id="solucoes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Escolha o seu arsenal ou use a{" "}
            <span className="gradient-text">força total do ecossistema</span>.
          </h2>
        </motion.div>

        {/* Bloco 1: Ratoeira Ads */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 mb-12 border border-gray-200 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900">Ratoeira Ads</h3>
              <p className="text-lg text-orange-600 font-semibold">Foco em Dados e Rastreamento</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">A Inteligência</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                A solução de rastreamento mais confiável do mercado brasileiro.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">O Benefício</h4>
              <p className="text-gray-600 leading-relaxed">
                Proteja seu orçamento bloqueando IPs indesejados, marque checkouts com precisão e exporte conversões em tempo real. Multiplique seus lucros sabendo exatamente de onde vem cada venda.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Destaques</h4>
              <div className="grid gap-4">
                {[
                  { icon: Globe, text: "+50 Plataformas integradas" },
                  { icon: Bell, text: "App de notificações em tempo real" },
                  { icon: Link2, text: "Construtor de URL completo" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                    <item.icon className="w-6 h-6 text-yellow-600" />
                    <span className="font-semibold text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloco 2: Ratoeira Pages */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900">Ratoeira Pages</h3>
              <p className="text-lg text-orange-600 font-semibold">Foco em Velocidade e Design</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">A Estrutura</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Crie páginas que vendem em minutos, sem tocar em uma linha de código.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">O Benefício</h4>
              <p className="text-gray-600 leading-relaxed">
                Tempo é dinheiro. Use templates prontos, testados e validados para conversão. Personalize blocos, textos e imagens com um editor visual responsivo que deixa seus concorrentes no chinelo.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Destaques</h4>
              <div className="grid gap-4">
                {[
                  { icon: Globe, text: "Hospedagem inclusa" },
                  { icon: Smartphone, text: "Personalização por país/idade" },
                  { icon: Rocket, text: "Carregamento ultrarrápido" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <item.icon className="w-6 h-6 text-orange-500" />
                    <span className="font-semibold text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
