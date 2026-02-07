import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const WorkHeroCode = `
<style>
  #wk-hero {
    padding: 120px 0 80px !important;
    background: var(--color-bg-dark, #0a0e1a) !important;
    position: relative !important; overflow: hidden !important;
  }
  .wk-hero-glow {
    position: absolute !important; width: 600px !important; height: 600px !important;
    border-radius: 50% !important; filter: blur(120px) !important;
    opacity: 0.15 !important; pointer-events: none !important;
  }
  .wk-hero-glow-1 {
    top: -200px !important; right: -100px !important;
    background: var(--color-2) !important;
  }
  .wk-hero-glow-2 {
    bottom: -300px !important; left: -200px !important;
    background: var(--color-3) !important;
  }
  .wk-hero-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
    text-align: center !important;
  }
  .wk-hero-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 20px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .wk-hero-h1.wk-hero-h1.wk-hero-h1.wk-hero-h1 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 44px !important; line-height: 1.1 !important;
    color: var(--color-5) !important; margin: 0 0 24px !important;
    letter-spacing: -0.03em !important;
  }
  @media (min-width: 768px) {
    .wk-hero-h1.wk-hero-h1.wk-hero-h1.wk-hero-h1 { font-size: 64px !important; }
  }
  .wk-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: rgba(255,255,255,0.5) !important; line-height: 1.6 !important;
    max-width: 640px !important; margin: 0 auto !important;
  }
  @media (min-width: 768px) {
    .wk-hero-sub { font-size: 20px !important; }
  }
</style>

<section id="wk-hero">
  <div class="wk-hero-glow wk-hero-glow-1"></div>
  <div class="wk-hero-glow wk-hero-glow-2"></div>
  <div class="wk-hero-container">
    <div class="wk-hero-label">Portfolio</div>
    <h1 class="wk-hero-h1">Our Work</h1>
    <p class="wk-hero-sub">Projects that prove what's possible when technology meets ambition. From startups to national franchises, here's what we've built.</p>
  </div>
</section>
`;

export const WorkHero: React.FC = () => {
  return (
    <CopyWrapper blockName="WorkHero" codeToCopy={WorkHeroCode}>
      <section className="py-28 lg:py-36 bg-[#0a0e1a] relative overflow-hidden text-center">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 -top-[200px] -right-[100px] bg-brand-accent pointer-events-none" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 -bottom-[300px] -left-[200px] bg-brand-orange pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-xs font-800 uppercase tracking-[0.15em] mb-5 text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange inline-block">
            Portfolio
          </div>
          <h1 className="text-[44px] md:text-[64px] font-heading font-800 text-white leading-[1.1] tracking-tight mb-6">
            Our Work
          </h1>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-[640px] mx-auto">
            Projects that prove what's possible when technology meets ambition. From startups to national franchises, here's what we've built.
          </p>
        </div>
      </section>
    </CopyWrapper>
  );
};
