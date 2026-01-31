import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import Link from './Link';
import NumidiawareLogo from './NumidiawareLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <NumidiawareLogo size={32} />
               <h3 className="text-xl font-bold text-white">Numidiaware</h3>
            </div>
            <p className="text-slate-400">
              Creating powerful, efficient, and user-friendly software solutions for Windows.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><Link href="#/products/folder-comments/docs" className="hover:text-brand-500 transition-colors">Products</Link></li>
              <li><Link href="#/about" className="hover:text-brand-500 transition-colors">About</Link></li>
              <li><Link href="#/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-500" />
                <a href="mailto:numidiaware@gmail.com" className="hover:text-white">numidiaware@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                <span>Tadmait, Algeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-500" />
                <span>numidiaware.github.io</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Numidiaware. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;