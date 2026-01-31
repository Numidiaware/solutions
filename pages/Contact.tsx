import React, { useState } from 'react';
import { Mail, MapPin, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:numidiaware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    // Create a temporary link to trigger the mailto action
    // This is often more reliable than window.location.href and avoids some browser history issues
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div className="py-16 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
            <p className="text-slate-600 dark:text-slate-400">Have questions or feedback? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form (Now on the Left) */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Your name"
                      required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="your@email.com"
                      required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Licensing</option>
                    <option>Bug Report</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="How can we help?"
                      required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20">
                  <Mail size={18} />
                  Send Message
                </button>
                <p className="text-xs text-slate-500 text-center mt-2">
                  This will open your default email client. <br/>
                  Having trouble? <a href="mailto:numidiaware@gmail.com" className="text-brand-600 hover:underline">Click here to email directly</a>.
                </p>
              </form>
            </div>

            {/* Info Card (Now on the Right) */}
            <div className="space-y-8 order-1 md:order-2">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600 dark:text-brand-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Email</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">For support and general queries</p>
                      <a href="mailto:numidiaware@gmail.com" className="text-brand-600 dark:text-brand-400 hover:underline font-medium">
                        numidiaware@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600 dark:text-brand-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Location</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Tadmait, Algeria</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-6">Follow Our Progress</h3>
                  <div className="flex gap-4">
                    <a href="https://github.com/numidiaware" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all duration-300">
                      <Github size={24} />
                    </a>
                    <a href="#" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all duration-300">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-700 hover:text-white dark:hover:bg-brand-700 transition-all duration-300">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://numidiaware.github.io" className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-400 hover:text-white dark:hover:bg-brand-400 transition-all duration-300">
                      <Globe size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-brand-600 rounded-2xl p-8 text-white shadow-xl shadow-brand-500/30">
                <h3 className="text-xl font-bold mb-3">Community First</h3>
                <p className="text-brand-100 text-sm leading-relaxed">
                  As an independent developer, user feedback is our primary driver. If you have an idea for a feature or found a bug, please reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;