import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ratoeira Hub — Atendimento inteligente para sua empresa",
  description:
    "Plataforma de atendimento ao cliente com IA para aumentar conversões e reduzir o tempo de resposta. Integre WhatsApp, Instagram e muito mais.",
  keywords: "atendimento, CRM, chatbot, IA, WhatsApp, suporte ao cliente",
  openGraph: {
    title: "Ratoeira Hub — Atendimento inteligente",
    description: "A plataforma mais completa para atendimento ao cliente com IA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
