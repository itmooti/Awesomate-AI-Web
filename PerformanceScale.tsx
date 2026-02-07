
import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const PerformanceScaleCode = `
<style>
  #performance { font-family: 'Inter', sans-serif; background: #ffffff; padding: 100px 0; border-top: 1px solid #f3f4f6; }
  .p-container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
  .p-header { text-align: center; margin-bottom: 80px; }
  .p-main-title { font-size: 48px; font-weight: 800; color: #0f1128; letter-spacing: -0.02em; margin-bottom: 24px; }
  .p-sub-title { font-size: 18px; color: #6b7280; max-width: 700px; margin: 0 auto; line-height: 1.6; font-weight: 500; }
  
  .p-layout { display: flex; flex-direction: column; gap: 48px; }
  @media (min-width: 1024px) {
    .p-layout { flex-direction: row; }
    .p-sidebar { width: 300px; flex-shrink: 0; }
  }
  
  .p-label { font-size: 32px; font-weight: 800; color: #0f1128; letter-spacing: -0.01em; position: sticky; top: 120px; }
  
  .p-grid { display: grid; grid-template-columns: 1fr; gap: 40px; flex-grow: 1; }
  @media (min-width: 768px) {
    .p-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (min-width: 1280px) {
    .p-grid { grid-template-columns: 1fr 1fr 1fr; }
  }
  
  .feat-card { display: flex; gap: 20px; align-items: flex-start; }
  .feat-icon { width: 32px; height: 32px; flex-shrink: 0; color: #1e63e9; margin-top: 4px; }
  .feat-content h3 { font-size: 18px; font-weight: 800; color: #0f1128; margin-bottom: 8px; }
  .feat-content p { font-size: 15px; color: #6b7280; line-height: 1.5; font-weight: 500; }
</style>

<section id="performance">
  <div class="p-container">
    <div class="p-header">
      <h2 class="p-main-title">A developer-first feature stack</h2>
      <p class="p-sub-title">Everything you need to run resource-intensive applications on a virtual private server: fast performance, complete control, and rock-solid reliability.</p>
    </div>

    <div class="p-layout">
      <div class="p-sidebar">
        <div class="p-label">Performance & scale</div>
      </div>
      
      <div class="p-grid">
        <div class="feat-card">
          <svg class="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          <div class="feat-content">
            <h3>AMD EPYC processors</h3>
            <p>Modern cores deliver low-latency compute for parallel jobs so your n8n VPS hosting stays responsive under load.</p>
          </div>
        </div>

        <div class="feat-card">
          <svg class="feat-icon" style="color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
          <div class="feat-content">
            <h3>NVMe SSD storage</h3>
            <p>Boost n8n self-hosted task execution with ultra-fast reads and writes.</p>
          </div>
        </div>

        <div class="feat-card">
          <svg class="feat-icon" style="color: #14b8a6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          <div class="feat-content">
            <h3>Unmetered bandwidth n8n</h3>
            <p>Your n8n web-hooks, triggers and API calls aren't hindered by overage fees.</p>
          </div>
        </div>

        <div class="feat-card">
          <svg class="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <div class="feat-content">
            <h3>Add resources on demand</h3>
            <p>Scale CPU/RAM and disk space as needs grow—no rebuild required.</p>
          </div>
        </div>

        <div class="feat-card">
          <svg class="feat-icon" style="color: #4338ca;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <div class="feat-content">
            <h3>Handles traffic spikes</h3>
            <p>Keep flows steady during launches; capacity scales to absorb concurrency.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const PerformanceScale: React.FC = () => {
  return (
    <CopyWrapper blockName="Performance" codeToCopy={PerformanceScaleCode}>
      <section id="performance" className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-900 text-brand-navy mb-8 tracking-tight">A developer-first feature stack</h2>
          <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Everything you need to run resource-intensive applications on a virtual private server: fast performance, complete control, and rock-solid reliability.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-80 flex-shrink-0">
              <div className="text-3xl lg:text-4xl font-900 text-brand-navy lg:sticky lg:top-32 tracking-tight">Performance & scale</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 flex-grow">
              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 flex-shrink-0 text-brand-blue group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-800 text-brand-navy mb-3">AMD EPYC processors</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Modern cores deliver low-latency compute for parallel jobs so your n8n VPS hosting stays responsive under load.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 flex-shrink-0 text-emerald-500 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-800 text-brand-navy mb-3">NVMe SSD storage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Boost n8n self-hosted task execution with ultra-fast reads and writes.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 flex-shrink-0 text-teal-500 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-800 text-brand-navy mb-3">Unmetered bandwidth n8n</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Your n8n web-hooks, triggers and API calls aren't hindered by overage fees.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 flex-shrink-0 text-brand-blue group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-800 text-brand-navy mb-3">Add resources on demand</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Scale CPU/RAM and disk space as needs grow—no rebuild required.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 flex-shrink-0 text-indigo-700 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-800 text-brand-navy mb-3">Handles traffic spikes</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Keep flows steady during launches; capacity scales to absorb concurrency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
