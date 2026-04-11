import React, { useState } from 'react';
import axios from 'axios'; // 1. Import Axios

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(''); // To show "Sending..." or "Success"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("Sending your message...");
  try {
    // This line sends the data to your server
const res = await axios.post('https://portfolio-backend-zqna.onrender.com/api/contact', formData);
    if(res.data.success) {
      setStatus('Message Sent Successfully! 🚀');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }
  } catch (err) {
    setStatus('Something went wrong. Please try again. ❌');
  }finally {
    setLoading(false);
  }
};

  return (
    <section id='contact' className='py-20 px-6  md:px-20 bg-white dark:bg-slate-950 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {/* Left Section */}
          <div className='space-y-10'>
            <div>
              <h2 className='text-4xl font-extrabold text-slate-900 dark:text-white mb-4'>
                Let's <span className='text-indigo-600'>Connect</span>
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-lg'>
                I'm currently looking for **2026 Summer Internships**. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 '>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className='text-sm text-slate-500'>Email Me</p>
                  <p className='font-semibold text-slate-800 dark:text-slate-200'>asmitprajapati045@email.com</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600'>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <div>
                  <p className='text-sm text-slate-500'>Twitter</p>
                  <p className='font-semibold text-slate-800 dark:text-slate-200'>https://x.com/Asmit0001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-inner border border-slate-100 dark:border-slate-800'>
            <form className='space-y-5' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Name</label>
                <input type="text" name='name' required 
                value={formData.name}
                className='w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-indigo-600 outline-none transition-all'
                onChange={handleChange}
                placeholder='Asmit Prajapati'/>
              </div>
               
              <div>
                <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Email</label>
                <input type="email" name='email'required 
                value={formData.email}
                className='w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-indigo-600 outline-none transition-all'
                onChange={handleChange}
                placeholder='Asmit@example.com'/>
              </div>

               <div>
                <label className='block    text-sm font-medium text-slate-700 dark:text-slate-300 mb-2'>Message</label>
                <textarea
                name="message" rows='4'required 
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all'
                placeholder='how can i help you'>               
                </textarea>
              </div>
              <button type='submit'
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition-colors 
              ${loading? 'bg-slate-400 cursor-not-allowed':'bg-indigo-600 hover:bg-indigo-700 shadow-lg'}`}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                    <p className={`text-center mt-4 font-medium ${status.includes('Successfully') ? 'text-green-600' : 'text-red-500'}`}>
                        {status}
                    </p>
                )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact