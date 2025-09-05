'use client';

import React, { useState, useEffect } from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  ctaVariant: "primary" | "secondary" | "accent" | "white" | "outline-white";
  backgroundImage?: string;
}

interface HeroSliderProps {
  slides: SlideData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  overlayOpacity?: number;
  className?: string;
}

export default function HeroSlider({ 
  slides, 
  autoplay = true, 
  autoplayDelay = 5000,
  overlayOpacity = 0.5,
  className = ''
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, slides.length]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const current = slides[currentSlide];
  const backgroundStyle = current.backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(147, 51, 234, ${overlayOpacity}), rgba(236, 72, 153, ${overlayOpacity})), url(${current.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        background: 'linear-gradient(135deg, rgb(147, 51, 234) 0%, rgb(236, 72, 153) 100%)'
      };

  return (
    <section 
      className={`relative min-h-[700px] flex items-center justify-center text-white overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500" />
      
      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 group"
            aria-label="Previous slide"
          >
            <svg 
              className="w-6 h-6 text-white transition-transform group-hover:-translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 group"
            aria-label="Next slide"
          >
            <svg 
              className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Content container with slide animation */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div 
          className={`max-w-4xl mx-auto space-y-8 transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          {/* Slide content */}
          <div className="space-y-6">
            <Typography 
              variant="display-lg" 
              color="white" 
              align="center" 
              className="mb-4 sm:mb-6 animate-fade-in-up"
            >
              {current.title}
            </Typography>
            
            <Typography 
              variant="body-xl" 
              color="white" 
              align="center" 
              className="max-w-3xl mx-auto opacity-90 animate-fade-in-up animation-delay-200"
            >
              {current.subtitle}
            </Typography>
          </div>
          
          {/* Single CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <Button 
              href={current.ctaLink} 
              variant={current.ctaVariant} 
              size="xl"
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {current.ctaText}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Progress bar for autoplay */}
      {autoplay && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          />
        </div>
      )}
    </section>
  );
}
