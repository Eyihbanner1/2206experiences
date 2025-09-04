'use client';

import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import SearchFilters from '@/components/ui/SearchFilters';
import BookingModal from '@/components/ui/BookingModal';
interface Trip {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  category: string;
  region: string;
  priceRange: string;
  durationCategory: string;
  slug: string;
}

interface FilterCriteria {
  region?: string;
  priceRange?: string;
  durationCategory?: string;
  category?: string;
}

export default function TripsPage() {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);

  const trips = useMemo(() => [
    {
      id: 1,
      title: "3-Day Lake District Adventure",
      location: "England, UK",
      duration: "3 days, 2 nights",
      price: "from £299",
      image: "/images/lake-district.jpg",
      highlights: ["Scenic hiking trails", "Traditional pub dining", "Lakeside accommodation", "Photography workshops"],
      description: "Discover the breathtaking beauty of England's Lake District with guided hikes, local cuisine, and stunning scenery.",
      category: "adventure",
      region: "europe",
      priceRange: "budget",
      durationCategory: "short",
      slug: "lake-district-adventure"
    },
    {
      id: 2,
      title: "5 Days Albania Discovery",
      location: "Albania",
      duration: "5 days, 4 nights",
      price: "from £499",
      image: "/images/albania.jpg",
      highlights: ["Pristine beaches", "Historical sites", "Mountain adventures", "Local cultural experiences"],
      description: "Explore Albania's hidden gems from pristine coastlines to mountain villages and rich cultural heritage.",
      category: "cultural",
      region: "europe",
      priceRange: "budget",
      durationCategory: "medium",
      slug: "albania-discovery"
    },
    {
      id: 3,
      title: "Family Algarve Getaway",
      location: "Portugal",
      duration: "7 days, 6 nights",
      price: "from £799",
      image: "/images/algarve.jpg",
      highlights: ["Family-friendly beaches", "Water sports", "Cultural tours", "Kid-friendly activities"],
      description: "Perfect family vacation combining relaxation, adventure, and cultural discovery in Portugal's sunny Algarve.",
      category: "family",
      region: "europe",
      priceRange: "mid",
      durationCategory: "medium",
      slug: "algarve-getaway"
    },
    {
      id: 4,
      title: "Women's Santorini Retreat",
      location: "Santorini, Greece",
      duration: "5 days, 4 nights",
      price: "from £899",
      image: "/images/santorini.jpg",
      highlights: ["Wellness activities", "Sunset photography", "Wine tasting", "Spa treatments"],
      description: "A rejuvenating women-only retreat featuring wellness activities, stunning sunsets, and authentic Greek culture.",
      category: "women",
      region: "europe",
      priceRange: "mid",
      durationCategory: "medium",
      slug: "santorini-retreat"
    },
    {
      id: 5,
      title: "Morocco Cultural Immersion",
      location: "Marrakech & Atlas Mountains, Morocco",
      duration: "8 days, 7 nights",
      price: "from £1,299",
      image: "/images/morocco.jpg",
      highlights: ["Traditional riads", "Atlas Mountains trekking", "Berber village visits", "Cooking workshops"],
      description: "Deep dive into Moroccan culture with authentic experiences in bustling souks, serene mountains, and traditional villages.",
      category: "cultural",
      region: "africa",
      priceRange: "premium",
      durationCategory: "long",
      slug: "morocco-cultural"
    },
    {
      id: 6,
      title: "Solo Explorer's Thailand",
      location: "Bangkok & Northern Thailand",
      duration: "10 days, 9 nights",
      price: "from £1,199",
      image: "/images/thailand.jpg",
      highlights: ["Temple tours", "Thai cooking classes", "Jungle trekking", "Solo-friendly group"],
      description: "Perfect for solo travelers wanting to explore Thailand's rich culture, delicious cuisine, and stunning landscapes with like-minded adventurers.",
      category: "solo",
      region: "asia",
      priceRange: "premium",
      durationCategory: "long",
      slug: "thailand-solo"
    }
  ], []);

  // Initialize filtered trips
  React.useEffect(() => {
    setFilteredTrips(trips);
  }, [trips]);

  // Filter handlers
  const handleLocationFilter = (region: string) => {
    filterTrips({ region });
  };

  const handlePriceFilter = (priceRange: string) => {
    filterTrips({ priceRange });
  };

  const handleDurationFilter = (duration: string) => {
    filterTrips({ durationCategory: duration });
  };

  const handleTypeFilter = (type: string) => {
    filterTrips({ category: type });
  };

  const filterTrips = (filters: FilterCriteria) => {
    let filtered = trips;

    if (filters.region) {
      filtered = filtered.filter(trip => trip.region === filters.region);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(trip => trip.priceRange === filters.priceRange);
    }
    if (filters.durationCategory) {
      filtered = filtered.filter(trip => trip.durationCategory === filters.durationCategory);
    }
    if (filters.category) {
      filtered = filtered.filter(trip => trip.category === filters.category);
    }

    setFilteredTrips(filtered);
  };

  const handleBookTrip = (trip: Trip) => {
    setSelectedTrip(trip);
    setIsBookingModalOpen(true);
  };

  const features = [
    {
      icon: "✈️",
      title: "Curated Itineraries",
      description: "Carefully planned trips with local insights and hidden gems"
    },
    {
      icon: "🏨",
      title: "Quality Accommodation",
      description: "Handpicked hotels and authentic local stays"
    },
    {
      icon: "👥",
      title: "Small Groups",
      description: "Intimate group sizes for personalized experiences"
    },
    {
      icon: "📸",
      title: "Instagram-Worthy",
      description: "Perfect photo opportunities at every destination"
    }
  ];

  return (
    <MainLayout>
      <main className="py-16">
        {/* Search Filters */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <SearchFilters
            onLocationChange={handleLocationFilter}
            onPriceChange={handlePriceFilter}
            onDurationChange={handleDurationFilter}
            onTypeChange={handleTypeFilter}
          />
        </section>
        {/* Trip Features */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Why Choose Our Trips?
            </Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
              Every trip is designed with African explorers in mind - authentic experiences, cultural connections, and memories that last a lifetime.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" padding="normal" hover className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <Typography variant="h4" color="primary" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body" color="neutral">{feature.description}</Typography>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Trips */}
        <section id="trips" className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              {filteredTrips.length === trips.length ? 'Featured Adventures' : `${filteredTrips.length} Adventures Found`}
            </Typography>
            <Typography variant="body-lg" color="neutral">
              {filteredTrips.length === trips.length 
                ? 'From English countryside to Mediterranean islands - discover our handpicked destinations'
                : 'Discover your perfect adventure below'
              }
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <Card key={trip.id} variant="elevated" hover className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-neutral-500 text-sm">
                  {trip.image}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Typography variant="h4" color="primary" weight="bold" className="mb-2">
                        {trip.title}
                      </Typography>
                      <Typography variant="body" color="primary" weight="medium" className="mb-1">
                        📍 {trip.location}
                      </Typography>
                      <Typography variant="body-sm" color="neutral">
                        ⏱️ {trip.duration}
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography variant="h3" color="primary" weight="bold">
                        {trip.price}
                      </Typography>
                      <Typography variant="caption" color="neutral">per person</Typography>
                    </div>
                  </div>

                  <Typography variant="body" color="neutral" className="mb-4">
                    {trip.description}
                  </Typography>

                  <div className="mb-6">
                    <Typography variant="body" weight="semibold" color="primary" className="mb-2">
                      Trip Highlights:
                    </Typography>
                    <div className="grid grid-cols-1 gap-2">
                      {trip.highlights.slice(0, 3).map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          <Typography variant="body-sm" color="neutral">{highlight}</Typography>
                        </div>
                      ))}
                      {trip.highlights.length > 3 && (
                        <Typography variant="body-sm" color="primary" weight="medium">
                          +{trip.highlights.length - 3} more highlights
                        </Typography>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button href={`/trips/${trip.slug}`} variant="primary" className="flex-1">
                      View Details
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => handleBookTrip(trip)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredTrips.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No trips match your criteria</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or browse all our adventures</p>
              <Button variant="primary" onClick={() => {
                setFilteredTrips(trips);
                // Reset all filters - in a real app you'd reset the filter state
              }}>
                Show All Trips
              </Button>
            </div>
          )}
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Trips Work
            </h2>
            <p className="text-lg text-gray-600">
              Simple booking process for unforgettable adventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Choose Your Adventure
              </h3>
              <p className="text-gray-600">
                Browse our curated trips and find the perfect experience that matches your interests and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Book & Prepare
              </h3>
              <p className="text-gray-600">
                Secure your spot with easy online booking. We&apos;ll send you a detailed itinerary and packing list.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create Memories
              </h3>
              <p className="text-gray-600">
                Enjoy your adventure with like-minded travelers and return home with unforgettable memories.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Travelers Say
              </h2>
              <p className="text-lg text-gray-600">
                Real experiences from our travel community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4">
                    SA
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah A.</h4>
                    <p className="text-sm text-gray-600">Albania Discovery Trip</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The Albania trip exceeded all my expectations! The hidden beaches, mountain villages, and authentic cultural experiences made it unforgettable. Our guide was knowledgeable and the group was amazing.&quot;
                </p>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4">
                    MK
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael K.</h4>
                    <p className="text-sm text-gray-600">Lake District Adventure</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Perfect weekend getaway! The hiking trails were breathtaking, the accommodation was cozy, and meeting other African travelers made the experience even more special. Already booking my next trip!&quot;
                </p>
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the 2206 Travel Club for exclusive trip announcements and early bird discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              Join Travel Club
            </Button>
            <Button variant="secondary">
              Book Consultation
            </Button>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {selectedTrip && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          trip={selectedTrip}
        />
      )}
    </MainLayout>
  );
}
