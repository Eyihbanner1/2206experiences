import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import ContactForm from '../../components/ContactForm';

export default function PartnershipsPage() {
  const audienceStats = [
    {
      platform: 'Instagram',
      followers: '85K+',
      engagement: '8.5%',
      demographics: 'African diaspora, 25-40 years',
      icon: '📷'
    },
    {
      platform: 'TikTok',
      followers: '120K+',
      engagement: '12.3%', 
      demographics: 'Young professionals, 18-35 years',
      icon: '📱'
    },
    {
      platform: 'WhatsApp Community',
      followers: '5,000+',
      engagement: '95%',
      demographics: 'Active travelers, 25-45 years',
      icon: '💬'
    },
    {
      platform: 'Twitter/X',
      followers: '45K+',
      engagement: '6.2%',
      demographics: 'Professionals, diaspora community',
      icon: '🐦'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Travel Brand Partnerships',
      description: 'Airlines, hotels, tour operators, and travel tech companies',
      benefits: [
        'Sponsored trip content creation',
        'Product reviews and testimonials', 
        'Social media campaign management',
        'Community event collaborations',
        'User-generated content campaigns'
      ],
      examples: ['Emirates Airlines', 'Booking.com', 'Airbnb', 'Visit Dubai']
    },
    {
      title: 'Lifestyle & Fashion Brands',
      description: 'Fashion, beauty, wellness, and lifestyle companies',
      benefits: [
        'Influencer marketing campaigns',
        'Product placement in travel content',
        'Event sponsorship opportunities',
        'Brand ambassador programs',
        'Cross-platform content creation'
      ],
      examples: ['ASOS', 'Fenty Beauty', 'Away Luggage', 'Lululemon']
    },
    {
      title: 'Financial Services',
      description: 'Banks, fintech, travel insurance, and currency services',
      benefits: [
        'Educational content partnerships',
        'Webinar collaborations',
        'Community workshop sponsorship',
        'Product integration in travel planning',
        'Targeted campaign development'
      ],
      examples: ['Monzo', 'Wise', 'WorldRemit', 'Revolut']
    },
    {
      title: 'Cultural & Entertainment',
      description: 'Event organizers, cultural institutions, and entertainment brands',
      benefits: [
        'Event cross-promotion',
        'Cultural content collaboration',
        'Community engagement initiatives',
        'Sponsored cultural experiences',
        'Educational partnership content'
      ],
      examples: ['Afro Nation', 'British Museum', 'Spotify', 'Netflix']
    }
  ];

  const caseStudies = [
    {
      brand: 'Visit Greece',
      campaign: 'Island Hopping Campaign 2024',
      reach: '2.3M',
      engagement: '185K',
      results: [
        '45% increase in Greece trip bookings',
        '2.3M total campaign reach',
        '185K engagements across platforms',
        '500+ user-generated content pieces'
      ],
      testimonial: "Working with 2206 Experiences gave us authentic access to the African diaspora travel market. The content was engaging and drove real results.",
      author: 'Maria Konstantinou, Marketing Director'
    },
    {
      brand: 'Revolut Business',
      campaign: 'Smart Travel Banking',
      reach: '1.8M',
      engagement: '95K', 
      results: [
        '500+ new business account signups',
        '1.8M social media impressions',
        '95K total engagements',
        '12% conversion rate on landing page'
      ],
      testimonial: "The 2206 community is incredibly engaged. Our travel-focused campaign with them exceeded all expectations.",
      author: 'James Williams, Partnership Manager'
    }
  ];

  const mediaKit = {
    totalReach: '250K+',
    monthlyImpressions: '5.2M',
    avgEngagementRate: '9.8%',
    communitySize: '8,500+',
    countriesReached: 45,
    contentPieces: '2,400+'
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-lilac-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold text-center">
            Brand Partnerships
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto text-center">
            Partner with 2206 Experiences to reach an engaged community of African explorers across 45+ countries. 
            Authentic storytelling meets measurable results.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#audience" variant="white" size="lg">
              View Our Reach
            </Button>
            <Button href="#partnerships" variant="outline-white" size="lg">
              Partnership Options
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
                250K+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Community Reach
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                9.5%
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Avg Engagement
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                45+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Countries
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                98%
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Client Satisfaction
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding" id="partnerships">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Why Choose 2206 Experiences?</Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-3xl mx-auto">
              We&apos;re not just another travel company. We&apos;re a community-driven platform with deep cultural connections 
              and authentic engagement across the African diaspora.
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">🌍</div>
              <Typography variant="h3" color="primary" className="mb-4">Global Reach, Cultural Depth</Typography>
              <Typography variant="body" color="neutral">
                Our community spans 45+ countries with deep cultural connections and authentic storytelling that resonates.
              </Typography>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <Typography variant="h3" color="primary" className="mb-4">High Engagement Rates</Typography>
              <Typography variant="body" color="neutral">
                Average 9.8% engagement rate across platforms - significantly above industry standards of 1-3%.
              </Typography>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <Typography variant="h3" color="primary" className="mb-4">Authentic Partnerships</Typography>
              <Typography variant="body" color="neutral">
                We only partner with brands we believe in, ensuring authentic recommendations and genuine community trust.
              </Typography>
            </Card>
          </div>

          {/* Audience Statistics */}
          <div className="bg-gray-50 rounded-lg p-8">
            <Typography variant="h3" color="primary" className="mb-8 text-center">Our Audience Overview</Typography>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audienceStats.map((stat) => (
                <div key={stat.platform} className="bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{stat.icon}</span>
                    <div>
                      <Typography variant="h4" color="primary">{stat.platform}</Typography>
                      <div className="text-purple-600 font-bold">{stat.followers}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement:</span>
                      <span className="font-semibold">{stat.engagement}</span>
                    </div>
                    <div className="text-gray-600">{stat.demographics}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.totalReach}</div>
                <div className="text-sm text-gray-600">Total Reach</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.monthlyImpressions}</div>
                <div className="text-sm text-gray-600">Monthly Impressions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.avgEngagementRate}</div>
                <div className="text-sm text-gray-600">Avg Engagement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.communitySize}</div>
                <div className="text-sm text-gray-600">Community Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.countriesReached}</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{mediaKit.contentPieces}+</div>
                <div className="text-sm text-gray-600">Content Pieces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Partnership Opportunities</Typography>
            <Typography variant="body-lg" color="neutral">
              We work with brands across multiple industries to create authentic, engaging campaigns
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="p-8">
                <Typography variant="h3" color="primary" className="mb-4">{type.title}</Typography>
                <Typography variant="body" color="neutral" className="mb-6">{type.description}</Typography>
                
                <div className="mb-6">
                  <Typography variant="h4" color="primary" className="mb-3">What we offer:</Typography>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Typography variant="h4" color="primary" className="mb-2">Perfect for brands like:</Typography>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, i) => (
                      <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Success Stories</Typography>
            <Typography variant="body-lg" color="neutral">
              Real results from our brand partnerships
            </Typography>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <div className="md:flex md:gap-8">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {study.brand.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <Typography variant="h3" color="primary">{study.brand}</Typography>
                        <Typography variant="body" color="neutral">{study.campaign}</Typography>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600">{result}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 mb-4">
                      &quot;{study.testimonial}&quot;
                    </blockquote>
                    <div className="text-sm text-gray-500">— {study.author}</div>
                  </div>

                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg aspect-square flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Typography variant="h2" color="primary" className="mb-4 text-center">Let&apos;s Work Together</Typography>
              <Typography variant="body-lg" color="neutral">
                Ready to partner with us? Get in touch and let&apos;s discuss how we can help achieve your marketing goals.
              </Typography>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Typography variant="h3" color="primary" className="mb-6">Partnership Inquiry</Typography>
                <ContactForm />
              </div>

              <div>
                <Typography variant="h3" color="primary" className="mb-6">Quick Stats</Typography>
                <div className="space-y-6">
                  <Card className="p-6">
                    <Typography variant="h4" color="primary" className="mb-3">Average Campaign Results</Typography>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reach:</span>
                        <span className="font-semibold">1.5M - 3M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engagement Rate:</span>
                        <span className="font-semibold">8-15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Click-through Rate:</span>
                        <span className="font-semibold">3-7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Conversion Rate:</span>
                        <span className="font-semibold">8-12%</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <Typography variant="h4" color="primary" className="mb-3">What&apos;s Included</Typography>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Strategy development & campaign planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Content creation across all platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Community engagement & management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Detailed analytics & performance reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">✓</span>
                        <span>Campaign optimization & A/B testing</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <Typography variant="h4" color="primary" className="mb-3">Get Our Media Kit</Typography>
                    <Typography variant="body-sm" color="neutral" className="mb-4">
                      Download our comprehensive media kit with detailed audience insights, case studies, and pricing information.
                    </Typography>
                    <button className="w-full bg-purple-600 text-white hover:bg-purple-700 font-semibold py-3 px-6 rounded-full transition-colors">
                      Download Media Kit
                    </button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <Typography variant="h2" color="white" className="mb-4 text-center">Ready to Partner With Us?</Typography>
            <Typography variant="body-lg" color="white" className="mb-6 opacity-90">
              Join brands like Visit Greece, Revolut, and others who&apos;ve achieved exceptional results with our community.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnerships@2206experiences.com"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                📧 partnerships@2206experiences.com
              </a>
              <a 
                href="#contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                Send Partnership Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
