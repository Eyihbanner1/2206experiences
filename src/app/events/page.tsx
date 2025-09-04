'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import EventBooking from '@/components/ui/EventBooking';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  description: string;
  category: string;
  capacity: string;
  image: string;
  highlights: string[];
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const openBookingModal = (event: Event) => {
    setSelectedEvent(event);
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setSelectedEvent(null);
    setShowBookingModal(false);
  };
  const upcomingEvents = [
    {
      id: 1,
      title: "London Boat Cruise Experience",
      date: "Saturday, September 14, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Thames River, London",
      price: "£45",
      category: "Social",
      capacity: "50 people",
      image: "/images/london-boat-cruise.jpg",
      description: "Sail through London's iconic landmarks while networking with fellow African explorers. Includes welcome drink and light refreshments.",
      highlights: ["Thames River cruise", "Networking opportunities", "Welcome drink", "London landmarks tour", "Professional photography"]
    },
    {
      id: 2,
      title: "Manchester Community Brunch",
      date: "Sunday, September 22, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Northern Quarter, Manchester",
      price: "£35",
      category: "Food & Culture",
      capacity: "30 people",
      image: "/images/manchester-brunch.jpg",
      description: "Authentic African-inspired brunch experience with live music, cultural conversations, and delicious food.",
      highlights: ["African-inspired menu", "Live music", "Cultural discussions", "Food tasting", "Community building"]
    },
    {
      id: 3,
      title: "Bowling & Shooting Adventure",
      date: "Saturday, October 5, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "Entertainment District, Birmingham",
      price: "£40",
      category: "Adventure",
      capacity: "25 people",
      image: "/images/bowling-shooting.jpg",
      description: "Action-packed day combining bowling and clay pigeon shooting with group challenges and prizes.",
      highlights: ["Bowling competition", "Clay pigeon shooting", "Team challenges", "Prizes for winners", "Group activities"]
    },
    {
      id: 4,
      title: "AfroBrunch Lagos Edition",
      date: "Sunday, October 13, 2024",
      time: "12:00 PM - 5:00 PM",
      location: "Victoria Island, Lagos",
      price: "₦25,000",
      category: "Food & Culture",
      capacity: "80 people",
      image: "/images/afrobrunch-lagos.jpg",
      description: "Our signature brunch experience featuring Nigerian cuisine, live Afrobeats, and cultural celebrations.",
      highlights: ["Nigerian cuisine", "Live Afrobeats music", "Cultural performances", "Networking", "Local art showcase"]
    }
  ];

  const pastEvents = [
    {
      title: "African Heritage Festival",
      date: "August 2024",
      attendees: "120+ people",
      image: "/images/heritage-festival.jpg"
    },
    {
      title: "Lagos Food Tour",
      date: "July 2024",
      attendees: "45 people",
      image: "/images/lagos-food-tour.jpg"
    },
    {
      title: "Accra Night Markets",
      date: "June 2024",
      attendees: "35 people",
      image: "/images/accra-markets.jpg"
    }
  ];

  const eventCategories = [
    {
      icon: "🍽️",
      name: "Food & Culture",
      description: "Culinary experiences celebrating African heritage"
    },
    {
      icon: "🎉",
      name: "Social Events",
      description: "Networking and community building experiences"
    },
    {
      icon: "⚡",
      name: "Adventure",
      description: "Action-packed activities and challenges"
    },
    {
      icon: "🎵",
      name: "Entertainment",
      description: "Music, arts, and cultural performances"
    }
  ];

  return (
    <MainLayout>
      <main className="py-16">
        {/* Event Categories */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Event Categories
            </Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
              From cultural brunches to adventure activities - find your perfect experience
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <Card key={index} variant="elevated" padding="normal" hover className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <Typography variant="h4" color="primary" className="mb-2">
                  {category.name}
                </Typography>
                <Typography variant="body" color="neutral">
                  {category.description}
                </Typography>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Upcoming Events
            </Typography>
            <Typography variant="body-lg" color="neutral">
              Book your spot for these exciting experiences
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} variant="elevated" className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-neutral-500 text-sm">
                  {event.image}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                          {event.category}
                        </span>
                        <Typography variant="caption" color="neutral">
                          {event.capacity}
                        </Typography>
                      </div>
                      <Typography variant="h4" color="primary" className="mb-2">
                        {event.title}
                      </Typography>
                    </div>
                    <div className="text-right ml-4">
                      <Typography variant="h3" color="primary" weight="bold">
                        {event.price}
                      </Typography>
                      <Typography variant="caption" color="neutral">per person</Typography>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <Typography variant="body-sm" color="neutral">{event.date}</Typography>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <Typography variant="body-sm" color="neutral">{event.time}</Typography>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <Typography variant="body-sm" color="neutral">{event.location}</Typography>
                    </div>
                  </div>

                  <Typography variant="body" color="neutral" className="mb-4">
                    {event.description}
                  </Typography>

                  <div className="mb-6">
                    <Typography variant="body" weight="semibold" color="primary" className="mb-2">
                      What's Included:
                    </Typography>
                    <div className="grid grid-cols-1 gap-1">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          <Typography variant="body-sm" color="neutral">{highlight}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="primary" 
                      className="flex-1"
                      onClick={() => openBookingModal(event)}
                    >
                      Book Now
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Typography variant="h2" color="primary" gradient className="mb-4">
                Past Event Highlights
              </Typography>
              <Typography variant="body-lg" color="neutral">
                See the amazing experiences we've created together
              </Typography>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} variant="elevated" hover className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-neutral-500 text-sm">
                    {event.image}
                  </div>
                  <div className="p-4 text-center">
                    <Typography variant="h5" color="primary" weight="semibold" className="mb-2">
                      {event.title}
                    </Typography>
                    <Typography variant="body-sm" color="neutral" className="mb-1">
                      {event.date}
                    </Typography>
                    <Typography variant="body-sm" color="primary" weight="medium">
                      {event.attendees}
                    </Typography>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Planning Service */}
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="text-center mb-8">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Custom Event Planning
            </Typography>
            <Typography variant="body-lg" color="neutral" className="mb-6">
              Planning a special celebration? Let us create a bespoke experience for your group, wedding, or corporate event.
            </Typography>
          </div>

          <Card variant="elevated" padding="loose" className="text-center">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <Typography variant="h5" weight="semibold" className="mb-2">Bespoke Planning</Typography>
                <Typography variant="body-sm" color="neutral">Tailored events that match your vision and budget</Typography>
              </div>
              <div>
                <div className="text-3xl mb-3">👥</div>
                <Typography variant="h5" weight="semibold" className="mb-2">Group Events</Typography>
                <Typography variant="body-sm" color="neutral">Corporate retreats, team building, and group celebrations</Typography>
              </div>
              <div>
                <div className="text-3xl mb-3">💒</div>
                <Typography variant="h5" weight="semibold" className="mb-2">Weddings</Typography>
                <Typography variant="body-sm" color="neutral">Cultural wedding planning with authentic touches</Typography>
              </div>
            </div>
            <Button variant="primary">
              Book Consultation
            </Button>
          </Card>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Never Miss an Event
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our newsletter to get early access to event tickets and exclusive discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button variant="primary">
              Subscribe
            </Button>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {showBookingModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Event Booking</h2>
              <button
                onClick={closeBookingModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <EventBooking
                eventId={selectedEvent.id}
                eventTitle={selectedEvent.title}
                eventDate={selectedEvent.date}
                eventPrice={selectedEvent.price}
                capacity={selectedEvent.capacity}
                onBookingComplete={closeBookingModal}
              />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
