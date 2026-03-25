"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "O Início da Revolução",
    description: "Nascemos de uma dor real: o desperdício de verba. Nossa primeira versão focava exclusivamente em rastreamento cirúrgico para pequenos negócios locais que precisavam maximizar cada centavo no Google Ads.",
    align: "left",
  },
  {
    year: "2022",
    title: "Expansão do Ecossistema",
    description: "Com mais de 500 usuários ativos, entendemos que o rastreamento não era suficiente. Lançamos nosso construtor de páginas nativo, unindo a velocidade de carregamento com a precisão dos nossos pixels.",
    align: "right",
  },
  {
    year: "2023",
    title: "Reconhecimento do Mercado",
    description: "Fomos reconhecidos como a plataforma de maior crescimento no nicho de infoprodutos. Nossa arquitetura passou a suportar lançamentos de múltiplos sete dígitos sem um único segundo de instabilidade.",
    align: "left",
  },
  {
    year: "2024",
    title: "Inteligência Artificial Nativa",
    description: "Integramos IA diretamente no core da plataforma. Agora, o Ratoeira Hub não apenas rastreia, mas prevê o comportamento do usuário e otimiza as páginas em tempo real para aniquilar qualquer objeção de compra.",
    align: "right",
  }
];

export default function TimelineAbout() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Nossa Trajetória
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A evolução contínua da plataforma que está redefinindo o tráfego pago.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-amber-200 -translate-x-1/2 rounded-full" />

          <div className="space-y-24">
            {milestones.map((item, index) => {
              const isLeft = item.align === "left";
              return (
                <div key={item.year} className="relative flex flex-col md:flex-row items-center justify-center">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-white transform -translate-x-1/2 shadow-md z-20" />
                  
                  {/* Content Left */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-20 md:text-right" : "md:pl-20 md:order-2"}`}
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative group">
                      <div className={`absolute top-8 ${isLeft ? "-right-3" : "-left-3"} w-6 h-6 bg-white transform rotate-45 border-t border-r border-gray-100 hidden md:block ${isLeft ? "" : "rotate-[-135deg]"}`} />
                      
                      <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty Space for Grid Alignment */}
                  <div className={`hidden md:block w-1/2 ${isLeft ? "order-2" : "order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
