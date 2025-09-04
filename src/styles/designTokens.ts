/**
 * 2206Experiences Design System - Complete Design Token Library
 * 
 * This file contains all design tokens for the 2206Experiences travel website
 * following the Purple/Lilac/Pink/White brand system with comprehensive
 * token definitions for colors, typography, spacing, shadows, animations,
 * and component specifications.
 */

// ==========================================
// BRAND COLORS - Core Brand Palette
// ==========================================

export const brandColors = {
  // Primary Brand Colors
  purple: {
    50: '#f3f4ff',
    100: '#ede9fe', 
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6', // Primary Purple
    600: '#7c3aed', // Brand Purple
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065'
  },
  
  lilac: {
    50: '#faf8ff',
    100: '#f4f0fe',
    200: '#ebe5fd',
    300: '#ddd1fb',
    400: '#c8a2c8', // Brand Lilac
    500: '#b794f6',
    600: '#a855f7',
    700: '#9333ea',
    800: '#7e22ce',
    900: '#6b21a8',
    950: '#4a044e'
  },
  
  pink: {
    50: '#fef7f7',
    100: '#fef2f2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ec4899', // Brand Pink
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519'
  },
  
  white: '#ffffff', // Brand White
  
  // Extended Palette for UI Elements
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a'
  },
  
  // Semantic Colors
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d'
  },
  
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309'
  },
  
  error: {
    50: '#fef2f2',
    200: '#fecaca',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c'
  },
  
  info: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8'
  }
} as const;

// ==========================================
// TYPOGRAPHY SYSTEM
// ==========================================

export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace']
  },
  
  // Font Sizes with Line Heights
  fontSize: {
    xs: { size: '0.75rem', lineHeight: '1.125rem' }, // 12px/18px
    sm: { size: '0.875rem', lineHeight: '1.375rem' }, // 14px/22px
    base: { size: '1rem', lineHeight: '1.625rem' }, // 16px/26px
    lg: { size: '1.125rem', lineHeight: '1.75rem' }, // 18px/28px
    xl: { size: '1.25rem', lineHeight: '1.875rem' }, // 20px/30px
    '2xl': { size: '1.5rem', lineHeight: '2.125rem' }, // 24px/34px
    '3xl': { size: '1.875rem', lineHeight: '2.375rem' }, // 30px/38px
    '4xl': { size: '2.25rem', lineHeight: '2.75rem' }, // 36px/44px
    '5xl': { size: '3rem', lineHeight: '3.5rem' }, // 48px/56px
    '6xl': { size: '3.75rem', lineHeight: '4.25rem' }, // 60px/68px
    '7xl': { size: '4.5rem', lineHeight: '5rem' }, // 72px/80px
    '8xl': { size: '6rem', lineHeight: '6.5rem' }, // 96px/104px
    '9xl': { size: '8rem', lineHeight: '8.5rem' }, // 128px/136px
    
    // Display sizes for mobile-friendly scaling
    'display-xs': { size: '2.25rem', lineHeight: '2.75rem' },
    'display-sm': { size: '2.75rem', lineHeight: '3.25rem' },
    'display-md': { size: '3.5rem', lineHeight: '4rem' },
    'display-lg': { size: '4.5rem', lineHeight: '5rem' },
    'display-xl': { size: '6rem', lineHeight: '6.5rem' }
  },
  
  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  
  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '1.875',
    extraLoose: '2.25'
  }
} as const;

// ==========================================
// SPACING SYSTEM
// ==========================================

export const spacing = {
  // Base 4px unit system
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
  
  // Semantic spacing
  container: {
    padding: {
      DEFAULT: '1rem',    // 16px
      sm: '1.5rem',       // 24px
      md: '2rem',         // 32px
      lg: '2.5rem',       // 40px
      xl: '3rem'          // 48px
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '7xl': '80rem'      // 1280px custom
    }
  }
} as const;

// ==========================================
// SHADOW SYSTEM
// ==========================================

export const shadows = {
  // Standard shadows
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
  
  // Brand-colored shadows
  brand: {
    purple: {
      sm: '0 1px 3px 0 rgba(124, 58, 237, 0.1), 0 1px 2px 0 rgba(124, 58, 237, 0.06)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1), 0 2px 4px -1px rgba(124, 58, 237, 0.06)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1), 0 4px 6px -2px rgba(124, 58, 237, 0.05)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)'
    },
    pink: {
      sm: '0 1px 3px 0 rgba(236, 72, 153, 0.1), 0 1px 2px 0 rgba(236, 72, 153, 0.06)',
      md: '0 4px 6px -1px rgba(236, 72, 153, 0.1), 0 2px 4px -1px rgba(236, 72, 153, 0.06)',
      lg: '0 10px 15px -3px rgba(236, 72, 153, 0.1), 0 4px 6px -2px rgba(236, 72, 153, 0.05)'
    }
  },
  
  // UI Elevation system
  elevation: {
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    5: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  }
} as const;

// ==========================================
// BORDER RADIUS SYSTEM
// ==========================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',      // 2px
  DEFAULT: '0.25rem',  // 4px
  md: '0.375rem',      // 6px
  lg: '0.5rem',        // 8px
  xl: '0.75rem',       // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px'
} as const;

// ==========================================
// ANIMATION & TRANSITION SYSTEM
// ==========================================

export const animations = {
  // Duration
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  
  // Timing Functions
  ease: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Custom easing for brand
    brand: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  
  // Transform origins
  transformOrigin: {
    center: 'center',
    top: 'top',
    topRight: 'top right',
    right: 'right',
    bottomRight: 'bottom right',
    bottom: 'bottom',
    bottomLeft: 'bottom left',
    left: 'left',
    topLeft: 'top left'
  },
  
  // Keyframe animations
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    slideInFromTop: {
      '0%': { transform: 'translateY(-100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' }
    },
    slideInFromBottom: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' }
    },
    scaleIn: {
      '0%': { transform: 'scale(0.9)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' }
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
      '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' }
    },
    pulse: {
      '50%': { opacity: '0.5' }
    },
    spin: {
      'to': { transform: 'rotate(360deg)' }
    }
  }
} as const;

// ==========================================
// COMPONENT TOKENS
// ==========================================

export const components = {
  // Button specifications
  button: {
    sizes: {
      xs: {
        padding: '0.5rem 0.75rem', // 8px 12px
        fontSize: typography.fontSize.xs.size,
        lineHeight: typography.fontSize.xs.lineHeight,
        borderRadius: borderRadius.md,
        minHeight: '2rem' // 32px
      },
      sm: {
        padding: '0.625rem 1rem', // 10px 16px
        fontSize: typography.fontSize.sm.size,
        lineHeight: typography.fontSize.sm.lineHeight,
        borderRadius: borderRadius.md,
        minHeight: '2.25rem' // 36px
      },
      md: {
        padding: '0.75rem 1.25rem', // 12px 20px
        fontSize: typography.fontSize.base.size,
        lineHeight: typography.fontSize.base.lineHeight,
        borderRadius: borderRadius.lg,
        minHeight: '2.75rem' // 44px - Touch-friendly
      },
      lg: {
        padding: '1rem 1.75rem', // 16px 28px
        fontSize: typography.fontSize.lg.size,
        lineHeight: typography.fontSize.lg.lineHeight,
        borderRadius: borderRadius.lg,
        minHeight: '3rem' // 48px
      },
      xl: {
        padding: '1.25rem 2rem', // 20px 32px
        fontSize: typography.fontSize.xl.size,
        lineHeight: typography.fontSize.xl.lineHeight,
        borderRadius: borderRadius.xl,
        minHeight: '3.5rem' // 56px
      }
    },
    
    variants: {
      primary: {
        backgroundColor: brandColors.purple[600],
        color: brandColors.white,
        shadow: shadows.md,
        hover: {
          backgroundColor: brandColors.purple[700],
          shadow: shadows.lg,
          transform: 'scale(1.02)'
        },
        focus: {
          ring: `2px solid ${brandColors.purple[300]}`,
          ringOffset: '2px'
        }
      },
      secondary: {
        backgroundColor: brandColors.neutral[100],
        color: brandColors.neutral[900],
        border: `1px solid ${brandColors.neutral[300]}`,
        hover: {
          backgroundColor: brandColors.neutral[200],
          transform: 'scale(1.02)'
        }
      },
      accent: {
        background: `linear-gradient(135deg, ${brandColors.purple[600]}, ${brandColors.pink[500]})`,
        color: brandColors.white,
        shadow: shadows.brand.purple.md,
        hover: {
          shadow: shadows.brand.purple.lg,
          transform: 'scale(1.02)'
        }
      }
    }
  },
  
  // Card specifications
  card: {
    padding: {
      tight: spacing[3],    // 12px
      normal: spacing[6],   // 24px
      loose: spacing[8],    // 32px
      xl: spacing[10]       // 40px
    },
    variants: {
      default: {
        backgroundColor: brandColors.white,
        borderRadius: borderRadius.xl,
        shadow: shadows.md,
        border: `1px solid ${brandColors.neutral[100]}`
      },
      elevated: {
        backgroundColor: brandColors.white,
        borderRadius: borderRadius.xl,
        shadow: shadows.lg,
        hover: {
          shadow: shadows.xl,
          transform: 'translateY(-1px)'
        }
      },
      bordered: {
        backgroundColor: brandColors.white,
        borderRadius: borderRadius.xl,
        border: `2px solid ${brandColors.purple[200]}`
      },
      glass: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderRadius: borderRadius.xl,
        border: `1px solid rgba(255, 255, 255, 0.2)`,
        shadow: shadows.lg
      }
    }
  },
  
  // Input specifications
  input: {
    sizes: {
      sm: {
        padding: '0.5rem 0.75rem',
        fontSize: typography.fontSize.sm.size,
        minHeight: '2.25rem'
      },
      md: {
        padding: '0.75rem 1rem',
        fontSize: typography.fontSize.base.size,
        minHeight: '2.75rem'
      },
      lg: {
        padding: '1rem 1.25rem',
        fontSize: typography.fontSize.lg.size,
        minHeight: '3rem'
      }
    },
    variants: {
      default: {
        backgroundColor: brandColors.white,
        border: `1px solid ${brandColors.neutral[300]}`,
        borderRadius: borderRadius.lg,
        focus: {
          borderColor: brandColors.purple[500],
          ring: `2px solid ${brandColors.purple[200]}`,
          ringOffset: '0px'
        }
      },
      error: {
        borderColor: brandColors.error[500],
        focus: {
          borderColor: brandColors.error[600],
          ring: `2px solid ${brandColors.error[200]}`
        }
      }
    }
  }
} as const;

// ==========================================
// BREAKPOINTS
// ==========================================

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// ==========================================
// Z-INDEX SCALE
// ==========================================

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
} as const;

// Export all tokens as a complete design system
export const designTokens = {
  brandColors,
  typography,
  spacing,
  shadows,
  borderRadius,
  animations,
  components,
  breakpoints,
  zIndex
} as const;

export default designTokens;
