import React from "react";
import { designTokens } from "../../styles/designTokens";

interface TypographyProps {
  variant?: 
    | "display-xl" | "display-lg" | "display-md" | "display-sm" | "display-xs"
    | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    | "body-xl" | "body-lg" | "body" | "body-sm" | "body-xs"
    | "caption" | "overline";
  color?: "primary" | "secondary" | "accent" | "muted" | "white" | "neutral";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "black";
  align?: "left" | "center" | "right" | "justify";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export default function Typography({
  variant = "body",
  color = "primary",
  weight = "normal",
  align = "left",
  as,
  className = "",
  children,
  gradient = false
}: TypographyProps) {
  
  // Typography variants using design system scale
  const variants = {
    "display-xl": "text-7xl font-bold leading-[0.85] tracking-tight",
    "display-lg": "text-6xl font-bold leading-[0.9] tracking-tight",
    "display-md": "text-5xl font-bold leading-tight tracking-tight",
    "display-sm": "text-4xl font-semibold leading-tight tracking-tight",
    "display-xs": "text-3xl font-semibold leading-tight tracking-normal",
    "h1": "text-4xl sm:text-5xl font-bold leading-tight tracking-tight",
    "h2": "text-3xl sm:text-4xl font-semibold leading-tight tracking-tight",
    "h3": "text-2xl sm:text-3xl font-semibold leading-snug tracking-normal",
    "h4": "text-xl sm:text-2xl font-medium leading-snug tracking-normal",
    "h5": "text-lg sm:text-xl font-medium leading-normal tracking-normal",
    "h6": "text-base sm:text-lg font-medium leading-normal tracking-normal",
    "body-xl": "text-xl leading-relaxed tracking-normal",
    "body-lg": "text-lg leading-relaxed tracking-normal",
    "body": "text-base leading-normal tracking-normal",
    "body-sm": "text-sm leading-normal tracking-normal",
    "body-xs": "text-xs leading-normal tracking-wide",
    "caption": "text-sm leading-tight tracking-wide",
    "overline": "text-xs uppercase leading-tight tracking-widest font-medium"
  };
  
  // Color variants using design system tokens
  const colors = {
    primary: gradient ? "bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent" : "text-purple-600",
    secondary: gradient ? "bg-gradient-to-r from-neutral-700 to-neutral-800 bg-clip-text text-transparent" : "text-neutral-700",
    accent: gradient ? "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent" : "text-pink-500",
    muted: "text-neutral-500",
    white: "text-white",
    neutral: "text-neutral-800"
  };
  
  // Weight system using design tokens
  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black"
  };
  
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify"
  };
  
  // Default HTML element based on variant
  const getDefaultElement = (): keyof JSX.IntrinsicElements => {
    if (variant.startsWith("display")) return "h1";
    if (variant.startsWith("h")) return variant as keyof JSX.IntrinsicElements;
    if (variant.startsWith("body")) return "p";
    if (variant === "caption") return "figcaption";
    if (variant === "overline") return "span";
    return "p";
  };
  
  const Element = as || getDefaultElement();
  const classes = `${variants[variant]} ${colors[color]} ${weights[weight]} ${alignments[align]} ${className}`;
  
  return (
    <Element className={classes}>
      {children}
    </Element>
  );
}
