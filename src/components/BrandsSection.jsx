import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_CATEGORIES, BRANDS_DATA } from '../data/brandsData';

const BrandLogoCard = ({ brand }) => {
  return (
    <div className="flex-shrink-0 w-48 sm:w-56 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center group h-36 select-none relative overflow-hidden">
      
      {/* Top accent badge */}
      <div className="w-full flex items-center justify-between text-[10px] font-semibold text-slate-400 border-b border-slate-100 pb-2 mb-2">
        <span className="text-emerald-700 bg-emerald-50 font-mono px-2 py-0.5 rounded-full border border-emerald-100/60 font-bold uppercase tracking-wider text-[9px]">
          {brand.category}
        </span>
        <span className="flex items-center text-amber-500 font-medium">
          <Zap className="h-3 w-3 mr-0.5 fill-current" />
          Certified
        </span>
      </div>

      {/* Brand logo/name display */}
      <div className="w-full flex-1 flex flex-col items-center justify-center my-1">
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/70 flex items-center justify-center mb-1.5 group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300 shadow-xs">
              <Award className="h-4 w-4 text-emerald-700 group-hover:text-white transition-colors" />
            </div>
            <span className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight group-hover:text-emerald-700 transition-colors line-clamp-1">
              {brand.name}
            </span>
          </div>
        )}
      </div>

      {/* Bottom verified badge */}
      <div className="w-full pt-1.5 border-t border-slate-50 flex items-center justify-center space-x-1">
        <ShieldCheck className="h-3 w-3 text-emerald-600" />
        <span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
          Authorized Partner
        </span>
      </div>
    </div>
  );
};

const BrandsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Get brands based on active category
  const getDisplayBrands = () => {
    if (activeCategory === 'all') {
      const allBrands = [];
      Object.values(BRANDS_DATA).forEach(list => {
        list.forEach(item => {
          if (!allBrands.some(b => b.id === item.id || b.name.toLowerCase() === item.name.toLowerCase())) {
            allBrands.push(item);
          }
        });
      });
      return allBrands;
    }
    return BRANDS_DATA[activeCategory] || [];
  };

  const displayBrands = getDisplayBrands();

  // Create duplicated list for infinite scrolling loop
  const sliderBrands = [...displayBrands, ...displayBrands, ...displayBrands];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isPaused && container) {
        if (container.scrollLeft >= container.scrollWidth / 1.5) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1.2;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, activeCategory]);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
            <span>Authorized Quality Partners</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Brands We Deal With
          </h2>
          <span className="block h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Trusted tier-1 manufacturer brands we work with to deliver high-performance, long-lasting solar solutions.
          </p>
        </div>

        {/* Category Filter Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200/90 shadow-sm gap-1 min-w-max">
            {BRAND_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-primary text-white shadow-md scale-102'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand Slider Container */}
        <div 
          className="relative group px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left / Right Ambient Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

          {/* Manual Scroll Controls */}
          <button
            onClick={() => handleManualScroll('left')}
            aria-label="Previous Brands"
            className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary shadow-xl rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleManualScroll('right')}
            aria-label="Next Brands"
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary shadow-xl rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Auto-sliding Track */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-5 sm:space-x-6 overflow-x-auto py-5 px-4 scrollbar-none rounded-2xl scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sliderBrands.map((brand, idx) => (
              <BrandLogoCard key={`${brand.id}-${idx}`} brand={brand} />
            ))}
          </div>

        </div>

        {/* Bottom Trust Tag */}
        <div className="mt-8 text-center flex items-center justify-center space-x-2 text-xs text-slate-500 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
          <span>Continuous Tier-1 Certified Partner Showcase • Equipped with Original Manufacturer Warranties</span>
        </div>

      </div>
    </section>
  );
};

export default BrandsSection;
