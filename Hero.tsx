
import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const HeroCode = `
<section id="hero" style="position: relative; padding: 120px 0; background: var(--color-5); overflow: hidden; text-align: center;">
    <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 1000px; height: 600px; background: radial-gradient(circle, rgba(233,72,77,0.05) 0%, transparent 70%); border-radius: 50%; blur: 80px; z-index: 0;"></div>
    
    <div class="i-container" style="position: relative; z-index: 1;">
        <div class="label" style="display: inline-flex; align-items: center; px: 16px; py: 6px; background: rgba(15,17,40,0.05); color: var(--color-1); border-radius: 100px; margin-bottom: 48px; border: 1px solid rgba(15,17,40,0.1);">
            Enterprise-Grade n8n Hosting
        </div>
        
        <h1 class="h1" style="max-width: 1000px; margin: 0 auto 40px auto;">
            n8n Hosting That <br/> <span class="accent-gradient-text">Never Goes Down</span>
        </h1>
        
        <p class="body-text" style="font-size: 22px; max-width: 800px; margin: 0 auto 64px auto;">
            Run n8n on infrastructure designed for automation businesses that can’t afford outages, data loss, or slow recovery.
        </p>
        
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; margin-bottom: 64px;">
            <div style="font-weight: 700; color: var(--color-1); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: var(--color-2); border-radius: 50%;"></span> Built for serious workflows
            </div>
            <div style="font-weight: 700; color: var(--color-1); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: var(--color-2); border-radius: 50%;"></span> Instant failover
            </div>
            <div style="font-weight: 700; color: var(--color-1); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: var(--color-2); border-radius: 50%;"></span> Backups every 30m
            </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 24px; align-items: center; justify-content: center;">
            <a href="#pricing" class="button" style="background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%); color: white; padding: 24px 48px; text-decoration: none; font-size: 18px; box-shadow: 0 20px 40px rgba(233,72,77,0.2);">
                Get Managed n8n Hosting
            </a>
            <a href="#how-it-works" class="body-text" style="font-weight: 700; text-decoration: none; color: var(--color-1);">
                See how it’s different →
            </a>
        </div>
    </div>
</section>
`;

export const Hero: React.FC = () => {
  return (
    <CopyWrapper blockName="Hero" codeToCopy={HeroCode}>
      <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-brand-accent/5 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-[11px] font-800 mb-12 tracking-[0.2em] uppercase border border-brand-navy/10">
            Enterprise-Grade n8n Hosting
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-800 leading-[1.05] tracking-tight text-brand-navy mb-10 max-w-5xl mx-auto">
            n8n Hosting That <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-orange to-brand-accent">Never Goes Down</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Run n8n on infrastructure designed for automation businesses that can’t afford outages, data loss, or slow recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-16">
            <div className="flex items-center gap-3 text-[15px] font-700 text-brand-navy">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div> Built for serious workflows
            </div>
            <div className="flex items-center gap-3 text-[15px] font-700 text-brand-navy">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div> Instant failover, not cold restores
            </div>
            <div className="flex items-center gap-3 text-[15px] font-700 text-brand-navy">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div> Backups every 30 minutes
            </div>
            <div className="flex items-center gap-3 text-[15px] font-700 text-brand-navy">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div> Fully managed — no babysitting
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-brand-accent to-brand-orange text-white px-12 py-6 rounded-brand text-lg font-800 shadow-2xl shadow-brand-accent/30 hover:scale-[1.02] transition-all">
              Get Managed n8n Hosting
            </button>
            <button className="group flex items-center gap-3 text-brand-navy px-8 py-5 text-lg font-700 hover:text-brand-accent transition-colors">
              See how it’s different 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
