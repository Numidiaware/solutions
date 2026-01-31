import React from 'react';
import { Cpu, Globe, Shield, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-200">

            {/* Hero Header */}
            <section className="bg-white dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Numidiaware</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        Crafting lightweight, efficient utilities that fill the gaps in your digital workflow.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <div className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                            Our Story
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Independent Development, Global Reach.</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Numidiaware is an independent software studio based in <strong>Tadmait, Algeria</strong>. Founded on the belief that operating systems should serve the user, we specialize in creating utilities that fill the gaps in native functionality.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Our flagship project, <strong>Folder Comments</strong>, was born from a simple personal need to better organize files without renaming them. Today, it helps users across the globe maintain cleaner, more documented digital workspaces.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-brand-500 to-blue-700 rounded-2xl p-1 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-8 h-full flex flex-col justify-center items-center text-center">
                            <Code size={48} className="text-brand-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Built for Performance</h3>
                            <p className="text-slate-500 dark:text-slate-400">
                                We leverage efficient, low-level integration to ensure our software remains fast, stable, and lightweight.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Philosophy Grid */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">Our Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Minimalism</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Software should be seen, not felt. We avoid bloat and focus on high-performance code with a tiny footprint.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Global Accessibility</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Language should never be a barrier. We support 40+ languages to empower users everywhere.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                            <div className="bg-purple-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">User Privacy</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                No tracking, no telemetry, no data collection. Your system stays yours, and your data stays private.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final Quote */}
                <div className="bg-brand-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 text-center border border-brand-100 dark:border-slate-800">
                    <Heart size={32} className="text-red-500 mx-auto mb-4" />
                    <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 max-w-3xl mx-auto mb-6 italic">
                        "Our goal isn't to be the biggest software company, but to be the one that provides that one handy tool you can't live without."
                    </p>
                    <div className="text-sm font-bold text-brand-600 dark:text-brand-400 tracking-wider uppercase">
                        Numidiaware Studios
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;