"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#integracoes", label: "Integrações" },
  { href: "#clientes", label: "Clientes" },
  { href: "#precos", label: "Preços" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg shadow-amber-500/10 border-b border-amber-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-button bg-[#ffb800] flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
              <Zap className="w-4 h-4 text-[#0a0a0a]" />
            </div>
            <span className="text-xl font-bold text-white">
              Ratoeira<span className="text-[#ffb800]">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#ffb800] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb800] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#login"
              className="text-sm font-medium text-gray-300 hover:text-[#ffb800] transition-colors px-4 py-2"
            >
              Entrar
            </Link>
            <Link
              href="#demo"
              className="text-sm font-semibold text-[#0a0a0a] bg-[#ffb800] hover:bg-[#e6a600] px-5 py-2.5 rounded-button transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
            >
              Teste grátis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-button text-gray-300 hover:text-[#ffb800] hover:bg-amber-500/10 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-amber-500/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium text-gray-200 hover:text-[#ffb800] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-amber-500/10">
                <Link
                  href="#login"
                  className="text-center text-sm font-medium text-gray-300 border border-amber-500/30 rounded-button py-2.5 hover:border-amber-400 hover:text-[#ffb800] transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  href="#demo"
                  className="text-center text-sm font-semibold text-[#0a0a0a] bg-[#ffb800] rounded-button py-2.5 hover:bg-[#e6a600] transition-colors"
                >
                  Teste grátis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
