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
    max-width: 900px !important; margin: 0 auto !important;
    padding: 0 24px !important; text-align: center !important;
    position: relative !important; z-index: 1 !important;
  }
  .n8p-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8p-h2.n8p-h2.n8p-h2.n8p-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8p-h2.n8p-h2.n8p-h2.n8p-h2 { font-size: 44px !important; }
  }
  .n8p-body {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 40px !important; font-weight: 500 !important;
  }
  .n8p-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 16px !important;
    text-align: left !important;
  }
  @media (min-width: 640px) { .n8p-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  .n8p-pain {
    padding: 24px !important; border-radius: 16px !important;
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
    font-size: 24px !important; margin-bottom: 12px !important;
  }
  .n8p-pain-title {
    font-family: var(--font-main) !important; font-size: 15px !important;
    font-weight: 700 !important; color: var(--color-1) !important;
    margin-bottom: 6px !important;
  }
  .n8p-pain-desc {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; line-height: 1.6 !important; font-weight: 500 !important;
  }
</style>

<section id="n8-problem">
  <div class="n8p-glow"></div>
  <div class="n8p-container">
    <div class="n8p-label">The Problem</div>
    <h2 class="n8p-h2">If Your Automation Stops, Your Business Stops.</h2>
    <p class="n8p-body">You've built your workflows. Your team relies on them every day. But what happens when your hosting goes down at 2am on a Sunday?</p>

    <div class="n8p-grid">
      <div class="n8p-pain">
        <div class="n8p-pain-icon">\u26A0\uFE0F</div>
        <div class="n8p-pain-title">Single Point of Failure</div>
        <div class="n8p-pain-desc">Most hosts run one server. If it fails, everything stops until someone manually fixes it.</div>
      </div>
      <div class="n8p-pain">
        <div class="n8p-pain-icon">\uD83D\uDD50</div>
        <div class="n8p-pain-title">Slow Recovery</div>
        <div class="n8p-pain-desc">Restoring from backups can take hours. Every minute offline is money lost and clients frustrated.</div>
      </div>
      <div class="n8p-pain">
        <div class="n8p-pain-icon">\uD83E\uDD37</div>
        <div class="n8p-pain-title">You're On Your Own</div>
        <div class="n8p-pain-desc">\u201CSelf-hosted\u201D often means \u201Cself-fixed.\u201D When things break, you\u2019re the one debugging at midnight.</div>
      </div>
    </div>
  </div>
</section>
`;

export const N8nProblem: React.FC = () => {
  const pains = [
    { icon: '\u26A0\uFE0F', title: 'Single Point of Failure', desc: 'Most hosts run one server. If it fails, everything stops until someone manually fixes it.' },
    { icon: '\uD83D\uDD50', title: 'Slow Recovery', desc: 'Restoring from backups can take hours. Every minute offline is money lost and clients frustrated.' },
    { icon: '\uD83E\uDD37', title: "You're On Your Own", desc: '\u201CSelf-hosted\u201D often means \u201Cself-fixed.\u201D When things break, you\u2019re the one debugging at midnight.' },
  ];

  return (
    <CopyWrapper blockName="N8nProblem" codeToCopy={N8nProblemCode}>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">The Problem</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-6">
            If Your Automation Stops, Your Business Stops.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-10 font-500">
            You've built your workflows. Your team relies on them every day. But what happens when your hosting goes down at 2am on a Sunday?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {pains.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-[#f8f9fb] border border-brand-navy/[0.06] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/[0.04] hover:border-brand-accent/15 transition-all">
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-[15px] font-700 text-brand-navy mb-1.5">{p.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed font-500">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
