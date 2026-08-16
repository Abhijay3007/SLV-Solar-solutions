import React from 'react';

const SectionHeading = ({ 
  overline, 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  const isLeft = align === 'left';
  
  return (
    <div className={`mb-12 max-w-3xl ${isLeft ? 'text-left' : 'mx-auto text-center'}`}>
      {overline && (
        <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
          {overline}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight relative ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
        <span className={`block h-1 w-16 bg-secondary mt-3 rounded-full ${
          isLeft ? 'mr-auto' : 'mx-auto'
        }`} />
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          light ? 'text-emerald-100/80' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
