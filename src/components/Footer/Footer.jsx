import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-solarbg-dark text-slate-300 pt-16 pb-8 border-t border-emerald-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Info & Slogan */}
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center space-x-2">
              <div className="bg-primary text-secondary p-2 rounded-xl">
                <Sun className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">SLV SOLAR</span>
                <span className="text-[9px] uppercase font-semibold text-secondary block tracking-wider leading-none mt-1">Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Empowering homes and businesses with sustainable, high-performance solar solutions. Trusted across India for quality, reliability, and a greener future.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-secondary block">Authorized Franchise</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">Riyansh Solar Power Plus Pvt Ltd</span>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5 border-b border-primary-light/35 pb-2 inline-block">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About US', path: '/about' },
                { name: 'Services', path: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="text-slate-400 hover:text-secondary text-sm flex items-center space-x-1.5 transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Services */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5 border-b border-primary-light/35 pb-2 inline-block">
              More Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Products', path: '/products' },
                { name: 'Government Subsidy', path: '/government-subsidy' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleScrollToTop}
                    className="text-slate-400 hover:text-secondary text-[#f1f5f9] text-sm flex items-center space-x-1.5 transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-1 border-b border-primary-light/35 pb-2 inline-block self-start">
              Get In Touch
            </h4>
            <ul className="space-y-3 pt-1">
              
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-450">
                  <span className="block font-semibold text-white">Location:</span> 
                  Banglore – 411051
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-450">
                  <span className="block font-semibold text-white font-sans">Business Hours:</span>
                  Sunday - Friday: 9 am - 8 pm
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="block font-semibold text-white">Call Us:</span>
                  <a href="tel:+919353082680" className="text-slate-305 hover:text-secondary hover:underline transition-all">
                    93530 82680
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="block font-semibold text-white">Email:</span>
                  <a href="mailto:manojpradeep586@gmail.com" className="text-slate-305 hover:text-secondary hover:underline transition-all break-all">
                    manojpradeep586@gmail.com
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Foot Bottom */}
        <div className="pt-8 mt-8 border-t border-emerald-950/65 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© riyanshsolarpowerplus | All Rights Reserved</p>
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
