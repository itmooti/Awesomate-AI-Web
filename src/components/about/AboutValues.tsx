import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const AboutValuesCode = `
<style>
  #ab-values { padding: 100px 0 !important; background: var(--color-5) !important; }
  .ab-val-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ab-val-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .ab-val-h2.ab-val-h2.ab-val-h2.ab-val-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 56px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .ab-val-h2.ab-val-h2.ab-val-h2.ab-val-h2 { font-size: 44px !important; } }
  .ab-val-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .ab-val-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  .ab-val-card { background: var(--color-bg-alt, #f8f9fb) !important; border-radius: 20px !important; padding: 36px !important; position: relative !important; overflow: hidden !important; border: 1px solid #f3f4f6 !important; }
  .ab-val-card::before { content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important; bottom: 0 !important; width: 3px !important; background: linear-gradient(to bottom, var(--color-2), var(--color-3)) !important; }
  .ab-val-icon { width: 48px !important; height: 48px !important; border-radius: 14px !important; background: rgba(233,72,77,0.08) !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-bottom: 20px !important; }
  .ab-val-icon svg { width: 22px !important; height: 22px !important; color: var(--color-2) !important; }
  .ab-val-title { font-family: var(--font-heading) !important; font-size: 20px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 10px !important; }
  .ab-val-desc { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.7 !important; }
</style>

<section id="ab-values">
  <div class="ab-val-container">
    <div class="ab-val-label">What Drives Us</div>
    <h2 class="ab-val-h2">Our Values</h2>
    <div class="ab-val-grid">
      <div class="ab-val-card">
        <div class="ab-val-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg></div>
        <div class="ab-val-title">Empowerment Over Dependency</div>
        <div class="ab-val-desc">We teach you to fish. Every solution comes with training so your business doesn't depend on us to keep running.</div>
      </div>
      <div class="ab-val-card">
        <div class="ab-val-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg></div>
        <div class="ab-val-title">Simplicity Over Complexity</div>
        <div class="ab-val-desc">If a business owner can't understand it, we haven't done our job. Technology should simplify your life, not complicate it.</div>
      </div>
      <div class="ab-val-card">
        <div class="ab-val-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
        <div class="ab-val-title">Transparency</div>
        <div class="ab-val-desc">Fixed pricing, clear timelines, no hidden costs. Ever. You'll always know exactly what you're getting and what it costs.</div>
      </div>
      <div class="ab-val-card">
        <div class="ab-val-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div class="ab-val-title">Australian-Made</div>
        <div class="ab-val-desc">Built and supported right here. Your timezone, your language. No offshore support tickets — real humans who understand your business.</div>
      </div>
    </div>
  </div>
</section>
`;

export const AboutValues: React.FC = () => {
  const values = [
    { title: 'Empowerment Over Dependency', desc: 'We teach you to fish. Every solution comes with training so your business doesn\u2019t depend on us to keep running.', icon: <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg> },
    { title: 'Simplicity Over Complexity', desc: 'If a business owner can\u2019t understand it, we haven\u2019t done our job. Technology should simplify your life, not complicate it.', icon: <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg> },
    { title: 'Transparency', desc: 'Fixed pricing, clear timelines, no hidden costs. Ever. You\u2019ll always know exactly what you\u2019re getting and what it costs.', icon: <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
    { title: 'Australian-Made', desc: 'Built and supported right here. Your timezone, your language. No offshore support tickets \u2014 real humans who understand your business.', icon: <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  ];

  return (
    <CopyWrapper blockName="AboutValues" codeToCopy={AboutValuesCode}>
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">What Drives Us</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="relative bg-[#f8f9fb] border border-gray-100 rounded-[20px] p-9 overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[3px]" style={{ background: 'linear-gradient(to bottom, #e9484d, #ef9563)' }} />
                <div className="w-12 h-12 rounded-[14px] bg-brand-accent/[0.08] flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <div className="text-xl font-800 text-brand-navy mb-2.5">{v.title}</div>
                <div className="text-[15px] text-gray-500 leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
