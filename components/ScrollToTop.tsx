
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from './Magnetic';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-[110]"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 glass border border-black/[0.08] dark:border-white/[0.08] rounded-full flex items-center justify-center shadow-xl group hover:border-emerald-500/50 transition-colors"
              aria-label="Scroll to top"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-emerald-500 transition-colors"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
