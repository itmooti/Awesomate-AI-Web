import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactInfoCode = `
<style>
  #ct-info { padding: 80px 0 100px !important; background: var(--color-5) !important; }
  .ct-info-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ct-info-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 40px !important; align-items: center !important; }
  @media (min-width: 768px) { .ct-info-grid { grid-template-columns: 1fr 1fr !important; } }
  .ct-info-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .ct-info-h2.ct-info-h2.ct-info-h2.ct-info-h2 { font-family: var(--font-heading) !important; font-size: 32px !important; line-height: 1.2 !important; color: var(--color-1) !important; margin: 0 0 24px !important; }
  .ct-info-item { display: flex !important; gap: 16px !important; align-items: flex-start !important; margin-bottom: 24px !important; }
  .ct-info-icon { width: 40px !important; height: 40px !important; border-radius: 12px !important; background: rgba(239,149,99,0.08) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; }
  .ct-info-icon svg { width: 18px !important; height: 18px !important; color: var(--color-3) !important; }
  .ct-info-item-title { font-family: var(--font-main) !important; font-size: 14px !important; color: var(--color-1) !important; margin-bottom: 2px !important; }
  .ct-info-item-text { font-family: var(--font-main) !important; font-size: 14px !important; color: #6b7280 !important; line-height: 1.5 !important; }
  .ct-info-map { border-radius: 24px !important; width: 100% !important; height: 320px !important; object-fit: cover !important; box-shadow: 0 10px 40px rgba(0,0,0,0.06) !important; }
</style>

<section id="ct-info">
  <div class="ct-info-container">
    <div class="ct-info-grid">
      <div>
        <div class="ct-info-label">Get in Touch</div>
        <h2 class="ct-info-h2">Based in Australia</h2>
        <div class="ct-info-item">
          <div class="ct-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div>
            <div class="ct-info-item-title">Location</div>
            <div class="ct-info-item-text">Australia (AEST/AEDT timezone)</div>
          </div>
        </div>
        <div class="ct-info-item">
          <div class="ct-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div>
            <div class="ct-info-item-title">Business Hours</div>
            <div class="ct-info-item-text">Monday – Friday, 9am – 5pm AEST</div>
          </div>
        </div>
        <div class="ct-info-item">
          <div class="ct-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <div>
            <div class="ct-info-item-title">Email</div>
            <div class="ct-info-item-text">hello@awesomate.ai</div>
          </div>
        </div>
        <div class="ct-info-item">
          <div class="ct-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div>
          <div>
            <div class="ct-info-item-title">Response Time</div>
            <div class="ct-info-item-text">We typically respond within 24 hours</div>
          </div>
        </div>
      </div>
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/contact/contact-map.jpg" alt="Australia Map" class="ct-info-map">
    </div>
  </div>
</section>
`;

export const ContactInfo: React.FC = () => {
  const items = [
    { title: 'Location', text: 'Australia (AEST/AEDT timezone)', icon: <svg className="w-[18px] h-[18px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
    { title: 'Business Hours', text: 'Monday \u2013 Friday, 9am \u2013 5pm AEST', icon: <svg className="w-[18px] h-[18px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { title: 'Email', text: 'hello@awesomate.ai', icon: <svg className="w-[18px] h-[18px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
    { title: 'Response Time', text: 'We typically respond within 24 hours', icon: <svg className="w-[18px] h-[18px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
  ];

  return (
    <CopyWrapper blockName="ContactInfo" codeToCopy={ContactInfoCode}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">Get in Touch</div>
              <h2 className="text-3xl font-heading font-800 text-brand-navy leading-tight mb-6">Based in Australia</h2>
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 items-start mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/[0.08] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-700 text-brand-navy mb-0.5">{item.title}</div>
                    <div className="text-sm text-gray-500 leading-snug">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="/src/assets/images/contact/contact-map.jpg"
              alt="Australia Map"
              className="rounded-3xl w-full h-[320px] object-cover shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
