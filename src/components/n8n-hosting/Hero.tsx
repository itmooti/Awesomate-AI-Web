import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const HeroCode = `
<style>
  #n8-hero {
    position: relative !important; padding: 100px 0 80px !important;
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
  .n8-hero-breadcrumb {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important; margin-bottom: 24px !important;
  }
  .n8-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .n8-hero-breadcrumb a:hover { color: var(--color-2) !important; }
  .n8-hero-breadcrumb span.n8-hero-crumb-active { color: var(--color-2) !important; font-weight: 700 !important; }
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
    .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 { font-size: 72px !important; }
  }
  .n8-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .n8-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 680px !important; margin: 0 auto 40px !important; font-weight: 500 !important;
  }
  .n8-hero-actions {
    display: flex !important; flex-direction: column !important;
    align-items: center !important; gap: 12px !important;
  }
  @media (min-width: 640px) {
    .n8-hero-actions { flex-direction: row !important; justify-content: center !important; gap: 16px !important; }
  }
  .n8-hero-cta {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    font-weight: 800 !important; text-decoration: none !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .n8-hero-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
  .n8-hero-secondary {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    color: var(--color-1) !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    font-weight: 700 !important; text-decoration: none !important;
    border: 1.5px solid rgba(15,17,40,0.12) !important; transition: all 0.2s !important;
    background: transparent !important; cursor: pointer !important;
  }
  .n8-hero-secondary:hover { border-color: var(--color-2) !important; color: var(--color-2) !important; }
</style>

<section id="n8-hero">
  <div class="n8-hero-glow"></div>
  <svg class="n8-hero-mark" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="n8-hero-container">
    <div class="n8-hero-breadcrumb"><a href="/">Home</a> / <a href="/services">Services</a> / <span class="n8-hero-crumb-active">n8n Hosting</span></div>
    <h1 class="n8-hero-h1">Your Business, Running <br/><span class="n8-hero-gradient">on Autopilot</span></h1>
    <p class="n8-hero-sub">Connect your business apps, automate the repetitive stuff, and never worry about it breaking. We handle the tech — you focus on growth.</p>
    <div class="n8-hero-actions">
      <a href="#pricing" class="n8-hero-cta">Get Started</a>
      <a href="#how-it-works" class="n8-hero-secondary">See How It Works</a>
    </div>
  </div>
</section>
`;

export const Hero: React.FC = () => {
  return (
    <CopyWrapper blockName="Hero" codeToCopy={HeroCode}>
      <section className="relative py-28 lg:py-36 overflow-hidden bg-[linear-gradient(to_right,rgba(15,17,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,17,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px] bg-white">
        {/* Radial glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
        {/* Molecular watermark */}
        <svg className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] opacity-[0.03] pointer-events-none -rotate-[15deg]" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="#home" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Home</a>
            <span>/</span>
            <a href="#services" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Services</a>
            <span>/</span>
            <span className="font-bold text-brand-accent">n8n Hosting</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-800 leading-[1.05] tracking-tight text-brand-navy mb-6 max-w-5xl mx-auto">
            Your Business, Running <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">on Autopilot</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-[680px] mx-auto mb-10">
            Connect your business apps, automate the repetitive stuff, and never worry about it breaking. We handle the tech — you focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-7 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all no-underline"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border-[1.5px] border-brand-navy/[0.12] text-brand-navy px-7 py-3.5 rounded-[10px] text-sm font-700 hover:border-brand-accent hover:text-brand-accent transition-all no-underline"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
