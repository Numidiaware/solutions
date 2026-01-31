import React from 'react';
import { Mail, MessageCircle, LifeBuoy } from 'lucide-react';
import Link from '../../../components/Link';

const Support: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-8">
        <div className="bg-brand-50 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 dark:text-brand-400">
            <LifeBuoy size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Need help with Folder Comments?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            We are here to help you get the most out of your software.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded text-blue-600 dark:text-blue-400">
                        <MessageCircle size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">Check Documentation</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Most issues are covered in our comprehensive user guide and troubleshooting section.</p>
                <Link href="#/products/folder-comments/docs" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">Read Documentation &rarr;</Link>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-green-600 dark:text-green-400">
                        <Mail size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">Email Support</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Can't find the answer? Email our support team directly. We usually respond within 24 hours.</p>
                <a href="mailto:numidiaware@gmail.com" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">numidiaware@gmail.com &rarr;</a>
            </div>
        </div>
    </div>
  );
};

export default Support;