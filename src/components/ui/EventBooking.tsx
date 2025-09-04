'use client';

import { useState } from 'react';
import Button from './Button';

interface EventBookingProps {
  eventId: number;
  eventTitle: string;
  eventDate: string;
  eventPrice: string;
  capacity: string;
  onBookingComplete: () => void;
  className?: string;
}

interface BookingStep {
  step: number;
  title: string;
  isActive: boolean;
  isComplete: boolean;
}

export default function EventBooking({ 
  eventId, 
  eventTitle, 
  eventDate, 
  eventPrice, 
  capacity,
  className = '' 
}: EventBookingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    attendees: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dietaryRequirements: '',
    emergencyContact: '',
    agreeToTerms: false,
    marketingOptIn: false
  });

  const steps: BookingStep[] = [
    { step: 1, title: 'Event Details', isActive: currentStep === 1, isComplete: currentStep > 1 },
    { step: 2, title: 'Your Information', isActive: currentStep === 2, isComplete: currentStep > 2 },
    { step: 3, title: 'Payment', isActive: currentStep === 3, isComplete: currentStep > 3 }
  ];

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStripeCheckout = () => {
    // In a real implementation, this would redirect to Stripe Checkout
    const stripeUrl = `https://checkout.stripe.com/c/pay/cs_example_${eventId}`;
    window.open(stripeUrl, '_blank');
  };

  const handleEventbriteCheckout = () => {
    // In a real implementation, this would redirect to Eventbrite
    const eventbriteUrl = `https://www.eventbrite.com/e/2206-experiences-${eventId}`;
    window.open(eventbriteUrl, '_blank');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.step} className="flex items-center">
          <div className={`
            flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${step.isComplete 
              ? 'bg-green-500 border-green-500 text-white' 
              : step.isActive 
                ? 'bg-purple-500 border-purple-500 text-white' 
                : 'bg-gray-100 border-gray-300 text-gray-500'
            }
          `}>
            {step.isComplete ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              step.step
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 ${step.isComplete ? 'bg-green-500' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderEventDetails = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{eventTitle}</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Date:</span>
            <span className="ml-2 text-gray-600">{eventDate}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Price:</span>
            <span className="ml-2 text-purple-600 font-bold">{eventPrice} per person</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Capacity:</span>
            <span className="ml-2 text-gray-600">{capacity}</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Attendees
        </label>
        <select 
          value={bookingData.attendees}
          onChange={(e) => handleInputChange('attendees', parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {[1, 2, 3, 4, 5, 6].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
          ))}
        </select>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">What&apos;s Included:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Welcome drink and light refreshments</li>
          <li>• Professional photography</li>
          <li>• Networking opportunities</li>
          <li>• 2206 Community access</li>
        </ul>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNextStep} className="px-8">
          Continue to Your Information
        </Button>
      </div>
    </div>
  );

  const renderUserForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={bookingData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={bookingData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          value={bookingData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          value={bookingData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dietary Requirements (Optional)
        </label>
        <textarea
          value={bookingData.dietaryRequirements}
          onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Emergency Contact *
        </label>
        <input
          type="text"
          value={bookingData.emergencyContact}
          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Name and phone number"
          required
        />
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevStep}>
          Back
        </Button>
        <Button onClick={handleNextStep} className="px-8">
          Continue to Payment
        </Button>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Event:</span>
            <span>{eventTitle}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span>{eventDate}</span>
          </div>
          <div className="flex justify-between">
            <span>Attendees:</span>
            <span>{bookingData.attendees} {bookingData.attendees === 1 ? 'person' : 'people'}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total:</span>
            <span className="text-purple-600">
              £{(parseInt(eventPrice.replace('£', '')) * bookingData.attendees)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            checked={bookingData.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            I agree to the Terms & Conditions and cancellation policy *
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="marketing"
            checked={bookingData.marketingOptIn}
            onChange={(e) => handleInputChange('marketingOptIn', e.target.checked)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="marketing" className="ml-2 text-sm text-gray-700">
            I&apos;d like to receive updates about future events and trips
          </label>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-medium text-gray-900 mb-4">Choose Payment Method:</h4>
        <div className="grid gap-4">
          <Button 
            onClick={handleStripeCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 text-left"
            disabled={!bookingData.agreeToTerms}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Pay with Stripe</div>
                <div className="text-sm opacity-90">Secure card payment</div>
              </div>
              <div className="text-2xl">💳</div>
            </div>
          </Button>
          
          <Button 
            onClick={handleEventbriteCheckout}
            variant="outline"
            className="p-4 text-left border-orange-300 hover:bg-orange-50"
            disabled={!bookingData.agreeToTerms}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-orange-600">Pay with Eventbrite</div>
                <div className="text-sm text-orange-500">Redirect to Eventbrite</div>
              </div>
              <div className="text-2xl">🎟️</div>
            </div>
          </Button>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevStep}>
          Back
        </Button>
      </div>
    </div>
  );

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Book Your Spot</h2>
        <p className="text-gray-600 text-center">Secure your place at this amazing event</p>
      </div>

      {renderStepIndicator()}

      {currentStep === 1 && renderEventDetails()}
      {currentStep === 2 && renderUserForm()}
      {currentStep === 3 && renderPayment()}
    </div>
  );
}
