import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeePricingCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-pricing { padding: 100px 0 !important; background: var(--bz-cloud) !important; }
  .bzpr-container { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; text-align: center !important; }
  .bzpr-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; font-weight: 800 !important; color: var(--bz-blue) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .bzpr-h2.bzpr-h2.bzpr-h2.bzpr-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--bz-navy) !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .bzpr-h2.bzpr-h2.bzpr-h2.bzpr-h2 { font-size: 44px !important; } }
  .bzpr-sub { font-family: var(--font-main) !important; font-size: 17px !important; color: #6b7280 !important; line-height: 1.7 !important; margin-bottom: 40px !important; }
  .bzpr-card { background: #ffffff !important; border: 2px solid rgba(82,132,255,0.15) !important; border-radius: 24px !important; padding: 48px 40px !important; }
  .bzpr-card-title { font-family: var(--font-main) !important; font-size: 24px !important; font-weight: 800 !important; color: var(--bz-navy) !important; margin-bottom: 12px !important; }
  .bzpr-card-desc { font-family: var(--font-main) !important; font-size: 16px !important; color: #6b7280 !important; line-height: 1.6 !important; margin-bottom: 32px !important; }
  .bzpr-btn { display: inline-flex !important; align-items: center !important; gap: 8px !important; background: var(--bz-blue) !important; color: white !important; padding: 14px 32px !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 800 !important; text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; transition: all 0.2s !important; border: none !important; cursor: pointer !important; }
  .bzpr-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(82,132,255,0.3) !important; }
  .bzpr-note { font-family: var(--font-main) !important; font-size: 13px !important; color: #9ca3af !important; margin-top: 20px !important; }
</style>

<section id="bz-pricing">
  <div class="bzpr-container">
    <div class="bzpr-label">Pricing</div>
    <h2 class="bzpr-h2">Simple Pricing. Powerful Results.</h2>
    <p class="bzpr-sub">Every business is different. We\u2019ll build you a custom Buddzee setup based on your tools, data volume, and goals.</p>
    <div class="bzpr-card">
      <div class="bzpr-card-title">Let\u2019s See What Buddzee Can Do For You</div>
      <div class="bzpr-card-desc">Book a free demo and we\u2019ll connect your tools live. Ask Buddzee anything about your business \u2014 and see the answers for yourself.</div>
      <a href="/contact" class="bzpr-btn">Book a Free Demo</a>
      <div class="bzpr-note">Free demo. No obligation. Your data stays private.</div>
    </div>
  </div>
</section>
`;

export const BuddzeePricing: React.FC = () => {
  return (
    <CopyWrapper blockName="BuddzeePricing" codeToCopy={BuddzeePricingCode}>
      <section className="py-24 lg:py-28" style={{ background: '#EDEFF7' }}>
        <div className="max-w-[720px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs font-800 uppercase tracking-[0.15em] mb-4" style={{ color: '#5284FF' }}>Pricing</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight mb-4" style={{ color: '#09142B' }}>
            Simple Pricing. Powerful Results.
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed mb-10">
            Every business is different. We&rsquo;ll build you a custom Buddzee setup based on your tools, data volume, and goals.
          </p>
          <div className="bg-white rounded-3xl p-12" style={{ border: '2px solid rgba(82,132,255,0.15)' }}>
            <div className="text-2xl font-800 mb-3" style={{ color: '#09142B' }}>
              Let&rsquo;s See What Buddzee Can Do For You
            </div>
            <div className="text-base text-gray-500 leading-relaxed mb-8">
              Book a free demo and we&rsquo;ll connect your tools live. Ask Buddzee anything about your business &mdash; and see the answers for yourself.
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-[10px] text-sm font-800 uppercase tracking-wider hover:-translate-y-0.5 transition-all no-underline"
              style={{ background: '#5284FF', boxShadow: '0 8px 24px rgba(82,132,255,0.2)' }}
            >
              Book a Free Demo
            </a>
            <div className="text-[13px] text-gray-400 mt-5">
              Free demo. No obligation. Your data stays private.
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
