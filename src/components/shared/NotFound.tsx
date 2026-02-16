import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const NotFoundCode = `
<style>
  #nf-page {
    min-height: 80vh !important;
    background: var(--color-bg-dark, #0a0e1a) !important;
    position: relative !important; overflow: hidden !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    padding: 80px 0 !important;
  }
  .nf-glow {
    position: absolute !important; top: 30% !important; left: 50% !important;
    transform: translate(-50%, -50%) !important; width: 800px !important; height: 800px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.06) 0%, transparent 60%) !important;
    pointer-events: none !important;
  }
  .nf-glow-2 {
    position: absolute !important; bottom: 0 !important; right: 10% !important;
    width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(30,99,233,0.05) 0%, transparent 60%) !important;
    pointer-events: none !important;
  }
  .nf-container {
    max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important;
    text-align: center !important; position: relative !important; z-index: 1 !important;
  }
  .nf-code.nf-code.nf-code.nf-code {
    font-family: var(--font-mono, 'JetBrains Mono', monospace) !important;
    font-size: 120px !important; font-weight: 800 !important; line-height: 1 !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important; margin: 0 0 16px !important;
    letter-spacing: -0.04em !important;
  }
  @media (min-width: 768px) {
    .nf-code.nf-code.nf-code.nf-code { font-size: 160px !important; }
  }
  .nf-heading.nf-heading.nf-heading.nf-heading {
    font-family: var(--font-heading) !important;
    font-size: 28px !important; line-height: 1.2 !important;
    color: white !important; margin: 0 0 12px !important;
    letter-spacing: -0.02em !important; font-weight: 800 !important;
  }
  @media (min-width: 768px) {
    .nf-heading.nf-heading.nf-heading.nf-heading { font-size: 36px !important; }
  }
  .nf-sub {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: rgba(255,255,255,0.45) !important; line-height: 1.6 !important;
    max-width: 480px !important; margin: 0 auto 48px !important;
  }
  .nf-options {
    display: flex !important; flex-direction: column !important; gap: 16px !important;
    max-width: 480px !important; margin: 0 auto !important;
  }
  @media (min-width: 640px) {
    .nf-options { flex-direction: row !important; gap: 16px !important; max-width: 100% !important; }
  }
  .nf-card {
    flex: 1 !important; display: flex !important; flex-direction: column !important;
    align-items: center !important; gap: 12px !important;
    background: rgba(255,255,255,0.04) !important; border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 16px !important; padding: 28px 20px !important;
    text-decoration: none !important; transition: all 0.25s ease !important;
    cursor: pointer !important;
  }
  .nf-card:hover {
    background: rgba(255,255,255,0.07) !important; border-color: rgba(233,72,77,0.3) !important;
    transform: translateY(-3px) !important; box-shadow: 0 12px 32px rgba(0,0,0,0.3) !important;
  }
  .nf-card-icon {
    width: 48px !important; height: 48px !important; border-radius: 12px !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    background: linear-gradient(135deg, rgba(233,72,77,0.12) 0%, rgba(239,149,99,0.12) 100%) !important;
  }
  .nf-card-icon svg { width: 24px !important; height: 24px !important; }
  .nf-card-title.nf-card-title.nf-card-title.nf-card-title {
    font-family: var(--font-heading) !important; font-size: 16px !important;
    font-weight: 700 !important; color: white !important; margin: 0 !important;
  }
  .nf-card-desc {
    font-family: var(--font-main) !important; font-size: 13px !important;
    color: rgba(255,255,255,0.4) !important; line-height: 1.5 !important;
    margin: 0 !important;
  }
  .nf-mark {
    position: absolute !important; left: -80px !important; bottom: -40px !important;
    width: 300px !important; height: 300px !important; opacity: 0.03 !important;
    pointer-events: none !important; transform: rotate(-15deg) !important;
  }
</style>

<section id="nf-page">
  <div class="nf-glow"></div>
  <div class="nf-glow-2"></div>
  <svg class="nf-mark" viewBox="580 480 140 120" fill="rgba(255,255,255,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/></svg>

  <div class="nf-container">
    <p class="nf-code">404</p>
    <h1 class="nf-heading">This page doesn't exist</h1>
    <p class="nf-sub">Looks like you've wandered off the map. No worries — here are some places you might be looking for.</p>

    <div class="nf-options">
      <a href="https://awesomate.ai/" class="nf-card">
        <div class="nf-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <p class="nf-card-title">Home</p>
        <p class="nf-card-desc">Back to the main site</p>
      </a>

      <a href="https://awesomate.ai/n8n-hosting" class="nf-card">
        <div class="nf-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <p class="nf-card-title">n8n Hosting</p>
        <p class="nf-card-desc">Managed automation hosting</p>
      </a>

      <a href="https://awesomate.ai/discovery" class="nf-card">
        <div class="nf-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <p class="nf-card-title">Discovery Call</p>
        <p class="nf-card-desc">Book a free chat with us</p>
      </a>
    </div>
  </div>
</section>
`;

export const NotFound: React.FC = () => {
  return (
    <CopyWrapper blockName="NotFound" codeToCopy={NotFoundCode}>
      <section className="min-h-[80vh] bg-[#0a0e1a] relative overflow-hidden flex items-center justify-center py-20">
        {/* Glows */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(233,72,77,0.06)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(30,99,233,0.05)_0%,_transparent_60%)] pointer-events-none" />

        {/* Molecular mark watermark */}
        <svg className="absolute left-[-80px] bottom-[-40px] w-[300px] h-[300px] opacity-[0.03] pointer-events-none -rotate-[15deg]" viewBox="580 480 140 120" fill="rgba(255,255,255,0.5)" xmlns="http://www.w3.org/2000/svg"><path d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99" /></svg>

        <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
          <p className="font-mono text-[120px] md:text-[160px] font-800 leading-none tracking-[-0.04em] mb-4 bg-gradient-to-br from-brand-accent to-brand-orange bg-clip-text text-transparent">
            404
          </p>
          <h1 className="text-[28px] md:text-4xl font-heading font-800 text-white leading-[1.2] tracking-tight mb-3">
            This page doesn't exist
          </h1>
          <p className="text-base text-white/45 leading-relaxed max-w-[480px] mx-auto mb-12">
            Looks like you've wandered off the map. No worries — here are some places you might be looking for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-[480px] sm:max-w-none mx-auto">
            {/* Home */}
            <a href="https://awesomate.ai/" className="flex-1 flex flex-col items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl py-7 px-5 no-underline transition-all hover:bg-white/[0.07] hover:border-brand-accent/30 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-accent/[0.12] to-brand-orange/[0.12]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <p className="font-heading text-base font-700 text-white m-0">Home</p>
              <p className="text-[13px] text-white/40 leading-snug m-0">Back to the main site</p>
            </a>

            {/* n8n Hosting */}
            <a href="https://awesomate.ai/n8n-hosting" className="flex-1 flex flex-col items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl py-7 px-5 no-underline transition-all hover:bg-white/[0.07] hover:border-brand-accent/30 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-accent/[0.12] to-brand-orange/[0.12]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <p className="font-heading text-base font-700 text-white m-0">n8n Hosting</p>
              <p className="text-[13px] text-white/40 leading-snug m-0">Managed automation hosting</p>
            </a>

            {/* Discovery Call */}
            <a href="https://awesomate.ai/discovery" className="flex-1 flex flex-col items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl py-7 px-5 no-underline transition-all hover:bg-white/[0.07] hover:border-brand-accent/30 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-accent/[0.12] to-brand-orange/[0.12]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <p className="font-heading text-base font-700 text-white m-0">Discovery Call</p>
              <p className="text-[13px] text-white/40 leading-snug m-0">Book a free chat with us</p>
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
