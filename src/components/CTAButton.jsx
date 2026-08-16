import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all duration-200 active:scale-97 select-none border";
  
  const variants = {
    primary: "bg-primary border-primary text-white hover:bg-primary-light hover:border-primary-light hover:shadow-lg hover:shadow-emerald-900/10",
    secondary: "bg-secondary border-secondary text-primary hover:bg-secondary-dark hover:border-secondary-dark hover:shadow-lg hover:shadow-yellow-500/10",
    outline: "bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-emerald-900/5",
    white: "bg-white border-white text-primary hover:bg-slate-50 hover:shadow-lg"
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (to) {
    return (
      <Link to={to} onClick={handleScrollToTop} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default CTAButton;
