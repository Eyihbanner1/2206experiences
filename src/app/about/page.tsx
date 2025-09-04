import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" color="primary" gradient className="mb-6">
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

      {/* Mission & Vision Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="elevated" padding="loose" hover>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <Typography variant="h3" color="primary">Our Mission</Typography>
              </div>
              <Typography variant="body-lg" color="neutral" className="leading-relaxed">
                To connect African explorers and travelers worldwide with curated adventures, vibrant events, 
                and a supportive community that celebrates the richness of African culture while fostering 
                meaningful connections and unforgettable experiences.
              </Typography>
            </Card>
            
            <Card variant="elevated" padding="loose" hover>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌟</span>
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
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Authentic Community
              </Typography>
              <Typography variant="body" color="muted">
                We believe in building genuine connections and fostering a supportive community where 
                every traveler feels welcome and valued.
              </Typography>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🌍</span>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Cultural Celebration
              </Typography>
              <Typography variant="body" color="muted">
                Every experience we curate celebrates the rich heritage, traditions, and stories that 
                make each destination unique and special.
              </Typography>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">✨</span>
              </div>
              <Typography variant="h4" color="primary" className="mb-4">
                Transformative Experiences
              </Typography>
              <Typography variant="body" color="muted">
                We curate adventures that don&apos;t just show you places, but transform perspectives 
                and create lasting memories.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Typography variant="h2" color="white" className="mb-6">
            Meet Our Team
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-3xl mx-auto opacity-90">
            Our team is made up of passionate travelers, experienced event organizers, cultural enthusiasts, 
            and community builders who are dedicated to creating unforgettable experiences for our members.
          </Typography>
          <Typography variant="body-lg" color="white" className="mb-8 opacity-80">
            From Lagos to Cape Town, Nairobi to Marrakech, our diverse team brings together decades of 
            travel expertise, local knowledge, and a shared commitment to showcasing the very best of 
            African hospitality and adventure.
          </Typography>
          <Button href="/contact" variant="white" size="lg">
            Get in Touch with Our Team
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Typography variant="h2" color="primary" gradient className="mb-6">
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
