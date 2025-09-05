import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function TravelClubPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-20">
        <div className="container-2206 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <Typography variant="h1" color="white" className="mb-6 max-w-4xl mx-auto text-center">
            Join Africa's Most Vibrant Travel Community
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-3xl mx-auto opacity-90">
            Connect with 2,500+ African explorers, access free travel resources, and turn your travel dreams into reality. It's completely free to join!
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#join" variant="white" size="lg">
              Join Travel Club Now
            </Button>
            <Button href="#benefits" variant="outline-white" size="lg">
              Explore Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Our Growing Community
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                2,500+
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Active Members
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                54
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Countries Represented
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                180+
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Destinations Explored
              </Typography>
            </Card>
            <Card variant="glass" padding="loose" className="text-center">
              <Typography variant="display-xs" color="primary" weight="bold" className="mb-2">
                850+
              </Typography>
              <Typography variant="body-sm" color="neutral" className="opacity-90">
                Travel Stories Shared
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-br from-purple-50 to-lilac-50">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Why Join Our Travel Club?
          </Typography>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card variant="elevated" padding="normal" hover>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Free Resources Hub
              </Typography>
              <ul className="space-y-2">
                <Typography variant="body" color="neutral" as="li">• Comprehensive visa guides for African passports</Typography>
                <Typography variant="body" color="neutral" as="li">• Destination-specific travel checklists</Typography>
                <Typography variant="body" color="neutral" as="li">• Budget planning templates and tools</Typography>
                <Typography variant="body" color="neutral" as="li">• Safety tips and emergency contacts</Typography>
                <Typography variant="body" color="neutral" as="li">• Currency exchange and money guides</Typography>
                <Typography variant="body" color="neutral" as="li">• Cultural etiquette and language basics</Typography>
              </ul>
            </Card>

            <Card variant="elevated" padding="normal" hover>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Community Connection
              </Typography>
              <ul className="space-y-2">
                <Typography variant="body" color="neutral" as="li">• Connect with travelers from across Africa</Typography>
                <Typography variant="body" color="neutral" as="li">• Find travel companions for your next adventure</Typography>
                <Typography variant="body" color="neutral" as="li">• Join city-specific WhatsApp groups</Typography>
                <Typography variant="body" color="neutral" as="li">• Attend monthly virtual meetups</Typography>
                <Typography variant="body" color="neutral" as="li">• Access to exclusive member events</Typography>
                <Typography variant="body" color="neutral" as="li">• Mentorship from experienced travelers</Typography>
              </ul>
            </Card>

            <Card variant="elevated" padding="normal" hover>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Exclusive Perks
              </Typography>
              <ul className="space-y-2">
                <Typography variant="body" color="neutral" as="li">• Early access to trip announcements</Typography>
                <Typography variant="body" color="neutral" as="li">• Member-only discount codes</Typography>
                <Typography variant="body" color="neutral" as="li">• Free travel planning consultations</Typography>
                <Typography variant="body" color="neutral" as="li">• Priority booking for popular trips</Typography>
                <Typography variant="body" color="neutral" as="li">• Access to group trip planning tools</Typography>
                <Typography variant="body" color="neutral" as="li">• Partnership discounts with local businesses</Typography>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-2206">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            What Our Members Say
          </Typography>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" padding="normal" centered>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <blockquote className="mb-4">
                <Typography variant="body" color="neutral" className="italic">
                  "The Travel Club connected me with amazing people and helped me plan my first solo trip to Ghana! 
                  The visa guide alone saved me hours of research."
                </Typography>
              </blockquote>
              <Typography variant="body" weight="semibold" color="primary" as="cite">
                Sarah M., London
              </Typography>
            </Card>

            <Card variant="elevated" padding="normal" centered>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <blockquote className="mb-4">
                <Typography variant="body" color="neutral" className="italic">
                  "I found my travel buddy through the Lagos WhatsApp group, and we've explored 5 countries together! 
                  This community is incredible."
                </Typography>
              </blockquote>
              <Typography variant="body" weight="semibold" color="primary" as="cite">
                Kwame A., Lagos
              </Typography>
            </Card>

            <Card variant="elevated" padding="normal" centered>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <blockquote className="mb-4">
                <Typography variant="body" color="neutral" className="italic">
                  "The budget planning templates helped me save for my dream trip to Morocco. 
                  The community support made all the difference!"
                </Typography>
              </blockquote>
              <Typography variant="body" weight="semibold" color="primary" as="cite">
                Amara T., Nairobi
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section id="join" className="py-16 bg-gradient-to-br from-lilac-50 to-purple-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Typography variant="h2" color="primary" gradient className="text-center mb-8">
            How to Join
          </Typography>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <Typography variant="h4" className="mb-2">
                Sign Up
              </Typography>
              <Typography variant="body" color="neutral">
                Create your free account and tell us about your travel interests
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <Typography variant="h4" className="mb-2">
                Connect
              </Typography>
              <Typography variant="body" color="neutral">
                Join our WhatsApp groups and connect with travelers in your city
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <Typography variant="h4" className="mb-2">
                Explore
              </Typography>
              <Typography variant="body" color="neutral">
                Access resources, plan trips, and start your next adventure!
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container-2206">
          <Typography variant="h2" color="white" className="mb-6 text-center">
            Ready to Join 2,500+ African Explorers?
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-3xl mx-auto opacity-90">
            It's completely free and you'll get instant access to our resource library, 
            community groups, and exclusive member perks. Start your journey today!
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="white" size="lg">
              Join Travel Club Now
            </Button>
            <Button href="/trips" variant="outline-white" size="lg">
              Browse Adventures
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
