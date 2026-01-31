
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import Link from './Link';
import FolderCommentsIcon from './FolderCommentsIcon';
import NumidiawareLogo from './NumidiawareLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to resolve namespace error in browser environment.
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Initialize theme state based on device preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const handleProductClick = () => {
    setIsProductDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const openDropdown = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setIsProductDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsProductDropdownOpen(false);
    }, 150); // Small delay to allow moving mouse from button to dropdown
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-transparent dark:border-slate-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="#/" className="flex items-center gap-3">
            <NumidiawareLogo size={36} />
            <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">Numidiaware</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#/" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Home</Link>
            
            <div 
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button 
                className={`flex items-center gap-1 font-medium transition-colors py-2 ${isProductDropdownOpen ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400'}`}
              >
                Products <ChevronDown size={16} className={`transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute left-0 mt-0 w-72 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg shadow-xl p-2 transform transition-all duration-200 origin-top-left ${isProductDropdownOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}
              >
                <Link 
                  href="#/products/folder-comments/docs" 
                  className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md transition-colors group/item"
                  onClick={handleProductClick}
                >
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-md transition-colors">
                    <FolderCommentsIcon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-100">Folder Comments</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Add descriptions and tooltips to Windows folders.</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="#/about" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">About</Link>
            <Link href="#/contact" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Contact</Link>
            
            {/* Theme Toggle Desktop */}
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-slate-600 dark:text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="#/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="font-medium text-slate-900 dark:text-slate-100 mb-2">Products</div>
              <Link 
                href="#/products/folder-comments/docs" 
                className="flex items-center gap-2 pl-4 py-2 text-slate-600 dark:text-slate-300 hover:text-brand-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <FolderCommentsIcon size={20} />
                Folder Comments
              </Link>
            </div>
            <Link 
              href="#/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
