"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const mvvData = [
  {
    id: "missao",
    title: "Missão",
    icon: Target,
    content: "Nossa missão é aniquilar o desperdício de verba no tráfego pago. Construímos tecnologia de ponta para que gestores de tráfego, agências e infoprodutores tenham controle absoluto sobre seus dados e páginas, transformando cada clique em uma oportunidade real de venda."
  },
  {
    id: "visao",
    title: "Visão",
    icon: Eye,
    content: "Ser o ecossistema definitivo e insubstituível para operações de tráfego pago na América Latina. Queremos que a Ratoeira Hub seja sinônimo de alta performance, onde a tecnologia deixa de ser uma barreira e passa a ser o principal motor de escala."
  },
  {
    id: "valores",
    title: "Valores",
    icon: ShieldCheck,
    items: [
      "Obsessão por Conversão: O resultado do cliente é a nossa única métrica de sucesso.",
      "Arquitetura de Precisão: Não aceitamos vazamento de dados. Nossa engenharia é cirúrgica.",
      "Velocidade Brutal: No tráfego, milissegundos custam caro. Otimizamos para máxima velocidade.",
      "Transparência Radical: Dados claros, decisões precisas e comunicação sem ruídos."
    ]
  }
];

export default function MVVAbout() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-7 h-7 text-orange-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">
              Missão
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              {mvvData[0].content}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">
              Visão
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              {mvvData[1].content}
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="w-7 h-7 text-gray-700" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6">
              Valores
            </h2>
            <ul className="space-y-4">
              {mvvData[2].items?.map((item, index) => {
                const [title, desc] = item.split(": ");
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">
                      <strong className="text-gray-900 font-bold">{title}:</strong> {desc}
                    </p>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
