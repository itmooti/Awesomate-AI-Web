
import React, { useState } from 'react';

const GlobalCode = `
<!-- Paste this in Page Settings > Custom Code > Header -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

<style>
  /* ONTRAPORT COLOR PALETTE MAPPING */
  :root {
    --color-1: #0f1128; /* Navy (Primary Text/Dark) */
    --color-2: #e9484d; /* Red (Accent 1) */
    --color-3: #ef9563; /* Orange (Accent 2) */
    --color-4: #1e63e9; /* Blue (Link/Info) */
    --color-5: #ffffff; /* White (Background) */
    
    --font-main: 'Inter', sans-serif;
    --font-heading: 'Bricolage Grotesque', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  /* INTERACTION & ACCESSIBILITY RESETS */
  * { 
    box-sizing: border-box !important; 
    -webkit-tap-highlight-color: transparent !important; /* Removes the mobile 'aqua' flash */
  }

  /* Custom Focus Ring for Accessibility */
  *:focus-visible {
    outline: 2px solid var(--color-2) !important;
    outline-offset: 4px !important;
  }

  /* ONTRAPORT TYPOGRAPHY OVERRIDES (4x SPECIFICITY) */
  .h1.h1.h1.h1 { font-family: var(--font-heading); font-weight: 800; color: var(--color-1); line-height: 1.1; }
  .h2.h2.h2.h2 { font-family: var(--font-heading); font-weight: 800; color: var(--color-1); line-height: 1.2; }
  .h3.h3.h3.h3 { font-family: var(--font-heading); font-weight: 700; color: var(--color-1); }
  .body-text.body-text.body-text.body-text { font-family: var(--font-main); font-size: 16px; color: #4b5563; line-height: 1.6; }
  .button.button.button.button { font-family: var(--font-main); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 8px; }
  .label.label.label.label { font-family: var(--font-main); font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }

  /* UNIVERSAL RESET FOR CUSTOM HTML BLOCKS */
  html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; overflow-x: hidden !important; scroll-behavior: smooth; }
  
  .accent-gradient-text {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
</style>

<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: { 
            navy: '#0f1128', 
            accent: '#e9484d', 
            orange: '#ef9563', 
            blue: '#1e63e9' 
          },
        },
        fontFamily: { 
          sans: ['Inter', 'sans-serif'],
          heading: ['Bricolage Grotesque', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace']
        }
      }
    }
  }
</script>
`;

const FooterBlockCode = `
<style>
  #awesomate-footer { background: var(--color-5); padding: 80px 0; border-top: 1px solid #f3f4f6; }
  .f-container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
  .f-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
  @media (min-width: 768px) { .f-grid { grid-template-columns: 2fr 1fr 1fr; } }
  .f-logo { font-size: 24px; font-weight: 800; color: var(--color-1); margin-bottom: 24px; text-transform: uppercase; }
  .f-logo span { color: var(--color-2); }
  .f-bottom { margin-top: 60px; padding-top: 40px; border-top: 1px solid #f9fafb; color: #9ca3af; font-size: 13px; text-align: center; }
</style>

<footer id="awesomate-footer">
  <div class="f-container">
    <div class="f-grid">
      <div>
        <div class="f-logo">AWESOMATE<span>.AI</span></div>
        <p class="body-text">The high-availability standard for automation-first businesses. Triple-redundant managed n8n hosting that simply never fails.</p>
      </div>
      <div>
        <h4 class="label">Platform</h4>
        <a href="#how-it-works" class="body-text" style="display:block; margin-bottom:12px; text-decoration:none; color:inherit;">Infrastructure</a>
        <a href="#who-this-is-for" class="body-text" style="display:block; margin-bottom:12px; text-decoration:none; color:inherit;">Who it's for</a>
        <a href="#pricing" class="body-text" style="display:block; margin-bottom:12px; text-decoration:none; color:inherit;">Pricing</a>
      </div>
      <div>
        <h4 class="label">Support</h4>
        <a href="#faq" class="body-text" style="display:block; margin-bottom:12px; text-decoration:none; color:inherit;">FAQ</a>
        <a href="mailto:hello@awesomate.ai" class="body-text" style="display:block; margin-bottom:12px; text-decoration:none; color:inherit;">Contact Us</a>
      </div>
    </div>
    <div class="f-bottom">
      &copy; 2024 Awesomate.ai. All rights reserved.
    </div>
  </div>
</footer>
`;

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyGlobal = () => {
    navigator.clipboard.writeText(GlobalCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-24 relative">
      <div id="footer-code" className="hidden">{FooterBlockCode}</div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tight text-brand-navy mb-8 uppercase">
              AWESOMATE<span className="text-brand-accent">.AI</span>
            </div>
            <p className="text-[15px] text-gray-400 font-medium leading-relaxed max-w-sm">
              The high-availability standard for automation-first businesses. Triple-redundant managed n8n hosting that simply never fails.
            </p>
          </div>
          <div>
            <h5 className="text-[12px] font-bold text-brand-navy uppercase tracking-widest mb-8">Platform</h5>
            <ul className="space-y-5 text-[15px] text-gray-500 font-medium">
              <li><a href="#how-it-works" className="hover:text-brand-accent transition-colors">Infrastructure</a></li>
              <li><a href="#who-this-is-for" className="hover:text-brand-accent transition-colors">Who it's for</a></li>
              <li><a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[12px] font-bold text-brand-navy uppercase tracking-widest mb-8">Support</h5>
            <ul className="space-y-5 text-[15px] text-gray-500 font-medium">
              <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
              <li><a href="mailto:hello@awesomate.ai" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-400 font-medium">
          <p>&copy; 2024 Awesomate.ai. All rights reserved.</p>
          <button 
            onClick={copyGlobal}
            data-global-code={GlobalCode}
            className="flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-lg font-800 uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {copied ? 'GLOBAL CODE COPIED!' : 'COPY SITE-WIDE CODE'}
          </button>
        </div>
      </div>
    </footer>
  );
};
