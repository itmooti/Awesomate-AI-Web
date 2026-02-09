import React, { useState } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeFAQCode = `
<style>
  #vc-faq { padding: 80px 0 !important; background: var(--color-5) !important; }
  .vcfq-container { max-width: 900px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .vcfq-h2.vcfq-h2.vcfq-h2.vcfq-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 36px !important; color: var(--color-1) !important; text-align: center !important; margin: 0 0 48px !important; letter-spacing: -0.02em !important; }
  .vcfq-list { border-top: 1px solid #e5e7eb !important; }
  .vcfq-item { border-bottom: 1px solid #e5e7eb !important; }
  .vcfq-q.vcfq-q.vcfq-q.vcfq-q { width: 100% !important; text-align: left !important; padding: 24px 0 !important; display: flex !important; justify-content: space-between !important; align-items: center !important; border: none !important; background: transparent !important; cursor: pointer !important; font-family: var(--font-main) !important; font-size: 15px !important; font-weight: 700 !important; color: var(--color-1) !important; transition: color 0.2s !important; outline: none !important; }
  .vcfq-q:hover { color: var(--color-3) !important; }
  .vcfq-item.active .vcfq-q { color: var(--color-3) !important; }
  .vcfq-icon { width: 20px !important; height: 20px !important; color: var(--color-3) !important; transition: transform 0.3s !important; flex-shrink: 0 !important; margin-left: 16px !important; }
  .vcfq-item.active .vcfq-icon { transform: rotate(180deg) !important; }
  .vcfq-a { max-height: 0 !important; overflow: hidden !important; transition: all 0.4s !important; }
  .vcfq-item.active .vcfq-a { max-height: 400px !important; padding-bottom: 24px !important; }
  .vcfq-a-text { font-family: var(--font-main) !important; font-size: 15px !important; color: #6b7280 !important; line-height: 1.7 !important; }
</style>

<section id="vc-faq">
  <div class="vcfq-container">
    <h2 class="vcfq-h2">Frequently Asked Questions</h2>
    <div class="vcfq-list">
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">What kind of apps can you build? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Anything from a client-facing mobile app with push notifications and real-time data, to internal tools for managing inventory, bookings, or team workflows. If you can describe it, we can probably build it.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">How is this different from a WordPress site or Kajabi? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Those are websites with a login. We build real applications — native mobile apps, custom dashboards, tools that work offline, send push notifications, and feel like something a big company built. The experience is completely different.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">How long does a typical project take? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Most projects are delivered in 2–6 weeks, depending on complexity. Simple tools can be ready in under 2 weeks. We recently built an entire client app in a single day. The technology has completely changed what's possible.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">Do I own the app? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Yes, it's your app. We handle the hosting, updates, and ongoing management so you never have to worry about the technical side. There's a small monthly fee to keep everything running — hosting, AI features, and support — but it's a fraction of what you'd pay to manage it yourself.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">What if I need changes later? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Just tell us in plain English. 'Add a booking feature.' 'Change the colour of the header.' 'Send a push notification when someone signs up.' We handle it — usually within hours, not weeks.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">Can't I just use Lovable or build it myself? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Those DIY platforms are great if you have the time and want to learn. But if you're running a business and need it done right, done fast, and done for you — that's what we do. You tell us what you want, we build it. No learning curve, no troubleshooting, no weekends lost.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">How is this different from hiring a dev agency? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Speed and cost. Agencies charge $50k+ and take months. We use AI-powered tools that let us build in days and weeks at a fraction of the cost. Plus, we're an ongoing partner — not a one-and-done vendor. As your business evolves, your app evolves with it.</div></div></div>
    </div>
  </div>
</section>
`;

export const VibeFAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    { q: 'What kind of apps can you build?', a: 'Anything from a client-facing mobile app with push notifications and real-time data, to internal tools for managing inventory, bookings, or team workflows. If you can describe it, we can probably build it.' },
    { q: 'How is this different from a WordPress site or Kajabi?', a: 'Those are websites with a login. We build real applications \u2014 native mobile apps, custom dashboards, tools that work offline, send push notifications, and feel like something a big company built. The experience is completely different.' },
    { q: 'How long does a typical project take?', a: 'Most projects are delivered in 2\u20136 weeks, depending on complexity. Simple tools can be ready in under 2 weeks. We recently built an entire client app in a single day. The technology has completely changed what\u2019s possible.' },
    { q: 'Do I own the app?', a: 'Yes, it\u2019s your app. We handle the hosting, updates, and ongoing management so you never have to worry about the technical side. There\u2019s a small monthly fee to keep everything running \u2014 hosting, AI features, and support \u2014 but it\u2019s a fraction of what you\u2019d pay to manage it yourself.' },
    { q: 'What if I need changes later?', a: 'Just tell us in plain English. \u2018Add a booking feature.\u2019 \u2018Change the colour of the header.\u2019 \u2018Send a push notification when someone signs up.\u2019 We handle it \u2014 usually within hours, not weeks.' },
    { q: 'Can\u2019t I just use Lovable or build it myself?', a: 'Those DIY platforms are great if you have the time and want to learn. But if you\u2019re running a business and need it done right, done fast, and done for you \u2014 that\u2019s what we do. You tell us what you want, we build it. No learning curve, no troubleshooting, no weekends lost.' },
    { q: 'How is this different from hiring a dev agency?', a: 'Speed and cost. Agencies charge $50k+ and take months. We use AI-powered tools that let us build in days and weeks at a fraction of the cost. Plus, we\u2019re an ongoing partner \u2014 not a one-and-done vendor. As your business evolves, your app evolves with it.' },
  ];

  return (
    <CopyWrapper blockName="VibeFAQ" codeToCopy={VibeFAQCode}>
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-heading font-800 text-brand-navy text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
          <div className="border-t border-gray-200">
            {items.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className={`w-full text-left py-6 flex justify-between items-center transition-colors ${active === i ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'}`}
                >
                  <span className="text-[15px] font-700 pr-4">{item.q}</span>
                  <svg className={`w-5 h-5 flex-shrink-0 text-brand-orange transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${active === i ? 'max-h-[400px] pb-6' : 'max-h-0'}`}>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
