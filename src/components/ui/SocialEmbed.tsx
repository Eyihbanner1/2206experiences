'use client';

import { useState, useEffect } from 'react';

interface SocialEmbed {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'twitter';
  url: string;
  caption?: string;
  username?: string;
  timestamp?: string;
  likes?: number;
  views?: number;
  shares?: number;
  embedId?: string;
}

interface SocialEmbedProps {
  embed: SocialEmbed;
  className?: string;
}

interface SocialFeedProps {
  title?: string;
  embeds?: SocialEmbed[];
  maxItems?: number;
  showStats?: boolean;
  className?: string;
  limit?: number;
}

export default function SocialEmbed({ embed, className = '' }: SocialEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error] = useState(false);

  useEffect(() => {
    // Simulate loading social media embed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : embed.embedId;
  };

  // Extract TikTok video ID from URL
  const getTikTokVideoId = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com)\/@[\w.-]+\/video\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : embed.embedId;
  };

  // Render actual YouTube embed
  const renderYouTubeEmbed = () => {
    const videoId = getYouTubeVideoId(embed.url);
    if (videoId) {
      return (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      );
    }
    return renderPlaceholder();
  };

  // Render TikTok embed placeholder (TikTok embed is complex, using placeholder)
  const renderTikTokEmbed = () => {
    const videoId = getTikTokVideoId(embed.url);
    if (videoId) {
      return (
        <div className="aspect-[9/16] max-w-sm mx-auto">
          <div className="bg-black rounded-lg overflow-hidden h-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <p className="text-sm mb-2">TikTok Video</p>
                <a 
                  href={embed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
                >
                  Watch on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return renderPlaceholder();
  };

  // Render Instagram embed placeholder
  const renderInstagramEmbed = () => {
    return (
      <div className="aspect-square">
        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg h-full relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <p className="text-sm mb-2">Instagram Post</p>
              <a 
                href={embed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
              >
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render placeholder for loading or unsupported platforms
  const renderPlaceholder = () => {
    return (
      <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {embed.platform === 'youtube' ? (
            <div className="bg-red-600 text-white p-4 rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          ) : embed.platform === 'tiktok' ? (
            <div className="text-6xl">🎵</div>
          ) : embed.platform === 'instagram' ? (
            <div className="text-6xl">📸</div>
          ) : (
            <div className="text-6xl">💭</div>
          )}
        </div>
        
        {/* Platform watermark */}
        <div className="absolute bottom-2 right-2 bg-black/20 text-white px-2 py-1 rounded text-xs">
          {embed.platform}
        </div>
      </div>
    );
  };

  const getPlatformIcon = () => {
    switch (embed.platform) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
    }
  };

  const getPlatformColor = () => {
    const colors = {
      instagram: 'from-pink-500 to-purple-600',
      tiktok: 'from-black to-gray-800',
      youtube: 'from-red-500 to-red-600',
      twitter: 'from-blue-400 to-blue-500'
    };
    return colors[embed.platform];
  };

  if (error) {
    return (
      <div className={`bg-gray-100 rounded-lg p-6 text-center ${className}`}>
        <div className="text-gray-400 mb-2">❌</div>
        <p className="text-gray-600 text-sm">Failed to load {embed.platform} post</p>
        <a 
          href={embed.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline text-sm mt-2 inline-block"
        >
          View on {embed.platform}
        </a>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`bg-gray-100 rounded-lg p-6 animate-pulse ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
        <div className="aspect-square bg-gray-300 rounded-lg mb-4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg ${className}`}>
      {/* Platform Header */}
      <div className={`bg-gradient-to-r ${getPlatformColor()} p-4`}>
        <div className="flex items-center gap-3 text-white">
          {getPlatformIcon()}
          <div className="flex-1">
            <div className="font-semibold">{embed.username || '@2206experiences'}</div>
            <div className="text-sm opacity-90">{embed.timestamp || '2 hours ago'}</div>
          </div>
          <a 
            href={embed.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-sm flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {/* Render platform-specific embed */}
        {embed.platform === 'youtube' && renderYouTubeEmbed()}
        {embed.platform === 'tiktok' && renderTikTokEmbed()}
        {embed.platform === 'instagram' && renderInstagramEmbed()}
        {embed.platform === 'twitter' && renderPlaceholder()}

        {/* Caption */}
        <div className="text-gray-800 text-sm mb-3 mt-4">
          {embed.caption || getDefaultCaption(embed.platform)}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>{embed.likes || getRandomLikes()}</span>
          </div>
          {embed.views && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{embed.views}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>{embed.shares || getRandomShares()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getDefaultCaption(platform: string) {
  const captions: Record<string, string> = {
    instagram: "Another amazing adventure with our 2206 family! 🌍✨ Who's ready for the next trip? #2206Experiences #TravelCommunity",
    tiktok: "POV: You're exploring Africa with the best travel community 🎵✈️ #2206Experiences #TravelTok #Africa",
    youtube: "Watch our latest travel guide for first-time visitors to Ghana! Link in bio 📹🇬🇭",
    twitter: "Just dropped our new travel tips for 2024! What destination should we cover next? 🤔 #TravelTips #2206Experiences"
  };
  return captions[platform] || "Check out our latest update!";
}

function getRandomLikes() {
  return Math.floor(Math.random() * 1000) + 500;
}

function getRandomShares() {
  return Math.floor(Math.random() * 50) + 10;
}

// Social Media Feed Component
interface SocialFeedProps {
  title?: string;
  className?: string;
  limit?: number;
}

export function SocialFeed({ title = "Follow Our Journey", className = "", limit = 6 }: SocialFeedProps) {
  const sampleEmbeds: SocialEmbed[] = [
    {
      platform: 'youtube',
      url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube URL
      embedId: 'dQw4w9WgXcQ', // YouTube video ID for travel content
      caption: "🎬 NEW VIDEO: Complete guide to visiting Ghana - everything you need to know! From visa requirements to must-visit places 🇬🇭",
      username: '2206 Experiences',
      timestamp: '2 days ago',
      likes: 1250,
      views: 15600,
      shares: 89
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@2206experiences/video/1234567890',
      embedId: '1234567890',
      caption: "Travel packing tips that actually work! Save this for your next African adventure 🧳✈️ #TravelTips #PackingHacks",
      username: '@2206experiences',
      timestamp: '1 day ago',
      likes: 2340,
      shares: 156
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/p/sample1',
      caption: "Ghana trip highlights! The culture, the food, the people - everything was incredible! Swipe to see our group having the time of their lives 🇬🇭✨ #GhanaTrip #TravelCommunity",
      username: '@2206experiences',
      timestamp: '3 hours ago',
      likes: 892,
      shares: 45
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/watch?v=jNQXAC9IVRw', // Another example
      embedId: 'jNQXAC9IVRw',
      caption: "🌍 MOROCCO TRAVEL GUIDE: Budget breakdown, hidden gems, and insider tips for your first visit to Marrakech and beyond!",
      username: '2206 Experiences',
      timestamp: '1 week ago',
      likes: 980,
      views: 8300,
      shares: 67
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@2206experiences/video/9876543210',
      embedId: '9876543210',
      caption: "African foods you MUST try! Which one is your favorite? 🍛🌶️ Comment below! #AfricanFood #Foodie #TravelEats",
      username: '@2206experiences',
      timestamp: '5 days ago',
      likes: 5670,
      shares: 234
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/p/sample2',
      caption: "Community love! ❤️ Our travelers sharing their amazing experiences from our Egypt adventure. The pyramids hit different when you're with family! 🇪�⭐",
      username: '@2206experiences',
      timestamp: '4 days ago',
      likes: 1156,
      shares: 78
    }
  ];

  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">
          Stay connected with our community across all platforms
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleEmbeds.slice(0, limit).map((embed, index) => (
          <SocialEmbed key={index} embed={embed} />
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://instagram.com/2206experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Follow on Instagram
          </a>
          <a 
            href="https://tiktok.com/@2206experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Follow on TikTok
          </a>
          <a 
            href="https://youtube.com/@2206experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Subscribe on YouTube
          </a>
          <a 
            href="https://twitter.com/2206experiences"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Follow on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
