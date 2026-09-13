import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import slvLogo from '../../assets/images/slv-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Government Subsidy', path: '/government-subsidy' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav shadow-md py-2 border-b border-emerald-150' 
        : 'bg-white py-3 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Branding */}
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="flex items-center group focus:outline-none py-1"
          >
            <img 
              src={slvLogo} 
              alt="SLV Solar Solutions Logo" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 rounded-lg"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`relative font-medium text-sm transition-colors duration-200 py-2 focus:outline-none ${
                    isActive 
                      ? 'text-primary font-bold' 
                      : 'text-slate-650 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Consultation CTA & Social Media Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r border-slate-200 pr-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="p-1.5 text-slate-500 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-slate-50"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-1.5 text-slate-500 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-slate-50"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>

            <a 
              href={BUSINESS_INFO.phoneTel} 
              className="text-slate-600 hover:text-primary flex items-center space-x-1.5 text-sm font-semibold transition-colors duration-200"
            >
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-emerald-900/10 active:scale-95"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href={BUSINESS_INFO.phoneTel}
              className="p-2 text-primary focus:outline-none"
              aria-label="Call SLV Solar Solutions"
            >
              <PhoneCall className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-base font-semibold py-2 transition-all border-b border-slate-50 ${
                    isActive 
                      ? 'text-primary pl-2 border-l-4 border-secondary' 
                      : 'text-slate-600 hover:text-primary hover:pl-2'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex justify-center space-x-4 pb-2 border-b border-slate-100">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                  className="p-2 text-slate-600 hover:text-primary bg-slate-50 rounded-full border border-slate-100"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="p-2 text-slate-600 hover:text-primary bg-slate-50 rounded-full border border-slate-100"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <a 
                href={BUSINESS_INFO.phoneTel} 
                className="flex items-center justify-center space-x-2 text-primary bg-slate-50 py-3 rounded-xl text-sm font-bold border border-slate-100"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="bg-primary hover:bg-primary-light text-white text-center py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider shadow-md"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
