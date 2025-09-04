# External Integrations Implementation Guide
## 2206 Experiences - Complete Setup Documentation

*Following knowledge graph external integrations business model - no internal authentication required*

---

## 🎯 **Overview**
This guide implements external-only integrations for 2206 Experiences, maintaining ~$1.25/month operating costs while providing full business functionality through proven external platforms.

---

## 📋 **Prerequisites**
- [ ] UK Business Bank Account (for payment processing)
- [ ] Business Email Address
- [ ] Domain Name (for professional setup)

---

## 🔧 **1. PAYMENT PROCESSING SETUP**

### **Option A: Stripe Payment Links (Recommended)**
1. **Create Stripe Account**
   - Visit: https://stripe.com
   - Sign up with UK business details
   - Complete business verification

2. **Create Payment Links**
   ```
   Products to create:
   - Lake District Trip: £299
   - Albania Adventure: £899
   - Algarve Family Trip: £1,299
   - Santorini Wellness: £1,599
   - London Boat Cruise: £45
   - Manchester Brunch: £35
   - Travel Consultation: £50/hour
   - Event Planning Consultation: £75/hour
   ```

3. **Implementation**
   - Copy payment link URLs from Stripe dashboard
   - Update trip/event pages with direct links
   - No code integration needed - just URL redirects

### **Option B: PayPal Business Links**
1. **Create PayPal Business Account**
   - Visit: https://paypal.com/uk/business
   - Complete business setup
   - Link to UK bank account

2. **Create Payment Buttons**
   - Use PayPal Button Generator
   - Create buttons for each product/service
   - Copy HTML embed codes

3. **Implementation**
   ```html
   <!-- Example PayPal Button -->
   <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
     <input type="hidden" name="cmd" value="_s-xclick">
     <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID">
     <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif">
   </form>
   ```

---

## 🎪 **2. EVENT BOOKING INTEGRATION**

### **Option A: Eventbrite Integration**
1. **Create Eventbrite Account**
   - Visit: https://eventbrite.co.uk
   - Set up organizer profile
   - Complete payment settings (link to UK bank)

2. **Create Events**
   ```
   Events to create:
   - London Boat Cruise - £45
   - Manchester Brunch - £35
   - Bowling & Shooting - £40
   - AfroBrunch Lagos - £30
   ```

3. **Get Event Links**
   - Copy public event URLs from Eventbrite
   - Update Events page with direct links

4. **Embed Widgets (Optional)**
   ```html
   <!-- Eventbrite Widget -->
   <div id="eventbrite-widget-container-YOUR_EVENT_ID"></div>
   <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
   ```

### **Option B: Stripe Checkout for Events**
1. **Create Stripe Products** (if using Stripe)
2. **Generate Checkout Links**
3. **Update event pages with checkout URLs**

---

## 📅 **3. CONSULTATION BOOKING SETUP**

### **Calendly Integration**
1. **Create Calendly Account**
   - Visit: https://calendly.com
   - Set up professional profile
   - Configure availability

2. **Create Event Types**
   ```
   Services to create:
   - Travel Consultation (60 min) - £50
   - Event Planning Consultation (90 min) - £75
   - Free Discovery Call (30 min) - Free
   ```

3. **Configure Payment Collection**
   - Link Stripe/PayPal account in Calendly
   - Enable payment collection for paid consultations

4. **Implementation**
   ```html
   <!-- Calendly Inline Widget -->
   <div class="calendly-inline-widget" 
        data-url="https://calendly.com/yourusername/travel-consultation" 
        style="min-width:320px;height:630px;">
   </div>
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
   ```

5. **Update Consultations Page**
   ```tsx
   // In src/app/consultations/page.tsx
   const consultationTypes = [
     {
       title: "Travel Consultation",
       calendlyUrl: "https://calendly.com/yourusername/travel-consultation",
       price: "£50/hour"
     },
     {
       title: "Event Planning",
       calendlyUrl: "https://calendly.com/yourusername/event-planning",
       price: "£75/hour"
     }
   ];
   ```

---

## 📧 **4. NEWSLETTER & EMAIL SETUP**

### **Mailchimp Integration**
1. **Create Mailchimp Account**
   - Visit: https://mailchimp.com
   - Create audience list
   - Design signup form

2. **Get Embed Code**
   - Go to Audience → Signup forms
   - Select "Embedded forms"
   - Copy generated HTML

3. **Implementation**
   ```tsx
   // Create Newsletter component
   // src/components/ui/Newsletter.tsx
   export default function Newsletter() {
     return (
       <div id="mc_embed_signup">
         <form action="https://your-domain.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" 
               method="post" id="mc-embedded-subscribe-form">
           <div className="mc-field-group">
             <input type="email" name="EMAIL" placeholder="Enter your email" required />
           </div>
           <div style={{position: 'absolute', left: '-5000px'}}>
             <input type="text" name="b_YOUR_USER_ID_YOUR_LIST_ID" tabIndex="-1" />
           </div>
           <input type="submit" value="Subscribe" name="subscribe" />
         </form>
       </div>
     );
   }
   ```

### **EmailJS for Contact Forms**
1. **Create EmailJS Account**
   - Visit: https://www.emailjs.com
   - Create service (Gmail/Outlook)
   - Create email template

2. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

3. **Update Contact Form**
   ```tsx
   // In src/components/ContactForm.tsx
   import emailjs from '@emailjs/browser';
   
   const sendEmail = async (formData) => {
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       );
       // Success handling
     } catch (error) {
       // Error handling
     }
   };
   ```

---

## 🌐 **5. SOCIAL MEDIA INTEGRATIONS**

### **WhatsApp Business Setup**
1. **Create WhatsApp Business Account**
   - Download WhatsApp Business app
   - Set up business profile
   - Create groups for community

2. **Generate WhatsApp Links**
   ```
   Community Groups:
   - Main Community: https://chat.whatsapp.com/YOUR_GROUP_LINK
   - Visa Support: https://chat.whatsapp.com/YOUR_VISA_GROUP_LINK
   - Europe Travelers: https://chat.whatsapp.com/YOUR_EUROPE_GROUP_LINK
   ```

3. **Add WhatsApp Button**
   ```tsx
   // WhatsApp Direct Message Button
   const whatsappNumber = "+44XXXXXXXXXX"; // Your business number
   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in 2206 Experiences`;
   
   <Link href={whatsappUrl} target="_blank" className="btn-primary">
     <MessageCircle className="w-4 h-4 mr-2" />
     WhatsApp Us
   </Link>
   ```

### **Social Media Embeds**
1. **YouTube Integration**
   ```tsx
   // YouTube Embed Component
   const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
     <iframe
       width="560"
       height="315"
       src={`https://www.youtube.com/embed/${videoId}`}
       frameBorder="0"
       allowFullScreen
       className="w-full aspect-video rounded-lg"
     />
   );
   ```

2. **TikTok Links** (Direct linking due to embed complexity)
   ```tsx
   const tiktokPosts = [
     {
       id: "1",
       url: "https://www.tiktok.com/@2206experiences/video/YOUR_VIDEO_ID",
       thumbnail: "/images/tiktok-thumb-1.jpg",
       caption: "Lake District Adventure Highlights"
     }
   ];
   ```

3. **Instagram Integration**
   ```tsx
   // Instagram Post Cards (Visual representation)
   const instagramPosts = [
     {
       id: "1",
       imageUrl: "/images/instagram-post-1.jpg",
       caption: "Santorini sunset views 🌅",
       link: "https://instagram.com/p/YOUR_POST_ID",
       likes: 1247,
       comments: 89
     }
   ];
   ```

---

## 📱 **6. COMMUNITY PLATFORM SETUP**

### **External Community Integration**
1. **Twitter Community**
   - Create Twitter account: @2206Experiences
   - Set up Twitter Community
   - Get community invite link

2. **WhatsApp Groups**
   - Create themed groups (travel tips, visa support, etc.)
   - Generate invite links
   - Add to Travel Club page

3. **Update Community Page**
   ```tsx
   const communityPlatforms = [
     {
       name: "WhatsApp Main Community",
       members: "500+",
       link: "https://chat.whatsapp.com/YOUR_MAIN_GROUP",
       description: "General travel discussions and meetups"
     },
     {
       name: "Twitter Community",
       members: "1.2k+",
       link: "https://twitter.com/i/communities/YOUR_COMMUNITY_ID",
       description: "Travel tips and destination spotlights"
     }
   ];
   ```

---

## 🛍️ **7. MERCHANDISE STORE SETUP**

### **Option A: External Store Integration**
1. **Create Shopify/Etsy Store**
2. **List Products**
   ```
   Products:
   - 2206 Experiences Hoodies - £35
   - Travel T-Shirts - £20
   - Branded Caps - £15
   - Travel Bags - £45
   ```
3. **Update Merch Page**
   ```tsx
   const products = [
     {
       name: "2206 Experiences Hoodie",
       price: "£35",
       externalLink: "https://your-store.com/hoodie",
       image: "/images/hoodie.jpg"
     }
   ];
   ```

### **Option B: Print-on-Demand**
1. **Set up Printful/Teespring**
2. **Design products**
3. **Generate product links**

---

## 📊 **8. ANALYTICS & TRACKING SETUP**

### **Google Analytics**
1. **Create GA4 Property**
2. **Add Tracking Code**
   ```tsx
   // In src/app/layout.tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

### **Facebook Pixel (Optional)**
```tsx
// Facebook Pixel for social ads
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## 🚀 **9. DEPLOYMENT & DOMAIN SETUP**

### **Domain Configuration**
1. **Purchase Domain** (if not done)
   - Recommended: Namecheap, Google Domains
   - Cost: ~$10-15/year

2. **Vercel Deployment**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from project root
   vercel
   
   # Add custom domain
   vercel domains add yourdomain.com
   ```

3. **DNS Configuration**
   - Point domain to Vercel servers
   - Set up www redirect
   - Configure SSL (automatic with Vercel)

---

## ✅ **10. TESTING & VALIDATION CHECKLIST**

### **Payment Testing**
- [ ] Test Stripe payment links
- [ ] Test PayPal checkout flow
- [ ] Verify payments reach UK business account
- [ ] Test refund process

### **Booking Testing**
- [ ] Test Eventbrite event registration
- [ ] Test Calendly booking flow
- [ ] Verify email confirmations
- [ ] Test payment collection

### **Communication Testing**
- [ ] Test contact form (EmailJS)
- [ ] Test newsletter signup (Mailchimp)
- [ ] Test WhatsApp business number
- [ ] Verify social media links

### **User Experience**
- [ ] Mobile responsiveness
- [ ] Page load speeds (<3 seconds)
- [ ] External link functionality
- [ ] Form validation

---

## 💰 **11. COST BREAKDOWN**

```
Monthly Operating Costs:
- Domain: ~£1.25/month (£15/year)
- Hosting: £0 (Vercel free tier)
- EmailJS: £0 (free tier: 200 emails/month)
- Analytics: £0 (Google Analytics free)

External Platform Fees:
- Stripe: 1.4% + 20p per transaction
- PayPal: 2.9% + 30p per transaction  
- Eventbrite: 3.7% + 59p per ticket
- Calendly: £0 (free tier) or £8/month (Pro)
- Mailchimp: £0 (free tier: 2,000 contacts)

Total Fixed Costs: ~£1.25/month
Variable Costs: Transaction fees only
```

---

## 🔧 **12. MAINTENANCE & UPDATES**

### **Monthly Tasks**
- [ ] Update event listings
- [ ] Add new blog posts
- [ ] Check broken links
- [ ] Review analytics data
- [ ] Update social media content

### **Quarterly Tasks**
- [ ] Review and update pricing
- [ ] Assess external platform performance
- [ ] Update community group links
- [ ] Review payment processing fees

---

## 🆘 **13. TROUBLESHOOTING**

### **Common Issues**
1. **Payment Links Not Working**
   - Check Stripe/PayPal account status
   - Verify product URLs
   - Test in incognito mode

2. **Calendly Not Loading**
   - Check embed code syntax
   - Verify Calendly account is active
   - Test widget URL directly

3. **Newsletter Signup Failing**
   - Verify Mailchimp form action URL
   - Check for CORS issues
   - Test form submission manually

4. **Social Media Embeds Issues**
   - Verify video/post URLs
   - Check embed permissions
   - Use fallback direct links

---

## 📞 **14. SUPPORT CONTACTS**

- **Stripe Support**: https://support.stripe.com
- **PayPal Support**: https://paypal.com/uk/smarthelp
- **Eventbrite Support**: https://eventbrite.co.uk/support
- **Calendly Support**: https://help.calendly.com
- **Mailchimp Support**: https://mailchimp.com/contact
- **Vercel Support**: https://vercel.com/support

---

*This guide follows the external integrations business model as specified in the knowledge graph, ensuring no internal authentication conflicts while maintaining full business functionality.*

---

**Last Updated**: September 3, 2025
**Version**: 1.0
