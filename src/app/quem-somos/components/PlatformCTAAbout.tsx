"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function PlatformCTAAbout() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner "Somos uma plataforma inovadora" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-100 mb-32 relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="relative aspect-square max-w-md mx-auto w-full">
              {/* Abstract Platform Representation */}
              <div className="absolute inset-0 border-2 border-orange-100 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-amber-50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center text-white">
                  <Zap className="w-10 h-10" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute bottom-10 right-10 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Somos o ecossistema <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">definitivo</span> para escala.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Projetamos a Ratoeira Hub para aniquilar o desperdício de verba e a complexidade técnica. 
                Oferecemos uma solução segura, rápida e abrangente que une rastreamento cirúrgico e páginas 
                de altíssima conversão em um único lugar.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA "Vamos transformar" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight">
              Vamos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                Transformar
              </span><br />
              sua operação?
            </h2>
            <p className="text-gray-600 text-xl max-w-md leading-relaxed">
              Pare de perder dinheiro com cliques desqualificados. Dê o próximo passo na sua jornada de escala.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">E-mail Profissional</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Investimento Mensal em Tráfego</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none">
                  <option>Até R$ 10.000</option>
                  <option>R$ 10.000 a R$ 50.000</option>
                  <option>R$ 50.000 a R$ 100.000</option>
                  <option>Acima de R$ 100.000</option>
                </select>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 group mt-6">
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
