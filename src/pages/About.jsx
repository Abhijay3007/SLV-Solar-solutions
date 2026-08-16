import React from 'react';
import { Sun, CheckCircle, Activity, ShieldCheck, HelpCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import aboutSolarTeam from '../assets/images/about/about-solar-team.png';

const About = () => {
  return (
    <div className="bg-slate-50/50">
      
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
        <div className="absolute top-[-100%] right-[-20%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
            Learn More About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            About SLV Solar Solutions
          </h1>
          <p className="mt-3 text-sm md:text-base text-emerald-100/80 max-w-xl">
            Powering India with quality, trust, and sustainability. Your authorized partner in clean solar conversion.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <SectionHeading 
              overline="Your Trusted Partner" 
              title="Your Trusted Solar Partner"
              subtitle="Welcome to SLV Solar Solutions, your one-stop destination for high-quality solar energy solutions. As an authorized franchise of Riyansh Solar Power Plus Pvt Ltd, we are committed to making solar power accessible, affordable, and reliable for homes, businesses, and industries."
              align="left"
            />
            
            <p className="text-sm text-slate-600 leading-relaxed">
              At SLV Solar Solutions, we believe in powering a sustainable future by harnessing the unlimited energy of the sun. Our mission is to help individuals and businesses reduce electricity costs, achieve energy independence, and contribute to a cleaner environment. With a strong foundation in solar technology, expert engineering, and customer-centric service, we ensure that you get the best solar solutions tailored to your energy needs.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you want to install a solar panel system for your home or need a large-scale commercial solar project, we are here to help. We guide you through the process, source MNRE approved equipment (including panels with 25-years warrants), configure net metering adapters, and handle your government subsidy submissions.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-105 shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-primary">Authorized Franchise Partner</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-105 shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-primary">MNRE Sourced Modules</span>
              </div>
            </div>
          </div>

          {/* Sizing box / credentials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Team photo image next to narrative */}
            <div className="rounded-3xl overflow-hidden border border-emerald-100/50 shadow-md aspect-[16/10] bg-slate-800">
              <img
                src={aboutSolarTeam}
                alt="Professional Indian solar technician team working on rooftop solar installation"
                loading="lazy"
                width="400"
                height="250"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-100/50 shadow-md relative overflow-hidden text-center sm:text-left">
              <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-secondary/5 rounded-full blur-2xl" />
              <div className="bg-primary/5 p-4 rounded-2xl inline-block mb-6 text-primary">
                <Sun className="h-8 w-8 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <span className="block text-5xl font-black text-primary leading-none mb-1 font-mono">
                15+ Years
              </span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-secondary block mb-4">
                Of Industry Experience
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Applying extensive design frameworks, project civil engineers, and custom configuration software to ensure energy success.
              </p>
            </div>

            {/* Backed by block */}
            <div className="bg-primary hover:bg-primary-dark text-white rounded-3xl p-8 border border-emerald-950/20 shadow-md transition-colors duration-300">
              <h3 className="text-lg font-bold mb-2">Franchise backing</h3>
              <p className="text-xs text-emerald-150/90 leading-relaxed mb-6">
                All engineering, hardware sourcing, and installation checklists for SLV Solar Solutions are overseen and completed by Riyansh Solar Power Plus Pvt Ltd.
              </p>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
                <span>Core Engineering Partner</span>
                <span className="font-bold text-secondary text-right">Riyansh Solar Power</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision Rows */}
      <section className="py-20 bg-emerald-50/30 border-y border-emerald-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/50 shadow-sm relative group hover:border-emerald-250 transition-all duration-300">
              <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 pt-0.5">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-sm text-slate-655 leading-relaxed">
                To accelerate the adoption of clean and renewable energy by offering cost-effective, innovative, and high-quality solar solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100/50 shadow-sm relative group hover:border-emerald-250 transition-all duration-300">
              <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 pt-0.5">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-sm text-slate-655 leading-relaxed">
                To create a greener and self-sustainable future by making solar power the preferred energy source for every home and business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          overline="Guiding Principles" 
          title="Our Customer Commitment" 
          subtitle="Why hundreds of residential and commercial property owners trust SLV Solar Solutions to deliver clean power setups."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainable Sourcing",
              desc: "We prioritize panels, converters, and accessories that have verified warranties, offering steady output for decades."
            },
            {
              title: "Tailored Configurations",
              desc: "Every system is sized exactly to your usage history, eliminating wasteful spending on oversizing or performance drops."
            },
            {
              title: "Subsidy Support",
              desc: "We hold your hand from municipal filings, checking scheme qualifiers, through to final utility net-metering steps."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-105 shadow-sm text-center">
              <h4 className="text-lg font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton to="/contact" variant="primary">
            Connect With Our Engineers
          </CTAButton>
        </div>
      </section>

    </div>
  );
};

export default About;
