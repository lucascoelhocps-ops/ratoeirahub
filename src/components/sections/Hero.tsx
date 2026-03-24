"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Instagram,
  Mail,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";

const floatingMessages = [
  {
    id: 1,
    name: "Ana Lima",
    message: "Quero saber sobre os planos! 😊",
    time: "agora",
    status: "delivered",
    color: "from-emerald-500 to-emerald-600",
    icon: MessageCircle,
    delay: 0,
  },
  {
    id: 2,
    name: "Carlos Mendes",
    message: "Resolvi meu problema em 2 minutos!",
    time: "1 min",
    status: "read",
    color: "from-amber-500 to-amber-600",
    icon: Phone,
    delay: 0.3,
  },
  {
    id: 3,
    name: "Marina Costa",
    message: "Atendimento incrível! ⭐⭐⭐⭐⭐",
    time: "3 min",
    status: "read",
    color: "from-pink-500 to-rose-500",
    icon: Instagram,
    delay: 0.6,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, #B88600 0%, #CC6438 50%, #B88600 100%)" }}>
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full bg-amber-400/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #ffb80022 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">A Primeira Impressão que Converte</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight"
            >
              O Ecossistema Definitivo para{" "}
              <span className="gradient-text">Escalar no Tráfego Pago</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Rastreamento cirúrgico e páginas de alta conversão em um único lugar. 
              Pare de perder dinheiro com cliques desqualificados e construa estruturas que vendem no automático.
            </motion.p>

            {/* Social Proof mini */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["A", "C", "M", "R", "L"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md"
                    style={{
                      backgroundColor: ["#ffb800", "#059669", "#e11d48", "#7c3aed", "#2563eb"][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 font-medium">
                  +1.500 empresas confiam na Ratoeira Hub
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffb800] hover:bg-[#e6a600] text-[#0a0a0a] font-bold rounded-2xl text-base transition-all duration-200 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 group"
              >
                Começar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl text-base border border-white/20 hover:border-amber-400/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver Demonstração
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-300"
            >
              {[
                "Método validado",
                "Suporte especializado",
                "Resultados garantidos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main dashboard mockup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-md"
            >
              {/* Dashboard card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-amber-500/20 border border-amber-100 overflow-hidden">
                {/* Header bar */}
                <div className="bg-gradient-to-r from-[#ffb800] to-[#e6a600] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-amber-900 text-xs font-medium">Caixa de Entrada</p>
                      <h3 className="text-[#0a0a0a] font-bold text-lg">Atendimentos</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-amber-900 text-xs font-medium">Online</span>
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {[
                      { label: "Abertos", value: "24", color: "bg-amber-700" },
                      { label: "Resolvidos", value: "137", color: "bg-emerald-500" },
                      { label: "Pendentes", value: "8", color: "bg-rose-500" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-black/10 rounded-xl px-3 py-2">
                        <div className={`w-2 h-2 rounded-full ${stat.color} mb-1`} />
                        <p className="text-[#0a0a0a] font-bold text-lg leading-none">{stat.value}</p>
                        <p className="text-amber-900 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversation list */}
                <div className="divide-y divide-gray-50">
                  {floatingMessages.map((msg) => (
                    <div key={msg.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-amber-50/50 transition-colors">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${msg.color} flex items-center justify-center flex-shrink-0`}>
                        <msg.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-gray-900 truncate">{msg.name}</p>
                          <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{msg.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating notification cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 top-1/4 float-animation"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/15 border border-amber-100 px-4 py-3 flex items-center gap-3 max-w-[180px]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">+42 mensagens</p>
                  <p className="text-xs text-gray-500">Hoje</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-4 bottom-1/4 float-animation-delayed"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/15 border border-amber-100 px-4 py-3 flex items-center gap-3 max-w-[200px]">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">NPS: 94.8</p>
                  <p className="text-xs text-gray-500">Score do mês ✨</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
