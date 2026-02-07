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
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">What is vibe coding? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Vibe coding is a new approach to software development where you describe what you want in plain English, and AI assistants (like Claude) write the code for you. It's dramatically faster and cheaper than traditional development, while producing high-quality, maintainable code.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">How long does a typical project take? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Most projects are delivered in 2–6 weeks, depending on complexity. Simple internal tools might be ready in under 2 weeks, while more complex applications with multiple integrations can take 4–6 weeks. We'll give you a clear timeline during the scoping phase.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">Do I own the code? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Absolutely. You own 100% of the code we write for you. There are no licensing fees, no ongoing royalties, and no lock-in. It's your code, deployed on your infrastructure.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">What if I need changes later? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">That's where our Empower step comes in. We set you up with VS Code and Claude Code, and train you to make changes yourself using AI. For bigger changes, we're always available for additional development work.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">What training do you provide? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">We provide hands-on workshops covering: how to use VS Code, how to talk to Claude Code effectively, how to make common changes to your app, and how to deploy updates. The goal is for you to be confident making changes independently.</div></div></div>
      <div class="vcfq-item"><button class="vcfq-q" onclick="this.parentElement.classList.toggle('active')">How is this different from hiring a dev agency? <span class="vcfq-icon">▼</span></button><div class="vcfq-a"><div class="vcfq-a-text">Three key differences: (1) We're dramatically faster and cheaper thanks to AI-powered development. (2) We train you to maintain your app, so you're not dependent on us forever. (3) We focus on empowerment, not billable hours. Our goal is to make you independent, not create a recurring revenue stream for ourselves.</div></div></div>
    </div>
  </div>
</section>
`;

export const VibeFAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    { q: 'What is vibe coding?', a: 'Vibe coding is a new approach to software development where you describe what you want in plain English, and AI assistants (like Claude) write the code for you. It\u2019s dramatically faster and cheaper than traditional development, while producing high-quality, maintainable code.' },
    { q: 'How long does a typical project take?', a: 'Most projects are delivered in 2\u20136 weeks, depending on complexity. Simple internal tools might be ready in under 2 weeks, while more complex applications with multiple integrations can take 4\u20136 weeks. We\u2019ll give you a clear timeline during the scoping phase.' },
    { q: 'Do I own the code?', a: 'Absolutely. You own 100% of the code we write for you. There are no licensing fees, no ongoing royalties, and no lock-in. It\u2019s your code, deployed on your infrastructure.' },
    { q: 'What if I need changes later?', a: 'That\u2019s where our Empower step comes in. We set you up with VS Code and Claude Code, and train you to make changes yourself using AI. For bigger changes, we\u2019re always available for additional development work.' },
    { q: 'What training do you provide?', a: 'We provide hands-on workshops covering: how to use VS Code, how to talk to Claude Code effectively, how to make common changes to your app, and how to deploy updates. The goal is for you to be confident making changes independently.' },
    { q: 'How is this different from hiring a dev agency?', a: 'Three key differences: (1) We\u2019re dramatically faster and cheaper thanks to AI-powered development. (2) We train you to maintain your app, so you\u2019re not dependent on us forever. (3) We focus on empowerment, not billable hours. Our goal is to make you independent, not create a recurring revenue stream for ourselves.' },
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
