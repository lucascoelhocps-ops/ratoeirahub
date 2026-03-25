"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#empresa", label: "Empresa", hasDropdown: true, type: "empresa" },
  { href: "#solucoes", label: "Soluções", hasDropdown: true, type: "solucoes" },
  { href: "#planos", label: "Planos", hasDropdown: true, type: "planos" },
  { href: "#parcerias", label: "Parcerias", hasDropdown: true, type: "parcerias" },
  { href: "#cases", label: "Cases" },
  { href: "#materiais", label: "Materiais", hasDropdown: true, type: "materiais" },
  { href: "#fale-conosco", label: "Fale Conosco" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-black tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>
                Ratoeira Hub
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative py-4"
                  onMouseEnter={() => link.hasDropdown && setHoveredItem(link.type || null)}
                  onMouseLeave={() => link.hasDropdown && setHoveredItem(null)}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                      scrolled
                        ? "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredItem === link.type ? "rotate-180" : ""}`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hoveredItem === link.type && link.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full mt-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2 ${
                          link.type === "materiais" ? "right-0" : "left-0"
                        } ${
                          link.type === "solucoes" || link.type === "materiais" ? "w-[850px]" : "w-[580px]"
                        }`}
                      >
                        {link.type === "empresa" ? (
                          <div className="flex">
                            {/* Left Side: Quem Somos */}
                            <div className="flex-1 p-8 hover:bg-orange-50/50 transition-colors group/item">
                              <div className="space-y-4">
                                <h3 className="text-2xl font-black text-orange-600 tracking-tight">Quem Somos</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                  Conheça um pouco mais sobre a nossa jornada na Ratoeira Hub e como estamos revolucionando o tráfego pago.
                                </p>
                                <Link href="/quem-somos" className="inline-flex items-center gap-3 text-gray-900 font-black text-sm group-hover/item:text-orange-600 transition-colors pt-4">
                                  Ir até Quem Somos
                                  <ArrowRight className="w-5 h-5 group-hover/item:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </div>

                            {/* Right Side: Carreiras (Highlighted) */}
                            <div className="w-[240px] p-8 bg-orange-600 rounded-2xl text-white space-y-4">
                              <h3 className="text-2xl font-black tracking-tight">Carreiras</h3>
                              <p className="text-white/80 text-sm leading-relaxed font-medium">
                                Faça parte do Ratoeira Hub! Conheça nossas vagas e venha escalar conosco.
                              </p>
                              <Link href="#carreiras" className="inline-flex items-center gap-2 font-black text-sm hover:translate-x-1 transition-transform pt-4">
                                Ir até Carreiras
                                <ArrowRight className="w-5 h-5" />
                              </Link>
                            </div>
                          </div>
                        ) : link.type === "solucoes" ? (
                          <div className="flex">
                            {/* Left: Departamentos */}
                            <div className="w-[200px] p-8 space-y-6">
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">POR DEPARTAMENTO</h4>
                              <div className="flex flex-col gap-4">
                                {["Atendimento", "Vendas", "Marketing", "Suporte", "Operação"].map((item) => (
                                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-black text-orange-600 hover:translate-x-1 transition-transform tracking-tight">
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Middle: Segmentos */}
                            <div className="w-[200px] p-8 space-y-6">
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">POR SEGMENTO</h4>
                              <div className="flex flex-col gap-4">
                                {["Saúde", "Financeiro", "Educação", "Varejo", "Infoprodutos"].map((item) => (
                                  <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-black text-orange-600 hover:translate-x-1 transition-transform tracking-tight">
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Right Side: Nossa Plataforma */}
                            <div className="flex-1 p-8 bg-orange-50/50 rounded-2xl space-y-6">
                              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">NOSSA PLATAFORMA</h4>
                              <div className="space-y-6">
                                {[
                                  { title: "Integrações", desc: "Toda a segurança e arquitetura do nosso ecossistema de dados." },
                                  { title: "Páginas", desc: "Estruturas de alta conversão otimizadas para escala real." },
                                  { title: "Rastreamento", desc: "Monitoramento cirúrgico para aniquilar o desperdício de verba." }
                                ].map((item) => (
                                  <Link key={item.title} href={`#${item.title.toLowerCase()}`} className="block group/plat">
                                    <h5 className="text-lg font-black text-orange-600 group-hover/plat:translate-x-1 transition-transform tracking-tight">{item.title}</h5>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : link.type === "materiais" ? (
                          <div className="flex">
                            {/* Left side links */}
                            <div className="flex-1 p-8 space-y-8">
                              {[
                                { title: "Documentação", desc: "Aprenda tudo sobre como configurar e usar o Ratoeira Hub." },
                                { title: "Políticas", desc: "Nossos termos de uso, privacidade e acordos de serviço." },
                                { title: "Suporte", desc: "Central de ajuda e canais de atendimento especializado." },
                                { title: "FAQ da Ratoeira", desc: "Respostas rápidas para as dúvidas mais frequentes." }
                              ].map((item) => (
                                <Link key={item.title} href={`#${item.title.toLowerCase().replace(" ", "-")}`} className="block group/mat hover:translate-x-1 transition-transform">
                                  <h5 className="text-lg font-black text-orange-600 tracking-tight">{item.title}</h5>
                                  <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                                </Link>
                              ))}
                            </div>

                            {/* Right side cards */}
                            <div className="w-[340px] p-2 space-y-2">
                              {/* Blog Card */}
                              <div className="bg-orange-50/50 rounded-2xl p-6 space-y-3 group/blog">
                                <h4 className="text-xl font-black text-orange-600 tracking-tight">Blog</h4>
                                <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                  Conteúdos estratégicos sobre tráfego pago e escala de operações.
                                </p>
                                <Link href="#blog" className="inline-flex items-center gap-2 text-gray-900 font-black text-xs group-hover/blog:text-orange-600 transition-colors pt-2">
                                  Ir até o Blog
                                  <ArrowRight className="w-4 h-4 group-hover/blog:translate-x-1 transition-transform" />
                                </Link>
                              </div>

                              {/* Community Card */}
                              <div className="bg-orange-600 rounded-2xl p-6 text-white space-y-3 group/comm">
                                <h4 className="text-xl font-black tracking-tight">Comunidade Hub</h4>
                                <p className="text-white/80 text-xs font-medium leading-relaxed">
                                  Troque experiências e estratégias com outros players do mercado.
                                </p>
                                <Link href="#comunidade" className="inline-flex items-center gap-2 font-black text-xs hover:translate-x-1 transition-transform pt-2">
                                  Ir até a Comunidade
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : link.type === "planos" ? (
                           <div className="p-8 hover:bg-orange-50/50 transition-colors group/item">
                             <div className="space-y-4">
                               <h3 className="text-2xl font-black text-orange-600 tracking-tight">Nossos Planos</h3>
                               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                 Conheça nossos planos e descubra qual é o ideal para a sua operação escalar.
                               </p>
                               <Link href="#planos" className="inline-flex items-center gap-3 text-gray-900 font-black text-sm group-hover/item:text-orange-600 transition-colors pt-4">
                                 Ir até Planos
                                 <ArrowRight className="w-5 h-5 group-hover/item:translate-x-1 transition-transform" />
                               </Link>
                             </div>
                           </div>
                         ) : (
                           <div className="p-2">
                             <div className="bg-orange-600 rounded-2xl p-8 text-white space-y-4">
                               <h3 className="text-2xl font-black tracking-tight leading-tight">Conheça o Programa <br /> de Canais</h3>
                               <p className="text-white/80 text-sm leading-relaxed font-medium">
                                 Descubra por que é vantajoso se tornar um parceiro do Ratoeira Hub.
                               </p>
                               <Link href="#canais" className="inline-flex items-center gap-2 font-black text-sm hover:translate-x-1 transition-transform pt-4">
                                 Ir até Canais
                                 <ArrowRight className="w-5 h-5" />
                               </Link>
                             </div>
                           </div>
                         )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                  scrolled
                    ? "text-gray-600 hover:text-orange-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Entrar
              </Link>
              <Link
                href="#"
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 group shadow-lg ${
                  scrolled
                    ? "bg-yellow-500 text-white hover:bg-yellow-600 shadow-yellow-500/25"
                    : "bg-white text-orange-600 hover:bg-orange-50 shadow-white/20"
                }`}
              >
                Teste grátis
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-button"
              onClick={() => setMobileOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link
                  href="#"
                  className="px-4 py-3 text-center text-sm font-semibold text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
                >
                  Entrar
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-white font-bold text-sm rounded-xl hover:bg-yellow-600 transition-all"
                >
                  Teste grátis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
