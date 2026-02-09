import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeFeaturesCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-features {
    padding: 100px 0 !important;
    background: var(--bz-cloud) !important;
  }
  .bzf-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  @media (min-width: 768px) {
    .bzf-container { padding: 0 48px !important; }
  }
  .bzf-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--bz-blue) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .bzf-h2.bzf-h2.bzf-h2.bzf-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--bz-navy) !important; margin: 0 0 56px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .bzf-h2.bzf-h2.bzf-h2.bzf-h2 { font-size: 44px !important; }
  }
  .bzf-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important;
  }
  @media (min-width: 640px) {
    .bzf-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (min-width: 1024px) {
    .bzf-grid { grid-template-columns: repeat(3, 1fr) !important; }
  }
  .bzf-card {
    background: #ffffff !important; border: 1px solid #e5e7eb !important;
    border-radius: 16px !important; padding: 36px 32px !important;
    transition: all 0.3s !important; position: relative !important;
    overflow: hidden !important;
  }
  .bzf-card::before {
    content: '' !important; position: absolute !important;
    top: 0 !important; left: 0 !important; right: 0 !important;
    height: 2px !important;
    background: linear-gradient(90deg, var(--bz-blue) 0%, var(--bz-blue-light) 100%) !important;
  }
  .bzf-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 20px 40px rgba(82,132,255,0.08) !important;
    border-color: var(--bz-blue-light) !important;
  }
  .bzf-icon-box {
    width: 48px !important; height: 48px !important; border-radius: 12px !important;
    background: rgba(82,132,255,0.08) !important; display: flex !important;
    align-items: center !important; justify-content: center !important;
    margin-bottom: 20px !important;
  }
  .bzf-icon-box svg {
    width: 24px !important; height: 24px !important; color: var(--bz-blue) !important;
    stroke: var(--bz-blue) !important;
  }
  .bzf-card-title {
    font-family: var(--font-main) !important; font-size: 20px !important;
    font-weight: 800 !important; color: var(--bz-navy) !important;
    margin-bottom: 10px !important;
  }
  .bzf-card-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.65 !important;
  }
</style>

<section id="bz-features">
  <div class="bzf-container">
    <div class="bzf-label">What You Get</div>
    <h2 class="bzf-h2">Everything You Need. Nothing You Don\u2019t.</h2>

    <div class="bzf-grid">
      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <div class="bzf-card-title">Ask Anything</div>
        <div class="bzf-card-desc">Plain English questions, instant accurate answers from all your connected data. No technical skills needed, no complex dashboards to learn.</div>
      </div>

      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        </div>
        <div class="bzf-card-title">Background Automation</div>
        <div class="bzf-card-desc">Buddzee handles boring, repetitive processes while you focus on growth. Invoices, reports, follow-ups \u2014 running quietly.</div>
      </div>

      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </div>
        <div class="bzf-card-title">One Login, Every Tool</div>
        <div class="bzf-card-desc">All your business data through a single, simple interface. No more juggling passwords across fifteen different systems.</div>
      </div>

      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="bzf-card-title">Real-Time Insights</div>
        <div class="bzf-card-desc">Your data updates as it changes. No stale spreadsheets, no manual exports. Always current, always accurate.</div>
      </div>

      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="bzf-card-title">Secure and Australian-Hosted</div>
        <div class="bzf-card-desc">Encrypted, Australian-hosted, with strict access controls. Your data never leaves the country.</div>
      </div>

      <div class="bzf-card">
        <div class="bzf-icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div class="bzf-card-title">Grows With You</div>
        <div class="bzf-card-desc">Add new tools and data sources as your business scales. Buddzee adapts to your needs, not the other way around.</div>
      </div>
    </div>
  </div>
</section>
`;

const featureIcons = {
  chat: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  cog: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  grid: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  lightning: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#5284FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

export const BuddzeeFeatures: React.FC = () => {
  const features = [
    {
      icon: featureIcons.chat,
      title: 'Ask Anything',
      desc: 'Plain English questions, instant accurate answers from all your connected data. No technical skills needed, no complex dashboards to learn.',
    },
    {
      icon: featureIcons.cog,
      title: 'Background Automation',
      desc: 'Buddzee handles boring, repetitive processes while you focus on growth. Invoices, reports, follow-ups \u2014 running quietly.',
    },
    {
      icon: featureIcons.grid,
      title: 'One Login, Every Tool',
      desc: 'All your business data through a single, simple interface. No more juggling passwords across fifteen different systems.',
    },
    {
      icon: featureIcons.lightning,
      title: 'Real-Time Insights',
      desc: 'Your data updates as it changes. No stale spreadsheets, no manual exports. Always current, always accurate.',
    },
    {
      icon: featureIcons.shield,
      title: 'Secure and Australian-Hosted',
      desc: 'Encrypted, Australian-hosted, with strict access controls. Your data never leaves the country.',
    },
    {
      icon: featureIcons.chart,
      title: 'Grows With You',
      desc: 'Add new tools and data sources as your business scales. Buddzee adapts to your needs, not the other way around.',
    },
  ];

  return (
    <CopyWrapper blockName="BuddzeeFeatures" codeToCopy={BuddzeeFeaturesCode}>
      <section id="bz-features" className="py-24 lg:py-28" style={{ background: '#EDEFF7' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            className="text-xs font-800 uppercase tracking-[0.15em] mb-4"
            style={{ color: '#5284FF' }}
          >
            What You Get
          </div>
          <h2
            className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight mb-14"
            style={{ color: '#09142B' }}
          >
            Everything You Need. Nothing You Don&rsquo;t.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 rounded-2xl px-8 py-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#ABC1FF] relative overflow-hidden"
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(82,132,255,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
              >
                {/* Gradient top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, #5284FF 0%, #ABC1FF 100%)' }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(82,132,255,0.08)' }}
                >
                  {feature.icon}
                </div>
                <div
                  className="text-xl font-800 mb-2.5"
                  style={{ color: '#09142B' }}
                >
                  {feature.title}
                </div>
                <div className="text-[15px] text-gray-500 leading-relaxed">
                  {feature.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
