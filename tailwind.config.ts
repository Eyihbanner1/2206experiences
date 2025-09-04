import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          purple: {
            DEFAULT: '#7c3aed', // Brand Purple
            light: '#a78bfa',   // Light Purple
          },
          lilac: {
            DEFAULT: '#c8a2c8', // Brand Lilac
            light: '#e6cfe6',   // Light Lilac
          },
          pink: {
            DEFAULT: '#ec4899', // Brand Pink
            light: '#f9a8d4',   // Light Pink
          },
          white: '#ffffff', // Brand White
      },
      fontSize: {
        // Enhanced typography scale for better mobile responsiveness
        'xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.375rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.625rem' }], // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.875rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2.125rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.375rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '3.5rem' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '4.25rem' }], // 60px
        '7xl': ['4.5rem', { lineHeight: '5rem' }], // 72px
        '8xl': ['6rem', { lineHeight: '6.5rem' }], // 96px
        '9xl': ['8rem', { lineHeight: '8.5rem' }], // 128px
        // Custom display sizes with optimal mobile scaling
        'display-xs': ['2.25rem', { lineHeight: '2.75rem' }], // 36px mobile-friendly
        'display-sm': ['2.75rem', { lineHeight: '3.25rem' }], // 44px
        'display-md': ['3.5rem', { lineHeight: '4rem' }], // 56px
        'display-lg': ['4.5rem', { lineHeight: '5rem' }], // 72px
        'display-xl': ['6rem', { lineHeight: '6.5rem' }], // 96px
      },
      lineHeight: {
        'extra-tight': '1.125',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '1.875',
        'extra-loose': '2.25',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      boxShadow: {
        // Consistent shadow system
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Brand-specific shadows with purple tint
        'purple-sm': '0 1px 3px 0 rgba(124, 58, 237, 0.1), 0 1px 2px 0 rgba(124, 58, 237, 0.06)',
        'purple-md': '0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)',
        'purple-lg': '0 10px 15px -3px rgba(124, 58, 237, 0.1), 0 4px 6px -2px rgba(124, 58, 237, 0.05)',
        'purple-xl': '0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)',
        // Pink accent shadows
        'pink-sm': '0 1px 3px 0 rgba(236, 72, 153, 0.1), 0 1px 2px 0 rgba(236, 72, 153, 0.06)',
        'pink-md': '0 4px 6px -1px rgba(236, 72, 153, 0.1), 0 2px 4px -1px rgba(236, 72, 153, 0.06)',
        'pink-lg': '0 10px 15px -3px rgba(236, 72, 153, 0.1), 0 4px 6px -2px rgba(236, 72, 153, 0.05)',
        // Elevation shadows for consistent UI hierarchy
        'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation-5': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'brand': '0 4px 6px rgba(124, 58, 237, 0.1)',
        'brand-lg': '0 10px 15px rgba(124, 58, 237, 0.1)',
        'accent': '0 4px 6px rgba(236, 72, 153, 0.1)',
        'accent-lg': '0 10px 15px rgba(236, 72, 153, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
