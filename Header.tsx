
import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const HeaderCode = `
<style>
    #awesomate-header { 
      position: sticky !important; top: 0 !important; left: 0 !important; right: 0 !important;
      z-index: 99999 !important; background: var(--color-5) !important;
      border-bottom: 1px solid #f3f4f6 !important; width: 100% !important;
      margin: 0 !important; padding: 0 !important;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03) !important;
    }
    .header-inner {
      max-width: 1440px !important; margin: 0 auto !important;
      padding: 0 24px !important; display: flex !important;
      justify-content: space-between !important; align-items: center !important;
      height: 80px !important;
    }
    .header-logo {
      font-size: 22px !important; font-weight: 800 !important;
      color: var(--color-1) !important; text-transform: uppercase !important;
      text-decoration: none !important; letter-spacing: -0.01em !important;
      white-space: nowrap !important;
    }
    .header-logo span { color: var(--color-2) !important; }
    
    .header-nav { display: none !important; align-items: center !important; gap: 32px !important; flex-grow: 1 !important; justify-content: flex-end !important; }
    @media (min-width: 1024px) { .header-nav { display: flex !important; } }
    
    .nav-link { 
      font-size: 14px !important; font-weight: 700 !important; 
      color: #4b5563 !important; text-decoration: none !important; 
      transition: color 0.2s !important; text-transform: none !important;
    }
    .nav-link:hover { color: var(--color-2) !important; }
    
    .btn-cta {
      background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
      color: white !important; padding: 12px 22px !important;
      border-radius: 6px !important; font-size: 14px !important;
      font-weight: 800 !important; text-decoration: none !important;
      box-shadow: 0 4px 10px rgba(233, 72, 77, 0.2) !important;
      transition: all 0.2s !important; display: inline-block !important;
    }
</style>

<header id="awesomate-header">
    <div class="header-inner">
        <a href="#" class="header-logo">AWESOMATE<span>.AI</span></a>
        
        <nav class="header-nav">
            <a href="#how-it-works" class="nav-link">Infrastructure</a>
            <a href="#pricing" class="nav-link">Pricing</a>
            <a href="#who-this-is-for" class="nav-link">Who it's for</a>
            <a href="#faq" class="nav-link">FAQ</a>
            <a href="#pricing" class="btn-cta button">Get Managed n8n</a>
        </nav>
        
        <div style="display: flex; align-items: center;" class="lg:hidden">
            <a href="#pricing" class="btn-cta button">Get Started</a>
        </div>
    </div>
</header>
`;

export const Header: React.FC = () => {
  return (
    <CopyWrapper blockName="Header" codeToCopy={HeaderCode}>
      <header id="awesomate-header-preview" className="sticky top-0 z-[10000] bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold tracking-tight text-brand-navy uppercase no-underline whitespace-nowrap">
                AWESOMATE<span className="text-brand-accent inline">.AI</span>
              </a>
            </div>
            <nav className="hidden lg:flex space-x-8 items-center flex-grow justify-end">
              <a href="#how-it-works" className="text-sm font-bold text-gray-500 hover:text-brand-accent transition no-underline">Infrastructure</a>
              <a href="#pricing" className="text-sm font-bold text-gray-500 hover:text-brand-accent transition no-underline">Pricing</a>
              <a href="#who-this-is-for" className="text-sm font-bold text-gray-500 hover:text-brand-accent transition no-underline">Who it's for</a>
              <a href="#faq" className="text-sm font-bold text-gray-500 hover:text-brand-accent transition no-underline">FAQ</a>
              <a href="#pricing" className="ml-4 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition no-underline whitespace-nowrap">
                Get Managed n8n
              </a>
            </nav>
            <div className="lg:hidden flex items-center">
              <a href="#pricing" className="bg-gradient-to-br from-brand-accent to-brand-orange text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-accent/20 no-underline whitespace-nowrap">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </CopyWrapper>
  );
};
