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
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-why-h2.hm-why-h2.hm-why-h2.hm-why-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
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
    font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 8px !important;
  }
  .hm-why-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.65 !important;
  }
</style>

<section id="hm-why">
  <div class="hm-why-container">
    <div class="hm-why-label">Why Awesomate?</div>
    <h2 class="hm-why-h2">We Don't Just Build Things. We Build Things That Last.</h2>

    <div class="hm-why-grid">
      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <div>
          <div class="hm-why-title">Australian-Based, Australian-Run</div>
          <div class="hm-why-desc">No offshore support tickets. Real humans, your timezone. We're based in Australia and we understand Australian business.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3-4.803a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        </div>
        <div>
          <div class="hm-why-title">Built for Business Owners</div>
          <div class="hm-why-desc">We speak business, not jargon. Every solution is designed for people who run companies, not write code.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
        </div>
        <div>
          <div class="hm-why-title">End-to-End Technology Partner</div>
          <div class="hm-why-desc">Hosting, data, apps — one team that understands your whole stack. No more juggling five different vendors.</div>
        </div>
      </div>

      <div class="hm-why-item">
        <div class="hm-why-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <div>
          <div class="hm-why-title">Empowerment, Not Dependency</div>
          <div class="hm-why-desc">We train you to maintain what we build. Your business, your tools, your independence. No lock-in, ever.</div>
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
          <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Australian-Based, Australian-Run',
      desc: 'No offshore support tickets. Real humans, your timezone. We\u2019re based in Australia and we understand Australian business.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3-4.803a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Built for Business Owners',
      desc: 'We speak business, not jargon. Every solution is designed for people who run companies, not write code.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'End-to-End Technology Partner',
      desc: 'Hosting, data, apps \u2014 one team that understands your whole stack. No more juggling five different vendors.',
    },
    {
      icon: (
        <svg className="w-[22px] h-[22px] text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Empowerment, Not Dependency',
      desc: 'We train you to maintain what we build. Your business, your tools, your independence. No lock-in, ever.',
    },
  ];

  return (
    <CopyWrapper blockName="WhyAwesomate" codeToCopy={WhyAwesomateCode}>
      <section
        className="py-24 lg:py-28 bg-white"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(15,17,40,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Why Awesomate?</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14 max-w-[600px]">
            We Don't Just Build Things. We Build Things That Last.
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
