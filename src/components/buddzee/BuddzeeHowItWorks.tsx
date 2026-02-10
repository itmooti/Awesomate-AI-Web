import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeHowItWorksCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-how {
    padding: 100px 0 !important;
    background: #ffffff !important;
  }
  .bzh-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  @media (min-width: 768px) {
    .bzh-container { padding: 0 48px !important; }
  }
  .bzh-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--bz-blue) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .bzh-h2.bzh-h2.bzh-h2.bzh-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--bz-navy) !important; margin: 0 0 16px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .bzh-h2.bzh-h2.bzh-h2.bzh-h2 { font-size: 44px !important; }
  }
  .bzh-intro {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 560px !important; margin-bottom: 56px !important;
  }
  .bzh-grid {
    display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important;
  }
  @media (min-width: 768px) {
    .bzh-grid { grid-template-columns: repeat(3, 1fr) !important; }
  }
  .bzh-card {
    background: #ffffff !important; border: 1px solid #e5e7eb !important;
    border-radius: 16px !important; padding: 40px 32px !important;
    transition: all 0.3s !important; position: relative !important;
  }
  .bzh-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 20px 40px rgba(82,132,255,0.08) !important;
    border-color: var(--bz-blue-light) !important;
  }
  .bzh-number {
    font-family: var(--font-main) !important; font-size: 48px !important;
    line-height: 1 !important;
    margin-bottom: 20px !important; display: inline-block !important;
    background: linear-gradient(135deg, var(--bz-blue-light) 0%, var(--bz-blue) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .bzh-step-title {
    font-family: var(--font-main) !important; font-size: 22px !important;
    color: var(--bz-navy) !important;
    margin-bottom: 12px !important;
  }
  .bzh-step-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.65 !important;
  }
</style>

<section id="bz-how">
  <div class="bzh-container">
    <div class="bzh-label">How It Works</div>
    <h2 class="bzh-h2">From Chaos to Calm</h2>
    <p class="bzh-intro">Three simple steps to transform how you run your business.</p>

    <div class="bzh-grid">
      <div class="bzh-card">
        <div class="bzh-number">01</div>
        <div class="bzh-step-title">Connect</div>
        <div class="bzh-step-desc">We connect all your business tools \u2014 accounting, customer management, project tracking, online store \u2014 everything talks to Buddzee.</div>
      </div>

      <div class="bzh-card">
        <div class="bzh-number">02</div>
        <div class="bzh-step-title">Ask</div>
        <div class="bzh-step-desc">Chat with Buddzee in plain English. \u2018What were our top clients last quarter?\u2019 \u2018How\u2019s cash flow looking?\u2019 Instant, accurate answers.</div>
      </div>

      <div class="bzh-card">
        <div class="bzh-number">03</div>
        <div class="bzh-step-title">Automate</div>
        <div class="bzh-step-desc">Buddzee spots repetitive patterns and handles them in the background. Invoices, reports, follow-ups \u2014 done automatically.</div>
      </div>
    </div>
  </div>
</section>
`;

export const BuddzeeHowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      desc: 'We connect all your business tools \u2014 accounting, customer management, project tracking, online store \u2014 everything talks to Buddzee.',
    },
    {
      number: '02',
      title: 'Ask',
      desc: 'Chat with Buddzee in plain English. \u2018What were our top clients last quarter?\u2019 \u2018How\u2019s cash flow looking?\u2019 Instant, accurate answers.',
    },
    {
      number: '03',
      title: 'Automate',
      desc: 'Buddzee spots repetitive patterns and handles them in the background. Invoices, reports, follow-ups \u2014 done automatically.',
    },
  ];

  return (
    <CopyWrapper blockName="BuddzeeHowItWorks" codeToCopy={BuddzeeHowItWorksCode}>
      <section id="bz-how" className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            className="text-xs font-800 uppercase tracking-[0.15em] mb-4"
            style={{ color: '#5284FF' }}
          >
            How It Works
          </div>
          <h2
            className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight mb-4"
            style={{ color: '#09142B' }}
          >
            From Chaos to Calm
          </h2>
          <p
            className="text-[17px] text-gray-500 leading-relaxed max-w-[560px] mb-14"
          >
            Three simple steps to transform how you run your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ABC1FF]"
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(82,132,255,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}
              >
                <div
                  className="text-5xl font-800 leading-none mb-5 inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #ABC1FF 0%, #5284FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="text-[22px] font-800 mb-3"
                  style={{ color: '#09142B' }}
                >
                  {step.title}
                </div>
                <div className="text-[15px] text-gray-500 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
