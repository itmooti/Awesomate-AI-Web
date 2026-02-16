import React, { useState } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const FAQCode = `
<style>
  #n8-faq {
    padding: 80px 0 !important;
    background: var(--color-5, #ffffff) !important;
    position: relative !important; overflow: hidden !important;
  }
  .n8f-glow {
    position: absolute !important; bottom: -100px !important; left: -100px !important;
    width: 400px !important; height: 400px !important;
    background: radial-gradient(circle, rgba(30,99,233,0.03) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8f-container {
    max-width: 900px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8f-header { text-align: center !important; margin-bottom: 48px !important; }
  .n8f-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8f-h2.n8f-h2.n8f-h2.n8f-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8f-h2.n8f-h2.n8f-h2.n8f-h2 { font-size: 44px !important; }
  }
  .n8f-list { border-top: 1px solid rgba(15,17,40,0.06) !important; }
  .n8f-item { border-bottom: 1px solid rgba(15,17,40,0.06) !important; }
  .n8f-question.n8f-question.n8f-question.n8f-question {
    width: 100% !important; text-align: left !important;
    padding: 28px 0 !important; display: flex !important;
    justify-content: space-between !important; align-items: center !important;
    border: none !important; background: var(--color-5, #ffffff) !important;
    cursor: pointer !important; font-family: var(--font-main) !important;
    font-size: 15px !important;
    color: var(--color-1) !important; text-transform: uppercase !important;
    letter-spacing: 0.05em !important; transition: all 0.2s !important;
    outline: none !important;
  }
  .n8f-question:hover { color: var(--color-2) !important; }
  .n8f-question:active,
  .n8f-question:focus {
    background-color: var(--color-5, #ffffff) !important;
    color: var(--color-2) !important;
  }
  .n8f-item.active .n8f-question { color: var(--color-2) !important; }
  .n8f-answer {
    max-height: 0 !important; overflow: hidden !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    background-color: var(--color-5, #ffffff) !important;
  }
  .n8f-item.active .n8f-answer {
    max-height: 800px !important; padding-bottom: 32px !important; opacity: 1 !important;
  }
  .n8f-icon {
    width: 20px !important; height: 20px !important;
    color: var(--color-2) !important;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    flex-shrink: 0 !important; margin-left: 16px !important;
  }
  .n8f-item.active .n8f-icon { transform: rotate(180deg) !important; }
</style>

<section id="n8-faq">
  <div class="n8f-glow"></div>
  <div class="n8f-container">
    <div class="n8f-header">
      <div class="n8f-label">FAQ</div>
      <h2 class="n8f-h2">Frequently Asked Questions</h2>
    </div>
    <div class="n8f-list">
      <div class="n8f-item">
        <button class="n8f-question">WHAT DOES \u201CUNCAPPED EXECUTIONS\u201D ACTUALLY MEAN? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Most cloud platforms charge per execution or cap you at a set number per month. We use infrastructure-based pricing \u2014 you pay for the server resources, not per workflow run. Whether you run 10,000 or 100,000 executions, your bill stays the same.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">HOW IS YOUR INFRASTRUCTURE DIFFERENT FROM SHARED CLOUD HOSTING? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Cloud platforms typically run your instance on shared servers with as little as 320MB of RAM. We deploy on Kubernetes with dedicated resources, and your database runs as three HOT replicas \u2014 not cold backups, but live copies that can accept traffic at any time. If one node goes down, failover happens in 1\u20132 seconds with no manual intervention. On top of that, local snapshots run every 30 minutes and offsite backups provide point-in-time recovery.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHERE IS MY DATA HOSTED? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Your data is hosted on OVHcloud infrastructure \u2014 the world\u2019s #5 hosting provider \u2014 in enterprise-grade US data centres. Most cloud platforms default to Frankfurt, Germany with no option to choose. We offer regional flexibility: if your business needs hosting in Asia Pacific, Europe, or a specific jurisdiction, we can deploy there for you.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">CAN I INSTALL CUSTOM NODES AND NPM PACKAGES? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. You get the full power of self-hosting \u2014 custom nodes, NPM packages, bash scripts, environment variables, and full configuration control. Cloud platforms restrict these to self-hosted plans only. We give you all of it without the DevOps burden.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT HAPPENS IF A SERVER GOES DOWN? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Your database runs as three HOT replicas at all times \u2014 not cold backups, but live copies ready to accept traffic instantly. If any node experiences an issue, failover happens in 1\u20132 seconds. Beyond that, local snapshots run every 30 minutes (held for a rolling 3 days) and offsite backups provide point-in-time recovery to any minute in the past (rolling 10 days). Your workflows keep running through all of it.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">DO YOU PROVIDE STATIC IP ADDRESSES? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. Cloud platform IPs change without warning, which breaks allowlists for internal APIs, databases, and CRMs. We deploy dedicated infrastructure that your IT team can allowlist natively \u2014 no proxies, no VPNs, no extra architecture needed.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT SUPPORT DO I GET? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Concierge onboarding to configure your credentials and first workflows. Ticketed support with workflow design help. 24/7 proactive monitoring. Pre-deployed templates. We\u2019re a service, not just software.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">CAN I MIGRATE FROM ANOTHER PLATFORM? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. We handle the migration for you \u2014 from n8n Cloud, self-hosted instances, or other platforms. No lock-in contracts. Cancel anytime.</div>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.n8f-question').forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      var item = button.parentElement;
      var isActive = item.classList.contains('active');
      document.querySelectorAll('.n8f-item').forEach(function(other) { other.classList.remove('active'); });
      if (!isActive) item.classList.add('active');
    });
  });
</script>
`;

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    { q: 'WHAT DOES \u201CUNCAPPED EXECUTIONS\u201D ACTUALLY MEAN?', a: "Most cloud platforms charge per execution or cap you at a set number per month. We use infrastructure-based pricing \u2014 you pay for the server resources, not per workflow run. Whether you run 10,000 or 100,000 executions, your bill stays the same." },
    { q: "HOW IS YOUR INFRASTRUCTURE DIFFERENT FROM SHARED CLOUD HOSTING?", a: "Cloud platforms typically run your instance on shared servers with as little as 320MB of RAM. We deploy on Kubernetes with dedicated resources, and your database runs as three HOT replicas \u2014 not cold backups, but live copies that can accept traffic at any time. If one node goes down, failover happens in 1\u20132 seconds with no manual intervention. On top of that, local snapshots run every 30 minutes and offsite backups provide point-in-time recovery." },
    { q: "WHERE IS MY DATA HOSTED?", a: "Your data is hosted on OVHcloud infrastructure \u2014 the world\u2019s #5 hosting provider \u2014 in enterprise-grade US data centres. Most cloud platforms default to Frankfurt, Germany with no option to choose. We offer regional flexibility: if your business needs hosting in Asia Pacific, Europe, or a specific jurisdiction, we can deploy there for you." },
    { q: "CAN I INSTALL CUSTOM NODES AND NPM PACKAGES?", a: "Yes. You get the full power of self-hosting \u2014 custom nodes, NPM packages, bash scripts, environment variables, and full configuration control. Cloud platforms restrict these to self-hosted plans only. We give you all of it without the DevOps burden." },
    { q: "WHAT HAPPENS IF A SERVER GOES DOWN?", a: "Your database runs as three HOT replicas at all times \u2014 not cold backups, but live copies ready to accept traffic instantly. If any node experiences an issue, failover happens in 1\u20132 seconds. Beyond that, local snapshots run every 30 minutes (held for a rolling 3 days) and offsite backups provide point-in-time recovery to any minute in the past (rolling 10 days). Your workflows keep running through all of it." },
    { q: "DO YOU PROVIDE STATIC IP ADDRESSES?", a: "Yes. Cloud platform IPs change without warning, which breaks allowlists for internal APIs, databases, and CRMs. We deploy dedicated infrastructure that your IT team can allowlist natively \u2014 no proxies, no VPNs, no extra architecture needed." },
    { q: "WHAT SUPPORT DO I GET?", a: "Concierge onboarding to configure your credentials and first workflows. Ticketed support with workflow design help. 24/7 proactive monitoring. Pre-deployed templates. We\u2019re a service, not just software." },
    { q: "CAN I MIGRATE FROM ANOTHER PLATFORM?", a: "Yes. We handle the migration for you \u2014 from n8n Cloud, self-hosted instances, or other platforms. No lock-in contracts. Cancel anytime." },
  ];

  return (
    <CopyWrapper blockName="FAQ" codeToCopy={FAQCode}>
      <section className="py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(30,99,233,0.03)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">FAQ</div>
            <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-brand-navy/[0.06]">
            {items.map((item, i) => (
              <div key={i} className="border-b border-brand-navy/[0.06]">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className={`w-full text-left py-7 flex justify-between items-center group transition-all focus:outline-none ${active === i ? 'text-brand-accent' : 'text-brand-navy'}`}
                >
                  <span className="font-800 text-[15px] uppercase tracking-wider leading-tight pr-4 group-hover:text-brand-accent transition-colors">
                    {item.q}
                  </span>
                  <svg className={`w-5 h-5 flex-shrink-0 text-brand-accent transition-transform duration-500 ${active === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? 'max-h-[800px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="text-gray-500 text-base leading-relaxed font-500">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
