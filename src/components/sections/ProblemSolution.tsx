"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, BarChart3, Tag, Wand2, Phone, Clipboard, ArrowRight, CheckCircle } from "lucide-react";

const tabs = [
  { id: "campanhas", label: "Campanhas", icon: Zap },
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "categorizacao", label: "Categorização", icon: Tag },
  { id: "automacao", label: "Automação", icon: Wand2 },
  { id: "chamadas", label: "Chamadas", icon: Phone },
  { id: "pesquisas", label: "Pesquisas", icon: Clipboard },
];

const contents = {
  campanhas: {
    title: "Campanhas",
    description: "Dispare campanhas para listas de contatos e acompanhe os resultados em tempo real. Descubra quem está engajado, no momento de compra, e direcione suas ações com precisão para ampliar conversões sem desperdiçar esforço.",
  },
  dashboard: {
    title: "Dashboard",
    description: "Não trabalhe no escuro. Acompanhe em gráficos dinâmicos e relatórios completos a verdadeira saúde do seu atendimento. Veja indicadores de produtividade, ROI e tendências de mercado para tomar decisões com segurança e antecipar oportunidades.",
  },
  categorizacao: {
    title: "Categorização",
    description: "Com a categorização por rótulos, cada atendimento é classificado e acompanhado de ponta a ponta. Isso significa mais clareza, melhor priorização e estratégias muito mais assertivas.",
  },
  automacao: {
    title: "Automação",
    description: "Crie jornadas automatizadas, fluxos conversacionais e integrações em Low-Code. Nossa tecnologia de automação reduz custos e aumenta eficiência, permitindo que sua equipe foque onde realmente importa: o cliente.",
  },
  chamadas: {
    title: "Chamadas",
    description: "Converse com seus clientes por voz com a API oficial do WhatsApp. Realize e receba ligações, acompanhe métricas e veja relatórios claros — tudo no mesmo ambiente em que o restante dos contatos já acontece.",
  },
  pesquisas: {
    title: "Pesquisas",
    description: "Entenda, de verdade, o que seu cliente pensa do seu atendimento. Com pesquisas de satisfação (CSAT) simples e visuais, você mede impacto, identifica melhorias e fortalece ainda mais sua marca.",
  },
};

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("campanhas");

  const activeContent = contents[activeTab as keyof typeof contents];

  return (
    <section ref={ref} className="py-24 bg-white" id="solucoes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Tudo o que você precisa para dominar o{" "}
            <span className="gradient-text">Google e Bing Ads</span>. Sem ferramentas soltas, sem perda de dados.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Ratoeira Hub nasceu para resolver o maior pesadelo de quem investe em tráfego: o vazamento de conversões entre a página e a plataforma de anúncios. 
            Nós unimos a inteligência de dados mais afiada do mercado com um construtor de páginas veloz e otimizado para ROI.
          </p>
          <p className="text-lg text-orange-600 font-semibold">
            Escolha a ferramenta que falta na sua operação ou integre ambas para resultados explosives.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-yellow-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                {activeContent.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {activeContent.description}
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-2xl aspect-video flex items-center justify-center overflow-hidden"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500">
                  {activeTab === "campanhas" && <Zap className="w-10 h-10 text-white" />}
                  {activeTab === "dashboard" && <BarChart3 className="w-10 h-10 text-white" />}
                  {activeTab === "categorizacao" && <Tag className="w-10 h-10 text-white" />}
                  {activeTab === "automacao" && <Wand2 className="w-10 h-10 text-white" />}
                  {activeTab === "chamadas" && <Phone className="w-10 h-10 text-white" />}
                  {activeTab === "pesquisas" && <Clipboard className="w-10 h-10 text-white" />}
                </div>
                <p className="text-gray-500">Visualização do módulo {activeContent.title}</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
