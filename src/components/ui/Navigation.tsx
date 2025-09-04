'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface DropdownNavItem {
  label: string;
  items: NavItem[];
}

type NavigationItem = NavItem | DropdownNavItem;

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Travel',
    items: [
      { label: 'Trips & Adventures', href: '/trips' },
      { label: 'Events', href: '/events' },
      { label: 'Travel Club', href: '/travel-club' },
      { label: 'Booking', href: '/booking' }
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Consultations', href: '/consultations' }
    ]
  },
  {
    label: 'Shop & Partner',
    items: [
      { label: 'Merchandise', href: '/merch' },
      { label: 'Partnerships', href: '/partnerships' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isActiveDropdown = (items: NavItem[]) => {
    return items.some(item => isActiveLink(item.href));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className={`bg-white shadow-sm border-b border-gray-100 ${className}`}>
      <div className="container-2206">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2206</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                <span className="gradient-text">2206 Experiences</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation & User Menu */}
          <div className="hidden md:flex items-center space-x-4" ref={dropdownRef}>
            <div className="flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                // Check if this is a dropdown item
                if ('items' in item) {
                  return (
                    <div key={item.label} className="relative">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`${
                          isActiveDropdown(item.items)
                            ? 'nav-link-active'
                            : 'nav-link'
                        } flex items-center space-x-1`}
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 backdrop-blur-sm bg-white/95 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 duration-200">
                          {item.items.map((subItem, index) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm transition-all duration-200 ease-in-out transform hover:scale-[1.02] ${
                                isActiveLink(subItem.href)
                                  ? 'bg-purple-50 text-purple-700 font-medium border-l-2 border-purple-500 shadow-sm'
                                  : 'text-gray-700 hover:bg-purple-50/50 hover:text-purple-600 hover:pl-5'
                              }`}
                              style={{ 
                                animationDelay: `${index * 25}ms`,
                                animationFillMode: 'both'
                              }}
                              target={subItem.external ? '_blank' : undefined}
                              rel={subItem.external ? 'noopener noreferrer' : undefined}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <span className="flex items-center justify-between">
                                {subItem.label}
                                {subItem.external && (
                                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  // Regular navigation item
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        isActiveLink(item.href)
                          ? 'nav-link-active'
                          : 'nav-link'
                      }
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>

            {/* Join Travel Club Button */}
            <div className="flex items-center ml-6">
              <Link
                href="/travel-club"
                className="btn-primary text-sm"
              >
                Join Travel Club
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-sm rounded-2xl mt-3 border border-gray-100 shadow-lg mx-2">
            {navigationItems.map((item, itemIndex) => {
              // Check if this is a dropdown item
              if ('items' in item) {
                return (
                  <div key={item.label} className="space-y-2">
                    <div className="px-4 py-3 text-sm font-semibold text-purple-600 bg-purple-50/80 rounded-xl border border-purple-100">
                      {item.label}
                    </div>
                    <div className="space-y-1 pl-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`
                            block pl-6 pr-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-[1.02]
                            ${isActiveLink(subItem.href)
                              ? 'text-purple-700 bg-purple-100 shadow-sm border-l-2 border-purple-500'
                              : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/70 hover:pl-7'
                            }
                          `}
                          style={{ 
                            animationDelay: `${(itemIndex * 50) + (subIndex * 25)}ms`,
                          }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                        >
                          <span className="flex items-center justify-between">
                            {subItem.label}
                            {subItem.external && (
                              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                // Regular navigation item
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 transform hover:scale-[1.02]
                      ${isActiveLink(item.href)
                        ? 'text-purple-700 bg-purple-100 shadow-sm'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/70'
                      }
                    `}
                    style={{ 
                      animationDelay: `${itemIndex * 50}ms`,
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}
            
            {/* Mobile Join Travel Club Button */}
            <div className="pt-4 mt-4 border-t border-gray-200/60">
              <Link
                href="/travel-club"
                className="flex items-center justify-center w-full py-4 px-6 text-center font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mr-2">Join Travel Club</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Breadcrumb Component
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg 
                className="flex-shrink-0 mx-1 w-5 h-5 text-gray-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
            
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
              >
                {index === 0 && (
                  <svg className="flex-shrink-0 mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                )}
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-purple-600">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
