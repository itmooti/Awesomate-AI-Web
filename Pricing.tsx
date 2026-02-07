
import React, { useState } from 'react';
import { CopyWrapper } from './CopyWrapper';

const PricingCode = `
<style>
  #pricing { font-family: 'Inter', sans-serif; background-color: #f9fafb; padding: 80px 0; border-top: 1px solid #f3f4f6; border-bottom: 1px solid #f3f4f6; }
  .p-container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
  .p-header { text-align: center; margin-bottom: 64px; }
  .p-title { font-size: 48px; font-weight: 800; color: #0f1128; margin-bottom: 24px; letter-spacing: -0.02em; }
  .p-subtitle { font-size: 20px; color: #4b5563; max-width: 600px; margin: 0 auto; }
  
  .toggle-wrap { display: inline-flex; background: white; border: 2px solid #0f1128; padding: 4px; border-radius: 999px; margin-top: 40px; }
  .t-btn { padding: 12px 32px; border-radius: 999px; font-weight: 700; font-size: 14px; cursor: pointer; color: #0f1128; border: none; background: none; transition: all 0.2s; }
  .t-btn.active { background: #0f1128; color: white; box-shadow: 0 4px 6px -1px rgba(15, 17, 40, 0.2); }
  
  .p-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; margin-top: 64px; }
  @media (min-width: 768px) { .p-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .p-grid { grid-template-columns: repeat(4, 1fr); } }
  
  .p-card { display: flex; flex-direction: column; padding: 40px; background: white; border: 1px solid #f3f4f6; border-radius: 12px; transition: all 0.3s ease; position: relative; }
  .p-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(15, 17, 40, 0.05); }
  .p-card.recommended { border: 2px solid #e9484d; box-shadow: 0 25px 50px rgba(233, 72, 77, 0.15); }
  
  .rec-tag { position: absolute; top: 0; left: 0; right: 0; background: #e9484d; color: white; text-align: center; padding: 6px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 10px 10px 0 0; margin: -2px; }
  
  .p-name { font-size: 22px; font-weight: 800; color: #0f1128; margin-bottom: 8px; }
  .p-desc { font-size: 13px; color: #6b7280; line-height: 1.5; height: 40px; }
  .p-price-wrap { margin: 32px 0; }
  .p-amount { font-size: 44px; font-weight: 800; color: #0f1128; letter-spacing: -0.04em; }
  .p-period { font-size: 16px; font-weight: 600; color: #9ca3af; }
  .p-term-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; font-style: italic; text-transform: uppercase; font-weight: 700; }
  
  .p-features { list-style: none; padding: 0; margin: 0 0 40px 0; flex-grow: 1; }
  .p-feature { font-size: 14px; color: #374151; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; font-weight: 500; }
  .p-check { color: #e9484d; font-weight: 800; flex-shrink: 0; }
  .p-feature.bold { color: #0f1128; font-weight: 700; }
  .p-feature.highlight { color: #e9484d; }
  
  .p-cta { display: block; width: 100%; padding: 18px; background: #0f1128; color: white; text-align: center; border-radius: 8px; font-weight: 800; text-decoration: none; transition: all 0.2s; font-size: 16px; }
  .p-cta:hover { background: #1e224d; }
  .p-card.recommended .p-cta { background: linear-gradient(135deg, #e9484d 0%, #ef9563 100%); }
  .p-card.recommended .p-cta:hover { opacity: 0.95; transform: scale(1.02); }
</style>

<section id="pricing">
    <div class="p-container">
        <div class="p-header">
            <h2 class="p-title">Scale your business, not your server stress</h2>
            <p class="p-subtitle">Choose the level of infrastructure and support your mission-critical automation needs.</p>
            
            <div class="toggle-wrap">
                <button id="toggle-m" class="t-btn active">MONTHLY</button>
                <button id="toggle-y" class="t-btn">YEARLY (2 MO FREE)</button>
            </div>
        </div>

        <div class="p-grid">
            <div class="p-card">
                <div class="p-name">Essentials</div>
                <div class="p-desc">Reliable infrastructure without n8n workflow support</div>
                <div class="p-price-wrap">
                    <span class="p-amount" id="p1">AU$75</span><span class="p-period">/mo</span>
                    <div class="p-term-hint" id="h1">Billed monthly</div>
                </div>
                <ul class="p-features">
                    <li class="p-feature"><span class="p-check">✓</span> Full Awesomate stack</li>
                    <li class="p-feature"><span class="p-check">✓</span> Automated backups</li>
                    <li class="p-feature"><span class="p-check">✓</span> Maintenance & Reliability</li>
                    <li class="p-feature"><span class="p-check">✓</span> Managed environment</li>
                </ul>
                <a href="#" class="p-cta">Choose Essentials</a>
            </div>
            <div class="p-card">
                <div class="p-name">Support Plus</div>
                <div class="p-desc">For teams building workflows wanting an expert backup</div>
                <div class="p-price-wrap">
                    <span class="p-amount" id="p2">AU$150</span><span class="p-period">/mo</span>
                    <div class="p-term-hint" id="h2">Billed monthly</div>
                </div>
                <ul class="p-features">
                    <li class="p-feature bold">Everything in Essentials</li>
                    <li class="p-feature"><span class="p-check">✓</span> AI agentic support</li>
                    <li class="p-feature"><span class="p-check">✓</span> Ticketed troubleshooting</li>
                    <li class="p-feature"><span class="p-check">✓</span> Design & error diagnosis</li>
                </ul>
                <a href="#" class="p-cta">Choose Support Plus</a>
            </div>
            <div class="p-card recommended">
                <div class="rec-tag">RECOMMENDED</div>
                <div class="p-name">Automations Pro</div>
                <div class="p-desc">For businesses who want real automation outcomes</div>
                <div class="p-price-wrap">
                    <span class="p-amount" id="p3">AU$370</span><span class="p-period">/mo</span>
                    <div class="p-term-hint" id="h3">Billed monthly</div>
                </div>
                <ul class="p-features">
                    <li class="p-feature bold">Everything in Support Plus</li>
                    <li class="p-feature bold highlight"><span class="p-check">✓</span> 1 Built Workflow / Mo</li>
                    <li class="p-feature"><span class="p-check">✓</span> Proactive failure monitoring</li>
                    <li class="p-feature"><span class="p-check">✓</span> Outcome dashboards</li>
                </ul>
                <a href="#" class="p-cta">Choose Pro</a>
            </div>
            <div class="p-card">
                <div class="p-name">Embedded Team</div>
                <div class="p-desc">Automation becomes an extension of your company</div>
                <div class="p-price-wrap">
                    <span class="p-amount" id="p4">AU$3.5k</span><span class="p-period">/mo</span>
                    <div class="p-term-hint" id="h4">Billed monthly</div>
                </div>
                <ul class="p-features">
                    <li class="p-feature bold"><span class="p-check">✓</span> Dedicated Architect</li>
                    <li class="p-feature"><span class="p-check">✓</span> Continuous Optimization</li>
                    <li class="p-feature"><span class="p-check">✓</span> Deep AI Integration</li>
                    <li class="p-feature"><span class="p-check">✓</span> No per-workflow costs</li>
                </ul>
                <a href="#" class="p-cta">Inquire Now</a>
            </div>
        </div>
    </div>
</section>

<script>
    const prices = {
        monthly: ["AU$75", "AU$150", "AU$370", "AU$3.5k"],
        yearly: ["AU$62.50", "AU$125", "AU$308", "AU$2.9k"]
    };
    const hints = {
        monthly: "Billed monthly",
        yearly: "Billed annually (2 months free)"
    };
    
    document.getElementById('toggle-m').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('toggle-y').classList.remove('active');
        updatePrices('monthly');
    });
    
    document.getElementById('toggle-y').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('toggle-m').classList.remove('active');
        updatePrices('yearly');
    });
    
    function updatePrices(term) {
        for(let i=1; i<=4; i++) {
            document.getElementById('p' + i).innerText = prices[term][i-1];
            document.getElementById('h' + i).innerText = hints[term];
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
      monthly: 75, 
      yearly: 62.50,
      features: [
        { text: "Full Awesomate stack", bold: false },
        { text: "Automated backups", bold: false },
        { text: "Maintenance & Reliability", bold: false },
        { text: "Managed environment", bold: false }
      ]
    },
    { 
      name: "Support Plus", 
      desc: "For teams building workflows wanting an expert backup", 
      monthly: 150, 
      yearly: 125,
      features: [
        { text: "Everything in Essentials", bold: true },
        { text: "AI agentic support", bold: false },
        { text: "Ticketed troubleshooting", bold: false },
        { text: "Design & error diagnosis", bold: false }
      ]
    },
    { 
      name: "Automations Pro", 
      desc: "For businesses who want real automation outcomes", 
      monthly: 370, 
      yearly: 308, 
      rec: true,
      features: [
        { text: "Everything in Support Plus", bold: true },
        { text: "1 Built Workflow / Mo", bold: true, highlight: true },
        { text: "Proactive failure monitoring", bold: false },
        { text: "Outcome dashboards", bold: false }
      ]
    },
    { 
      name: "Embedded Team", 
      desc: "Automation becomes an extension of your company", 
      monthly: 3500, 
      yearly: 2916,
      features: [
        { text: "Dedicated Architect", bold: true },
        { text: "Continuous Optimization", bold: false },
        { text: "Deep AI Integration", bold: false },
        { text: "No per-workflow costs", bold: false }
      ]
    }
  ];

  return (
    <CopyWrapper blockName="Pricing" codeToCopy={PricingCode}>
      <section id="pricing" className="py-24 lg:py-40 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-brand-navy mb-8 tracking-tight leading-tight">Scale your business, not your server stress</h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">Choose the level of infrastructure and support your mission-critical automation needs.</p>
          </div>
          
          <div className="inline-flex bg-white border-2 border-brand-navy p-1 rounded-full mb-20 shadow-sm">
            <button 
              onClick={() => setTerm('monthly')} 
              className={`px-10 py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${term === 'monthly' ? 'bg-brand-navy text-white shadow-xl' : 'text-brand-navy hover:bg-gray-50'}`}
            >
              MONTHLY
            </button>
            <button 
              onClick={() => setTerm('yearly')} 
              className={`px-10 py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${term === 'yearly' ? 'bg-brand-navy text-white shadow-xl' : 'text-brand-navy hover:bg-gray-50'}`}
            >
              YEARLY (2 MO FREE)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left items-stretch">
            {plans.map((p) => (
              <div key={p.name} className={`flex flex-col p-10 bg-white rounded-2xl border transition-all duration-300 relative group hover:-translate-y-2 hover:shadow-2xl ${p.rec ? 'border-brand-accent ring-1 ring-brand-accent shadow-xl shadow-brand-accent/10' : 'border-gray-100'}`}>
                {p.rec && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-accent text-white text-center py-2 text-[11px] font-900 tracking-widest rounded-t-[14px]">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-800 text-brand-navy mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed h-[40px]">{p.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-900 text-brand-navy tracking-tighter">
                      AU${term === 'monthly' ? (p.monthly >= 1000 ? (p.monthly/1000).toFixed(1) + 'k' : p.monthly) : (p.yearly >= 1000 ? (p.yearly/1000).toFixed(1) + 'k' : p.yearly)}
                    </span>
                    <span className="text-lg font-700 text-gray-300">/mo</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2 font-900 italic uppercase tracking-wider">
                    {term === 'monthly' ? 'Billed Monthly' : 'Billed Annually (2 months free)'}
                  </p>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {p.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-3 text-[15px] ${f.bold ? 'font-bold text-brand-navy' : 'text-gray-600 font-medium'}`}>
                      <span className={`flex-shrink-0 text-brand-accent font-900`}>✓</span>
                      <span className={f.highlight ? 'text-brand-accent' : ''}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-xl font-800 text-lg transition-all duration-300 ${p.rec ? 'bg-gradient-to-r from-brand-accent to-brand-orange text-white shadow-xl shadow-brand-accent/20 hover:scale-[1.02]' : 'bg-brand-navy text-white hover:bg-brand-navy/90'}`}>
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
