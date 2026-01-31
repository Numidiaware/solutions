import React from 'react';
import { MousePointer2, CheckCircle2, ChevronRight, Globe, Cloud, LayoutList, LayoutGrid, XCircle, AlertCircle } from 'lucide-react';

export const TooltipMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
      <div className="h-8 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center px-3 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>
      <div className="p-4 relative h-full">
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 w-48">
            <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
            <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 w-48 relative">
            <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-2 w-20 bg-blue-400 dark:bg-blue-500 rounded"></div>
            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-56 p-3 bg-yellow-50 dark:bg-slate-800 border border-yellow-200 dark:border-yellow-700 rounded shadow-xl z-20 animate-bounce-subtle opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 pointer-events-none">
              <div className="text-[10px] font-semibold text-slate-400 mb-1 uppercase tracking-wider">Folder Comment</div>
              <div className="text-xs text-slate-700 dark:text-slate-200 leading-tight">
                "Contains all financial audits for the Q3 fiscal year 2023. Do not archive until Dec."
              </div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-50 dark:bg-slate-800 border-t border-l border-yellow-200 dark:border-yellow-700 rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 pointer-events-none transition-all duration-1000 group-hover:top-[68px] group-hover:left-[100px] text-brand-600">
           <MousePointer2 size={24} className="drop-shadow-md" />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50% , 4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export const PropertiesMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-slate-200 dark:bg-slate-950 rounded-xl border border-slate-300 dark:border-slate-800 overflow-hidden shadow-inner group">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-white dark:bg-slate-900 w-full rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-slate-50 dark:bg-slate-800 px-3 py-2 border-b dark:border-slate-700 flex justify-between items-center">
            <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">Project Alpha Properties</span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-red-400 rounded-sm"></div>
            </div>
          </div>
          <div className="flex border-b dark:border-slate-700 text-[10px] bg-slate-50 dark:bg-slate-800">
            <div className="px-3 py-1.5 text-slate-400 border-r dark:border-slate-700">General</div>
            <div className="px-3 py-1.5 text-slate-400 border-r dark:border-slate-700">Sharing</div>
            <div className="px-3 py-1.5 bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 font-bold border-t-2 border-brand-600 dark:border-brand-400">Comments</div>
            <div className="px-3 py-1.5 text-slate-400">Customize</div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase mb-1 block">Folder Comment</label>
              <div className="w-full h-24 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-2 overflow-hidden relative">
                <div className="text-xs text-slate-700 dark:text-slate-200 whitespace-pre-wrap font-mono overflow-hidden border-r-2 border-brand-500 animate-typing w-0">
                  This project contains all assets for the new website launch.
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <div className="px-4 py-1 rounded bg-brand-600 text-white text-[10px] font-semibold">OK</div>
              <div className="px-4 py-1 rounded border dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px]">Cancel</div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .group:hover .animate-typing {
          animation: typing 3s steps(40, end) forwards;
          animation-delay: 1s;
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #0ea5e9; }
        }
        .animate-typing {
          animation: blink 0.75s step-end infinite;
        }
      `}} />
    </div>
  );
};

export const ColumnMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl group">
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 flex items-center gap-6 text-[10px] font-semibold text-slate-500 border-b dark:border-slate-700">
        <div className="w-24">Name</div>
        <div className="w-16">Date modified</div>
        <div className="flex-1 text-brand-600 dark:text-brand-400">Comments</div>
      </div>
      <div className="p-0">
        {[
          { name: 'Assets', date: '2023-10-12', comment: 'Shared creative assets' },
          { name: 'Reports', date: '2023-09-01', comment: 'Final Q3 performance reviews' },
          { name: 'Drafts', date: '2023-10-15', comment: 'Temporary working files' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-6 px-4 py-2 border-b dark:border-slate-800 text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <div className="w-24 flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-sm shrink-0"></div>
              <span className="truncate dark:text-slate-200">{row.name}</span>
            </div>
            <div className="w-16 text-slate-400">{row.date}</div>
            <div className="flex-1 text-slate-600 dark:text-slate-400 italic truncate group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
              {row.comment}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InstallationMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs mx-auto aspect-[4/3] bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden group">
      <div className="bg-brand-600 px-3 py-2 text-white text-xs font-bold flex justify-between items-center">
        <span>Setup - Folder Comments</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center justify-center h-full text-center">
        <div className="w-full group-hover:hidden animate-pulse">
          <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4 italic">Installing components...</div>
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-brand-500 animate-progress"></div>
          </div>
        </div>
        <div className="hidden group-hover:flex flex-col items-center animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={48} className="text-green-500 mb-4" />
          <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">Installation Complete</div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-4">Folder Comments has been successfully installed on your computer.</p>
          <div className="px-6 py-1.5 bg-brand-600 text-white text-xs rounded font-bold shadow-md shadow-brand-500/20">Finish</div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2.5s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export const ContextMenuMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
      <div className="p-4 relative h-full">
        <div className="flex items-center gap-2 p-2 rounded bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 w-32 translate-x-4 translate-y-4">
          <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
          <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg shadow-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 origin-top-left delay-300">
          <div className="px-3 py-1.5 text-[10px] text-slate-400 border-b dark:border-slate-700">Folder Actions</div>
          <div className="px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center">Open <ChevronRight size={10}/></div>
          <div className="px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Pin to Quick access</div>
          <div className="h-px bg-slate-100 dark:bg-slate-700 my-1"></div>
          <div className="px-3 py-2 text-xs text-white bg-brand-600 font-bold flex justify-between items-center">Properties <ChevronRight size={10} className="text-white/50"/></div>
        </div>
        <div className="absolute top-[80%] left-[80%] pointer-events-none transition-all duration-700 group-hover:top-[55%] group-hover:left-[55%] text-slate-900 dark:text-white">
           <MousePointer2 size={24} className="drop-shadow-md" />
        </div>
      </div>
    </div>
  );
};

export const RTLMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl group">
      <div className="grid grid-cols-2 h-full divide-x dark:divide-slate-700">
        <div className="p-4 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-tighter"><Globe size={14}/> LTR (English)</div>
          <div className="space-y-2">
            <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-full bg-white dark:bg-slate-800 border rounded shadow-sm flex items-center px-2">
               <div className="h-1.5 w-32 bg-slate-100 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-center gap-4 items-end text-right">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-tighter flex-row-reverse"><Globe size={14}/> RTL (Arabic)</div>
          <div className="space-y-2 w-full flex flex-col items-end">
            <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-full bg-white dark:bg-slate-800 border rounded shadow-sm flex items-center justify-end px-2">
               <div className="h-1.5 w-32 bg-slate-100 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DetailsViewMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl group">
      <div className="h-full flex flex-col transition-all duration-700">
        <div className="p-4 grid grid-cols-4 gap-4 opacity-100 group-hover:opacity-0 transition-opacity absolute inset-0 pointer-events-none group-hover:pointer-events-none">
           {[1,2,3,4,5,6,7,8].map(i => (
             <div key={i} className="flex flex-col items-center gap-1">
               <div className="w-10 h-10 bg-yellow-400 rounded shadow-sm"></div>
               <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded"></div>
             </div>
           ))}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-50 dark:bg-slate-800 h-full p-2">
          <div className="flex border-b dark:border-slate-700 pb-2 mb-2 px-2 text-[10px] font-bold text-slate-400 gap-4">
            <div className="w-1/3">Name</div>
            <div className="w-1/3">Size</div>
            <div className="w-1/3 text-brand-500">Comments</div>
          </div>
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-4 px-2 py-1.5 border-b dark:border-slate-700 last:border-0 text-[10px]">
              <div className="w-1/3 flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="w-1/3 h-2 bg-slate-100 dark:bg-slate-700 rounded mt-1"></div>
              <div className="w-1/3 h-2 bg-brand-100 dark:bg-brand-900/30 rounded mt-1"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 bg-brand-600 text-white p-2 rounded-full shadow-lg group-hover:scale-0 transition-transform duration-500">
        <LayoutList size={20} />
      </div>
      <div className="absolute bottom-4 right-4 bg-slate-700 text-white p-2 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500">
        <LayoutGrid size={20} />
      </div>
    </div>
  );
};

export const BulkSelectionMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-inner group">
      <div className="p-4 flex flex-col h-full items-center justify-center">
        <div className="flex gap-4 mb-8">
           <div className="w-12 h-12 bg-blue-500/50 rounded-lg border-2 border-blue-400 flex items-center justify-center animate-pulse">
             <div className="w-8 h-8 bg-yellow-400 rounded shadow"></div>
           </div>
           <div className="w-12 h-12 bg-blue-500/50 rounded-lg border-2 border-blue-400 flex items-center justify-center animate-pulse delay-150">
             <div className="w-8 h-8 bg-yellow-400 rounded shadow"></div>
           </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 w-64 rounded-lg shadow-xl border border-red-200 dark:border-red-900/50 p-4 transform transition-all group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
           <div className="flex items-center gap-2 text-red-500 mb-2">
             <AlertCircle size={14}/>
             <span className="text-[10px] font-bold">MULTIPLE ITEMS SELECTED</span>
           </div>
           <div className="flex gap-2 mb-4 border-b dark:border-slate-800 pb-2">
             <div className="w-10 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
             <div className="w-10 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
             <div className="w-10 h-1.5 bg-slate-400/20 rounded"></div>
           </div>
           <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 italic">
             <XCircle size={12}/> Comments Tab Hidden
           </div>
        </div>
      </div>
    </div>
  );
};

export const SyncMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl group">
      <div className="flex items-center justify-center h-full gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center relative">
            <div className="w-8 h-8 bg-yellow-400 rounded-sm"></div>
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 p-1 rounded-full shadow border dark:border-slate-800">
               <Cloud size={14} className="text-blue-500 animate-bounce" />
            </div>
          </div>
          <div className="h-2 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
        </div>
        
        <div className="w-24 h-px bg-gradient-to-r from-blue-500 to-transparent relative">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        </div>

        <div className="flex flex-col items-center gap-2 opacity-50">
          <Cloud size={40} className="text-slate-300 dark:text-slate-700" />
          <div className="h-1.5 w-12 bg-slate-200 dark:bg-slate-800 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const CommandPromptMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-video bg-slate-950 rounded-lg border border-slate-800 overflow-hidden shadow-2xl font-mono text-xs group">
      <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
        <span className="text-slate-400">Administrator: Command Prompt</span>
        <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 bg-slate-700 rounded-sm"></div>
           <div className="w-2.5 h-2.5 bg-slate-700 rounded-sm"></div>
           <div className="w-2.5 h-2.5 bg-red-900/50 rounded-sm"></div>
        </div>
      </div>
      <div className="p-4 text-slate-300 space-y-2">
        <div>
          <span className="text-slate-500">C:\Windows\System32&gt;</span>
          <span className="ml-2 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-transparent">regsvr32 ShellPropSheetExt64.dll</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-1000 bg-black/20 backdrop-blur-[1px]">
           <div className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 shadow-xl p-4 rounded max-w-[250px] transform scale-95 group-hover:scale-100 transition-transform">
              <div className="flex items-start gap-3">
                 <div className="text-blue-500 text-2xl">i</div>
                 <div className="space-y-2">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">RegSvr32</div>
                    <p className="text-slate-600 dark:text-slate-300 leading-tight">DllRegisterServer in ShellPropSheetExt64.dll succeeded.</p>
                 </div>
              </div>
              <div className="mt-3 flex justify-center">
                 <div className="bg-blue-600 text-white px-4 py-1 rounded text-xs">OK</div>
              </div>
           </div>
        </div>
      </div>
       <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typing-cmd {
          from { width: 0 }
          to { width: 100% }
        }
        .group:hover .animate-typing {
          border-color: #cbd5e1;
          animation: typing-cmd 2s steps(40, end) forwards, blink-caret .75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #cbd5e1; }
        }
      `}} />
    </div>
  );
};

export const FolderOptionsMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3] bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xl overflow-hidden group font-sans">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-3 py-2 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Folder Options</span>
        <XCircle size={14} className="text-slate-400" />
      </div>
      <div className="bg-white dark:bg-slate-800 px-2 pt-2 border-b border-slate-200 dark:border-slate-700 flex gap-1 text-[10px]">
         <div className="px-3 py-1 text-slate-500 border border-transparent">General</div>
         <div className="px-3 py-1 bg-white dark:bg-slate-900 border-x border-t border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 relative -mb-px z-10">View</div>
         <div className="px-3 py-1 text-slate-500 border border-transparent">Search</div>
      </div>
      <div className="p-4 bg-white dark:bg-slate-900 h-full text-[10px] text-slate-700 dark:text-slate-300">
         <div className="border border-slate-200 dark:border-slate-700 p-2 mb-2 rounded">
            <div className="flex gap-2 items-center mb-2">
               <div className="w-8 h-6 bg-slate-200 dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                  <LayoutGrid size={12} className="text-slate-500"/>
               </div>
               <div className="flex-1">
                  <div className="font-semibold mb-0.5">Folder views</div>
                  <div className="text-[9px] text-slate-500">You can apply this view (such as Details or Icons) to all folders of this type.</div>
               </div>
            </div>
            <div className="flex justify-center gap-2">
               <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded shadow-sm hover:bg-brand-50 hover:border-brand-300 hover:text-brand-600 transition-colors cursor-pointer group-hover:scale-105 duration-200">Apply to Folders</div>
               <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded shadow-sm opacity-50">Reset Folders</div>
            </div>
         </div>
         <div className="border border-slate-200 dark:border-slate-700 h-24 p-2 rounded overflow-hidden relative">
            <div className="font-semibold mb-1">Advanced settings:</div>
            <div className="space-y-1 opacity-70">
               <div className="flex items-center gap-1"><div className="w-3 h-3 border border-slate-300 rounded-sm"></div> Always show icons, never thumbnails</div>
               <div className="flex items-center gap-1"><div className="w-3 h-3 border border-slate-300 rounded-sm bg-blue-500 border-blue-600 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-[1px]"></div></div> Always show menus</div>
            </div>
            <div className="absolute top-[30%] right-[30%] pointer-events-none group-hover:top-[28%] group-hover:right-[45%] transition-all duration-1000 delay-500">
               <MousePointer2 size={24} className="text-slate-900 dark:text-white drop-shadow-md fill-current" />
            </div>
         </div>
      </div>
    </div>
  );
};