'use client';

import { useState } from 'react';
import Card from './Card';

interface WindowWithGtag extends Window {
  gtag?: (...args: unknown[]) => void;
}

interface BookingPlatform {
  id: string;
  name: string;
  logo: string;
  description: string;
  url: string;
  features: string[];
  rating: number;
  reviewCount: number;
  tripCount: number;
  specialOffers?: string[];
  paymentMethods: string[];
  cancellationPolicy: string;
  trustBadges: string[];
}

interface ExternalBookingProps {
  platforms?: BookingPlatform[];
  className?: string;
  showComparison?: boolean;
}

export default function ExternalBooking({ 
  platforms,
  className = '',
  showComparison = true
}: ExternalBookingProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const defaultPlatforms: BookingPlatform[] = [
    {
      id: 'tourradar',
      name: 'TourRadar',
      logo: '🌐',
      description: 'Global marketplace for group tours with flexible booking and payment options',
      url: 'https://tourradar.com/o/2206experiences',
      features: [
        'Flexible payment plans',
        'Travel insurance included',
        '24/7 customer support',
        'Best price guarantee',
        'Free cancellation options'
      ],
      rating: 4.8,
      reviewCount: 45000,
      tripCount: 12,
      specialOffers: ['Early bird discounts', 'Group booking savings'],
      paymentMethods: ['Credit/Debit Cards', 'PayPal', 'Bank Transfer', 'Installments'],
      cancellationPolicy: 'Free cancellation up to 45 days before departure',
      trustBadges: ['ABTA Protected', 'SSL Secured', 'TrustPilot Rated']
    },
    {
      id: 'gadventures',
      name: 'G Adventures',
      logo: '🎒',
      description: 'Adventure travel specialist with small groups and local experiences',
      url: 'https://gadventures.com/operators/2206experiences',
      features: [
        'Small group guarantee',
        'Local living experiences',
        'Expert local guides',
        'Lifetime support',
        'Carbon offset included'
      ],
      rating: 4.9,
      reviewCount: 125000,
      tripCount: 8,
      specialOffers: ['Repeat traveler discounts', 'Refer a friend bonus'],
      paymentMethods: ['All major cards', 'PayPal', 'Apple Pay', 'Google Pay'],
      cancellationPolicy: 'Flexible rebooking within 2 years',
      trustBadges: ['B Corp Certified', '99% Traveler Satisfaction', 'Award Winning']
    },
    {
      id: 'eventbrite',
      name: 'Eventbrite',
      logo: '🎫',
      description: 'Leading platform for local events, workshops, and community gatherings',
      url: 'https://eventbrite.com/o/2206experiences',
      features: [
        'Mobile tickets',
        'Easy check-in process',
        'Calendar integration',
        'Event reminders',
        'Networking features'
      ],
      rating: 4.6,
      reviewCount: 89000,
      tripCount: 25,
      specialOffers: ['Early bird pricing', 'Member discounts'],
      paymentMethods: ['Credit Cards', 'PayPal', 'Apple Pay'],
      cancellationPolicy: 'Refund policy varies by event',
      trustBadges: ['Verified Organizer', 'Secure Payments', 'Global Platform']
    },
    {
      id: 'viator',
      name: 'Viator',
      logo: '🎭',
      description: 'TripAdvisor company specializing in tours and cultural experiences',
      url: 'https://viator.com/2206experiences',
      features: [
        'Instant confirmation',
        'Skip-the-line access',
        'Mobile vouchers',
        '24/7 support',
        'Reserve now, pay later'
      ],
      rating: 4.7,
      reviewCount: 67000,
      tripCount: 6,
      specialOffers: ['Bundle discounts', 'Seasonal promotions'],
      paymentMethods: ['Major credit cards', 'PayPal', 'Digital wallets'],
      cancellationPolicy: 'Full refund 24 hours before activity',
      trustBadges: ['TripAdvisor Company', 'Verified Reviews', 'Trusted Worldwide']
    }
  ];

  const activePlatforms = platforms || defaultPlatforms;

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(selectedPlatform === platformId ? null : platformId);
  };

  const handleBookingClick = (platform: BookingPlatform) => {
    // Track booking platform click
    if (typeof window !== 'undefined' && (window as WindowWithGtag).gtag) {
      (window as WindowWithGtag).gtag!('event', 'external_booking_click', {
        event_category: 'booking',
        event_label: platform.name,
        platform_id: platform.id
      });
    }

    window.open(platform.url, '_blank');
  };

  return (
    <div className={className}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Through Trusted Partners</h2>
        <p className="text-gray-600">
          Choose your preferred booking platform for secure payments and additional protection
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activePlatforms.map((platform) => (
          <Card key={platform.id} className="overflow-hidden">
            <div className="p-6">
              {/* Platform Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{platform.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-sm ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {platform.rating} ({platform.reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Our Trips</div>
                  <div className="text-lg font-bold text-purple-600">{platform.tripCount}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{platform.description}</p>

              {/* Special Offers */}
              {platform.specialOffers && platform.specialOffers.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {platform.specialOffers.map((offer, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        🎁 {offer}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                <div className="grid grid-cols-1 gap-1">
                  {platform.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500 text-xs">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {platform.features.length > 3 && (
                  <button
                    onClick={() => handlePlatformSelect(platform.id)}
                    className="text-purple-600 hover:text-purple-700 text-sm mt-1"
                  >
                    {selectedPlatform === platform.id ? 'Show less' : `+${platform.features.length - 3} more benefits`}
                  </button>
                )}
              </div>

              {/* Expanded Details */}
              {selectedPlatform === platform.id && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 gap-4">
                    {/* All Features */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">All Benefits:</h5>
                      <div className="grid gap-1">
                        {platform.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-green-500 text-xs">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Payment Options:</h5>
                      <div className="flex flex-wrap gap-1">
                        {platform.paymentMethods.map((method, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Trust Badges */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Trust & Security:</h5>
                      <div className="flex flex-wrap gap-1">
                        {platform.trustBadges.map((badge, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            🛡️ {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cancellation Policy */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Cancellation:</h5>
                      <p className="text-sm text-gray-600">{platform.cancellationPolicy}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => handleBookingClick(platform)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Book on {platform.name}
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Platform Comparison Table */}
      {showComparison && (
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Platform Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Platform</th>
                  <th className="border border-gray-300 p-3 text-center">Rating</th>
                  <th className="border border-gray-300 p-3 text-center">Our Trips</th>
                  <th className="border border-gray-300 p-3 text-center">Payment Options</th>
                  <th className="border border-gray-300 p-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {activePlatforms.map((platform) => (
                  <tr key={platform.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{platform.logo}</span>
                        <span className="font-medium">{platform.name}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span>⭐</span>
                        <span className="font-medium">{platform.rating}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-3 text-center font-medium">
                      {platform.tripCount}
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="text-sm text-gray-600">
                        {platform.paymentMethods.length} options
                      </span>
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="text-sm text-gray-600">
                        {platform.id === 'tourradar' ? 'Group Tours' :
                         platform.id === 'gadventures' ? 'Adventure Travel' :
                         platform.id === 'eventbrite' ? 'Local Events' :
                         'Cultural Experiences'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Need Help Choosing?</h3>
          <p className="text-blue-700 mb-4">
            Not sure which platform is right for you? Our team can help you select the best booking option.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:bookings@2206experiences.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              📧 Email Support
            </a>
            <a 
              href="https://wa.me/447856123456?text=Hi! I need help choosing the best booking platform for my trip."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              💬 WhatsApp Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
