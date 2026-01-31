import React, { useState, useEffect } from 'react';
import Link from '../../../components/Link';
import { 
  TooltipMockup, 
  PropertiesMockup, 
  ColumnMockup, 
  InstallationMockup,
  ContextMenuMockup,
  RTLMockup,
  DetailsViewMockup,
  BulkSelectionMockup,
  SyncMockup,
  CommandPromptMockup,
  FolderOptionsMockup
} from '../../../components/AnimatedMockup';

const Documentation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'system-requirements', title: '2. System Requirements' },
    { id: 'installation', title: '3. Installation' },
    { id: 'using-folder-comments', title: '4. Using Folder Comments' },
    { id: 'technical-details', title: '5. Technical Details' },
    { id: 'multilingual-support', title: '6. Multilingual Support' },
    { id: 'troubleshooting', title: '7. Troubleshooting' },
    { id: 'uninstallation', title: '8. Uninstallation' },
    { id: 'faq', title: '9. FAQ' },
    { id: 'license-support', title: '10. License & Support' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Table of Contents - Sticky Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 transition-colors duration-200">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">Table of Contents</h3>
          <nav className="space-y-1">
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block text-sm px-2 py-1.5 rounded transition-colors ${
                  activeId === section.id 
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 font-medium' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Folder Comments Documentation</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Complete guide to using Folder Comments</p>

        {/* 1. Introduction */}
        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">1. Introduction</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p>Welcome to <strong>Folder Comments</strong>, a powerful Windows Shell Extension that allows you to add descriptive comments to your folders. These comments appear as tooltips when you hover over folders in Windows Explorer and can be displayed as a column for easy viewing and organization.</p>
            </div>
            <div className="not-prose flex justify-end">
              <TooltipMockup />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">1.1 What is Folder Comments?</h3>
          <p>Folder Comments is a Shell Property Sheet Extension that integrates seamlessly with Windows Explorer. It adds a new 'Comments' tab to folder properties, allowing you to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Add descriptive text to any folder on your computer</li>
            <li>View comments as tooltips when hovering over folders</li>
            <li>Display comments as a column in Windows Explorer for easy scanning</li>
            <li>Organize and document your file system without renaming folders</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">1.2 Key Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Native Windows Integration:</strong> Works directly within Windows Explorer</li>
            <li><strong>Multi-language Support:</strong> Available in 40+ languages</li>
            <li><strong>Single Folder Only:</strong> Tab only appears for individual folders (not multiple selections)</li>
            <li><strong>Instant Updates:</strong> Changes are reflected immediately in Explorer</li>
            <li><strong>Standard Storage:</strong> Uses Windows desktop.ini files (no proprietary database)</li>
          </ul>
        </section>

        {/* 2. System Requirements */}
        <section id="system-requirements" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">2. System Requirements</h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">2.1 Minimum Requirements</h3>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-300 dark:border-slate-700">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Component</th>
                  <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Operating System</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Windows 7 SP1 or later</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Architecture</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">32-bit (x86) or 64-bit (x64)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Privileges</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Administrator (for installation only)</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">Disk Space</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">&lt; 5 MB</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">File Systems</td>
                  <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-700 dark:text-slate-300">NTFS, FAT32</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">2.2 Compatibility</h3>
          <p>Folder Comments is compatible with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Windows Explorer (all versions)</li>
            <li>NTFS and FAT32 file systems</li>
            <li>Local drives, network drives, and external storage</li>
          </ul>
        </section>

        {/* 3. Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">3. Installation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">3.1 Running the Installer</h3>
              <ol className="list-decimal pl-5 space-y-2 mt-4">
                <li>Download the latest setup file from the <Link href="#/products/folder-comments/download" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Downloads</Link> section.</li>
                <li>Double-click the installer file.</li>
                <li>Click 'Yes' when prompted by User Account Control (UAC).</li>
                <li>Read and accept the Freeware License Agreement.</li>
                <li>Choose your installation folder (default: <code>C:\Program Files\Numidiaware\Folder Comments</code>).</li>
                <li>Click 'Install' to begin installation.</li>
                <li>Click 'Finish' when installation completes.</li>
              </ol>
            </div>
            <div className="not-prose flex justify-end">
              <InstallationMockup />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">3.2 Post-Installation</h3>
          <p>After installation:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The correct version (32-bit or 64-bit) is automatically installed based on your Windows version.</li>
            <li>The extension is automatically registered with Windows.</li>
            <li>Explorer may need to restart (this happens automatically).</li>
            <li>A Start Menu folder is created with shortcuts to the website and license.</li>
          </ul>
          <div className="bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-500 p-4 mt-4">
             <p className="text-sm italic">💡 <strong>Tip:</strong> The installer automatically detects whether your system is 32-bit or 64-bit and installs the appropriate DLL file.</p>
          </div>
        </section>

        {/* 4. Using Folder Comments */}
        <section id="using-folder-comments" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">4. Using Folder Comments</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">4.1 Adding a Comment to a Folder</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li>Right-click on any folder in Windows Explorer.</li>
                <li>Select <strong>'Properties'</strong> from the context menu.</li>
                <li>Click on the <strong>'Comments'</strong> tab (or localized name in your language).</li>
                <li>Type your comment in the text box.</li>
                <li>Click <strong>OK</strong> or <strong>Apply</strong> to save.</li>
              </ol>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-4 text-sm">
                <p className="font-bold">⚠️ Important Notes:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>The Comments tab only appears for single folder selections (not multiple folders).</li>
                  <li>The tab only appears for folders, not individual files.</li>
                  <li>Multi-line input is supported, but will be converted to a single line for compatibility.</li>
                </ul>
              </div>
            </div>
            <div className="not-prose space-y-4 flex flex-col items-end">
               <ContextMenuMockup />
               <PropertiesMockup />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-10 mb-3">4.2 Viewing Comments as Tooltips</h3>
          <p>To see your comment as a tooltip:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Navigate to the parent folder containing your commented folder.</li>
            <li>Hover your mouse over the folder icon.</li>
            <li>After a brief moment, a tooltip will appear showing your comment.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-10 mb-3">4.3 Viewing Comments as a Column</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p>For a better overview of all folder comments:</p>
              <ol className="list-decimal pl-5 space-y-2 mt-4">
                <li>Open Windows Explorer and navigate to any folder.</li>
                <li>Right-click on any column header (e.g., 'Name', 'Date modified').</li>
                <li>Check the box next to <strong>'Comments'</strong> (or localized name in your language).</li>
                <li>The Comments column will now appear, showing all folder comments in the current view.</li>
              </ol>
            </div>
            <div className="not-prose flex justify-end">
              <ColumnMockup />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-10 mb-3">4.4 Switching to Details View</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p>To see folder comments in a column format, you need to switch to Details view. The steps vary slightly depending on your Windows version:</p>
              <h4 className="font-bold mt-4">Windows 11</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open File Explorer and navigate to any folder.</li>
                <li>Click the 'View' button in the toolbar.</li>
                <li>Select 'Details' from the dropdown menu.</li>
                <li>Alternative: Right-click in an empty area of the folder window, select 'View', then 'Details'.</li>
              </ul>
              <h4 className="font-bold mt-4">Windows 10</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open File Explorer and navigate to any folder.</li>
                <li>Click the 'View' tab in the ribbon.</li>
                <li>Click 'Details' in the Layout section.</li>
              </ul>
              <h4 className="font-bold mt-4">Windows 7</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Open Windows Explorer and navigate to any folder.</li>
                <li>Click the 'Change your view' button in the toolbar.</li>
                <li>Select 'Details' from the dropdown menu.</li>
              </ul>
            </div>
            <div className="not-prose flex justify-end">
              <DetailsViewMockup />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-10 mb-3">4.5 Applying Folder View Settings to All Folders</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
             <div>
                <p>Once you've configured the Comments column and Details view for one folder, you can apply these settings to all folders of the same type.</p>
                <h4 className="font-bold mt-4">Windows 11 / Windows 10</h4>
                <ol className="list-decimal pl-5 space-y-1">
                   <li>Configure a folder the way you want (Details view, Comments column visible, etc.).</li>
                   <li>Click the 'View' tab in the ribbon (Win10) or three dots menu (Win11).</li>
                   <li>Select 'Options' or 'Folder options'.</li>
                   <li>Click the 'View' tab in the dialog.</li>
                   <li>Click the 'Apply to Folders' button.</li>
                   <li>Click 'Yes' when prompted to confirm.</li>
                   <li>Click 'OK' to close the dialog.</li>
                </ol>
             </div>
             <div className="not-prose flex justify-end">
                <FolderOptionsMockup />
             </div>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded mt-4">
             <p className="font-bold mb-2">📋 Important Notes:</p>
             <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Folder Type Matching:</strong> Windows applies view settings based on folder types (General Items, Documents, Pictures, Music, Videos).</li>
                <li><strong>Reset if Needed:</strong> Go to Folder Options &gt; View tab and click 'Reset Folders' to restore defaults.</li>
                <li><strong>Per-Folder Customization:</strong> You can still customize individual folders differently even after applying global settings.</li>
             </ul>
          </div>
        </section>

        {/* 5. Technical Details */}
        <section id="technical-details" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">5. Technical Details</h2>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">5.1 How It Works</h3>
          <p>Folder Comments uses Windows' native <code>desktop.ini</code> system to store comments:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Creates a hidden <code>desktop.ini</code> file inside each commented folder</li>
            <li>Stores the comment as an 'InfoTip' property</li>
            <li>Sets proper file attributes (Hidden + System)</li>
            <li>Sets the folder's Read-Only attribute (required for desktop.ini to function)</li>
            <li>Notifies Windows Explorer to update immediately</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">5.2 File Storage Location</h3>
          <p>Comments are stored in:</p>
          <pre className="bg-slate-900 text-slate-300 p-3 rounded"><code>[Folder Path]\desktop.ini</code></pre>
          <p className="mt-2">This is a standard Windows configuration file. You can view it by enabling 'Show hidden files' and disabling 'Hide protected operating system files' in Windows Explorer options.</p>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">5.3 DLL Files</h3>
          <p>The extension uses the following DLL files based on your system architecture:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>64-bit Windows: <code>ShellPropSheetExt64.dll</code></li>
            <li>32-bit Windows: <code>ShellPropSheetExt32.dll</code></li>
          </ul>
          <p>Both files are located in <code>%SystemRoot%\System32\</code></p>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">5.4 Registry Keys</h3>
          <p>The extension registers itself in the following Windows Registry locations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><code>HKEY_LOCAL_MACHINE\Software\Classes\Directory\shellex\PropertySheetHandlers\{'{'}9E8F1A2B-3C4D-5E6F-7A8B-9C0D1E2F3A4B{'}'}</code></li>
            <li><code>HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Approved</code></li>
          </ul>
        </section>

        {/* 6. Multilingual Support */}
        <section id="multilingual-support" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">6. Multilingual Support</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">6.1 Supported Languages</h3>
              <p>Folder Comments automatically detects your Windows language and displays the interface accordingly. The following 40+ languages are supported:</p>
              <p className="text-sm italic mt-2">Afrikaans, Albanian, Arabic, Basque, Belarusian, Bulgarian, Catalan, Chinese (Simplified), Croatian, Czech, Danish, Dutch, English, Estonian, Faeroese, Farsi, Finnish, French, German, Greek, Hebrew, Hungarian, Icelandic, Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Norwegian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, Thai, Turkish, Ukrainian, Vietnamese</p>
              
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">6.2 RTL Language Support</h3>
              <p>Right-to-left (RTL) languages are fully supported, including Arabic, Hebrew, and Farsi. The interface automatically adjusts for RTL layout, including text direction, control positioning, and reading order.</p>
            </div>
            <div className="not-prose flex justify-end">
              <RTLMockup />
            </div>
          </div>
        </section>

        {/* 7. Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">7. Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">7.1 Comments Tab Not Appearing</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
               <p><strong>Problem:</strong> The Comments tab doesn't appear in folder properties.</p>
               <p className="font-semibold mt-2">Possible Causes and Solutions:</p>
               <ul className="list-disc pl-5 space-y-1">
                 <li><strong>Multiple folders selected:</strong> The tab only appears when you select a single folder.</li>
                 <li><strong>File selected instead of folder:</strong> The extension only works with folders, not files.</li>
                 <li><strong>Extension not registered:</strong> Re-run the installer or manually register (see Section 7.5).</li>
                 <li><strong>Explorer needs restart:</strong> Restart Windows Explorer via Task Manager.</li>
               </ul>
            </div>
            <div className="not-prose flex justify-end">
              <BulkSelectionMockup />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">7.2 Comments Not Showing in Tooltips</h3>
          <p><strong>Problem:</strong> Comment was saved but doesn't appear when hovering.</p>
          <p className="font-semibold mt-2">Solutions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Press F5 to refresh the Explorer window.</li>
            <li>Navigate away from the folder and back again.</li>
            <li>Restart Windows Explorer.</li>
            <li>Check that the <code>desktop.ini</code> file was created.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">7.3 Comments Column Not Available</h3>
          <p><strong>Problem:</strong> The Comments column doesn't appear in the column header menu.</p>
          <p className="font-semibold mt-2">Solutions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Look for a localized name (e.g., 'Kommentare' in German).</li>
            <li>Click 'More...' at the bottom of the column menu.</li>
            <li>Some folder types may not support all columns.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">7.4 Installation Errors</h3>
          <p><strong>Problem:</strong> Installation fails or shows error messages.</p>
          <p className="font-semibold mt-2">Solutions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Run as Administrator: Right-click the installer and select 'Run as administrator'.</li>
            <li>Antivirus Interference: Temporarily disable antivirus during installation.</li>
            <li>Locked Files: Close all Explorer windows and try again.</li>
            <li>Corrupted Download: Re-download the installer.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">7.5 Manual Registration (Advanced)</h3>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
             <div>
                <p>If the automatic registration fails, you can manually register the DLL using either Command Prompt or PowerShell.</p>
                
                <h4 className="font-bold mt-4">Method 1: Using Command Prompt</h4>
                <p className="mt-2 text-sm font-semibold">For 64-bit Windows:</p>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono">
{`cd %SystemRoot%\\System32
regsvr32 ShellPropSheetExt64.dll`}</pre>
                <p className="mt-2 text-sm font-semibold">For 32-bit Windows:</p>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono">
{`cd %SystemRoot%\\System32
regsvr32 ShellPropSheetExt32.dll`}</pre>

                <h4 className="font-bold mt-4">Method 2: Using PowerShell</h4>
                <p className="mt-2 text-sm font-semibold">For 64-bit Windows:</p>
                <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono overflow-x-auto">
{`regsvr32.exe "$env:SystemRoot\\System32\\ShellPropSheetExt64.dll"
Stop-Process -Name explorer -Force; Start-Process explorer`}</pre>
             </div>
             <div className="not-prose sticky top-32 flex justify-end">
                 <CommandPromptMockup />
             </div>
          </div>
          
          <h4 className="font-bold mt-4">Verifying Registration</h4>
          <p>To verify the extension is properly registered using PowerShell:</p>
          <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono overflow-x-auto">
{`Test-Path "HKLM:\\Software\\Classes\\Directory\\shellex\\PropertySheetHandlers\\{9E8F1A2B-3C4D-5E6F-7A8B-9C0D1E2F3A4B}"`}</pre>
          <p className="mt-1">This command should return 'True' if registered correctly.</p>
          
          <h4 className="font-bold mt-4">Manual Unregistration</h4>
          <p>Command Prompt:</p>
          <pre className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono">
{`regsvr32 /u ShellPropSheetExt64.dll`}</pre>
        </section>

        {/* 8. Uninstallation */}
        <section id="uninstallation" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">8. Uninstallation</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">8.1 Standard Uninstallation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Open Windows Settings.</li>
            <li>Go to 'Apps' or 'Programs and Features'.</li>
            <li>Find 'Folder Comments' in the list.</li>
            <li>Click 'Uninstall'.</li>
            <li>Follow the uninstallation wizard.</li>
          </ul>
          <p className="mt-2">Alternative method: Go to Start Menu &gt; Folder Comments &gt; Uninstall Folder Comments.</p>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">8.2 What Happens During Uninstallation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The DLL files are removed from the Windows System folder.</li>
            <li>Registry entries are cleaned up.</li>
            <li>Start Menu shortcuts are removed.</li>
            <li>Program files are deleted.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">8.3 Preserving Your Comments</h3>
          <div className="bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-500 p-4">
             <p className="text-sm">💡 <strong>Important:</strong> Uninstalling Folder Comments does NOT delete your folder comments. Comments are stored in <code>desktop.ini</code> files within each folder, which remain intact after uninstallation. Your comments will still be visible as tooltips and in the Comments column.</p>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">9. Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-600">Q: Can I add comments to files, not just folders?</h4>
                <p className="text-sm">A: No, this extension is specifically designed for folders. Windows Explorer already has a built-in 'Comments' field for files in the Details tab of file properties.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-600">Q: Can I add comments to multiple folders at once?</h4>
                <p className="text-sm">A: No, the Comments tab only appears when you select a single folder. This is by design to ensure clarity and prevent accidental bulk changes.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-600">Q: Are there any character limits for comments?</h4>
                <p className="text-sm">A: While there's no strict limit enforced by Folder Comments, Windows Explorer tooltips have practical display limits. Very long comments (over 500 characters) may be truncated in tooltips, though they're fully stored.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-600">Q: Will my comments sync to cloud storage (OneDrive, Dropbox, etc.)?</h4>
                <p className="text-sm">A: It depends on your cloud provider's settings. Most cloud services sync hidden files (like <code>desktop.ini</code>) by default, so your comments should sync. Some services may require you to enable syncing of hidden/system files.</p>
              </div>
              <div>
                 <h4 className="font-bold text-brand-600">Q: Do comments work on network drives?</h4>
                 <p className="text-sm">A: Yes, as long as you have write permissions to the network folder. The <code>desktop.ini</code> file will be created on the network share.</p>
              </div>
              <div>
                 <h4 className="font-bold text-brand-600">Q: Can other users see my folder comments?</h4>
                 <p className="text-sm">A: Yes, comments are stored in the folder itself (not in your user profile). Anyone with access to the folder can see the comments, whether they have Folder Comments installed or not.</p>
              </div>
              <div>
                 <h4 className="font-bold text-brand-600">Q: Does this slow down Windows Explorer?</h4>
                 <p className="text-sm">A: No, Folder Comments is a lightweight extension that only activates when you open folder properties. It has no impact on general Explorer performance.</p>
              </div>
              <div>
                 <h4 className="font-bold text-brand-600">Q: Is this software free?</h4>
                 <p className="text-sm">A: Yes, Folder Comments is free for personal and non-commercial use. If you want to use it in a commercial environment, please contact Numidiaware for commercial licensing options.</p>
              </div>
              <div>
                 <h4 className="font-bold text-brand-600">Q: Can I edit desktop.ini files manually?</h4>
                 <p className="text-sm">A: Yes, advanced users can edit <code>desktop.ini</code> files with any text editor. The InfoTip field contains the comment text. However, using the Folder Comments interface is recommended as it handles proper formatting and Windows notifications automatically.</p>
              </div>
            </div>
            <div className="not-prose self-start sticky top-32 flex justify-end">
              <SyncMockup />
            </div>
          </div>
        </section>

        {/* 10. License & Support */}
        <section id="license-support" className="mb-20">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b dark:border-slate-700">10. License and Support</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">10.1 License Information</h3>
          <p>Folder Comments is distributed as freeware under the Numidiaware Freeware License Agreement. Key points:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free to use for personal and non-commercial purposes only</li>
            <li>Commercial use requires a separate license (contact Numidiaware for details)</li>
            <li>No redistribution rights</li>
            <li>No reverse engineering or modification</li>
            <li>Provided 'as is' without warranty</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">10.2 Getting Support</h3>
          <p>If you need help with Folder Comments:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Visit our website: <Link href="#/" className="text-brand-600 dark:text-brand-400 font-medium">https://numidiaware.github.io/Folder-Comments/</Link></li>
            <li>Check the Troubleshooting section of this manual</li>
            <li>Review the FAQ section</li>
            <li>Email us at: <a href="mailto:numidiaware@gmail.com" className="text-brand-600 dark:text-brand-400 font-medium">numidiaware@gmail.com</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-3">10.3 Credits</h3>
          <p>Folder Comments is developed and maintained by Numidiaware, Inc.</p>
          <p className="mt-2 font-semibold">Development Tools:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delphi/Pascal programming language</li>
            <li>Inno Setup installer creation tool</li>
            <li>Windows Shell Extension API</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Documentation;