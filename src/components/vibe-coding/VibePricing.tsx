import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibePricingCode = `
<style>
  #vc-pricing { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .vcpr-container { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; text-align: center !important; }
  .vcpr-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--color-3) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .vcpr-h2.vcpr-h2.vcpr-h2.vcpr-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .vcpr-h2.vcpr-h2.vcpr-h2.vcpr-h2 { font-size: 44px !important; } }
  .vcpr-sub { font-family: var(--font-main) !important; font-size: 17px !important; color: #6b7280 !important; line-height: 1.7 !important; margin-bottom: 40px !important; }
  .vcpr-card { background: white !important; border: 2px solid rgba(239,149,99,0.15) !important; border-radius: 24px !important; padding: 48px 40px !important; }
  .vcpr-card-title { font-family: var(--font-heading) !important; font-size: 24px !important; font-weight: 800 !important; color: var(--color-1) !important; margin-bottom: 12px !important; }
  .vcpr-card-desc { font-family: var(--font-main) !important; font-size: 16px !important; color: #6b7280 !important; line-height: 1.6 !important; margin-bottom: 32px !important; }
  .vcpr-btn { display: inline-flex !important; align-items: center !important; gap: 8px !important; background: linear-gradient(135deg, var(--color-3) 0%, var(--color-2) 100%) !important; color: white !important; padding: 14px 32px !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 800 !important; text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; transition: all 0.2s !important; }
  .vcpr-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(239,149,99,0.3) !important; }
</style>

<section id="vc-pricing">
  <div class="vcpr-container">
    <div class="vcpr-label">Pricing</div>
    <h2 class="vcpr-h2">Every Project Is Unique</h2>
    <p class="vcpr-sub">We quote based on complexity, not hourly rates. Tell us what you need and we'll give you a transparent, fixed-price proposal.</p>
    <div class="vcpr-card">
      <div class="vcpr-card-title">Get a Free Quote</div>
      <div class="vcpr-card-desc">Book a strategy call and we'll scope your project, give you a timeline, and a fixed price. No surprises, no hidden costs.</div>
      <a href="/contact" class="vcpr-btn">Book a Free Strategy Call</a>
    </div>
  </div>
</section>
`;

export const VibePricing: React.FC = () => {
  return (
    <CopyWrapper blockName="VibePricing" codeToCopy={VibePricingCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs font-800 text-brand-orange uppercase tracking-[0.15em] mb-4">Pricing</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-4">
            Every Project Is Unique
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed mb-10">
            We quote based on complexity, not hourly rates. Tell us what you need and we'll give you a transparent, fixed-price proposal.
          </p>
          <div className="bg-white border-2 border-brand-orange/15 rounded-3xl p-12">
            <div className="text-2xl font-800 text-brand-navy mb-3">Get a Free Quote</div>
            <div className="text-base text-gray-500 leading-relaxed mb-8">
              Book a strategy call and we'll scope your project, give you a timeline, and a fixed price. No surprises, no hidden costs.
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-accent text-white px-8 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5 transition-all no-underline">
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
