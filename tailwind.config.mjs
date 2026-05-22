/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper:     { DEFAULT: '#FAFAF7', 2: '#F4F2EB' },
        ink:       { DEFAULT: '#0E0E0C', 2: '#4A4A47', 3: '#8B8B86' },
        line:      { DEFAULT: '#E4E1D7', 2: '#D3CFC2' },
        navy:      { DEFAULT: '#0F2A44', 2: '#1B3A5C' },
        terracota: { DEFAULT: '#C45B2D', 2: '#A04421' },
        ok:        '#2E7D5B',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SF Mono', 'monospace'],
      },
      maxWidth: { content: '1180px' },
      boxShadow: {
        elev1: '0 1px 0 rgba(15, 42, 68, 0.04), 0 1px 2px rgba(15, 42, 68, 0.04)',
        elev2: '0 2px 4px rgba(15, 42, 68, 0.05), 0 8px 24px rgba(15, 42, 68, 0.06)',
      },
    },
  },
  plugins: [],
};
