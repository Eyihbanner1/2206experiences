'use client';

import React from 'react';

interface SearchFiltersProps {
  onLocationChange: (location: string) => void;
  onPriceChange: (priceRange: string) => void;
  onDurationChange: (duration: string) => void;
  onTypeChange: (type: string) => void;
}

export default function SearchFilters({
  onLocationChange,
  onPriceChange,
  onDurationChange,
  onTypeChange,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Your Perfect Trip</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <select
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Destinations</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="americas">Americas</option>
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            onChange={(e) => onPriceChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Budget</option>
            <option value="budget">Under £500</option>
            <option value="mid">£500 - £1000</option>
            <option value="premium">£1000+</option>
          </select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trip Length
          </label>
          <select
            onChange={(e) => onDurationChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Any Duration</option>
            <option value="short">1-3 days</option>
            <option value="medium">4-7 days</option>
            <option value="long">8+ days</option>
          </select>
        </div>

        {/* Trip Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trip Type
          </label>
          <select
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural</option>
            <option value="relaxation">Relaxation</option>
            <option value="family">Family-Friendly</option>
            <option value="solo">Solo Travel</option>
            <option value="women">Women&apos;s Retreats</option>
          </select>
        </div>
      </div>

      {/* Quick Search Tags */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">Popular Searches:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Weekend Getaway',
            'Cultural Experience',
            'Adventure Trip',
            'Solo Friendly',
            'Photography Tours',
            'Food & Wine',
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              onClick={() => {
                // Handle quick search tag clicks
                console.log(`Quick search: ${tag}`);
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
