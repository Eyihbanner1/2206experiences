export const HERO_IMAGES = {
  // Homepage - Adventure/Travel themed with purple/pink tones
  home: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Mountain landscape with purple sky
  
  // About - Community/People with warm tones
  about: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Group of diverse travelers
  
  // Travel Club - Community gathering with vibrant colors
  travelClub: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Friends celebrating sunset
  
  // Trips - Adventure landscape with purple/pink sunset
  trips: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Mountain adventure scene
  
  // Events - Social gathering with warm lighting
  events: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Event/party atmosphere
  
  // Consultations - Professional travel planning
  consultations: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Travel planning workspace
  
  // Merchandise - Lifestyle products with brand colors
  merch: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Lifestyle/fashion with purple tones
  
  // Gallery - Photography/memories theme
  gallery: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Camera/photography with sunset
  
  // Blog - Writing/content creation
  blog: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Modern workspace with laptop
  
  // Partnerships - Business collaboration
  partnerships: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Business handshake/collaboration
  
  // FAQ - Help/support theme
  faq: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Question marks with colorful background
  
  // Contact - Communication/connection
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' // Communication devices with purple tones
} as const;

export type HeroImageKey = keyof typeof HERO_IMAGES;
