import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const routerLocation = useLocation();

  // Retrieve routing preset state if passed from ProductCard or ServiceCard
  const presetRequirement = routerLocation.state?.presetRequirement || '';

  return (
    <div className="bg-slate-50/50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
        <div className="absolute top-[-100%] right-[-20%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
            Get in touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-sm md:text-base text-emerald-100/80 max-w-xl">
            We are here to help you switch to clean, green solar energy with ease. Reach out to our experts.
          </p>
        </div>
      </section>

      {/* Main Forms & info grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info cards (5cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">Connect Directly</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Get in Touch with SLV Solar Solutions</h2>
              <span className="block h-1 w-16 bg-secondary mt-3 rounded-full" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed pt-1">
              Whether you have questions about our solar fans, DIY battery packages, net metering regulations, or want a customized EPC project sizing, our team is ready to assist you.
            </p>

            {/* Touch contacts cards */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              
              {/* Address card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Our Location</h4>
                  <p className="text-xs text-slate-500 mt-1">Banglore – 411051, Karnataka, India</p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Phone Numbers</h4>
                  <a href="tel:+919353082680" className="text-xs text-slate-500 hover:text-primary hover:underline mt-1 block">
                    93530 82680
                  </a>
                </div>
              </div>

              {/* Mail card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Email Address</h4>
                  <a href="mailto:manojpradeep586@gmail.com" className="text-xs text-slate-500 hover:text-primary hover:underline mt-1 block">
                    manojpradeep586@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Business Hours</h4>
                  <p className="text-xs text-slate-505 mt-1 font-sans">Sunday - Friday: 9 am - 8 pm (Saturday Closed)</p>
                </div>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-100/50 shadow-sm flex flex-col space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#0f4c3a] block">Quick Links</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919353082680"
                  className="flex items-center justify-center space-x-1.5 bg-slate-50 hover:bg-primary hover:text-white border border-slate-150 py-3 rounded-xl text-xs font-bold text-primary uppercase transition-colors"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919353082680?text=Hi,%20I'm%20interested%20in%20solar%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-slate-50 hover:bg-emerald-580 hover:text-white border border-slate-150 py-3 rounded-xl text-xs font-bold text-primary uppercase transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Form column (7cols) */}
          <div className="lg:col-span-7">
            <ContactForm presetRequirement={presetRequirement} />
          </div>

        </div>

      </section>

      {/* Google maps container */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            overline="Map Location" 
            title="Locate SLV Solar Solutions" 
            subtitle="Serving residential homes, factories, and utility installations across Bangalore, Karnataka, India."
          />
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 h-96 max-w-5xl mx-auto bg-slate-100 flex items-center justify-center text-center p-8">
            {/* Visual map representation placeholder */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-75" />
            <div className="relative z-10 flex flex-col items-center max-w-sm">
              <MapPin className="h-12 w-12 text-primary mb-4 animate-bounce" />
              <h4 className="font-bold text-primary text-xl">Bangalore, Karnataka, India</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-6">
                Our site surveyor network travels to your location in Bengaluru and neighboring regions to evaluate roof load capabilities.
              </p>
              <a 
                href="https://maps.google.com/?q=Bangalore" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-primary hover:bg-primary-light text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all active:scale-97"
              >
                Directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
