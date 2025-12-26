
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`min-h-screen transition-colors duration-700 ${theme === 'dark' ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-white text-[#1D1D1F]'}`}>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] h-14 transition-all duration-500 border-b ${
          isScrolled 
            ? 'glass border-black/[0.05] dark:border-white/[0.08]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-[1024px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold tracking-apple text-[#86868b] dark:text-[#f5f5f7] hover:opacity-70 transition-opacity">
            uxSarvesh
          </Link>

          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-emerald-500'
                    : 'text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative">
        {children}
      </main>

      <ScrollToTop />

      <footer className="py-24 px-6 md:px-12 border-t border-black/[0.05] dark:border-white/[0.08] bg-white dark:bg-[#000000] transition-colors duration-700">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="max-w-[1024px] mx-auto text-center space-y-8"
        >
        
          <div className="space-y-2">
            <p className="text-[14px] font-medium text-[#86868b] tracking-wide">
              Designed by Sarvesh
            </p>
            <p className="text-[12px] text-[#86868b]/60 tracking-wider">
              © 2025 Sarvesh Sawardekar. All rights reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};
