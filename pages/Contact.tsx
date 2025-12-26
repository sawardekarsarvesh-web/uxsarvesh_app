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
                      <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#86868b] group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        {/* Background square (fills with currentColor) */}
                        <rect width="24" height="24" rx="4" fill="currentColor" />
                        {/* Behance glyph (white on top of background) */}
                        <g transform="translate(-5,-5) scale(1.4)">
                          <path fill="#ffffff" d="M22 7.666c0-1.897-1.424-2.333-2.618-2.333-1.637 0-2.67.97-2.67 2.333 0 1.258.823 2.11 2.158 2.254-1.848.337-2.722 1.57-2.722 3.003 0 2.14 1.748 3.14 3.328 3.14 2.13 0 3.344-1.403 3.344-3.165 0-1.638-1.294-2.55-2.715-2.825 1.353-.264 1.895-1.284 1.895-2.407zm-2.895 6.746c-.524 0-1.01-.194-1.01-.84 0-.624.486-.812 1.01-.812s1.01.188 1.01.812-.486.84-1.01.84zm0-3.88c-.443 0-.853-.166-.853-.71 0-.52.41-.693.853-.693s.854.173.854.693c0 .544-.41.71-.854.71zm-9.39 3.012c.03.18.062.355.097.51.62 3.344 2.17 3.514 3.84 3.514 1.942 0 3.153-.88 3.153-.88l-.514-1.747s-.66.425-1.575.425c-1.013 0-1.554-.424-1.583-1.3h3.586c.01-.15.013-.3.013-.45 0-1.72-1.03-3.193-2.845-3.193-1.85 0-3.052 1.343-3.13 3.12zm1.66-1.565c.08-.58.55-.95 1.14-.95.636 0 1.056.37 1.103.95h-2.243zM19.42 2.333h-5.42V1.25H21v1.083z" />
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
