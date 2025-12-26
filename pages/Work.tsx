import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { DesignProcess } from '../components/Process';
import { Magnetic } from '../components/Magnetic';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-500 mb-8 block"
        >
          Sarvesh Sawardekar
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[140px] font-extrabold tracking-tighter mb-10 leading-[0.9] text-[#1D1D1F] dark:text-white transition-colors duration-700"
        >
          Design with <br /> intent.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-600 dark:text-[#86868b] max-w-[600px] font-medium leading-relaxed transition-colors duration-700"
        >
          From scalable design systems to intuitive financial interfaces. 
          I transform technical requirements into seamless human experiences.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[60vw] h-[60vw] bg-emerald-500/5 blur-[150px] rounded-full" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-600 dark:text-[#86868b]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#86868b]/50 to-transparent relative overflow-hidden">
           <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-emerald-500"
           />
        </div>
      </motion.div>
    </section>
  );
};

const FeaturedProject: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

  return (
    <div ref={ref} className="h-screen flex flex-col items-center justify-center sticky top-0 bg-white dark:bg-black overflow-hidden transition-colors duration-700">
      <motion.div style={{ scale, opacity }} className="relative w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: textY }} className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-[#86868b]">{project.tagline}</span>
              <div className="flex">
                        <span className="glass px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-black/[0.05] dark:border-white/10 text-white dark:text-emerald-400 shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-[800] tracking-apple text-[#1D1D1F] dark:text-white leading-tight transition-colors duration-700">{project.title}</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-[#86868b] font-medium leading-relaxed max-w-md transition-colors duration-700">
              {project.description}
            </p>
            {project.link ? (
              <Magnetic strength={0.1}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-10 py-4 bg-[#1D1D1F] dark:bg-[#f5f5f7] text-white dark:text-black rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-black/10 group"
                >
                  <span>Explore Case Study</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </a>
              </Magnetic>
            ) : (
              <div className="inline-flex items-center space-x-3 px-10 py-4 bg-[#f5f5f7] dark:bg-white/5 text-slate-600 dark:text-[#86868b] rounded-full font-bold text-sm cursor-not-allowed">
                <span>Coming Soon</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
            )}
          </motion.div>
          
          <motion.div className="relative group cursor-pointer overflow-hidden rounded-[40px] bg-transparent border border-slate-200 shadow-sm transition-all duration-300 dark:bg-transparent dark:shadow-2xl dark:border-black/[0.03]">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] w-full"
            >
              <picture>
                <source srcSet={project.image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover" 
                />
              </picture>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
              <div className="glass px-8 py-4 rounded-full border border-white/20 dark:border-white/10 shadow-2xl flex items-center space-x-3 bg-black/50 backdrop-blur-sm text-white">
                <span className="text-[11px] font-bold tracking-widest uppercase text-white">View Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              className="absolute inset-0 z-10 pointer-events-none dark:bg-emerald-500/10 bg-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="relative">
      {PROJECTS.map((project, idx) => (
        <FeaturedProject key={project.id} project={project} index={idx} />
      ))}
    </section>
  );
};

const BentoGrid = () => {
  const items = [
    { 
      title: "Scalable Design Systems", 
      desc: "Creating atomic structures for global fintech brands.", 
      span: "md:col-span-2",
      align: "top",
      image: '/images/scalabledesignsystems.jpg', 
    },
    { 
      title: "Accessibility", 
      desc: "WCAG 2.1 AA Standards.", 
      span: "md:col-span-1",
      align: "top",
      image: '/images/accessibility.jpg'
    },
    { 
      title: "Prototyping", 
      desc: "High fidelity micro-interactions.", 
      span: "md:col-span-1",
      align: "bottom",
      image: '/images/prototyping.jpg'
    },
    { 
      title: "User Research", 
      desc: "Data-driven decision making for enterprise software.", 
      span: "md:col-span-2",
      align: "bottom",
      image: '/images/userresearch.jpg'
    }
  ];

  return (
    <section className="py-48 max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-24 space-y-6">
        <h2 className="text-4xl md:text-6xl font-[900] tracking-apple text-[#1D1D1F] dark:text-white transition-colors duration-700">Privacy. Designed. Built.</h2>
        <p className="text-xl text-slate-600 dark:text-[#86868b] font-semibold transition-colors duration-700">Small but meaningful contributions to the industry.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[420px]">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`${item.span} relative group overflow-hidden rounded-[40px] bg-slate-50 border border-slate-200 shadow-sm transition-all duration-300 cursor-default flex flex-col dark:bg-[#050505] dark:border-white/[0.1] dark:shadow-2xl`}
          >
              <div className="absolute inset-0 z-0 overflow-hidden">
              <picture>
                <source srcSet={item.image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700 will-change-transform filter group-hover:brightness-75"
                />
              </picture>
              <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#050505]/40 dark:via-transparent dark:to-[#050505]/80 bg-gradient-to-b from-transparent via-transparent to-transparent" />
              <div className="absolute inset-0 dark:bg-[#050505]/10 dark:group-hover:bg-emerald-500/5 bg-transparent group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            <div className={`relative z-10 p-10 flex flex-col h-full ${item.align === 'bottom' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={
                  `absolute left-0 right-0 ${
                    item.align === 'bottom'
                      ? 'bottom-0 h-1/2 md:h-[40%] rounded-b-[40px] bg-gradient-to-t dark:from-black/20 dark:via-black/10 dark:to-transparent from-transparent via-transparent to-transparent'
                      : 'top-0 h-1/2 md:h-[40%] rounded-t-[40px] bg-gradient-to-b dark:from-black/20 dark:via-black/10 dark:to-transparent from-transparent via-transparent to-transparent'
                  } backdrop-blur-sm pointer-events-none transition-all duration-300 dark:group-hover:from-black/60 dark:group-hover:via-black/40`
                }
              />
              <div className="relative z-20">
                <motion.h3 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-[42px] font-extrabold tracking-apple mb-3 text-white leading-[1.1] drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)] transition-opacity duration-300"
              >
                {item.title}
              </motion.h3>
                <motion.p 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-lg font-medium leading-relaxed max-w-[90%] transition-opacity duration-300 opacity-90 group-hover:opacity-100"
              >
                {item.desc}
              </motion.p>
              </div>
            </div>

            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[40px] transition-all duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export const Work: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-700">
      <Hero />
      <DesignProcess />
      <ProjectsSection />
      <BentoGrid />
    </div>
  );
};
