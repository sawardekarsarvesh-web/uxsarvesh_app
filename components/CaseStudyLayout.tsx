
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MetadataItem {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  metadata: MetadataItem[];
  children: React.ReactNode;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  metadata,
  children
}) => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-700">
      <nav className="fixed top-20 left-6 z-[90]">
        <Link 
          to="/" 
          className="group flex items-center space-x-3 text-sm font-bold tracking-widest uppercase text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center group-hover:border-emerald-500 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span>Back</span>
        </Link>
      </nav>

      <section className="pt-40 pb-20 px-6 max-w-[1024px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-[900] tracking-tighter text-[#1D1D1F] dark:text-white leading-[0.9] mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </section>

      <section className="px-6 mb-24 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[21/9] w-full rounded-[40px] overflow-hidden shadow-2xl bg-gray-100 dark:bg-zinc-900 border border-black/[0.03] dark:border-white/[0.05]"
        >
          <picture>
            <source srcSet={heroImage.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
            <img 
              src={heroImage} 
              alt={title} 
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover"
            />
          </picture>
        </motion.div>
      </section>

      <section className="max-w-[1024px] mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-black/[0.08] dark:border-white/[0.08] py-16">
          {metadata.map((item, i) => (
            <div key={i} className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">
                {item.label}
              </span>
              <p className="text-lg font-bold text-[#1D1D1F] dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <article className="max-w-[720px] mx-auto px-6 pb-40">
        <div className="prose prose-lg dark:prose-invert prose-p:text-xl prose-p:text-[#86868b] prose-p:leading-[1.6] prose-headings:text-[#1D1D1F] dark:prose-headings:text-white prose-headings:font-[800] prose-headings:tracking-apple space-y-16">
          {children}
        </div>
      </article>

      <section className="py-40 bg-[#FBFBFB] dark:bg-[#080808] border-t border-black/[0.08] dark:border-white/[0.08] text-center px-6">
        <h3 className="text-3xl md:text-5xl font-[800] tracking-apple mb-12 text-[#1D1D1F] dark:text-white">
          Interested in the process?
        </h3>
        <Link 
          to="/contact" 
          className="inline-flex items-center space-x-3 px-12 py-5 bg-[#1D1D1F] dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl group"
        >
          <span>Let's talk design</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </section>
    </div>
  );
};

export const CaseStudySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-8">
    <h2 className="text-3xl md:text-4xl">{title}</h2>
    <div className="text-xl text-[#86868b] font-medium leading-relaxed space-y-6">
      {children}
    </div>
  </section>
);
