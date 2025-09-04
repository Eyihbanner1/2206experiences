import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { Button, Input, TextArea, Select, Badge, Alert, Breadcrumb } from '../../components/ui';

export default function ComponentsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components' }
  ];

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <MainLayout>
      <div className="container-2206 section-padding">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Breadcrumb items={breadcrumbItems} className="justify-center mb-6" />
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Design System Components
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Week 2 Enhancement: Complete design system with Purple/Lilac/Pink/White branding, responsive components, and enhanced user experience.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Buttons Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Buttons</h2>
            <div className="card-elevated p-6">
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">Primary Button</Button>
                <Button className="btn-secondary">Secondary Button</Button>
                <Button className="btn-outline">Outline Button</Button>
              </div>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Badges</h2>
            <div className="card-elevated p-6">
              <div className="flex flex-wrap gap-4">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>
          </section>

          {/* Alerts Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Alerts</h2>
            <div className="space-y-4">
              <Alert variant="info" title="Information">
                This is an informational alert with additional details.
              </Alert>
              <Alert variant="success" title="Success">
                Your action was completed successfully!
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review your input before proceeding.
              </Alert>
              <Alert variant="error" title="Error">
                An error occurred while processing your request.
              </Alert>
            </div>
          </section>

          {/* Forms Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Form Components</h2>
            <div className="card-elevated p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  label="Full Name" 
                  placeholder="Enter your full name"
                  helperText="This will be used for trip bookings"
                />
                <Input 
                  label="Email Address" 
                  type="email"
                  placeholder="your@email.com"
                  variant="filled"
                />
                <Select 
                  label="Travel Preference"
                  placeholder="Choose your preference"
                  options={selectOptions}
                />
                <Input 
                  label="With Error" 
                  placeholder="This field has an error"
                  error="This field is required"
                  variant="outline"
                />
                <div className="md:col-span-2">
                  <TextArea 
                    label="Tell us about your travel dreams"
                    placeholder="Describe your ideal adventure..."
                    helperText="Help us create the perfect experience for you"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Cards & Layout</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold mb-3 gradient-text">Adventure Trips</h3>
                <p className="text-gray-600 mb-4">Explore stunning destinations with our curated adventure trips.</p>
                <Badge variant="primary" size="sm">Popular</Badge>
              </div>
              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold mb-3 gradient-text">Cultural Events</h3>
                <p className="text-gray-600 mb-4">Join our vibrant community at exclusive cultural events.</p>
                <Badge variant="secondary" size="sm">New</Badge>
              </div>
              <div className="card-elevated p-6">
                <h3 className="text-lg font-semibold mb-3 gradient-text">Travel Club</h3>
                <p className="text-gray-600 mb-4">Connect with fellow travelers and share your experiences.</p>
                <Badge variant="success" size="sm">Free</Badge>
              </div>
            </div>
          </section>

          {/* Branding Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Brand Colors</h2>
            <div className="card-elevated p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Primary Purple</p>
                  <p className="text-xs text-gray-500">#7c3aed</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-400 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Lilac</p>
                  <p className="text-xs text-gray-500">#c084fc</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink-400 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">Pink</p>
                  <p className="text-xs text-gray-500">#f472b6</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-semibold">White</p>
                  <p className="text-xs text-gray-500">#ffffff</p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Design Demo */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Responsive Design</h2>
            <Alert variant="info" title="Mobile-First Design">
              All components are built with mobile-first responsive design. The navigation automatically switches to a hamburger menu on smaller screens, and all components adapt to different viewport sizes.
            </Alert>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
