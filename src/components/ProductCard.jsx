import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Fan, Sparkles, Sun, Battery, Settings, Droplet } from 'lucide-react';
import CTAButton from './CTAButton';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { id, name, category, warranties, iconName, description, image } = product;

  // Dynamically select icon based on string key
  const getIcon = (icon) => {
    switch (icon) {
      case 'sun': return <Sun className="h-6 w-6 text-secondary" />;
      case 'battery': return <Battery className="h-6 w-6 text-secondary" />;
      case 'fan': return <Fan className="h-6 w-6 text-secondary" />;
      case 'settings': return <Settings className="h-6 w-6 text-secondary" />;
      case 'sparkles': return <Sparkles className="h-6 w-6 text-secondary" />;
      case 'droplet': return <Droplet className="h-6 w-6 text-secondary" />;
      default: return <Sun className="h-6 w-6 text-secondary" />;
    }
  };

  const handleInquire = () => {
    // Navigate to contact, passing state so the contact form requirements field changes automatically!
    navigate('/contact', { state: { presetRequirement: `Inquiry: ${name} (${category})` } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
      
      {image && (
        <div className="w-full aspect-square bg-slate-50/50 flex items-center justify-center overflow-hidden border-b border-emerald-50 relative">
          {/* Ambient blurred backdrop to fill the square frame */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-lg opacity-40 scale-110 pointer-events-none"
          />
          {/* Centered foreground image - 100% visible */}
          <img
            src={image}
            alt={`SLV Solar product image for ${name}`}
            loading="lazy"
            width="400"
            height="400"
            className="w-full h-full object-contain p-3 relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Icon Card Top */}
      <div className="p-6 pb-2 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-350">
            {/* Make icon color adjust on group hover */}
            <div className="group-hover:text-secondary transition-colors">
              {getIcon(iconName)}
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-primary px-3 py-1 rounded-full border border-emerald-100/50">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1 group-hover:text-primary-light transition-colors">
          {name}
        </h3>
        
        {description && (
          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-4">
            {description}
          </p>
        )}

        {/* Warranties */}
        <div className="space-y-2 border-t border-slate-50 pt-4 mt-2">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 block mb-1">
            Warranty & Coverage
          </span>
          {warranties.map((warranty, index) => (
            <div key={index} className="flex items-start space-x-2 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{warranty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-2 bg-slate-50/50 border-t border-slate-100/60">
        <button
          onClick={handleInquire}
          className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-primary hover:text-white text-primary text-xs font-extrabold uppercase tracking-widest py-3 px-4 rounded-xl border border-primary/20 transition-all duration-200 group-hover:shadow-md active:scale-97"
        >
          <span>Enquire Details</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
