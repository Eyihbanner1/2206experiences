'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import MainLayout from '../../../components/layouts/MainLayout';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import BookingModal from '../../../components/ui/BookingModal';

interface TripData {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  fullDescription: string;
  included: string[];
  notIncluded: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
  }>;
  groupSize: string;
  difficulty: string;
  bestTime: string;
}

// Mock data - in real app this would come from API/database
const tripsData: { [key: string]: TripData } = {
  'lake-district-adventure': {
    id: 1,
    title: "3-Day Lake District Adventure",
    location: "England, UK",
    duration: "3 days, 2 nights",
    price: "from £299",
    image: "/images/lake-district.jpg",
    highlights: ["Scenic hiking trails", "Traditional pub dining", "Lakeside accommodation", "Photography workshops"],
    description: "Discover the breathtaking beauty of England's Lake District with guided hikes, local cuisine, and stunning scenery.",
    fullDescription: "Experience the magic of England's Lake District on this carefully curated 3-day adventure designed for African explorers. This trip combines breathtaking natural beauty with authentic cultural experiences, offering the perfect blend of outdoor adventure and relaxation. You'll explore iconic landscapes that have inspired poets and writers for centuries, while connecting with fellow travelers in a supportive, community-focused environment.",
    included: [
      "2 nights accommodation in lakeside guesthouse",
      "All guided hiking tours with professional guide",
      "Traditional pub dinner on Day 1",
      "Photography workshop with local photographer", 
      "All transportation during the trip",
      "Welcome pack with maps and local information",
      "24/7 support during trip"
    ],
    notIncluded: [
      "Travel to/from Lake District",
      "Personal travel insurance",
      "Lunches and additional meals",
      "Personal equipment rental",
      "Souvenirs and personal purchases"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive in the Lake District and settle into your lakeside accommodation.",
        activities: [
          "Check-in to guesthouse with lake views",
          "Welcome meeting with group and guide",
          "Gentle afternoon walk around Windermere",
          "Traditional pub dinner with local specialties"
        ]
      },
      {
        day: 2,
        title: "Mountain Adventure",
        description: "Full day exploring the fells with guided hiking and photography.",
        activities: [
          "Early morning hike up Helvellyn",
          "Photography workshop at summit",
          "Packed lunch with panoramic views", 
          "Afternoon exploration of Grasmere village",
          "Visit to Dove Cottage (Wordsworth's home)"
        ]
      },
      {
        day: 3,
        title: "Lakes & Departure",
        description: "Final morning by the lakes before departure.",
        activities: [
          "Sunrise photography session",
          "Boat trip on Ullswater",
          "Visit local farmers market",
          "Farewell lunch and group photos",
          "Departure back to starting point"
        ]
      }
    ],
    groupSize: "6-12 people",
    difficulty: "Moderate",
    bestTime: "April - October"
  }
};

export default function TripDetailPage() {
  const params = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tripSlug = params?.slug as string || '';
  const trip = tripsData[tripSlug];

  if (!trip) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Trip Not Found</h1>
            <p className="text-gray-600 mb-6">The trip you&apos;re looking for doesn&apos;t exist.</p>
            <Button href="/trips" variant="primary">
              Browse All Trips
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{trip.title}</h1>
          <p className="text-xl mb-6">📍 {trip.location} • ⏱️ {trip.duration}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book This Trip - {trip.price}
            </Button>
            <Button variant="outline-white" size="lg">
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'itinerary', label: 'Itinerary' },
                  { id: 'included', label: 'What\'s Included' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Trip</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{trip.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Trip Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {trip.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Itinerary</h2>
                {trip.itinerary.map((day) => (
                  <Card key={day.day} className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'included' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                  <Card className="p-6">
                    <div className="space-y-3">
                      {trip.included.map((item, index) => (
                        <div key={index} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Not Included</h3>
                  <Card className="p-6">
                    <div className="space-y-3">
                      {trip.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start text-gray-700">
                          <span className="text-red-500 mr-3 mt-1">✗</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Booking Card */}
              <Card className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{trip.price}</div>
                  <div className="text-sm text-gray-600">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{trip.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium">{trip.groupSize}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-medium">{trip.difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Best Time</span>
                    <span className="font-medium">{trip.bestTime}</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  className="w-full mb-3"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book This Trip
                </Button>
                <Button variant="outline" className="w-full">
                  Ask a Question
                </Button>
              </Card>

              {/* Need Help Card */}
              <Card className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help Planning?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Our travel experts are here to help you plan the perfect adventure.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Our Team
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        trip={trip}
      />
    </MainLayout>
  );
}
