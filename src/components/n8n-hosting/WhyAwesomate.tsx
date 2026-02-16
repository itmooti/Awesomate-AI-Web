import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ghBase = 'https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/n8n';

const WhyAwesomateCode = `
<style>
  #n8-why {
    padding: 100px 0 !important;
    background: var(--color-5, #ffffff) !important;
    position: relative !important; overflow: hidden !important;
  }
  .n8a-glow {
    position: absolute !important; top: -200px !important; right: -150px !important;
    width: 600px !important; height: 600px !important;
    background: radial-gradient(circle, rgba(30,99,233,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8a-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8a-header { text-align: center !important; margin-bottom: 80px !important; }
  .n8a-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8a-h2.n8a-h2.n8a-h2.n8a-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8a-h2.n8a-h2.n8a-h2.n8a-h2 { font-size: 48px !important; }
  }
  .n8a-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 700px !important; margin: 0 auto !important;
  }

  /* Feature rows — alternating layout */
  .n8a-row {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 40px !important; align-items: center !important;
    margin-bottom: 80px !important;
  }
  @media (min-width: 768px) {
    .n8a-row { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
    .n8a-row.n8a-reverse .n8a-text { order: 2 !important; }
    .n8a-row.n8a-reverse .n8a-img-wrap { order: 1 !important; }
  }
  .n8a-row:last-of-type { margin-bottom: 0 !important; }
  .n8a-text {}
  .n8a-feat-num {
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: var(--color-2) !important; text-transform: uppercase !important;
    letter-spacing: 0.15em !important; margin-bottom: 12px !important;
  }
  .n8a-feat-h3.n8a-feat-h3.n8a-feat-h3.n8a-feat-h3 {
    font-family: var(--font-heading) !important;
    font-size: 28px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 16px !important;
    letter-spacing: -0.01em !important;
  }
  @media (min-width: 768px) {
    .n8a-feat-h3.n8a-feat-h3.n8a-feat-h3.n8a-feat-h3 { font-size: 32px !important; }
  }
  .n8a-feat-body {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 20px !important;
  }
  .n8a-feat-body strong { color: var(--color-1) !important; }
  .n8a-feat-pills {
    display: flex !important; flex-wrap: wrap !important; gap: 8px !important;
  }
  .n8a-pill {
    display: inline-block !important; padding: 6px 14px !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    border-radius: 100px !important;
    font-family: var(--font-main) !important; font-size: 13px !important;
    color: var(--color-1) !important;
  }

  /* Airplane Rule callout */
  .n8a-callout {
    background: rgba(239,149,99,0.06) !important;
    border-left: 4px solid var(--color-3) !important;
    padding: 24px 28px !important; border-radius: 0 16px 16px 0 !important;
    margin-top: 24px !important;
  }
  .n8a-callout-label {
    font-family: var(--font-main) !important; font-size: 11px !important;
    color: var(--color-3) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 6px !important;
  }
  .n8a-callout-text {
    font-family: serif !important; font-size: 15px !important;
    font-style: italic !important; color: #6b7280 !important;
    line-height: 1.7 !important;
  }

  /* Image container */
  .n8a-img-wrap {
    border-radius: 20px !important; overflow: hidden !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    box-shadow: 0 20px 60px rgba(15,17,40,0.06) !important;
  }
  .n8a-img-wrap img {
    width: 100% !important; height: auto !important;
    display: block !important; object-fit: cover !important;
  }

  /* Bottom 3 compact cards */
  .n8a-cards {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 24px !important; margin-top: 80px !important;
    padding-top: 80px !important;
    border-top: 1px solid rgba(15,17,40,0.06) !important;
  }
  @media (min-width: 768px) {
    .n8a-cards { grid-template-columns: repeat(3, 1fr) !important; }
  }
  .n8a-card {
    padding: 32px !important; border-radius: 20px !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    transition: all 0.3s !important;
  }
  .n8a-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 16px 40px rgba(15,17,40,0.06) !important;
    border-color: rgba(233,72,77,0.15) !important;
  }
  .n8a-card-icon {
    width: 48px !important; height: 48px !important;
    border-radius: 12px !important;
    background: rgba(233,72,77,0.08) !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    margin-bottom: 20px !important;
  }
  .n8a-card-icon svg { width: 24px !important; height: 24px !important; }
  .n8a-card-h4 {
    font-family: var(--font-main) !important; font-size: 18px !important;
    font-weight: 700 !important; color: var(--color-1) !important;
    margin-bottom: 10px !important;
  }
  .n8a-card-body {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; line-height: 1.6 !important;
  }
</style>

<section id="n8-why">
  <div class="n8a-glow"></div>
  <div class="n8a-container">
    <div class="n8a-header">
      <div class="n8a-label">Why Awesomate</div>
      <h2 class="n8a-h2">7 Reasons to Choose Awesomate</h2>
      <p class="n8a-sub">The freedom of self-hosting with none of the headaches. Here's what makes us different.</p>
    </div>

    <!-- Feature 1: Uncapped Executions -->
    <div class="n8a-row">
      <div class="n8a-text">
        <div class="n8a-feat-num">01</div>
        <h3 class="n8a-feat-h3">Uncapped Executions, Flat Pricing</h3>
        <p class="n8a-feat-body">Cloud platforms cap you at <strong>2,500 executions per month</strong> on their starter plans — and a single "check emails every 5 minutes" workflow burns through 8,000. We don't artificially meter executions. Run 10,000 or 100,000 — <strong>no surprise bills, no throttling</strong>.</p>
        <div class="n8a-feat-pills">
          <span class="n8a-pill">No execution caps</span>
          <span class="n8a-pill">Flat monthly rate</span>
          <span class="n8a-pill">No surprise bills</span>
        </div>
      </div>
      <div class="n8a-img-wrap">
        <img src="${ghBase}/n8n-pricing-comparison.png" alt="Flat pricing vs escalating cloud costs">
      </div>
    </div>

    <!-- Feature 2: Infrastructure + Airplane Rule -->
    <div class="n8a-row n8a-reverse">
      <div class="n8a-text">
        <div class="n8a-feat-num">02</div>
        <h3 class="n8a-feat-h3">Kubernetes Infrastructure, 99.99% Uptime</h3>
        <p class="n8a-feat-body">Cloud platforms give you <strong>320MB of shared RAM</strong> and burstable CPU. One heavy workflow crashes your entire instance. We deploy on Kubernetes with <strong>dedicated resources</strong> and three HOT database replicas running at all times — not cold backups you restore from, but live copies that can accept traffic instantly. Failover takes 1\u20132 seconds, not minutes.</p>
        <div class="n8a-callout">
          <div class="n8a-callout-label">The Airplane Rule</div>
          <p class="n8a-callout-text">"You wouldn't fly a plane with only one engine. If that engine fails, you're in trouble. We fly with three. If one has a problem, the other two keep you in the air."</p>
        </div>
        <div class="n8a-feat-pills">
          <span class="n8a-pill">3 live copies</span>
          <span class="n8a-pill">Instant failover</span>
          <span class="n8a-pill">Dedicated resources</span>
        </div>
      </div>
      <div class="n8a-img-wrap">
        <img src="${ghBase}/n8n-infrastructure.png" alt="Three-node Kubernetes infrastructure with automatic failover">
      </div>
    </div>

    <!-- Feature 3: Enterprise Infrastructure + Regional Flexibility -->
    <div class="n8a-row">
      <div class="n8a-text">
        <div class="n8a-feat-num">03</div>
        <h3 class="n8a-feat-h3">Your Region, Your Choice</h3>
        <p class="n8a-feat-body">Most cloud platforms store your data in <strong>Frankfurt, Germany</strong> \u2014 no option to choose. That means every API call round-trips to Europe and back, adding latency to every workflow step. We deploy on <strong>OVHcloud</strong>, the world\u2019s #5 hosting provider, with enterprise-grade US data centres by default and regional options across <strong>North America, Asia Pacific, and Europe</strong>. Need a specific region for compliance or latency? We can deploy there.</p>
        <div class="n8a-feat-pills">
          <span class="n8a-pill">OVHcloud (world #5)</span>
          <span class="n8a-pill">Regional flexibility</span>
          <span class="n8a-pill">NA \u00B7 APAC \u00B7 EU</span>
        </div>
      </div>
      <div class="n8a-img-wrap">
        <img src="${ghBase}/n8n-australia-data.png" alt="Global infrastructure map showing regional deployment options">
      </div>
    </div>

    <!-- Feature 4: Real Support -->
    <div class="n8a-row n8a-reverse">
      <div class="n8a-text">
        <div class="n8a-feat-num">04</div>
        <h3 class="n8a-feat-h3">Real Support, Not a Forum Link</h3>
        <p class="n8a-feat-body">Most platforms give you forum support on starter plans and email on pro. When your credentials break on a Friday afternoon, "post to the community" isn't an answer. <strong>We're a service, not just software.</strong> Concierge onboarding, ticketed support, workflow design help, and 24/7 monitoring.</p>
        <div class="n8a-feat-pills">
          <span class="n8a-pill">Concierge onboarding</span>
          <span class="n8a-pill">Ticketed support</span>
          <span class="n8a-pill">24/7 monitoring</span>
        </div>
      </div>
      <div class="n8a-img-wrap">
        <img src="${ghBase}/n8n-support-team.png" alt="Awesomate support team helping a client via video call">
      </div>
    </div>

    <!-- Bottom 3 compact cards -->
    <div class="n8a-cards">
      <div class="n8a-card">
        <div class="n8a-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8 7l4-4 4 4"/><path d="M20 21H4"/><circle cx="12" cy="16" r="2"/></svg>
        </div>
        <div class="n8a-card-h4">Full Customisation Freedom</div>
        <p class="n8a-card-body">Custom nodes, NPM packages, bash scripts, environment variables — the full power of self-hosting without hiring DevOps to run it. One-click deployment in seconds.</p>
      </div>
      <div class="n8a-card">
        <div class="n8a-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="n8a-card-h4">Three Tiers of Data Protection</div>
        <p class="n8a-card-body">Three HOT database replicas for instant failover. Local snapshots every 30 minutes (rolling 3 days). Offsite point-in-time recovery to any minute in the past (rolling 10 days). Cloud platforms retain logs for just 7 days \u2014 we protect your data at every level.</p>
      </div>
      <div class="n8a-card">
        <div class="n8a-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <div class="n8a-card-h4">Static IPs & Enterprise Integration</div>
        <p class="n8a-card-body">Cloud platform IPs change without warning, breaking allowlists. We deploy dedicated infrastructure your IT team can allowlist natively — no proxies, no VPNs, no extra architecture.</p>
      </div>
    </div>
  </div>
</section>
`;

export const WhyAwesomate: React.FC = () => {
  const topFeatures = [
    {
      num: '01',
      title: 'Uncapped Executions, Flat Pricing',
      body: <>Cloud platforms cap you at <strong className="text-brand-navy">2,500 executions per month</strong> on their starter plans — and a single "check emails every 5 minutes" workflow burns through 8,000. We don't artificially meter executions. Run 10,000 or 100,000 — <strong className="text-brand-navy">no surprise bills, no throttling</strong>.</>,
      pills: ['No execution caps', 'Flat monthly rate', 'No surprise bills'],
      image: 'n8n-pricing-comparison.png',
      imageAlt: 'Flat pricing vs escalating cloud costs',
      reverse: false,
    },
    {
      num: '02',
      title: 'Kubernetes Infrastructure, 99.99% Uptime',
      body: <>Cloud platforms give you <strong className="text-brand-navy">320MB of shared RAM</strong> and burstable CPU. One heavy workflow crashes your entire instance. We deploy on Kubernetes with <strong className="text-brand-navy">dedicated resources</strong> and three HOT database replicas running at all times — not cold backups you restore from, but live copies that can accept traffic instantly. Failover takes 1–2 seconds, not minutes.</>,
      pills: ['3 live copies', 'Instant failover', 'Dedicated resources'],
      image: 'n8n-infrastructure.png',
      imageAlt: 'Three-node Kubernetes infrastructure with automatic failover',
      reverse: true,
      callout: {
        label: 'The Airplane Rule',
        text: '"You wouldn\'t fly a plane with only one engine. If that engine fails, you\'re in trouble. We fly with three. If one has a problem, the other two keep you in the air."',
      },
    },
    {
      num: '03',
      title: 'Your Region, Your Choice',
      body: <>Most cloud platforms store your data in <strong className="text-brand-navy">Frankfurt, Germany</strong> — no option to choose. That means every API call round-trips to Europe and back, adding latency to every workflow step. We deploy on <strong className="text-brand-navy">OVHcloud</strong>, the world's #5 hosting provider, with enterprise-grade US data centres by default and regional options across <strong className="text-brand-navy">North America, Asia Pacific, and Europe</strong>. Need a specific region for compliance or latency? We can deploy there.</>,
      pills: ['OVHcloud (world #5)', 'Regional flexibility', 'NA · APAC · EU'],
      image: 'n8n-australia-data.png',
      imageAlt: 'Global infrastructure map showing regional deployment options',
      reverse: false,
    },
    {
      num: '04',
      title: 'Real Support, Not a Forum Link',
      body: <>Most platforms give you forum support on starter plans and email on pro. When your credentials break on a Friday afternoon, "post to the community" isn't an answer. <strong className="text-brand-navy">We're a service, not just software.</strong> Concierge onboarding, ticketed support, workflow design help, and 24/7 monitoring.</>,
      pills: ['Concierge onboarding', 'Ticketed support', '24/7 monitoring'],
      image: 'n8n-support-team.png',
      imageAlt: 'Awesomate support team helping a client via video call',
      reverse: true,
    },
  ];

  const bottomCards = [
    {
      title: 'Full Customisation Freedom',
      body: "Custom nodes, NPM packages, bash scripts, environment variables — the full power of self-hosting without hiring DevOps to run it. One-click deployment in seconds.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 3v18"/><path d="M8 7l4-4 4 4"/><path d="M20 21H4"/><circle cx="12" cy="16" r="2"/></svg>
      ),
    },
    {
      title: 'Three Tiers of Data Protection',
      body: "Three HOT database replicas for instant failover. Local snapshots every 30 minutes (rolling 3 days). Offsite point-in-time recovery to any minute in the past (rolling 10 days). Cloud platforms retain logs for just 7 days — we protect your data at every level.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
      ),
    },
    {
      title: 'Static IPs & Enterprise Integration',
      body: "Cloud platform IPs change without warning, breaking allowlists. We deploy dedicated infrastructure your IT team can allowlist natively — no proxies, no VPNs, no extra architecture.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      ),
    },
  ];

  return (
    <CopyWrapper blockName="WhyAwesomate" codeToCopy={WhyAwesomateCode}>
      <section className="py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(30,99,233,0.04)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Why Awesomate</div>
            <h2 className="text-4xl md:text-5xl font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-5">
              7 Reasons to Choose Awesomate
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[700px] mx-auto font-500">
              The freedom of self-hosting with none of the headaches. Here's what makes us different.
            </p>
          </div>

          {/* Top 4 Feature Rows */}
          {topFeatures.map((f) => (
            <div key={f.num} className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center mb-20 last:mb-0`}>
              <div className={f.reverse ? 'md:order-2' : ''}>
                <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-3">{f.num}</div>
                <h3 className="text-3xl lg:text-[32px] font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-4">{f.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed mb-5 font-500">{f.body}</p>

                {f.callout && (
                  <div className="bg-brand-orange/[0.06] border-l-4 border-brand-orange p-6 rounded-r-2xl mb-5">
                    <h4 className="text-[11px] font-800 text-brand-orange uppercase tracking-[0.15em] mb-1.5">{f.callout.label}</h4>
                    <p className="text-[15px] text-gray-500 italic leading-relaxed font-serif">{f.callout.text}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {f.pills.map((pill) => (
                    <span key={pill} className="inline-block px-3.5 py-1.5 bg-[#f8f9fb] border border-brand-navy/[0.06] rounded-full text-[13px] font-600 text-brand-navy">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl overflow-hidden border border-brand-navy/[0.06] shadow-xl shadow-brand-navy/[0.06] ${f.reverse ? 'md:order-1' : ''}`}>
                <img
                  src={`/src/assets/images/n8n/${f.image}`}
                  alt={f.imageAlt}
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>
          ))}

          {/* Bottom 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 pt-20 border-t border-brand-navy/[0.06]">
            {bottomCards.map((card) => (
              <div key={card.title} className="p-8 rounded-2xl bg-[#f8f9fb] border border-brand-navy/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/[0.06] hover:border-brand-accent/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/[0.08] flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h4 className="text-lg font-700 text-brand-navy mb-2.5">{card.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-500">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
