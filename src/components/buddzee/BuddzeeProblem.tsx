import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeProblemCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-problem {
    padding: 80px 0 !important; background: var(--bz-cloud) !important;
  }
  .bzp-container {
    max-width: 900px !important; margin: 0 auto !important;
    padding: 0 24px !important; text-align: center !important;
  }
  .bzp-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--bz-blue) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .bzp-h2.bzp-h2.bzp-h2.bzp-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.2 !important;
    color: var(--bz-navy) !important; margin: 0 0 16px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .bzp-h2.bzp-h2.bzp-h2.bzp-h2 { font-size: 44px !important; }
  }
  .bzp-intro {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin: 0 0 40px !important; font-weight: 500 !important;
  }
  .bzp-grid {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 16px !important; text-align: left !important;
  }
  @media (min-width: 640px) {
    .bzp-grid { grid-template-columns: repeat(3, 1fr) !important; }
  }
  .bzp-card {
    padding: 28px !important; border-radius: 16px !important;
    background: #ffffff !important; border: 1px solid rgba(9,20,43,0.06) !important;
    transition: all 0.2s !important;
  }
  .bzp-card:hover {
    box-shadow: 0 8px 24px rgba(9,20,43,0.06) !important;
    transform: translateY(-2px) !important;
  }
  .bzp-card-icon {
    width: 48px !important; height: 48px !important; border-radius: 12px !important;
    background: var(--bz-cloud) !important; display: flex !important;
    align-items: center !important; justify-content: center !important;
    margin-bottom: 16px !important;
  }
  .bzp-card-icon svg {
    width: 24px !important; height: 24px !important; stroke: var(--bz-blue) !important;
    fill: none !important; stroke-width: 1.5 !important; stroke-linecap: round !important;
    stroke-linejoin: round !important;
  }
  .bzp-card-title {
    font-family: var(--font-main) !important; font-size: 16px !important;
    font-weight: 700 !important; color: var(--bz-navy) !important;
    margin: 0 0 8px !important;
  }
  .bzp-card-desc {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; line-height: 1.65 !important; margin: 0 !important;
  }
</style>

<section id="bz-problem">
  <div class="bzp-container">
    <div class="bzp-label">The Problem</div>
    <h2 class="bzp-h2">Sound Familiar?</h2>
    <p class="bzp-intro">You're not alone. Most business owners we talk to are dealing with the same frustrations.</p>
    <div class="bzp-grid">
      <div class="bzp-card">
        <div class="bzp-card-icon">
          <svg viewBox="0 0 24 24"><rect x="2" y="3" width="8" height="7" rx="1"/><rect x="14" y="3" width="8" height="7" rx="1"/><rect x="2" y="14" width="8" height="7" rx="1"/><rect x="14" y="14" width="8" height="7" rx="1"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>
        </div>
        <div class="bzp-card-title">Multiple Logins, Zero Clarity</div>
        <div class="bzp-card-desc">You're juggling 15+ tools with different passwords and interfaces. There's no single place to see what's actually happening in your business.</div>
      </div>
      <div class="bzp-card">
        <div class="bzp-card-icon">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
        </div>
        <div class="bzp-card-title">Spreadsheets Nobody Reads</div>
        <div class="bzp-card-desc">You keep exporting data from different systems, but nobody has time to properly analyse it. Critical insights slip through the cracks.</div>
      </div>
      <div class="bzp-card">
        <div class="bzp-card-icon">
          <svg viewBox="0 0 24 24"><path d="M4 7h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H5.5"/><path d="M16 7h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1.5"/><path d="M4 16h3a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1H5.5"/><path d="M16 16h3a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1h-1.5"/><circle cx="12" cy="12" r="3"/><line x1="9" y1="12" x2="4" y2="7"/><line x1="15" y1="12" x2="20" y2="7"/><line x1="9" y1="12" x2="4" y2="16"/><line x1="15" y1="12" x2="20" y2="16"/></svg>
        </div>
        <div class="bzp-card-title">Too Many Tools, Too Little Time</div>
        <div class="bzp-card-desc">One tool for this, another tool for that. Multiple subscriptions adding up for something that still feels clunky and disconnected.</div>
      </div>
    </div>
  </div>
</section>
`;

export const BuddzeeProblem: React.FC = () => {
  const pains = [
    {
      title: 'Multiple Logins, Zero Clarity',
      desc: "You're juggling 15+ tools with different passwords and interfaces. There's no single place to see what's actually happening in your business.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ stroke: '#5284FF' }}>
          <rect x="2" y="3" width="8" height="7" rx="1"/>
          <rect x="14" y="3" width="8" height="7" rx="1"/>
          <rect x="2" y="14" width="8" height="7" rx="1"/>
          <rect x="14" y="14" width="8" height="7" rx="1"/>
          <line x1="6" y1="10" x2="6" y2="14"/>
          <line x1="18" y1="10" x2="18" y2="14"/>
        </svg>
      ),
    },
    {
      title: 'Spreadsheets Nobody Reads',
      desc: 'You keep exporting data from different systems, but nobody has time to properly analyse it. Critical insights slip through the cracks.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ stroke: '#5284FF' }}>
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="15" y1="3" x2="15" y2="21"/>
        </svg>
      ),
    },
    {
      title: 'Too Many Tools, Too Little Time',
      desc: 'One tool for this, another tool for that. Multiple subscriptions adding up for something that still feels clunky and disconnected.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ stroke: '#5284FF' }}>
          <path d="M4 7h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H5.5"/>
          <path d="M16 7h3a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1h-1.5"/>
          <path d="M4 16h3a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1H5.5"/>
          <path d="M16 16h3a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1h-1.5"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="9" y1="12" x2="4" y2="7"/>
          <line x1="15" y1="12" x2="20" y2="7"/>
          <line x1="9" y1="12" x2="4" y2="16"/>
          <line x1="15" y1="12" x2="20" y2="16"/>
        </svg>
      ),
    },
  ];

  return (
    <CopyWrapper blockName="BuddzeeProblem" codeToCopy={BuddzeeProblemCode}>
      <section className="py-20" style={{ background: '#EDEFF7' }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs font-extrabold uppercase tracking-[0.15em] mb-4" style={{ color: '#5284FF' }}>The Problem</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-extrabold leading-[1.2] tracking-tight mb-4" style={{ color: '#09142B' }}>
            Sound Familiar?
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
            You're not alone. Most business owners we talk to are dealing with the same frustrations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {pains.map((p) => (
              <div key={p.title} className="p-7 rounded-2xl bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all" style={{ border: '1px solid rgba(9,20,43,0.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: '#EDEFF7' }}>
                  {p.icon}
                </div>
                <div className="text-base font-bold mb-2" style={{ color: '#09142B' }}>{p.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
