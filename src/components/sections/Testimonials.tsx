"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Santiago",
    role: "Mentor de Tráfego",
    company: "Scalers Club",
    avatar: "R",
    color: "#FFB800",
    rating: 5,
    quote: "Indico a Ratoeira Hub para todos os meus mentorados. O nível de precisão no rastreamento é absurda. Finalmente consigo mostrar aos alunos exatamente de onde vem cada venda.",
    metric: "+340%",
    metricLabel: "de precisão no rastreamento",
  },
  {
    name: "Carla Mendes",
    role: "Afiliada Top",
    company: "Hotmart",
    avatar: "C",
    color: "#FF7E4A",
    rating: 5,
    quote: "Antes eu perdia 30% das conversões por falta de rastreamento. Com a Ratoeira, zero vazamento. Meu faturamento afiliado aumentou 127% no primeiro mês.",
    metric: "+127%",
    metricLabel: "faturamento em 30 dias",
  },
  {
    name: "Thiago Ferreira",
    role: "Gestor de Tráfego",
    company: "Mídia Performance",
    avatar: "T",
    color: "#003B5C",
    rating: 5,
    quote: "Trabalho com infoprodutos há 4 anos e nunca vi um sistema de rastreamento tão completo. As páginas da Ratoeira Pages convertem absurdamente bem.",
    metric: "2.8%",
    metricLabel: "média de conversão",
  },
  {
    name: "Juliana Costa",
    role: "Criadora de Cursos",
    company: "Academia Digital",
    avatar: "J",
    color: "#FFB800",
    rating: 5,
    quote: "Minhas taxas de conversão dispararam depois que migrei para o ecossistema Ratoeira. O trackeamento perfeito faz toda a diferença na otimização.",
    metric: "+89%",
    metricLabel: "nas conversões",
  },
  {
    name: "Marcos Vinícius",
    role: "Investidor em Tráfego",
    company: "Growth Lab",
    avatar: "M",
    color: "#FF7E4A",
    rating: 5,
    quote: "Escalo campanhas de 6 dígitos por mês na Ratoeira. A confiabilidade dos dados me permite operar com muito mais segurança e assertividade.",
    metric: "R$100k+",
    metricLabel: "mensais em tráfego",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-28 bg-gray-50" id="cases">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-orange-700 text-sm font-semibold">
            💬 Depoimentos Reais
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Quem{" "}
            <span className="gradient-text">domina o tráfego</span>, confia na Ratoeira
          </h2>
          <p className="text-gray-500 text-xl max-w-xl mx-auto">
            Veja o que mentores e afiliados do mercado de infoprodutos dizem sobre os resultados.
          </p>
        </motion.div>

        {/* Featured testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-10 border border-yellow-200 shadow-2xl shadow-yellow-500/10">
            <Quote className="w-10 h-10 text-yellow-400 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-gray-800 leading-relaxed mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: testimonials[active].color }}
                    >
                      {testimonials[active].avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonials[active].name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonials[active].role} · {testimonials[active].company}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl px-5 py-3 border border-yellow-200 shadow-sm text-center">
                    <p className="text-2xl font-black gradient-text">{testimonials[active].metric}</p>
                    <p className="text-xs text-gray-500 font-medium">{testimonials[active].metricLabel}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 flex items-center justify-center transition-all text-gray-500 hover:text-yellow-500"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-6 h-2 bg-yellow-500" : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 flex items-center justify-center transition-all text-gray-500 hover:text-yellow-500"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Grid of mini testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
