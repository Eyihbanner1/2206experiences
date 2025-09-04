import React from "react";
import Link from "next/link";
import { designTokens } from "../../styles/designTokens";
import { microInteractions } from "../../styles/microInteractions";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "white" | "outline-white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  external = false,
  loading = false
}: ButtonProps) {
  
  // Base classes using design tokens
  const baseClasses = `
    inline-flex items-center justify-center font-medium
    text-center whitespace-nowrap rounded-lg
    transition-all duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
    focus:outline-none focus:ring-3 focus:ring-purple-300 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-102
  `.replace(/\s+/g, ' ').trim();
  
  // Size variants using design system tokens
  const sizeClasses = {
    xs: "px-3 py-2 text-xs leading-[18px] min-h-[32px] rounded-md",
    sm: "px-4 py-2.5 text-sm leading-[22px] min-h-[36px] rounded-md", 
    md: "px-5 py-3 text-base leading-[26px] min-h-[44px] rounded-lg",
    lg: "px-7 py-4 text-lg leading-[28px] min-h-[48px] rounded-lg",
    xl: "px-8 py-5 text-xl leading-[30px] min-h-[56px] rounded-xl"
  };
  
  // Color variants using design tokens
  const variantClasses = {
    primary: `
      bg-purple-600 text-white shadow-md
      hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-purple-300
      active:transform active:scale-95
    `.replace(/\s+/g, ' ').trim(),
    
    secondary: `
      bg-neutral-100 text-neutral-900 border border-neutral-300 shadow-sm
      hover:bg-neutral-200 hover:border-purple-300 hover:-translate-y-0.5
      focus:ring-purple-300 focus:border-purple-500
      active:transform active:scale-95
    `.replace(/\s+/g, ' ').trim(),
    
    accent: `
      bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md
      hover:shadow-lg hover:-translate-y-0.5 hover:scale-105
      hover:filter hover:brightness-110
      focus:ring-purple-300
      active:transform active:scale-95
    `.replace(/\s+/g, ' ').trim(),
    
    white: `
      bg-white text-purple-600 border border-purple-200 shadow-sm
      hover:bg-purple-50 hover:border-purple-300 hover:-translate-y-0.5
      focus:ring-purple-300 focus:bg-purple-50
      active:transform active:scale-95
    `.replace(/\s+/g, ' ').trim(),
    
    "outline-white": `
      bg-transparent text-white border-2 border-white border-opacity-60
      hover:bg-white hover:text-purple-600 hover:border-opacity-100 hover:-translate-y-0.5
      focus:ring-white focus:ring-opacity-60 focus:bg-white focus:bg-opacity-10
      active:transform active:scale-95
    `.replace(/\s+/g, ' ').trim()
  };
  
  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
  
  // Button content with loading state
  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );
  
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={finalClasses}
          aria-disabled={disabled}
        >
          {buttonContent}
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
    }
    
    return (
      <Link href={href} className={finalClasses} aria-disabled={disabled}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClasses}
      aria-busy={loading}
    >
      {buttonContent}
    </button>
  );
}
