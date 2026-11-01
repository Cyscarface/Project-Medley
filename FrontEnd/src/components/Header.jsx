import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      {/* Main Navbar Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Left: Logo & Campus Selector */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Logo */}
            <a href="/" className="text-xl font-bold tracking-tight text-yellow-400">
              Campus<span className="text-gray-900">Hub</span>
            </a>
            {/* Campus Selector Badge */}
            <div className="hidden items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-gray-900 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              Main Campus
            </div>
          </div>

          {/* Center: Global Search Bar (Hidden on small mobile headers, shown below or on desktop) */}
          <div className="hidden max-w-md flex-1 md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search textbooks, electronics, services..."
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 pl-4 pr-10 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Actions & Profile (Desktop) */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Chat Icon */}
            <button className="relative rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition">
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </button>

            {/* Post Listing CTA */}
            <button className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 transition">
              + Post Listing
            </button>

            {/* Profile Avatar Trigger */}
            <button className="flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center font-bold text-white text-xs">
                S
              </div>
            </button>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pt-2 pb-4 md:hidden shadow-inner">
          {/* Mobile Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search items & services..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 outline-none"
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-1.5">
            <a href="/listings" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">
              Browse Listings
            </a>
            <a href="/messages" className="flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">
              <span>Messages</span>
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">1</span>
            </a>
            <a href="/profile" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              My Profile
            </a>
            
            {/* Mobile Post Button */}
            <div className="pt-3">
              <button className="w-full rounded-lg bg-yellow-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-600">
                + Post Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

