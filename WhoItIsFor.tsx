
import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const WhoItIsForCode = `
<style>
  #who-this-is-for { font-family: 'Inter', sans-serif; background: #f9fafb; padding: 100px 0; }
  .w-container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
  .w-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 32px; }
  @media (min-width: 768px) { .w-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .w-grid { grid-template-columns: repeat(4, 1fr); } }
  
  .w-card { background: white; padding: 40px; border-radius: 16px; border: 1px solid #f3f4f6; transition: all 0.3s; }
  .w-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(15, 17, 40, 0.05); }
  .w-icon { width: 48px; height: 48px; background: #e9484d10; color: #e9484d; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; font-weight: 800; font-size: 20px; }
  .w-title { font-size: 18px; font-weight: 800; color: #0f1128; margin-bottom: 12px; }
  .w-desc { font-size: 15px; color: #6b7280; line-height: 1.6; }
  .w-header { text-align: center; margin-bottom: 64px; }
  .w-main-title { font-size: 42px; font-weight: 800; color: #0f1128; margin-bottom: 16px; letter-spacing: -0.02em; }
</style>

<section id="who-this-is-for">
  <div class="w-container">
    <div class="w-header">
      <h2 class="w-main-title">Built for people who rely on automation</h2>
      <p style="color: #6b7280; font-size: 18px; max-width: 600px; margin: 0 auto;">Enterprises and growing businesses that have outgrown "standard" hosting.</p>
    </div>
    <div class="w-grid">
      <div class="w-card">
        <div class="w-icon">A</div>
        <h3 class="w-title">Agencies</h3>
        <p class="w-desc">Running mission-critical client workflows that simply cannot fail during business hours.</p>
      </div>
      <div class="w-card">
        <div class="w-icon">S</div>
        <h3 class="w-title">SaaS Products</h3>
        <p class="w-desc">Powered by n8n behind the scenes. Your product is only as reliable as your backend.</p>
      </div>
      <div class="w-card">
        <div class="w-icon">O</div>
        <h3 class="w-title">Internal Ops</h3>
        <p class="w-desc">Scaling teams with complex automation needs that require 24/7 uptime and stability.</p>
      </div>
      <div class="w-card">
        <div class="w-icon">E</div>
        <h3 class="w-title">Enterprise</h3>
        <p class="w-desc">Anyone tired of "hope the backup works" hosting and ready for real high-availability.</p>
      </div>
    </div>
  </div>
</section>
`;

export const WhoItIsFor: React.FC = () => {
  return (
    <CopyWrapper blockName="WhoItIsFor" codeToCopy={WhoItIsForCode}>
      <section id="who-this-is-for" className="py-24 lg:py-40 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-900 text-brand-navy mb-6 tracking-tight">Built for people who rely on automation</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Enterprises and growing businesses that have outgrown "standard" hosting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Agencies", d: "Running mission-critical client workflows that simply cannot fail during business hours.", i: "A" },
              { t: "SaaS Products", d: "Powered by n8n behind the scenes. Your product is only as reliable as your backend.", i: "S" },
              { t: "Internal Ops", d: "Scaling teams with complex automation needs that require 24/7 uptime and stability.", i: "O" },
              { t: "Enterprise", d: "Anyone tired of 'hope the backup works' hosting and ready for real high-availability.", i: "E" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center font-900 text-xl mb-6">{item.i}</div>
                <h3 className="text-xl font-800 text-brand-navy mb-4">{item.t}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
