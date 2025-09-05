import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Newsletter from '../../components/ui/Newsletter';
import WhatsAppButton, { WhatsAppPresets } from '../../components/ui/WhatsAppButton';

export default function ConsultationsPage() {
  const services = [
    {
      id: 'travel-consultation',
      title: 'Travel Planning Consultation',
      price: '£75',
      duration: '60 minutes',
      description: 'Personalized travel planning session to help you create the perfect itinerary for your next adventure.',
      features: [
        'Destination research and recommendations',
        'Custom itinerary planning (5-14 days)',
        'Budget optimization strategies',
        'Visa and documentation guidance',
        'Local insights and hidden gems',
        'Post-consultation support (30 days)'
      ],
      calendlyUrl: 'https://calendly.com/2206experiences/travel-consultation'
    },
    {
      id: 'event-planning',
      title: 'Event Planning Consultation',
      price: '£125',
      duration: '90 minutes',
      description: 'Comprehensive event planning session for destination weddings, corporate retreats, and cultural celebrations.',
      features: [
        'Event concept development',
        'Venue recommendations and sourcing',
        'Vendor network introductions',
        'Timeline and logistics planning',
        'Budget management strategies',
        'Cultural experience integration',
        'Follow-up consultation (included)'
      ],
      calendlyUrl: 'https://calendly.com/2206experiences/event-planning'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      service: "Travel Planning",
      quote: "The consultation was incredibly detailed and personalized. I felt confident about my solo trip to Morocco thanks to their expert guidance.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Manchester, UK",
      service: "Event Planning",
      quote: "They helped us plan the most amazing destination wedding in Santorini. Every detail was perfect and the cultural touches were beautiful.",
      rating: 5
    },
    {
      name: "Adunni Okafor",
      location: "Lagos, Nigeria",
      service: "Travel Planning",
      quote: "As someone new to international travel, their visa guidance and travel tips were invaluable. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <svg 
              className="w-20 h-20 mx-auto mb-6 text-white/90" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
              <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center">
            Expert Travel Consultations
          </Typography>
          <Typography variant="h2" className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed text-center">
            Personalized guidance from travel experts to help you plan unforgettable adventures and events worldwide
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
            >
              View Services
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-purple-300/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Consultation Success Stories
            </Typography>
            <Typography variant="body-lg" className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our expert guidance has helped travelers create amazing experiences
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                850+
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Consultations Completed
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                4.9/5
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Average Rating
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                65
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Countries Planned
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7,10L12,15L17,10H7Z" />
                  <path d="M2,4A2,2 0 0,0 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H18V20A2,2 0 0,1 16,22H4A2,2 0 0,1 2,20V4M4,4V18H16V18H6V6H4Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                96%
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Success Rate
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4 text-center">
              Professional Consultation Services
            </Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
              Choose from our specialized consultation services designed to help you plan 
              the perfect travel experience or unforgettable event.
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="p-8 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <Typography variant="h3" color="primary" className="flex-1">
                      {service.title}
                    </Typography>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  
                  <Typography variant="body-lg" color="neutral" className="mb-6">
                    {service.description}
                  </Typography>
                  
                  <div className="mb-8">
                    <Typography variant="h4" color="primary" className="mb-3">
                      What&apos;s Included:
                    </Typography>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2">✓</span>
                          <Typography variant="body" color="neutral">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href={service.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
                  >
                    Book Consultation
                  </a>
                  <a 
                    href={`https://buy.stripe.com/test_consultation_${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
                  >
                    Pay Now - {service.price}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick WhatsApp Contact */}
      <section className="section-padding bg-purple-50">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Typography variant="h2" color="primary" className="mb-4">
                Need Quick Answers?
              </Typography>
              <Typography variant="body-lg" color="neutral">
                Get instant responses to your travel questions via WhatsApp
              </Typography>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Typography variant="h3" color="primary" className="mb-4">
                  Quick Questions
                </Typography>
                <WhatsAppPresets 
                  presets={[
                    {
                      title: "General Inquiry",
                      message: "Hi! I have some questions about your consultation services. Can you help?"
                    },
                    {
                      title: "Pricing Question",
                      message: "Hi! I'd like to know more about consultation pricing and packages."
                    },
                    {
                      title: "Booking Help",
                      message: "Hi! I need help booking a consultation session. Can you assist?"
                    }
                  ]}
                />
              </Card>
              
              <Card className="p-6">
                <Typography variant="h3" color="primary" className="mb-4">
                  Travel Specific
                </Typography>
                <WhatsAppPresets 
                  presets={[
                    {
                      title: "Africa Travel",
                      message: "Hi! I'm planning to travel to Africa and would love some expert guidance."
                    },
                    {
                      title: "Event Planning",
                      message: "Hi! I need help planning a cultural event. Do you offer consultation for this?"
                    },
                    {
                      title: "Visa Support",
                      message: "Hi! I need help with visa applications and travel documentation. Can you assist?"
                    }
                  ]}
                />
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <WhatsAppButton 
                variant="inline"
                message="Hi! I'm interested in booking a travel consultation with 2206 Experiences."
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              How It Works
            </Typography>
            <Typography variant="body-lg" color="neutral">
              Simple steps to get expert guidance for your travel or event
            </Typography>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Choose Service
              </Typography>
              <Typography variant="body" color="neutral">
                Select the consultation type that matches your needs
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Book & Pay
              </Typography>
              <Typography variant="body" color="neutral">
                Schedule your session and secure your spot with payment
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Preparation
              </Typography>
              <Typography variant="body" color="neutral">
                Complete our pre-consultation questionnaire
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <Typography variant="h4" color="primary" className="mb-2">
                Expert Guidance
              </Typography>
              <Typography variant="body" color="neutral">
                Get personalized recommendations and actionable plans
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Client Success Stories
            </Typography>
            <Typography variant="body-lg" color="neutral">
              See how our consultations have helped others create amazing experiences
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <Typography variant="body" color="neutral" className="mb-4">
                  &quot;{testimonial.quote}&quot;
                </Typography>
                <div>
                  <Typography variant="body" color="primary" className="font-semibold">
                    {testimonial.name}
                  </Typography>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-purple-600">{testimonial.service} Client</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4">
              Consultation FAQ
            </Typography>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <Typography variant="h4" color="primary" className="mb-2">
                What happens during a consultation?
              </Typography>
              <Typography variant="body" color="neutral">
                We&apos;ll discuss your goals, preferences, and constraints in detail, then provide personalized recommendations and actionable plans tailored to your specific needs.
              </Typography>
            </Card>
            <Card className="p-6">
              <Typography variant="h4" color="primary" className="mb-2">
                Can I reschedule my consultation?
              </Typography>
              <Typography variant="body" color="neutral">
                Yes, you can reschedule up to 24 hours before your appointment through your Calendly booking link or by contacting us directly.
              </Typography>
            </Card>
            <Card className="p-6">
              <Typography variant="h4" color="primary" className="mb-2">
                Do you offer refunds?
              </Typography>
              <Typography variant="body" color="neutral">
                We offer full refunds for cancellations made 48+ hours in advance. For cancellations within 48 hours, we offer credit for future consultations.
              </Typography>
            </Card>
            <Card className="p-6">
              <Typography variant="h4" color="primary" className="mb-2">
                What if I need additional support?
              </Typography>
              <Typography variant="body" color="neutral">
                All consultations include 30 days of follow-up support via email. For extensive ongoing support, we offer retainer packages.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <Typography variant="h2" className="text-white mb-4">
              Ready to Start Planning?
            </Typography>
            <Typography variant="body-lg" className="text-white/90 mb-6">
              Get expert guidance and turn your travel dreams into reality with our professional consultation services.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services"
                className="bg-white text-purple-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                View Services
              </a>
              <Button href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Newsletter 
            variant="inline"
            title="Get Free Travel Planning Tips"
            description="Subscribe for weekly destination guides, visa updates, and budget planning advice from our travel experts."
            showBenefits={false}
          />
        </div>
      </section>
    </MainLayout>
  );
}
