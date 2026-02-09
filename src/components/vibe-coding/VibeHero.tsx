import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeHeroCode = `
<style>
  #vc-hero { position: relative !important; padding: 100px 0 80px !important; background: var(--color-5) !important; overflow: hidden !important; }
  .vc-hero-glow { position: absolute !important; top: -200px !important; left: 50% !important; transform: translateX(-50%) !important; width: 800px !important; height: 800px !important; background: radial-gradient(circle, rgba(239,149,99,0.06) 0%, rgba(239,149,99,0.02) 40%, transparent 70%) !important; pointer-events: none !important; }
  .vc-hero-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; position: relative !important; z-index: 1 !important; text-align: center !important; }
  .vc-hero-breadcrumb { display: inline-flex !important; align-items: center !important; gap: 8px !important; font-family: var(--font-main) !important; font-size: 12px !important; color: #9ca3af !important; margin-bottom: 24px !important; }
  .vc-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .vc-hero-breadcrumb a:hover { color: var(--color-3) !important; }
  .vc-hero-breadcrumb span { color: var(--color-3) !important; font-weight: 700 !important; }
  .vc-hero-h1.vc-hero-h1.vc-hero-h1.vc-hero-h1 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 48px !important; line-height: 1.05 !important; color: var(--color-1) !important; margin: 0 0 24px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vc-hero-h1.vc-hero-h1.vc-hero-h1.vc-hero-h1 { font-size: 64px !important; } }
  @media (min-width: 1024px) { .vc-hero-h1.vc-hero-h1.vc-hero-h1.vc-hero-h1 { font-size: 72px !important; } }
  .vc-hero-gradient { background: linear-gradient(135deg, var(--color-3) 0%, var(--color-2) 100%) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; }
  .vc-hero-sub { font-family: var(--font-main) !important; font-size: 18px !important; color: #6b7280 !important; line-height: 1.7 !important; max-width: 680px !important; margin: 0 auto 40px !important; font-weight: 500 !important; }
  .vc-hero-actions { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; }
  @media (min-width: 640px) { .vc-hero-actions { flex-direction: row !important; justify-content: center !important; gap: 16px !important; } }
  .vc-hero-cta { display: inline-flex !important; align-items: center !important; gap: 8px !important; background: linear-gradient(135deg, var(--color-3) 0%, var(--color-2) 100%) !important; color: white !important; padding: 14px 28px !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 800 !important; text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; transition: all 0.2s !important; }
  .vc-hero-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(239,149,99,0.3) !important; }
  .vc-hero-secondary { display: inline-flex !important; align-items: center !important; gap: 8px !important; color: var(--color-1) !important; padding: 14px 28px !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 700 !important; text-decoration: none !important; border: 1.5px solid rgba(15,17,40,0.12) !important; transition: all 0.2s !important; }
  .vc-hero-secondary:hover { border-color: var(--color-3) !important; color: var(--color-3) !important; }
</style>

<section id="vc-hero">
  <div class="vc-hero-glow"></div>
  <div class="vc-hero-container">
    <div class="vc-hero-breadcrumb"><a href="/">Home</a> / <a href="/services">Services</a> / <span>Custom Apps</span></div>
    <h1 class="vc-hero-h1">The App You've Always Wanted.<br><span class="vc-hero-gradient">Now Within Reach.</span></h1>
    <p class="vc-hero-sub">Real apps — on your clients' phones, with push notifications, real-time data, and a beautiful experience. Custom software used to cost a fortune. Not anymore. We build it in weeks — and handle everything for you.</p>
    <div class="vc-hero-actions">
      <a href="/contact" class="vc-hero-cta">Start Your Project</a>
      <a href="#vc-process" class="vc-hero-secondary">See How It Works</a>
    </div>
  </div>
</section>
`;

export const VibeHero: React.FC = () => {
  return (
    <CopyWrapper blockName="VibeHero" codeToCopy={VibeHeroCode}>
      <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(239,149,99,0.06)_0%,_rgba(239,149,99,0.02)_40%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="#home" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Home</a>
            <span>/</span>
            <a href="#services" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Services</a>
            <span>/</span>
            <span className="text-brand-orange font-700">Custom Apps</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-800 text-brand-navy leading-[1.05] tracking-tight mb-6">
            The App You've Always Wanted.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-accent">Now Within Reach.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-[680px] mx-auto mb-10">
            Real apps — on your clients' phones, with push notifications, real-time data, and a beautiful experience. Custom software used to cost a fortune. Not anymore. We build it in weeks — and handle everything for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-accent text-white px-7 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5 transition-all no-underline">
              Start Your Project
            </a>
            <a href="#vc-process" className="inline-flex items-center gap-2 border-[1.5px] border-brand-navy/[0.12] text-brand-navy px-7 py-3.5 rounded-[10px] text-sm font-700 hover:border-brand-orange hover:text-brand-orange transition-all no-underline">
              See How It Works
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
