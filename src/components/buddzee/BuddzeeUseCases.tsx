import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeUseCasesCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-usecases { padding: 100px 0 !important; background: #ffffff !important; }
  .bzu-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .bzu-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; color: var(--bz-blue) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .bzu-h2.bzu-h2.bzu-h2.bzu-h2 { font-family: var(--font-heading) !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--bz-navy) !important; margin: 0 0 16px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .bzu-h2.bzu-h2.bzu-h2.bzu-h2 { font-size: 44px !important; } }
  .bzu-intro { font-family: var(--font-main) !important; font-size: 17px !important; color: #6b7280 !important; line-height: 1.7 !important; max-width: 600px !important; margin-bottom: 56px !important; }
  .bzu-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important; }
  @media (min-width: 768px) { .bzu-grid { grid-template-columns: repeat(3, 1fr) !important; } }
  .bzu-card { background: white !important; border: 1px solid #f3f4f6 !important; border-radius: 20px !important; overflow: hidden !important; }
  .bzu-card-img { width: 100% !important; height: 200px !important; background: #f8f9fb !important; object-fit: cover !important; }
  .bzu-card-body { padding: 24px !important; }
  .bzu-card-title { font-family: var(--font-main) !important; font-size: 18px !important; color: var(--bz-navy) !important; margin-bottom: 8px !important; }
  .bzu-card-desc { font-family: var(--font-main) !important; font-size: 14px !important; color: #6b7280 !important; line-height: 1.6 !important; }
</style>

<section id="bz-usecases">
  <div class="bzu-container">
    <div class="bzu-label">Use Cases</div>
    <h2 class="bzu-h2">What Does Buddzee Actually Do?</h2>
    <p class="bzu-intro">Here\u2019s what it looks like when your data actually works for you.</p>
    <div class="bzu-grid">
      <div class="bzu-card">
        <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/buddzee/use-case-dashboard.jpg" alt="Buddzee Dashboard" class="bzu-card-img">
        <div class="bzu-card-body">
          <div class="bzu-card-title">Ask Anything, Get Instant Answers</div>
          <div class="bzu-card-desc">\u2018How did we go last month?\u2019 \u2018Who are our top customers?\u2019 \u2018What\u2019s our pipeline looking like?\u2019 Buddzee tells you in seconds \u2014 no spreadsheets, no digging.</div>
        </div>
      </div>
      <div class="bzu-card">
        <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/buddzee/use-case-sync.jpg" alt="Buddzee Automation" class="bzu-card-img">
        <div class="bzu-card-body">
          <div class="bzu-card-title">Automate the Boring Stuff</div>
          <div class="bzu-card-desc">Buddzee spots repetitive patterns and handles them in the background. Invoice reminders, status updates, report generation \u2014 less admin, fewer mistakes.</div>
        </div>
      </div>
      <div class="bzu-card">
        <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/buddzee/use-case-report.jpg" alt="Buddzee Reports" class="bzu-card-img">
        <div class="bzu-card-body">
          <div class="bzu-card-title">Reclaim Your Time</div>
          <div class="bzu-card-desc">Stop juggling tools and spreadsheets. Buddzee gives you the clarity to focus on what matters \u2014 or finally start that hobby you\u2019ve been putting off.</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const BuddzeeUseCases: React.FC = () => {
  const cases = [
    {
      title: 'Ask Anything, Get Instant Answers',
      desc: '\u2018How did we go last month?\u2019 \u2018Who are our top customers?\u2019 \u2018What\u2019s our pipeline looking like?\u2019 Buddzee tells you in seconds \u2014 no spreadsheets, no digging.',
      image: '/src/assets/images/buddzee/use-case-dashboard.jpg',
      alt: 'Buddzee Dashboard',
    },
    {
      title: 'Automate the Boring Stuff',
      desc: 'Buddzee spots repetitive patterns and handles them in the background. Invoice reminders, status updates, report generation \u2014 less admin, fewer mistakes.',
      image: '/src/assets/images/buddzee/use-case-sync.jpg',
      alt: 'Buddzee Automation',
    },
    {
      title: 'Reclaim Your Time',
      desc: 'Stop juggling tools and spreadsheets. Buddzee gives you the clarity to focus on what matters \u2014 or finally start that hobby you\u2019ve been putting off.',
      image: '/src/assets/images/buddzee/use-case-report.jpg',
      alt: 'Buddzee Reports',
    },
  ];

  return (
    <CopyWrapper blockName="BuddzeeUseCases" codeToCopy={BuddzeeUseCasesCode}>
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 uppercase tracking-[0.15em] mb-4" style={{ color: '#5284FF' }}>Use Cases</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight mb-4" style={{ color: '#09142B' }}>
            What Does Buddzee Actually Do?
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-[600px] mb-14">
            Here&rsquo;s what it looks like when your data actually works for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.title} className="bg-white border border-gray-100 rounded-[20px] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full h-[200px] object-cover"
                  style={{ background: '#f8f9fb' }}
                />
                <div className="p-6">
                  <div className="text-lg font-800 mb-2" style={{ color: '#09142B' }}>{c.title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
