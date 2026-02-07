import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const AboutHeroCode = `
<style>
  #ab-hero {
    position: relative !important; padding: 100px 0 80px !important;
    background: var(--color-5) !important; overflow: hidden !important;
  }
  .ab-hero-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.05) 0%, rgba(239,149,99,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .ab-hero-grid {
    position: absolute !important; inset: 0 !important;
    background-image: linear-gradient(rgba(15,17,40,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,40,0.03) 1px, transparent 1px) !important;
    background-size: 48px 48px !important; pointer-events: none !important;
  }
  .ab-hero-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
    text-align: center !important;
  }
  .ab-hero-breadcrumb {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important; margin-bottom: 24px !important;
  }
  .ab-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .ab-hero-breadcrumb a:hover { color: var(--color-2) !important; }
  .ab-hero-breadcrumb span { color: var(--color-2) !important; font-weight: 700 !important; }
  .ab-hero-h1.ab-hero-h1.ab-hero-h1.ab-hero-h1 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 48px !important; line-height: 1.05 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) { .ab-hero-h1.ab-hero-h1.ab-hero-h1.ab-hero-h1 { font-size: 64px !important; } }
  @media (min-width: 1024px) { .ab-hero-h1.ab-hero-h1.ab-hero-h1.ab-hero-h1 { font-size: 72px !important; } }
  .ab-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .ab-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 640px !important; margin: 0 auto 40px !important; font-weight: 500 !important;
  }
  @media (min-width: 768px) { .ab-hero-sub { font-size: 20px !important; } }
  .ab-hero-img {
    max-width: 800px !important; margin: 0 auto !important; border-radius: 24px !important;
    background: var(--color-bg-alt, #f8f9fb) !important; height: 320px !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    font-family: var(--font-main) !important; font-size: 14px !important; color: #d1d5db !important;
    border: 2px dashed #e5e7eb !important;
  }
</style>

<section id="ab-hero">
  <div class="ab-hero-glow"></div>
  <div class="ab-hero-grid"></div>
  <div class="ab-hero-container">
    <div class="ab-hero-breadcrumb"><a href="/">Home</a> / <span>About</span></div>
    <h1 class="ab-hero-h1">We're Awesomate.<br><span class="ab-hero-gradient">Nice to Meet You.</span></h1>
    <p class="ab-hero-sub">A small Australian tech company passionate about making business technology accessible, affordable, and genuinely useful.</p>
    <div class="ab-hero-img">Team photo placeholder</div>
  </div>
</section>
`;

export const AboutHero: React.FC = () => {
  return (
    <CopyWrapper blockName="AboutHero" codeToCopy={AboutHeroCode}>
      <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.05)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15,17,40,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,40,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="#home" className="hover:text-brand-accent transition-colors no-underline text-gray-400">Home</a>
            <span>/</span>
            <span className="text-brand-accent font-700">About</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-800 text-brand-navy leading-[1.05] tracking-tight mb-6">
            We're Awesomate.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Nice to Meet You.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-[640px] mx-auto mb-10">
            A small Australian tech company passionate about making business technology accessible, affordable, and genuinely useful.
          </p>
          <div className="max-w-[800px] mx-auto rounded-3xl bg-[#f8f9fb] h-[320px] flex items-center justify-center text-sm text-gray-300 border-2 border-dashed border-gray-200">
            Team photo placeholder
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
