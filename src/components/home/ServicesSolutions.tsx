import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ghBase = 'https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/services';

const ServicesSolutionsCode = `
<style>
  #hm-sol {
    padding: 100px 0 !important;
    background: #ffffff !important;
  }
  .hm-sol-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  @media (min-width: 768px) {
    .hm-sol-container { padding: 0 48px !important; }
  }
  .hm-sol-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-sol-h2.hm-sol-h2.hm-sol-h2.hm-sol-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 16px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .hm-sol-h2.hm-sol-h2.hm-sol-h2.hm-sol-h2 { font-size: 48px !important; }
  }
  .hm-sol-intro {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 600px !important; margin: 0 0 64px !important;
  }
  .hm-sol-rows {
    display: flex !important; flex-direction: column !important; gap: 0 !important;
  }
  .hm-sol-row {
    display: grid !important; grid-template-columns: 1fr !important; gap: 32px !important;
    padding: 40px 0 !important; border-top: 1px solid #f3f4f6 !important;
    align-items: center !important;
  }
  .hm-sol-row:last-child {
    border-bottom: 1px solid #f3f4f6 !important;
  }
  @media (min-width: 768px) {
    .hm-sol-row {
      grid-template-columns: 280px 1fr !important; gap: 48px !important;
      padding: 48px 0 !important;
    }
  }
  @media (min-width: 1024px) {
    .hm-sol-row {
      grid-template-columns: 360px 1fr !important; gap: 64px !important;
    }
  }
  .hm-sol-img {
    width: 100% !important; height: auto !important;
    border-radius: 16px !important; display: block !important;
    object-fit: cover !important; aspect-ratio: 3/2 !important;
  }
  .hm-sol-content {
    display: flex !important; flex-direction: column !important; gap: 16px !important;
  }
  .hm-sol-question.hm-sol-question.hm-sol-question.hm-sol-question {
    font-family: var(--font-heading) !important;
    font-size: 22px !important; line-height: 1.3 !important;
    color: var(--color-1) !important; margin: 0 !important;
    letter-spacing: -0.01em !important;
  }
  @media (min-width: 768px) {
    .hm-sol-question.hm-sol-question.hm-sol-question.hm-sol-question {
      font-size: 26px !important;
    }
  }
  .hm-sol-answer {
    display: flex !important; flex-direction: column !important; gap: 12px !important;
  }
  .hm-sol-pill {
    display: inline-flex !important; align-items: center !important;
    font-family: var(--font-main) !important; font-size: 11px !important;
    font-weight: 700 !important; text-transform: uppercase !important;
    letter-spacing: 0.1em !important; padding: 4px 12px !important;
    border-radius: 100px !important; width: fit-content !important;
  }
  .hm-sol-pill-red {
    background: rgba(233,72,77,0.08) !important; color: var(--color-2) !important;
  }
  .hm-sol-pill-blue {
    background: rgba(82,132,255,0.08) !important; color: #5284FF !important;
  }
  .hm-sol-pill-orange {
    background: rgba(239,149,99,0.08) !important; color: var(--color-3) !important;
  }
  .hm-sol-text {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #4b5563 !important; line-height: 1.7 !important; margin: 0 !important;
  }
  .hm-sol-link {
    display: inline-flex !important; align-items: center !important; gap: 6px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    font-weight: 600 !important; text-decoration: none !important;
    transition: gap 0.2s !important;
  }
  .hm-sol-link:hover { gap: 10px !important; }
  .hm-sol-link-red { color: var(--color-2) !important; }
  .hm-sol-link-blue { color: #5284FF !important; }
  .hm-sol-link-orange { color: var(--color-3) !important; }
  .hm-sol-link svg {
    width: 16px !important; height: 16px !important;
    transition: transform 0.2s !important;
  }
  .hm-sol-link:hover svg { transform: translateX(2px) !important; }
</style>

<section id="hm-sol">
  <div class="hm-sol-container">
    <span class="hm-sol-label">Real Problems, Simple Solutions</span>
    <h2 class="hm-sol-h2">Sound familiar?</h2>
    <p class="hm-sol-intro">Running a small business means wearing every hat. These are the problems our clients kept telling us about — so we built the solutions.</p>

    <div class="hm-sol-rows">

      <div class="hm-sol-row">
        <img src="${ghBase}/automation.png" alt="Business owner relaxing while automations run" class="hm-sol-img" />
        <div class="hm-sol-content">
          <h3 class="hm-sol-question">\u201CI\u2019m spending hours on tasks that should take minutes.\u201D</h3>
          <div class="hm-sol-answer">
            <span class="hm-sol-pill hm-sol-pill-red">n8n Hosting</span>
            <p class="hm-sol-text">We build automations that handle the repetitive stuff \u2014 data entry, follow-ups, reporting \u2014 so you can focus on running your business.</p>
            <a href="/n8n-hosting" class="hm-sol-link hm-sol-link-red">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
          </div>
        </div>
      </div>

      <div class="hm-sol-row">
        <img src="${ghBase}/data-clarity.png" alt="Business owner viewing unified data dashboard" class="hm-sol-img" />
        <div class="hm-sol-content">
          <h3 class="hm-sol-question">\u201CMy business data is scattered across a dozen different tools.\u201D</h3>
          <div class="hm-sol-answer">
            <span class="hm-sol-pill hm-sol-pill-blue">Buddzee</span>
            <p class="hm-sol-text">We connect everything into one place and give you an AI assistant that actually understands your numbers.</p>
            <a href="/buddzee" class="hm-sol-link hm-sol-link-blue">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
          </div>
        </div>
      </div>

      <div class="hm-sol-row">
        <img src="${ghBase}/custom-app.png" alt="Entrepreneur showing custom app on phone" class="hm-sol-img" />
        <div class="hm-sol-content">
          <h3 class="hm-sol-question">\u201CI need an app but can\u2019t afford a dev team.\u201D</h3>
          <div class="hm-sol-answer">
            <span class="hm-sol-pill hm-sol-pill-orange">Custom Apps</span>
            <p class="hm-sol-text">We build custom apps fast using AI, and train your team to keep them running. No six-figure budget required.</p>
            <a href="/custom-apps" class="hm-sol-link hm-sol-link-orange">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
`;

export const ServicesSolutions: React.FC = () => {
  return (
    <CopyWrapper blockName="ServicesSolutions" codeToCopy={ServicesSolutionsCode}>
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="inline-block text-xs text-brand-accent uppercase tracking-[0.15em] mb-4 font-sans">Real Problems, Simple Solutions</span>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-navy tracking-tight mb-4">Sound familiar?</h2>
          <p className="font-sans text-[17px] text-gray-500 leading-relaxed max-w-[600px] mb-16">
            Running a small business means wearing every hat. These are the problems our clients kept telling us about — so we built the solutions.
          </p>

          <div className="flex flex-col">

            {/* Row 1: n8n Hosting */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-8 md:gap-12 lg:gap-16 py-10 md:py-12 border-t border-gray-100 items-center">
              <img src="/src/assets/services/automation.png" alt="Business owner relaxing while automations run" className="w-full rounded-2xl object-cover aspect-[3/2]" />
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[22px] md:text-[26px] text-brand-navy leading-tight tracking-tight m-0">
                  &ldquo;I&rsquo;m spending hours on tasks that should take minutes.&rdquo;
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit bg-red-50 text-brand-accent">n8n Hosting</span>
                  <p className="font-sans text-base text-gray-600 leading-relaxed m-0">
                    We build automations that handle the repetitive stuff — data entry, follow-ups, reporting — so you can focus on running your business.
                  </p>
                  <a href="#n8n-hosting" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2: Buddzee */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-8 md:gap-12 lg:gap-16 py-10 md:py-12 border-t border-gray-100 items-center">
              <img src="/src/assets/services/data-clarity.png" alt="Business owner viewing unified data dashboard" className="w-full rounded-2xl object-cover aspect-[3/2]" />
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[22px] md:text-[26px] text-brand-navy leading-tight tracking-tight m-0">
                  &ldquo;My business data is scattered across a dozen different tools.&rdquo;
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit" style={{ background: 'rgba(82,132,255,0.08)', color: '#5284FF' }}>Buddzee</span>
                  <p className="font-sans text-base text-gray-600 leading-relaxed m-0">
                    We connect everything into one place and give you an AI assistant that actually understands your numbers.
                  </p>
                  <a href="#buddzee" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: '#5284FF' }}>
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 3: Custom Apps */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr] gap-8 md:gap-12 lg:gap-16 py-10 md:py-12 border-t border-b border-gray-100 items-center">
              <img src="/src/assets/services/custom-app.png" alt="Entrepreneur showing custom app on phone" className="w-full rounded-2xl object-cover aspect-[3/2]" />
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[22px] md:text-[26px] text-brand-navy leading-tight tracking-tight m-0">
                  &ldquo;I need an app but can&rsquo;t afford a dev team.&rdquo;
                </h3>
                <div className="flex flex-col gap-3">
                  <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit bg-orange-50 text-brand-orange">Custom Apps</span>
                  <p className="font-sans text-base text-gray-600 leading-relaxed m-0">
                    We build custom apps fast using AI, and train your team to keep them running. No six-figure budget required.
                  </p>
                  <a href="#custom-apps" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
