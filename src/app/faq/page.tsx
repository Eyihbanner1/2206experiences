'use client';

import MainLayout from '../../components/layouts/MainLayout';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is 2206Experiences?",
    answer: "2206Experiences is a platform that connects African explorers with curated travel adventures, vibrant community events, and a supportive travel club. We focus on authentic experiences and building meaningful connections among travelers."
  },
  {
    question: "How do I join the Travel Club?",
    answer: "You can join our Travel Club by visiting the Travel Club page and signing up. Membership includes access to exclusive trips, member-only events, travel planning resources, and a supportive community of fellow explorers."
  },
  {
    question: "What types of trips do you offer?",
    answer: "We offer a wide variety of trips including cultural immersion experiences, adventure tours, wellness retreats, food tours, historical explorations, and custom group trips. All our trips are carefully curated to provide authentic and meaningful experiences."
  },
  {
    question: "Are your trips suitable for solo travelers?",
    answer: "Absolutely! Many of our travelers are solo adventurers. Our trips are designed to foster connections, and our Travel Club provides a supportive community where solo travelers can meet like-minded individuals and even find travel companions."
  },
  {
    question: "What safety measures do you have in place?",
    answer: "Safety is our top priority. We work with vetted local guides, provide comprehensive travel insurance options, conduct thorough destination research, and maintain 24/7 support during trips. We also provide detailed safety briefings before each adventure."
  },
  {
    question: "Can I customize a trip for my group?",
    answer: "Yes! We offer custom group trips tailored to your preferences, budget, and timeline. Whether it's a family reunion, corporate retreat, or friends' getaway, we can create a unique experience just for your group."
  },
  {
    question: "What is included in trip packages?",
    answer: "Our trip packages typically include accommodation, local transportation, guided tours, some meals, and curated experiences. Specific inclusions vary by trip, and we provide detailed itineraries with clear information about what's covered."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 months in advance for popular destinations and during peak seasons. However, we also offer last-minute deals and can sometimes accommodate shorter notice bookings depending on availability."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies by trip type and timing. Generally, we offer full refunds for cancellations made 60+ days in advance, partial refunds for 30-60 days, and limited refunds for last-minute cancellations. We also offer trip insurance options."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We understand that travel is an investment. We offer flexible payment plans that allow you to spread the cost of your trip over several months. Contact us to discuss payment options that work for your budget."
  }
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <Typography variant="h3" color="primary" className="pr-4">{item.question}</Typography>
          <span className={`text-purple transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ↓
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-gray-50">
          <Typography variant="body" color="neutral" className="leading-relaxed">{item.answer}</Typography>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
              <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>
            </svg>
          </div>
          <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-center">
            Questions & Answers
          </Typography>
          <Typography variant="h2" className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed text-center">
            Find answers to common questions about our services, trips, and community adventures
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
            >
              Browse FAQ
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold"
            >
              Contact Support
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
              Support Statistics
            </Typography>
            <Typography variant="body-lg" className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to providing excellent support and answering your questions
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                100+
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                FAQs Answered
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L9,9L1,9L7,14L5,22L12,18L19,22L17,14L23,9L15,9L12,1Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                &lt;2hrs
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Average Response Time
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-purple-600 mb-2">
                24/7
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Support Available
              </Typography>
            </Card>

            <Card variant="glass" className="text-center p-8 hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
              <Typography variant="h3" className="text-4xl font-bold text-pink-600 mb-2">
                98%
              </Typography>
              <Typography variant="body-sm" className="text-gray-600 font-medium">
                Satisfaction Rate
              </Typography>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
            {faqData.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple to-lilac rounded-lg text-center">
            <Typography variant="h2" color="white" className="mb-4 text-center">Still Have Questions?</Typography>
            <Typography variant="body" color="white" className="opacity-90 mb-6">
              Our team is here to help you plan the perfect adventure. Get in touch with us today!
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/travel-club"
                className="bg-transparent text-white border border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-purple transition-colors"
              >
                Join Travel Club
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
