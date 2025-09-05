import MainLayout from '../../components/layouts/MainLayout';
import ContactForm from '../../components/ContactForm';
import Card from '../../components/ui/Card';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';

export default function ContactPage() {
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
              <path d="M12,19L8,15H11V5H13V15H16L12,19M5,3V5H19V3H5M19,21V19H5V21H19Z"/>
              <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center">
            Get in Touch
          </Typography>
          <Typography variant="h2" className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed text-center">
            Ready to start your next adventure? Have questions? We're here to help you every step of the way
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              Send Message
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
            >
              Book Consultation
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
              We're Here for You
            </Typography>
            <Typography variant="body-lg" className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to providing excellent communication and support
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6H20Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                &lt;1hr
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Email Response Time
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                24/7
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Support Available
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A8,8 0 0,1 20,10A8,8 0 0,1 12,18A8,8 0 0,1 4,10A8,8 0 0,1 12,2M12,4A6,6 0 0,0 6,10A6,6 0 0,0 12,16A6,6 0 0,0 18,10A6,6 0 0,0 12,4M12,6A4,4 0 0,1 16,10A4,4 0 0,1 12,14A4,4 0 0,1 8,10A4,4 0 0,1 12,6M12,8A2,2 0 0,0 10,10A2,2 0 0,0 12,12A2,2 0 0,0 14,10A2,2 0 0,0 12,8Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                15
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Languages Supported
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                99%
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Customer Satisfaction
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <Typography variant="h2" color="neutral" className="mb-6 text-center">Send us a message</Typography>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="p-6">
                <Typography variant="h3" color="primary" className="mb-4 flex items-center">
                  <span className="mr-3">📧</span>
                  Contact Information
                </Typography>
                <div className="space-y-2">
                  <Typography variant="body" color="neutral">
                    <strong>General Inquiries:</strong> hello@2206experiences.com
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Partnerships:</strong> partners@2206experiences.com
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Support:</strong> support@2206experiences.com
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Media & Press:</strong> media@2206experiences.com
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Group Bookings:</strong> groups@2206experiences.com
                  </Typography>
                </div>
              </Card>

              {/* Support */}
              <Card className="p-6">
                <Typography variant="h3" color="primary" className="mb-4 flex items-center">
                  <span className="mr-3">🆘</span>
                  Need Help?
                </Typography>
                <div className="space-y-2">
                  <Typography variant="body" color="neutral">
                    <strong>General Support:</strong> hello@2206experiences.com
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Phone:</strong> +44 20 7946 0958
                  </Typography>
                  <Typography variant="body" color="neutral">
                    <strong>Hours:</strong> Mon-Fri, 9AM-6PM GMT
                  </Typography>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <Typography variant="h3" color="primary" className="mb-4 flex items-center">
                  <span className="mr-3">🌐</span>
                  Follow Us
                </Typography>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://twitter.com/2206experiences" 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="https://instagram.com/2206experiences" 
                    className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <span>📸</span>
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/2206experiences" 
                    className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>📘</span>
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://linkedin.com/company/2206experiences" 
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 text-center">
          <div className="max-w-2xl mx-auto">
            <Typography variant="h2" color="neutral" className="mb-4 text-center">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body-lg" color="neutral" className="mb-6">
              Can&apos;t find what you&apos;re looking for? Check out our comprehensive FAQ section 
              or get in touch with our friendly support team.
            </Typography>
            <a
              href="/faq"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              View FAQ →
            </a>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <Typography variant="h2" color="white" className="mb-4 text-center">We&apos;re Here to Help!</Typography>
            <Typography variant="body-lg" color="white" className="mb-4">
              Our team is passionate about helping you create unforgettable travel experiences.
            </Typography>
            <Typography variant="body" color="white" className="opacity-90">
              Average response time: <strong>4 hours</strong> during business days
            </Typography>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
