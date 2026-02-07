import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeWhoItsForCode = `
<style>
  #vc-who { padding: 100px 0 !important; background: var(--color-5) !important; }
  .vcw-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .vcw-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .vcw-h2.vcw-h2.vcw-h2.vcw-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 56px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vcw-h2.vcw-h2.vcw-h2.vcw-h2 { font-size: 44px !important; } }
  .vcw-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .vcw-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  .vcw-card { background: var(--color-bg-alt, #f8f9fb) !important; border: 1px solid #f3f4f6 !important; border-radius: 20px !important; padding: 32px !important; display: flex !important; gap: 20px !important; align-items: flex-start !important; }
  .vcw-icon { width: 48px !important; height: 48px !important; border-radius: 14px !important; background: rgba(239,149,99,0.08) !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; }
  .vcw-icon svg { width: 22px !important; height: 22px !important; color: var(--color-3) !important; }
  .vcw-title { font-family: var(--font-heading) !important; font-size: 18px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 6px !important; }
  .vcw-desc { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.6 !important; }
</style>

<section id="vc-who">
  <div class="vcw-container">
    <div class="vcw-label">Who It's For</div>
    <h2 class="vcw-h2">Perfect For</h2>
    <div class="vcw-grid">
      <div class="vcw-card">
        <div class="vcw-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <div><div class="vcw-title">Business Owners</div><div class="vcw-desc">Who need a custom tool but can't afford a full development team. Get exactly what you need, not a bloated off-the-shelf solution.</div></div>
      </div>
      <div class="vcw-card">
        <div class="vcw-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <div><div class="vcw-title">Startups</div><div class="vcw-desc">Who need to move fast and iterate. Validate your idea with a working product in weeks, not quarters.</div></div>
      </div>
      <div class="vcw-card">
        <div class="vcw-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg></div>
        <div><div class="vcw-title">Teams</div><div class="vcw-desc">Who want internal tools purpose-built for their workflows. Stop forcing square pegs into round holes with generic software.</div></div>
      </div>
      <div class="vcw-card">
        <div class="vcw-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
        <div><div class="vcw-title">Anyone Tired of $50k+ Quotes</div><div class="vcw-desc">For basic business software. There's a better way — and it doesn't involve mortgaging your house for a simple CRUD app.</div></div>
      </div>
    </div>
  </div>
</section>
`;

export const VibeWhoItsFor: React.FC = () => {
  const personas = [
    { title: 'Business Owners', desc: 'Who need a custom tool but can\u2019t afford a full development team. Get exactly what you need, not a bloated off-the-shelf solution.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
    { title: 'Startups', desc: 'Who need to move fast and iterate. Validate your idea with a working product in weeks, not quarters.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
    { title: 'Teams', desc: 'Who want internal tools purpose-built for their workflows. Stop forcing square pegs into round holes with generic software.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" /></svg> },
    { title: 'Anyone Tired of $50k+ Quotes', desc: 'For basic business software. There\u2019s a better way \u2014 and it doesn\u2019t involve mortgaging your house for a simple CRUD app.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg> },
  ];

  return (
    <CopyWrapper blockName="VibeWhoItsFor" codeToCopy={VibeWhoItsForCode}>
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">Who It's For</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div key={p.title} className="bg-[#f8f9fb] border border-gray-100 rounded-[20px] p-8 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-[14px] bg-brand-orange/[0.08] flex items-center justify-center flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <div className="text-lg font-800 text-brand-navy mb-1.5">{p.title}</div>
                  <div className="text-[15px] text-gray-500 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
