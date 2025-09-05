import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import ExternalBooking from '../../components/ui/ExternalBooking';

export default function BookingPage() {
  const upcomingEvents = [
    {
      id: 'ghana-feb-2024',
      title: 'Ghana Cultural Immersion',
      date: 'February 15-25, 2024',
      location: 'Accra, Kumasi, Cape Coast',
      price: '£1,299',
      originalPrice: '£1,499',
      spotsLeft: 3,
      image: '/images/events/ghana-2024.jpg',
      description: 'Experience the rich culture, history, and vibrant energy of Ghana through authentic local experiences.',
      highlights: [
        'Visit historic slave castles',
        'Traditional Kente weaving workshop',
        'Local cooking classes',
        'Drumming and dance sessions',
        'Community service projects'
      ],
      includes: [
        'Accommodation (9 nights)',
        'Daily breakfast',
        'Ground transportation',
        'Professional guide',
        'All activities listed'
      ],
      difficulty: 'Easy',
      groupSize: '12-16 people',
      bookingUrl: 'https://book.2206experiences.com/ghana-feb-2024',
      status: 'filling-fast'
    },
    {
      id: 'morocco-march-2024',
      title: 'Morocco Desert Adventure',
      date: 'March 10-20, 2024',
      location: 'Marrakech, Sahara, Fes',
      price: '£1,599',
      originalPrice: '£1,799',
      spotsLeft: 7,
      image: '/images/events/morocco-2024.jpg',
      description: 'Journey through imperial cities, sleep under desert stars, and explore ancient medinas.',
      highlights: [
        'Sahara Desert camping',
        'Camel trekking experience',
        'Traditional hammam spa',
        'Berber village visits',
        'Moroccan cooking workshops'
      ],
      includes: [
        'Accommodation (10 nights)',
        'All meals included',
        'Private transport',
        'Desert camping gear',
        'Guided tours'
      ],
      difficulty: 'Moderate',
      groupSize: '8-12 people',
      bookingUrl: 'https://book.2206experiences.com/morocco-march-2024',
      status: 'available'
    },
    {
      id: 'egypt-april-2024',
      title: 'Ancient Egypt Explorer',
      date: 'April 5-15, 2024',
      location: 'Cairo, Luxor, Aswan',
      price: '£1,799',
      originalPrice: '£1,999',
      spotsLeft: 12,
      image: '/images/events/egypt-2024.jpg',
      description: 'Discover the wonders of ancient Egypt with exclusive access to archaeological sites.',
      highlights: [
        'Private Pyramid tours',
        'Nile River cruise',
        'Valley of the Kings',
        'Egyptian Museum visit',
        'Traditional felucca sailing'
      ],
      includes: [
        'Luxury accommodation',
        'All meals & drinks',
        'Domestic flights',
        'Expert Egyptologist guide',
        'Entrance fees included'
      ],
      difficulty: 'Easy',
      groupSize: '10-14 people',
      bookingUrl: 'https://book.2206experiences.com/egypt-april-2024',
      status: 'early-bird'
    }
  ];

  const localEvents = [
    {
      id: 'london-networking-jan',
      title: 'London Monthly Networking',
      date: 'January 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Shoreditch, London',
      price: '£15',
      capacity: 50,
      registered: 42,
      type: 'networking',
      bookingUrl: 'https://eventbrite.com/e/2206-london-networking-jan'
    },
    {
      id: 'travel-planning-workshop',
      title: 'Travel Planning Workshop',
      date: 'February 3, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Birmingham',
      price: '£45',
      capacity: 25,
      registered: 18,
      type: 'workshop',
      bookingUrl: 'https://eventbrite.com/e/travel-planning-workshop-feb'
    },
    {
      id: 'cultural-evening-manchester',
      title: 'African Cultural Evening',
      date: 'February 17, 2024',
      time: '7:00 PM - 11:00 PM',
      location: 'Manchester',
      price: '£25',
      capacity: 100,
      registered: 73,
      type: 'cultural',
      bookingUrl: 'https://eventbrite.com/e/african-cultural-evening-manchester'
    }
  ];

  const paymentOptions = [
    {
      method: 'Full Payment',
      description: 'Pay in full and save 5% on total trip cost',
      discount: '5% discount',
      icon: '💳'
    },
    {
      method: 'Installment Plan',
      description: 'Pay in 3 monthly installments (£50 deposit required)',
      discount: 'No extra fees',
      icon: '📅'
    },
    {
      method: 'Group Booking',
      description: 'Book 4+ people together and save 10% per person',
      discount: '10% per person',
      icon: '👥'
    },
    {
      method: 'Student/Concession',
      description: 'Valid student ID or proof of concession required',
      discount: '15% discount',
      icon: '🎓'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
        <div className="container-2206 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
              </svg>
            </div>
            <Typography variant="h1" color="primary" className="mb-6 text-center">
              Book Your Adventure
            </Typography>
            <Typography variant="body" className="text-xl mb-8 text-center max-w-3xl mx-auto text-gray-600">
              Reserve your spot on our upcoming international trips or join local events and workshops. Small groups, authentic experiences, and memories that last a lifetime.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="#trips">
                View Trips
              </Button>
              <Button variant="outline" size="lg" href="#local-events">
                Local Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white">
        <div className="container-2206">
          <div className="grid md:grid-cols-4 gap-8">
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Annual Trips</div>
            </Card>
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">450+</div>
              <div className="text-gray-600 font-medium">Happy Travelers</div>
            </Card>
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600 font-medium">Countries Visited</div>
            </Card>
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming International Trips */}
      <section id="trips" className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Upcoming International Trips</Typography>
            <p className="text-lg text-gray-600">
              Join our small group adventures to explore Africa&apos;s most incredible destinations
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-purple-100 to-pink-100 relative">
                      {event.status === 'filling-fast' && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            🔥 Filling Fast
                          </span>
                        </div>
                      )}
                      {event.status === 'early-bird' && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            🐦 Early Bird
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center text-8xl">
                        🌍
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <span>📅 {event.date}</span>
                          <span>📍 {event.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>🎯 {event.difficulty}</span>
                          <span>👥 {event.groupSize}</span>
                          <span className={`font-medium ${event.spotsLeft <= 5 ? 'text-red-600' : 'text-green-600'}`}>
                            {event.spotsLeft} spots left
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{event.price}</div>
                        <div className="text-sm text-gray-500 line-through">{event.originalPrice}</div>
                        <div className="text-sm text-green-600 font-medium">
                          Save £{parseInt(event.originalPrice.slice(1)) - parseInt(event.price.slice(1))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trip Highlights:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {event.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Includes */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trip Includes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {event.includes.map((include, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{include}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Booking Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={event.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors text-center"
                      >
                        Book Now - {event.price}
                      </a>
                      <Button
                        href={`/trips/${event.id}`}
                        className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Events */}
      <section id="local-events" className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Local Events & Workshops</Typography>
            <p className="text-lg text-gray-600">
              Connect with the community through regular meetups and skill-building workshops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {localEvents.map((event) => (
              <Card key={event.id} className="p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  event.type === 'networking' ? 'bg-blue-100 text-blue-700' :
                  event.type === 'workshop' ? 'bg-green-100 text-green-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {event.type === 'networking' ? '🤝' :
                   event.type === 'workshop' ? '🛠️' : '🎭'} {event.type}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Registered:</span>
                    <span>{event.registered}/{event.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-purple-600">{event.price}</span>
                  <span className={`text-sm font-medium ${
                    event.registered / event.capacity > 0.8 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {event.capacity - event.registered} spots left
                  </span>
                </div>

                <a
                  href={event.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors text-center inline-block"
                >
                  Register Now
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Booking Platforms */}
      <section className="section-padding">
        <div className="container-2206">
          <ExternalBooking showComparison={true} />
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="mb-12 text-center">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Flexible Payment Options</Typography>
            <p className="text-lg text-gray-600">
              We offer multiple payment methods to make your dream trip affordable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentOptions.map((option) => (
              <Card key={option.method} className="p-6 text-center">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{option.method}</h3>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {option.discount}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">How Booking Works</Typography>
            <p className="text-lg text-gray-600">
              Simple 4-step process to secure your adventure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Choose Your Trip',
                description: 'Browse our upcoming adventures and select your preferred dates',
                icon: '🌍'
              },
              {
                step: 2,
                title: 'Secure Your Spot',
                description: 'Pay deposit or full amount through our secure booking system',
                icon: '💳'
              },
              {
                step: 3,
                title: 'Trip Preparation',
                description: 'Receive detailed itinerary, packing lists, and pre-trip support',
                icon: '📋'
              },
              {
                step: 4,
                title: 'Experience Adventure',
                description: 'Join your group and create unforgettable memories',
                icon: '✈️'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact & Support */}
      <section className="section-padding bg-purple-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Booking?</h2>
              <p className="text-gray-600">
                Our team is here to assist you every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-2">+44 (0) 20 7946 0958</p>
                <p className="text-gray-500 text-xs">Mon-Fri, 9am-6pm GMT</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-2">+44 7856 123 456</p>
                <p className="text-gray-500 text-xs">Quick responses 24/7</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-2">bookings@2206experiences.com</p>
                <p className="text-gray-500 text-xs">Response within 4 hours</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">📋 Booking Policy</h4>
                <p className="text-yellow-700 text-sm">
                  Deposits are fully refundable up to 60 days before departure. 
                  Flexible rebooking options available for all trips. 
                  Travel insurance recommended and available at booking.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of travelers who have discovered the magic of Africa with 2206 Experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/trips"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Browse All Trips
              </Button>
              <Button 
                href="/consultations"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Get Travel Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
