
import React, { useState } from 'react';
import { CopyWrapper } from './CopyWrapper';

const FAQCode = `
<style>
  #faq { font-family: 'Inter', sans-serif; background-color: #ffffff; padding: 80px 0; }
  .faq-container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
  .faq-title { text-align: center; font-size: 42px; font-weight: 800; color: #0f1128; margin-bottom: 64px; letter-spacing: -0.02em; }
  .faq-list { border-top: 1px solid #f3f4f6; }
  
  .faq-item { border-bottom: 1px solid #f3f4f6; background-color: #ffffff !important; }
  
  .faq-question.faq-question.faq-question.faq-question { 
    width: 100%; 
    text-align: left; 
    padding: 32px 0; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border: none !important; 
    background: #ffffff !important; /* Forces background to white to avoid aqua blue defaults */
    cursor: pointer; 
    font-size: 16px; 
    font-weight: 800; 
    color: #0f1128;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;
    outline: none !important;
  }

  /* Hover and active logic to replace platform defaults */
  .faq-question:hover { color: #e9484d; }
  .faq-question:active, 
  .faq-question:focus { 
    background-color: #ffffff !important; 
    color: #e9484d !important;
  }
  
  .faq-item.active .faq-question { color: #e9484d; }

  .faq-answer { 
    max-height: 0; 
    overflow: hidden; 
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
    color: #4b5563; 
    font-size: 16px; 
    line-height: 1.7;
    background-color: #ffffff !important;
  }

  .faq-item.active .faq-answer { max-height: 800px; padding-bottom: 40px; opacity: 1; }
  
  .faq-icon { 
    width: 20px; 
    height: 20px; 
    color: #e9484d; 
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
    margin-left: 16px;
  }
  .faq-item.active .faq-icon { transform: rotate(180deg); }
</style>

<section id="faq">
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">WHAT IS N8N SELF HOSTING ON A SELF-MANAGED VPS? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">It’s a virtual private server where you control everything — OS, software stack, middleware, and automation workflows. With n8n VPS hosting, you can deploy and manage your own n8n environment easily. You get root access, full flexibility, and complete control over your n8n self-hosted setup.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">HOW IS SELF-MANAGED N8N SELF HOSTING DIFFERENT FROM MANAGED VPS HOSTING? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">With self-managed VPS, you handle updates, security hardening, runtime installations, and tuning — giving you full control over your n8n self-hosted environment. Managed VPS offers more support but limits customization. Self-managed n8n self hosting is best suited for users who want maximum control and lower n8n self-hosting costs.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">IS THIS RIGHT FOR RUNNING N8N? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Yes, especially if you require custom workflows, integrations, or control over network and security settings that a managed platform might restrict. Self-managed VPS hosting is ideal for running n8n, giving you flexibility and performance for your automation workflows.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">WHICH OS AND CONTROL PANELS ARE SUPPORTED FOR SELF-HOSTED N8N? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Most Linux distributions are supported, and you can layer in a control panel (such as cPanel) later if desired — without losing root access.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">WHAT SUPPORT IS INCLUDED IN N8N VPS HOSTING? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">You’ll get infrastructure-level support (hardware, network, and availability), while you manage software, containers, workflow logic, and maintenance for your self-hosted n8n environment. This setup is ideal for developers who prefer hands-on n8n self hosting.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">HOW DO I CHOOSE THE RIGHT N8N VPS HOSTING PLAN? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Evaluate your memory, CPU, storage and bandwidth needs based on your n8n usage patterns (number of workflows, triggers, data processing). If you expect growth, you can easily scale up your services.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">DO I GET UNLIMITED WORKFLOWS WITH N8N SELF HOSTING? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Yes. You can use unlimited workflows with self-managed VPS hosting for self-hosted n8n. This allows you to set up multiple instances and use compatible AI products — making it a powerful and cost-efficient n8n self-hosting option.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">HOW DOES SELF-HOSTED N8N SETUP WORK? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">After you purchase your plan, you’ll receive an email with a step-by-step guide to help you get started with n8n self hosting. Consult the n8n community if you need further assistance with workflows or automation setup.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">WHAT IS THE COST OF N8N SELF HOSTING? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Your n8n self-hosting cost depends on the VPS plan you choose — based on CPU, RAM, and storage requirements. Since you manage the server yourself, there’s no additional n8n hosting fee, making it one of the most cost-effective ways to deploy n8n.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">CAN I MIGRATE MY EXISTING N8N WORKFLOWS TO SELF-HOSTED N8N? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Yes. You can easily export and import workflows from any n8n setup to your VPS-based environment.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">IS SELF-HOSTED N8N VPS HOSTING SECURE? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">With self-managed VPS hosting, you control all security configurations — including firewall rules, SSL certificates, and data backups — ensuring a secure n8n self-hosted environment.</div>
      </div>
      <div class="faq-item">
        <button class="faq-question">WHAT ARE THE BENEFITS OF SELF-HOSTED N8N VPS HOSTING OVER CLOUD PLATFORMS? <span class="faq-icon">▼</span></button>
        <div class="faq-answer">Compared to cloud or shared hosting, self-hosted n8n VPS hosting offers dedicated resources, better performance, lower long-term hosting costs, and full data control.</div>
      </div>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const item = button.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
</script>
`;

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  
  const items = [
    { q: "WHAT IS N8N SELF HOSTING ON A SELF-MANAGED VPS?", a: "It’s a virtual private server where you control everything — OS, software stack, middleware, and automation workflows. With n8n VPS hosting, you can deploy and manage your own n8n environment easily. You get root access, full flexibility, and complete control over your n8n self-hosted setup." },
    { q: "HOW IS SELF-MANAGED N8N SELF HOSTING DIFFERENT FROM MANAGED VPS HOSTING?", a: "With self-managed VPS, you handle updates, security hardening, runtime installations, and tuning — giving you full control over your n8n self-hosted environment. Managed VPS offers more support but limits customization. Self-managed n8n self hosting is best suited for users who want maximum control and lower n8n self-hosting costs." },
    { q: "IS THIS RIGHT FOR RUNNING N8N?", a: "Yes, especially if you require custom workflows, integrations, or control over network and security settings that a managed platform might restrict. Self-managed VPS hosting is ideal for running n8n, giving you flexibility and performance for your automation workflows." },
    { q: "WHICH OS AND CONTROL PANELS ARE SUPPORTED FOR SELF-HOSTED N8N?", a: "Most Linux distributions are supported, and you can layer in a control panel (such as cPanel) later if desired — without losing root access." },
    { q: "WHAT SUPPORT IS INCLUDED IN N8N VPS HOSTING?", a: "You’ll get infrastructure-level support (hardware, network, and availability), while you manage software, containers, workflow logic, and maintenance for your self-hosted n8n environment. This setup is ideal for developers who prefer hands-on n8n self hosting." },
    { q: "HOW DO I CHOOSE THE RIGHT N8N VPS HOSTING PLAN?", a: "Evaluate your memory, CPU, storage and bandwidth needs based on your n8n usage patterns (number of workflows, triggers, data processing). If you expect growth, you can easily scale up your services." },
    { q: "DO I GET UNLIMITED WORKFLOWS WITH N8N SELF HOSTING?", a: "Yes. You can use unlimited workflows with self-managed VPS hosting for self-hosted n8n. This allows you to set up multiple instances and use compatible AI products — making it a powerful and cost-efficient n8n self-hosting option." },
    { q: "HOW DOES SELF-HOSTED N8N SETUP WORK?", a: "After you purchase your plan, you’ll receive an email with a step-by-step guide to help you get started with n8n self hosting. Consult the n8n community if you need further assistance with workflows or automation setup." },
    { q: "WHAT IS THE COST OF N8N SELF HOSTING?", a: "Your n8n self-hosting cost depends on the VPS plan you choose — based on CPU, RAM, and storage requirements. Since you manage the server yourself, there’s no additional n8n hosting fee, making it one of the most cost-effective ways to deploy n8n." },
    { q: "CAN I MIGRATE MY EXISTING N8N WORKFLOWS TO SELF-HOSTED N8N?", a: "Yes. You can easily export and import workflows from any n8n setup to your VPS-based environment." },
    { q: "IS SELF-HOSTED N8N VPS HOSTING SECURE?", a: "With self-managed VPS hosting, you control all security configurations — including firewall rules, SSL certificates, and data backups — ensuring a secure n8n self-hosted environment." },
    { q: "WHAT ARE THE BENEFITS OF SELF-HOSTED N8N VPS HOSTING OVER CLOUD PLATFORMS?", a: "Compared to cloud or shared hosting, self-hosted n8n VPS hosting offers dedicated resources, better performance, lower long-term hosting costs, and full data control." }
  ];

  return (
    <CopyWrapper blockName="FAQ" codeToCopy={FAQCode}>
      <section id="faq-preview" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 border-t border-gray-100">
          {items.map((item, i) => (
            <div key={i} className={`border-b border-gray-100 ${active === i ? 'active' : ''}`}>
              <button 
                onClick={() => setActive(active === i ? null : i)} 
                className={`w-full text-left py-8 flex justify-between items-center group transition-all focus:outline-none ${active === i ? 'text-brand-accent' : 'text-brand-navy'}`}
              >
                <span className="font-800 text-[15px] uppercase tracking-widest leading-tight lg:text-base pr-4 group-hover:text-brand-accent transition-colors">
                  {item.q}
                </span>
                <svg className={`w-5 h-5 flex-shrink-0 text-brand-accent transition-transform duration-500 ${active === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? 'max-h-[800px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-500 text-[16px] leading-relaxed font-medium">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </CopyWrapper>
  );
};
