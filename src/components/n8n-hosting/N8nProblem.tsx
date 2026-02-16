import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const N8nProblemCode = `
<style>
  #n8-problem {
    padding: 80px 0 !important;
    background: var(--color-5, #ffffff) !important;
    position: relative !important; overflow: hidden !important;
  }
  .n8p-glow {
    position: absolute !important; top: -100px !important; right: -150px !important;
    width: 400px !important; height: 400px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8p-container {
    max-width: 1000px !important; margin: 0 auto !important;
    padding: 0 24px !important; text-align: center !important;
    position: relative !important; z-index: 1 !important;
  }
  .n8p-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8p-h2.n8p-h2.n8p-h2.n8p-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8p-h2.n8p-h2.n8p-h2.n8p-h2 { font-size: 44px !important; }
  }
  .n8p-body {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 48px !important; max-width: 700px !important;
    margin-left: auto !important; margin-right: auto !important;
  }
  .n8p-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 16px !important;
    text-align: left !important;
  }
  @media (min-width: 640px) { .n8p-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  .n8p-pain {
    padding: 28px !important; border-radius: 16px !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    border: 1px solid rgba(15,17,40,0.06) !important;
    transition: all 0.3s !important;
  }
  .n8p-pain:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 24px rgba(15,17,40,0.04) !important;
    border-color: rgba(233,72,77,0.15) !important;
  }
  .n8p-pain-icon {
    width: 44px !important; height: 44px !important;
    border-radius: 10px !important;
    background: rgba(233,72,77,0.08) !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    margin-bottom: 16px !important;
  }
  .n8p-pain-icon svg { width: 22px !important; height: 22px !important; }
  .n8p-pain-title {
    font-family: var(--font-main) !important; font-size: 16px !important;
    font-weight: 700 !important; color: var(--color-1) !important;
    margin-bottom: 8px !important;
  }
  .n8p-pain-desc {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; line-height: 1.6 !important;
  }
</style>

<section id="n8-problem">
  <div class="n8p-glow"></div>
  <div class="n8p-container">
    <div class="n8p-label">The Problem</div>
    <h2 class="n8p-h2">The Hidden Costs of Cloud & DIY Automation</h2>
    <p class="n8p-body">Whether you're on a managed cloud platform or running your own server, these problems are costing you time and money.</p>

    <div class="n8p-grid">
      <div class="n8p-pain">
        <div class="n8p-pain-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="n8p-pain-title">Execution Caps & Surprise Bills</div>
        <div class="n8p-pain-desc">Most cloud platforms cap you at 2,500 executions per month. A single \u201Ccheck for new emails every 5 minutes\u201D workflow burns through 8,000. Go over? Pay more \u2014 or your workflows stop dead.</div>
      </div>
      <div class="n8p-pain">
        <div class="n8p-pain-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M2 14h20"/><path d="M12 14v4"/><path d="M8 18l-2 4"/><path d="M16 18l2 4"/></svg>
        </div>
        <div class="n8p-pain-title">Shared Servers, Shared Problems</div>
        <div class="n8p-pain-desc">320MB of RAM. Burstable CPU shared with everyone else. One heavy workflow processing a medium-sized CSV and your entire instance crashes \u2014 often silently, with no clear error message.</div>
      </div>
      <div class="n8p-pain">
        <div class="n8p-pain-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </div>
        <div class="n8p-pain-title">Your Data Disappears</div>
        <div class="n8p-pain-desc">7-day execution logs on starter plans. Weekly backups that overwrite themselves. When you need to debug why a lead didn't sync two weeks ago, that data is already gone forever.</div>
      </div>
      <div class="n8p-pain">
        <div class="n8p-pain-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/></svg>
        </div>
        <div class="n8p-pain-title">Forum Support Isn't Support</div>
        <div class="n8p-pain-desc">When your automation breaks on a Friday afternoon, \u201Cpost to the community forum\u201D isn't an answer. Most platforms don't troubleshoot your specific setup \u2014 they tell you the platform is working.</div>
      </div>
    </div>
  </div>
</section>
`;

export const N8nProblem: React.FC = () => {
  const pains = [
    {
      title: 'Execution Caps & Surprise Bills',
      desc: 'Most cloud platforms cap you at 2,500 executions per month. A single \u201Ccheck for new emails every 5 minutes\u201D workflow burns through 8,000. Go over? Pay more \u2014 or your workflows stop dead.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      ),
    },
    {
      title: 'Shared Servers, Shared Problems',
      desc: '320MB of RAM. Burstable CPU shared with everyone else. One heavy workflow processing a medium-sized CSV and your entire instance crashes \u2014 often silently, with no clear error message.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M2 14h20"/><path d="M12 14v4"/><path d="M8 18l-2 4"/><path d="M16 18l2 4"/></svg>
      ),
    },
    {
      title: 'Your Data Disappears',
      desc: "7-day execution logs on starter plans. Weekly backups that overwrite themselves. When you need to debug why a lead didn\u2019t sync two weeks ago, that data is already gone forever.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ),
    },
    {
      title: "Forum Support Isn\u2019t Support",
      desc: "When your automation breaks on a Friday afternoon, \u201Cpost to the community forum\u201D isn\u2019t an answer. Most platforms don\u2019t troubleshoot your specific setup \u2014 they tell you the platform is working.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e9484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/><line x1="23" y1="1" x2="17" y2="7"/><line x1="17" y1="1" x2="23" y2="7"/></svg>
      ),
    },
  ];

  return (
    <CopyWrapper blockName="N8nProblem" codeToCopy={N8nProblemCode}>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">The Problem</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-5">
            The Hidden Costs of Cloud & DIY Automation
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 font-500 max-w-[700px] mx-auto">
            Whether you're on a managed cloud platform or running your own server, these problems are costing you time and money.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {pains.map((p) => (
              <div key={p.title} className="p-7 rounded-2xl bg-[#f8f9fb] border border-brand-navy/[0.06] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/[0.04] hover:border-brand-accent/15 transition-all">
                <div className="w-11 h-11 rounded-[10px] bg-brand-accent/[0.08] flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <div className="text-base font-700 text-brand-navy mb-2">{p.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed font-500">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
