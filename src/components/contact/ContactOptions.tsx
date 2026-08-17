import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactOptionsCode = `
<style>
  #ct-options { padding: 80px 0 100px !important; background: var(--color-5) !important; }
  .ct-opt-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ct-opt-stack { display: flex !important; flex-direction: column !important; gap: 24px !important; }
  .ct-opt-featured { position: relative !important; border-radius: 24px !important; padding: 56px 40px !important; text-align: center !important; color: #ffffff !important; overflow: hidden !important; background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important; box-shadow: 0 20px 50px rgba(233,72,77,0.18) !important; }
  .ct-opt-featured-title { font-family: var(--font-heading) !important; font-size: 32px !important; line-height: 1.15 !important; letter-spacing: -0.02em !important; color: #ffffff !important; margin: 0 0 14px !important; }
  .ct-opt-featured-desc { font-family: var(--font-main) !important; font-size: 16px !important; line-height: 1.6 !important; color: rgba(255,255,255,0.92) !important; max-width: 640px !important; margin: 0 auto 28px !important; }
  .ct-opt-featured-btn { display: inline-flex !important; align-items: center !important; gap: 8px !important; background: #ffffff !important; color: var(--color-2) !important; font-family: var(--font-main) !important; font-size: 15px !important; font-weight: 700 !important; padding: 14px 28px !important; border-radius: 12px !important; text-decoration: none !important; box-shadow: 0 8px 20px rgba(0,0,0,0.12) !important; transition: all 0.3s !important; }
  .ct-opt-featured-btn:hover { transform: translateY(-2px) !important; gap: 12px !important; box-shadow: 0 12px 28px rgba(0,0,0,0.16) !important; }
  .ct-opt-featured-btn svg { width: 16px !important; height: 16px !important; }
  @media (max-width: 767px) {
    .ct-opt-featured { padding: 36px 24px !important; }
    .ct-opt-featured-title { font-size: 26px !important; }
    .ct-opt-featured-desc { font-size: 15px !important; }
  }
  .ct-opt-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .ct-opt-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  .ct-opt-card { background: var(--color-bg-alt, #f8f9fb) !important; border: 1px solid #f3f4f6 !important; border-radius: 20px !important; padding: 40px 32px !important; text-align: center !important; transition: all 0.3s !important; position: relative !important; overflow: hidden !important; }
  .ct-opt-card::before { content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important; height: 2px !important; background: linear-gradient(90deg, var(--color-2), var(--color-3)) !important; }
  .ct-opt-card:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 40px rgba(233,72,77,0.08) !important; }
  .ct-opt-icon { width: 56px !important; height: 56px !important; border-radius: 16px !important; background: rgba(233,72,77,0.08) !important; display: flex !important; align-items: center !important; justify-content: center !important; margin: 0 auto 20px !important; }
  .ct-opt-icon svg { width: 24px !important; height: 24px !important; color: var(--color-2) !important; }
  .ct-opt-title { font-family: var(--font-heading) !important; font-size: 20px !important; color: var(--color-1) !important; margin-bottom: 10px !important; }
  .ct-opt-desc { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.6 !important; margin-bottom: 24px !important; }
  .ct-opt-link { font-family: var(--font-main) !important; font-size: 14px !important; color: var(--color-2) !important; text-decoration: none !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; }
  .ct-opt-link:hover { gap: 10px !important; }
  .ct-opt-link svg { width: 16px !important; height: 16px !important; }
</style>

<section id="ct-options">
  <div class="ct-opt-container">
    <div class="ct-opt-stack">
      <div class="ct-opt-featured">
        <div class="ct-opt-featured-title">Get started with n8n hosting</div>
        <div class="ct-opt-featured-desc">Most teams come to us for managed n8n hosting — fast setup, reliable infrastructure, no DevOps headaches.</div>
        <a href="#n8n-hosting" class="ct-opt-featured-btn">Click here to get started <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></a>
      </div>
      <div class="ct-opt-grid">
        <div class="ct-opt-card">
          <div class="ct-opt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
          <div class="ct-opt-title">Book a Discovery Call</div>
          <div class="ct-opt-desc">Want to better understand our offerings? Book a free 30-minute discovery call and we'll map out the right fit.</div>
          <a href="#ct-form" class="ct-opt-link">Book Now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></a>
        </div>
        <div class="ct-opt-card">
          <div class="ct-opt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <div class="ct-opt-title">Email Us</div>
          <div class="ct-opt-desc">Email us for general enquiries, partnership ideas, or to submit a support ticket.</div>
          <a href="mailto:hello@awesomate.ai" class="ct-opt-link">hello@awesomate.ai <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></a>
        </div>
        <div class="ct-opt-card">
          <div class="ct-opt-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <div class="ct-opt-title">Quick Question?</div>
          <div class="ct-opt-desc">Have a quick question? Chat with Davo, our trained AI agent, in the bottom-right of your screen, or browse our FAQs.</div>
          <a href="/#faq" class="ct-opt-link">Browse FAQs <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const ContactOptions: React.FC = () => {
  const options = [
    {
      title: 'Book a Discovery Call',
      desc: 'Want to better understand our offerings? Book a free 30-minute discovery call and we\u2019ll map out the right fit.',
      link: '#ct-form',
      linkText: 'Book Now',
      icon: <svg className="w-6 h-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    },
    {
      title: 'Email Us',
      desc: 'Email us for general enquiries, partnership ideas, or to submit a support ticket.',
      link: 'mailto:hello@awesomate.ai',
      linkText: 'hello@awesomate.ai',
      icon: <svg className="w-6 h-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    },
    {
      title: 'Quick Question?',
      desc: 'Have a quick question? Chat with Davo, our trained AI agent, in the bottom-right of your screen, or browse our FAQs.',
      link: '/#faq',
      linkText: 'Browse FAQs',
      icon: <svg className="w-6 h-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    },
  ];

  return (
    <CopyWrapper blockName="ContactOptions" codeToCopy={ContactOptionsCode}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl px-6 py-10 md:px-10 md:py-14 text-center text-white overflow-hidden bg-gradient-to-br from-brand-accent to-brand-orange shadow-[0_20px_50px_rgba(233,72,77,0.18)]">
              <div className="font-heading text-[26px] md:text-[32px] leading-[1.15] tracking-tight text-white mb-3.5">
                Get started with n8n hosting
              </div>
              <div className="text-[15px] md:text-base text-white/90 leading-relaxed max-w-[640px] mx-auto mb-7">
                Most teams come to us for managed n8n hosting &mdash; fast setup, reliable infrastructure, no DevOps headaches.
              </div>
              <a
                href="#n8n-hosting"
                className="group inline-flex items-center gap-2 bg-white text-brand-accent text-[15px] font-700 px-7 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:gap-3 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-all no-underline"
              >
                Click here to get started
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {options.map((o) => (
                <div key={o.title} className="group relative bg-[#f8f9fb] border border-gray-100 rounded-[20px] p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(233,72,77,0.08)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-orange" />
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/[0.08] flex items-center justify-center mx-auto mb-5">
                    {o.icon}
                  </div>
                  <div className="text-xl font-800 text-brand-navy mb-2.5">{o.title}</div>
                  <div className="text-[15px] text-gray-500 leading-relaxed mb-6">{o.desc}</div>
                  <a href={o.link} className="inline-flex items-center gap-1.5 text-sm font-700 text-brand-accent group-hover:gap-2.5 transition-all no-underline">
                    {o.linkText}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
