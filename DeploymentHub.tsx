
import React, { useState } from 'react';

export const DeploymentHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guide' | 'blocks'>('blocks');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(true);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000);
    });
  };

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 left-6 z-[200] bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group border border-white/10"
      >
        <div className="w-6 h-6 bg-brand-accent rounded-md flex items-center justify-center text-[10px] font-900">A</div>
        <span className="text-[10px] font-900 uppercase tracking-widest max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 whitespace-nowrap pr-0 group-hover:pr-2">
          Deploy Hub
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex flex-col gap-2 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-brand-navy border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-80">
        <div className="p-4 bg-white/5 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-brand-accent rounded flex items-center justify-center text-[8px] font-900 text-white">A</div>
            <h3 className="text-white font-900 text-[10px] uppercase tracking-widest">Ontraport Hub</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <button 
                onClick={() => setActiveTab('blocks')}
                className={`text-[9px] font-bold px-2 py-1 rounded transition-colors ${activeTab === 'blocks' ? 'bg-brand-accent text-white' : 'text-white/40 hover:text-white/60'}`}
              >
                BLOCKS
              </button>
              <button 
                onClick={() => setActiveTab('guide')}
                className={`text-[9px] font-bold px-2 py-1 rounded transition-colors ${activeTab === 'guide' ? 'bg-brand-accent text-white' : 'text-white/40 hover:text-white/60'}`}
              >
                GUIDE
              </button>
            </div>
            <button 
              onClick={() => setIsMinimized(true)}
              className="text-white/40 hover:text-white transition-colors"
              title="Minimize"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-4 space-y-3">
          {activeTab === 'blocks' ? (
            <>
              <p className="text-[11px] text-white/40 mb-2">Click to copy blocks formatted for Ontraport Custom HTML elements.</p>
              
              <button 
                onClick={() => copyToClipboard(document.querySelector('footer button')?.getAttribute('data-global-code') || '', 'Global')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="text-[10px] font-900 text-brand-accent mb-1 tracking-wider">STEP 1: GLOBAL SETTINGS</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Global' ? '✓ COPIED TO CLIPBOARD' : 'Copy Header/Fonts Code'}</div>
              </button>

              <button 
                onClick={() => copyToClipboard(document.getElementById('header-code')?.innerText || '', 'Header')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="text-[10px] font-900 text-white/60 mb-1 tracking-wider">STEP 2: HEADER BLOCK</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Header' ? '✓ COPIED TO CLIPBOARD' : 'Copy Nav & Logo Block'}</div>
              </button>

              <div className="pt-2">
                <div className="text-[9px] font-900 text-white/30 mb-2 tracking-widest">STEP 3: BODY SECTIONS</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Hero', 'Infrastructure', 'WhoItIsFor', 'Performance', 'Pricing', 'FAQ'].map((section) => (
                    <button 
                      key={section}
                      onClick={() => copyToClipboard(document.getElementById(`${section.toLowerCase()}-code`)?.innerText || '', section)}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-[10px] text-white font-bold text-center transition-all"
                    >
                      {copiedLabel === section ? '✓' : section}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => copyToClipboard(document.getElementById('footer-code')?.innerText || '', 'Footer')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group mt-2"
              >
                <div className="text-[10px] font-900 text-white/60 mb-1 tracking-wider">STEP 4: FOOTER BLOCK</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Footer' ? '✓ COPIED TO CLIPBOARD' : 'Copy Footer Block'}</div>
              </button>
            </>
          ) : (
            <div className="space-y-4 text-xs text-white/70 leading-relaxed">
              <div>
                <strong className="text-white block mb-1">1. Global Code</strong>
                Paste this into <span className="text-brand-accent italic">Page Settings > Header Code</span>. This loads Tailwind and resets body margins.
              </div>
              <div>
                <strong className="text-white block mb-1">2. Red Bar Issue?</strong>
                If you see a red bar behind your header, ensure the <span className="text-brand-accent italic">Ontraport Block Padding</span> is set to 0. Use the "Step 2" block which now has self-contained styling to prevent leaks.
              </div>
              <div>
                <strong className="text-white block mb-1">3. Mobile First</strong>
                All code is responsive. Use separate Custom HTML elements in Ontraport for each block to keep things modular.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
