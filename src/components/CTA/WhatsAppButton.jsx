import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const number = '9353082680';
  const text = encodeURIComponent("Hi, I'm interested in solar solutions from SLV Solar Solutions. Please share details.");
  const whatsappUrl = `https://wa.me/91${number}?text=${text}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-55 bg-emerald-580 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center space-x-2 border-2 border-emerald-400/20"
      style={{ 
        backgroundColor: '#25D366', 
        zIndex: 999 
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* Icon */}
      <svg
        className="w-6 h-6 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.03 24l1.69-6.17C.6 15.43.02 13.11.02 10.72.02 4.9 4.71.2 10.5.2c2.81 0 5.46 1.1 7.45 3.09a10.45 10.45 0 0 1 3.09 7.44c0 5.82-4.7 10.52-10.49 10.52-2.28 0-4.52-.6-6.49-1.74L0 24zm6.57-3.95c1.86 1.1 3.73 1.68 5.67 1.68 5.09 0 9.24-4.14 9.24-9.23 0-2.46-1-4.78-2.74-6.52A9.18 9.18 0 0 0 12.24 3.2c-5.09 0-9.24 4.15-9.24 9.24 0 2.06.54 4.04 1.57 5.79L3.58 21.8l3.75-1.25zM15.86 14.5c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.12-.57.12-.17.25-.66.83-.8 1-.15.17-.3.19-.55.06-1.04-.46-1.76-.79-2.46-1.42-.51-.43-.88-.98-.98-1.15-.09-.17-.01-.26.07-.34.08-.08.17-.2.25-.3.09-.1.12-.17.18-.3.06-.12.03-.23-.01-.35-.04-.12-.4-.97-.55-1.33-.14-.35-.3-.3-.4-.3h-.35c-.12 0-.32.04-.49.23-.17.18-.66.65-.66 1.58 0 .93.68 1.83.77 1.96.09.12 1.33 2.03 3.22 2.85.45.19.8.3 1.08.39.45.14.86.12 1.18.07.36-.05 1.5-.61 1.71-1.2.22-.59.22-1.09.15-1.2-.06-.11-.22-.17-.47-.3z" />
      </svg>
      {/* Tooltip on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-xs font-bold uppercase tracking-wider block whitespace-nowrap">
        Chat With Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
