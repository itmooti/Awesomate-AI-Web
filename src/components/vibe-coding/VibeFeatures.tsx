import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeFeaturesCode = `
<style>
  #vc-features { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .vcf-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .vcf-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .vcf-h2.vcf-h2.vcf-h2.vcf-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 56px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vcf-h2.vcf-h2.vcf-h2.vcf-h2 { font-size: 44px !important; } }
  .vcf-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .vcf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (min-width: 1024px) { .vcf-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  .vcf-card { background: white !important; border: 1px solid #f3f4f6 !important; border-radius: 20px !important; padding: 32px !important; transition: all 0.3s !important; position: relative !important; overflow: hidden !important; }
  .vcf-card::before { content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important; height: 2px !important; background: linear-gradient(90deg, var(--color-2), var(--color-3)) !important; }
  .vcf-card:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 24px rgba(0,0,0,0.04), 0 0 20px rgba(239,149,99,0.15) !important; }
  .vcf-icon { width: 44px !important; height: 44px !important; border-radius: 12px !important; background: rgba(239,149,99,0.08) !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-bottom: 20px !important; }
  .vcf-icon svg { width: 22px !important; height: 22px !important; color: var(--color-3) !important; }
  .vcf-title { font-family: var(--font-heading) !important; font-size: 18px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 8px !important; }
  .vcf-desc { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.6 !important; }
</style>

<section id="vc-features">
  <div class="vcf-container">
    <div class="vcf-label">What You Get</div>
    <h2 class="vcf-h2">More Than Just an App</h2>
    <div class="vcf-grid">
      <div class="vcf-card">
        <div class="vcf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <div class="vcf-title">Built at the Speed of Thought</div>
        <div class="vcf-desc">We built an entire client app in a single day. Features that used to take weeks now take hours. This isn't a promise — it's just how fast the technology has gotten.</div>
      </div>
      <div class="vcf-card">
        <div class="vcf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div class="vcf-title">Real Apps, Not Workarounds</div>
        <div class="vcf-desc">Push notifications. Real-time data. Native mobile experience. Everything your clients expect from a proper app — not a login page on a website.</div>
      </div>
      <div class="vcf-card">
        <div class="vcf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg></div>
        <div class="vcf-title">Changes in Plain English</div>
        <div class="vcf-desc">Want something different? Just tell us. Describe the change in your own words and we'll have it done — usually within hours, not weeks. No tech skills needed.</div>
      </div>
      <div class="vcf-card">
        <div class="vcf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="vcf-title">We Handle Everything</div>
        <div class="vcf-desc">From hosting to updates to new features — we manage it all. You focus on your business, we keep your app running and evolving.</div>
      </div>
      <div class="vcf-card">
        <div class="vcf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <div class="vcf-title">Your App, Fully Managed</div>
        <div class="vcf-desc">A real app for your business at a fraction of the old cost. Built fast, kept running, and always improving — with a team that actually understands your business.</div>
      </div>
    </div>
  </div>
</section>
`;

export const VibeFeatures: React.FC = () => {
  const features = [
    { title: 'Built at the Speed of Thought', desc: 'We built an entire client app in a single day. Features that used to take weeks now take hours. This isn\u2019t a promise \u2014 it\u2019s just how fast the technology has gotten.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: 'Real Apps, Not Workarounds', desc: 'Push notifications. Real-time data. Native mobile experience. Everything your clients expect from a proper app \u2014 not a login page on a website.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
    { title: 'Changes in Plain English', desc: 'Want something different? Just tell us. Describe the change in your own words and we\u2019ll have it done \u2014 usually within hours, not weeks. No tech skills needed.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> },
    { title: 'We Handle Everything', desc: 'From hosting to updates to new features \u2014 we manage it all. You focus on your business, we keep your app running and evolving.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { title: 'Your App, Fully Managed', desc: 'A real app for your business at a fraction of the old cost. Built fast, kept running, and always improving \u2014 with a team that actually understands your business.', icon: <svg className="w-[22px] h-[22px] text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  return (
    <CopyWrapper blockName="VibeFeatures" codeToCopy={VibeFeaturesCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">What You Get</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14">
            More Than Just an App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="relative overflow-hidden bg-white border border-gray-100 rounded-[20px] p-8 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-orange/15 transition-all before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-brand-accent before:to-brand-orange">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/[0.08] flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <div className="text-lg font-800 text-brand-navy mb-2">{f.title}</div>
                <div className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
