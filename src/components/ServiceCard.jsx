import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Sun, Power, Droplet, Lightbulb, Activity } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const { id, title, description, href, iconName, image } = service;

  const getIcon = (icon) => {
    switch (icon) {
      case 'wrench': return <Wrench className="h-6 w-6 text-primary" />;
      case 'sun': return <Sun className="h-6 w-6 text-primary" />;
      case 'power': return <Power className="h-6 w-6 text-primary" />;
      case 'droplet': return <Droplet className="h-6 w-6 text-primary" />;
      case 'lightbulb': return <Lightbulb className="h-6 w-6 text-primary" />;
      case 'activity': return <Activity className="h-6 w-6 text-primary" />;
      default: return <Sun className="h-6 w-6 text-primary" />;
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-emerald-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        {/* Support Image */}
        {image && (
          <div className="w-full aspect-[16/10] h-auto rounded-2xl overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
            <img
              src={image}
              alt={`SLV Solar service - ${title}`}
              loading="lazy"
              width="300"
              height="176"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                title.toLowerCase().includes('street') || title.toLowerCase().includes('maintenance')
                  ? 'object-top'
                  : 'object-center'
              }`}
            />
          </div>
        )}

        {/* Icon wrapper */}
        <div className="bg-primary/5 p-4 rounded-2xl inline-block mb-6 group-hover:bg-primary transition-all duration-300">
          <div className="group-hover:text-secondary transition-colors">
            {getIcon(iconName)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-3">
          {title}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="border-t border-slate-50 pt-5">
        <Link
          to={href}
          onClick={handleScrollToTop}
          className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-200"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1Z group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
