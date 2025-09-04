import MainLayout from '../../components/layouts/MainLayout';
import ContactForm from '../../components/ContactForm';
import Card from '../../components/ui/Card';
import Typography from '../../components/ui/Typography';

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-2206">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <Typography variant="h2" color="neutral" className="mb-6">Send us a message</Typography>
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
            <Typography variant="h2" color="neutral" className="mb-4">
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
            <Typography variant="h2" color="white" className="mb-4">We&apos;re Here to Help!</Typography>
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
