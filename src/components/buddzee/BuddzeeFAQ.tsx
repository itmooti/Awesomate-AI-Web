import React, { useState } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeFAQCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-faq {
    padding: 100px 0 !important;
    background: #ffffff !important;
  }
  .bzfq-container {
    max-width: 900px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .bzfq-h2.bzfq-h2.bzfq-h2.bzfq-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--bz-navy) !important; text-align: center !important;
    margin: 0 0 48px !important; letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .bzfq-h2.bzfq-h2.bzfq-h2.bzfq-h2 { font-size: 44px !important; }
  }
  .bzfq-list {
    border-top: 1px solid #e5e7eb !important;
  }
  .bzfq-item {
    border-bottom: 1px solid #e5e7eb !important;
  }
  .bzfq-q.bzfq-q.bzfq-q.bzfq-q {
    width: 100% !important; text-align: left !important; padding: 24px 0 !important;
    display: flex !important; justify-content: space-between !important; align-items: center !important;
    border: none !important; background: transparent !important; cursor: pointer !important;
    font-family: var(--font-main) !important; font-size: 16px !important; font-weight: 700 !important;
    color: var(--bz-navy) !important; transition: color 0.2s !important; outline: none !important;
  }
  .bzfq-q:hover { color: var(--bz-blue) !important; }
  .bzfq-item.active .bzfq-q { color: var(--bz-blue) !important; }
  .bzfq-icon {
    width: 20px !important; height: 20px !important; flex-shrink: 0 !important;
    margin-left: 16px !important; transition: transform 0.3s !important;
    color: var(--bz-blue) !important;
  }
  .bzfq-item.active .bzfq-icon { transform: rotate(180deg) !important; }
  .bzfq-a {
    max-height: 0 !important; overflow: hidden !important; transition: all 0.4s !important;
  }
  .bzfq-item.active .bzfq-a {
    max-height: 400px !important; padding-bottom: 24px !important;
  }
  .bzfq-a-text {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
  }
</style>

<section id="bz-faq">
  <div class="bzfq-container">
    <h2 class="bzfq-h2">Frequently Asked Questions</h2>
    <div class="bzfq-list">
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">What is Buddzee? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Buddzee is your business data buddy. It connects all your business tools into one central place, then lets you ask questions in plain English to get instant, accurate answers. Think of it as a brilliant assistant that actually knows everything happening in your business.</div></div></div>
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">What tools does Buddzee connect to? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Buddzee integrates with most popular business tools \u2014 CRMs like HubSpot and Salesforce, accounting tools like Xero and MYOB, project management platforms, e-commerce systems like Shopify, marketing tools, and more. If your tool is popular, Buddzee can probably connect to it.</div></div></div>
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">Is my data secure? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Absolutely. Buddzee runs on Australian-hosted infrastructure with bank-level encryption. Your data never leaves the country. We use strict access controls, and all connections are encrypted end-to-end.</div></div></div>
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">How long does setup take? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Most businesses are up and running within a week. We handle the technical setup \u2014 connecting your tools, setting everything up, and training Buddzee on your business context. You don\u2019t need to do anything technical.</div></div></div>
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">Do I need to be technical to use it? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Not at all. Buddzee is designed specifically for non-technical business owners. You just ask questions in plain English \u2014 \u2018How did sales go last month?\u2019 or \u2018Who hasn\u2019t paid their invoice?\u2019 No coding, no query language, no dashboards to learn.</div></div></div>
      <div class="bzfq-item"><button class="bzfq-q" onclick="this.parentElement.classList.toggle('active')">What happens as my business grows? <svg class="bzfq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"/></svg></button><div class="bzfq-a"><div class="bzfq-a-text">Buddzee grows with you. Add new tools and data sources whenever you need. As your data gets richer, Buddzee\u2019s insights get more powerful. We also offer automation add-ons and consulting services for businesses ready to take the next step.</div></div></div>
    </div>
  </div>
</section>
`;

export const BuddzeeFAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    {
      q: 'What is Buddzee?',
      a: 'Buddzee is your business data buddy. It connects all your business tools into one central place, then lets you ask questions in plain English to get instant, accurate answers. Think of it as a brilliant assistant that actually knows everything happening in your business.',
    },
    {
      q: 'What tools does Buddzee connect to?',
      a: 'Buddzee integrates with most popular business tools \u2014 CRMs like HubSpot and Salesforce, accounting tools like Xero and MYOB, project management platforms, e-commerce systems like Shopify, marketing tools, and more. If your tool is popular, Buddzee can probably connect to it.',
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. Buddzee runs on Australian-hosted infrastructure with bank-level encryption. Your data never leaves the country. We use strict access controls, and all connections are encrypted end-to-end.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most businesses are up and running within a week. We handle the technical setup \u2014 connecting your tools, setting everything up, and training Buddzee on your business context. You don\u2019t need to do anything technical.',
    },
    {
      q: 'Do I need to be technical to use it?',
      a: 'Not at all. Buddzee is designed specifically for non-technical business owners. You just ask questions in plain English \u2014 \u2018How did sales go last month?\u2019 or \u2018Who hasn\u2019t paid their invoice?\u2019 No coding, no query language, no dashboards to learn.',
    },
    {
      q: 'What happens as my business grows?',
      a: 'Buddzee grows with you. Add new tools and data sources whenever you need. As your data gets richer, Buddzee\u2019s insights get more powerful. We also offer automation add-ons and consulting services for businesses ready to take the next step.',
    },
  ];

  return (
    <CopyWrapper blockName="BuddzeeFAQ" codeToCopy={BuddzeeFAQCode}>
      <section id="bz-faq" className="py-24 lg:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h2
            className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight text-center mb-12"
            style={{ color: '#09142B' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="border-t border-gray-200">
            {items.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center transition-colors"
                  style={{
                    color: active === i ? '#5284FF' : '#09142B',
                  }}
                  onMouseEnter={(e) => { if (active !== i) e.currentTarget.style.color = '#5284FF'; }}
                  onMouseLeave={(e) => { if (active !== i) e.currentTarget.style.color = '#09142B'; }}
                >
                  <span className="text-[16px] font-700 pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}
                    style={{ color: '#5284FF' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-[400ms] ${active === i ? 'max-h-[400px] pb-6' : 'max-h-0'}`}>
                  <p
                    className="text-[15px] text-gray-500 leading-relaxed"
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
