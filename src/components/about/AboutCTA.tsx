import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const AboutCTACode = `
<style>
  #ab-cta { position: relative !important; padding: 100px 0 !important; background: var(--color-bg-dark, #0a0e1a) !important; overflow: hidden !important; }
  .ab-cta-container { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; text-align: center !important; position: relative !important; z-index: 1 !important; }
  .ab-cta-h2.ab-cta-h2.ab-cta-h2.ab-cta-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: white !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .ab-cta-h2.ab-cta-h2.ab-cta-h2.ab-cta-h2 { font-size: 44px !important; } }
  .ab-cta-sub { font-family: var(--font-main) !important; font-size: 17px !important; color: rgba(255,255,255,0.6) !important; line-height: 1.7 !important; margin-bottom: 40px !important; }
  .ab-cta-btn { display: inline-flex !important; align-items: center !important; gap: 8px !important; background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important; color: white !important; padding: 16px 36px !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 800 !important; text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; transition: all 0.2s !important; }
  .ab-cta-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
  .ab-cta-mark { position: absolute !important; right: -50px !important; top: 50% !important; transform: translateY(-50%) rotate(15deg) !important; width: 350px !important; height: 350px !important; opacity: 0.04 !important; pointer-events: none !important; }
</style>

<section id="ab-cta">
  <svg class="ab-cta-mark" viewBox="580 480 140 120" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255,255,255,0.5)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="ab-cta-container">
    <h2 class="ab-cta-h2">Ready to Work Together?</h2>
    <p class="ab-cta-sub">Book a free strategy call and let's chat about how we can help your business run smarter.</p>
    <a href="/contact" class="ab-cta-btn">Book a Free Strategy Call</a>
  </div>
</section>
`;

export const AboutCTA: React.FC = () => {
  return (
    <CopyWrapper blockName="AboutCTA" codeToCopy={AboutCTACode}>
      <section className="relative py-24 lg:py-28 bg-[#0a0e1a] overflow-hidden">
        <svg className="absolute right-[-50px] top-1/2 -translate-y-1/2 rotate-[15deg] w-[350px] h-[350px] opacity-[0.04] pointer-events-none" viewBox="580 480 140 120" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255,255,255,0.5)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
        <div className="max-w-[720px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-white leading-[1.15] tracking-tight mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-[17px] text-white/60 leading-relaxed mb-10">
            Book a free strategy call and let's chat about how we can help your business run smarter.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-9 py-4 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all no-underline">
            Book a Free Strategy Call
          </a>
        </div>
      </section>
    </CopyWrapper>
  );
};
