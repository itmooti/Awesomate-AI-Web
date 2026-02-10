import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeProcessCode = `
<style>
  #vc-process { padding: 100px 0 !important; background: var(--color-5) !important; }
  .vcp-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .vcp-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .vcp-h2.vcp-h2.vcp-h2.vcp-h2 { font-family: var(--font-heading) !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 56px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vcp-h2.vcp-h2.vcp-h2.vcp-h2 { font-size: 44px !important; } }
  .vcp-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .vcp-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (min-width: 1024px) { .vcp-grid { grid-template-columns: repeat(4, 1fr) !important; } }
  .vcp-step { background: var(--color-bg-alt, #f8f9fb) !important; border: 1px solid #f3f4f6 !important; border-radius: 20px !important; padding: 32px !important; }
  .vcp-num { font-family: var(--font-heading) !important; font-size: 48px !important; background: linear-gradient(135deg, var(--color-3), var(--color-2)) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; margin-bottom: 16px !important; }
  .vcp-title { font-family: var(--font-heading) !important; font-size: 20px !important; color: var(--color-1) !important; margin-bottom: 8px !important; }
  .vcp-desc { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.6 !important; }
</style>

<section id="vc-process">
  <div class="vcp-container">
    <div class="vcp-label">Our Process</div>
    <h2 class="vcp-h2">From Idea to App in Four Steps</h2>
    <div class="vcp-grid">
      <div class="vcp-step">
        <div class="vcp-num">01</div>
        <div class="vcp-title">Dream</div>
        <div class="vcp-desc">Tell us everything you've imagined. The features you wish you had. The experience you want your clients to have. We'll map it out together and tell you exactly what it'll cost and how long it'll take.</div>
      </div>
      <div class="vcp-step">
        <div class="vcp-num">02</div>
        <div class="vcp-title">Build</div>
        <div class="vcp-desc">We build your app using the latest AI-powered tools. You see real progress every few days — not months of silence. Features that used to take weeks are added in hours.</div>
      </div>
      <div class="vcp-step">
        <div class="vcp-num">03</div>
        <div class="vcp-title">Deliver</div>
        <div class="vcp-desc">You get a real app — live on iOS, Android, or web. Push notifications, real-time data, the works. Tested, polished, and built to last.</div>
      </div>
      <div class="vcp-step">
        <div class="vcp-num">04</div>
        <div class="vcp-title">Evolve</div>
        <div class="vcp-desc">Need a change? Just tell us in plain English and it's done — fast. Your app grows with your business, and we're always here to make it happen.</div>
      </div>
    </div>
  </div>
</section>
`;

export const VibeProcess: React.FC = () => {
  const steps = [
    { num: '01', title: 'Dream', desc: 'Tell us everything you\u2019ve imagined. The features you wish you had. The experience you want your clients to have. We\u2019ll map it out together and tell you exactly what it\u2019ll cost and how long it\u2019ll take.' },
    { num: '02', title: 'Build', desc: 'We build your app using the latest AI-powered tools. You see real progress every few days \u2014 not months of silence. Features that used to take weeks are added in hours.' },
    { num: '03', title: 'Deliver', desc: 'You get a real app \u2014 live on iOS, Android, or web. Push notifications, real-time data, the works. Tested, polished, and built to last.' },
    { num: '04', title: 'Evolve', desc: 'Need a change? Just tell us in plain English and it\u2019s done \u2014 fast. Your app grows with your business, and we\u2019re always here to make it happen.' },
  ];

  return (
    <CopyWrapper blockName="VibeProcess" codeToCopy={VibeProcessCode}>
      <section id="vc-process" className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">Our Process</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14">
            From Idea to App in Four Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-[#f8f9fb] border border-gray-100 rounded-[20px] p-8">
                <div className="text-5xl font-800 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-accent mb-4">{s.num}</div>
                <div className="text-xl font-800 text-brand-navy mb-2">{s.title}</div>
                <div className="text-[15px] text-gray-500 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
