import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiPhoneCall, FiArrowUp } from 'react-icons/fi';
import { contactInfo } from '../../data/contactInfo';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 relative ml-auto"
        >
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
            Back to top
          </span>
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call Button */}
      <a
        href={`tel:+${contactInfo.phoneRaw}`}
        aria-label="Call NAND directly"
        className="group flex items-center justify-center w-12 h-12 bg-nand-orange text-white rounded-full shadow-lg hover:bg-[#e66d00] hover:scale-105 transition-all duration-300 relative ml-auto"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Call Us Now
        </span>
        <FiPhoneCall className="w-5 h-5 relative z-10" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NAND on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 relative ml-auto"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Need Help? Chat with us!
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <FaWhatsapp className="w-7 h-7 relative z-10" />
      </a>

    </div>
  );
};

export default FloatingActions;
