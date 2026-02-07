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
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8f-h2.n8f-h2.n8f-h2.n8f-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
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
    font-size: 15px !important; font-weight: 800 !important;
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
    font-weight: 500 !important;
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
        <button class="n8f-question">WHAT IS N8N SELF HOSTING ON A SELF-MANAGED VPS? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">It\u2019s a virtual private server where you control everything \u2014 OS, software stack, middleware, and automation workflows. With n8n VPS hosting, you can deploy and manage your own n8n environment easily. You get root access, full flexibility, and complete control over your n8n self-hosted setup.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">HOW IS SELF-MANAGED N8N SELF HOSTING DIFFERENT FROM MANAGED VPS HOSTING? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">With self-managed VPS, you handle updates, security hardening, runtime installations, and tuning \u2014 giving you full control over your n8n self-hosted environment. Managed VPS offers more support but limits customisation. Self-managed n8n self hosting is best suited for users who want maximum control and lower n8n self-hosting costs.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">IS THIS RIGHT FOR RUNNING N8N? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes, especially if you require custom workflows, integrations, or control over network and security settings that a managed platform might restrict. Self-managed VPS hosting is ideal for running n8n, giving you flexibility and performance for your automation workflows.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHICH OS AND CONTROL PANELS ARE SUPPORTED FOR SELF-HOSTED N8N? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Most Linux distributions are supported, and you can layer in a control panel (such as cPanel) later if desired \u2014 without losing root access.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT SUPPORT IS INCLUDED IN N8N VPS HOSTING? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">You\u2019ll get infrastructure-level support (hardware, network, and availability), while you manage software, containers, workflow logic, and maintenance for your self-hosted n8n environment. This setup is ideal for developers who prefer hands-on n8n self hosting.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">HOW DO I CHOOSE THE RIGHT N8N VPS HOSTING PLAN? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Evaluate your memory, CPU, storage and bandwidth needs based on your n8n usage patterns (number of workflows, triggers, data processing). If you expect growth, you can easily scale up your services.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">DO I GET UNLIMITED WORKFLOWS WITH N8N SELF HOSTING? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. You can use unlimited workflows with self-managed VPS hosting for self-hosted n8n. This allows you to set up multiple instances and use compatible AI products \u2014 making it a powerful and cost-efficient n8n self-hosting option.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">HOW DOES SELF-HOSTED N8N SETUP WORK? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">After you purchase your plan, you\u2019ll receive an email with a step-by-step guide to help you get started with n8n self hosting. Consult the n8n community if you need further assistance with workflows or automation setup.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT IS THE COST OF N8N SELF HOSTING? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Your n8n self-hosting cost depends on the VPS plan you choose \u2014 based on CPU, RAM, and storage requirements. Since you manage the server yourself, there\u2019s no additional n8n hosting fee, making it one of the most cost-effective ways to deploy n8n.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">CAN I MIGRATE MY EXISTING N8N WORKFLOWS TO SELF-HOSTED N8N? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Yes. You can easily export and import workflows from any n8n setup to your VPS-based environment.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">IS SELF-HOSTED N8N VPS HOSTING SECURE? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">With self-managed VPS hosting, you control all security configurations \u2014 including firewall rules, SSL certificates, and data backups \u2014 ensuring a secure n8n self-hosted environment.</div>
      </div>
      <div class="n8f-item">
        <button class="n8f-question">WHAT ARE THE BENEFITS OF SELF-HOSTED N8N VPS HOSTING OVER CLOUD PLATFORMS? <span class="n8f-icon">\u25BC</span></button>
        <div class="n8f-answer">Compared to cloud or shared hosting, self-hosted n8n VPS hosting offers dedicated resources, better performance, lower long-term hosting costs, and full data control.</div>
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
    { q: "WHAT IS N8N SELF HOSTING ON A SELF-MANAGED VPS?", a: "It\u2019s a virtual private server where you control everything \u2014 OS, software stack, middleware, and automation workflows. With n8n VPS hosting, you can deploy and manage your own n8n environment easily. You get root access, full flexibility, and complete control over your n8n self-hosted setup." },
    { q: "HOW IS SELF-MANAGED N8N SELF HOSTING DIFFERENT FROM MANAGED VPS HOSTING?", a: "With self-managed VPS, you handle updates, security hardening, runtime installations, and tuning \u2014 giving you full control over your n8n self-hosted environment. Managed VPS offers more support but limits customisation. Self-managed n8n self hosting is best suited for users who want maximum control and lower n8n self-hosting costs." },
    { q: "IS THIS RIGHT FOR RUNNING N8N?", a: "Yes, especially if you require custom workflows, integrations, or control over network and security settings that a managed platform might restrict. Self-managed VPS hosting is ideal for running n8n, giving you flexibility and performance for your automation workflows." },
    { q: "WHICH OS AND CONTROL PANELS ARE SUPPORTED FOR SELF-HOSTED N8N?", a: "Most Linux distributions are supported, and you can layer in a control panel (such as cPanel) later if desired \u2014 without losing root access." },
    { q: "WHAT SUPPORT IS INCLUDED IN N8N VPS HOSTING?", a: "You\u2019ll get infrastructure-level support (hardware, network, and availability), while you manage software, containers, workflow logic, and maintenance for your self-hosted n8n environment. This setup is ideal for developers who prefer hands-on n8n self hosting." },
    { q: "HOW DO I CHOOSE THE RIGHT N8N VPS HOSTING PLAN?", a: "Evaluate your memory, CPU, storage and bandwidth needs based on your n8n usage patterns (number of workflows, triggers, data processing). If you expect growth, you can easily scale up your services." },
    { q: "DO I GET UNLIMITED WORKFLOWS WITH N8N SELF HOSTING?", a: "Yes. You can use unlimited workflows with self-managed VPS hosting for self-hosted n8n. This allows you to set up multiple instances and use compatible AI products \u2014 making it a powerful and cost-efficient n8n self-hosting option." },
    { q: "HOW DOES SELF-HOSTED N8N SETUP WORK?", a: "After you purchase your plan, you\u2019ll receive an email with a step-by-step guide to help you get started with n8n self hosting. Consult the n8n community if you need further assistance with workflows or automation setup." },
    { q: "WHAT IS THE COST OF N8N SELF HOSTING?", a: "Your n8n self-hosting cost depends on the VPS plan you choose \u2014 based on CPU, RAM, and storage requirements. Since you manage the server yourself, there\u2019s no additional n8n hosting fee, making it one of the most cost-effective ways to deploy n8n." },
    { q: "CAN I MIGRATE MY EXISTING N8N WORKFLOWS TO SELF-HOSTED N8N?", a: "Yes. You can easily export and import workflows from any n8n setup to your VPS-based environment." },
    { q: "IS SELF-HOSTED N8N VPS HOSTING SECURE?", a: "With self-managed VPS hosting, you control all security configurations \u2014 including firewall rules, SSL certificates, and data backups \u2014 ensuring a secure n8n self-hosted environment." },
    { q: "WHAT ARE THE BENEFITS OF SELF-HOSTED N8N VPS HOSTING OVER CLOUD PLATFORMS?", a: "Compared to cloud or shared hosting, self-hosted n8n VPS hosting offers dedicated resources, better performance, lower long-term hosting costs, and full data control." }
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
