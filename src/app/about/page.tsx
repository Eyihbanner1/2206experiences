import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-lilac-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold text-center">
            About 2206 Experiences
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto">
            We&apos;re more than just a travel company – we&apos;re a community of African explorers 
            passionate about creating authentic experiences, meaningful connections, and unforgettable adventures.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/travel-club" variant="white" size="lg">
              Join Our Community
            </Button>
            <Button href="/trips" variant="outline-white" size="lg">
              Explore Adventures
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
            Our Story
          </Typography>
          <div className="prose prose-lg max-w-none">
            <Typography variant="body-lg" color="neutral" className="mb-6 leading-relaxed">
              2206Experiences.com was born from a simple yet powerful belief: that travel has the unique ability to 
              transform lives, build bridges between cultures, and create lasting memories that shape who we are. 
              Founded by a group of passionate African explorers, our platform emerged from countless conversations 
              around campfires, in bustling markets, and during breathtaking sunrises across the continent.
            </Typography>
            <Typography variant="body-lg" color="neutral" className="mb-8 leading-relaxed">
              We realized that while Africa is home to some of the world&apos;s most incredible destinations and 
              experiences, many travelers—especially within the continent—lacked access to curated, authentic 
              adventures that truly celebrated African culture, heritage, and natural beauty. We set out to change that.
            </Typography>
          </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-lilac-500 to-pink-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="white" className="mb-4 text-center">
              Our Impact So Far
            </Typography>
            <Typography variant="body-lg" color="white" className="opacity-90">
              Building a community of adventurous African explorers
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="glass" padding="loose" centered>
              <div className="text-center">
                <Typography variant="h3" color="white" className="text-3xl font-bold mb-2">
                  2,500+
                </Typography>
                <Typography variant="body" color="white" className="opacity-80">
                  Community Members
                </Typography>
              </div>
            </Card>
            
            <Card variant="glass" padding="loose" centered>
              <div className="text-center">
                <Typography variant="h3" color="white" className="text-3xl font-bold mb-2">
                  50+
                </Typography>
                <Typography variant="body" color="white" className="opacity-80">
                  Countries Explored
                </Typography>
              </div>
            </Card>
            
            <Card variant="glass" padding="loose" centered>
              <div className="text-center">
                <Typography variant="h3" color="white" className="text-3xl font-bold mb-2">
                  180+
                </Typography>
                <Typography variant="body" color="white" className="opacity-80">
                  Curated Adventures
                </Typography>
              </div>
            </Card>
            
            <Card variant="glass" padding="loose" centered>
              <div className="text-center">
                <Typography variant="h3" color="white" className="text-3xl font-bold mb-2">
                  95%
                </Typography>
                <Typography variant="body" color="white" className="opacity-80">
                  Satisfaction Rate
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="elevated" padding="loose" hover centered>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <Typography variant="h3" color="primary">Our Mission</Typography>
              </div>
              <Typography variant="body-lg" color="neutral" className="leading-relaxed">
                To connect African explorers and travelers worldwide with curated adventures, vibrant events, 
                and a supportive community that celebrates the richness of African culture while fostering 
                meaningful connections and unforgettable experiences.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover centered>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lilac-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <Typography variant="h3" color="primary">Our Vision</Typography>
              </div>
              <Typography variant="body-lg" color="neutral" className="leading-relaxed">
                To become the premier platform for authentic African travel experiences, building the largest 
                community of African explorers who inspire each other to discover the beauty, diversity, 
                and wonder that our continent and the world have to offer.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Typography variant="h2" color="primary" gradient className="text-center mb-12">
            Our Values
          </Typography>
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-lilac-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Authentic Community
              </Typography>
              <Typography variant="body" color="neutral">
                We believe in building genuine connections and fostering a supportive community where 
                every traveler feels welcome and valued.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-20 h-20 bg-gradient-to-br from-lilac-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Cultural Celebration
              </Typography>
              <Typography variant="body" color="neutral">
                Every experience we curate celebrates the rich heritage, traditions, and stories that 
                make each destination unique and special.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover centered>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Transformative Experiences
              </Typography>
              <Typography variant="body" color="neutral">
                We curate adventures that don&apos;t just show you places, but transform perspectives 
                and create lasting memories.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-lilac-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <Typography variant="h2" color="white" className="mb-6 text-center">
              Meet Our Team
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="glass" padding="loose" centered>
              <Typography variant="body-xl" color="white" className="mb-6 opacity-90">
                Our team is made up of passionate travelers, experienced event organizers, cultural enthusiasts, 
                and community builders who are dedicated to creating unforgettable experiences for our members.
              </Typography>
            </Card>
            
            <Card variant="glass" padding="loose" centered>
              <Typography variant="body-xl" color="white" className="mb-6 opacity-90">
                From Lagos to Cape Town, Nairobi to Marrakech, our diverse team brings together decades of 
                travel expertise, local knowledge, and a shared commitment to showcasing the very best of 
                African hospitality and adventure.
              </Typography>
            </Card>
          </div>
          
          <div className="text-center">
            <Button href="/contact" variant="white" size="lg" className="shadow-lg">
              Get in Touch with Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
            Ready to Join Our Community?
          </Typography>
          <Typography variant="body-xl" color="muted" className="mb-8">
            Become part of a growing network of African explorers and start your next adventure today.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/travel-club" variant="primary" size="lg">
              Join Travel Club
            </Button>
            <Button href="/trips" variant="secondary" size="lg">
              Explore Adventures
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
