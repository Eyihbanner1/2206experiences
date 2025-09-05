'use client';

import { useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Newsletter from '../../components/ui/Newsletter';
import blogPosts from '../../data/blogPosts.json';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const featuredPost = featuredPosts[0] || blogPosts[0];
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    'All Posts',
    'Travel Tips',
    'Visa Information', 
    'Budget Travel',
    'Destination Guides',
    'Solo Travel',
    'Food & Culture'
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
          <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold text-center">
            Travel Resources & Blog
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto text-center">
            Discover expert travel guides, visa tips, cultural insights, and inspiring stories from our community 
            of African explorers around the world.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#featured" variant="white" size="lg">
              Read Featured
            </Button>
            <Button href="#categories" variant="outline-white" size="lg">
              Browse Categories
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
                50+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Travel Guides
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                25K+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Monthly Readers
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                45
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Countries Covered
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                Weekly
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                New Content
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding" id="featured">
        <div className="container-2206">
          <div className="mb-12">
            <Typography variant="h2" color="primary" className="mb-8 text-center">Featured Article</Typography>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-6xl">📋</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <Typography variant="h3" color="primary" className="mb-4">{featuredPost.title}</Typography>
                  <Typography variant="body" color="neutral" className="mb-6">{featuredPost.excerpt}</Typography>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {featuredPost.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500">{featuredPost.publishDate}</div>
                      </div>
                    </div>
                    <Button href={`/blog/${featuredPost.slug}`} variant="primary">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div id="categories" className="mb-8">
            <Typography variant="h2" color="primary" className="mb-6 text-center">Browse by Category</Typography>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-4xl">
                    {post.category === 'Travel Tips' ? '💡' :
                     post.category === 'Destination Guides' ? '🗺️' :
                     post.category === 'Community Stories' ? '👥' :
                     post.category === 'Budget Travel' ? '💰' :
                     post.category === 'Cultural Insights' ? '🌍' : '📸'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <Typography variant="h3" color="primary" className="mb-2 line-clamp-2">{post.title}</Typography>
                  <Typography variant="body" color="neutral" className="mb-4 line-clamp-3">{post.excerpt}</Typography>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.publishDate}</div>
                      </div>
                    </div>
                    <Button href={`/blog/${post.slug}`} variant="secondary" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto">
          <Newsletter 
            title="Never Miss a Travel Tip"
            description="Get our latest travel guides, visa updates, and insider tips delivered to your inbox weekly. Join 15,000+ travelers already subscribed!"
          />
        </div>
      </section>

      {/* Popular Tags */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <Typography variant="h2" color="primary" className="mb-6 text-center">Popular Topics</Typography>
          <div className="flex flex-wrap gap-2">
            {[
              'Visa Guide', 'Budget Travel', 'Solo Travel', 'Cultural Tips', 
              'Photography', 'African Diaspora', 'Europe Travel', 'Safety Tips',
              'Travel Insurance', 'Packing Lists', 'Currency Exchange', 'Local Customs'
            ].map((tag) => (
              <span 
                key={tag}
                className="bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
              >
                #{tag.toLowerCase().replace(' ', '')}
              </span>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
