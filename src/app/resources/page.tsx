'use client';

import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Newsletter from '../../components/ui/Newsletter';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      id: 'visa-guides',
      title: 'Visa Guides & Forms',
      description: 'Comprehensive visa application guides, forms, and requirement checklists for African travelers.',
      icon: '📋',
      resources: [
        {
          title: 'UK Visa Application Guide 2025',
          description: 'Complete step-by-step guide for UK visa applications from Africa',
          type: 'PDF Guide',
          downloadUrl: '/downloads/uk-visa-guide-2025.pdf',
          size: '2.8 MB'
        },
        {
          title: 'Schengen Visa Checklist',
          description: 'Required documents checklist for Schengen visa applications',
          type: 'PDF Checklist',
          downloadUrl: '/downloads/schengen-checklist.pdf',
          size: '1.2 MB'
        },
        {
          title: 'US Tourist Visa Interview Tips',
          description: 'Essential tips and common questions for US B1/B2 visa interviews',
          type: 'PDF Guide',
          downloadUrl: '/downloads/us-visa-interview-tips.pdf',
          size: '1.8 MB'
        }
      ]
    },
    {
      id: 'travel-planning',
      title: 'Travel Planning Tools',
      description: 'Budget calculators, packing lists, and trip planning templates to organize your journey.',
      icon: '📊',
      resources: [
        {
          title: 'Travel Budget Calculator',
          description: 'Excel template to calculate and track your travel expenses',
          type: 'Excel Template',
          downloadUrl: '/downloads/travel-budget-calculator.xlsx',
          size: '850 KB'
        },
        {
          title: 'Ultimate Packing Checklist',
          description: 'Comprehensive packing list for different types of trips',
          type: 'PDF Checklist',
          downloadUrl: '/downloads/packing-checklist.pdf',
          size: '1.1 MB'
        },
        {
          title: '30-Day Europe Itinerary Template',
          description: 'Customizable itinerary template for European backpacking',
          type: 'PDF Template',
          downloadUrl: '/downloads/europe-itinerary-template.pdf',
          size: '2.2 MB'
        }
      ]
    },
    {
      id: 'cultural-guides',
      title: 'Cultural & Etiquette Guides',
      description: 'Navigate different cultures with confidence using our etiquette and cultural insight guides.',
      icon: '🌍',
      resources: [
        {
          title: 'European Business Etiquette Guide',
          description: 'Professional etiquette tips for business meetings across Europe',
          type: 'PDF Guide',
          downloadUrl: '/downloads/european-business-etiquette.pdf',
          size: '1.9 MB'
        },
        {
          title: 'Dining Etiquette Around the World',
          description: 'Proper dining customs and table manners for different countries',
          type: 'PDF Guide',
          downloadUrl: '/downloads/dining-etiquette-guide.pdf',
          size: '2.3 MB'
        },
        {
          title: 'Religious Site Visiting Guidelines',
          description: 'Respectful visiting guidelines for religious and cultural sites',
          type: 'PDF Guide',
          downloadUrl: '/downloads/religious-site-guidelines.pdf',
          size: '1.6 MB'
        }
      ]
    },
    {
      id: 'safety-emergency',
      title: 'Safety & Emergency Resources',
      description: 'Safety tips, emergency contacts, and crisis management resources for international travel.',
      icon: '🛡️',
      resources: [
        {
          title: 'Emergency Contact Template',
          description: 'Template for organizing important contacts and emergency information',
          type: 'PDF Template',
          downloadUrl: '/downloads/emergency-contacts-template.pdf',
          size: '900 KB'
        },
        {
          title: 'Travel Insurance Comparison Guide',
          description: 'Compare travel insurance options and understand coverage types',
          type: 'PDF Guide',
          downloadUrl: '/downloads/travel-insurance-guide.pdf',
          size: '2.1 MB'
        },
        {
          title: 'Solo Female Travel Safety Tips',
          description: 'Comprehensive safety strategies for solo female travelers',
          type: 'PDF Guide',
          downloadUrl: '/downloads/solo-female-safety-guide.pdf',
          size: '1.7 MB'
        }
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Resource Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Resource Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="space-y-16">
            {resourceCategories.map((category) => (
              <div key={category.id} className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.resources.map((resource, index) => (
                    <Card key={index} className="h-full flex flex-col">
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                            {resource.type}
                          </div>
                          <div className="text-xs text-gray-500">{resource.size}</div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                        <p className="text-gray-600 mb-6 flex-1">{resource.description}</p>
                        
                        <Button 
                          href={resource.downloadUrl} 
                          variant="primary" 
                          className="w-full"
                        >
                          Download Free
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Newsletter 
            title="Get New Resources First"
            description="Be the first to access our latest travel resources, guides, and exclusive content. Join 15,000+ travelers who trust our resources!"
          />
        </div>
      </section>

      {/* Community Contribution */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12">
            <div className="text-5xl mb-6">🤝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Resource to Share?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for valuable travel resources from our community. 
              Share your templates, guides, or tips and help fellow travelers!
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Submit a Resource
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Downloads */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Most Downloaded This Month</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'UK Visa Guide', downloads: '2.1K', icon: '🇬🇧' },
              { title: 'Budget Calculator', downloads: '1.8K', icon: '💰' },
              { title: 'Packing Checklist', downloads: '1.5K', icon: '🧳' },
              { title: 'Safety Guide', downloads: '1.2K', icon: '🛡️' }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-sm text-gray-600">{item.downloads} downloads</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
