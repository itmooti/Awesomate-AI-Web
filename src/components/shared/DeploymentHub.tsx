
import React, { useState } from 'react';

type PageKey = 'home' | 'n8n-hosting' | 'buddzee' | 'vibe-coding' | 'about' | 'contact' | 'work';

interface PageBlocks {
  label: string;
  sections: string[];
}

const pageBlockMap: Record<PageKey, PageBlocks> = {
  'home': {
    label: 'Home',
    sections: ['HomeHero', 'ServicesOverview', 'WhyAwesomate', 'SocialProof', 'HomeCTA'],
  },
  'n8n-hosting': {
    label: 'n8n Hosting',
    sections: ['Hero', 'N8nProblem', 'Infrastructure', 'WhoItIsFor', 'Performance', 'Pricing', 'FAQ', 'N8nCTA'],
  },
  'buddzee': {
    label: 'Buddzee',
    sections: ['BuddzeeHero', 'BuddzeeProblem', 'BuddzeeHowItWorks', 'BuddzeeFeatures', 'BuddzeeUseCases', 'BuddzeePricing', 'BuddzeeFAQ', 'BuddzeeCTA'],
  },
  'vibe-coding': {
    label: 'Vibe Coding',
    sections: ['VibeHero', 'VibeExplainer', 'VibeProcess', 'VibeFeatures', 'VibeWhoItsFor', 'VibePricing', 'VibeFAQ', 'VibeCTA'],
  },
  'about': {
    label: 'About',
    sections: ['AboutHero', 'AboutStory', 'AboutValues', 'AboutProcess', 'AboutCTA'],
  },
  'contact': {
    label: 'Contact',
    sections: ['ContactHero', 'ContactOptions', 'ContactForm', 'ContactInfo'],
  },
  'work': {
    label: 'Work',
    sections: ['WorkHero', 'WorkProjects'],
  },
};

function getCurrentPage(): PageKey {
  const hash = window.location.hash.replace('#', '');
  if (hash in pageBlockMap) return hash as PageKey;
  return 'home';
}

export const DeploymentHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guide' | 'blocks'>('blocks');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageKey>(getCurrentPage);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000);
    });
  };

  // Re-sync page when opening
  const handleOpen = () => {
    setCurrentPage(getCurrentPage());
    setIsMinimized(false);
  };

  if (isMinimized) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-[200] bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group border border-white/10"
      >
        <div className="w-6 h-6 bg-brand-accent rounded-md flex items-center justify-center text-[10px] font-900">A</div>
        <span className="text-[10px] font-900 uppercase tracking-widest max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 whitespace-nowrap pr-0 group-hover:pr-2">
          Deploy Hub
        </span>
      </button>
    );
  }

  const blocks = pageBlockMap[currentPage];

  return (
    <div className="fixed bottom-6 left-6 z-[200] flex flex-col gap-2 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-brand-navy border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-80">
        {/* Header */}
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

        {/* Page tabs */}
        <div className="px-4 pt-3 pb-1 flex gap-1 flex-wrap">
          {(Object.keys(pageBlockMap) as PageKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              className={`text-[8px] font-800 uppercase tracking-wider px-2 py-1 rounded transition-all ${
                currentPage === key
                  ? 'bg-white/15 text-white'
                  : 'text-white/30 hover:text-white/50'
              }`}
            >
              {pageBlockMap[key].label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-3">
          {activeTab === 'blocks' ? (
            <>
              <p className="text-[11px] text-white/40 mb-2">
                Copy blocks for <span className="text-white/70 font-bold">{blocks.label}</span> page.
              </p>

              {/* Global Code */}
              <button
                onClick={() => copyToClipboard(document.querySelector('footer button')?.getAttribute('data-global-code') || '', 'Global')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-[10px] font-900 text-brand-accent mb-1 tracking-wider">STEP 1: GLOBAL SETTINGS</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Global' ? '\u2713 COPIED TO CLIPBOARD' : 'Copy Header/Fonts Code'}</div>
              </button>

              {/* Header Block */}
              <button
                onClick={() => copyToClipboard(document.getElementById('header-code')?.innerText || '', 'Header')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-[10px] font-900 text-white/60 mb-1 tracking-wider">STEP 2: HEADER BLOCK</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Header' ? '\u2713 COPIED TO CLIPBOARD' : 'Copy Nav & Logo Block'}</div>
              </button>

              {/* Page-specific sections */}
              <div className="pt-2">
                <div className="text-[9px] font-900 text-white/30 mb-2 tracking-widest">STEP 3: BODY SECTIONS</div>
                <div className="grid grid-cols-2 gap-2">
                  {blocks.sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => copyToClipboard(document.getElementById(`${section.toLowerCase()}-code`)?.innerText || '', section)}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-[10px] text-white font-bold text-center transition-all"
                    >
                      {copiedLabel === section ? '\u2713' : section.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Block */}
              <button
                onClick={() => copyToClipboard(document.getElementById('footer-code')?.innerText || '', 'Footer')}
                className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all mt-2"
              >
                <div className="text-[10px] font-900 text-white/60 mb-1 tracking-wider">STEP 4: FOOTER BLOCK</div>
                <div className="text-xs text-white font-bold">{copiedLabel === 'Footer' ? '\u2713 COPIED TO CLIPBOARD' : 'Copy Footer Block'}</div>
              </button>
            </>
          ) : (
            <div className="space-y-4 text-xs text-white/70 leading-relaxed">
              <div>
                <strong className="text-white block mb-1">1. Global Code</strong>
                Paste this into <span className="text-brand-accent italic">Page Settings &gt; Header Code</span>. This loads Tailwind, fonts, and CSS variables.
              </div>
              <div>
                <strong className="text-white block mb-1">2. One Page Per Service</strong>
                Each service has its own Ontraport landing page. Use the page tabs above to switch between block sets.
              </div>
              <div>
                <strong className="text-white block mb-1">3. Block Order</strong>
                Add blocks in order: Header &rarr; Body Sections (top to bottom) &rarr; Footer. Each block is a separate Custom HTML element.
              </div>
              <div>
                <strong className="text-white block mb-1">4. Red Bar Issue?</strong>
                If you see a red bar behind your header, ensure the <span className="text-brand-accent italic">Ontraport Block Padding</span> is set to 0.
              </div>
              <div>
                <strong className="text-white block mb-1">5. Mobile Responsive</strong>
                All code is responsive. Preview at 375px, 768px, and 1440px widths.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
