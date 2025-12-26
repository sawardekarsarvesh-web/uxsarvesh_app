
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Theme } from './types';

const AnimatedRoutes = () => {
  const location = useLocation();

  // Reset scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  // Force dark mode for the entire site regardless of system preference
  const [theme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    // persist the preference as dark
    try { localStorage.setItem('theme', 'dark'); } catch {}
  }, []);

  // No-op toggle to keep components that expect a toggle function working
  const toggleTheme = () => {}; 

  return (
    <Router>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;
