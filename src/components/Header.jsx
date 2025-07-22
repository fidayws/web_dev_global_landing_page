import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 px-4">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-600">Global Yaam Web Solutions</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors ">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary-600 transition-colors">Portfolio</a>
              <a href="#process" className="text-gray-700 hover:text-primary-600 transition-colors">Process</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Reviews</a>
              <a href="#contact" className="btn-primary">Get Free Quote</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Portfolio</a>
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Process</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Reviews</a>
              <a href="#contact" className="block px-3 py-2 btn-primary text-center">Get Free Quote</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;