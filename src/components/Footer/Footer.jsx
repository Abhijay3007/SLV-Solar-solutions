import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import slvLogo from '../../assets/images/slv-logo.jpg';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-solarbg-dark text-slate-300 pt-16 pb-8 border-t border-emerald-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Info & Slogan */}
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={handleScrollToTop} className="inline-block group self-start">
              <div className="bg-white p-3.5 rounded-2xl border border-white/20 shadow-lg inline-block group-hover:scale-105 transition-transform">
                <img src={slvLogo} alt="SLV Solar Solutions Logo" className="h-20 sm:h-24 md:h-28 w-auto object-contain rounded-xl" />
              </div>
            </Link>
            <p className="text-[15px] sm:text-base text-slate-300 leading-relaxed pt-1">
              Empowering homes and businesses with sustainable, high-performance solar solutions. Trusted for quality, reliability, and a greener future.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 text-slate-300 hover:text-secondary bg-white/5 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 text-slate-300 hover:text-secondary bg-white/5 rounded-xl border border-white/10 hover:border-secondary/40 transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-5 border-b border-primary-light/35 pb-2 inline-block">
              Useful Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="text-slate-300 hover:text-secondary text-[15px] sm:text-base flex items-center space-x-2 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4 text-emerald-400/80 shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Services */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-5 border-b border-primary-light/35 pb-2 inline-block">
              More Services
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Products', path: '/products' },
                { name: 'Government Subsidy', path: '/government-subsidy' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="text-slate-300 hover:text-secondary text-[15px] sm:text-base flex items-center space-x-2 transition-colors duration-200"
                  >
                    <ArrowRight className="h-4 w-4 text-emerald-400/80 shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-1 border-b border-primary-light/35 pb-2 inline-block self-start">
              Get In Touch
            </h4>
            <ul className="space-y-4 pt-1">
              
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-bold text-white text-[15px] sm:text-base mb-0.5">Location:</span> 
                  <span className="text-slate-300 text-sm sm:text-[15px] leading-relaxed block">{BUSINESS_INFO.locationFull}</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-bold text-white text-[15px] sm:text-base mb-0.5">Business Hours:</span>
                  <span className="text-slate-300 text-sm sm:text-[15px] leading-relaxed block">{BUSINESS_INFO.workingHours}</span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-bold text-white text-[15px] sm:text-base mb-0.5">Call Us:</span>
                  <a href={BUSINESS_INFO.phoneTel} className="text-slate-300 hover:text-secondary hover:underline text-sm sm:text-[15px] font-semibold transition-all inline-block">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-bold text-white text-[15px] sm:text-base mb-0.5">Email:</span>
                  <a href={BUSINESS_INFO.emailMailto} className="text-slate-300 hover:text-secondary hover:underline text-sm sm:text-[15px] transition-all break-all sm:break-normal inline-block">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Foot Bottom */}
        <div className="pt-8 mt-8 border-t border-emerald-950/65 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© SLV Solar Solutions | All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/contact" onClick={handleScrollToTop} className="hover:text-secondary transition-colors">Contact Us</Link>
            <span>•</span>
            <Link to="/services" onClick={handleScrollToTop} className="hover:text-secondary transition-colors">Our Services</Link>
            <span>•</span>
            <Link to="/products" onClick={handleScrollToTop} className="hover:text-secondary transition-colors">Our Products</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
