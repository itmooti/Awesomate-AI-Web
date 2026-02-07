import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const AboutProcessCode = `
<style>
  #ab-process { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .ab-proc-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; text-align: center !important; }
  .ab-proc-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .ab-proc-h2.ab-proc-h2.ab-proc-h2.ab-proc-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .ab-proc-h2.ab-proc-h2.ab-proc-h2.ab-proc-h2 { font-size: 44px !important; } }
  .ab-proc-sub { font-family: var(--font-main) !important; font-size: 17px !important; color: #6b7280 !important; line-height: 1.7 !important; max-width: 600px !important; margin: 0 auto 56px !important; }
  .ab-proc-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .ab-proc-grid { grid-template-columns: repeat(5, 1fr) !important; } }
  .ab-proc-step { text-align: center !important; position: relative !important; }
  .ab-proc-num { width: 48px !important; height: 48px !important; border-radius: 50% !important; background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important; color: white !important; font-family: var(--font-heading) !important; font-size: 18px !important; font-weight: 800 !important; display: flex !important; align-items: center !important; justify-content: center !important; margin: 0 auto 16px !important; }
  .ab-proc-step-title { font-family: var(--font-heading) !important; font-size: 18px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 8px !important; }
  .ab-proc-step-desc { font-family: var(--font-main) !important; font-size: 14px !important; color: #6b7280 !important; line-height: 1.6 !important; }
  .ab-proc-line { display: none !important; }
  @media (min-width: 768px) {
    .ab-proc-line { display: block !important; position: absolute !important; top: 24px !important; left: calc(50% + 30px) !important; width: calc(100% - 60px) !important; height: 2px !important; background: linear-gradient(90deg, rgba(233,72,77,0.2), rgba(239,149,99,0.2)) !important; }
    .ab-proc-step:last-child .ab-proc-line { display: none !important; }
  }
</style>

<section id="ab-process">
  <div class="ab-proc-container">
    <div class="ab-proc-label">Our Process</div>
    <h2 class="ab-proc-h2">How We Work</h2>
    <p class="ab-proc-sub">A straightforward process designed around your business needs — not ours.</p>
    <div class="ab-proc-grid">
      <div class="ab-proc-step">
        <div class="ab-proc-line"></div>
        <div class="ab-proc-num">1</div>
        <div class="ab-proc-step-title">Discover</div>
        <div class="ab-proc-step-desc">We learn about your business, your challenges, and what success looks like for you.</div>
      </div>
      <div class="ab-proc-step">
        <div class="ab-proc-line"></div>
        <div class="ab-proc-num">2</div>
        <div class="ab-proc-step-title">Design</div>
        <div class="ab-proc-step-desc">We map out the right solution — whether it's hosting, data, apps, or all three.</div>
      </div>
      <div class="ab-proc-step">
        <div class="ab-proc-line"></div>
        <div class="ab-proc-num">3</div>
        <div class="ab-proc-step-title">Build</div>
        <div class="ab-proc-step-desc">We build and deploy your solution with full transparency on progress and timeline.</div>
      </div>
      <div class="ab-proc-step">
        <div class="ab-proc-line"></div>
        <div class="ab-proc-num">4</div>
        <div class="ab-proc-step-title">Train</div>
        <div class="ab-proc-step-desc">We train you and your team so you can manage, maintain, and evolve your tools.</div>
      </div>
      <div class="ab-proc-step">
        <div class="ab-proc-num">5</div>
        <div class="ab-proc-step-title">Support</div>
        <div class="ab-proc-step-desc">We're always here when you need us — ongoing support on your terms.</div>
      </div>
    </div>
  </div>
</section>
`;

export const AboutProcess: React.FC = () => {
  const steps = [
    { num: 1, title: 'Discover', desc: 'We learn about your business, your challenges, and what success looks like for you.' },
    { num: 2, title: 'Design', desc: 'We map out the right solution \u2014 whether it\u2019s hosting, data, apps, or all three.' },
    { num: 3, title: 'Build', desc: 'We build and deploy your solution with full transparency on progress and timeline.' },
    { num: 4, title: 'Train', desc: 'We train you and your team so you can manage, maintain, and evolve your tools.' },
    { num: 5, title: 'Support', desc: 'We\u2019re always here when you need us \u2014 ongoing support on your terms.' },
  ];

  return (
    <CopyWrapper blockName="AboutProcess" codeToCopy={AboutProcessCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Our Process</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-[600px] mx-auto mb-14">
            A straightforward process designed around your business needs — not ours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-brand-accent/20 to-brand-orange/20" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-orange text-white font-800 text-lg flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <div className="text-lg font-800 text-brand-navy mb-2">{s.title}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
