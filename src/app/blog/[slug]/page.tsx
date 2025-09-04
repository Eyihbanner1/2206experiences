import { Metadata } from 'next';
import MainLayout from '../../../components/layouts/MainLayout';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts = {
    'ultimate-visa-guide-2025': {
      title: 'The Ultimate Visa Guide for African Travelers 2025',
      author: 'Sarah Adebayo',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Travel Tips',
      excerpt: 'Everything you need to know about visa applications, requirements, and tips for smooth international travel from Africa.',
      content: `
# The Ultimate Visa Guide for African Travelers 2025

Traveling internationally as an African passport holder can feel overwhelming, but with the right preparation and knowledge, you can navigate visa requirements with confidence. This comprehensive guide covers everything you need to know for 2025.

## Understanding Visa Types

### Tourist Visas
Most short-term visits fall under tourist visas. These typically allow stays of 30-90 days and require proof of:
- Return flights
- Hotel bookings or invitation letters
- Bank statements showing sufficient funds
- Travel insurance

### Business Visas
For work-related travel, business visas often require:
- Invitation letter from the host company
- Employment verification
- Proof of business registration
- Meeting schedules or conference documentation

### Transit Visas
Some countries require transit visas even for short layovers. Always check requirements for:
- Connection flights over 24 hours
- Airport changes during layovers
- Specific airline partnerships

## Country-Specific Requirements

### European Union (Schengen Area)
- Apply 3 months in advance
- Biometric data required
- Travel insurance mandatory (€30,000 minimum)
- Bank statements for 3-6 months
- Detailed itinerary required

### United Kingdom
- Online application system
- Tuberculosis testing required for some countries
- Financial requirements: £945 per month of stay
- Accommodation proof essential

### United States
- DS-160 form completion
- Embassy interview required
- SEVIS fee for students
- Strong ties to home country demonstration

### Canada
- Biometrics required
- Medical exam for some countries
- Proof of funds: CAD $1,230 per month
- Letter of invitation if visiting family/friends

## Essential Documentation Checklist

### Basic Requirements (All Countries)
- [ ] Valid passport (6+ months remaining)
- [ ] Completed application form
- [ ] Recent passport photos
- [ ] Travel itinerary
- [ ] Accommodation proof
- [ ] Flight reservations
- [ ] Bank statements (3-6 months)
- [ ] Employment letter
- [ ] Travel insurance

### Additional Documents
- [ ] Educational certificates (if applicable)
- [ ] Medical certificates
- [ ] Police clearance certificate
- [ ] Vaccination records
- [ ] Invitation letters
- [ ] Previous visa stamps

## Pro Tips for Success

### 1. Start Early
Begin your application process 2-3 months before travel. Some embassies have long processing times, especially during peak seasons.

### 2. Be Consistent
Ensure all information across documents matches exactly - names, dates, and details must be identical.

### 3. Strong Financial Profile
Maintain healthy bank account balances for at least 3 months before applying. Avoid large, unexplained deposits.

### 4. Professional Presentation
- Use high-quality document scans
- Organize papers in the required order
- Write clear, concise cover letters
- Dress professionally for interviews

### 5. Show Strong Home Ties
Demonstrate compelling reasons to return home:
- Stable employment
- Property ownership
- Family responsibilities
- Ongoing education

## Common Mistakes to Avoid

### Documentation Errors
- Incomplete application forms
- Expired documents
- Poor quality photos
- Missing signatures

### Financial Mistakes
- Insufficient bank balance
- Irregular income patterns
- Borrowed money showing suddenly
- Mixing personal and business accounts

### Interview Preparation
- Inconsistent information
- Lack of travel purpose clarity
- Poor knowledge of destination
- Appearing overly nervous

## Visa-Free and Visa-on-Arrival Options

Many countries offer easier entry for African travelers:

### Visa-Free Countries
- Morocco (90 days)
- Kenya (EAC citizens)
- Ghana (ECOWAS citizens)
- South Africa (SADC citizens)

### Visa-on-Arrival
- Turkey
- UAE
- Egypt
- Jordan
- Maldives

## Building a Strong Travel History

Start with easier destinations to build a positive visa history:
1. Apply for regional visas first
2. Visit countries with good diplomatic relations
3. Always comply with visa conditions
4. Maintain clean entry/exit records

## Working with Visa Agents

### When to Use an Agent
- Complex applications
- Business or investment visas
- Previous rejections
- Tight timelines

### Choosing the Right Agent
- Verify credentials and registration
- Check success rates and reviews
- Understand fee structures
- Ensure direct embassy submission

## Handling Visa Rejections

### Common Rejection Reasons
1. Insufficient documentation
2. Lack of travel history
3. Weak financial profile
4. Unclear travel purpose
5. Poor interview performance

### After a Rejection
- Request rejection letter details
- Address specific concerns
- Strengthen weak areas
- Consider reapplying after 3-6 months

## 2025 Updates and Changes

### New Requirements
- Enhanced biometric collection
- Digital application systems
- Increased processing fees
- Stricter financial thresholds

### Technology Improvements
- Online tracking systems
- Digital document submission
- Virtual interviews
- Mobile app integrations

## Resources and Tools

### Official Sources
- Embassy websites
- Government visa portals
- Immigration department sites
- Consular service centers

### Helpful Tools
- Visa requirement checkers
- Document preparation templates
- Fee calculators
- Appointment booking systems

## Conclusion

Obtaining visas as an African traveler requires preparation, patience, and attention to detail. By following this guide, maintaining strong documentation, and building positive travel history, you'll increase your chances of successful applications.

Remember: every rejection is a learning opportunity, and with persistence and proper preparation, you can achieve your travel goals.

*Ready to start your visa application? Download our complete visa checklist and document templates in our [Travel Club Resources](/travel-club) section.*
      `
    }
  };
  
  return posts[slug as keyof typeof posts] || null;
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - 2206 Experiences'
    };
  }

  return {
    title: `${post.title} - 2206 Experiences Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <MainLayout>
        <div className="section-padding">
          <div className="container-2206 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Button href="/blog">Back to Blog</Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const relatedPosts = [
    {
      slug: 'greece-travel-guide',
      title: 'Island Hopping in Greece: A Complete Guide',
      category: 'Destination Guides'
    },
    {
      slug: 'solo-travel-safety-tips', 
      title: '10 Essential Safety Tips for Solo Female Travelers',
      category: 'Travel Tips'
    },
    {
      slug: 'budget-travel-europe',
      title: 'Exploring Europe on a Budget: 30 Days Under £1000',
      category: 'Budget Travel'
    }
  ];

  return (
    <MainLayout>
      {/* Article Header */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-500">Published on {post.date}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br>').replace(/#{1,6}\s+/g, match => {
                  const level = match.trim().length;
                  return `<h${level} class="text-${4-level}xl font-bold text-gray-900 mt-8 mb-4">`;
                }).replace(/###\s+/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">').replace(/##\s+/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">').replace(/#\s+/g, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-6">')
              }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Love this content? Get more like it!
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for weekly travel tips, visa updates, and destination guides.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="bg-purple-600 text-white hover:bg-purple-700 font-semibold py-3 px-6 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="p-6">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium mb-3 inline-block">
                  {relatedPost.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-4">{relatedPost.title}</h3>
                <Button href={`/blog/${relatedPost.slug}`} variant="outline" size="sm">
                  Read More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 text-center">
          <Button href="/blog">← Back to All Articles</Button>
        </div>
      </section>
    </MainLayout>
  );
}
