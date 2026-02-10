import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const HomeHeroCode = `
<style>
  @keyframes hm-shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  #hm-hero {
    position: relative !important;
    padding: 100px 0 80px !important;
    background:
      linear-gradient(to right, rgba(15,17,40,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15,17,40,0.03) 1px, transparent 1px),
      var(--color-5) !important;
    background-size: 64px 64px, 64px 64px, auto !important;
    overflow: hidden !important;
  }
  .hm-hero-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.06) 0%, rgba(239,149,99,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .hm-hero-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
    text-align: center !important;
  }
  .hm-hero-badge {
    display: inline-flex !important; align-items: center !important;
    padding: 6px 16px !important; border-radius: 100px !important;
    background: rgba(15,17,40,0.04) !important; border: 1px solid rgba(15,17,40,0.08) !important;
    font-family: var(--font-main) !important; font-size: 11px !important;
    color: var(--color-1) !important;
    text-transform: uppercase !important; letter-spacing: 0.2em !important;
    margin-bottom: 32px !important;
  }
  .hm-hero-h1.hm-hero-h1.hm-hero-h1.hm-hero-h1 {
    font-family: var(--font-heading) !important;
    font-size: 48px !important; line-height: 1.05 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .hm-hero-h1.hm-hero-h1.hm-hero-h1.hm-hero-h1 { font-size: 64px !important; }
  }
  @media (min-width: 1024px) {
    .hm-hero-h1.hm-hero-h1.hm-hero-h1.hm-hero-h1 { font-size: 76px !important; }
  }
  .hm-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .hm-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 640px !important; margin: 0 auto 40px !important;
  }
  @media (min-width: 768px) {
    .hm-hero-sub { font-size: 20px !important; }
  }
  .hm-hero-actions {
    display: flex !important; flex-direction: column !important;
    align-items: center !important; gap: 12px !important;
  }
  @media (min-width: 640px) {
    .hm-hero-actions { flex-direction: row !important; justify-content: center !important; gap: 16px !important; }
  }
  .hm-hero-cta {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 50%, var(--color-2) 100%) !important;
    background-size: 200% 200% !important;
    animation: hm-shimmer 3s ease infinite !important;
    color: white !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .hm-hero-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
  .hm-hero-cta svg { width: 16px !important; height: 16px !important; }
  .hm-hero-secondary {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: transparent !important; color: var(--color-1) !important;
    padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important;
    border: 1.5px solid rgba(15,17,40,0.12) !important;
    transition: all 0.2s !important; cursor: pointer !important;
  }
  .hm-hero-secondary:hover { border-color: var(--color-2) !important; color: var(--color-2) !important; }
  .hm-hero-molecule {
    position: absolute !important; bottom: -40px !important; right: -40px !important;
    width: 400px !important; height: 400px !important;
    opacity: 0.03 !important; transform: rotate(15deg) !important;
    pointer-events: none !important;
  }
</style>

<section id="hm-hero">
  <div class="hm-hero-glow"></div>
  <svg class="hm-hero-molecule" viewBox="580 480 140 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="hm-hero-container">
    <div class="hm-hero-badge">Your Complete Technology Partner</div>
    <h1 class="hm-hero-h1">Your Business.<br><span class="hm-hero-gradient">Awesomated.</span></h1>
    <p class="hm-hero-sub">Your one partner for AI agents, automated workflows, and custom-built business tools — designed to reduce costs, increase productivity, and accelerate growth.</p>
    <div class="hm-hero-actions">
      <a href="#services" class="hm-hero-cta">
        See What We Do
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 9l-7 7-7-7"/></svg>
      </a>
      <a href="/contact" class="hm-hero-secondary">Book a Free Strategy Call</a>
    </div>
  </div>
</section>
`;

export const HomeHero: React.FC = () => {
  return (
    <CopyWrapper blockName="HomeHero" codeToCopy={HomeHeroCode}>
      <style>{`
        @keyframes hm-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <section
        className="relative py-28 lg:py-36 bg-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(15,17,40,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,40,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      >
        {/* Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />

        {/* Molecular logo watermark */}
        <svg
          className="absolute bottom-[-40px] right-[-40px] w-[400px] h-[400px] opacity-[0.03] rotate-[15deg] pointer-events-none"
          viewBox="580 480 140 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" />
        </svg>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-navy/[0.04] text-brand-navy text-[11px] font-800 mb-8 tracking-[0.2em] uppercase border border-brand-navy/[0.08]">
            Your Complete Technology Partner
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-heading font-800 text-brand-navy leading-[1.05] tracking-tight mb-6">
            Your Business.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Awesomated.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-[640px] mx-auto mb-10">
            Your one partner for AI agents, automated workflows, and custom-built business tools — designed to reduce costs, increase productivity, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-accent/30 transition-all no-underline"
              style={{
                background: 'linear-gradient(135deg, #e9484d 0%, #ef9563 50%, #e9484d 100%)',
                backgroundSize: '200% 200%',
                animation: 'hm-shimmer 3s ease infinite',
              }}
            >
              See What We Do
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-[1.5px] border-brand-navy/[0.12] text-brand-navy px-7 py-3.5 rounded-[10px] text-sm font-700 hover:border-brand-accent hover:text-brand-accent transition-all no-underline">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
