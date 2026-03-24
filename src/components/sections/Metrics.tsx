"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Layers } from "lucide-react";

const metrics = [
  {
    value: 16000000,
    suffix: "",
    label: "em vendas processadas",
    description: "total acumulado",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    value: 65000,
    suffix: "+",
    label: "ratoeiras armadas",
    description: "produtos rastreados",
    icon: Layers,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    value: 120000,
    suffix: "+",
    label: "visitas monitoradas",
    description: "por dia",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    value: 1500,
    suffix: "+",
    label: "anunciantes",
    description: "escalando com nossa tecnologia",
    icon: MessageSquare,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  const display =
    target >= 1000
      ? count >= 1000
        ? `${Math.floor(count / 1000)}${count % 1000 === 0 ? "" : "." + Math.floor((count % 1000) / 100)}K`
        : count.toString()
      : count.toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="empresa"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #003B5C 0%, #004a70 40%, #FFB800 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-200 text-sm font-medium">
            📊 Resultados comprovados
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            A escolha de quem leva o{" "}
            <span className="gradient-text">tráfego pago a sério</span>.
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-white/10 hover:bg-white/15 rounded-3xl p-8 border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>

              {/* Number */}
              <div className="text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums">
                {metric.value === 1 ? (
                  <span>
                    1<span className="text-yellow-300">B+</span>
                  </span>
                ) : (
                  <Counter target={metric.value} suffix="" />
                )}
                {metric.value !== 1 && (
                  <span className="text-yellow-300">{metric.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p className="text-white font-bold text-lg leading-tight">{metric.label}</p>
              <p className="text-yellow-200/60 text-sm mt-1">{metric.description}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
