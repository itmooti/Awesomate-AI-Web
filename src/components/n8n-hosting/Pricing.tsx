import React, { useState } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const PricingCode = `
<style>
  #n8-pricing {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    position: relative !important; overflow: hidden !important;
    border-top: 1px solid rgba(15,17,40,0.06) !important;
    border-bottom: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8pr-glow {
    position: absolute !important; top: -100px !important; right: -100px !important;
    width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8pr-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8pr-header { text-align: center !important; margin-bottom: 64px !important; }
  .n8pr-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8pr-h2.n8pr-h2.n8pr-h2.n8pr-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8pr-h2.n8pr-h2.n8pr-h2.n8pr-h2 { font-size: 48px !important; }
  }
  .n8pr-sub {
    font-family: var(--font-main) !important; font-size: 20px !important;
    color: #6b7280 !important; max-width: 600px !important; margin: 0 auto !important;
    line-height: 1.6 !important;
  }
  .n8pr-toggle {
    display: inline-flex !important; background: var(--color-5, #fff) !important;
    border: 2px solid var(--color-1) !important; padding: 4px !important;
    border-radius: 999px !important; margin-top: 40px !important;
  }
  .n8pr-tbtn {
    padding: 12px 32px !important; border-radius: 999px !important;
    font-family: var(--font-main) !important;
    font-size: 14px !important; cursor: pointer !important;
    color: var(--color-1) !important; border: none !important;
    background: none !important; transition: all 0.2s !important;
  }
  .n8pr-tbtn.active {
    background: var(--color-1) !important; color: var(--color-5) !important;
    box-shadow: 0 4px 6px rgba(15,17,40,0.2) !important;
  }
  .n8pr-grid {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 24px !important; margin-top: 64px !important;
  }
  @media (min-width: 768px) { .n8pr-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (min-width: 1024px) { .n8pr-grid { grid-template-columns: repeat(4, 1fr) !important; } }
  .n8pr-card {
    display: flex !important; flex-direction: column !important;
    padding: 40px !important; background: var(--color-5, #fff) !important;
    border: 1px solid rgba(15,17,40,0.06) !important; border-radius: 16px !important;
    transition: all 0.3s !important; position: relative !important;
  }
  .n8pr-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 20px 40px rgba(15,17,40,0.06) !important;
  }
  .n8pr-card.n8pr-rec {
    border: 2px solid var(--color-2) !important;
    box-shadow: 0 25px 50px rgba(233,72,77,0.12) !important;
  }
  .n8pr-tag {
    position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important;
    background: var(--color-2) !important; color: white !important;
    text-align: center !important; padding: 6px !important;
    font-family: var(--font-main) !important;
    font-size: 11px !important; text-transform: uppercase !important;
    letter-spacing: 0.1em !important; border-radius: 14px 14px 0 0 !important;
    margin: -2px !important;
  }
  .n8pr-name {
    font-family: var(--font-main) !important; font-size: 22px !important;
    color: var(--color-1) !important;
    margin-bottom: 8px !important;
  }
  .n8pr-desc {
    font-family: var(--font-main) !important; font-size: 13px !important;
    color: #6b7280 !important; line-height: 1.5 !important;
    height: 40px !important;
  }
  .n8pr-price { margin: 32px 0 !important; }
  .n8pr-amount {
    font-family: var(--font-main) !important; font-size: 44px !important;
    color: var(--color-1) !important;
    letter-spacing: -0.04em !important;
  }
  .n8pr-period {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #9ca3af !important;
  }
  .n8pr-hint {
    font-family: var(--font-main) !important; font-size: 11px !important;
    color: #9ca3af !important; margin-top: 4px !important;
    font-style: italic !important; text-transform: uppercase !important;
  }
  .n8pr-features {
    list-style: none !important; padding: 0 !important;
    margin: 0 0 40px !important; flex-grow: 1 !important;
  }
  .n8pr-feat {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #374151 !important; margin-bottom: 12px !important;
    display: flex !important; align-items: flex-start !important;
    gap: 10px !important;
  }
  .n8pr-check { color: var(--color-2) !important; flex-shrink: 0 !important; }
  .n8pr-feat.n8pr-bold { color: var(--color-1) !important; }
  .n8pr-feat.n8pr-highlight { color: var(--color-2) !important; }
  .n8pr-cta.n8pr-cta.n8pr-cta.n8pr-cta {
    display: block !important; width: 100% !important; padding: 18px !important;
    background: var(--color-1) !important; color: var(--color-5) !important;
    text-align: center !important; border-radius: 10px !important;
    font-family: var(--font-main) !important;
    text-decoration: none !important; transition: all 0.2s !important;
    font-size: 16px !important; border: none !important; cursor: pointer !important;
  }
  .n8pr-cta:hover { opacity: 0.9 !important; transform: translateY(-1px) !important; }
  .n8pr-rec .n8pr-cta.n8pr-cta.n8pr-cta.n8pr-cta {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
  }
</style>

<section id="n8-pricing">
  <div class="n8pr-glow"></div>
  <div class="n8pr-container">
    <div class="n8pr-header">
      <div class="n8pr-label">Pricing</div>
      <h2 class="n8pr-h2">Simple Pricing. Serious Results.</h2>
      <p class="n8pr-sub">Choose the plan that fits your business. Start small, scale when you're ready.</p>
      <div class="n8pr-toggle">
        <button id="n8pr-toggle-m" class="n8pr-tbtn active" onclick="document.getElementById('n8pr-toggle-y').classList.remove('active');this.classList.add('active');n8prUpdate('monthly')">MONTHLY</button>
        <button id="n8pr-toggle-y" class="n8pr-tbtn" onclick="document.getElementById('n8pr-toggle-m').classList.remove('active');this.classList.add('active');n8prUpdate('yearly')">YEARLY (2 MO FREE)</button>
      </div>
    </div>

    <div class="n8pr-grid">
      <div class="n8pr-card">
        <div class="n8pr-name">Essentials</div>
        <div class="n8pr-desc">Reliable infrastructure without n8n workflow support</div>
        <div class="n8pr-price">
          <span class="n8pr-amount" id="n8pr-p1">AU$75</span><span class="n8pr-period">/mo</span>
          <div class="n8pr-hint" id="n8pr-h1">Billed monthly</div>
        </div>
        <ul class="n8pr-features">
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Fully managed infrastructure</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Automated backups</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Maintenance &amp; Reliability</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Managed environment</li>
        </ul>
        <a href="#" class="n8pr-cta">Choose Essentials</a>
      </div>
      <div class="n8pr-card">
        <div class="n8pr-name">Support Plus</div>
        <div class="n8pr-desc">For teams building workflows wanting an expert backup</div>
        <div class="n8pr-price">
          <span class="n8pr-amount" id="n8pr-p2">AU$150</span><span class="n8pr-period">/mo</span>
          <div class="n8pr-hint" id="n8pr-h2">Billed monthly</div>
        </div>
        <ul class="n8pr-features">
          <li class="n8pr-feat n8pr-bold">Everything in Essentials</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> AI-powered support</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Ticketed troubleshooting</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Workflow design help</li>
        </ul>
        <a href="#" class="n8pr-cta">Choose Support Plus</a>
      </div>
      <div class="n8pr-card n8pr-rec">
        <div class="n8pr-tag">RECOMMENDED</div>
        <div class="n8pr-name">Automations Pro</div>
        <div class="n8pr-desc">For businesses who want real automation outcomes</div>
        <div class="n8pr-price">
          <span class="n8pr-amount" id="n8pr-p3">AU$370</span><span class="n8pr-period">/mo</span>
          <div class="n8pr-hint" id="n8pr-h3">Billed monthly</div>
        </div>
        <ul class="n8pr-features">
          <li class="n8pr-feat n8pr-bold">Everything in Support Plus</li>
          <li class="n8pr-feat n8pr-bold n8pr-highlight"><span class="n8pr-check">&#10003;</span> 1 Built Workflow / Mo</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> We monitor everything 24/7</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Performance reports</li>
        </ul>
        <a href="#" class="n8pr-cta">Choose Pro</a>
      </div>
      <div class="n8pr-card">
        <div class="n8pr-name">Embedded Team</div>
        <div class="n8pr-desc">Automation becomes an extension of your company</div>
        <div class="n8pr-price">
          <span class="n8pr-amount" id="n8pr-p4">AU$3.5k</span><span class="n8pr-period">/mo</span>
          <div class="n8pr-hint" id="n8pr-h4">Billed monthly</div>
        </div>
        <ul class="n8pr-features">
          <li class="n8pr-feat n8pr-bold"><span class="n8pr-check">&#10003;</span> Dedicated Architect</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Continuous Optimisation</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> Advanced AI features</li>
          <li class="n8pr-feat"><span class="n8pr-check">&#10003;</span> No per-workflow costs</li>
        </ul>
        <a href="#" class="n8pr-cta">Inquire Now</a>
      </div>
    </div>
  </div>
</section>

<script>
  var n8prPrices = {
    monthly: ["AU$75", "AU$150", "AU$370", "AU$3.5k"],
    yearly: ["AU$62.50", "AU$125", "AU$308", "AU$2.9k"]
  };
  var n8prHints = { monthly: "Billed monthly", yearly: "Billed annually (2 months free)" };
  function n8prUpdate(term) {
    for(var i=1; i<=4; i++) {
      document.getElementById('n8pr-p' + i).innerText = n8prPrices[term][i-1];
      document.getElementById('n8pr-h' + i).innerText = n8prHints[term];
    }
  }
</script>
`;

export const Pricing: React.FC = () => {
  const [term, setTerm] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Essentials",
      desc: "Reliable infrastructure without n8n workflow support",
      monthly: 75, yearly: 62.50,
      features: [
        { text: "Fully managed infrastructure", bold: false },
        { text: "Automated backups", bold: false },
        { text: "Maintenance & Reliability", bold: false },
        { text: "Managed environment", bold: false }
      ]
    },
    {
      name: "Support Plus",
      desc: "For teams building workflows wanting an expert backup",
      monthly: 150, yearly: 125,
      features: [
        { text: "Everything in Essentials", bold: true },
        { text: "AI-powered support", bold: false },
        { text: "Ticketed troubleshooting", bold: false },
        { text: "Workflow design help", bold: false }
      ]
    },
    {
      name: "Automations Pro",
      desc: "For businesses who want real automation outcomes",
      monthly: 370, yearly: 308, rec: true,
      features: [
        { text: "Everything in Support Plus", bold: true },
        { text: "1 Built Workflow / Mo", bold: true, highlight: true },
        { text: "We monitor everything 24/7", bold: false },
        { text: "Performance reports", bold: false }
      ]
    },
    {
      name: "Embedded Team",
      desc: "Automation becomes an extension of your company",
      monthly: 3500, yearly: 2916,
      features: [
        { text: "Dedicated Architect", bold: true },
        { text: "Continuous Optimisation", bold: false },
        { text: "Advanced AI features", bold: false },
        { text: "No per-workflow costs", bold: false }
      ]
    }
  ];

  return (
    <CopyWrapper blockName="Pricing" codeToCopy={PricingCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb] relative overflow-hidden border-y border-brand-navy/[0.06]">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Pricing</div>
            <h2 className="text-4xl md:text-5xl font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-6">
              Simple Pricing. Serious Results.
            </h2>
            <p className="text-xl text-gray-500 font-500 leading-relaxed">
              Choose the plan that fits your business. Start small, scale when you're ready.
            </p>
          </div>

          <div className="inline-flex bg-white border-2 border-brand-navy p-1 rounded-full mb-16 shadow-sm">
            <button
              onClick={() => setTerm('monthly')}
              className={`px-8 py-3 rounded-full text-sm font-700 transition-all ${term === 'monthly' ? 'bg-brand-navy text-white shadow-lg' : 'text-brand-navy hover:bg-gray-50'}`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setTerm('yearly')}
              className={`px-8 py-3 rounded-full text-sm font-700 transition-all ${term === 'yearly' ? 'bg-brand-navy text-white shadow-lg' : 'text-brand-navy hover:bg-gray-50'}`}
            >
              YEARLY (2 MO FREE)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch">
            {plans.map((p) => (
              <div key={p.name} className={`flex flex-col p-10 bg-white rounded-2xl border transition-all relative group hover:-translate-y-1.5 hover:shadow-xl ${p.rec ? 'border-brand-accent border-2 shadow-xl shadow-brand-accent/10' : 'border-brand-navy/[0.06]'}`}>
                {p.rec && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-accent text-white text-center py-1.5 text-[11px] font-800 tracking-widest rounded-t-[14px]">
                    RECOMMENDED
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-[22px] font-800 text-brand-navy mb-2">{p.name}</h3>
                  <p className="text-[13px] text-gray-500 font-500 leading-relaxed h-[40px]">{p.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[44px] font-800 text-brand-navy tracking-tighter">
                      AU${term === 'monthly' ? (p.monthly >= 1000 ? (p.monthly/1000).toFixed(1) + 'k' : p.monthly) : (p.yearly >= 1000 ? (p.yearly/1000).toFixed(1) + 'k' : p.yearly)}
                    </span>
                    <span className="text-base font-600 text-gray-400">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1 font-700 italic uppercase tracking-wider">
                    {term === 'monthly' ? 'Billed Monthly' : 'Billed Annually (2 months free)'}
                  </p>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {p.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-2.5 text-sm ${f.bold ? 'font-700 text-brand-navy' : 'text-gray-600 font-500'}`}>
                      <span className="flex-shrink-0 text-brand-accent font-800">&#10003;</span>
                      <span className={f.highlight ? 'text-brand-accent' : ''}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4.5 rounded-[10px] font-800 text-base transition-all ${p.rec ? 'bg-gradient-to-br from-brand-accent to-brand-orange text-white shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-0.5' : 'bg-brand-navy text-white hover:bg-brand-navy/90'}`}>
                  {p.name === 'Embedded Team' ? 'Inquire Now' : `Choose ${p.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
