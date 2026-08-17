import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const N8nVsZapierCode = `
<style>
  #n8-vszapier {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    position: relative !important; overflow: hidden !important;
    border-top: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8z-glow {
    position: absolute !important; bottom: -150px !important; right: -100px !important;
    width: 450px !important; height: 450px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8z-container {
    max-width: 1000px !important; margin: 0 auto !important;
    padding: 0 24px !important; text-align: center !important;
    position: relative !important; z-index: 1 !important;
  }
  .n8z-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8z-h2.n8z-h2.n8z-h2.n8z-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8z-h2.n8z-h2.n8z-h2.n8z-h2 { font-size: 44px !important; }
  }
  .n8z-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 48px !important; max-width: 700px !important;
    margin-left: auto !important; margin-right: auto !important;
  }
  .n8z-hero-img {
    display: block !important; max-width: 600px !important; width: 100% !important;
    margin: 0 auto 48px !important; border-radius: 20px !important;
    box-shadow: 0 8px 32px rgba(15,17,40,0.08) !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8z-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 16px !important;
    text-align: left !important;
  }
  @media (min-width: 640px) { .n8z-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  .n8z-card {
    padding: 28px !important; border-radius: 16px !important;
    background: var(--color-5, #ffffff) !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    transition: all 0.3s !important;
  }
  .n8z-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 24px rgba(15,17,40,0.04) !important;
    border-color: rgba(233,72,77,0.15) !important;
  }
  .n8z-icon {
    width: 44px !important; height: 44px !important;
    border-radius: 10px !important;
    background: rgba(233,72,77,0.08) !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    margin-bottom: 16px !important;
  }
  .n8z-icon svg { width: 22px !important; height: 22px !important; stroke: url(#n8z-grad) !important; }
  .n8z-title {
    font-family: var(--font-main) !important; font-size: 16px !important;
    font-weight: 700 !important; color: var(--color-1) !important;
    margin-bottom: 8px !important;
  }
  .n8z-desc {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; line-height: 1.6 !important;
  }
  .n8z-bottom {
    text-align: center !important; margin-top: 40px !important;
  }
  .n8z-cta {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 16px !important; font-weight: 700 !important;
    color: var(--color-5) !important;
    background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important;
    padding: 14px 32px !important; border-radius: 8px !important;
    text-decoration: none !important; transition: all 0.3s !important;
    border: none !important; cursor: pointer !important;
  }
  .n8z-cta:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 8px 20px rgba(233,72,77,0.25) !important;
  }
</style>

<section id="n8-vszapier">
  <svg width="0" height="0" style="position:absolute"><defs><linearGradient id="n8z-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e9484d"/><stop offset="100%" stop-color="#ef9563"/></linearGradient></defs></svg>
  <div class="n8z-glow"></div>
  <div class="n8z-container">
    <div class="n8z-label">Why n8n</div>
    <h2 class="n8z-h2">Why Businesses Are Ditching Zapier</h2>
    <p class="n8z-sub">Zapier got you started. But as your business grows, its limitations become your bottleneck. n8n gives you the power, flexibility, and control that Zapier never will.</p>

    <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/n8n/n8n-vs-zapier.png" alt="n8n visual workflow builder compared to linear automation" class="n8z-hero-img" />

    <div class="n8z-grid">
      <div class="n8z-card">
        <div class="n8z-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="n8z-title">No Per-Task Pricing</div>
        <div class="n8z-desc">Zapier charges for every single task \u2014 and a 5-step workflow counts as 5 tasks. A simple CRM sync running every 5 minutes costs hundreds per month on Zapier. With n8n, you get unlimited executions at a flat rate. Your bill doesn\u2019t grow every time your business does.</div>
      </div>
      <div class="n8z-card">
        <div class="n8z-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
        </div>
        <div class="n8z-title">Own Your Data</div>
        <div class="n8z-desc">Every customer record, every order, every lead \u2014 all flowing through Zapier\u2019s servers. With n8n on Awesomate, your data stays on dedicated infrastructure you control. No third-party access, no shared environments, no wondering who else can see your business data.</div>
      </div>
      <div class="n8z-card">
        <div class="n8z-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
        </div>
        <div class="n8z-title">More Powerful Workflows</div>
        <div class="n8z-desc">Zapier is a straight line: trigger \u2192 action. Real business logic isn\u2019t that simple. n8n gives you branching, loops, error handling, code nodes, and sub-workflows \u2014 all included. No paying extra for \u201CPaths\u201D or \u201CFilters\u201D like Zapier charges for on higher tiers.</div>
      </div>
      <div class="n8z-card">
        <div class="n8z-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
        <div class="n8z-title">No Vendor Lock-In</div>
        <div class="n8z-desc">Build 50 workflows on Zapier and try to leave \u2014 you can\u2019t export a thing. n8n is open-source. Export your workflows as JSON, switch hosts, inspect the code, extend it yourself. Your automations belong to you, not to a platform that can raise prices whenever it wants.</div>
      </div>
    </div>

    <div class="n8z-bottom">
      <a href="#n8-pricing" class="n8z-cta">See n8n Hosting Plans</a>
    </div>
  </div>
</section>
`;

const GradientDefs = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <linearGradient id="n8z-jsx-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e9484d" />
        <stop offset="100%" stopColor="#ef9563" />
      </linearGradient>
    </defs>
  </svg>
);

const benefits = [
  {
    title: 'No Per-Task Pricing',
    desc: 'Zapier charges for every single task \u2014 and a 5-step workflow counts as 5 tasks. A simple CRM sync running every 5 minutes costs hundreds per month on Zapier. With n8n, you get unlimited executions at a flat rate. Your bill doesn\u2019t grow every time your business does.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-jsx-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
  {
    title: 'Own Your Data',
    desc: 'Every customer record, every order, every lead \u2014 all flowing through Zapier\u2019s servers. With n8n on Awesomate, your data stays on dedicated infrastructure you control. No third-party access, no shared environments, no wondering who else can see your business data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-jsx-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
    ),
  },
  {
    title: 'More Powerful Workflows',
    desc: 'Zapier is a straight line: trigger \u2192 action. Real business logic isn\u2019t that simple. n8n gives you branching, loops, error handling, code nodes, and sub-workflows \u2014 all included. No paying extra for \u201CPaths\u201D or \u201CFilters\u201D like Zapier charges for on higher tiers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-jsx-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
    ),
  },
  {
    title: 'No Vendor Lock-In',
    desc: 'Build 50 workflows on Zapier and try to leave \u2014 you can\u2019t export a thing. n8n is open-source. Export your workflows as JSON, switch hosts, inspect the code, extend it yourself. Your automations belong to you, not to a platform that can raise prices whenever it wants.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="url(#n8z-jsx-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    ),
  },
];

export const N8nVsZapier: React.FC = () => {
  return (
    <CopyWrapper blockName="N8nVsZapier" codeToCopy={N8nVsZapierCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb] border-t border-brand-navy/[0.06] relative overflow-hidden">
        <GradientDefs />
        <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Why n8n</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-5">
            Why Businesses Are Ditching Zapier
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 font-500 max-w-[700px] mx-auto">
            Zapier got you started. But as your business grows, its limitations become your bottleneck. n8n gives you the power, flexibility, and control that Zapier never will.
          </p>

          <img
            src="/src/assets/images/n8n/n8n-vs-zapier.png"
            alt="n8n visual workflow builder compared to linear automation"
            className="block max-w-[600px] w-full mx-auto mb-12 rounded-[20px] shadow-lg shadow-brand-navy/[0.08] border border-brand-navy/[0.06]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 rounded-2xl bg-white border border-brand-navy/[0.06] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/[0.04] hover:border-brand-accent/15 transition-all">
                <div className="w-11 h-11 rounded-[10px] bg-brand-accent/[0.08] flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <div className="text-base font-700 text-brand-navy mb-2">{b.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed font-500">{b.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#n8-pricing" className="inline-block px-8 py-3.5 rounded-lg text-white font-700 bg-gradient-to-br from-brand-accent to-brand-orange hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/25 transition-all">
              See n8n Hosting Plans
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
