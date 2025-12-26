import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '../components/Magnetic';

const FormInput: React.FC<{ name: string; placeholder: string; type?: string; as?: 'textarea' }> = ({ name, placeholder, type = 'text', as }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    }}
    whileFocus={{ y: -4 }}
    className="w-full"
  >
    {as === 'textarea' ? (
      <textarea
        name={name}
        placeholder={placeholder}
        required
        rows={4}
        className="w-full resize-none bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-lg text-[#1D1D1F] dark:text-white placeholder:text-[#86868b]/70 outline-none focus:border-emerald-500 transition-colors duration-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-lg text-[#1D1D1F] dark:text-white placeholder:text-[#86868b]/70 outline-none focus:border-emerald-500 transition-colors duration-300"
      />
    )}
  </motion.div>
);

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState !== 'idle') return;
    setFormState('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500)); // Mock API delay
    setFormState('success');
    setTimeout(() => setFormState('idle'), 4000); // Reset form state
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  return (
    <div className="bg-[#FBFBFB] dark:bg-[#0D0D0D] min-h-screen transition-colors duration-700">
      <section className="min-h-screen w-full flex items-center justify-center py-40 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1D1D1F] dark:text-white leading-tight">
                Start a conversation.
              </h1>
              <p className="mt-6 text-xl text-[#86868b] max-w-lg leading-relaxed">
                Reach out to discuss a new project, a design challenge, or just to say hello. Great things happen when we design with intent.
              </p>
              <a 
                href="mailto:sawardekarsarvesh@gmail.com" 
                className="group inline-block mt-8 text-lg font-semibold text-[#1D1D1F] dark:text-white relative"
              >
                sawardekarsarvesh@gmail.com
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </a>
            </div>
            <div className="mt-16 lg:mt-0">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#86868b]">
                Connect
              </span>
              <div className="flex items-center gap-8 mt-6">
                <Magnetic strength={0.2}>
                  <a href="https://www.linkedin.com/in/sarvesh-sawardekar/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.03] group-hover:bg-emerald-500/10 transition-colors duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#86868b] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors duration-300">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-[#86868b] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors duration-300">LinkedIn</span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                   <a href="https://www.behance.net/sarveshsawarde" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.03] group-hover:bg-emerald-500/10 transition-colors duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 23.98" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#86868b] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors duration-300" aria-hidden="true">
                        <g>
                          <path d="M9.29,8.75h-2.63v2.09h2.46c.44,0,.82-.11.82-1.12s-.65-.97-.65-.97ZM9.29,12.37h-2.63v2.66h2.47c.38,0,1.1-.15,1.1-1.29.02-1.35-.95-1.37-.95-1.37Z" />
                          <path d="M17.97,0H6.01C2.7,0,0,2.7,0,6.01v11.97c0,3.29,2.7,6,6.01,6h11.97c3.31,0,6.01-2.7,6.01-6.01V6.01c-.02-3.31-2.72-6.01-6.03-6.01ZM14.08,7.61h4v.95h-4v-.95ZM12.22,13.87c0,2.97-2.93,3.06-2.93,3.06h-4.72V7.04h4.7c1.47,0,2.63.84,2.63,2.59s-1.41,1.85-1.41,1.85c1.87-.02,1.73,2.4,1.73,2.4ZM19.39,13.7h-4.82c0,1.9,1.64,1.75,1.64,1.75,1.54,0,1.48-.99,1.48-.99h1.64c0,2.66-3.18,2.55-3.18,2.55-3.81,0-3.56-3.75-3.56-3.75,0,0,0-3.77,3.56-3.77,3.75-.02,3.24,4.21,3.24,4.21h0Z" />
                          <path d="M16.2,10.87c-1.43,0-1.64,1.5-1.64,1.5h3.05s.02-1.5-1.41-1.5Z" />
                        </g>
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-[#86868b] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors duration-300">Behance</span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const payload = {
                  name: formData.get('name')?.toString().trim(),
                  email: formData.get('email')?.toString().trim(),
                  message: formData.get('message')?.toString().trim()
                };
                // basic client-side validation
                if (!payload.name || !payload.email || !payload.message) {
                  alert('Please fill all fields.');
                  return;
                }
                (e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = true;
                try {
                  const r = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                  });
                  if (r.ok) {
                    alert('Message sent — thank you!');
                    form.reset();
                  } else {
                    const j = await r.json().catch(() => ({}));
                    alert('Send failed: ' + (j.error || 'unknown'));
                  }
                } catch {
                  alert('Network error');
                } finally {
                  (e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement).disabled = false;
                }
              }}
              aria-label="Contact form"
              className="space-y-10"
            >
              <FormInput name="name" placeholder="Name" />
              <FormInput name="email" placeholder="Email" type="email" />
              <FormInput name="subject" placeholder="Subject" />
              <FormInput name="message" placeholder="Message" as="textarea" />

              <div className="pt-4">
                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className="w-full h-20 bg-[#1D1D1F] dark:bg-white text-white dark:text-black rounded-full text-xl font-bold flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-wait overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'idle' && (
                        <motion.span key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                          Send Message
                        </motion.span>
                      )}
                      {formState === 'submitting' && (
                        <motion.span key="submitting" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }}>
                          Sending...
                        </motion.span>
                      )}
                      {formState === 'success' && (
                        <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5"/></svg>
                          <span>Message Sent!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
