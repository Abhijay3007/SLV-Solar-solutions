import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sun, Wrench, Shield, CheckCircle, Clock, 
  ArrowRight, PhoneCall, HelpCircle 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTAButton from '../components/CTAButton';
import { SERVICES } from '../data/solarData';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceEnquire = (serviceName) => {
    navigate('/contact', { state: { presetRequirement: `Service Inquiry: ${serviceName}` } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50/50">
      
      {/* 1. Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
        <div className="absolute top-[-100%] right-[-20%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
            Professional Offerings
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Solar Services
          </h1>
          <p className="mt-3 text-sm md:text-base text-emerald-100/80 max-w-2xl">
            Powering your future with clean solar conversion systems designed for residential homes, businesses, and industrial facilities.
          </p>
        </div>
      </section>

      {/* 2. Services detailed list */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-20">
          {SERVICES.map((srv, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={srv.id} 
                id={srv.id} 
                className="scroll-mt-24 bg-white rounded-3xl border border-slate-105 shadow-sm p-6 sm:p-10 lg:p-12 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 flex flex-col space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div>
                      <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-secondary-dark bg-yellow-50 px-3.5 py-1.5 rounded-full border border-yellow-100 mb-3 inline-block">
                        Service Profile {index + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                        {srv.title}
                      </h2>
                    </div>

                    {/* Supporting Image */}
                    {srv.image && (
                      <div className="w-full aspect-[16/10] sm:aspect-[16/9] h-auto rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                        <img
                          src={srv.image}
                          alt={`SLV Solar Service - ${srv.title}`}
                          loading="lazy"
                          className={`w-full h-full object-cover ${
                            srv.title.toLowerCase().includes('street') || srv.title.toLowerCase().includes('maintenance')
                              ? 'object-top'
                              : 'object-center'
                          }`}
                        />
                      </div>
                    )}

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Benefits list */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs uppercase font-extrabold tracking-wider text-primary">Benefits & Advantages</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {srv.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-4">
                      <button
                        onClick={() => handleServiceEnquire(srv.title)}
                        className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all active:scale-97"
                      >
                        <span>Schedule Site Evaluation</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Process/Workflow list Column */}
                  <div className={`lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6 pb-2 border-b border-slate-200">
                      Implementation Process
                    </h3>
                    <div className="relative border-l border-emerald-200/60 pl-6 ml-2 space-y-6">
                      {srv.process.map((step, sIdx) => (
                        <div key={sIdx} className="relative">
                          {/* Circle dot marker */}
                          <div className="absolute top-0.5 left-[-31px] h-4 w-4 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          </div>
                          <span className="text-[10px] font-bold text-secondary uppercase font-mono block mb-0.5">
                            Step {sIdx + 1}
                          </span>
                          <p className="text-xs font-semibold text-slate-700 leading-snug">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Summary Banner with CTAs */}
      <section className="bg-primary text-white py-16 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-4xl mx-auto flex flex-col space-y-5">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Switch to Sustainable Solar Sizing
          </h2>
          <p className="text-sm text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
            All solar project configurations and installation checks details are backed by our core engine collaborator: Riyansh Solar Power Plus Pvt Ltd.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <CTAButton to="/contact" variant="secondary" className="w-full sm:w-auto">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="tel:+919353082680" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
              Call Support: 93530 82680
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
