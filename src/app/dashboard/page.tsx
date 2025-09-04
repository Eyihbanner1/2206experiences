import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function DashboardPage() {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h1" color="primary" className="mb-4">
              Account Dashboard
            </Typography>
            <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
              Currently, we don't have user accounts. Please contact us directly to book trips and events.
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <Typography variant="h3" color="primary" className="mb-4">
                Book a Trip
              </Typography>
              <Typography variant="body" color="neutral" className="mb-6">
                Ready to explore? Contact our team to book your next adventure.
              </Typography>
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </Card>
            
            <Card className="text-center p-8">
              <Typography variant="h3" color="primary" className="mb-4">
                Browse Events
              </Typography>
              <Typography variant="body" color="neutral" className="mb-6">
                Check out our upcoming community events and experiences.
              </Typography>
              <Button href="/events" variant="secondary">
                View Events
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
