"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#empresa", label: "Empresa" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#planos", label: "Planos" },
  { href: "#parcerias", label: "Parcerias" },
  { href: "#cases", label: "Cases" },
  { href: "#materiais", label: "Materiais" },
  { href: "#fale-conosco", label: "Fale Conosco" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    scrolled
                      ? "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
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
