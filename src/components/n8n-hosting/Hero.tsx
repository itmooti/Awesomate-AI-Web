import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ghBase = 'https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/n8n';

const HeroCode = `
<style>
  #n8-hero {
    position: relative !important; padding: 100px 0 80px !important;
    background:
      linear-gradient(to right, rgba(15,17,40,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15,17,40,0.03) 1px, transparent 1px),
      var(--color-5, #ffffff) !important;
    background-size: 64px 64px, 64px 64px, auto !important;
    overflow: hidden !important;
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
  .n8-hero-layout {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 40px !important; align-items: center !important;
  }
  @media (min-width: 1024px) {
    .n8-hero-layout { grid-template-columns: 1fr 1fr !important; gap: 60px !important; }
  }
  .n8-hero-breadcrumb {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important; margin-bottom: 24px !important;
  }
  .n8-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .n8-hero-breadcrumb a:hover { color: var(--color-2) !important; }
  .n8-hero-breadcrumb span.n8-hero-crumb-active { color: var(--color-2) !important; }
  .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 {
    font-family: var(--font-heading) !important;
    font-size: 42px !important; line-height: 1.08 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 { font-size: 52px !important; }
  }
  @media (min-width: 1024px) {
    .n8-hero-h1.n8-hero-h1.n8-hero-h1.n8-hero-h1 { font-size: 60px !important; }
  }
  .n8-hero-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .n8-hero-sub {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 32px !important;
  }
  .n8-hero-pills {
    display: flex !important; flex-wrap: wrap !important; gap: 8px !important;
    margin-bottom: 32px !important;
  }
  .n8-hero-pill {
    display: inline-flex !important; align-items: center !important; gap: 6px !important;
    padding: 8px 16px !important; border-radius: 100px !important;
    background: rgba(233,72,77,0.06) !important;
    border: 1px solid rgba(233,72,77,0.12) !important;
    font-family: var(--font-main) !important; font-size: 13px !important;
    font-weight: 600 !important; color: var(--color-1) !important;
  }
  .n8-hero-pill-dot {
    width: 6px !important; height: 6px !important; border-radius: 50% !important;
    background: var(--color-2) !important;
  }
  .n8-hero-actions {
    display: flex !important; flex-direction: column !important;
    align-items: flex-start !important; gap: 12px !important;
  }
  @media (min-width: 640px) {
    .n8-hero-actions { flex-direction: row !important; gap: 16px !important; }
  }
  .n8-hero-cta {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important; font-weight: 800 !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .n8-hero-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
  .n8-hero-secondary {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    color: var(--color-1) !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important; font-weight: 700 !important;
    border: 1.5px solid rgba(15,17,40,0.12) !important; transition: all 0.2s !important;
    background: transparent !important; cursor: pointer !important;
  }
  .n8-hero-secondary:hover { border-color: var(--color-2) !important; color: var(--color-2) !important; }
  .n8-hero-img-wrap {
    border-radius: 24px !important; overflow: hidden !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    box-shadow: 0 30px 80px rgba(15,17,40,0.08) !important;
  }
  .n8-hero-img-wrap img {
    width: 100% !important; height: auto !important;
    display: block !important; object-fit: cover !important;
  }
</style>

<section id="n8-hero">
  <div class="n8-hero-glow"></div>
  <svg class="n8-hero-mark" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
  <div class="n8-hero-container">
    <div class="n8-hero-layout">
      <div>
        <div class="n8-hero-breadcrumb"><a href="/">Home</a> / <a href="/#o04ee70b895f3">Services</a> / <span class="n8-hero-crumb-active">n8n Hosting</span></div>
        <h1 class="n8-hero-h1">n8n Hosting That<br/><span class="n8-hero-gradient">Grows With You</span></h1>
        <p class="n8-hero-sub">Uncapped executions. Enterprise-grade infrastructure. Kubernetes with hot redundancy. Fully managed \u2014 from setup to support. No surprise bills, no throttling, no midnight troubleshooting.</p>
        <div class="n8-hero-pills">
          <span class="n8-hero-pill"><span class="n8-hero-pill-dot"></span> Uncapped executions</span>
          <span class="n8-hero-pill"><span class="n8-hero-pill-dot"></span> 3x hot redundancy</span>
          <span class="n8-hero-pill"><span class="n8-hero-pill-dot"></span> 99.99% uptime</span>
        </div>
        <div class="n8-hero-actions">
          <a href="#n8-pricing" class="n8-hero-cta">See Plans</a>
          <a href="#n8-why" class="n8-hero-secondary">Learn More</a>
        </div>
      </div>
      <div class="n8-hero-img-wrap">
        <img src="${ghBase}/n8n-hero-person.png" alt="Business owner with automation dashboard">
      </div>
    </div>
  </div>
</section>
`;

export const Hero: React.FC = () => {
  const pills = ['Uncapped executions', '3x hot redundancy', '99.99% uptime'];

  return (
    <CopyWrapper blockName="Hero" codeToCopy={HeroCode}>
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[linear-gradient(to_right,rgba(15,17,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,17,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px] bg-white">
        {/* Radial glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
        {/* Molecular watermark */}
        <svg className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] opacity-[0.03] pointer-events-none -rotate-[15deg]" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
                <a href="#home" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Home</a>
                <span>/</span>
                <a href="#home" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Services</a>
                <span>/</span>
                <span className="font-bold text-brand-accent">n8n Hosting</span>
              </div>
              <h1 className="text-[42px] md:text-[52px] lg:text-[60px] font-heading font-800 leading-[1.08] tracking-tight text-brand-navy mb-6">
                n8n Hosting That<br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Grows With You</span>
              </h1>
              <p className="text-[17px] text-gray-500 font-medium leading-relaxed mb-8">
                Uncapped executions. Enterprise-grade infrastructure. Kubernetes with hot redundancy. Fully managed — from setup to support. No surprise bills, no throttling, no midnight troubleshooting.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {pills.map((pill) => (
                  <span key={pill} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-accent/[0.06] border border-brand-accent/[0.12] text-[13px] font-600 text-brand-navy">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <a
                  href="#n8-pricing"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-7 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all no-underline"
                >
                  See Plans
                </a>
                <a
                  href="#n8-why"
                  className="inline-flex items-center gap-2 border-[1.5px] border-brand-navy/[0.12] text-brand-navy px-7 py-3.5 rounded-[10px] text-sm font-700 hover:border-brand-accent hover:text-brand-accent transition-all no-underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-brand-navy/[0.06] shadow-2xl shadow-brand-navy/[0.08]">
              <img
                src="/src/assets/images/n8n/n8n-hero-person.png"
                alt="Business owner with automation dashboard"
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
