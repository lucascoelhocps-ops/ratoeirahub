"use client";

import { motion } from "framer-motion";

interface TypographySpecProps {
  label: string;
  token: string;
  className: string;
  children: React.ReactNode;
}

function TypographySpec({ label, token, className, children }: TypographySpecProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 bg-surface-subdued rounded-card border border-border-default space-y-4"
    >
      <div className="flex items-center justify-between">
        <span className="text-body-label text-text-secondary">{label}</span>
        <code className="text-body-badge text-brand-secondary bg-orange-50 px-2 py-1 rounded">
          {token}
        </code>
      </div>
      <div className={className}>{children}</div>
    </motion.div>
  );
}

interface TypographyGroupProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function TypographyGroup({ title, description, children }: TypographyGroupProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-heading-subtitle text-text-primary mb-2">{title}</h3>
        <p className="text-body-base text-text-secondary">{description}</p>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

export default function TypographySection() {
  return (
    <section id="tipografia" className="space-y-12">
      <div>
        <h2 className="text-heading-section text-text-primary mb-4">
          Tipografia
        </h2>
        <p className="text-body-base text-text-secondary max-w-2xl">
          Sistema tipográfico baseado na família Inter. Cada estilo possui uma intenção clara de uso.
        </p>
      </div>

      {/* Display Styles */}
      <TypographyGroup
        title="Display"
        description="Usado para títulos hero em landing pages e seções de destaque."
      >
        <TypographySpec
          label="Display Hero"
          token="text-display-hero"
          className="text-display-hero text-text-primary"
        >
          <h1 className="text-display-hero text-text-primary">
            Escalar no Tráfego
          </h1>
        </TypographySpec>
      </TypographyGroup>

      {/* Heading Styles */}
      <TypographyGroup
        title="Headings"
        description="Usado para títulos de seções e páginas internas."
      >
        <TypographySpec
          label="Heading Section"
          token="text-heading-section"
          className="text-heading-section text-text-primary"
        >
          <h2 className="text-heading-section text-text-primary">
            Nossa Trajetória
          </h2>
        </TypographySpec>

        <TypographySpec
          label="Heading Subtitle"
          token="text-heading-subtitle"
          className="text-heading-subtitle text-text-primary"
        >
          <h3 className="text-heading-subtitle text-text-primary">
            Missão, Visão e Valores
          </h3>
        </TypographySpec>
      </TypographyGroup>

      {/* Body Styles */}
      <TypographyGroup
        title="Body"
        description="Usado para textos descritivos e conteúdo de parágrafo."
      >
        <TypographySpec
          label="Body Description"
          token="text-body-description"
          className="text-body-description text-text-secondary"
        >
          <p className="text-body-description text-text-secondary">
            Rastreamento cirúrgico e páginas de alta conversão em um único lugar. 
            Pare de perder dinheiro com cliques desqualificados.
          </p>
        </TypographySpec>

        <TypographySpec
          label="Body Base"
          token="text-body-base"
          className="text-body-base text-text-secondary"
        >
          <p className="text-body-base text-text-secondary">
            Texto descritivo padrão para parágrafos e descrições de seções.
          </p>
        </TypographySpec>

        <TypographySpec
          label="Body Label"
          token="text-body-label"
          className="text-body-label text-text-primary"
        >
          <p className="text-body-label text-text-primary">
            Nome Completo
          </p>
        </TypographySpec>
      </TypographyGroup>

      {/* Utility Text Styles */}
      <TypographyGroup
        title="Utilitários"
        description="Estilos auxiliares para badges, labels e textos pequenos."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-surface-subdued rounded-card border border-border-default space-y-2">
            <code className="text-body-badge text-brand-secondary bg-orange-50 px-2 py-1 rounded">
              text-body-badge
            </code>
            <p className="text-body-badge text-text-primary uppercase tracking-widest">
              Badge Label
            </p>
          </div>
          <div className="p-6 bg-surface-subdued rounded-card border border-border-default space-y-2">
            <code className="text-body-badge text-brand-secondary bg-orange-50 px-2 py-1 rounded">
              text-body-base
            </code>
            <p className="text-body-base text-text-secondary">
              Texto auxiliar descritivo
            </p>
          </div>
          <div className="p-6 bg-surface-subdued rounded-card border border-border-default space-y-2">
            <code className="text-body-badge text-brand-secondary bg-orange-50 px-2 py-1 rounded">
              text-heading-subtitle
            </code>
            <p className="text-heading-subtitle text-text-primary">
              Subtítulo de impacto
            </p>
          </div>
        </div>
      </TypographyGroup>
    </section>
  );
}
