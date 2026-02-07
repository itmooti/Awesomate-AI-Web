import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const HeroCode = `
<style>
  #n8-hero {
    position: relative !important; padding: 120px 0 100px !important;
    background:
      linear-gradient(to right, rgba(15,17,40,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15,17,40,0.03) 1px, transparent 1px),
      var(--color-5, #ffffff) !important;
    background-size: 64px 64px, 64px 64px, auto !important;
    overflow: hidden !important; text-align: center !important;
  }
  .n8-hero-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.06) 0%, rgba(239,149,99,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8-hero-mark {
    position: absolute !important; left: -80px !important; bottom: -40px !important;
    width: 300px !important; height: 300px !important; opacity: 0.03 !important;
    pointer-events: none !important; transform: rotate(-15deg) !important;
  }
  .n8-hero-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8-hero-badge {
    display: inline-flex !important; align-items: center !important;
    padding: 6px 16px !important; background: rgba(15,17,40,0.04) !important;
    color: var(--color-1) !important; border-radius: 100px !important;
    margin-bottom: 32px !important; border: 1px solid rgba(15,17,40,0.08) !important;
    font-family: var(--font-main) !important; font-size: 11px !important;
    font-weight: 800 !important; text-transform: uppercase !important;
    letter-spacing: 0.2em !important;
  }
  .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 48px !important; line-height: 1.05 !important;
    color: var(--color-1) !important; margin: 0 auto 24px !important;
    max-width: 1000px !important; letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 { font-size: 64px !important; }
  }
  @media (min-width: 1024px) {
    .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 { font-size: 76px !important; }
  }
  .n8-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .n8-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 800px !important; margin: 0 auto 48px !important; font-weight: 500 !important;
  }
  @media (min-width: 768px) {
    .n8-hero-sub { font-size: 22px !important; }
  }
  .n8-hero-bullets {
    display: flex !important; flex-wrap: wrap !important;
    justify-content: center !important; gap: 40px !important;
    margin-bottom: 48px !important;
  }
  .n8-hero-bullet {
    font-family: var(--font-main) !important; font-weight: 700 !important;
    color: var(--color-1) !important; display: flex !important;
    align-items: center !important; gap: 8px !important; font-size: 15px !important;
  }
  .n8-hero-dot {
    width: 8px !important; height: 8px !important;
    background: var(--color-2) !important; border-radius: 50% !important;
  }
  .n8-hero-actions {
    display: flex !important; flex-direction: column !important;
    gap: 24px !important; align-items: center !important; justify-content: center !important;
  }
  @media (min-width: 640px) {
    .n8-hero-actions { flex-direction: row !important; }
  }
  .n8-hero-btn.n8-hero-btn.n8-hero-btn.n8-hero-btn {
    display: inline-flex !important; align-items: center !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 20px 44px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 17px !important;
    font-weight: 800 !important; text-decoration: none !important;
    box-shadow: 0 20px 40px rgba(233,72,77,0.2) !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .n8-hero-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 24px 48px rgba(233,72,77,0.3) !important; }
  .n8-hero-link {
    font-family: var(--font-main) !important; font-weight: 700 !important;
    font-size: 17px !important; text-decoration: none !important;
    color: var(--color-1) !important; display: inline-flex !important;
    align-items: center !important; gap: 8px !important; transition: color 0.2s !important;
  }
  .n8-hero-link:hover { color: var(--color-2) !important; }
  .n8-hero-link svg { width: 20px !important; height: 20px !important; }
</style>

<section id="n8-hero">
  <div class="n8-hero-glow"></div>
  <svg class="n8-hero-mark" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="n8-hero-container">
    <div class="n8-hero-badge">Enterprise-Grade n8n Hosting</div>
    <h1 class="n8-hero-h1">n8n Hosting That <br/><span class="n8-hero-gradient">Never Goes Down</span></h1>
    <p class="n8-hero-sub">Run n8n on infrastructure designed for automation businesses that can't afford outages, data loss, or slow recovery.</p>
    <div class="n8-hero-bullets">
      <div class="n8-hero-bullet"><span class="n8-hero-dot"></span> Built for serious workflows</div>
      <div class="n8-hero-bullet"><span class="n8-hero-dot"></span> Instant failover</div>
      <div class="n8-hero-bullet"><span class="n8-hero-dot"></span> Backups every 30m</div>
      <div class="n8-hero-bullet"><span class="n8-hero-dot"></span> Fully managed</div>
    </div>
    <div class="n8-hero-actions">
      <a href="#pricing" class="n8-hero-btn">Get Managed n8n Hosting</a>
      <a href="#how-it-works" class="n8-hero-link">See how it's different <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
    </div>
  </div>
</section>
`;

export const Hero: React.FC = () => {
  return (
    <CopyWrapper blockName="Hero" codeToCopy={HeroCode}>
      <section className="relative py-24 lg:py-40 overflow-hidden bg-[linear-gradient(to_right,rgba(15,17,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,17,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px] bg-white">
        {/* Radial glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
        {/* Molecular watermark */}
        <svg className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] opacity-[0.03] pointer-events-none -rotate-[15deg]" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-navy/[0.04] text-brand-navy text-[11px] font-800 mb-8 tracking-[0.2em] uppercase border border-brand-navy/[0.08]">
            Enterprise-Grade n8n Hosting
          </div>
          <h1 className="text-[clamp(3rem,7vw,4.75rem)] font-heading font-800 leading-[1.05] tracking-tight text-brand-navy mb-6 max-w-5xl mx-auto">
            n8n Hosting That <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Never Goes Down</span>
          </h1>
          <p className="text-lg md:text-[22px] text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-500">
            Run n8n on infrastructure designed for automation businesses that can't afford outages, data loss, or slow recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
            {['Built for serious workflows', 'Instant failover', 'Backups every 30m', 'Fully managed'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[15px] font-700 text-brand-navy">
                <div className="w-2 h-2 rounded-full bg-brand-accent" /> {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#pricing" className="bg-gradient-to-br from-brand-accent to-brand-orange text-white px-11 py-5 rounded-[10px] text-[17px] font-800 shadow-xl shadow-brand-accent/20 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-accent/30 transition-all no-underline">
              Get Managed n8n Hosting
            </a>
            <a href="#how-it-works" className="group flex items-center gap-2 text-brand-navy text-[17px] font-700 hover:text-brand-accent transition-colors no-underline">
              See how it's different
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
