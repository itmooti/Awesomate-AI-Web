import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeExplainerCode = `
<style>
  #vc-explainer { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .vce-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .vce-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .vce-h2.vce-h2.vce-h2.vce-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vce-h2.vce-h2.vce-h2.vce-h2 { font-size: 44px !important; } }
  .vce-intro { font-family: var(--font-main) !important; font-size: 17px !important; color: #6b7280 !important; line-height: 1.7 !important; max-width: 700px !important; margin-bottom: 56px !important; }
  .vce-compare { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .vce-compare { grid-template-columns: 1fr 1fr !important; } }
  .vce-col { border-radius: 20px !important; padding: 40px 32px !important; border: 1px solid #f3f4f6 !important; }
  .vce-col-old { background: white !important; }
  .vce-col-new { background: white !important; border-color: var(--color-3) !important; box-shadow: 0 0 0 1px var(--color-3) !important; }
  .vce-col-tag { display: inline-block !important; font-family: var(--font-main) !important; font-size: 11px !important; font-weight: 800 !important; text-transform: uppercase !important; letter-spacing: 0.1em !important; padding: 4px 12px !important; border-radius: 6px !important; margin-bottom: 20px !important; }
  .vce-col-old .vce-col-tag { background: #f3f4f6 !important; color: #9ca3af !important; }
  .vce-col-new .vce-col-tag { background: rgba(239,149,99,0.1) !important; color: var(--color-3) !important; }
  .vce-col-title { font-family: var(--font-heading) !important; font-size: 22px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 20px !important; }
  .vce-col-item { display: flex !important; align-items: center !important; gap: 10px !important; font-family: var(--font-main) !important; font-size: 15px !important; margin-bottom: 14px !important; }
  .vce-col-old .vce-col-item { color: #9ca3af !important; }
  .vce-col-new .vce-col-item { color: var(--color-1) !important; font-weight: 600 !important; }
</style>

<section id="vc-explainer">
  <div class="vce-container">
    <div class="vce-label">The Rules Have Changed</div>
    <h2 class="vce-h2">Custom Software Is No Longer Just for the Big Guys</h2>
    <p class="vce-intro">Until recently, building a proper business app meant six-figure budgets, months of waiting, and being locked into an agency. So most small businesses settled — for a WordPress site, a Kajabi page, or duct-taping tools together. That era is over. New AI-powered tools let us build real, native applications at a speed and price that was impossible two years ago. The same quality app a large company pays $200k for? We can build it for a fraction — in weeks, not months.</p>
    <div class="vce-compare">
      <div class="vce-col vce-col-old">
        <div class="vce-col-tag">Traditional Development</div>
        <div class="vce-col-title">The Old Way</div>
        <div class="vce-col-item">✕ 6+ months of development</div>
        <div class="vce-col-item">✕ $50k–$200k+ budgets</div>
        <div class="vce-col-item">✕ Only big businesses could afford it</div>
        <div class="vce-col-item">✕ Stuck with WordPress workarounds</div>
        <div class="vce-col-item">✕ Slow, painful changes</div>
      </div>
      <div class="vce-col vce-col-new">
        <div class="vce-col-tag">Awesomated Custom Apps</div>
        <div class="vce-col-title">The New Way</div>
        <div class="vce-col-item">✓ Built in weeks</div>
        <div class="vce-col-item">✓ A fraction of the cost</div>
        <div class="vce-col-item">✓ Accessible to any business, any size</div>
        <div class="vce-col-item">✓ Real apps with native features</div>
        <div class="vce-col-item">✓ Changes done in hours — just tell us what you need</div>
      </div>
    </div>
  </div>
</section>
`;

export const VibeExplainer: React.FC = () => {
  return (
    <CopyWrapper blockName="VibeExplainer" codeToCopy={VibeExplainerCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">The Rules Have Changed</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-4">
            Custom Software Is No Longer Just for the Big Guys
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-[700px] mb-14">
            Until recently, building a proper business app meant six-figure budgets, months of waiting, and being locked into an agency. So most small businesses settled — for a WordPress site, a Kajabi page, or duct-taping tools together. That era is over. New AI-powered tools let us build real, native applications at a speed and price that was impossible two years ago. The same quality app a large company pays $200k for? We can build it for a fraction — in weeks, not months.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Old way */}
            <div className="bg-white border border-gray-100 rounded-[20px] p-10">
              <span className="inline-block text-[11px] font-800 uppercase tracking-wider bg-gray-100 text-gray-400 px-3 py-1 rounded-md mb-5">Traditional Development</span>
              <div className="text-[22px] font-800 text-brand-navy mb-5">The Old Way</div>
              {['6+ months of development', '$50k\u2013$200k+ budgets', 'Only big businesses could afford it', 'Stuck with WordPress workarounds', 'Slow, painful changes'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[15px] text-gray-400 mb-3.5">
                  <span className="text-gray-300">\u2715</span> {item}
                </div>
              ))}
            </div>
            {/* New way */}
            <div className="bg-white border-2 border-brand-orange rounded-[20px] p-10 shadow-[0_0_0_1px_rgba(239,149,99,1)]">
              <span className="inline-block text-[11px] font-800 uppercase tracking-wider bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-md mb-5">Awesomated Custom Apps</span>
              <div className="text-[22px] font-800 text-brand-navy mb-5">The New Way</div>
              {['Built in weeks', 'A fraction of the cost', 'Accessible to any business, any size', 'Real apps with native features', 'Changes done in hours \u2014 just tell us what you need'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[15px] text-brand-navy font-600 mb-3.5">
                  <span className="text-brand-orange font-800">\u2713</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
