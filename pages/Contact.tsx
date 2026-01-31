import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Globe, Send, Loader2, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, ChevronDown, Box, Code2, MessageCircle, LifeBuoy, ShieldCheck, Bug } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FolderCommentsIcon from '../components/FolderCommentsIcon';

// Types for Custom Select
interface Option {
  value: string;
  label: string;
  icon: React.ReactNode;
}

// Custom Select Component to support Icons
const CustomSelect = ({
                        label,
                        options,
                        value,
                        onChange,
                        disabled
                      }: {
  label: string,
  options: Option[],
  value: string,
  onChange: (value: string) => void,
  disabled: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(o => o.value === value) || options[0];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
      <div className="space-y-2" ref={ref}>
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{label}</label>
        <div className="relative">
          <button
              type="button"
              onClick={() => !disabled && setIsOpen(!isOpen)}
              className={`w-full px-5 py-4 border ${isOpen ? 'border-brand-500 ring-2 ring-brand-500/20' : 'border-slate-200 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl flex items-center justify-between transition-all disabled:opacity-50 text-left`}
              disabled={disabled}
          >
            <div className="flex items-center gap-3">
              <span className="text-brand-600 dark:text-brand-400">{selectedOption.icon}</span>
              <span className="font-medium">{selectedOption.label}</span>
            </div>
            <ChevronDown size={18} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl z-20 overflow-hidden max-h-60 overflow-y-auto">
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          onChange(option.value);
                          setIsOpen(false);
                        }}
                        className={`w-full px-5 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left ${option.value === value ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      <span className={`${option.value === value ? 'text-brand-600' : 'text-slate-400'}`}>{option.icon}</span>
                      <span className="font-medium">{option.label}</span>
                      {option.value === value && <Check size={16} className="ml-auto text-brand-600" />}
                    </button>
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'Folder Comments',
    subject: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Track theme changes to force input remounting (fixes autofill style issues)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() =>
      typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setThemeMode(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // IMPORTANT: Replace these placeholders with your actual IDs from https://dashboard.emailjs.com/
  const SERVICE_ID = 'service_numidiaware';
  const TEMPLATE_ID = 'template_contact';
  const PUBLIC_KEY = 'EfkjNLPJNiDKzEF5P';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('numidiaware@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSubjectEmoji = (subject: string) => {
    switch (subject) {
      case 'General Inquiry': return '💬';
      case 'Technical Support': return '🔧';
      case 'Licensing Help': return '🔐';
      case 'Bug Report': return '🐞';
      default: return '📬';
    }
  };

  const getEmailSubject = (subject: string, product: string, name: string) => {
    const emoji = getSubjectEmoji(subject);
    // Format: 💬 General Inquiry: [Folder Comments] from John Doe
    return `${emoji} ${subject}: [${product}] from ${name}`;
  };

  const handleGmailOpen = () => {
    const { name, email, product, subject, message } = formData;
    const dynamicSubject = getEmailSubject(subject, product, name);
    const bodyContent = `Product: ${product}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=numidiaware@gmail.com&su=${encodeURIComponent(dynamicSubject)}&body=${encodeURIComponent(bodyContent)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');
    setErrorMessage('');

    try {
      const dynamicSubject = getEmailSubject(formData.subject, formData.product, formData.name);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        to_email: 'numidiaware@gmail.com',
        product: formData.product,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Numidiaware Team',
        email_subject: dynamicSubject,
      };

      const result = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          product: 'Folder Comments',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus('error');

      // @ts-ignore
      if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        setErrorMessage('Developer: Please set a valid EmailJS Public Key in Contact.tsx');
      } else {
        setErrorMessage(error?.text || 'Failed to send. Please ensure your EmailJS Template has a recipient address set.');
      }
    }
  };

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Data for Selects
  const productOptions: Option[] = [
    { value: 'Folder Comments', label: 'Folder Comments', icon: <FolderCommentsIcon size={18} /> },
    { value: 'General Software', label: 'General / Other Software', icon: <Box size={18} /> },
    { value: 'Custom Project', label: 'Custom Software Request', icon: <Code2 size={18} /> }
  ];

  const subjectOptions: Option[] = [
    { value: 'General Inquiry', label: 'General Inquiry', icon: <MessageCircle size={18} /> },
    { value: 'Technical Support', label: 'Technical Support', icon: <LifeBuoy size={18} /> },
    { value: 'Licensing Help', label: 'Licensing Help', icon: <ShieldCheck size={18} /> },
    { value: 'Bug Report', label: 'Bug Report', icon: <Bug size={18} /> }
  ];

  return (
      <div className="py-16 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-200">
        {/*
          Autofill styling strategy:
          1. Use transition hack to effectively disable the background color change triggered by browser autofill.
             This preserves the transparency and border-radius of our custom input design.
          2. Force inputs to remount (via key prop) when theme changes so they pick up the new base background color
             before the transition lock takes effect.
      */}
        <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
            -webkit-text-fill-color: #0f172a !important;
            caret-color: #0f172a !important;
            transition: background-color 9999s ease-in-out 0s;
        }

        .dark input:-webkit-autofill,
        .dark input:-webkit-autofill:hover, 
        .dark input:-webkit-autofill:focus, 
        .dark input:-webkit-autofill:active,
        .dark textarea:-webkit-autofill,
        .dark textarea:-webkit-autofill:hover,
        .dark textarea:-webkit-autofill:focus,
        .dark textarea:-webkit-autofill:active {
            -webkit-text-fill-color: #ffffff !important;
            caret-color: #ffffff !important;
        }
      `}</style>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Contact <span className="text-brand-600">Numidiaware</span></h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We're building the future of Windows utilities. Reach out with questions, feedback, or custom software requests.</p>
          </div>

          {/* Message Panel: Clear Background (Light) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 mb-16">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send Message</h2>
                  <p className="text-slate-500 dark:text-slate-400">Tell us how we can help you or your organization today.</p>
                </div>
                <button
                    onClick={handleGmailOpen}
                    className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink size={16} /> Open in Gmail
                </button>
              </div>

              {status === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center gap-4 text-green-700 dark:text-green-300 animate-in fade-in slide-in-from-top-4">
                    <CheckCircle2 className="shrink-0" size={32} />
                    <div>
                      <p className="font-bold text-lg">Message Sent Successfully!</p>
                      <p className="text-sm">We've received your inquiry and will get back to you within 24 hours.</p>
                    </div>
                  </div>
              )}

              {status === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-4 text-red-700 dark:text-red-300 animate-in fade-in slide-in-from-top-4">
                    <AlertCircle className="shrink-0" size={32} />
                    <div>
                      <p className="font-bold text-lg">Failed to Send</p>
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                        key={`name-${themeMode}`}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        placeholder="John Doe"
                        required
                        disabled={status === 'sending'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                        key={`email-${themeMode}`}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all disabled:opacity-50 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        placeholder="john@example.com"
                        required
                        disabled={status === 'sending'}
                    />
                  </div>
                </div>

                {/* Row 2: Product and Subject using Custom Select */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <CustomSelect
                      label="Related Product"
                      options={productOptions}
                      value={formData.product}
                      onChange={(val) => handleSelectChange('product', val)}
                      disabled={status === 'sending'}
                  />

                  <CustomSelect
                      label="Inquiry Type"
                      options={subjectOptions}
                      value={formData.subject}
                      onChange={(val) => handleSelectChange('subject', val)}
                      disabled={status === 'sending'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message Detail</label>
                  <textarea
                      key={`message-${themeMode}`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all disabled:opacity-50 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="Describe your request in detail..."
                      required
                      disabled={status === 'sending'}
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl ${
                        status === 'sending'
                            ? 'bg-slate-400 cursor-not-allowed text-white'
                            : 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-500/20 active:scale-[0.99]'
                    }`}
                >
                  {status === 'sending' ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Connecting...
                      </>
                  ) : (
                      <>
                        <Send size={22} />
                        Send Message
                      </>
                  )}
                </button>
              </form>
            </div>

            {/* Footer of the Panel */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 text-center border-t border-slate-100 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 text-sm italic font-medium max-w-2xl mx-auto">
                "We prioritize community feedback to build tools that truly solve real-world digital organization challenges."
              </p>
              <div className="mt-2 text-[10px] text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest">Numidiaware Team</div>
            </div>
          </div>

          {/* Info Grid: Now at the Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group transition-all hover:shadow-md">
              <div className="bg-brand-50 dark:bg-brand-900/30 p-4 rounded-full text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Direct Email</h3>
              <div className="flex items-center gap-2">
                <a href="mailto:numidiaware@gmail.com" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline truncate">numidiaware@gmail.com</a>
                <button onClick={handleCopyEmail} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-400">
                  {copied ? <Check size={14} className="text-green-500"/> : <Copy size={14}/>}
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group transition-all hover:shadow-md">
              <div className="bg-brand-50 dark:bg-brand-900/30 p-4 rounded-full text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Location</h3>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">Tadmait, Tizi Ouzou, Algeria</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group transition-all hover:shadow-md">
              <div className="bg-brand-50 dark:bg-brand-900/30 p-4 rounded-full text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Social Networks</h3>
              <div className="flex gap-3">
                <a href="https://github.com/numidiaware" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-brand-600 hover:text-white transition-all">
                  <Github size={20} />
                </a>
                <a href="https://numidiaware.github.io" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-brand-500 hover:text-white transition-all">
                  <Globe size={20} />
                </a>
                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-brand-700 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;