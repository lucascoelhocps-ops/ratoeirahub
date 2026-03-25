"use client";
import { useState } from "react";

type InspectionMode = "off" | "minimal" | "full";

type ColorScaleItem = { step: string; hex: string };

type TypeSpec = {
  name: string;
  token: string;
  sample: string;
  sampleClass: string;
  size: string;
  lineHeight: string;
  weight: string;
};

type SpacingSpec = {
  token: string;
  px: string;
  rem: string;
  widthClass: string;
};

const brandGold: ColorScaleItem[] = [
  { step: "100", hex: "#FFF8E6" },
  { step: "200", hex: "#FFECB3" },
  { step: "300", hex: "#FFDF80" },
  { step: "400", hex: "#FFCF4D" },
  { step: "500", hex: "#FFB800" },
  { step: "600", hex: "#E6A600" },
  { step: "700", hex: "#B38100" },
  { step: "800", hex: "#805C00" },
  { step: "900", hex: "#4D3700" },
];

const brandOrange: ColorScaleItem[] = [
  { step: "100", hex: "#FFF2ED" },
  { step: "200", hex: "#FFDFD1" },
  { step: "300", hex: "#FFC5B0" },
  { step: "400", hex: "#FFA68A" },
  { step: "500", hex: "#FF7E4A" },
  { step: "600", hex: "#E67142" },
  { step: "700", hex: "#B35834" },
  { step: "800", hex: "#803F25" },
  { step: "900", hex: "#4D2616" },
];

const grayScale: ColorScaleItem[] = [
  { step: "50", hex: "#F9FAFB" },
  { step: "100", hex: "#F3F4F6" },
  { step: "200", hex: "#E5E7EB" },
  { step: "400", hex: "#9CA3AF" },
  { step: "500", hex: "#6B7280" },
  { step: "900", hex: "#0A0A0A" },
];

const typeScale: TypeSpec[] = [
  {
    name: "Display Hero",
    token: "text-display-hero",
    sample: "Inter Black 72px",
    sampleClass: "text-display-hero text-text-primary",
    size: "72px / 4.5rem",
    lineHeight: "1.1",
    weight: "900 Black",
  },
  {
    name: "Heading Section",
    token: "text-heading-section",
    sample: "Inter Bold 36px",
    sampleClass: "text-heading-section text-text-primary",
    size: "36px / 2.25rem",
    lineHeight: "1.1",
    weight: "700 Bold",
  },
  {
    name: "Heading Subtitle",
    token: "text-heading-subtitle",
    sample: "Inter Bold 24px",
    sampleClass: "text-heading-subtitle text-text-primary",
    size: "24px / 1.5rem",
    lineHeight: "1.1",
    weight: "700 Bold",
  },
  {
    name: "Body Description",
    token: "text-body-description",
    sample: "Inter Medium 18px — conteúdo para descrição densa com ótima leitura.",
    sampleClass: "text-body-description text-text-secondary",
    size: "18px / 1.125rem",
    lineHeight: "1.625",
    weight: "500 Medium",
  },
  {
    name: "Body Base",
    token: "text-body-base",
    sample: "Inter Medium 16px",
    sampleClass: "text-body-base text-text-secondary",
    size: "16px / 1rem",
    lineHeight: "1.5",
    weight: "500 Medium",
  },
  {
    name: "Body Label",
    token: "text-body-label",
    sample: "Inter SemiBold 14px",
    sampleClass: "text-body-label text-text-primary",
    size: "14px / 0.875rem",
    lineHeight: "1.5",
    weight: "600 SemiBold",
  },
];

const spacingScale: SpacingSpec[] = [
  { token: "space-1", px: "4px", rem: "0.25rem", widthClass: "w-1" },
  { token: "space-2", px: "8px", rem: "0.5rem", widthClass: "w-2" },
  { token: "space-3", px: "12px", rem: "0.75rem", widthClass: "w-3" },
  { token: "space-4", px: "16px", rem: "1rem", widthClass: "w-4" },
  { token: "space-6", px: "24px", rem: "1.5rem", widthClass: "w-6" },
  { token: "space-8", px: "32px", rem: "2rem", widthClass: "w-8" },
  { token: "space-12", px: "48px", rem: "3rem", widthClass: "w-12" },
  { token: "space-16", px: "64px", rem: "4rem", widthClass: "w-16" },
];

function SideNavigation() {
  const items = [
    { href: "#overview", label: "Overview" },
    { href: "#colors", label: "Colors" },
    { href: "#typography", label: "Typography" },
    { href: "#spacing", label: "Spacing" },
    { href: "#anatomy", label: "Anatomy" },
  ];

  return (
    <aside className="lg:sticky lg:top-24 h-fit bg-surface-subdued border-r border-border-default lg:min-h-[calc(100vh-8rem)]">
      <div className="p-6 space-y-6">
        <div>
          <p className="text-body-badge text-text-primary font-mono">Ratoeira Hub</p>
          <p className="text-body-label text-text-muted font-mono mt-1">Design System v1.0.0</p>
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-input text-body-label text-text-secondary hover:text-text-primary hover:bg-surface-default transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function ColorScale({ title, family, items }: { title: string; family: string; items: ColorScaleItem[] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-heading-subtitle text-text-primary">{title}</h3>
        <span className="text-xs text-text-muted font-mono">{items.length} steps</span>
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map((item) => (
          <div key={`${family}-${item.step}`} className="space-y-1 min-w-0">
            <div className="h-16 w-full rounded-md border border-border-subdued" style={{ backgroundColor: item.hex }} />
            <p className="text-[10px] text-text-muted font-mono truncate">
              {family}-{item.step} {item.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeSpecimen({ item }: { item: TypeSpec }) {
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8 border-b border-border-default py-6">
      <div className="space-y-2 text-xs text-text-muted font-mono">
        <p className="text-text-primary font-semibold">{item.name}</p>
        <p>{item.token}</p>
        <p>font-size: {item.size}</p>
        <p>line-height: {item.lineHeight}</p>
        <p>font-weight: {item.weight}</p>
      </div>
      <div className="flex items-center">
        <p className={item.sampleClass}>{item.sample}</p>
      </div>
    </div>
  );
}

function SpacingBlock({ item }: { item: SpacingSpec }) {
  return (
    <div className="border border-border-default rounded-input p-4 bg-surface-default">
      <div className="h-14 flex items-center">
        <div className={`h-6 ${item.widthClass} bg-brand-primary rounded-sm`} />
      </div>
      <div className="space-y-1">
        <p className="text-xs text-text-primary font-mono">{item.token}</p>
        <p className="text-xs text-text-muted font-mono">{item.px} / {item.rem}</p>
      </div>
    </div>
  );
}

function AnatomyCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-input border border-border-default overflow-hidden p-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      {children}
    </div>
  );
}

function MeasureLabel({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`absolute text-[10px] font-mono text-red-500 bg-red-50 px-1 border border-red-200 rounded ${className}`}>
      {children}
    </span>
  );
}

function ButtonAnatomy({ mode }: { mode: InspectionMode }) {
  const showLabels = mode === "minimal" || mode === "full";
  const showGuides = mode === "full";
  return (
    <div className="space-y-4">
      <h3 className="text-heading-subtitle text-text-primary">Button / Primary</h3>
      <AnatomyCanvas>
        <div className="h-40 flex items-center justify-center relative">
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-text-primary shadow-btn-primary hover:shadow-btn-primary-hover hover:-translate-y-0.5 rounded-button px-8 py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-bold">
            Botão Principal
          </button>
          {showGuides && <div className="absolute top-8 left-1/2 -translate-x-1/2 w-52 border-t border-red-500 border-dashed" />}
          {showGuides && <div className="absolute right-24 top-1/2 -translate-y-1/2 h-14 border-r border-red-500 border-dashed" />}
          {showLabels && <MeasureLabel className="top-3 left-1/2 -translate-x-1/2">Padding-X 32px / 2rem</MeasureLabel>}
          {showLabels && <MeasureLabel className="right-2 top-1/2 -translate-y-1/2">Height 56px / 3.5rem</MeasureLabel>}
          {showLabels && <MeasureLabel className="bottom-3 left-1/2 -translate-x-1/2">Radius 16px</MeasureLabel>}
        </div>
      </AnatomyCanvas>
    </div>
  );
}

function InputAnatomy({ mode }: { mode: InspectionMode }) {
  const showLabels = mode === "minimal" || mode === "full";
  const showGuides = mode === "full";
  return (
    <div className="space-y-4">
      <h3 className="text-heading-subtitle text-text-primary">Text Input</h3>
      <AnatomyCanvas>
        <div className="relative max-w-xl mx-auto">
          <label className="text-body-label text-text-primary mb-1 block">E-mail de Trabalho</label>
          <input
            placeholder="nome@empresa.com"
            className="w-full bg-surface-subdued border border-border-default rounded-input px-4 py-3 text-text-primary transition-all focus:outline-none focus:ring-2 focus:ring-border-focus/20 focus:border-border-focus"
          />
          {showGuides && <div className="absolute left-0 top-7 w-24 border-t border-red-500 border-dashed" />}
          {showGuides && <div className="absolute right-1 top-[44px] h-12 border-r border-red-500 border-dashed" />}
          {showLabels && <MeasureLabel className="left-0 top-2">Gap 4px / 0.25rem</MeasureLabel>}
          {showLabels && <MeasureLabel className="right-0 top-16">Height 48px / 3rem</MeasureLabel>}
          {showLabels && <MeasureLabel className="left-1/2 -translate-x-1/2 bottom-2">Padding-X 16px | Radius 12px</MeasureLabel>}
        </div>
      </AnatomyCanvas>
    </div>
  );
}

function CardAnatomy({ mode }: { mode: InspectionMode }) {
  const showLabels = mode === "minimal" || mode === "full";
  const showGuides = mode === "full";
  return (
    <div className="space-y-4">
      <h3 className="text-heading-subtitle text-text-primary">Card / Elevated</h3>
      <AnatomyCanvas>
        <div className="h-52 flex items-center justify-center relative">
          <div className="bg-surface-default rounded-card shadow-card-resting hover:shadow-card-hover border border-border-subdued p-8 transition-all duration-300 w-full max-w-sm">
            <h3 className="text-heading-subtitle text-text-primary">Plano Pro</h3>
            <p className="text-body-base text-text-secondary mt-2">Acesso total às ferramentas.</p>
          </div>
          {showGuides && <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 border-t border-red-500 border-dashed" />}
          {showLabels && <MeasureLabel className="top-4 left-1/2 -translate-x-1/2">Padding 32px / 2rem</MeasureLabel>}
          {showLabels && <MeasureLabel className="bottom-4 left-1/2 -translate-x-1/2">Radius 24px</MeasureLabel>}
        </div>
      </AnatomyCanvas>
    </div>
  );
}

export default function DesignSystem() {
  const [inspectionMode, setInspectionMode] = useState<InspectionMode>("full");

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-[260px_1fr]">
        <SideNavigation />
        <main className="max-w-5xl mx-auto px-10 py-12 w-full space-y-14">
          <section id="overview" className="space-y-4">
            <p className="text-body-label text-brand-secondary font-mono">Ratoeira Hub · Documentation</p>
            <h1 className="text-heading-section text-text-primary">Design System</h1>
            <p className="text-body-description text-text-secondary max-w-3xl">
              Interface técnica para tokens, escalas e anatomia de componentes. Estruturado para consulta rápida por produto, design e engenharia.
            </p>
          </section>

          <section id="colors" className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-heading-section text-text-primary">Color Scales</h2>
              <p className="text-body-base text-text-secondary">Régua compacta de cores no formato técnico.</p>
            </div>
            <ColorScale title="Brand Gold" family="gold" items={brandGold} />
            <ColorScale title="Brand Orange" family="orange" items={brandOrange} />
            <ColorScale title="Grays" family="gray" items={grayScale} />
          </section>

          <section id="typography" className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-heading-section text-text-primary">Typography Specimen</h2>
              <p className="text-body-base text-text-secondary">Tabela de tokens tipográficos com metadados e preview.</p>
            </div>
            <div className="border-t border-border-default">
              {typeScale.map((item) => (
                <TypeSpecimen key={item.token} item={item} />
              ))}
            </div>
          </section>

          <section id="spacing" className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-heading-section text-text-primary">Spacing Scale</h2>
              <p className="text-body-base text-text-secondary">Escala base para rhythm visual e grid interno dos componentes.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {spacingScale.map((item) => (
                <SpacingBlock key={item.token} item={item} />
              ))}
            </div>
          </section>

          <section id="anatomy" className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-heading-section text-text-primary">Anatomy & Red Lines</h2>
                <p className="text-body-base text-text-secondary">Modo inspeção técnico no padrão de handoff.</p>
              </div>
              <div className="inline-flex rounded-button border border-border-default bg-surface-default p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setInspectionMode("off")}
                  className={`px-3 py-2 rounded-input text-body-label transition-all ${
                    inspectionMode === "off" ? "bg-text-primary text-text-inverse" : "text-text-primary hover:bg-surface-subdued"
                  }`}
                >
                  OFF
                </button>
                <button
                  type="button"
                  onClick={() => setInspectionMode("minimal")}
                  className={`px-3 py-2 rounded-input text-body-label transition-all ${
                    inspectionMode === "minimal" ? "bg-brand-secondary text-text-inverse" : "text-text-primary hover:bg-surface-subdued"
                  }`}
                >
                  Inspect Minimal
                </button>
                <button
                  type="button"
                  onClick={() => setInspectionMode("full")}
                  className={`px-3 py-2 rounded-input text-body-label transition-all ${
                    inspectionMode === "full" ? "bg-red-500 text-text-inverse" : "text-text-primary hover:bg-surface-subdued"
                  }`}
                >
                  Inspect Full
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <ButtonAnatomy mode={inspectionMode} />
              <InputAnatomy mode={inspectionMode} />
              <CardAnatomy mode={inspectionMode} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
