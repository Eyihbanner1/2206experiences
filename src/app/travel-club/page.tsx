import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function TravelClubPage() {
  return (
    <MainLayout>
      {/* Community Stats */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg p-8 text-center text-white">
        <Typography variant="h3" color="white" className="mb-6">
          Our Growing Community
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Typography variant="display-xs" color="white" weight="bold" className="mb-2">
              2,500+
            </Typography>
            <Typography variant="body-sm" color="white" className="opacity-90">
              Active Members
            </Typography>
          </div>
          <div>
            <Typography variant="display-xs" color="white" weight="bold" className="mb-2">
              54
            </Typography>
            <Typography variant="body-sm" color="white" className="opacity-90">
              Countries Represented
            </Typography>
          </div>
          <div>
            <Typography variant="display-xs" color="white" weight="bold" className="mb-2">
              180+
            </Typography>
            <Typography variant="body-sm" color="white" className="opacity-90">
              Destinations Explored
            </Typography>
          </div>
          <div>
            <Typography variant="display-xs" color="white" weight="bold" className="mb-2">
              850+
            </Typography>
            <Typography variant="body-sm" color="white" className="opacity-90">
              Travel Stories Shared
            </Typography>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mt-16">
        <Typography variant="h2" color="primary" gradient className="text-center mb-12">
          Why Join Our Travel Club?
        </Typography>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card variant="elevated" padding="normal" hover>
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl text-white">📚</span>
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
            <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl text-white">🤝</span>
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
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl text-white">💰</span>
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
      </section>

      {/* Testimonials */}
      <section className="mt-16 py-12 bg-neutral-50 rounded-lg">
        <Typography variant="h2" color="primary" gradient className="text-center mb-12">
          What Our Members Say
        </Typography>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="elevated" padding="normal" className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">👩🏾</span>
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

          <Card variant="elevated" padding="normal" className="text-center">
            <div className="w-16 h-16 bg-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">👨🏿</span>
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

          <Card variant="elevated" padding="normal" className="text-center">
            <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">👩🏽</span>
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
      </section>

      {/* How to Join */}
      <section id="join" className="mt-16">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h2" color="primary" gradient className="text-center mb-8">
            How to Join
          </Typography>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <Typography variant="h4" className="mb-2">
                Sign Up
              </Typography>
              <Typography variant="body" color="neutral">
                Create your free account and tell us about your travel interests
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <Typography variant="h4" className="mb-2">
                Connect
              </Typography>
              <Typography variant="body" color="neutral">
                Join our WhatsApp groups and connect with travelers in your city
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
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
      <section className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-12 text-white">
        <Typography variant="h2" color="white" className="mb-6">
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
      </section>
    </MainLayout>
  );
}
