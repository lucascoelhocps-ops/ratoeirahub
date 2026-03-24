"use client";

import Link from "next/link";
import { Zap, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const footerLinks = {
  Produto: [
    { href: "#plataforma", label: "Funcionalidades" },
    { href: "#integracoes", label: "Integrações" },
    { href: "#precos", label: "Preços" },
    { href: "#", label: "Novidades" },
    { href: "#", label: "API" },
  ],
  Empresa: [
    { href: "#", label: "Sobre nós" },
    { href: "#clientes", label: "Clientes" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreiras" },
    { href: "#", label: "Parceiros" },
  ],
  Suporte: [
    { href: "#", label: "Central de Ajuda" },
    { href: "#", label: "Status" },
    { href: "#demo", label: "Falar com vendas" },
    { href: "#", label: "Comunidade" },
    { href: "#", label: "Webinars" },
  ],
  Legal: [
    { href: "#", label: "Privacidade" },
    { href: "#", label: "Termos de uso" },
    { href: "#", label: "Cookies" },
    { href: "#", label: "LGPD" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-5 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white">Ratoeira Hub</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              A plataforma completa de atendimento inteligente para empresas que querem crescer.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-400 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ratoeira Hub Technologies. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-600">Todos os sistemas operacionais</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
