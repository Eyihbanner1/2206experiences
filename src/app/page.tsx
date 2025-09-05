import MainLayout from '../components/layouts/MainLayout';
import HeroSlider from '../components/layouts/HeroSlider';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Typography from '../components/ui/Typography';
import Newsletter from '../components/ui/Newsletter';
import { HERO_IMAGES } from '../data/heroImages';

export default function Home() {
  // Define slide data with one CTA per slide
  const heroSlides = [
    {
      id: 'adventures',
      title: 'Curated Adventures Await',
      subtitle: 'Discover handpicked destinations and authentic experiences across Africa and beyond. Join fellow explorers on journeys that create lasting memories.',
      ctaText: 'Explore Adventures',
      ctaLink: '/trips',
      ctaVariant: 'primary' as const,
      backgroundImage: HERO_IMAGES.trips
    },
    {
      id: 'events',
      title: 'Vibrant Community Events',
      subtitle: 'From cultural festivals to networking meetups, connect with like-minded travelers at exciting events across the UK and internationally.',
      ctaText: 'Discover Events',
      ctaLink: '/events',
      ctaVariant: 'secondary' as const,
      backgroundImage: HERO_IMAGES.events
    },
    {
      id: 'community',
      title: 'Join Our Travel Community',
      subtitle: 'Become part of a thriving network of African explorers. Share experiences, find travel companions, and access exclusive member benefits.',
      ctaText: 'Join Community',
      ctaLink: '/travel-club',
      ctaVariant: 'accent' as const,
      backgroundImage: HERO_IMAGES.travelClub
    }
  ];

  return (
    <MainLayout>
      {/* Enhanced Hero Slider with individual CTAs */}
      <HeroSlider 
        slides={heroSlides}
        autoplay={true}
        autoplayDelay={3500}
        overlayOpacity={0.3}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
              Why Choose 2206Experiences?
            </Typography>
            <Typography variant="body-xl" color="muted" className="max-w-3xl mx-auto">
              We&apos;re more than just a travel platform - we&apos;re your gateway to authentic African adventures 
              and a supportive community of explorers.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🗺️</span>
              </div>
              <Typography variant="h4" color="primary" align="center" className="mb-4">
                Curated Adventures
              </Typography>
              <Typography variant="body" color="muted" align="center">
                Handpicked destinations and experiences that showcase the beauty and culture of Africa and beyond.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎉</span>
              </div>
              <Typography variant="h4" color="primary" align="center" className="mb-4">
                Vibrant Events
              </Typography>
              <Typography variant="body" color="muted" align="center">
                From cultural festivals to networking meetups, we bring people together through meaningful events.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <Typography variant="h4" color="primary" align="center" className="mb-4">
                Thriving Community
              </Typography>
              <Typography variant="body" color="muted" align="center">
                Join a network of like-minded travelers, share experiences, and make lifelong connections.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4">
          <Newsletter 
            title="Join 15,000+ Travelers"
            description="Get weekly travel inspiration, exclusive trip discounts, and insider cultural insights delivered straight to your inbox."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Typography variant="h2" color="white" className="mb-6 text-center">
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of African explorers who have discovered their next adventure with us.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/travel-club" variant="white" size="lg">
              Join Travel Club
            </Button>
            <Button href="/contact" variant="outline-white" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
