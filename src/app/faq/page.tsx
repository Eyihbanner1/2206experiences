'use client';

import MainLayout from '../../components/layouts/MainLayout';
import Typography from '../../components/ui/Typography';
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
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-lilac-50">
        <div className="container-2206 text-center">
          <Typography variant="h1" color="neutral" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body-lg" color="neutral" className="max-w-2xl mx-auto">
            Find answers to common questions about our services, trips, and community. Got a question we haven't covered? Reach out to us!
          </Typography>
        </div>
      </section>
      
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
            <Typography variant="h2" color="white" className="mb-4">Still Have Questions?</Typography>
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
