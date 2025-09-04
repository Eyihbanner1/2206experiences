import React from "react";
import Button from "./Button";
import Card from "./Card";
import Typography from "./Typography";
import { designTokens } from "../../styles/designTokens";
import { microInteractions } from "../../styles/microInteractions";

// Example of how components work together with the new design system

interface ExampleSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ExampleSection({ title, description, children }: ExampleSectionProps) {
  return (
    <div className="mb-12">
      <Typography variant="h3" color="primary" className="mb-2">
        {title}
      </Typography>
      <Typography variant="body" color="muted" className="mb-6">
        {description}
      </Typography>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

// Enhanced CTA Card with integrated design system
export function CTACard() {
  return (
    <Card variant="elevated" padding="loose" hover className="text-center">
      <Typography variant="h2" color="primary" gradient className="mb-4">
        Ready to Start Your Adventure?
      </Typography>
      <Typography variant="body-lg" color="muted" className="mb-8 max-w-2xl mx-auto">
        Join thousands of travelers who have discovered their perfect adventure 
        through our curated experiences and expert guidance.
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="accent" 
          size="lg" 
          href="/experiences"
          className="shadow-xl hover:shadow-2xl"
        >
          Explore Experiences
        </Button>
        <Button 
          variant="secondary" 
          size="lg" 
          href="/consultation"
        >
          Get Free Consultation
        </Button>
      </div>
    </Card>
  );
}

// Feature Grid with design system integration
export function FeatureGrid() {
  const features = [
    {
      title: "Curated Experiences",
      description: "Hand-picked adventures tailored to your interests and budget",
      icon: "🎯"
    },
    {
      title: "Expert Guidance", 
      description: "Professional travel consultants with decades of experience",
      icon: "🧭"
    },
    {
      title: "Seamless Booking",
      description: "Easy online booking with secure payment processing",
      icon: "💳"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey",
      icon: "🔧"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <Card 
          key={index}
          variant="bordered" 
          padding="normal"
          hover
          interactive
          className="group"
        >
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <Typography variant="h4" color="primary" className="mb-3">
            {feature.title}
          </Typography>
          <Typography variant="body" color="muted">
            {feature.description}
          </Typography>
        </Card>
      ))}
    </div>
  );
}

// Newsletter subscription with design system
export function NewsletterCard() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setEmail("");
  };

  return (
    <Card variant="glass" padding="loose" className="backdrop-blur-md">
      <div className="text-center">
        <Typography variant="h3" color="primary" className="mb-4">
          Stay Updated
        </Typography>
        <Typography variant="body" color="muted" className="mb-6">
          Get the latest travel tips, destination guides, and exclusive offers 
          delivered to your inbox.
        </Typography>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`
              flex-1 px-4 py-3 rounded-lg border border-neutral-300 
              focus:outline-none focus:ring-3 focus:ring-purple-300 focus:border-purple-500
              transition-all duration-200
              ${microInteractions.focusStates.input}
            `}
          />
          <Button 
            type="submit" 
            variant="primary" 
            size="md"
            loading={isLoading}
            disabled={!email || isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </Card>
  );
}

// Testimonial card with enhanced design
export function TestimonialCard({ 
  quote, 
  author, 
  location, 
  rating = 5 
}: {
  quote: string;
  author: string;
  location: string;
  rating?: number;
}) {
  return (
    <Card variant="elevated" padding="loose" hover>
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>
      
      <Typography variant="body-lg" color="neutral" className="mb-6 italic">
        "{quote}"
      </Typography>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <Typography variant="body" weight="semibold" color="primary">
            {author}
          </Typography>
          <Typography variant="body-sm" color="muted">
            {location}
          </Typography>
        </div>
      </div>
    </Card>
  );
}

// Loading state components
export function LoadingCard() {
  return (
    <Card variant="default" padding="normal">
      <div className="animate-pulse">
        <div className="h-4 bg-neutral-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
      </div>
    </Card>
  );
}

// Interactive demo component showing all design system elements
export function DesignSystemDemo() {
  const [activeTab, setActiveTab] = React.useState("buttons");

  const tabs = [
    { id: "buttons", label: "Buttons" },
    { id: "cards", label: "Cards" }, 
    { id: "typography", label: "Typography" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Typography variant="h2" color="primary" gradient className="text-center mb-8">
        Design System Demo
      </Typography>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-neutral-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${activeTab === tab.id 
                  ? 'bg-white text-purple-600 shadow-md' 
                  : 'text-neutral-600 hover:text-purple-600'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "buttons" && (
          <ExampleSection
            title="Button Variants"
            description="Different button styles for various use cases"
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md">Primary Button</Button>
              <Button variant="secondary" size="md">Secondary Button</Button>
              <Button variant="accent" size="md">Accent Button</Button>
              <Button variant="white" size="md">White Button</Button>
              <Button variant="outline-white" size="md" className="bg-purple-600">Outline White</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="xs">Extra Small</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="xl">Extra Large</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" loading>Loading</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="accent" href="/test" external>External Link</Button>
            </div>
          </ExampleSection>
        )}

        {activeTab === "cards" && (
          <ExampleSection
            title="Card Variants"
            description="Different card styles for content presentation"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="default" padding="normal">
                <Typography variant="h4" className="mb-2">Default Card</Typography>
                <Typography variant="body" color="muted">Basic card with subtle styling</Typography>
              </Card>
              
              <Card variant="elevated" padding="normal" hover>
                <Typography variant="h4" className="mb-2">Elevated Card</Typography>
                <Typography variant="body" color="muted">Enhanced shadows with hover effects</Typography>
              </Card>
              
              <Card variant="bordered" padding="loose">
                <Typography variant="h4" className="mb-2">Bordered Card</Typography>
                <Typography variant="body" color="muted">Distinctive border styling</Typography>
              </Card>
              
              <Card variant="glass" padding="loose" hover>
                <Typography variant="h4" className="mb-2">Glass Card</Typography>
                <Typography variant="body" color="muted">Glassmorphism effect with backdrop blur</Typography>
              </Card>
            </div>
          </ExampleSection>
        )}

        {activeTab === "typography" && (
          <ExampleSection
            title="Typography Scale"
            description="Comprehensive text styling system"
          >
            <div className="space-y-6">
              <div>
                <Typography variant="display-sm" color="primary" gradient>Display Text</Typography>
                <Typography variant="body-sm" color="muted">display-sm variant</Typography>
              </div>
              
              <div>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
              </div>
              
              <div>
                <Typography variant="body-xl">Body XL - Large body text for emphasis</Typography>
                <Typography variant="body-lg">Body Large - Slightly larger body text</Typography>
                <Typography variant="body">Body - Standard body text for readability</Typography>
                <Typography variant="body-sm">Body Small - Compact text for secondary content</Typography>
                <Typography variant="caption" color="muted">Caption - Small text for labels and annotations</Typography>
              </div>
              
              <div>
                <Typography variant="overline" color="accent">Overline Text</Typography>
                <Typography variant="body" weight="bold" color="primary">Bold Primary Text</Typography>
                <Typography variant="body" weight="medium" color="accent">Medium Accent Text</Typography>
              </div>
            </div>
          </ExampleSection>
        )}
      </div>
    </div>
  );
}
