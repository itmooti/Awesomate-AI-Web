import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const WhyAwesomateCode = `
<style>
  #hm-why {
    padding: 100px 0 !important;
    background: var(--color-5) !important;
    background-image: radial-gradient(circle, rgba(15,17,40,0.03) 1px, transparent 1px) !important;
    background-size: 24px 24px !important;
  }
  .hm-why-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .hm-why-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-why-h2.hm-why-h2.hm-why-h2.hm-why-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 56px !important;
    letter-spacing: -0.02em !important; max-width: 600px !important;
  }
  @media (min-width: 768px) {
    .hm-why-h2.hm-why-h2.hm-why-h2.hm-why-h2 { font-size: 44px !important; }
  }
  .hm-why-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 32px !important;
  }
  @media (min-width: 768px) { .hm-why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  .hm-why-item {
    display: flex !important; gap: 20px !important; align-items: flex-start !important;
    position: relative !important; padding-left: 20px !important;
  }
  .hm-why-item::before {
    content: '' !important; position: absolute !important; left: 0 !important;
    top: 0 !important; bottom: 0 !important; width: 3px !important;
    background: linear-gradient(to bottom, var(--color-2), var(--color-3)) !important;
    border-radius: 3px !important;
  }
  .hm-why-icon-wrap {
    width: 48px !important; height: 48px !important; border-radius: 14px !important;
    background: rgba(233,72,77,0.06) !important; display: flex !important;
    align-items: center !important; justify-content: center !important; flex-shrink: 0 !important;
  }
  .hm-why-icon-wrap svg { width: 22px !important; height: 22px !important; color: var(--color-2) !important; }
  .hm-why-title {
    font-family: var(--font-heading) !important; font-size: 18px !important;
    color: var(--color-1) !important; margin-bottom: 8px !important;
  }
  .hm-why-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.65 !important;
  }
</style>

<section id="hm-why">
  <div class="hm-why-container">
    <div class="hm-why-label">Built to Last</div>
    <h2 class="hm-why-h2">Enterprise-Grade Security. Without the Enterprise Price Tag.</h2>

    <div class="hm-why-grid">
      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="12" y1="16" x2="12" y2="19"/></svg>
        </div>
        <div>
          <div class="hm-why-title">HIPAA-Compliant. Enterprise-Grade Security.</div>
          <div class="hm-why-desc">Your data is encrypted, access-controlled, and processed to HIPAA standards — the same level of compliance required by healthcare and finance. Need local hosting? We can deploy to Australian data centres or your own servers.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div>
          <div class="hm-why-title">3x Redundancy. Zero Downtime.</div>
          <div class="hm-why-desc">We run three identical live copies of everything at all times. If one has a problem, the others take over instantly. Your business never goes offline.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div>
          <div class="hm-why-title">Real-Time Data. Instant Decisions.</div>
          <div class="hm-why-desc">Most platforms take seconds to retrieve data. Ours pushes and receives it instantly. When you're working with AI, less latency means faster, smarter decisions across every query.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div>
          <div class="hm-why-title">24/7 Monitoring. 30-Minute Backups.</div>
          <div class="hm-why-desc">Round-the-clock monitoring catches issues before they affect you. Automatic backups every 30 minutes mean nothing gets lost. We manage it all — you never have to think about it.</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const WhyAwesomate: React.FC = () => {
  const differentiators = [
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
          <line x1="12" y1="16" x2="12" y2="19" />
        </svg>
      ),
      title: 'HIPAA-Compliant. Enterprise-Grade Security.',
      desc: 'Your data is encrypted, access-controlled, and processed to HIPAA standards \u2014 the same level of compliance required by healthcare and finance. Need local hosting? We can deploy to Australian data centres or your own servers.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: '3x Redundancy. Zero Downtime.',
      desc: 'We run three identical live copies of everything at all times. If one has a problem, the others take over instantly. Your business never goes offline.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Real-Time Data. Instant Decisions.',
      desc: 'Most platforms take seconds to retrieve data. Ours pushes and receives it instantly. When you\u2019re working with AI, less latency means faster, smarter decisions across every query.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: '24/7 Monitoring. 30-Minute Backups.',
      desc: 'Round-the-clock monitoring catches issues before they affect you. Automatic backups every 30 minutes mean nothing gets lost. We manage it all \u2014 you never have to think about it.',
    },
  ];

  return (
    <CopyWrapper blockName="WhyAwesomate" codeToCopy={WhyAwesomateCode}>
      <section
        className="py-24 lg:py-28 bg-white"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(15,17,40,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Built to Last</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14 max-w-[600px]">
            Enterprise-Grade Security. Without the Enterprise Price Tag.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="relative pl-5 flex gap-5 items-start">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[3px]"
                  style={{ background: 'linear-gradient(to bottom, var(--color-2), var(--color-3))' }}
                />
                <div className="w-12 h-12 rounded-[14px] bg-brand-accent/[0.06] flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="text-lg font-800 text-brand-navy mb-2">{d.title}</div>
                  <div className="text-[15px] text-gray-500 leading-relaxed">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
