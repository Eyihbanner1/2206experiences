import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Typography from '../../components/ui/Typography';
import { SocialFeed } from '../../components/ui/SocialEmbed';

export default function GalleryPage() {
  const galleryCategories = [
    'All',
    'Trips & Adventures',
    'Community Events',
    'Cultural Experiences',
    'Member Spotlights',
    'Behind The Scenes'
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'Trips & Adventures',
      title: 'Lake District Adventure - Group Summit',
      description: 'Our amazing group reached the top of Helvellyn! What a view and what a team!',
      location: 'Lake District, UK',
      date: '2024-08-15',
      participants: 12,
      thumbnail: '/images/gallery/lake-district-summit.jpg'
    },
    {
      id: 2, 
      type: 'video',
      category: 'Community Events',
      title: 'London Boat Cruise Highlights',
      description: 'The energy was incredible! Dancing, laughing, and making memories on the Thames.',
      location: 'Thames, London',
      date: '2024-07-20',
      participants: 45,
      thumbnail: '/images/gallery/london-cruise.jpg',
      videoUrl: 'https://youtube.com/embed/example1'
    },
    {
      id: 3,
      type: 'gallery',
      category: 'Cultural Experiences',
      title: 'Lagos AfroBrunch Cultural Celebration',
      description: 'A beautiful celebration of African culture with food, music, and community.',
      location: 'Lagos, Nigeria', 
      date: '2024-06-10',
      participants: 80,
      thumbnail: '/images/gallery/lagos-afrobrunch.jpg',
      imageCount: 24
    },
    {
      id: 4,
      type: 'image',
      category: 'Trips & Adventures',
      title: 'Albania Coastal Adventure',
      description: 'Crystal clear waters and breathtaking coastal views in the Albanian Riviera.',
      location: 'Albanian Riviera',
      date: '2024-09-05',
      participants: 18,
      thumbnail: '/images/gallery/albania-coast.jpg'
    },
    {
      id: 5,
      type: 'video',
      category: 'Member Spotlights',
      title: 'Sarah\'s Solo Travel Success Story',
      description: 'From nervous first-timer to confident solo traveler - Sarah shares her journey.',
      location: 'Greece',
      date: '2024-05-22',
      participants: 1,
      thumbnail: '/images/gallery/sarah-greece.jpg',
      videoUrl: 'https://youtube.com/embed/example2'
    },
    {
      id: 6,
      type: 'gallery',
      category: 'Community Events',
      title: 'Manchester Women\'s Brunch',
      description: 'Empowering conversations and delicious food at our quarterly women\'s brunch.',
      location: 'Manchester, UK',
      date: '2024-04-14',
      participants: 25,
      thumbnail: '/images/gallery/manchester-brunch.jpg',
      imageCount: 18
    },
    {
      id: 7,
      type: 'image',
      category: 'Behind The Scenes',
      title: 'Planning Session for Morocco Trip',
      description: 'Behind the scenes look at how we plan our incredible adventures.',
      location: '2206 HQ, London',
      date: '2024-03-08',
      participants: 8,
      thumbnail: '/images/gallery/planning-morocco.jpg'
    },
    {
      id: 8,
      type: 'video',
      category: 'Cultural Experiences',
      title: 'Traditional Greek Cooking Experience',
      description: 'Learning to make authentic Greek dishes with local families in Santorini.',
      location: 'Santorini, Greece',
      date: '2024-07-30',
      participants: 14,
      thumbnail: '/images/gallery/greek-cooking.jpg',
      videoUrl: 'https://youtube.com/embed/example3'
    },
    {
      id: 9,
      type: 'gallery',
      category: 'Member Spotlights', 
      title: 'Member Achievement Wall',
      description: 'Celebrating our community members\' travel milestones and adventures.',
      location: 'Global',
      date: '2024-08-01',
      participants: 150,
      thumbnail: '/images/gallery/member-achievements.jpg',
      imageCount: 32
    }
  ];

  const socialMediaEmbeds = [
    {
      platform: 'TikTok',
      title: 'Behind the scenes of our Greece trip planning',
      embedCode: '<blockquote class="tiktok-embed">TikTok embed would go here</blockquote>',
      url: 'https://tiktok.com/@2206experiences'
    },
    {
      platform: 'Instagram',
      title: 'Community highlights from this month',
      embedCode: '<blockquote class="instagram-media">Instagram embed would go here</blockquote>',
      url: 'https://instagram.com/2206experiences'
    },
    {
      platform: 'YouTube',
      title: 'Albania Adventure: Full Documentary',
      embedCode: '<iframe src="https://youtube.com/embed/example">YouTube embed</iframe>',
      url: 'https://youtube.com/@2206experiences'
    }
  ];

  return (
    <MainLayout>
      {/* Statistics Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Adventures Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">180</div>
              <div className="text-gray-600">Community Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-600">Countries Visited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="mb-8">
            <Typography variant="h2" color="primary" className="mb-6">Browse Our Memories</Typography>
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                {/* Image/Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">
                      {item.type === 'video' ? '🎥' : 
                       item.type === 'gallery' ? '🖼️' : '📸'}
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === 'video' ? 'bg-red-100 text-red-700' :
                      item.type === 'gallery' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.type === 'video' ? 'Video' :
                       item.type === 'gallery' ? `${item.imageCount} Photos` :
                       'Photo'}
                    </span>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <div className="w-8 h-8 text-purple-600">▶️</div>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-xs">{item.participants} people</span>
                  </div>
                  
                  <Typography variant="h3" color="primary" className="mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </Typography>
                  
                  <Typography variant="body-sm" color="neutral" className="mb-3 line-clamp-2">
                    {item.description}
                  </Typography>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>📍 {item.location}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4">Follow Our Journey</Typography>
            <Typography variant="body-lg" color="neutral">
              Stay connected with our daily adventures across all platforms
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaEmbeds.map((embed, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">
                    {embed.platform === 'TikTok' ? '📱' :
                     embed.platform === 'Instagram' ? '📷' : '📺'}
                  </div>
                </div>
                <Typography variant="h3" color="primary" className="mb-2">{embed.platform}</Typography>
                <Typography variant="body-sm" color="neutral" className="mb-4">{embed.title}</Typography>
                <a 
                  href={embed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  View on {embed.platform} →
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com/2206experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                📷 Instagram
              </a>
              <a 
                href="https://tiktok.com/@2206experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                📱 TikTok
              </a>
              <a 
                href="https://youtube.com/@2206experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                📺 YouTube
              </a>
              <a 
                href="https://twitter.com/2206experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Your Experience */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <Typography variant="h2" color="white" className="mb-4">Share Your Experience</Typography>
            <Typography variant="body-lg" color="white" className="mb-6 opacity-90">
              Been on one of our adventures? We&apos;d love to feature your photos and stories!
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@2206experiences.com?subject=Gallery Submission"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                📧 Submit Photos
              </a>
              <a 
                href="https://instagram.com/2206experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                📷 Tag Us @2206experiences
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Member Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4">Member Stories</Typography>
            <Typography variant="body-lg" color="neutral">
              Hear from our community about their favorite memories
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <Typography variant="body" color="neutral" className="mb-4 italic">
                &quot;The Albania trip was life-changing! From the stunning coastline to the amazing group dynamics, every moment was perfect.&quot;
              </Typography>
              <div className="font-semibold text-gray-900">Amara Johnson</div>
              <div className="text-sm text-gray-500">Albania Adventure 2024</div>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <Typography variant="body" color="neutral" className="mb-4 italic">
                &quot;The London boat cruise brought together so many amazing people. I made friendships that will last a lifetime!&quot;
              </Typography>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">London Boat Cruise 2024</div>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <Typography variant="body" color="neutral" className="mb-4 italic">
                &quot;As someone new to the community, the women&apos;s brunch in Manchester made me feel so welcome and empowered.&quot;
              </Typography>
              <div className="font-semibold text-gray-900">Sarah Okafor</div>
              <div className="text-sm text-gray-500">Manchester Brunch 2024</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <SocialFeed title="See What Our Community is Sharing" limit={6} />
        </div>
      </section>
    </MainLayout>
  );
}
