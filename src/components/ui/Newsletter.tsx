'use client';

import { useState } from 'react';
import Card from './Card';

interface WindowWithGtag extends Window {
  gtag?: (...args: unknown[]) => void;
}

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'footer' | 'inline';
  title?: string;
  description?: string;
  className?: string;
  showBenefits?: boolean;
}

export default function Newsletter({ 
  variant = 'default',
  title,
  description,
  className = '',
  showBenefits = true
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call to newsletter service (Mailchimp/ConvertKit)
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'website',
          tags: ['general', 'travel-tips']
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        
        // Track subscription event
        if (typeof window !== 'undefined' && (window as WindowWithGtag).gtag) {
          (window as WindowWithGtag).gtag!('event', 'newsletter_subscription', {
            event_category: 'engagement',
            event_label: variant
          });
        }
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    'Weekly travel inspiration and tips',
    'Exclusive early-bird trip discounts',
    'Member-only cultural insights',
    'Community event notifications'
  ];

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return 'p-4';
      case 'footer':
        return 'p-0 bg-transparent';
      case 'inline':
        return 'p-6 bg-purple-50 border border-purple-200';
      default:
        return 'p-8';
    }
  };

  const getDefaultContent = () => {
    switch (variant) {
      case 'compact':
        return {
          title: 'Stay Updated',
          description: 'Get travel tips and trip updates delivered to your inbox.'
        };
      case 'footer':
        return {
          title: 'Newsletter',
          description: 'Weekly travel inspiration & exclusive offers'
        };
      case 'inline':
        return {
          title: '📧 Join Our Travel Community',
          description: 'Get insider tips, cultural insights, and early access to new adventures.'
        };
      default:
        return {
          title: 'Join the 2206 Travel Community',
          description: 'Subscribe to our newsletter for weekly travel inspiration, cultural insights, and exclusive early-bird access to new adventures.'
        };
    }
  };

  const defaultContent = getDefaultContent();
  const displayTitle = title || defaultContent.title;
  const displayDescription = description || defaultContent.description;

  if (isSubscribed) {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-lg font-bold text-green-700 mb-2">Welcome to the community!</h3>
          <p className="text-green-600">
            Thanks for subscribing! Check your email for a welcome message with your first travel tip.
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h3 className="font-bold text-white mb-3">{displayTitle}</h3>
        <p className="text-gray-300 text-sm mb-4">{displayDescription}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-2 px-6 rounded-full transition-colors"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </div>
    );
  }

  return (
    <Card className={`${getVariantStyles()} ${className}`}>
      <div className="text-center">
        <h2 className={`font-bold text-gray-900 mb-4 ${
          variant === 'compact' ? 'text-lg' : 'text-2xl'
        }`}>
          {displayTitle}
        </h2>
        <p className={`text-gray-600 mb-6 ${
          variant === 'compact' ? 'text-sm' : 'text-base'
        }`}>
          {displayDescription}
        </p>

        {showBenefits && variant !== 'compact' && (
          <div className="mb-6">
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1 text-sm">✓</span>
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-full transition-colors whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </form>

        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our{' '}
          <a href="/privacy-policy" className="text-purple-600 hover:underline">
            Privacy Policy
          </a>
          . Unsubscribe at any time.
        </p>
      </div>
    </Card>
  );
}
