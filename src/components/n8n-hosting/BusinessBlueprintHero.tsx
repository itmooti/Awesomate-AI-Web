import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ghBase = 'https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/n8n';
const bbLogo = 'https://businessblueprint.com/wp-content/themes/BusinessBlueprint/images/logo.svg';

const BusinessBlueprintHeroCode = `
<style>
  #n8bb-hero {
    position: relative !important; padding: 0 !important;
    background: var(--color-5, #ffffff) !important;
    overflow: hidden !important;
  }
  .n8bb-partner-bar {
    background: #00254C !important; padding: 14px 24px !important;
    display: flex !important; align-items: center !important;
    justify-content: center !important; gap: 16px !important;
    flex-wrap: wrap !important;
  }
  .n8bb-partner-bar img {
    height: 28px !important; width: auto !important;
  }
  .n8bb-partner-text {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #ffffff !important; font-weight: 600 !important;
    letter-spacing: 0.01em !important;
  }
  .n8bb-partner-text strong {
    color: #5bc0de !important; font-weight: 800 !important;
  }
  .n8bb-body {
    position: relative !important; padding: 80px 0 80px !important;
    background:
      linear-gradient(to right, rgba(15,17,40,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(15,17,40,0.03) 1px, transparent 1px),
      var(--color-5, #ffffff) !important;
    background-size: 64px 64px, 64px 64px, auto !important;
  }
  .n8bb-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.06) 0%, rgba(239,149,99,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8bb-mark {
    position: absolute !important; left: -80px !important; bottom: -40px !important;
    width: 300px !important; height: 300px !important; opacity: 0.03 !important;
    pointer-events: none !important; transform: rotate(-15deg) !important;
  }
  .n8bb-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8bb-layout {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 40px !important; align-items: center !important;
  }
  @media (min-width: 1024px) {
    .n8bb-layout { grid-template-columns: 1fr 1fr !important; gap: 60px !important; }
  }
  .n8bb-badge {
    display: inline-flex !important; align-items: center !important; gap: 10px !important;
    background: rgba(0,37,76,0.06) !important; border: 1px solid rgba(0,37,76,0.12) !important;
    border-radius: 100px !important; padding: 8px 20px 8px 10px !important;
    margin-bottom: 24px !important;
  }
  .n8bb-badge img {
    height: 20px !important; width: auto !important;
  }
  .n8bb-badge-text {
    font-family: var(--font-main) !important; font-size: 13px !important;
    font-weight: 700 !important; color: #00254C !important;
  }
  .n8bb-h1.n8bb-h1.n8bb-h1.n8bb-h1 {
    font-family: var(--font-heading) !important;
    font-size: 42px !important; line-height: 1.08 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8bb-h1.n8bb-h1.n8bb-h1.n8bb-h1 { font-size: 52px !important; }
  }
  @media (min-width: 1024px) {
    .n8bb-h1.n8bb-h1.n8bb-h1.n8bb-h1 { font-size: 60px !important; }
  }
  .n8bb-gradient {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .n8bb-sub {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 32px !important;
  }
  .n8bb-offer {
    display: flex !important; align-items: center !important; gap: 12px !important;
    background: linear-gradient(135deg, rgba(233,72,77,0.08) 0%, rgba(239,149,99,0.06) 100%) !important;
    border: 1px solid rgba(233,72,77,0.15) !important;
    border-radius: 12px !important; padding: 16px 20px !important;
    margin-bottom: 32px !important;
  }
  .n8bb-offer-icon {
    width: 40px !important; height: 40px !important; flex-shrink: 0 !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    border-radius: 10px !important; display: flex !important;
    align-items: center !important; justify-content: center !important;
    color: white !important; font-size: 18px !important; font-weight: 800 !important;
  }
  .n8bb-offer-text {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: var(--color-1) !important; font-weight: 700 !important;
    line-height: 1.4 !important;
  }
  .n8bb-offer-text span {
    color: var(--color-2) !important; font-weight: 800 !important;
  }
  .n8bb-pills {
    display: flex !important; flex-wrap: wrap !important; gap: 8px !important;
    margin-bottom: 32px !important;
  }
  .n8bb-pill {
    display: inline-flex !important; align-items: center !important; gap: 6px !important;
    padding: 8px 16px !important; border-radius: 100px !important;
    background: rgba(233,72,77,0.06) !important;
    border: 1px solid rgba(233,72,77,0.12) !important;
    font-family: var(--font-main) !important; font-size: 13px !important;
    font-weight: 600 !important; color: var(--color-1) !important;
  }
  .n8bb-pill-dot {
    width: 6px !important; height: 6px !important; border-radius: 50% !important;
    background: var(--color-2) !important;
  }
  .n8bb-actions {
    display: flex !important; flex-direction: column !important;
    align-items: flex-start !important; gap: 12px !important;
  }
  @media (min-width: 640px) {
    .n8bb-actions { flex-direction: row !important; gap: 16px !important; }
  }
  .n8bb-cta {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important; font-weight: 800 !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .n8bb-cta:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
  .n8bb-secondary {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    color: var(--color-1) !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important; font-weight: 700 !important;
    border: 1.5px solid rgba(15,17,40,0.12) !important; transition: all 0.2s !important;
    background: transparent !important; cursor: pointer !important;
  }
  .n8bb-secondary:hover { border-color: var(--color-2) !important; color: var(--color-2) !important; }
  .n8bb-img-wrap {
    border-radius: 24px !important; overflow: hidden !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    box-shadow: 0 30px 80px rgba(15,17,40,0.08) !important;
  }
  .n8bb-img-wrap img {
    width: 100% !important; height: auto !important;
    display: block !important; object-fit: cover !important;
  }
</style>

<section id="n8bb-hero">
  <div class="n8bb-partner-bar">
    <img src="${bbLogo}" alt="Business Blueprint" style="filter: brightness(0) invert(1); height: 28px;">
    <span class="n8bb-partner-text">Recommended hosting by <strong>Business Blueprint</strong></span>
  </div>
  <div class="n8bb-body">
    <div class="n8bb-glow"></div>
    <svg class="n8bb-mark" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>
    <div class="n8bb-container">
      <div class="n8bb-layout">
        <div>
          <div class="n8bb-badge">
            <img src="${bbLogo}" alt="Business Blueprint">
            <span class="n8bb-badge-text">Recommended by Business Blueprint</span>
          </div>
          <h1 class="n8bb-h1">n8n Hosting That<br/><span class="n8bb-gradient">Grows With You</span></h1>
          <p class="n8bb-sub">Uncapped executions. Enterprise-grade infrastructure. Kubernetes with hot redundancy. Fully managed \u2014 from setup to support. No surprise bills, no throttling, no midnight troubleshooting.</p>
          <div class="n8bb-offer">
            <div class="n8bb-offer-icon">$</div>
            <div class="n8bb-offer-text">Conference exclusive: <span>AU$25 off</span> your first month on our Essentials plan</div>
          </div>
          <div class="n8bb-pills">
            <span class="n8bb-pill"><span class="n8bb-pill-dot"></span> Uncapped executions</span>
            <span class="n8bb-pill"><span class="n8bb-pill-dot"></span> 3x hot redundancy</span>
            <span class="n8bb-pill"><span class="n8bb-pill-dot"></span> 99.99% uptime</span>
          </div>
          <div class="n8bb-actions">
            <a href="#n8-discount-pricing" class="n8bb-cta">See Conference Pricing</a>
            <a href="#n8-why" class="n8bb-secondary">Learn More</a>
          </div>
        </div>
        <div class="n8bb-img-wrap">
          <img src="${ghBase}/n8n-business-blueprint.webp" alt="Business Blueprint conference">
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const BusinessBlueprintHero: React.FC = () => {
  const pills = ['Uncapped executions', '3x hot redundancy', '99.99% uptime'];

  return (
    <CopyWrapper blockName="BusinessBlueprintHero" codeToCopy={BusinessBlueprintHeroCode}>
      <section className="relative overflow-hidden bg-white">
        {/* Partner bar */}
        <div className="bg-[#00254C] px-6 py-3.5 flex items-center justify-center gap-4 flex-wrap">
          <img
            src="https://businessblueprint.com/wp-content/themes/BusinessBlueprint/images/logo.svg"
            alt="Business Blueprint"
            className="h-7 w-auto brightness-0 invert"
          />
          <span className="text-sm text-white font-600">
            Recommended hosting by <strong className="text-[#5bc0de] font-800">Business Blueprint</strong>
          </span>
        </div>

        {/* Hero body */}
        <div className="relative py-20 lg:py-24 bg-[linear-gradient(to_right,rgba(15,17,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,17,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px] bg-white">
          {/* Radial glow */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_rgba(239,149,99,0.03)_40%,_transparent_70%)] pointer-events-none" />
          {/* Molecular watermark */}
          <svg className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] opacity-[0.03] pointer-events-none -rotate-[15deg]" viewBox="580 480 140 120" fill="rgba(15,17,40,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>

          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                {/* BB badge */}
                <div className="inline-flex items-center gap-2.5 bg-[#00254C]/[0.06] border border-[#00254C]/[0.12] rounded-full pl-2.5 pr-5 py-2 mb-6">
                  <img
                    src="https://businessblueprint.com/wp-content/themes/BusinessBlueprint/images/logo.svg"
                    alt="Business Blueprint"
                    className="h-5 w-auto"
                  />
                  <span className="text-[13px] font-700 text-[#00254C]">Recommended by Business Blueprint</span>
                </div>

                <h1 className="text-[42px] md:text-[52px] lg:text-[60px] font-heading font-800 leading-[1.08] tracking-tight text-brand-navy mb-6">
                  n8n Hosting That<br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">Grows With You</span>
                </h1>
                <p className="text-[17px] text-gray-500 font-medium leading-relaxed mb-8">
                  Uncapped executions. Enterprise-grade infrastructure. Kubernetes with hot redundancy. Fully managed — from setup to support. No surprise bills, no throttling, no midnight troubleshooting.
                </p>

                {/* Conference offer callout */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-brand-accent/[0.08] to-brand-orange/[0.06] border border-brand-accent/[0.15] rounded-xl px-5 py-4 mb-8">
                  <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-brand-accent to-brand-orange rounded-[10px] flex items-center justify-center text-white text-lg font-800">$</div>
                  <p className="text-[15px] font-700 text-brand-navy leading-snug">
                    Conference exclusive: <span className="text-brand-accent font-800">AU$25 off</span> your first month on our Essentials plan
                  </p>
                </div>

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
                    href="#n8-discount-pricing"
                    className="inline-flex items-center gap-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-7 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all no-underline"
                  >
                    See Conference Pricing
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
                  src="/src/assets/images/n8n/n8n-business-blueprint.webp"
                  alt="Business Blueprint conference"
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
