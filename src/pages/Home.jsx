import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sun, Shield, CheckCircle, HelpCircle, 
  MapPin, Clock, Phone, Mail, ArrowRight,
  TrendingUp, Users, Award, Headphones
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import heroResidentialSolar from '../assets/images/hero/hero-residential-solar.png';
import { SERVICES, WHY_CHOOSE_US, BENEFITS, PROCESS_STEPS, PRODUCTS } from '../data/solarData';

const Home = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50/50">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-solarbg-dark to-primary-dark text-white pt-24 pb-20 md:pt-32 md:pb-28">
        
        {/* Glow visual effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        
        {/* Light grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 self-center lg:self-start bg-primary-light/35 border border-primary-light/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secondary-light">
                <Sun className="h-4 w-4 animate-spin text-secondary" style={{ animationDuration: '6s' }} />
                <span>Authorized Franchise Riyansh Solar</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Power Your Future With <span className="text-secondary">Clean Solar Energy</span>
              </h1>
              
              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                SLV Solar Solutions provides reliable, high-performance, and eco-friendly solar solutions for homes and businesses across India. Join the green revolution today!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
                <CTAButton to="/contact" variant="secondary" className="w-full sm:w-auto">
                  Get Free Consultation
                </CTAButton>
                <CTAButton to="/products" variant="outline" className="w-full sm:w-auto !border-emerald-300/40 !text-emerald-100 hover:!bg-white/10">
                  Explore Solar Solutions
                </CTAButton>
              </div>

              {/* Small trust features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 text-xs tracking-wider uppercase font-bold text-slate-300">
                <div>
                  <span className="block text-secondary font-extrabold text-lg leading-none mb-1">✓</span>
                  Residential
                </div>
                <div>
                  <span className="block text-secondary font-extrabold text-lg leading-none mb-1">✓</span>
                  Commercial
                </div>
                <div>
                  <span className="block text-secondary font-extrabold text-lg leading-none mb-1">✓</span>
                  Expert Install
                </div>
                <div>
                  <span className="block text-secondary font-extrabold text-lg leading-none mb-1">✓</span>
                  Subsidy Assistance
                </div>
              </div>
            </div>

            {/* Right Column - Contextual Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-none rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-square bg-slate-800">
                <img
                  src={heroResidentialSolar}
                  alt="Modern Indian home with professional rooftop solar panel installation"
                  loading="eager"
                  className="w-full h-full object-cover"
                  width="500"
                  height="500"
                />
                
                {/* Float Badge overlay to maintain premium visual elements */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-primary-dark/60 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">Switch Today, Save Tomorrow</h4>
                    <p className="text-[10px] text-emerald-100/80">Take advantage of PM Surya Ghar subsidy schemes.</p>
                  </div>
                  <div className="flex items-center space-x-2 bg-secondary/20 py-1.5 px-3 rounded-full border border-secondary/30 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[9px] uppercase font-bold tracking-wider text-secondary">Approved</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / STATS SECTION */}
      <section className="bg-white py-12 border-b border-slate-100 relative z-10 -mt-6 rounded-t-[32px] sm:rounded-t-[48px] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center p-4">
              <Award className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-extrabold text-[#0f4c3a] text-lg">Quality Solar Solutions</h4>
              <p className="text-xs text-slate-500 mt-1">Certified tier-1 hardware assets</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pt-8 lg:pt-4">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-extrabold text-[#0f4c3a] text-lg">Professional Installation</h4>
              <p className="text-xs text-slate-500 mt-1">Code-compliant structural mounts</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pt-8 lg:pt-4">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-extrabold text-[#0f4c3a] text-lg">Customized Systems</h4>
              <p className="text-xs text-slate-500 mt-1">Sized based on consumption</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pt-8 lg:pt-4">
              <Headphones className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-extrabold text-[#0f4c3a] text-lg">After-Sales Support</h4>
              <p className="text-xs text-slate-500 mt-1">Washing guides & diagnostics</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLAR SOLUTIONS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          overline="Complete Offerings" 
          title="Complete Solar Solutions For Every Need"
          subtitle="Discover our range of solar panels, conversions, heaters, lighting systems, and customized turn-key project engineering."
        />
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE SLV SOLAR SOLUTIONS */}
      <section className="py-20 bg-primary bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary-light to-primary-dark text-white rounded-[40px] md:rounded-[64px] my-10 mx-4 sm:mx-8 px-4 sm:px-10 relative overflow-hidden">
        
        <div className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <SectionHeading 
            overline="Why Choose Us" 
            title="What Makes SLV Solar Stand Out"
            subtitle="Backed by Riyansh Solar Power Plus Pvt Ltd. We ensure you get original warranties, customized sizing, and hassle-free assistance."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="h-10 w-10 bg-secondary/15 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-3 font-mono">
                  {item.description}
                </span>
                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLAR SAVINGS / BENEFITS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          overline="Solar Advantages" 
          title="Switching to Solar: The Benefits"
          subtitle="Harnessing clean light energy provides instant financial returns, safeguards against utility hikes, and sustains the environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((bft, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 border border-slate-105 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-5"
            >
              <div className="bg-emerald-50 p-3 rounded-2xl text-primary shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{bft.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{bft.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GOVERNMENT SUBSIDY SECTION */}
      <section className="py-20 bg-emerald-50/50 border-y border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] border border-emerald-100 p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden relative">
            
            {/* Accent backdrop */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-2xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
              <div className="lg:col-span-8 flex flex-col space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-primary block font-mono">
                  Financial Aid Guidance
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                  Get Assistance With Government Solar Subsidies
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  availing clean solar power is now more affordable than ever. Homeowners under government schemes can access significant subsidy returns. We assist in filing files, obtaining site clearances, and enabling net metering connectivity.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 pt-2">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Muft Bijli Scheme Assistance</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Net Metering Calibrations</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Approved Solar Panels</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <CTAButton to="/government-subsidy" variant="primary" className="shadow-lg">
                  Learn About Subsidy
                </CTAButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          overline="Implementation Process" 
          title="Executing Your Solar Journey in 4 Steps"
          subtitle="Our structured project pipeline takes care of everything from initial cost sizing to final utility handovers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-105 shadow-sm relative group hover:border-emerald-250 transition-colors">
              <span className="block text-4xl sm:text-5xl font-black text-emerald-100 font-mono mb-6 group-hover:text-secondary-light transition-colors">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PRODUCTS showcase preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
              Product Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              Featured Solar Hardware
            </h2>
            <span className="block h-1 w-16 bg-secondary mt-3 rounded-full" />
          </div>
          <CTAButton to="/products" variant="outline" className="mt-4 md:mt-0 !py-3">
            View All Products
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Show top 3 products on homepage */}
          {[
            {
              id: 'solar-panel-epc',
              name: 'Solar Panel System (EPC Setup)',
              category: 'Solar Panels',
              iconName: 'sun',
              description: 'Engineered, procured, and installed by Riyansh Solar Power Plus Pvt Ltd. High performance solar output for years to come.',
              warranties: [
                'Panel -- 25 Years of Performance Warranty',
                'Inverter -- 5 Years + Extended Warranty Package'
              ]
            },
            {
              id: 'solar-diy-package',
              name: 'DIY Grid Solar System Package',
              category: 'Grid DIY',
              iconName: 'settings',
              description: 'Ready-to-assemble DIY package containing all matching materials to setup a grid connected solar station on your own terms. Installation is not included.',
              warranties: [
                'Panel -- 25 Years of Performance Warranty',
                'Inverter -- 2 Years + Extended Warranty Package',
                'Battery -- 2 Years DIY Ready Package'
              ]
            },
            {
              id: 'water-pump-system',
              name: 'Solar Water Pump System',
              category: 'Water Pump',
              iconName: 'droplet',
              description: 'Solar powered pumps ideal for farming, irrigation, and deep-borewells. Includes controller. Mount structure, pipes and installation can be provided at additional cost by Riyansh Solar.',
              warranties: [
                'Panel -- 25 Years of Performance Warranty',
                'Pump -- 1 Year + Extended Warranty',
                'Controller -- 1 Year + Extended Warranty'
              ]
            }
          ].map((prod) => {
            const dbProduct = PRODUCTS.find(p => p.id === prod.id);
            const image = dbProduct?.image;
            const isContextual = prod.name.toLowerCase().includes('pump') || prod.name.toLowerCase().includes('diy');
            
            return (
              <div key={prod.id} className="bg-white rounded-3xl overflow-hidden border border-emerald-100/50 shadow-sm flex flex-col h-full hover:shadow-lg transition-all group">
                
                {/* Product Image */}
                {image && (
                  <div className="w-full aspect-square bg-slate-50/50 flex items-center justify-center overflow-hidden border-b border-emerald-50">
                    <img
                      src={image}
                      alt={`SLV Solar product - ${prod.name}`}
                      loading="lazy"
                      width="400"
                      height="400"
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105 animate-fadeIn"
                      style={{ objectFit: isContextual ? 'cover' : 'contain', padding: isContextual ? '0' : '2rem' }}
                    />
                  </div>
                )}

                <div className="p-6 pb-2 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/5 p-3 rounded-2xl">
                      <Sun className="h-6 w-6 text-secondary" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-primary px-3 py-1 rounded-full">
                      {prod.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{prod.name}</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">{prod.description}</p>
                  <div className="space-y-1.5 border-t border-slate-50 pt-4">
                    {prod.warranties.map((w, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs">
                        <span className="text-[#0f4c3a] font-bold text-[10px]">✓</span>
                        <span className="text-slate-655">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-2 bg-slate-50/50 border-t border-slate-100">
                  <button
                    onClick={() => {
                      navigate('/contact', { state: { presetRequirement: `Inquiry: ${prod.name}` } });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-center bg-white hover:bg-primary hover:text-white border border-primary/20 text-primary py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Enquire Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. CALL TO ACTION banner */}
      <section className="bg-primary text-white py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light opacity-80" />
        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto flex flex-col space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready To Switch To Solar?
          </h2>
          <p className="text-base text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
            Talk to our solar experts and find the right solution for your energy needs. Schedule a free structure site assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <CTAButton to="/contact" variant="secondary" className="w-full sm:w-auto">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="tel:+919353082680" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
              Call Now: 93530 82680
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
                Connect Directly
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Get in Touch with SLV Solar Solutions
              </h2>
              <span className="block h-1 w-16 bg-secondary mt-3 rounded-full" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed pt-2">
              We are dedicated to providing sustainable, cost-effective, and reliable solar energy solutions. Drop us an inquiry message or reach out via phone/email, and we will get back to you immediately.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              
              {/* Address card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Office Address</h4>
                  <p className="text-xs text-slate-500 mt-1">Banglore – 411051, Karnataka, India</p>
                </div>
              </div>

              {/* Contact card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Email Support</h4>
                  <a href="mailto:manojpradeep586@gmail.com" className="text-xs text-slate-500 hover:text-primary hover:underline mt-1 block">
                    manojpradeep586@gmail.com
                  </a>
                </div>
              </div>

              {/* Call card */}
              <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-105 shadow-sm">
                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Direct Call / WhatsApp</h4>
                  <a href="tel:+919353082680" className="text-xs text-slate-500 hover:text-primary hover:underline mt-1 block">
                    +91 93530 82680
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
                  <p className="text-xs text-slate-500 mt-1">Sunday - Friday: 9 am - 8 pm (Saturday Closed)</p>
                </div>
              </div>

            </div>

            {/* Google maps placeholder */}
            <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-6 flex flex-col justify-between items-center text-center">
              <span className="text-xs uppercase font-extrabold text-primary block tracking-wider mb-2">Location Map (Bangalore)</span>
              <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed mb-4">
                View our installation center coverage map area spanning Bangalore and neighboring municipalities.
              </p>
              <a 
                href="https://maps.google.com/?q=Bangalore" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-1.5 text-xs text-primary hover:text-secondary font-bold uppercase tracking-wider"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
