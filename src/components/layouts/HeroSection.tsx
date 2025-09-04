import React from "react";
import Typography from "../ui/Typography";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
  className?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  description,
  children,
  backgroundImage,
  overlayOpacity = 0.6,
  className = ''
}: HeroSectionProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(147, 51, 234, ${overlayOpacity}), rgba(236, 72, 153, ${overlayOpacity})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        background: 'linear-gradient(135deg, rgb(147, 51, 234) 0%, rgb(236, 72, 153) 100%)'
      };

  return (
    <section 
      className={`relative min-h-[600px] flex items-center justify-center text-white overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Typography 
            variant="display-lg" 
            color="white" 
            align="center" 
            className="mb-4 sm:mb-6"
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="body-xl" 
              color="white" 
              align="center"
              className="mb-6 text-white/90 max-w-3xl mx-auto"
            >
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography 
              variant="body-lg" 
              color="white"
              align="center"
              className="max-w-2xl mx-auto leading-relaxed opacity-90"
            >
              {description}
            </Typography>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-pink-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 right-1/4 w-12 h-12 bg-purple-200/30 rounded-full blur-md"></div>
      </div>
    </section>
  );
}
