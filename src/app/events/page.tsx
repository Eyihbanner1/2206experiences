import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function EventsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-20">
        <div className="container-2206 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0V9a4 4 0 118 0z" />
            </svg>
          </div>
          <Typography variant="h1" color="white" className="mb-6 max-w-4xl mx-auto text-center">
            Unforgettable Events & Experiences
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-3xl mx-auto opacity-90">
            Join our vibrant community for cultural celebrations, networking events, and unique experiences. 
            From boat cruises to food festivals - create memories that last a lifetime.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#upcoming" variant="white" size="lg">
              Browse Events
            </Button>
            <Button href="#planning" variant="outline-white" size="lg">
              Plan Custom Event
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Our Event Impact
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                50+
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Events This Year
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                2,500+
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Happy Attendees
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                12
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Cities Covered
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                95%
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Satisfaction Rate
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lilac-50">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Event Categories
          </Typography>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card variant="elevated" padding="normal" hover centered>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Social Events
              </Typography>
              <Typography variant="body" color="neutral" align="center">
                Networking mixers, community meetups, and social gatherings for African professionals and travelers.
              </Typography>
            </Card>

            <Card variant="elevated" padding="normal" hover centered>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8H4a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Food & Culture
              </Typography>
              <Typography variant="body" color="neutral" align="center">
                African food festivals, cultural celebrations, and culinary experiences showcasing our rich heritage.
              </Typography>
            </Card>

            <Card variant="elevated" padding="normal" hover centered>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Entertainment
              </Typography>
              <Typography variant="body" color="neutral" align="center">
                Concerts, parties, boat cruises, and fun activities that bring our community together for good times.
              </Typography>
            </Card>

            <Card variant="elevated" padding="normal" hover centered>
              <div className="w-12 h-12 bg-gradient-to-br from-lilac-500 to-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Professional
              </Typography>
              <Typography variant="body" color="neutral" align="center">
                Business networking events, career development workshops, and professional growth opportunities.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 bg-white">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Upcoming Events
          </Typography>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="elevated" padding="normal" hover>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Social</span>
                <Typography variant="body" weight="semibold" color="primary">£45</Typography>
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                London Boat Cruise Experience
              </Typography>
              <Typography variant="body-sm" color="neutral" className="mb-4">
                Join us for an unforgettable boat cruise along the Thames River with stunning views, networking, and refreshments.
              </Typography>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0V9a4 4 0 118 0z" />
                  </svg>
                  <Typography variant="body-sm">Saturday, September 14, 2024</Typography>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <Typography variant="body-sm">Thames River, London</Typography>
                </div>
              </div>
              <Button variant="primary" className="w-full">Book Now</Button>
            </Card>

            <Card variant="elevated" padding="normal" hover>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v2a1 1 0 01-1 1h-1v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8H4a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Food & Culture</span>
                <Typography variant="body" weight="semibold" color="primary">£35</Typography>
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Manchester Community Brunch
              </Typography>
              <Typography variant="body-sm" color="neutral" className="mb-4">
                Authentic African-inspired brunch with live music, cultural conversations, and delicious food in Manchester.
              </Typography>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0V9a4 4 0 118 0z" />
                  </svg>
                  <Typography variant="body-sm">Sunday, September 22, 2024</Typography>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <Typography variant="body-sm">Northern Quarter, Manchester</Typography>
                </div>
              </div>
              <Button variant="primary" className="w-full">Book Now</Button>
            </Card>

            <Card variant="elevated" padding="normal" hover>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Entertainment</span>
                <Typography variant="body" weight="semibold" color="primary">£40</Typography>
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Bowling & Shooting Adventure
              </Typography>
              <Typography variant="body-sm" color="neutral" className="mb-4">
                Fun-filled evening combining bowling and shooting activities, perfect for team building and friendly competition.
              </Typography>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0V9a4 4 0 118 0z" />
                  </svg>
                  <Typography variant="body-sm">Friday, September 27, 2024</Typography>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <Typography variant="body-sm">Birmingham Entertainment Complex</Typography>
                </div>
              </div>
              <Button variant="primary" className="w-full">Book Now</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Event Planning */}
      <section id="planning" className="py-16 bg-gradient-to-br from-lilac-50 to-purple-50">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" color="primary" gradient className="text-center mb-8">
              Custom Event Planning
            </Typography>
            <Card variant="elevated" padding="loose" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <Typography variant="h3" color="primary" className="mb-4 text-center">
                Have a Special Event in Mind?
              </Typography>
              <Typography variant="body-lg" color="neutral" className="mb-6 max-w-2xl mx-auto">
                We specialize in creating unforgettable experiences for corporate events, weddings, birthdays, 
                cultural celebrations, and community gatherings. Let us bring your vision to life!
              </Typography>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Typography variant="h4" color="primary" className="mb-2">Corporate Events</Typography>
                  <Typography variant="body" color="neutral">Team building, conferences, product launches</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h4" color="primary" className="mb-2">Cultural Celebrations</Typography>
                  <Typography variant="body" color="neutral">Weddings, birthdays, anniversary parties</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h4" color="primary" className="mb-2">Community Events</Typography>
                  <Typography variant="body" color="neutral">Festivals, fundraisers, networking mixers</Typography>
                </div>
              </div>
              <Button href="/consultations" variant="primary" size="lg">
                Plan Your Event
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container-2206 text-center">
          <Typography variant="h2" color="white" className="mb-6 text-center">
            Ready to Join Our Next Event?
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-3xl mx-auto opacity-90">
            Don't miss out on amazing experiences and opportunities to connect with our vibrant community. 
            Browse upcoming events or plan your own celebration.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#upcoming" variant="white" size="lg">
              Browse All Events
            </Button>
            <Button href="/travel-club" variant="outline-white" size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
