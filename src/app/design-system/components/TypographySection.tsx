"use client";

import { motion } from "framer-motion";

interface TypographySpecProps {
  label: string;
  token: string;
  className: string;
  example: string;
}

function TypographySpec({ label, token, className, example }: TypographySpecProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-8 bg-surface-subdued rounded-card border border-border-default grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
    >
      {/* Coluna da Esquerda: Metainformações */}
      <div className="space-y-2">
        <span className="text-body-label text-text-secondary block">{label}</span>
        <code className="text-[11px] font-mono text-brand-secondary bg-orange-50 px-2 py-1 rounded border border-orange-100 block w-fit">
          .{token}
        </code>
      </div>

      {/* Coluna da Direita: Exemplo Real */}
      <div className="md:col-span-2">
        <p className={className}>{example}</p>
      </div>
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
          Sistema tipográfico baseado na família Inter. Cada estilo possui uma intenção clara de uso e escala definida.
        </p>
      </div>

      <TypographyGroup
        title="Display & Headings"
        description="Estilos de grande escala para títulos de impacto e hierarquia de seções."
      >
        <TypographySpec
          label="Display Hero"
          token="text-display-hero"
          className="text-display-hero text-text-primary"
          example="Escalar no Tráfego"
        />
        <TypographySpec
          label="Heading Section"
          token="text-heading-section"
          className="text-heading-section text-text-primary"
          example="Nossa Trajetória"
        />
        <TypographySpec
          label="Heading Subtitle"
          token="text-heading-subtitle"
          className="text-heading-subtitle text-text-primary"
          example="Missão, Visão e Valores"
        />
      </TypographyGroup>

      <TypographyGroup
        title="Body & Labels"
        description="Estilos para leitura contínua, descrições e elementos de interface."
      >
        <TypographySpec
          label="Body Description"
          token="text-body-description"
          className="text-body-description text-text-secondary"
          example="Rastreamento cirúrgico e páginas de alta conversão em um único lugar. Pare de perder dinheiro."
        />
        <TypographySpec
          label="Body Base"
          token="text-body-base"
          className="text-body-base text-text-secondary"
          example="Texto descritivo padrão para parágrafos e descrições de seções que exigem leitura clara."
        />
        <TypographySpec
          label="Body Label"
          token="text-body-label"
          className="text-body-label text-text-primary"
          example="Nome Completo / E-mail de Trabalho"
        />
        <TypographySpec
          label="Body Badge"
          token="text-body-badge"
          className="text-body-badge text-text-primary uppercase tracking-widest"
          example="Badge Status"
        />
      </TypographyGroup>
    </section>
  );
}
