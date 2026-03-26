"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, ArrowRight, Rocket } from "lucide-react";

export default function Integrations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white" id="integracoes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            O Combo Perfeito:{" "}
            <span className="gradient-text">Ratoeira Ads + Ratoeira Pages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            O que acontece quando o rastreamento perfeito encontra a página perfeita? 
            <span className="text-orange-600 font-semibold"> Sua taxa de trackeamento dispara.</span>
          </p>
        </motion.div>

        {/* Main Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-br from-yellow-50 via-white to-blue-50 rounded-3xl p-10 border border-gray-200 shadow-xl mb-12"
        >
          {/* Visual Integration Representation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            {/* Ratoeira Ads Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-400 w-64 text-center">
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Ratoeira Ads</h3>
              <p className="text-sm text-gray-500 mt-2">Dados & Rastreamento</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-yellow-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Ratoeira Pages Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-500 w-64 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Ratoeira Pages</h3>
              <p className="text-sm text-gray-500 mt-2">Velocidade & Design</p>
            </div>
          </div>

          {/* Integration Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Conexão em Segundos</h4>
              <p className="text-gray-600 text-sm">
                Selecione sua &quot;Ratoeira&quot; no painel e suas páginas estarão integradas automaticamente. Zero código. Zero dor de cabeça.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Captura Inteligente</h4>
              <p className="text-gray-600 text-sm">
                Nossos sistemas trabalhando juntos garantem a captura de todos os acessos — até mesmo de bots ou visitantes impacientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Economia Real</h4>
              <p className="text-gray-600 text-sm">
                Dados precisos significam algoritmos otimizados. Reduza seu CPA (Custo Por Aquisição) e escale suas campanhas com segurança.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href="#fale-conosco"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-button transition-all duration-200 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
          >
            Experimente o ecossistema completo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
