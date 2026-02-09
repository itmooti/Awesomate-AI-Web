import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const PerformanceScaleCode = `
<style>
  #n8-perf {
    padding: 100px 0 !important;
    background: var(--color-5, #ffffff) !important;
    position: relative !important; overflow: hidden !important;
    border-top: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8s-glow {
    position: absolute !important; top: -150px !important; left: -100px !important;
    width: 600px !important; height: 600px !important;
    background: radial-gradient(circle, rgba(30,99,233,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8s-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8s-header { text-align: center !important; margin-bottom: 80px !important; }
  .n8s-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-4) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8s-h2.n8s-h2.n8s-h2.n8s-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--color-1) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8s-h2.n8s-h2.n8s-h2.n8s-h2 { font-size: 48px !important; }
  }
  .n8s-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; max-width: 700px !important; margin: 0 auto !important;
    line-height: 1.6 !important; font-weight: 500 !important;
  }
  .n8s-layout {
    display: flex !important; flex-direction: column !important; gap: 48px !important;
  }
  @media (min-width: 1024px) {
    .n8s-layout { flex-direction: row !important; }
    .n8s-sidebar { width: 300px !important; flex-shrink: 0 !important; }
  }
  .n8s-sticky {
    font-family: var(--font-heading) !important; font-size: 32px !important;
    font-weight: 800 !important; color: var(--color-1) !important;
    letter-spacing: -0.01em !important; position: sticky !important; top: 120px !important;
  }
  .n8s-grid {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 40px !important; flex-grow: 1 !important;
  }
  @media (min-width: 768px) { .n8s-grid { grid-template-columns: 1fr 1fr !important; } }
  @media (min-width: 1280px) { .n8s-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
  .n8s-feat {
    display: flex !important; gap: 20px !important; align-items: flex-start !important;
  }
  .n8s-feat-icon {
    width: 32px !important; height: 32px !important; flex-shrink: 0 !important;
    color: var(--color-4) !important; margin-top: 4px !important;
  }
  .n8s-feat-title {
    font-family: var(--font-main) !important; font-size: 18px !important;
    font-weight: 800 !important; color: var(--color-1) !important;
    margin-bottom: 8px !important;
  }
  .n8s-feat-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.6 !important; font-weight: 500 !important;
  }
</style>

<section id="n8-perf">
  <div class="n8s-glow"></div>
  <div class="n8s-container">
    <div class="n8s-header">
      <div class="n8s-label">What You Get</div>
      <h2 class="n8s-h2">Infrastructure That Just Works</h2>
      <p class="n8s-sub">Powerful, reliable, and fully managed — so you can focus on your business instead of worrying about the tech behind it.</p>
    </div>

    <div class="n8s-layout">
      <div class="n8s-sidebar">
        <div class="n8s-sticky">Performance & scale</div>
      </div>

      <div class="n8s-grid">
        <div class="n8s-feat">
          <svg class="n8s-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          <div>
            <div class="n8s-feat-title">Lightning Fast</div>
            <div class="n8s-feat-desc">Your automations run instantly, even when you're processing thousands of records.</div>
          </div>
        </div>

        <div class="n8s-feat">
          <svg class="n8s-feat-icon" style="color: var(--color-2);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
          <div>
            <div class="n8s-feat-title">Rock-Solid Storage</div>
            <div class="n8s-feat-desc">Your data is stored securely and backed up every 30 minutes. Nothing gets lost.</div>
          </div>
        </div>

        <div class="n8s-feat">
          <svg class="n8s-feat-icon" style="color: var(--color-3);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          <div>
            <div class="n8s-feat-title">No Hidden Limits</div>
            <div class="n8s-feat-desc">Run as many automations as you need. No caps, no throttling, no surprise fees.</div>
          </div>
        </div>

        <div class="n8s-feat">
          <svg class="n8s-feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <div>
            <div class="n8s-feat-title">Grows With Your Business</div>
            <div class="n8s-feat-desc">Start small and scale up as you need. No disruptions, no migrations.</div>
          </div>
        </div>

        <div class="n8s-feat">
          <svg class="n8s-feat-icon" style="color: var(--color-2);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <div>
            <div class="n8s-feat-title">Handles Busy Periods</div>
            <div class="n8s-feat-desc">Black Friday, end-of-month processing, product launches — your automations keep running smoothly.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const PerformanceScale: React.FC = () => {
  const features = [
    {
      title: 'Lightning Fast',
      desc: "Your automations run instantly, even when you're processing thousands of records.",
      color: 'text-brand-blue',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    },
    {
      title: 'Rock-Solid Storage',
      desc: 'Your data is stored securely and backed up every 30 minutes. Nothing gets lost.',
      color: 'text-brand-accent',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>,
    },
    {
      title: 'No Hidden Limits',
      desc: 'Run as many automations as you need. No caps, no throttling, no surprise fees.',
      color: 'text-brand-orange',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>,
    },
    {
      title: 'Grows With Your Business',
      desc: 'Start small and scale up as you need. No disruptions, no migrations.',
      color: 'text-brand-blue',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    },
    {
      title: 'Handles Busy Periods',
      desc: 'Black Friday, end-of-month processing, product launches — your automations keep running smoothly.',
      color: 'text-brand-accent',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    },
  ];

  return (
    <CopyWrapper blockName="Performance" codeToCopy={PerformanceScaleCode}>
      <section className="py-24 lg:py-28 bg-white relative overflow-hidden border-t border-brand-navy/[0.06]">
        <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(30,99,233,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="text-xs font-800 text-brand-blue uppercase tracking-[0.15em] mb-4">What You Get</div>
            <h2 className="text-4xl md:text-5xl font-heading font-800 text-brand-navy leading-[1.2] tracking-tight mb-6">
              Infrastructure That Just Works
            </h2>
            <p className="text-lg text-gray-500 font-500 max-w-3xl mx-auto leading-relaxed">
              Powerful, reliable, and fully managed — so you can focus on your business instead of worrying about the tech behind it.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-72 flex-shrink-0">
              <div className="text-3xl font-heading font-800 text-brand-navy lg:sticky lg:top-32 tracking-tight">Performance & scale</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 flex-grow">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5 items-start group">
                  <div className={`w-8 h-8 flex-shrink-0 ${f.color} group-hover:scale-110 transition-transform mt-1`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-800 text-brand-navy mb-2">{f.title}</h3>
                    <p className="text-[15px] text-gray-500 font-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
