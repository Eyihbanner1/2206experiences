import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function PaymentPage() {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h1" color="primary" className="mb-4 text-center">
              Payment Information
            </Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
              We currently handle all payments manually. Please contact us to arrange payment for your bookings.
            </Typography>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8">
              <Typography variant="h3" color="primary" className="mb-4">
                Ready to Book?
              </Typography>
              <Typography variant="body" color="neutral" className="mb-6">
                Contact our team to secure your spot and arrange payment for your adventure.
              </Typography>
              <div className="space-y-4">
                <Button href="/contact" variant="primary" className="w-full">
                  Contact Us to Book
                </Button>
                <Button href="/trips" variant="secondary" className="w-full">
                  Browse Trips
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
