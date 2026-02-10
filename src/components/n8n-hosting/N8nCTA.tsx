import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const N8nCTACode = `
<style>
  #n8-cta {
    padding: 100px 0 !important;
    background: var(--color-bg-dark, #0a0e1a) !important;
    position: relative !important; overflow: hidden !important;
  }
  .n8c-glow {
    position: absolute !important; top: 50% !important; left: 50% !important;
    transform: translate(-50%, -50%) !important; width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%) !important;
    pointer-events: none !important;
  }
  .n8c-container {
    max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important;
    text-align: center !important; position: relative !important; z-index: 1 !important;
  }
  .n8c-h2.n8c-h2.n8c-h2.n8c-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: white !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8c-h2.n8c-h2.n8c-h2.n8c-h2 { font-size: 48px !important; }
  }
  .n8c-sub {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: rgba(255,255,255,0.5) !important; line-height: 1.7 !important;
    max-width: 520px !important; margin: 0 auto 36px !important;
  }
  .n8c-btn {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 16px 36px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 15px !important;
    text-decoration: none !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .n8c-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 16px 40px rgba(233,72,77,0.35) !important; }
  .n8c-btn svg { width: 18px !important; height: 18px !important; }
  .n8c-note {
    font-family: var(--font-main) !important; font-size: 13px !important;
    color: rgba(255,255,255,0.3) !important; margin-top: 20px !important;
  }
  .n8c-mark { position: absolute !important; right: -50px !important; top: 50% !important; transform: translateY(-50%) rotate(15deg) !important; width: 350px !important; height: 350px !important; opacity: 0.04 !important; pointer-events: none !important; }
</style>

<section id="n8-cta">
  <div class="n8c-glow"></div>
  <svg class="n8c-mark" viewBox="580 480 140 120" fill="rgba(255,255,255,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="n8c-container">
    <h2 class="n8c-h2">Ready to Put Your Business on Autopilot?</h2>
    <p class="n8c-sub">Book a free call and we'll show you which of your processes can be automated — and how much time and money you'll save.</p>
    <a href="#pricing" class="n8c-btn">
      Get Started Now
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
    </a>
    <p class="n8c-note">No lock-in contracts. Cancel anytime.</p>
  </div>
</section>
`;

export const N8nCTA: React.FC = () => {
  return (
    <CopyWrapper blockName="N8nCTA" codeToCopy={N8nCTACode}>
      <section className="py-24 lg:py-28 bg-[#0a0e1a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(16,185,129,0.08)_0%,_transparent_60%)] pointer-events-none" />

        {/* Molecular mark watermark */}
        <svg className="absolute right-[-50px] top-1/2 -translate-y-1/2 rotate-[15deg] w-[350px] h-[350px] opacity-[0.04] pointer-events-none" viewBox="580 480 140 120" fill="rgba(255,255,255,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>

        <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-800 text-white leading-[1.15] tracking-tight mb-5">
            Ready to Put Your Business on Autopilot?
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[520px] mx-auto mb-9">
            Book a free call and we'll show you which of your processes can be automated — and how much time and money you'll save.
          </p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-9 py-4 rounded-[10px] text-[15px] font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/35 transition-all no-underline">
            Get Started Now
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </a>
          <p className="text-[13px] text-white/30 mt-5">No lock-in contracts. Cancel anytime.</p>
        </div>
      </section>
    </CopyWrapper>
  );
};
