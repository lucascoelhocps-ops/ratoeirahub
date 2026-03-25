"use client";

import { motion } from "framer-motion";

interface ColorSwatchProps {
  name: string;
  token: string;
  bgClass: string;
  textClass?: string;
  isGradient?: boolean;
  isBorder?: boolean;
  borderClass?: string;
}

function ColorSwatch({ name, token, bgClass, textClass = "text-white", isGradient, isBorder, borderClass }: ColorSwatchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
    >
      <div
        className={`
          h-32 rounded-card flex flex-col justify-end p-4
          ${bgClass}
          ${isBorder ? borderClass : ''}
          ${!isGradient && !isBorder ? 'border border-border-default' : ''}
          shadow-card-resting hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1
        `}
      >
        <span className={`text-body-label font-bold ${textClass}`}>{name}</span>
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-body-label text-text-primary">{token}</p>
      </div>
    </motion.div>
  );
}

interface ColorGroupProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ColorGroup({ title, description, children }: ColorGroupProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-heading-subtitle text-text-primary mb-2">{title}</h3>
        <p className="text-body-base text-text-secondary">{description}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

export default function ColorPalette() {
  return (
    <section id="cores" className="space-y-12">
      <div>
        <h2 className="text-heading-section text-text-primary mb-4">
          Paleta de Cores
        </h2>
        <p className="text-body-base text-text-secondary max-w-2xl">
          Cores semânticas organizadas por intenção. Cada token representa um papel específico na interface.
        </p>
      </div>

      <ColorGroup
        title="Superfícies"
        description="Cores de fundo que definem a hierarquia visual da página."
      >
        <ColorSwatch
          name="Default"
          token="bg-surface-default"
          bgClass="bg-surface-default"
          textClass="text-text-primary"
        />
        <ColorSwatch
          name="Subdued"
          token="bg-surface-subdued"
          bgClass="bg-surface-subdued"
          textClass="text-text-primary"
        />
        <ColorSwatch
          name="Hover State"
          token="bg-gray-100"
          bgClass="bg-gray-100"
          textClass="text-text-primary"
        />
      </ColorGroup>

      <ColorGroup
        title="Marca"
        description="Cores primárias que representam a identidade visual do Ratoeira Hub."
      >
        <ColorSwatch
          name="Brand Primary"
          token="bg-brand-primary"
          bgClass="bg-brand-primary"
          textClass="text-text-primary"
        />
        <ColorSwatch
          name="Brand Hover"
          token="bg-brand-primary-hover"
          bgClass="bg-brand-primary-hover"
          textClass="text-text-primary"
        />
        <ColorSwatch
          name="Brand Secondary"
          token="bg-brand-secondary"
          bgClass="bg-brand-secondary"
          textClass="text-white"
        />
        <ColorSwatch
          name="Brand Gradient"
          token="bg-gradient-to-r from-brand-primary to-brand-secondary"
          bgClass="bg-gradient-to-r from-brand-primary to-brand-secondary"
          textClass="text-text-primary"
        />
      </ColorGroup>

      <ColorGroup
        title="Texto"
        description="Cores para textos, organizadas por hierarquia de importância."
      >
        <ColorSwatch
          name="Text Primary"
          token="text-text-primary"
          bgClass="bg-text-primary"
          textClass="text-white"
        />
        <ColorSwatch
          name="Text Secondary"
          token="text-text-secondary"
          bgClass="bg-text-secondary"
          textClass="text-white"
        />
        <ColorSwatch
          name="Text Muted"
          token="text-text-muted"
          bgClass="bg-text-muted"
          textClass="text-white"
        />
      </ColorGroup>

      <ColorGroup
        title="Feedback"
        description="Cores para estados de feedback e status."
      >
        <ColorSwatch
          name="Success"
          token="bg-feedback-success"
          bgClass="bg-feedback-success"
          textClass="text-white"
        />
        <ColorSwatch
          name="Error"
          token="bg-feedback-error"
          bgClass="bg-feedback-error"
          textClass="text-white"
        />
      </ColorGroup>
    </section>
  );
}
