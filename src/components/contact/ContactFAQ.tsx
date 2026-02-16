import React, { useState } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactFAQCode = `
<style>
  #ct-faq {
    padding: 80px 0 !important;
    background: var(--color-5, #ffffff) !important;
    position: relative !important; overflow: hidden !important;
  }
  .ctfq-glow {
    position: absolute !important; bottom: -100px !important; left: -100px !important;
    width: 400px !important; height: 400px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.03) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .ctfq-container {
    max-width: 900px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .ctfq-header { text-align: center !important; margin-bottom: 48px !important; }
  .ctfq-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .ctfq-h2.ctfq-h2.ctfq-h2.ctfq-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .ctfq-h2.ctfq-h2.ctfq-h2.ctfq-h2 { font-size: 44px !important; }
  }
  .ctfq-list { border-top: 1px solid rgba(15,17,40,0.06) !important; }
  .ctfq-item { border-bottom: 1px solid rgba(15,17,40,0.06) !important; }
  .ctfq-question.ctfq-question.ctfq-question.ctfq-question {
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
  .ctfq-question:hover { color: var(--color-2) !important; }
  .ctfq-question:active,
  .ctfq-question:focus {
    background-color: var(--color-5, #ffffff) !important;
    color: var(--color-2) !important;
  }
  .ctfq-item.active .ctfq-question { color: var(--color-2) !important; }
  .ctfq-answer {
    max-height: 0 !important; overflow: hidden !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    background-color: var(--color-5, #ffffff) !important;
  }
  .ctfq-item.active .ctfq-answer {
    max-height: 800px !important; padding-bottom: 32px !important; opacity: 1 !important;
  }
  .ctfq-icon {
    width: 20px !important; height: 20px !important;
    color: var(--color-2) !important;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    flex-shrink: 0 !important; margin-left: 16px !important;
  }
  .ctfq-item.active .ctfq-icon { transform: rotate(180deg) !important; }
</style>

<section id="ct-faq">
  <div class="ctfq-glow"></div>
  <div class="ctfq-container">
    <div class="ctfq-header">
      <div class="ctfq-label">FAQ</div>
      <h2 class="ctfq-h2">Frequently Asked Questions</h2>
    </div>
    <div class="ctfq-list">
      <div class="ctfq-item">
        <button class="ctfq-question">HOW DO I GET STARTED WITH AWESOMATE? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">It starts with a free discovery call. We\u2019ll learn about your business, your challenges, and what you\u2019re trying to achieve. From there, we\u2019ll recommend the right mix of services \u2014 whether that\u2019s automation hosting, a data platform, a custom app, or all three. No commitment, no pressure.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">WHAT SERVICES DO YOU OFFER? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">We offer three core services. Managed n8n hosting for workflow automation \u2014 connecting your CRM, accounting, email, and other tools so data flows automatically. Buddzee, our AI data platform that unifies your business data and lets you query it in plain English. And Vibe Coding, where we build custom apps and tools tailored to your business. Most clients use a combination of all three.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">DO I NEED TO BE TECHNICAL TO WORK WITH YOU? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">Not at all. We\u2019re built for non-technical business owners. You describe what you need in plain English, and we handle everything \u2014 the setup, the hosting, the ongoing management. We train you and your team so you\u2019re comfortable using your new tools, but you\u2019ll never need to write code or manage servers.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">HOW LONG DOES A TYPICAL PROJECT TAKE? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">It depends on the scope. Automation setups can be live within a week. Buddzee deployments typically take one to two weeks. Custom apps range from two to six weeks depending on complexity \u2014 we\u2019ve built entire client apps in a single day. We\u2019ll give you a clear timeline during the design phase so there are no surprises.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">WHAT DOES PRICING LOOK LIKE? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">Every service has transparent, published pricing on our website. n8n hosting starts from $49/month with uncapped executions. Buddzee starts from $299/month. Vibe Coding projects have a one-time build fee plus a small monthly hosting and support fee. No hidden costs, no lock-in contracts \u2014 cancel anytime.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">IS MY DATA SECURE? WHERE IS IT HOSTED? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">Yes. All our infrastructure runs on OVHcloud \u2014 the world\u2019s #5 hosting provider \u2014 with enterprise-grade US data centres. We use three HOT database replicas for instant failover, 30-minute local snapshots, offsite point-in-time recovery, enterprise-grade encryption, and strict access controls. Need a specific region for compliance? We can deploy to North America, Asia Pacific, or Europe.</div>
      </div>
      <div class="ctfq-item">
        <button class="ctfq-question">WHAT ONGOING SUPPORT DO YOU PROVIDE? <span class="ctfq-icon">\u25BC</span></button>
        <div class="ctfq-answer">We\u2019re an ongoing partner, not a one-and-done vendor. Every plan includes ticketed support, concierge onboarding, and 24/7 proactive monitoring. Need a change to your app? Just tell us in plain English. Want to add a new automation? We\u2019ll build it. As your business evolves, your technology evolves with it.</div>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.ctfq-question').forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      var item = button.parentElement;
      var isActive = item.classList.contains('active');
      document.querySelectorAll('.ctfq-item').forEach(function(other) { other.classList.remove('active'); });
      if (!isActive) item.classList.add('active');
    });
  });
</script>
`;

export const ContactFAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    { q: 'HOW DO I GET STARTED WITH AWESOMATE?', a: 'It starts with a free discovery call. We\u2019ll learn about your business, your challenges, and what you\u2019re trying to achieve. From there, we\u2019ll recommend the right mix of services \u2014 whether that\u2019s automation hosting, a data platform, a custom app, or all three. No commitment, no pressure.' },
    { q: 'WHAT SERVICES DO YOU OFFER?', a: 'We offer three core services. Managed n8n hosting for workflow automation \u2014 connecting your CRM, accounting, email, and other tools so data flows automatically. Buddzee, our AI data platform that unifies your business data and lets you query it in plain English. And Vibe Coding, where we build custom apps and tools tailored to your business. Most clients use a combination of all three.' },
    { q: 'DO I NEED TO BE TECHNICAL TO WORK WITH YOU?', a: 'Not at all. We\u2019re built for non-technical business owners. You describe what you need in plain English, and we handle everything \u2014 the setup, the hosting, the ongoing management. We train you and your team so you\u2019re comfortable using your new tools, but you\u2019ll never need to write code or manage servers.' },
    { q: 'HOW LONG DOES A TYPICAL PROJECT TAKE?', a: 'It depends on the scope. Automation setups can be live within a week. Buddzee deployments typically take one to two weeks. Custom apps range from two to six weeks depending on complexity \u2014 we\u2019ve built entire client apps in a single day. We\u2019ll give you a clear timeline during the design phase so there are no surprises.' },
    { q: 'WHAT DOES PRICING LOOK LIKE?', a: 'Every service has transparent, published pricing on our website. n8n hosting starts from $49/month with uncapped executions. Buddzee starts from $299/month. Vibe Coding projects have a one-time build fee plus a small monthly hosting and support fee. No hidden costs, no lock-in contracts \u2014 cancel anytime.' },
    { q: 'IS MY DATA SECURE? WHERE IS IT HOSTED?', a: 'Yes. All our infrastructure runs on OVHcloud \u2014 the world\u2019s #5 hosting provider \u2014 with enterprise-grade US data centres. We use three HOT database replicas for instant failover, 30-minute local snapshots, offsite point-in-time recovery, enterprise-grade encryption, and strict access controls. Need a specific region for compliance? We can deploy to North America, Asia Pacific, or Europe.' },
    { q: 'WHAT ONGOING SUPPORT DO YOU PROVIDE?', a: 'We\u2019re an ongoing partner, not a one-and-done vendor. Every plan includes ticketed support, concierge onboarding, and 24/7 proactive monitoring. Need a change to your app? Just tell us in plain English. Want to add a new automation? We\u2019ll build it. As your business evolves, your technology evolves with it.' },
  ];

  return (
    <CopyWrapper blockName="ContactFAQ" codeToCopy={ContactFAQCode}>
      <section className="py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(233,72,77,0.03)_0%,_transparent_70%)] pointer-events-none" />
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
