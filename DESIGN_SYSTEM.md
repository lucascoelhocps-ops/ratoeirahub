# Design System - Ratoeira Hub

## Visão Geral
O Ratoeira Hub utiliza um design system **clean e moderno**, com características SaaS bem definidas. O visual transmite profissionalismo, clareza e uma estética acolhedora, fugindo de extremos (nem muito minimalista, nem muito carregado).

---

## Paleta de Cores

### Cores Primárias
| Nome | Hexadecimal | Uso |
|------|-------------|-----|
| Brand Gold | `#FFB800` | Botões principais, destaques, CTAs |
| Brand Orange | `#FF7E4A` | Gradientes, elementos secundários de destaque |
| Brand Dark | `#E6A600` | Hover states de botões gold |

### Cores de Fundo
| Nome | Hexadecimal | Uso |
|------|-------------|-----|
| Background Light | `#FFFFFF` | Fundos de seções limpas |
| Background Alt | `#F9FAFB` (gray-50) | Fundos de seções alternadas |
| Background Warm | Gradiente `#FFB800` → `#FF7E4A` | Hero section, seções de destaque |

### Cores de Texto
| Nome | Hexadecimal | Uso |
|------|-------------|-----|
| Text Primary | `#0A0A0A` (gray-900) | Títulos e texto principal |
| Text Secondary | `#6B7280` (gray-500) | Descrições e texto complementar |
| Text Muted | `#9CA3AF` (gray-400) | Labels, placeholders |
| Text Light | `#FFFFFF` | Texto sobre fundos escuros/gradient |

### Cores de Feedback
| Nome | Hexadecimal | Uso |
|------|-------------|-----|
| Success | `#10B981` (emerald-500) | Indicadores positivos, badges online |
| Error | `#EF4444` (red-500) | Estados de erro |

---

## Tipografia

### Fontes
- **Família Principal**: `Inter` (Google Fonts) com fallback para `system-ui, -apple-system, sans-serif`
- **Pesos Utilizados**:
  - `font-black` (900): Títulos principais de impacto
  - `font-bold` (700): Subtítulos e destaques
  - `font-semibold` (600): Labels e navegação
  - `font-medium` (500): Corpo de texto descritivo

### Tamanhos
| Classe | Tamanho | Uso |
|--------|---------|-----|
| `text-5xl` a `text-7xl` | 3rem - 4.5rem | Títulos de hero section |
| `text-4xl` a `text-5xl` | 2.25rem - 3rem | Títulos de seções |
| `text-2xl` a `text-3xl` | 1.5rem - 1.875rem | Subtítulos |
| `text-lg` a `text-xl` | 1.125rem - 1.25rem | Descrições |
| `text-sm` a `text-base` | 0.875rem - 1rem | Labels, textos auxiliares |
| `text-xs` | 0.75rem | Badges, tags |

### Especificações de Título
- `tracking-tight`: Espaçamento negativo entre letras para títulos Impacto
- `leading-tight` (1.1): Altura de linha compacta para títulos
- `leading-relaxed` (1.625): Altura de linha generosa para descrições

---

## Espaçamentos

### Bordas e Sombras
- **Border Radius**:
  - `rounded-full`: Círculos, avatares, badges circulares
  - `rounded-2xl` (16px): Botões, cards menores
  - `rounded-3xl` (24px): Cards, containers, imagens
  - `rounded-xl` (12px): Inputs, elementos menores

- **Sombras**:
  - `shadow-md`: Elementos discretos
  - `shadow-xl`: Cards e containers principais
  - `shadow-2xl`: Cards flutuantes, modais
  - `shadow-lg shadow-orange-500/30`: Botões com glow na cor da marca

---

## Componentes Recorrentes

### Botões Primários (CTA)
```tsx
// Estrutura base
className="px-8 py-4 bg-[#ffb800] hover:bg-[#e6a600] text-[#0a0a0a] font-bold rounded-2xl text-base 
  transition-all duration-200 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 
  group"
```
- Padding: `px-8 py-4` (horizontal 2rem, vertical 1rem)
- Border-radius: `rounded-2xl`
- Sombra: `shadow-xl shadow-amber-500/30`
- Hover: elevação (`hover:-translate-y-0.5`) + intensificação da sombra
- Ícone opcional com animação de movimento (`group-hover:translate-x-1`)

### Botões Secundários
```tsx
className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl text-base 
  border border-white/20 hover:border-amber-400/50 transition-all duration-200 hover:-translate-y-0.5"
```
- Fundo semi-transparente com blur sutil
- Borda sutil `border-white/20`
- Hover com intensification da cor de borda

### Inputs de Formulário
```tsx
className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 
  focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
```
- Background: `bg-gray-50`
- Border: `border-gray-200`
- Focus: ring na cor da marca com 20% de opacidade
- Border-radius: `rounded-xl`

### Cards
```tsx
className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl 
  transition-all duration-300 hover:-translate-y-2"
```
- Background: `bg-white`
- Padding: `p-8`
- Border-radius: `rounded-3xl`
- Sombra: `shadow-xl` com hover para `shadow-2xl`
- Animação: elevação sutil no hover

### Badges / Tags
```tsx
className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700"
```
- Border-radius: `rounded-full` (sempre)
- Background: cor pastel derivada da cor principal (ex: `amber-50`)
- Border: borda sutil na mesma tonalidade (ex: `amber-100`)
- Texto: cor mais escura (ex: `amber-700`)

### Badges de Ano (Timeline)
```tsx
className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm"
```

---

## Gradientes

### Gradiente Principal (Hero)
```css
background: linear-gradient(135deg, #FFB800 0%, #FF7E4A 50%, #FFB800 100%)
```

### Gradiente de Texto (Destaque)
```tsx
className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500"
```

### Gradiente de Botão
```tsx
className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
```

---

## Elementos Decorativos

### Círculos com Blur (Background Accents)
```tsx
className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[120px] rounded-full opacity-50"
```
- Tamanho: `w-[500px] h-[500px]`
- Blur: `blur-[120px]`
- Opacidade: `opacity-50`
- Posicionamento: absoluto nos cantos da seção

### Grid Pattern (Hero)
```tsx
className="absolute inset-0 opacity-10"
style={{
  backgroundImage: `radial-gradient(circle, #000000 1px, transparent 1px)`,
  backgroundSize: "40px 40px"
}}
```

---

## Animações e Transições

### Hover Elevação (Cards, Botões)
```tsx
hover:-translate-y-0.5  // ou hover:-translate-y-2 para cards
```

### Ícone com Animação de Movimento
```tsx
group-hover:translate-x-1  // Move 4px para direita no hover
```

### Fade + Slide (Entradas)
```tsx
initial={{ opacity: 0, x: -40 }}  // Estado inicial
animate={{ opacity: 1, x: 0 }}     // Estado final
transition={{ duration: 0.8, ease: "easeOut" }}
```

### Transições de Cor
```tsx
transition-all duration-200  // Curta para botões
transition-all duration-300 // Média para cards
transition-all duration-500 // Longa para elementos grandes
```

---

## Convenções de Nomenclatura de Classes (Tailwind)

1. **Ordem sugerida**: `background` → `border` → `shadow` → `spacing` → `typography` → `position` → `state`
2. **Responsividade**: Começar com classes mobile-first. Usar prefixos `md:` e `lg:` para breakpoints.
3. **Cores**: Preferir sempre as cores da paleta definida (amber, orange, gray, emerald, etc.)
4. **Evitar**:
   - Cores "exóticas" não presentes na paleta (roxo, rosa vibrante, azul elétrico)
   - Bordas quadradas (`rounded-none`) exceto para elementos técnicos específicos
   - sombras duras sem razão (drop-shadow sem blur)
   - Animações excessivamente complexas ou longas

---

## Estrutura de Seção Típica

```tsx
<section className="py-32 bg-white relative overflow-hidden">
  {/* Background decorative (opcional) */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[120px] rounded-full opacity-50" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
        Título da Seção
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Descrição da seção
      </p>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cards ou conteúdo */}
    </div>
  </div>
</section>
```

---

## Checklist de Qualidade

Ao implementar novos componentes, verificar:

- [ ] Cores estão dentro da paleta definida?
- [ ] Border-radius está consistente com o design system?
- [ ] Sombras estão usando os valores definidos?
- [ ] Tipografia segue os pesos e tamanhos especificados?
- [ ] Animações/hover states estão funcionais?
- [ ] Responsividade está implementada (mobile-first)?
- [ ] Inputs têm focus states acessíveis?
- [ ] Contraste de cores atende padrões de acessibilidade?

---

*Documento criado com base na análise da página inicial do Ratoeira Hub.*
*Última atualização: 2026-03-25*
