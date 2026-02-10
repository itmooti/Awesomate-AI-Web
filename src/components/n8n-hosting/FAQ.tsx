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
        <button class="n8f-question">WHAT DOES MANAGED AUTOMATION HOSTING ACTUALLY MEAN? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">We set everything up, keep it running, and fix problems before you even notice them. You don\u2019t touch anything technical.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">HOW IS THIS DIFFERENT FROM ZAPIER OR MAKE? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">You own your automations instead of renting them. No per-task fees, no limits, and way more powerful.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT HAPPENS IF SOMETHING GOES WRONG? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">We run three copies of everything. If one has a problem, the others take over instantly. Plus our team monitors 24/7.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">DO I NEED TECHNICAL SKILLS? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">No. We handle all the technical setup and maintenance. You tell us what you want automated, we make it happen.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">CAN I MOVE MY EXISTING AUTOMATIONS ACROSS? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. We handle the migration for you.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT DOES IT COST? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Plans start from AU$75/month. See pricing above for full details.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">IS MY DATA SECURE? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Your data runs on dedicated Australian infrastructure. It\u2019s encrypted, backed up, and never shared.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">CAN I CANCEL ANYTIME? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. No lock-in contracts.</div>
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
    { q: "WHAT DOES MANAGED AUTOMATION HOSTING ACTUALLY MEAN?", a: "We set everything up, keep it running, and fix problems before you even notice them. You don\u2019t touch anything technical." },
    { q: "HOW IS THIS DIFFERENT FROM ZAPIER OR MAKE?", a: "You own your automations instead of renting them. No per-task fees, no limits, and way more powerful." },
    { q: "WHAT HAPPENS IF SOMETHING GOES WRONG?", a: "We run three copies of everything. If one has a problem, the others take over instantly. Plus our team monitors 24/7." },
    { q: "DO I NEED TECHNICAL SKILLS?", a: "No. We handle all the technical setup and maintenance. You tell us what you want automated, we make it happen." },
    { q: "CAN I MOVE MY EXISTING AUTOMATIONS ACROSS?", a: "Yes. We handle the migration for you." },
    { q: "WHAT DOES IT COST?", a: "Plans start from AU$75/month. See pricing above for full details." },
    { q: "IS MY DATA SECURE?", a: "Your data runs on dedicated Australian infrastructure. It\u2019s encrypted, backed up, and never shared." },
    { q: "CAN I CANCEL ANYTIME?", a: "Yes. No lock-in contracts." }
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
