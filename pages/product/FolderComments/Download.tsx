import React from 'react';
import { FileDown, CheckCircle } from 'lucide-react';

const Download: React.FC = () => {

    const handleDownload = () => {
        window.location.href = "https://github.com/Numidiaware/solutions/releases/download/1.0.0/FolderCommentsSetup_1.0.0.exe";
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Download Folder Comments</h2>

            <div className="bg-brand-50 dark:bg-slate-800 border border-brand-200 dark:border-slate-700 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-200">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-brand-600 text-white text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">Stable Release</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Version 1.0.0</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">Released February 2026 • Windows 7/8/10/11 (32/64-bit)</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500"/> Virus Clean</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500"/> Spyware Free</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} className="text-green-500"/> Verified Publisher</span>
                    </div>
                </div>
                <button
                    onClick={handleDownload}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-10 rounded-lg shadow-lg shadow-brand-500/30 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                    <FileDown size={20} />
                    Download Installer
                </button>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>By downloading, you agree to the <a href="#/products/folder-comments/license" className="text-brand-600 dark:text-brand-400 hover:underline">License Agreement</a>.</p>
            </div>
        </div>
    );
};

export default Download;