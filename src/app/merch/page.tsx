import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function MerchPage() {
  const featuredProducts = [
    {
      id: 'hoodie-black',
      name: '2206 Signature Hoodie',
      price: '£45',
      originalPrice: '£60',
      image: '/images/merch/hoodie-black.jpg',
      colors: ['Black', 'Purple', 'White'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      description: 'Premium cotton blend hoodie with embroidered logo. Perfect for your adventures.',
      features: ['100% organic cotton blend', 'Embroidered logo', 'Unisex fit', 'Ethically sourced'],
      category: 'Hoodies',
      bestseller: true
    },
    {
      id: 'tshirt-purple',
      name: 'Adventures Await T-Shirt',
      price: '£25',
      originalPrice: '£30',
      image: '/images/merch/tshirt-purple.jpg',
      colors: ['Purple', 'Black', 'White', 'Pink'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      description: 'Soft cotton tee with inspirational travel quote and community logo.',
      features: ['100% organic cotton', 'Screen printed design', 'Pre-shrunk', 'Fair trade'],
      category: 'T-Shirts',
      bestseller: false
    },
    {
      id: 'cap-embroidered',
      name: '2206 Embroidered Cap',
      price: '£20',
      originalPrice: '£25',
      image: '/images/merch/cap-black.jpg',
      colors: ['Black', 'Navy', 'Beige'],
      sizes: ['One Size'],
      description: 'Classic baseball cap with premium embroidered logo. Adjustable strap.',
      features: ['6-panel construction', 'Embroidered logo', 'Adjustable strap', 'Curved brim'],
      category: 'Accessories',
      bestseller: true
    }
  ];

  const allProducts = [
    ...featuredProducts,
    {
      id: 'travel-bag',
      name: '2206 Travel Backpack',
      price: '£85',
      originalPrice: '£100',
      image: '/images/merch/backpack.jpg',
      colors: ['Black', 'Navy'],
      sizes: ['One Size'],
      description: 'Durable 40L travel backpack perfect for your next adventure.',
      features: ['40L capacity', 'Water resistant', 'Laptop compartment', 'Multiple pockets'],
      category: 'Travel Gear',
      bestseller: false
    },
    {
      id: 'water-bottle',
      name: 'Insulated Water Bottle',
      price: '£18',
      originalPrice: '£22',
      image: '/images/merch/water-bottle.jpg',
      colors: ['Purple', 'Black', 'White'],
      sizes: ['500ml'],
      description: 'Keep your drinks perfect temperature with our branded insulated bottle.',
      features: ['Stainless steel', '12h hot/24h cold', 'Leak-proof', 'BPA-free'],
      category: 'Accessories',
      bestseller: false
    },
    {
      id: 'travel-journal',
      name: 'Adventure Journal',
      price: '£15',
      originalPrice: '£18',
      image: '/images/merch/journal.jpg',
      colors: ['Purple', 'Black'],
      sizes: ['A5'],
      description: 'Document your travels with our premium leather-bound journal.',
      features: ['Leather cover', '200 pages', 'Bookmark ribbon', 'Pocket inside cover'],
      category: 'Stationery',
      bestseller: false
    }
  ];

  const categories = ['All Products', 'Hoodies', 'T-Shirts', 'Accessories', 'Travel Gear', 'Stationery'];

  const sizeGuide = {
    'T-Shirts': {
      'XS': { chest: '86-91cm', length: '66cm' },
      'S': { chest: '91-96cm', length: '69cm' },
      'M': { chest: '96-101cm', length: '72cm' },
      'L': { chest: '101-106cm', length: '75cm' },
      'XL': { chest: '106-111cm', length: '78cm' },
      'XXL': { chest: '111-116cm', length: '81cm' }
    },
    'Hoodies': {
      'XS': { chest: '96-101cm', length: '66cm' },
      'S': { chest: '101-106cm', length: '69cm' },
      'M': { chest: '106-111cm', length: '72cm' },
      'L': { chest: '111-116cm', length: '75cm' },
      'XL': { chest: '116-121cm', length: '78cm' },
      'XXL': { chest: '121-126cm', length: '81cm' }
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-lilac-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold text-center">
            Official Merchandise
          </Typography>
          <Typography variant="body-xl" color="white" className="mb-8 opacity-90 max-w-3xl mx-auto text-center">
            Wear your wanderlust with pride. Our exclusive collection features high-quality apparel and accessories 
            that celebrate the spirit of African exploration and community.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#featured" variant="white" size="lg">
              Shop Featured
            </Button>
            <Button href="#all-products" variant="outline-white" size="lg">
              View All Products
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-white bg-opacity-25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white bg-opacity-35 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                25+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Product Designs
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                2,500+
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Happy Customers
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                98%
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Quality Rating
              </Typography>
            </Card>
            
            <Card variant="glass" className="text-center p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Typography variant="h3" color="primary" className="mb-2 text-center">
                48hr
              </Typography>
              <Typography variant="body" color="muted" className="text-center">
                Fast Shipping
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding" id="featured">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" gradient className="mb-4 text-center">
              Featured Collection
            </Typography>
            <Typography variant="body-lg" color="neutral">
              Our most popular items, loved by the community
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  {product.bestseller && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Bestseller
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {product.category === 'Hoodies' ? '👕' :
                     product.category === 'T-Shirts' ? '👔' :
                     product.category === 'Accessories' ? '🧢' : '🎒'}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <Typography variant="h3" color="primary" className="mb-2">
                    {product.name}
                  </Typography>
                  <Typography variant="body-sm" color="neutral" className="mb-4 line-clamp-2">
                    {product.description}
                  </Typography>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-purple-600">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Save £{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Available colors:</div>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <div 
                          key={color}
                          className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
                            color === 'Black' ? 'bg-black' :
                            color === 'Purple' ? 'bg-purple-600' :
                            color === 'White' ? 'bg-white' :
                            color === 'Pink' ? 'bg-pink-500' :
                            color === 'Navy' ? 'bg-blue-900' :
                            color === 'Beige' ? 'bg-amber-100' : 'bg-gray-400'
                          }`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Available sizes:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span 
                          key={size}
                          className="border border-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buy Button */}
                  <a
                    href={`https://shop.2206experiences.com/products/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
                  >
                    Buy Now - {product.price}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h2" color="primary" gradient className="mb-6 text-center">
              More Than Just Merchandise
            </Typography>
            <Typography variant="body-lg" color="neutral" className="mb-8">
              Every piece in our collection represents our community values: adventure, authenticity, and connection. 
              When you wear 2206, you&apos;re not just wearing great quality clothing - you&apos;re representing a movement 
              of African diaspora travelers exploring the world with purpose and pride.
            </Typography>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <Typography variant="h4" color="primary" className="mb-2">
                  Ethically Sourced
                </Typography>
                <Typography variant="body-sm" color="neutral">
                  All our products are ethically made with fair trade practices
                </Typography>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">♻️</div>
                <Typography variant="h4" color="primary" className="mb-2">
                  Sustainable Materials
                </Typography>
                <Typography variant="body-sm" color="neutral">
                  Premium organic cotton and eco-friendly packaging
                </Typography>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <Typography variant="h4" color="primary" className="mb-2">
                  Community Driven
                </Typography>
                <Typography variant="body-sm" color="neutral">
                  Profits support community events and travel scholarships
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Product Catalog */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="mb-8">
            <Typography variant="h2" color="primary" className="mb-6 text-center">
              Complete Collection
            </Typography>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Products'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative">
                  {product.bestseller && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Bestseller
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {product.category === 'Hoodies' ? '👕' :
                     product.category === 'T-Shirts' ? '👔' :
                     product.category === 'Accessories' ? product.name.includes('Cap') ? '🧢' : '💧' :
                     product.category === 'Travel Gear' ? '🎒' : '📖'}
                  </div>
                </div>
                
                <div className="p-4">
                  <Typography variant="h3" color="primary" className="mb-1">{product.name}</Typography>
                  <Typography variant="body-sm" color="neutral" className="mb-3 line-clamp-2">{product.description}</Typography>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-purple-600">{product.price}</span>
                    <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                  </div>

                  <a
                    href={`https://shop.2206experiences.com/products/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors inline-flex items-center justify-center text-sm"
                  >
                    Buy Now
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206 max-w-4xl mx-auto">
          <Typography variant="h2" color="primary" className="mb-8 text-center">Size Guide</Typography>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(sizeGuide).map(([category, sizes]) => (
              <Card key={category} className="p-6">
                <Typography variant="h3" color="primary" className="mb-4">{category}</Typography>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Chest</th>
                        <th className="text-left py-2">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(sizes).map(([size, measurements]) => (
                        <tr key={size} className="border-b">
                          <td className="py-2 font-medium">{size}</td>
                          <td className="py-2">{measurements.chest}</td>
                          <td className="py-2">{measurements.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="section-padding">
        <div className="container-2206">
          <div className="text-center mb-12">
            <Typography variant="h2" color="primary" className="mb-4 text-center">Community Style</Typography>
            <Typography variant="body-lg" color="neutral" className="mb-8">
              See how our community rocks their 2206 merch around the world
            </Typography>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <div className="text-4xl">📸</div>
                </div>
              ))}
            </div>

            <Typography variant="body" color="neutral" className="mt-6">
              Tag us @2206experiences on Instagram to be featured!
            </Typography>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-2206">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-white text-center">
            <Typography variant="h2" color="white" className="mb-4 text-center">Join the Style Movement</Typography>
            <Typography variant="body-lg" color="white" className="mb-6 opacity-90">
              Every purchase supports our community events and travel scholarship program. 
              Look good, feel good, do good.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://shop.2206experiences.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
              >
                🛍️ Shop Full Collection
              </a>
              <Button href="/travel-club">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="section-padding">
        <div className="container-2206 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
              <div className="text-3xl mb-3">🚚</div>
              <Typography variant="h3" color="primary" className="mb-2">Free Shipping</Typography>
              <Typography variant="body-sm" color="neutral">Free shipping on orders over £50 to UK addresses</Typography>
            </Card>
            
            <Card className="p-6">
              <div className="text-3xl mb-3">↩️</div>
              <Typography variant="h3" color="primary" className="mb-2">Easy Returns</Typography>
              <Typography variant="body-sm" color="neutral">30-day return policy for unworn items with tags</Typography>
            </Card>
            
            <Card className="p-6">
              <div className="text-3xl mb-3">💳</div>
              <Typography variant="h3" color="primary" className="mb-2">Secure Payment</Typography>
              <Typography variant="body-sm" color="neutral">Safe checkout with Stripe, PayPal, and major cards</Typography>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
