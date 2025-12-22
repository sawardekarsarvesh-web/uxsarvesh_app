
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const dots = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  initialX: Math.random() * 100 - 50,
  initialY: Math.random() * 100 - 50,
  targetX: (i % 8) * 12.5 - 43.75, // Grid-like alignment
  targetY: Math.floor(i / 8) * 20 - 40,
}));

export const DesignProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(smoothProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(smoothProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const opacity4 = useTransform(smoothProgress, [0.75, 0.9, 1], [0, 1, 1]);

  const dotProgress = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const dotScale = useTransform(smoothProgress, [0.25, 0.35], [1, 0]);

  const pathLength = useTransform(smoothProgress, [0.25, 0.5], [0, 1]);
  const blueprintOpacity = useTransform(smoothProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);

  const uiElementsY = useTransform(smoothProgress, [0.5, 0.75], [100, 0]);
  const uiElementsOpacity = useTransform(smoothProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);

  const mockupScale = useTransform(smoothProgress, [0.75, 1], [0.8, 1]);
  const mockupOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="h-[400vh] relative transition-colors duration-700 bg-[#ffffff] dark:bg-[#0D0D0D]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Subtle Light Leak Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[150px] rounded-full" 
          />
        </div>

        {/* Phase 1: Dots Movement */}
        <motion.div style={{ opacity: dotScale }} className="absolute inset-0 z-10 flex items-center justify-center">
          {dots.map((dot) => {
            const x = useTransform(dotProgress, [0, 1], [`${dot.initialX}vw`, `${dot.targetX}vw`]);
            const y = useTransform(dotProgress, [0, 1], [`${dot.initialY}vh`, `${dot.targetY}vh`]);
            return (
              <motion.div
                key={dot.id}
                style={{ x, y }}
                className="absolute w-1.5 h-1.5 bg-emerald-500/40 rounded-full dark:bg-emerald-500/40"
              />
            );
          })}
        </motion.div>

        {/* Phase 2: The Blueprint */}
        <motion.div style={{ opacity: blueprintOpacity }} className="absolute inset-0 z-20 flex items-center justify-center p-20">
          <svg width="800" height="400" viewBox="0 0 800 400" fill="none" className="w-full max-w-4xl">
            <motion.path
              d="M50 50 H750 V350 H50 Z M50 150 H750 M50 250 H750 M250 50 V350 M550 50 V350"
              stroke="#10B981"
              strokeWidth="1"
              style={{ pathLength }}
              strokeOpacity="0.2"
            />
            <motion.rect x="80" y="80" width="140" height="40" rx="4" stroke="#10B981" strokeWidth="1" style={{ pathLength }} strokeOpacity="0.3" />
            <motion.rect x="80" y="180" width="440" height="40" rx="4" stroke="#10B981" strokeWidth="1" style={{ pathLength }} strokeOpacity="0.3" />
          </svg>
        </motion.div>

        {/* Phase 3: UI Elements */}
        <motion.div style={{ y: uiElementsY, opacity: uiElementsOpacity }} className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-[400px]">
             <motion.div className="absolute top-0 left-0 w-64 h-40 glass rounded-3xl border border-black/[0.05] dark:border-white/10 shadow-2xl p-6" whileHover={{ y: -5 }}>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 mb-4" />
                <div className="h-2 w-32 bg-black/10 dark:bg-white/20 rounded-full mb-2" />
                <div className="h-2 w-20 bg-black/5 dark:bg-white/10 rounded-full" />
             </motion.div>
             <motion.div className="absolute top-20 right-0 w-80 h-48 glass rounded-3xl border border-black/[0.05] dark:border-white/10 shadow-2xl p-6 bg-emerald-500/5" whileHover={{ y: -5 }}>
                <div className="flex justify-between items-center mb-6">
                    <div className="h-6 w-24 bg-emerald-500/20 rounded-lg" />
                    <div className="h-2 w-8 bg-black/10 dark:bg-white/20 rounded-full" />
                </div>
                <div className="space-y-3">
                    <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full" />
                    <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full" />
                    <div className="h-2 w-2/3 bg-black/5 dark:bg-white/10 rounded-full" />
                </div>
             </motion.div>
          </div>
        </motion.div>

        {/* Phase 4: The Experience */}
        <motion.div style={{ scale: mockupScale, opacity: mockupOpacity }} className="absolute inset-0 z-40 flex items-center justify-center">
           <div className="relative w-72 h-[580px] rounded-[3rem] border-8 border-[#1d1d1f] shadow-2xl overflow-hidden bg-white dark:bg-black">
              <div className="p-8 space-y-8">
                 <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-full border border-emerald-500/50 p-1">
                        <div className="w-full h-full rounded-full bg-emerald-500" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5" />
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Total Balance</p>
                    <h4 className="text-3xl font-[800] tracking-apple text-[#101828] dark:text-white">$42,910.00</h4>
                 </div>
                 <div className="h-32 w-full bg-gradient-to-br from-emerald-500/10 dark:from-emerald-500/20 to-transparent rounded-2xl border border-emerald-500/20 flex items-end p-4">
                    <div className="w-full flex justify-between items-end">
                        <div className="space-y-1">
                            <div className="h-1 w-8 bg-emerald-500/30 rounded-full" />
                            <div className="h-1 w-12 bg-emerald-500/30 rounded-full" />
                        </div>
                        <div className="h-12 w-1.5 bg-emerald-500/50 rounded-full" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between">
                        <div className="h-2 w-20 bg-black/10 dark:bg-white/20 rounded-full" />
                        <div className="h-2 w-12 bg-black/5 dark:bg-white/10 rounded-full" />
                    </div>
                    <div className="h-[1px] w-full bg-black/[0.03] dark:bg-white/5" />
                    <div className="flex justify-between">
                        <div className="h-2 w-24 bg-black/10 dark:bg-white/20 rounded-full" />
                        <div className="h-2 w-8 bg-black/5 dark:bg-white/10 rounded-full" />
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Text Overlays */}
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center pointer-events-none px-6">
          <motion.div style={{ opacity: opacity1 }} className="absolute">
            <h2 className="text-4xl md:text-7xl font-[800] tracking-apple text-[#101828] dark:text-white">From Chaos to <span className="text-emerald-500">Insight.</span></h2>
            <p className="text-xl text-[#475467] dark:text-[#86868b] mt-4 font-semibold">Phase 01: Discovery</p>
          </motion.div>
          <motion.div style={{ opacity: opacity2 }} className="absolute">
            <h2 className="text-4xl md:text-7xl font-[800] tracking-apple text-[#101828] dark:text-white">The Architecture of <span className="text-emerald-500">Trust.</span></h2>
            <p className="text-xl text-[#475467] dark:text-[#86868b] mt-4 font-semibold">Phase 02: Strategy</p>
          </motion.div>
          <motion.div style={{ opacity: opacity3 }} className="absolute">
            <h2 className="text-4xl md:text-7xl font-[800] tracking-apple text-[#101828] dark:text-white">Where Precision meets <span className="text-emerald-500">Emotion.</span></h2>
            <p className="text-xl text-[#475467] dark:text-[#86868b] mt-4 font-semibold">Phase 03: Design</p>
          </motion.div>
          <motion.div style={{ opacity: opacity4 }} className="absolute">
            <h2 className="text-4xl md:text-7xl font-[800] tracking-apple text-[#101828] dark:text-white">Scalable Solutions for <br /><span className="text-emerald-500">Global Teams.</span></h2>
            <p className="text-xl text-[#475467] dark:text-[#86868b] mt-4 font-semibold">Phase 04: Deliver</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
