"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ComponentDemoProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

function ComponentDemo({ title, description, code, children }: ComponentDemoProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-heading-subtitle text-text-primary mb-2">{title}</h3>
          <p className="text-body-base text-text-secondary">{description}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 px-4 py-2 bg-surface-subdued border border-border-default rounded-button text-body-label text-text-secondary hover:text-text-primary hover:bg-gray-100 transition-all"
        >
          {copied ? "Copiado!" : "Copiar código"}
        </button>
      </div>

      <div className="p-8 bg-surface-default rounded-card border border-border-default shadow-card-resting flex items-center justify-center min-h-40">
        {children}
      </div>

      <div className="relative">
        <pre className="bg-text-primary text-surface-default p-6 rounded-card text-body-base font-mono overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
}

export default function ComponentsSection() {
  return (
    <section id="componentes" className="space-y-12">
      <div>
        <h2 className="text-heading-section text-text-primary mb-4">
          Componentes
        </h2>
        <p className="text-body-base text-text-secondary max-w-2xl">
          Componentes base do sistema, prontos para uso. Cada componente possui estados de hover, focus e active implementados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ComponentDemo
          title="Botão Primário"
          description="Usado para chamadas de ação principais em landing pages e formulários."
          code={`<button className="bg-brand-primary hover:bg-brand-primary-hover text-text-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 rounded-button px-8 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-bold">
  Botão Principal
</button>`}
        >
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-text-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 rounded-button px-8 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-bold">
            Botão Principal
          </button>
        </ComponentDemo>

        <ComponentDemo
          title="Campo de Texto"
          description="Usado para entrada de dados em formulários de contato e cadastro."
          code={`<div>
  <label className="text-body-label text-text-primary mb-1 block">E-mail de Trabalho</label>
  <input 
    placeholder="nome@empresa.com" 
    className="w-full bg-surface-subdued border border-border-default rounded-input px-4 py-3 text-text-primary transition-all focus:outline-none focus:ring-2 focus:ring-border-focus/20 focus:border-border-focus" 
  />
</div>`}
        >
          <div className="w-full max-w-md">
            <label className="text-body-label text-text-primary mb-1 block">E-mail de Trabalho</label>
            <input 
              placeholder="nome@empresa.com" 
              className="w-full bg-surface-subdued border border-border-default rounded-input px-4 py-3 text-text-primary transition-all focus:outline-none focus:ring-2 focus:ring-border-focus/20 focus:border-border-focus" 
            />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Card Elevado"
          description="Usado para exibir informações de planos, produtos ou features em grids."
          code={`<div className="bg-surface-default rounded-card shadow-card-resting hover:shadow-card-hover border border-border-subdued p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
  <h3 className="text-heading-subtitle text-text-primary">Plano Pro</h3>
  <p className="text-body-base text-text-secondary mt-2">Acesso total às ferramentas.</p>
</div>`}
        >
          <div className="w-full max-w-sm">
            <div className="bg-surface-default rounded-card shadow-card-resting hover:shadow-card-hover border border-border-subdued p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <h3 className="text-heading-subtitle text-text-primary">Plano Pro</h3>
              <p className="text-body-base text-text-secondary mt-2">Acesso total às ferramentas.</p>
            </div>
          </div>
        </ComponentDemo>
      </div>
    </section>
  );
}
