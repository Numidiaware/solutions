import React from 'react';
import { Download } from 'lucide-react';

const ReleaseHistory: React.FC = () => {
  const handleDownload = () => {
    window.location.href = "https://github.com/Numidiaware/solutions/releases/download/1.0.0/FolderCommentsSetup_1.0.0.exe";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-12">Release History</h2>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-48 space-y-12 transition-colors duration-200">
        {/* V1.0.0 - Merged Release */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-white dark:border-slate-900 shadow-sm transition-colors duration-200 z-10"></div>
          
          {/* Version & Date - Left aligned on desktop */}
          <div className="mb-4 md:mb-0 md:absolute md:-left-44 md:w-36 md:text-right md:top-0.5">
            <span className="inline-block text-sm font-semibold text-brand-600 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/40 px-2 py-1 rounded transition-colors duration-200 mb-1">v1.0.0</span>
            <div className="text-slate-500 dark:text-slate-400 text-sm">October 15, 2023</div>
          </div>

          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Initial Stable Release</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Full-featured release including advanced language support and shell integration.
          </p>
          <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
            <li>Core Shell Property Sheet functionality for Windows Explorer.</li>
            <li>Native Desktop.ini storage implementation (no proprietary database).</li>
            <li>Full support for 32-bit and 64-bit Windows architectures.</li>
            <li>Comprehensive multilingual support (40+ languages) including RTL (Arabic, Hebrew, Farsi).</li>
            <li>Optimized installer with auto-detection for Windows 11 22H2+.</li>
            <li>Improved tooltip performance on local and network drives.</li>
            <li>Updated translation strings for major European and Asian languages.</li>
          </ul>
          <div className="mt-6">
            <button 
              onClick={handleDownload}
              className="text-sm font-semibold flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg transition-all shadow-md shadow-brand-500/20"
            >
              <Download size={16} /> Download v1.0.0 Installer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleaseHistory;