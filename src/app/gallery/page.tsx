import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import { SocialFeed } from '../../components/ui/SocialEmbed';

export default function GalleryPage() {
  // Featured gallery items
  const featuredGallery = [
    {
      id: 1,
      type: 'video',
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Lake District Adventure',
      description: 'Breathtaking moments from our 3-day Lake District hiking experience',
      location: 'Lake District, UK',
      date: '2024-08-15',
      views: 1540,
      likes: 128
    },
    {
      id: 2,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Santorini Wellness Retreat',
      description: 'Peaceful moments and stunning sunsets from our women-only Santorini retreat',
      location: 'Santorini, Greece',
      date: '2024-07-22',
      views: 2340,
      likes: 245
    },
    {
      id: 3,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Albania Hidden Gems',
      description: 'Exploring pristine beaches and mountain villages in Albania',
      location: 'Albanian Riviera',
      date: '2024-06-18',
      views: 1890,
      likes: 156
    },
    {
      id: 4,
      type: 'video',
      url: 'https://example.com/video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'London Boat Cruise',
      description: 'Highlights from our Thames boat cruise with networking and city views',
      location: 'London, UK',
      date: '2024-05-30',
      views: 980,
      likes: 89
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All', icon: '🎯', count: 156 },
    { id: 'trips', name: 'Multi-day Trips', icon: '✈️', count: 45 },
    { id: 'events', name: 'Events', icon: '🎉', count: 38 },
    { id: 'community', name: 'Community', icon: '👥', count: 42 },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: '🎬', count: 31 }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-lilac-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold text-center">
            Visual Gallery
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto text-center">
            Explore our collection of photos, videos, and community moments from adventures across Africa and beyond. 
            Every image tells a story of connection, discovery, and unforgettable experiences.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/trips" variant="white" size="lg">
              Join Next Adventure
            </Button>
            <Button href="/travel-club" variant="outline-white" size="lg">
              Share Your Story
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-white bg-opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white bg-opacity-35 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                15,000+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Photos Shared
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                3,200+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Contributors
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                250K+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Total Likes
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                45
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Countries
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
              Browse by Category
            </Typography>
            <Typography variant="body-lg" color="muted" className="max-w-2xl mx-auto text-center">
              Filter through our extensive collection by experience type, location, or community moments.
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {categories.map((category) => (
              <Card key={category.id} variant="elevated" hover className="text-center p-6 cursor-pointer group">
                <div className="text-3xl mb-3">{category.icon}</div>
                <Typography variant="h5" color="primary" className="mb-2 text-center">
                  {category.name}
                </Typography>
                <Typography variant="body-sm" color="muted" className="text-center">
                  {category.count} items
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-6 text-center">
              Featured Moments
            </Typography>
            <Typography variant="body-lg" color="muted" className="max-w-2xl mx-auto text-center">
              Hand-picked highlights from our recent adventures and community events.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredGallery.map((item) => (
              <Card key={item.id} variant="elevated" className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <Typography variant="h4" color="primary" className="mb-3">
                    {item.title}
                  </Typography>
                  <Typography variant="body" color="muted" className="mb-4">
                    {item.description}
                  </Typography>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>📍 {item.location}</span>
                      <span>👀 {item.views.toLocaleString()}</span>
                      <span>❤️ {item.likes}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Uploads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-6 text-center">
              Recent Uploads
            </Typography>
            <Typography variant="body-lg" color="muted" className="max-w-2xl mx-auto text-center">
              Fresh content from our community members and recent adventures.
            </Typography>
          </div>

          {/* Recent uploads grid would go here - placeholder for now */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} variant="elevated" className="aspect-square overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Typography variant="body" color="muted" className="text-center">
                    Recent Upload {i}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
              Follow Our Journey
            </Typography>
            <Typography variant="body-lg" color="muted" className="max-w-2xl mx-auto text-center">
              Stay connected across all our social platforms for daily inspiration and community updates.
            </Typography>
          </div>

          <SocialFeed />

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://instagram.com/2206experiences" variant="primary" size="lg" className="inline-flex items-center">
                <span className="mr-2">📸</span>
                Follow on Instagram
              </Button>
              <Button href="https://tiktok.com/@2206experiences" variant="secondary" size="lg" className="inline-flex items-center">
                <span className="mr-2">🎵</span>
                Watch on TikTok
              </Button>
              <Button href="https://youtube.com/@2206experiences" variant="accent" size="lg" className="inline-flex items-center">
                <span className="mr-2">🎥</span>
                Subscribe on YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Typography variant="h2" color="white" className="mb-6 text-center">
            Share Your Adventures
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 max-w-2xl mx-auto opacity-90 text-center">
            Got amazing photos or videos from your travels? Tag us @2206experiences and become part of our visual story.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/travel-club" variant="white" size="lg">
              Join Travel Club
            </Button>
            <Button href="/contact" variant="outline-white" size="lg">
              Submit Content
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
