import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const WhoItIsForCode = `
<style>
  #n8-who {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    position: relative !important; overflow: hidden !important;
  }
  .n8w-glow {
    position: absolute !important; bottom: -200px !important; right: -100px !important;
    width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8w-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8w-header { text-align: center !important; margin-bottom: 64px !important; }
  .n8w-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8w-h2.n8w-h2.n8w-h2.n8w-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 16px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8w-h2.n8w-h2.n8w-h2.n8w-h2 { font-size: 44px !important; }
  }
  .n8w-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; max-width: 600px !important; margin: 0 auto !important;
    line-height: 1.6 !important; font-weight: 500 !important;
  }
  .n8w-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important;
  }
  @media (min-width: 768px) { .n8w-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (min-width: 1024px) { .n8w-grid { grid-template-columns: repeat(4, 1fr) !important; } }
  .n8w-card {
    background: var(--color-5, #ffffff) !important; padding: 40px !important;
    border-radius: 16px !important; border: 1px solid rgba(15,17,40,0.06) !important;
    transition: all 0.3s !important;
  }
  .n8w-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 20px 40px rgba(15,17,40,0.06) !important;
    border-color: rgba(233,72,77,0.15) !important;
  }
  .n8w-icon {
    width: 48px !important; height: 48px !important;
    background: rgba(233,72,77,0.08) !important; color: var(--color-2) !important;
    border-radius: 12px !important; display: flex !important;
    align-items: center !important; justify-content: center !important;
    margin-bottom: 24px !important; font-weight: 800 !important; font-size: 20px !important;
    font-family: var(--font-main) !important;
  }
  .n8w-title {
    font-family: var(--font-main) !important; font-size: 18px !important;
    font-weight: 800 !important; color: var(--color-1) !important;
    margin-bottom: 12px !important;
  }
  .n8w-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.6 !important; font-weight: 500 !important;
  }
</style>

<section id="n8-who">
  <div class="n8w-glow"></div>
  <div class="n8w-container">
    <div class="n8w-header">
      <div class="n8w-label">Who It's For</div>
      <h2 class="n8w-h2">Built for Businesses That Can't Afford Downtime</h2>
      <p class="n8w-sub">If your business depends on connected apps and automated processes, this is for you.</p>
    </div>
    <div class="n8w-grid">
      <div class="n8w-card">
        <div class="n8w-icon">S</div>
        <h3 class="n8w-title">Service Businesses</h3>
        <p class="n8w-desc">You've automated client onboarding, invoicing, and follow-ups. If those stop, clients notice.</p>
      </div>
      <div class="n8w-card">
        <div class="n8w-icon">O</div>
        <h3 class="n8w-title">Online Businesses</h3>
        <p class="n8w-desc">Your website, store, or platform runs on connected apps. If one breaks, customers leave.</p>
      </div>
      <div class="n8w-card">
        <div class="n8w-icon">G</div>
        <h3 class="n8w-title">Growing Teams</h3>
        <p class="n8w-desc">Your team relies on automated handoffs, reports, and notifications. Manual workarounds slow everyone down.</p>
      </div>
      <div class="n8w-card">
        <div class="n8w-icon">D</div>
        <h3 class="n8w-title">Anyone Tired of Duct-Tape Solutions</h3>
        <p class="n8w-desc">If you've outgrown Zapier, lost data from a crash, or stayed up fixing something that shouldn't have broken — this is for you.</p>
      </div>
    </div>
  </div>
</section>
`;

export const WhoItIsFor: React.FC = () => {
  const cards = [
    { icon: 'S', title: 'Service Businesses', desc: "You've automated client onboarding, invoicing, and follow-ups. If those stop, clients notice." },
    { icon: 'O', title: 'Online Businesses', desc: 'Your website, store, or platform runs on connected apps. If one breaks, customers leave.' },
    { icon: 'G', title: 'Growing Teams', desc: 'Your team relies on automated handoffs, reports, and notifications. Manual workarounds slow everyone down.' },
    { icon: 'D', title: 'Anyone Tired of Duct-Tape Solutions', desc: "If you've outgrown Zapier, lost data from a crash, or stayed up fixing something that shouldn't have broken \u2014 this is for you." },
  ];

  return (
    <CopyWrapper blockName="WhoItIsFor" codeToCopy={WhoItIsForCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Who It's For</div>
            <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-4">
              Built for Businesses That Can't Afford Downtime
            </h2>
            <p className="text-lg text-gray-500 font-500 max-w-2xl mx-auto leading-relaxed">
              If your business depends on connected apps and automated processes, this is for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="bg-white p-10 rounded-2xl border border-brand-navy/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/[0.06] hover:border-brand-accent/15 transition-all">
                <div className="w-12 h-12 bg-brand-accent/[0.08] text-brand-accent rounded-xl flex items-center justify-center font-800 text-xl mb-6">{c.icon}</div>
                <h3 className="text-lg font-800 text-brand-navy mb-3">{c.title}</h3>
                <p className="text-[15px] text-gray-500 font-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
