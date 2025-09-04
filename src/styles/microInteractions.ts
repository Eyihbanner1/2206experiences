/**
 * 2206Experiences Micro-Interaction Library
 * 
 * A comprehensive library of micro-interactions and animations
 * that enhance user experience while maintaining brand consistency.
 * Uses design tokens for consistent spacing, colors, and timing.
 */

import { designTokens } from './designTokens';

// ==========================================
// HOVER EFFECTS
// ==========================================

export const hoverEffects = {
  // Button hover effects
  button: {
    primary: {
      transition: `all ${designTokens.animations.duration[200]} ${designTokens.animations.ease.brand}`,
      hover: {
        transform: 'translateY(-1px) scale(1.02)',
        boxShadow: designTokens.shadows.brand.purple.lg,
        filter: 'brightness(1.05)'
      }
    },
    
    secondary: {
      transition: `all ${designTokens.animations.duration[200]} ${designTokens.animations.ease.out}`,
      hover: {
        transform: 'translateY(-1px)',
        backgroundColor: designTokens.brandColors.neutral[50],
        borderColor: designTokens.brandColors.purple[300]
      }
    },
    
    accent: {
      transition: `all ${designTokens.animations.duration[300]} ${designTokens.animations.ease.bounce}`,
      hover: {
        transform: 'scale(1.05)',
        boxShadow: designTokens.shadows.brand.pink.lg,
        filter: 'hue-rotate(10deg) brightness(1.1)'
      }
    }
  },
  
  // Card hover effects
  card: {
    lift: {
      transition: `all ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out}`,
      hover: {
        transform: 'translateY(-4px) scale(1.01)',
        boxShadow: designTokens.shadows.xl
      }
    },
    
    glow: {
      transition: `all ${designTokens.animations.duration[300]} ${designTokens.animations.ease.brand}`,
      hover: {
        boxShadow: `${designTokens.shadows.lg}, 0 0 20px ${designTokens.brandColors.purple[200]}`,
        borderColor: designTokens.brandColors.purple[300]
      }
    },
    
    tilt: {
      transition: `all ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out}`,
      hover: {
        transform: 'perspective(1000px) rotateX(5deg) translateY(-2px)',
        boxShadow: designTokens.shadows.xl
      }
    }
  },
  
  // Image hover effects
  image: {
    zoom: {
      transition: `transform ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out}`,
      hover: {
        transform: 'scale(1.05)'
      }
    },
    
    parallax: {
      transition: `transform ${designTokens.animations.duration[500]} ${designTokens.animations.ease.out}`,
      hover: {
        transform: 'scale(1.1) translateY(-5px)'
      }
    }
  },
  
  // Link hover effects
  link: {
    underline: {
      position: 'relative' as const,
      transition: `color ${designTokens.animations.duration[200]} ${designTokens.animations.ease.out}`,
      '&::after': {
        content: '""',
        position: 'absolute' as const,
        bottom: '-2px',
        left: '0',
        width: '0',
        height: '2px',
        backgroundColor: designTokens.brandColors.purple[500],
        transition: `width ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out}`
      },
      hover: {
        color: designTokens.brandColors.purple[600],
        '&::after': {
          width: '100%'
        }
      }
    },
    
    gradient: {
      background: `linear-gradient(45deg, ${designTokens.brandColors.purple[600]}, ${designTokens.brandColors.pink[500]})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      transition: `all ${designTokens.animations.duration[200]} ${designTokens.animations.ease.out}`,
      hover: {
        filter: 'hue-rotate(20deg) brightness(1.2)'
      }
    }
  }
} as const;

// ==========================================
// FOCUS STATES
// ==========================================

export const focusStates = {
  default: {
    outline: 'none',
    ring: `2px solid ${designTokens.brandColors.purple[500]}`,
    ringOffset: '2px',
    ringOpacity: 0.6
  },
  
  button: {
    outline: 'none',
    ring: `3px solid ${designTokens.brandColors.purple[300]}`,
    ringOffset: '2px',
    transform: 'scale(1.02)'
  },
  
  input: {
    outline: 'none',
    borderColor: designTokens.brandColors.purple[500],
    ring: `2px solid ${designTokens.brandColors.purple[200]}`,
    ringOffset: '0px'
  },
  
  card: {
    outline: 'none',
    ring: `2px solid ${designTokens.brandColors.purple[400]}`,
    ringOffset: '4px',
    transform: 'scale(1.01)'
  }
} as const;

// ==========================================
// LOADING ANIMATIONS
// ==========================================

export const loadingAnimations = {
  spinner: {
    animation: `spin ${designTokens.animations.duration[1000]} linear infinite`,
    keyframes: designTokens.animations.keyframes.spin
  },
  
  pulse: {
    animation: `pulse ${designTokens.animations.duration[1000]} ${designTokens.animations.ease.inOut} infinite`,
    keyframes: designTokens.animations.keyframes.pulse
  },
  
  dots: {
    display: 'inline-flex',
    gap: designTokens.spacing[1],
    '& > div': {
      width: designTokens.spacing[2],
      height: designTokens.spacing[2],
      backgroundColor: designTokens.brandColors.purple[500],
      borderRadius: '50%',
      animation: `bounce ${designTokens.animations.duration[1000]} infinite`,
      '&:nth-child(1)': { animationDelay: '0ms' },
      '&:nth-child(2)': { animationDelay: '100ms' },
      '&:nth-child(3)': { animationDelay: '200ms' }
    }
  },
  
  skeleton: {
    background: `linear-gradient(90deg, 
      ${designTokens.brandColors.neutral[200]} 25%, 
      ${designTokens.brandColors.neutral[100]} 50%, 
      ${designTokens.brandColors.neutral[200]} 75%)`,
    backgroundSize: '200% 100%',
    animation: `shimmer ${designTokens.animations.duration[1000]} infinite`,
    keyframes: {
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' }
      }
    }
  }
} as const;

// ==========================================
// ENTRANCE ANIMATIONS
// ==========================================

export const entranceAnimations = {
  fadeIn: {
    animation: `fadeIn ${designTokens.animations.duration[500]} ${designTokens.animations.ease.out} forwards`,
    keyframes: designTokens.animations.keyframes.fadeIn
  },
  
  slideInFromBottom: {
    animation: `slideInFromBottom ${designTokens.animations.duration[500]} ${designTokens.animations.ease.spring} forwards`,
    keyframes: designTokens.animations.keyframes.slideInFromBottom
  },
  
  slideInFromTop: {
    animation: `slideInFromTop ${designTokens.animations.duration[500]} ${designTokens.animations.ease.spring} forwards`,
    keyframes: designTokens.animations.keyframes.slideInFromTop
  },
  
  scaleIn: {
    animation: `scaleIn ${designTokens.animations.duration[300]} ${designTokens.animations.ease.bounce} forwards`,
    keyframes: designTokens.animations.keyframes.scaleIn
  },
  
  // Staggered animations for lists
  stagger: {
    container: {
      '& > *': {
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `slideInFromBottom ${designTokens.animations.duration[500]} ${designTokens.animations.ease.out} forwards`
      },
      '& > *:nth-child(1)': { animationDelay: '0ms' },
      '& > *:nth-child(2)': { animationDelay: '100ms' },
      '& > *:nth-child(3)': { animationDelay: '200ms' },
      '& > *:nth-child(4)': { animationDelay: '300ms' },
      '& > *:nth-child(5)': { animationDelay: '400ms' },
      '& > *:nth-child(6)': { animationDelay: '500ms' }
    }
  }
} as const;

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

export const scrollAnimations = {
  parallax: {
    slow: 'transform: translateY(calc(var(--scroll-y) * 0.3px))',
    medium: 'transform: translateY(calc(var(--scroll-y) * 0.5px))',
    fast: 'transform: translateY(calc(var(--scroll-y) * 0.8px))'
  },
  
  reveal: {
    // Elements appear as they come into view
    observer: {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    },
    hidden: {
      opacity: 0,
      transform: 'translateY(50px)'
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `all ${designTokens.animations.duration[700]} ${designTokens.animations.ease.out}`
    }
  },
  
  progress: {
    // Progress bar that fills based on scroll position
    bar: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      backgroundColor: designTokens.brandColors.purple[500],
      transformOrigin: '0%',
      zIndex: designTokens.zIndex.sticky
    }
  }
} as const;

// ==========================================
// INTERACTION FEEDBACK
// ==========================================

export const interactionFeedback = {
  // Click ripple effect
  ripple: {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    '&::before': {
      content: '""',
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '0',
      height: '0',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      transition: `all ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out}`
    },
    '&:active::before': {
      width: '300px',
      height: '300px'
    }
  },
  
  // Success states
  success: {
    flash: {
      backgroundColor: designTokens.brandColors.success[50],
      borderColor: designTokens.brandColors.success[500],
      transition: `all ${designTokens.animations.duration[200]} ${designTokens.animations.ease.out}`,
      animation: `flash ${designTokens.animations.duration[500]} ease-in-out`,
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: designTokens.brandColors.success[50] }
        }
      }
    },
    
    checkmark: {
      animation: `checkmark ${designTokens.animations.duration[500]} ${designTokens.animations.ease.bounce} forwards`,
      keyframes: {
        checkmark: {
          '0%': { transform: 'scale(0) rotate(45deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(45deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(45deg)', opacity: '1' }
        }
      }
    }
  },
  
  // Error states
  error: {
    shake: {
      animation: `shake ${designTokens.animations.duration[500]} ease-in-out`,
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
        }
      }
    },
    
    highlight: {
      backgroundColor: designTokens.brandColors.error[50],
      borderColor: designTokens.brandColors.error[500],
      color: designTokens.brandColors.error[700]
    }
  }
} as const;

// ==========================================
// MODAL & OVERLAY ANIMATIONS
// ==========================================

export const modalAnimations = {
  backdrop: {
    enter: {
      opacity: 0,
      animation: `fadeIn ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out} forwards`
    },
    exit: {
      opacity: 1,
      animation: `fadeOut ${designTokens.animations.duration[200]} ${designTokens.animations.ease.in} forwards`
    }
  },
  
  modal: {
    enter: {
      opacity: 0,
      transform: 'scale(0.9) translateY(-20px)',
      animation: `modalEnter ${designTokens.animations.duration[300]} ${designTokens.animations.ease.spring} forwards`,
      keyframes: {
        modalEnter: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(-20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        }
      }
    },
    
    exit: {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
      animation: `modalExit ${designTokens.animations.duration[200]} ${designTokens.animations.ease.in} forwards`,
      keyframes: {
        modalExit: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.9) translateY(-20px)' }
        }
      }
    }
  },
  
  drawer: {
    slideFromRight: {
      enter: {
        transform: 'translateX(100%)',
        animation: `slideFromRight ${designTokens.animations.duration[300]} ${designTokens.animations.ease.out} forwards`,
        keyframes: {
          slideFromRight: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' }
          }
        }
      }
    }
  }
} as const;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export const microInteractionUtils = {
  // Generate CSS-in-JS object from micro-interaction definition
  applyHoverEffect: (effect: typeof hoverEffects.button.primary) => ({
    transition: effect.transition,
    '&:hover': effect.hover
  }),
  
  // Generate keyframes for CSS-in-JS
  generateKeyframes: (keyframes: Record<string, Record<string, string>>) => {
    return Object.entries(keyframes).reduce((acc, [name, frames]) => {
      acc[`@keyframes ${name}`] = frames;
      return acc;
    }, {} as Record<string, Record<string, string>>);
  },
  
  // Create staggered animation delay
  staggerDelay: (index: number, baseDelay: number = 100) => ({
    animationDelay: `${index * baseDelay}ms`
  }),
  
  // Create responsive animation (disable on reduced motion)
  respectsMotionPreference: (animation: Record<string, any>) => ({
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
      transition: 'none'
    },
    '@media (prefers-reduced-motion: no-preference)': animation
  })
} as const;

// Export complete micro-interaction library
export const microInteractions = {
  hoverEffects,
  focusStates,
  loadingAnimations,
  entranceAnimations,
  scrollAnimations,
  interactionFeedback,
  modalAnimations,
  utils: microInteractionUtils
} as const;

export default microInteractions;
