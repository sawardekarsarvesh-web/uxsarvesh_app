
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, SKILLS } from '../constants';
import { Magnetic } from '../components/Magnetic';

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0]; index: number }> = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.05 
      }}
      className="border-b border-black/[0.08] dark:border-white/[0.08] py-16 md:py-24 group transition-colors duration-700"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="space-y-3">
          <p className="text-[12px] font-bold text-emerald-500 uppercase tracking-[0.2em]">{exp.period}</p>
          <h3 className="text-3xl md:text-5xl font-[800] tracking-apple group-hover:text-emerald-500 transition-colors duration-500 text-[#1D1D1F] dark:text-white">
            {exp.role}
          </h3>
          <p className="text-xl md:text-2xl font-semibold text-[#86868b] tracking-apple">{exp.company}</p>
        </div>
        <div className="max-w-md">
          <p className="text-[#86868b] font-medium text-lg leading-relaxed transition-colors duration-700">
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  return (
    <div className="bg-[#FBFBFB] dark:bg-black transition-colors duration-700 min-h-screen">
      <section className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="aspect-[4/5] bg-gray-100 dark:bg-zinc-900 rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.03] dark:border-white/[0.05]">
              <img 
                src="/images/Sarvesh.jpg" 
                alt="Sarvesh Sawardekar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col h-full justify-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-500 mb-8 block"
            >
              The Story
            </motion.span>
            
            <h1 className="text-5xl lg:text-7xl font-[800] tracking-tighter leading-[1.1] mb-10 text-[#1D1D1F] dark:text-white">
              Hi, I’m Sarvesh. <br/>
              <span className="text-[#86868b]">Design that clarifies.</span>
            </h1>

            <div className="space-y-8 text-xl text-[#86868b] leading-relaxed font-medium mb-12">
              <p>
                As a designer, I am driven by the challenge of turning complex logic into 
                intuitive, human-centered experiences. My work lives at the intersection 
                of high-stakes <span className="text-[#1D1D1F] dark:text-white">fintech and enterprise ecosystems</span>.
              </p>
              
              <p>
                Based in Dubai, I specialize in crafting systems that are as powerful as they are simple. I believe great design is often invisible—it doesn't shout; it guides.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Magnetic strength={0.15}>
                <a 
                  href="https://drive.google.com/file/d/1fY6GRR8NsKzngpr4MEa7XUej1_S_3bxf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#1D1D1F] dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-black/5 group"
                >
                  <span>View Resume</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/>
                  </svg>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[800] tracking-apple text-[#1D1D1F] dark:text-white transition-colors duration-700"
          >
            Journey So Far.
          </motion.h2>
        </div>
        <div className="space-y-0">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </section>

      <section className="py-40 bg-white dark:bg-[#080808] border-y border-black/[0.08] dark:border-white/[0.08] transition-colors duration-700">
        <div className="max-w-[1024px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-[800] tracking-apple leading-tight text-[#1D1D1F] dark:text-white transition-colors duration-700">Expertise in <br /> Modern Craft.</h2>
            <p className="text-lg text-[#86868b] font-medium transition-colors duration-700">Using the best tools to build the best experiences.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {SKILLS.map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-4 bg-white dark:bg-black border border-black/[0.08] dark:border-white/[0.08] rounded-2xl text-sm font-bold shadow-sm hover:border-emerald-500/50 transition-colors cursor-default text-[#1D1D1F] dark:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
