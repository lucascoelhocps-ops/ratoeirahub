import Link from "next/link";
import { Zap, Twitter, Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#" },
    { label: "Integrações", href: "#" },
    { label: "API", href: "#" },
    { label: "Status", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  solucoes: [
    { label: "E-commerce", href: "#" },
    { label: "Saúde", href: "#" },
    { label: "Educação", href: "#" },
    { label: "Financeiro", href: "#" },
    { label: "Varejo", href: "#" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Imprensa", href: "#" },
    { label: "Parceiros", href: "#" },
  ],
  suporte: [
    { label: "Documentação", href: "#" },
    { label: "Central de Ajuda", href: "#" },
    { label: "Tutoriais", href: "#" },
    { label: "Comunidade", href: "#" },
    { label: "Contato", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              <span className="text-xl font-bold">
                Ratoeira<span className="text-yellow-400">Hub</span>
              </span>
            </Link>
            <p className="text-gray-200/70 text-sm leading-relaxed max-w-xs">
              A plataforma mais completa de atendimento ao cliente com IA. Conecte todos os seus canais em um só lugar.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-200/60 text-sm">
                <Mail className="w-4 h-4" />
                <span>contato@ratoeirahub.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200/60 text-sm">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-yellow-500 border border-white/10 hover:border-yellow-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4 text-yellow-400 hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-4">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-200/60 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-200/50">
            © {new Date().getFullYear()} Ratoeira Hub. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-200/50">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
