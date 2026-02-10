import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ServicesOverviewCode = `
<style>
  #hm-services {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
  }
  .hm-svc-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .hm-svc-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-svc-h2.hm-svc-h2.hm-svc-h2.hm-svc-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 16px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .hm-svc-h2.hm-svc-h2.hm-svc-h2.hm-svc-h2 { font-size: 48px !important; }
  }
  .hm-svc-intro {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 600px !important; margin-bottom: 56px !important;
  }
  .hm-svc-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important;
  }
  @media (min-width: 768px) { .hm-svc-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  .hm-svc-card {
    background: white !important; border: 1px solid #f3f4f6 !important;
    border-radius: 20px !important; padding: 40px 32px !important;
    transition: all 0.3s !important; text-decoration: none !important;
    display: block !important; position: relative !important; overflow: hidden !important;
  }
  .hm-svc-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important;
    border-color: transparent !important;
  }
  .hm-svc-card::after {
    content: '' !important; position: absolute !important;
    bottom: 0 !important; left: 0 !important; right: 0 !important;
    height: 3px !important; opacity: 0 !important;
    transition: opacity 0.3s !important;
  }
  .hm-svc-card:hover::after { opacity: 1 !important; }
  .hm-svc-card-red::after { background: linear-gradient(90deg, var(--color-2), var(--color-3)) !important; }
  .hm-svc-card-blue::after { background: linear-gradient(90deg, #5284FF, #ABC1FF) !important; }
  .hm-svc-card-orange::after { background: linear-gradient(90deg, var(--color-3), #fbbf24) !important; }
  .hm-svc-card::before {
    content: '' !important; position: absolute !important;
    top: 0 !important; left: 0 !important; right: 0 !important;
    height: 2px !important;
  }
  .hm-svc-card-red::before { background: linear-gradient(90deg, var(--color-2), var(--color-3)) !important; }
  .hm-svc-card-blue::before { background: linear-gradient(90deg, #5284FF, #ABC1FF) !important; }
  .hm-svc-card-orange::before { background: linear-gradient(90deg, var(--color-3), #fbbf24) !important; }
  .hm-svc-card-red:hover { box-shadow: 0 20px 40px rgba(233,72,77,0.1) !important; }
  .hm-svc-card-blue:hover { box-shadow: 0 20px 40px rgba(82,132,255,0.1) !important; }
  .hm-svc-card-orange:hover { box-shadow: 0 20px 40px rgba(239,149,99,0.1) !important; }
  .hm-svc-icon {
    width: 56px !important; height: 56px !important; border-radius: 16px !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    font-size: 20px !important; margin-bottom: 24px !important;
    font-family: var(--font-main) !important; transition: transform 0.3s !important;
  }
  .hm-svc-card:hover .hm-svc-icon { transform: scale(1.1) !important; }
  .hm-svc-icon-red { background: rgba(233,72,77,0.08) !important; color: var(--color-2) !important; }
  .hm-svc-icon-blue { background: rgba(82,132,255,0.08) !important; color: #5284FF !important; }
  .hm-svc-icon-orange { background: rgba(239,149,99,0.08) !important; color: var(--color-3) !important; }
  .hm-svc-card-title {
    font-family: var(--font-heading) !important; font-size: 22px !important;
    color: var(--color-1) !important;
    margin-bottom: 12px !important;
  }
  .hm-svc-card-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.6 !important; margin-bottom: 24px !important;
  }
  .hm-svc-card-link {
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important;
    display: inline-flex !important; align-items: center !important; gap: 6px !important;
    transition: gap 0.2s !important;
  }
  .hm-svc-card:hover .hm-svc-card-link { gap: 10px !important; }
  .hm-svc-card-link-red { color: var(--color-2) !important; }
  .hm-svc-card-link-blue { color: #5284FF !important; }
  .hm-svc-card-link-orange { color: var(--color-3) !important; }
  .hm-svc-card-link svg { width: 16px !important; height: 16px !important; }
</style>

<section id="hm-services">
  <div class="hm-svc-container">
    <div class="hm-svc-label">What We Do</div>
    <h2 class="hm-svc-h2">Three Pillars.<br>One Partner.</h2>
    <p class="hm-svc-intro">Most businesses juggle half a dozen tools, three different vendors, and still can't get a straight answer from their own data. We fix that.</p>

    <div class="hm-svc-grid">
      <a href="/n8n-hosting" class="hm-svc-card hm-svc-card-red">
        <div class="hm-svc-icon hm-svc-icon-red">n8</div>
        <div class="hm-svc-card-title">Automations That Run Themselves</div>
        <div class="hm-svc-card-desc">We connect your CRM, accounting, email, team chat, docs, and everything in between — so data flows automatically. No more manual entry, no missed follow-ups. Managed and monitored by us, 24/7.</div>
        <span class="hm-svc-card-link hm-svc-card-link-red">
          Explore Automations
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
        </span>
      </a>

      <a href="/buddzee" class="hm-svc-card hm-svc-card-blue">
        <div class="hm-svc-icon hm-svc-icon-blue">Bz</div>
        <div class="hm-svc-card-title">Buddzee — Your AI Data Platform</div>
        <div class="hm-svc-card-desc">Our proprietary platform puts all your business data in one place — queryable by AI in plain English. Ask a question, get an instant answer. Then go further: build custom apps on top of your unified data using the Buddzee SDK.</div>
        <span class="hm-svc-card-link hm-svc-card-link-blue">
          Discover Buddzee
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
        </span>
      </a>

      <a href="/vibe-coding" class="hm-svc-card hm-svc-card-orange">
        <div class="hm-svc-icon hm-svc-icon-orange">Vc</div>
        <div class="hm-svc-card-title">Custom Apps. Built by Experts.</div>
        <div class="hm-svc-card-desc">Anyone can drag-and-drop an app in an AI builder. But without expert guidance and direct access to your business data, you get a toy — not a tool. We build real apps connected to Buddzee, so your team and customers get something genuinely useful.</div>
        <span class="hm-svc-card-link hm-svc-card-link-orange">
          See Our Work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
        </span>
      </a>
    </div>
  </div>
</section>
`;

export const ServicesOverview: React.FC = () => {
  return (
    <CopyWrapper blockName="ServicesOverview" codeToCopy={ServicesOverviewCode}>
      <section id="services" className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-4">
            Three Pillars.<br />One Partner.
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-[600px] mb-14">
            Most businesses juggle half a dozen tools, three different vendors, and still can't get a straight answer from their own data. We fix that.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* n8n Hosting Card */}
            <a href="#n8n-hosting" className="group block bg-white border border-gray-100 rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(233,72,77,0.1)] hover:border-transparent no-underline relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent to-brand-orange" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-accent to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/[0.08] text-brand-accent flex items-center justify-center text-xl font-800 mb-6 transition-transform duration-300 group-hover:scale-110">n8</div>
              <div className="text-[22px] font-800 text-brand-navy mb-3">Automations That Run Themselves</div>
              <div className="text-[15px] text-gray-500 leading-relaxed mb-6">We connect your CRM, accounting, email, team chat, docs, and everything in between — so data flows automatically. No more manual entry, no missed follow-ups. Managed and monitored by us, 24/7.</div>
              <span className="inline-flex items-center gap-1.5 text-sm font-700 text-brand-accent group-hover:gap-2.5 transition-all">
                Explore Automations
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </a>

            {/* Buddzee Card */}
            <a href="#buddzee" className="group block bg-white border border-gray-100 rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-transparent no-underline relative overflow-hidden" style={{ boxShadow: undefined }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(82,132,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}>
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #5284FF, #ABC1FF)' }} />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, #5284FF, #ABC1FF)' }} />
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-800 mb-6 transition-transform duration-300 group-hover:scale-110" style={{ background: 'rgba(82,132,255,0.08)', color: '#5284FF' }}>Bz</div>
              <div className="text-[22px] font-800 text-brand-navy mb-3">Buddzee — Your AI Data Platform</div>
              <div className="text-[15px] text-gray-500 leading-relaxed mb-6">Our proprietary platform puts all your business data in one place — queryable by AI in plain English. Ask a question, get an instant answer. Then go further: build custom apps on top of your unified data using the Buddzee SDK.</div>
              <span className="inline-flex items-center gap-1.5 text-sm font-700 group-hover:gap-2.5 transition-all" style={{ color: '#5284FF' }}>
                Discover Buddzee
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </a>

            {/* Vibe Coding Card */}
            <a href="#vibe-coding" className="group block bg-white border border-gray-100 rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(239,149,99,0.1)] hover:border-transparent no-underline relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange to-yellow-400" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/[0.08] text-brand-orange flex items-center justify-center text-xl font-800 mb-6 transition-transform duration-300 group-hover:scale-110">Vc</div>
              <div className="text-[22px] font-800 text-brand-navy mb-3">Custom Apps. Built by Experts.</div>
              <div className="text-[15px] text-gray-500 leading-relaxed mb-6">Anyone can drag-and-drop an app in an AI builder. But without expert guidance and direct access to your business data, you get a toy — not a tool. We build real apps connected to Buddzee, so your team and customers get something genuinely useful.</div>
              <span className="inline-flex items-center gap-1.5 text-sm font-700 text-brand-orange group-hover:gap-2.5 transition-all">
                See Our Work
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
