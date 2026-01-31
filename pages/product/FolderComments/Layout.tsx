import React, { useState, useEffect } from 'react';
import { BookOpen, Download, History, LifeBuoy, FileText } from 'lucide-react';
import Link from '../../../components/Link';
import FolderCommentsIcon from '../../../components/FolderCommentsIcon';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const tabs = [
    { name: 'Documentation', path: 'docs', icon: <BookOpen size={18} /> },
    { name: 'Download', path: 'download', icon: <Download size={18} /> },
    { name: 'Release History', path: 'history', icon: <History size={18} /> },
    { name: 'Support', path: 'support', icon: <LifeBuoy size={18} /> },
    { name: 'License', path: 'license', icon: <FileText size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 transition-colors duration-200">
      <div className="container mx-auto px-4">
        {/* Product Header */}
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
             <FolderCommentsIcon size={48} />
           </div>
           <div>
             <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Folder Comments</h1>
             <p className="text-slate-500 dark:text-slate-400">Windows Shell Extension for folder organization</p>
           </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-slate-900 rounded-t-xl border-b border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto transition-colors duration-200">
          <div className="flex">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                href={`#/products/folder-comments/${tab.path}`}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  currentHash.includes(tab.path)
                    ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-600 dark:border-brand-400 bg-brand-50 dark:bg-slate-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab.icon}
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white dark:bg-slate-900 rounded-b-xl shadow-sm border border-t-0 border-slate-200 dark:border-slate-800 p-8 min-h-[500px] transition-colors duration-200 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;