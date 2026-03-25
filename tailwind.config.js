/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: 'var(--color-brand-primary)',
            hover: 'var(--color-brand-primary-hover)',
          },
          secondary: 'var(--color-brand-secondary)',
        },
        surface: {
          default: 'var(--color-surface-default)',
          subdued: 'var(--color-surface-subdued)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        feedback: {
          success: 'var(--color-feedback-success)',
          error: 'var(--color-feedback-error)',
        },
        border: {
          default: 'var(--color-border-default)',
          subdued: 'var(--color-border-subdued)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
        }
      },
      borderRadius: {
        input: 'var(--radius-input)',
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        badge: 'var(--radius-badge)',
      },
      boxShadow: {
        'card-resting': 'var(--shadow-card-resting)',
        'card-hover': 'var(--shadow-card-hover)',
        'btn-primary': 'var(--shadow-btn-primary)',
        'btn-primary-hover': 'var(--shadow-btn-primary-hover)',
      },
      fontSize: {
        'display-hero': ['var(--font-size-display-hero)', { 
          lineHeight: 'var(--line-height-display-hero)', 
          letterSpacing: 'var(--letter-spacing-display-hero)', 
          fontWeight: 'var(--font-weight-display-hero)' 
        }],
        'heading-section': ['var(--font-size-heading-section)', { 
          lineHeight: 'var(--line-height-heading-section)', 
          fontWeight: 'var(--font-weight-heading-section)' 
        }],
        'heading-subtitle': ['var(--font-size-heading-subtitle)', { 
          lineHeight: 'var(--line-height-heading-subtitle)', 
          fontWeight: 'var(--font-weight-heading-subtitle)' 
        }],
        'body-description': ['var(--font-size-body-description)', { 
          lineHeight: 'var(--line-height-body-description)', 
          fontWeight: 'var(--font-weight-body-description)' 
        }],
        'body-base': ['var(--font-size-body-base)', { 
          lineHeight: 'var(--line-height-body-base)', 
          fontWeight: 'var(--font-weight-body-base)' 
        }],
        'body-label': ['var(--font-size-body-label)', { 
          lineHeight: 'var(--line-height-body-label)', 
          fontWeight: 'var(--font-weight-body-label)' 
        }],
        'body-badge': ['var(--font-size-body-badge)', { 
          lineHeight: 'var(--line-height-body-badge)', 
          fontWeight: 'var(--font-weight-body-badge)' 
        }],
      }
    },
  },
  plugins: [],
};
