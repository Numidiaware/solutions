import React, { useRef, useState } from 'react';
import { ShieldCheck, Printer, Copy, Check } from 'lucide-react';

const License: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        const printContent = contentRef.current;
        if (printContent) {
            const printWindow = window.open('', '', 'height=600,width=800');
            if (printWindow) {
                printWindow.document.write('<html><head><title>License Agreement - Numidiaware</title>');
                // Add basic styles for printing
                printWindow.document.write(`
                <style>
                    body { font-family: sans-serif; line-height: 1.5; color: #333; padding: 40px; }
                    h1 { font-size: 24px; margin-bottom: 20px; text-align: center; }
                    h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
                    h3 { font-size: 16px; margin-top: 15px; margin-bottom: 5px; }
                    h4 { font-size: 14px; margin-top: 10px; margin-bottom: 5px; font-weight: bold; }
                    p { margin-bottom: 10px; font-size: 12px; }
                    ul { margin-bottom: 10px; padding-left: 20px; }
                    li { margin-bottom: 5px; font-size: 12px; }
                    .header-info { background: #f5f5f5; padding: 15px; margin-bottom: 20px; border-radius: 5px; font-size: 12px; }
                    .header-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                    .footer { margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px; text-align: center; font-size: 10px; }
                </style>
            `);
                printWindow.document.write('</head><body>');
                printWindow.document.write(printContent.innerHTML);
                printWindow.document.write('</body></html>');
                printWindow.document.close();
                printWindow.focus();
                printWindow.print();
            }
        }
    };

    const handleCopy = () => {
        if (contentRef.current) {
            const text = contentRef.current.innerText;
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="text-brand-600 dark:text-brand-500" />
                    License Agreement
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        {copied ? <Check size={16} className="text-green-500"/> : <Copy size={16}/>}
                        {copied ? 'Copied' : 'Copy Text'}
                    </button>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        <Printer size={16}/>
                        Print
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-8">
                {/* Scrollable Container */}
                <div ref={contentRef} className="h-[600px] overflow-y-auto p-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed scroll-smooth">

                    <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">END USER LICENSE AGREEMENT (EULA)</h1>

                    {/* Metadata Box */}
                    <div className="header-info bg-slate-50 dark:bg-slate-800 p-4 rounded-md border border-slate-200 dark:border-slate-700 mb-8 font-mono text-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                            <div><span className="font-semibold text-slate-900 dark:text-slate-200">Product Name:</span> Folder Comments Shell Extension</div>
                            <div><span className="font-semibold text-slate-900 dark:text-slate-200">Version:</span> 1.0.0.0</div>
                            <div><span className="font-semibold text-slate-900 dark:text-slate-200">Copyright:</span> © 2026 Numidiaware™</div>
                            <div><span className="font-semibold text-slate-900 dark:text-slate-200">Effective Date:</span> January 2026</div>
                            <div className="md:col-span-2"><span className="font-semibold text-slate-900 dark:text-slate-200">License Type:</span> Proprietary Freeware - Non-Commercial Use Only</div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <p className="font-bold text-red-600 dark:text-red-400">IMPORTANT - READ CAREFULLY</p>
                        <p>
                            This End User License Agreement ("Agreement") is a legal agreement between you (either an individual or a single entity, "Licensee" or "You")
                            and the developer of Numidiaware™ ("Licensor", "Developer", "I", or "My") for the software product identified above, which includes
                            computer software and may include associated media, printed materials, and online or electronic documentation (collectively, the "Software").
                        </p>
                        <p className="font-semibold">
                            BY INSTALLING, COPYING, OR OTHERWISE USING THE SOFTWARE, YOU AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT.
                            IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, DO NOT INSTALL OR USE THE SOFTWARE.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">1. GRANT OF LICENSE</h3>
                            <div className="space-y-4 pl-2">
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">1.1 License Grant</h4>
                                    <p>Subject to the terms and conditions of this Agreement, the Developer hereby grants you a non-exclusive, non-transferable, revocable, limited license to install and use the Software solely for personal, educational, or other non-commercial purposes.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">1.2 Scope of Use</h4>
                                    <p className="mb-1">You may:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Install and use the Software on any number of computers under your control</li>
                                        <li>Make backup copies of the Software for archival purposes only</li>
                                        <li>Use the Software for personal, educational, or non-profit purposes</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">1.3 Non-Commercial Use Definition</h4>
                                    <p className="mb-1">"Non-Commercial Use" means use of the Software that does not involve:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Any form of payment, monetary compensation, or financial gain</li>
                                        <li>Use within a for-profit organization or business environment</li>
                                        <li>Use in the production of goods or services offered for sale</li>
                                        <li>Use in consulting, contracting, or professional services</li>
                                        <li>Any commercial advantage or private financial gain</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">2. RESTRICTIONS</h3>
                            <div className="space-y-4 pl-2">
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">2.1 You May NOT:</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Use the Software for any commercial purpose whatsoever</li>
                                        <li>Modify, adapt, translate, or create derivative works of the Software</li>
                                        <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Software, except to the extent expressly permitted by applicable law</li>
                                        <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices from the Software</li>
                                        <li>Rent, lease, lend, sell, sublicense, assign, or transfer the Software or your rights under this Agreement</li>
                                        <li>Distribute, publish, or make the Software available to third parties</li>
                                        <li>Use the Software in any manner that violates applicable laws or regulations</li>
                                        <li>Use the Software to develop competing products or services</li>
                                        <li>Publicly display or perform the Software</li>
                                        <li>Extract components of the Software for separate use</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">2.2 Commercial Use Prohibition</h4>
                                    <p>If you wish to use the Software for commercial purposes, you must contact the Developer to obtain a separate commercial license. Commercial use without a valid commercial license constitutes a material breach of this Agreement.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">2.3 Source Code</h4>
                                    <p>The Software is licensed, not sold. The source code of the Software is proprietary and confidential information of Numidiaware™. You acknowledge that no source code is provided under this Agreement, and you have no right to access or obtain the source code.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">3. INTELLECTUAL PROPERTY</h3>
                            <div className="space-y-4 pl-2">
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">3.1 Ownership</h4>
                                    <p>The Software is owned by Numidiaware™ and is protected by copyright laws, international copyright treaties, and other intellectual property laws and treaties. All rights, title, and interest in and to the Software (including but not limited to any images, photographs, animations, video, audio, music, text, and "applets" incorporated into the Software), the accompanying printed materials, and any copies of the Software are owned by Numidiaware™.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">3.2 Trademarks</h4>
                                    <p>Numidiaware™ and Folder Comments Shell Extension are trademarks of Numidiaware™. You may not use these trademarks without the prior written consent of Numidiaware™.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">3.3 Reservation of Rights</h4>
                                    <p>All rights not expressly granted to you in this Agreement are reserved by Numidiaware™. This Agreement does not grant you any rights to patents, copyrights, trade secrets, trademarks, or any other intellectual property rights of Numidiaware™.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">4. TERM AND TERMINATION</h3>
                            <div className="space-y-4 pl-2">
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">4.1 Term</h4><p>This Agreement is effective from the date you first install or use the Software and shall continue until terminated in accordance with this Section.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">4.2 Termination by You</h4><p>You may terminate this Agreement at any time by uninstalling and destroying all copies of the Software in your possession or control.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">4.3 Termination by Developer</h4><p>The Developer may terminate this Agreement immediately without notice if you fail to comply with any term of this Agreement. Upon termination for breach, you must immediately cease all use of the Software and destroy all copies.</p></div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">4.4 Effect of Termination</h4>
                                    <p className="mb-1">Upon termination of this Agreement for any reason:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>All rights granted to you under this Agreement shall immediately cease</li>
                                        <li>You must immediately cease all use of the Software</li>
                                        <li>You must immediately destroy or delete all copies of the Software in your possession or control</li>
                                        <li>At the Developer's request, you must certify in writing that you have complied with these requirements</li>
                                    </ul>
                                </div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">4.5 Survival</h4><p>Sections 2 (Restrictions), 3 (Intellectual Property), 5 (No Warranty), 6 (Limitation of Liability), 7 (Disclaimer), and 9 (General Provisions) shall survive termination of this Agreement.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">5. NO WARRANTY</h3>
                            <div className="space-y-4 pl-2">
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">5.1 AS-IS BASIS</h4><p className="uppercase">THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p></div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">5.2 No Guarantees</h4>
                                    <p className="mb-1">The Developer does not warrant that:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>The Software will meet your requirements or expectations</li>
                                        <li>The operation of the Software will be uninterrupted or error-free</li>
                                        <li>Defects in the Software will be corrected</li>
                                        <li>The Software is free from viruses or other harmful components</li>
                                        <li>The results obtained from using the Software will be accurate or reliable</li>
                                    </ul>
                                </div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">5.3 Risk Assumption</h4><p>You assume all risks associated with the installation and use of the Software. You are solely responsible for any damage to your computer system or loss of data that results from the use of the Software.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">5.4 No Technical Support</h4><p>The Developer is under no obligation to provide technical support, maintenance, updates, upgrades, or bug fixes for the Software, although I may choose to do so at my sole discretion.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">6. LIMITATION OF LIABILITY</h3>
                            <div className="space-y-4 pl-2">
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">6.1 Exclusion of Damages</h4><p className="uppercase">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE DEVELOPER BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, LOSS OF DATA, OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF THE DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">6.2 Maximum Liability</h4><p className="uppercase">IN NO EVENT SHALL THE DEVELOPER'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT, INCLUDING NEGLIGENCE, OR OTHERWISE) EXCEED THE AMOUNT PAID BY YOU FOR THE SOFTWARE. SINCE THE SOFTWARE IS PROVIDED FREE OF CHARGE FOR NON-COMMERCIAL USE, THIS AMOUNT IS ZERO (US $0.00).</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">6.3 Jurisdictional Limitations</h4><p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you. In such jurisdictions, the Developer's liability shall be limited to the greatest extent permitted by law.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">7. DISCLAIMER</h3>
                            <div className="space-y-4 pl-2">
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">7.1 No Professional Advice</h4><p>The Software is not intended to provide and does not constitute legal, accounting, tax, financial, or other professional advice. You should consult with appropriate professionals for advice specific to your situation.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">7.2 System Compatibility</h4><p>Numidiaware™ does not guarantee that the Software will be compatible with your hardware, operating system, or other software applications. You are responsible for ensuring compatibility before installation.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">7.3 Data Backup</h4><p>You acknowledge that you are solely responsible for maintaining adequate backups of your data and files. Numidiaware™ shall not be responsible for any loss of data resulting from the use of the Software.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">7.4 Third-Party Content</h4><p>The Software may contain or interact with third-party content, websites, or services. Numidiaware™ is not responsible for and does not endorse any third-party content, and your use of such content is at your own risk.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">8. UPDATES AND MODIFICATIONS</h3>
                            <div className="space-y-4 pl-2">
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">8.1 Software Updates</h4><p>The Developer may, at sole discretion, provide updates, upgrades, patches, or new versions of the Software. Such updates may be provided automatically or may require manual installation. This Agreement shall govern any updates unless the update is accompanied by a separate license agreement.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">8.2 Agreement Modifications</h4><p>Numidiaware™ reserves the right to modify this Agreement at any time. If material changes are made, the Developer will make reasonable efforts to notify you. Your continued use of the Software after such modifications constitutes your acceptance of the modified Agreement.</p></div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">8.3 No Obligation</h4><p>The Developer has no obligation to provide any updates, support, or maintenance for the Software.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">9. GENERAL PROVISIONS</h3>
                            <div className="space-y-4 pl-2">
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.1 Entire Agreement</h4>
                                    <p>This Agreement constitutes the entire agreement between you and the Developer concerning the Software and supersedes all prior or contemporaneous oral or written communications, proposals, and representations with respect to the Software or any other subject matter covered by this Agreement.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.2 Governing Law</h4>
                                    <p>This Agreement shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. You consent to the jurisdiction and venue of applicable courts for all disputes arising out of or relating to this Agreement.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.3 Severability</h4>
                                    <p>If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not in any way be affected or impaired, and such provision shall be reformed only to the extent necessary to make it enforceable.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.4 Waiver</h4>
                                    <p>No waiver of any term or condition of this Agreement shall be deemed a further or continuing waiver of such term or condition or any other term or condition. The Developer's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.5 Assignment</h4>
                                    <p>You may not assign or transfer this Agreement or any rights granted hereunder, by operation of law or otherwise, without the Developer's prior written consent. Any attempt to do so without such consent shall be void. The Developer may assign this Agreement without restriction.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.6 Export Compliance</h4>
                                    <p>You agree to comply with all applicable export and import laws and regulations. You shall not export or re-export the Software, directly or indirectly, to any countries that are subject to export restrictions or to any person or entity whose receipt of the Software would violate applicable law.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.7 U.S. Government Rights</h4>
                                    <p>If the Software is licensed to or for the U.S. Government, the Software is "commercial computer software" and is provided with restricted rights as defined in FAR 52.227-19 and DFARS 227.7202.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.8 Audit Rights</h4>
                                    <p>The Developer reserves the right to audit your use of the Software to ensure compliance with this Agreement. You agree to cooperate with any such audit and to provide reasonable access to relevant records and systems.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.9 Force Majeure</h4>
                                    <p>The Developer shall not be liable for any failure or delay in performance due to causes beyond reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, or Internet service provider failures.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.10 Contact Information</h4>
                                    <p className="mb-2">For questions regarding this Agreement or to request a commercial license, please contact:</p>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded text-sm font-medium">
                                        Numidiaware™<br/>
                                        Independent Software Developer<br/>
                                        Email: numidiaware@gmail.com<br/>
                                        Website: https://numidiaware.github.io/solutions/
                                    </div>
                                    <p className="mt-2 text-xs italic">Note: Numidiaware™ is an independent solo developer. This license represents my commitment to providing quality freeware while protecting my intellectual property rights.</p>
                                </div>
                                <div><h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">9.11 Language</h4><p>This Agreement is written in English. In the event of any conflict between the English version and any translation, the English version shall prevail.</p></div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-200 dark:border-slate-700">10. ACKNOWLEDGMENT</h3>
                            <div className="space-y-4 pl-2">
                                <p className="uppercase font-semibold">BY INSTALLING, COPYING, OR OTHERWISE USING THE SOFTWARE, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.</p>
                                <p className="uppercase font-semibold text-red-600 dark:text-red-400">IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, DO NOT INSTALL OR USE THE SOFTWARE AND DELETE ALL COPIES IN YOUR POSSESSION.</p>
                            </div>
                        </section>
                    </div>

                    {/* Footer Metadata */}
                    <div className="footer mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 text-center font-mono">
                        <p>Software Version: 1.0.0.0 | License Version: 1.0</p>
                        <p>Last Updated: January 2026</p>
                        <p className="mt-2">© 2026 Numidiaware™. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default License;