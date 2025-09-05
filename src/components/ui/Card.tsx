import React from "react";
import { designTokens } from "../../styles/designTokens";
import { microInteractions } from "../../styles/microInteractions";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "bordered" | "glass";
  padding?: "tight" | "normal" | "loose" | "xl";
  className?: string;
  hover?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  centered?: boolean;
}

export default function Card({
  children,
  variant = "default",
  padding = "normal",
  className = "",
  hover = false,
  interactive = false,
  onClick,
  centered = false
}: CardProps) {
  
  // Base classes using design tokens
  const baseClasses = `
    rounded-lg transition-all duration-300
    ${interactive || onClick ? 'cursor-pointer' : ''}
    ${centered ? 'text-center' : ''}
  `.trim();
  
  // Padding variants using design system spacing
  const paddingClasses = {
    tight: "p-4",      // 16px
    normal: "p-6",     // 24px  
    loose: "p-8",      // 32px
    xl: "p-10"         // 40px
  };
  
  // Card variants using design tokens
  const variantClasses = {
    default: `
      bg-white border border-neutral-200 shadow-sm
      ${hover || interactive ? 'hover:shadow-md hover:-translate-y-1 hover:border-purple-200' : ''}
    `.replace(/\s+/g, ' ').trim(),
    
    elevated: `
      bg-white shadow-md border border-neutral-100
      ${hover || interactive ? 'hover:shadow-lg hover:-translate-y-1' : ''}
    `.replace(/\s+/g, ' ').trim(),
    
    bordered: `
      bg-white border-2 border-purple-100 shadow-sm
      ${hover || interactive ? 'hover:border-purple-200 hover:shadow-md hover:-translate-y-1' : ''}
    `.replace(/\s+/g, ' ').trim(),
    
    glass: `
      bg-white bg-opacity-60 backdrop-blur-sm border border-white border-opacity-20 shadow-sm
      ${hover || interactive ? 'hover:bg-opacity-80 hover:shadow-md hover:-translate-y-1' : ''}
    `.replace(/\s+/g, ' ').trim()
  };
  
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
  const cardProps = {
    className: finalClasses,
    ...(onClick && { onClick }),
    ...(interactive && { role: 'button', tabIndex: 0 })
  };
  
  return (
    <div {...cardProps}>
      {children}
    </div>
  );
}
