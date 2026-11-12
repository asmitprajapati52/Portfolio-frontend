import React, { useState } from 'react';
import axios from 'axios';

// Backend API URL: uses Vite environment variable, falls back to deployed server or localhost
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portfolio-backend-zqna.onrender.com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // Status message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      setStatus('Please enter your name. ❌');
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus('Please enter a valid email address. ❌');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('Please enter a subject. ❌');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('Please enter your message. ❌');
      return;
    }

    setLoading(true);
    setStatus("Sending your message...");

    try {
      // Dispatches request to the backend contact API
      const res = await axios.post(`${API_BASE_URL}/api/contact`, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (res.data && res.data.success) {
        setStatus(res.data.message || 'Message Sent Successfully! 🚀');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus(res.data?.message || 'Something went wrong. Please try again. ❌');
      }
    } catch (err) {
      const serverMessage = err.response?.data?.message;
      setStatus(serverMessage || 'Something went wrong. Please try again. ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden'>
      
      {/* Background decoration orb */}
      <div className='absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none'></div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start'>
          {/* Left Section */}
          <div className='space-y-8 sm:space-y-10'>
            <div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4'>
                Let's <span className='text-gradient font-black'>Connect</span>
              </h2>
              <p className='text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans'>
                I'm currently looking for **2026 Summer Internships**. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            <div className='space-y-4 sm:space-y-6'>
              {/* Email Contact Detail Card */}
              <a
                href="mailto:asmitprajapati045@gmail.com"
                className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 shadow-lg shadow-black/10 hover:border-indigo-500/30 transition-all duration-300 group'
              >
                <div className='p-3 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20 shadow-sm shrink-0'>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-[10px] text-slate-500 uppercase tracking-widest font-extrabold font-sans'>Email Me</p>
                  <p className='font-semibold text-slate-200 group-hover:text-white transition-colors font-sans text-xs sm:text-sm md:text-base truncate'>asmitprajapati045@gmail.com</p>
                </div>
              </a>

              {/* Twitter Contact Detail Card - Clickable Link */}
              <a 
                href="https://x.com/Asmit0001" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Twitter / X Profile"
                className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 shadow-lg shadow-black/10 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer'
              >
                <div className='p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20 shadow-sm shrink-0'>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-[10px] text-slate-500 uppercase tracking-widest font-extrabold font-sans'>Twitter / X</p>
                  <p className='font-semibold text-slate-200 group-hover:text-white transition-colors font-sans text-xs sm:text-sm md:text-base truncate'>https://x.com/Asmit0001</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className='glass-card p-5 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative animate-float-medium w-full'>
            <form className='space-y-4 sm:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2 font-sans'>Name</label>
                <input 
                  type="text" 
                  name='name' 
                  required 
                  value={formData.name}
                  className='w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-300 font-sans text-sm sm:text-base'
                  onChange={handleChange}
                  placeholder='Asmit Prajapati'
                />
              </div>
               
              <div>
                <label className='block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2 font-sans'>Email</label>
                <input 
                  type="email" 
                  name='email' 
                  required 
                  value={formData.email}
                  className='w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-300 font-sans text-sm sm:text-base'
                  onChange={handleChange}
                  placeholder='Asmit@example.com'
                />
              </div>

              <div>
                <label className='block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2 font-sans'>Subject</label>
                <input 
                  type="text" 
                  name='subject' 
                  required 
                  value={formData.subject}
                  className='w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-300 font-sans text-sm sm:text-base'
                  onChange={handleChange}
                  placeholder='Summer Internship 2026 / Project Inquiry'
                />
              </div>

              <div>
                <label className='block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2 font-sans'>Message</label>
                <textarea 
                  name="message" 
                  rows='4' 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-500 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all duration-300 font-sans resize-none text-sm sm:text-base'
                  placeholder='How can I help you?'
                />
              </div>

              <button 
                type='submit'
                disabled={loading}
                className={`w-full py-3 sm:py-3.5 rounded-xl font-bold text-white transition-all duration-300 cursor-pointer shadow-lg text-sm sm:text-base ${
                  loading 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <p className={`text-center mt-3 sm:mt-4 font-semibold text-xs sm:text-sm ${status.includes('Successfully') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
