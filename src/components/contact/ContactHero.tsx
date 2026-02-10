import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactHeroCode = `
<style>
  #ct-hero {
    position: relative !important; padding: 100px 0 60px !important;
    background: var(--color-5) !important; overflow: hidden !important;
  }
  .ct-hero-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.05) 0%, rgba(239,149,99,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .ct-hero-container {
    max-width: 720px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
    text-align: center !important;
  }
  .ct-hero-breadcrumb {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important; margin-bottom: 24px !important;
  }
  .ct-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .ct-hero-breadcrumb a:hover { color: var(--color-2) !important; }
  .ct-hero-breadcrumb span { color: var(--color-2) !important; }
  .ct-hero-h1.ct-hero-h1.ct-hero-h1.ct-hero-h1 {
    font-family: var(--font-heading) !important;
    font-size: 48px !important; line-height: 1.05 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) { .ct-hero-h1.ct-hero-h1.ct-hero-h1.ct-hero-h1 { font-size: 64px !important; } }
  .ct-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .ct-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 540px !important; margin: 0 auto !important;
  }
</style>

<section id="ct-hero">
  <div class="ct-hero-glow"></div>
  <div class="ct-hero-container">
    <div class="ct-hero-breadcrumb"><a href="/">Home</a> / <span>Contact</span></div>
    <h1 class="ct-hero-h1">Let's <span class="ct-hero-gradient">Chat</span></h1>
    <p class="ct-hero-sub">Whether you're ready to start or just exploring — we'd love to hear from you.</p>
  </div>
</section>
`;

export const ContactHero: React.FC = () => {
  return (
    <CopyWrapper blockName="ContactHero" codeToCopy={ContactHeroCode}>
      <section className="relative py-28 lg:py-32 bg-white overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.05)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[720px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="#home" className="hover:text-brand-accent transition-colors no-underline text-gray-400">Home</a>
            <span>/</span>
            <span className="text-brand-accent font-700">Contact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-800 text-brand-navy leading-[1.05] tracking-tight mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Chat</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-[540px] mx-auto">
            Whether you're ready to start or just exploring — we'd love to hear from you.
          </p>
        </div>
      </section>
    </CopyWrapper>
  );
};
