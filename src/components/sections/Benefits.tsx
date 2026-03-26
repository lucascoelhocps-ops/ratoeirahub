"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Zap, Globe, Smartphone, Shield, Bell, Link2, Rocket, BarChart3, Users, TrendingUp } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  AdsSkeleton,
  PagesSkeleton,
  IntegrationsSkeleton,
  NotificationSkeleton,
  SecuritySkeleton,
} from "@/components/ui/ArsenalSkeletons";

const items = [
  {
    title: "Ratoeira Ads",
    description: "A inteligência de rastreamento mais confiável do mercado para multiplicar seus lucros sabendo de onde vem cada venda.",
    header: <AdsSkeleton />,
    className: "md:col-span-2",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Ratoeira Pages",
    description: "Crie páginas de alta conversão com carregamento ultrarrápido em minutos, sem código.",
    header: <PagesSkeleton />,
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "Integrações +50",
    description: "Conecte-se com as principais plataformas do mercado brasileiro e global em segundos.",
    header: <IntegrationsSkeleton />,
    className: "md:col-span-1",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Alertas em Tempo Real",
    description: "Receba notificações instantâneas de cada venda e checkout diretamente no seu app.",
    header: <NotificationSkeleton />,
    className: "md:col-span-1",
    icon: <Bell className="h-4 w-4" />,
  },
  {
    title: "Segurança Avançada",
    description: "Bloqueie IPs indesejados e proteja seu orçamento de tráfego inválido e cliques maliciosos.",
    header: <SecuritySkeleton />,
    className: "md:col-span-1",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    title: "Multi-Domínios",
    description: "Hospedagem inclusa e gestão de múltiplos domínios em um único painel centralizado.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-100 dark:bg-neutral-800 rounded-xl items-center justify-center">
        <div className="flex -space-x-2">
           {[1,2,3,4].map(i => (
             <div key={i} className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 border-2 border-neutral-100 dark:border-neutral-900 flex items-center justify-center font-bold text-[10px] text-neutral-400">
               {i}.com
             </div>
           ))}
        </div>
      </div>
    ),
    className: "md:col-span-2",
    icon: <Link2 className="h-4 w-4" />,
  },
  {
    title: "Dashboard de Performance",
    description: "Visualize métricas vitais do seu negócio com gráficos em tempo real e exportação fácil.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-24 bg-linear-to-br from-[#E6A600]/10 to-transparent rounded-xl p-4">
        <div className="h-full w-full border border-dashed border-[#E6A600]/30 rounded-lg flex items-center justify-center">
           <BarChart3 className="w-8 h-8 text-[#E6A600] opacity-50" />
        </div>
      </div>
    ),
    className: "md:col-span-1",
    icon: <TrendingUp className="h-4 w-4" />,
  }
];

// Componente Principal
export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-gray-50 dark:bg-black/5" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Escolha o seu arsenal ou use a{" "}
            <span className="text-[#E6A600]">força total do ecossistema</span>.
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Ferramentas integradas para dominar o tráfego pago, aumentar a conversão e escalar sua operação com dados reais.
          </p>
        </motion.div>

        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
