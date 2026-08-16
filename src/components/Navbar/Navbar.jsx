import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, PhoneCall } from 'lucide-react';

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
        ? 'glass-nav shadow-md py-3 border-b border-emerald-150' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Branding */}
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="bg-primary text-secondary p-2 rounded-xl group-hover:scale-105 transition-transform">
              <Sun className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-primary block leading-none">SLV SOLAR</span>
              <span className="text-[10px] uppercase font-semibold text-secondary block tracking-wider leading-none mt-1">Solutions</span>
            </div>
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

          {/* Consultation CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+919353082680" 
              className="text-slate-600 hover:text-primary flex items-center space-x-1.5 text-sm font-semibold transition-colors duration-200"
            >
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>93530 82680</span>
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
              href="tel:+919353082680"
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
              <a 
                href="tel:+919353082680" 
                className="flex items-center justify-center space-x-2 text-primary bg-slate-50 py-3 rounded-xl text-sm font-bold border border-slate-100"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call: 93530 82680</span>
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
