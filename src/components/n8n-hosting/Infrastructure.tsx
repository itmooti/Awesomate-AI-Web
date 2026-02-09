import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const InfraCode = `
<style>
  @keyframes n8i-gridPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
  @keyframes n8i-float { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(30px, -30px); } 66% { transform: translate(-20px, 20px); } }

  #n8-infra {
    position: relative !important;
    padding: 120px 0 !important;
    background: var(--color-bg-dark, #0a0e1a) !important;
    overflow: hidden !important;
  }
  .n8i-grid-bg {
    position: absolute !important; top: 0 !important; left: 0 !important;
    right: 0 !important; bottom: 0 !important;
    background-image: linear-gradient(rgba(233,72,77,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(233,72,77,0.03) 1px, transparent 1px) !important;
    background-size: 50px 50px !important; opacity: 0.5 !important;
    animation: n8i-gridPulse 8s ease-in-out infinite !important;
    pointer-events: none !important;
  }
  .n8i-glow {
    position: absolute !important; border-radius: 50% !important;
    filter: blur(80px) !important; animation: n8i-float 20s ease-in-out infinite !important;
    z-index: 0 !important; pointer-events: none !important;
    width: 400px !important; height: 400px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.1), transparent) !important;
    top: -100px !important; left: -100px !important;
  }
  .n8i-glow-2 {
    position: absolute !important; border-radius: 50% !important;
    filter: blur(80px) !important; z-index: 0 !important; pointer-events: none !important;
    width: 300px !important; height: 300px !important;
    background: radial-gradient(circle, rgba(30,99,233,0.08), transparent) !important;
    bottom: -50px !important; right: 10% !important;
  }
  .n8i-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8i-layout {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 60px !important; align-items: center !important;
  }
  @media (min-width: 1024px) {
    .n8i-layout { grid-template-columns: 1fr 1fr !important; gap: 100px !important; }
  }
  .n8i-label {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    padding: 8px 16px !important; border-radius: 100px !important;
    background: rgba(233,72,77,0.08) !important; border: 1px solid rgba(233,72,77,0.2) !important;
    font-family: var(--font-main) !important; font-size: 11px !important;
    font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 24px !important;
  }
  .n8i-dot {
    width: 6px !important; height: 6px !important;
    background: var(--color-2) !important; border-radius: 50% !important;
  }
  .n8i-h2.n8i-h2.n8i-h2.n8i-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.1 !important;
    color: white !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8i-h2.n8i-h2.n8i-h2.n8i-h2 { font-size: 52px !important; }
  }
  .n8i-body {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: rgba(255,255,255,0.6) !important; line-height: 1.7 !important;
    margin-bottom: 32px !important; font-weight: 500 !important;
  }
  .n8i-body strong { color: var(--color-2) !important; }
  .n8i-callout {
    background: rgba(239,149,99,0.06) !important;
    border-left: 4px solid var(--color-3) !important;
    padding: 28px 32px !important; border-radius: 0 16px 16px 0 !important;
    margin-bottom: 32px !important;
  }
  .n8i-callout-label {
    font-family: var(--font-main) !important; font-size: 11px !important;
    font-weight: 800 !important; color: var(--color-3) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 8px !important;
  }
  .n8i-callout-text {
    font-family: serif !important; font-size: 16px !important;
    font-style: italic !important; color: rgba(255,255,255,0.8) !important;
    line-height: 1.7 !important;
  }
  .n8i-checks {
    display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 12px !important;
  }
  .n8i-check {
    font-family: var(--font-main) !important; font-size: 14px !important;
    font-weight: 700 !important; color: white !important;
    background: rgba(255,255,255,0.03) !important; padding: 12px 16px !important;
    border-radius: 10px !important; border: 1px solid rgba(255,255,255,0.06) !important;
    transition: all 0.2s !important;
  }
  .n8i-check:hover {
    background: rgba(233,72,77,0.06) !important;
    border-color: rgba(233,72,77,0.15) !important;
  }
  .n8i-check-mark { color: var(--color-2) !important; margin-right: 8px !important; }
  .n8i-cluster {
    position: relative !important; padding: 60px 50px !important;
    background: rgba(15,23,42,0.6) !important; border-radius: 32px !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5) !important;
    backdrop-filter: blur(20px) !important;
  }
  .n8i-nodes {
    display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important;
  }
  .n8i-node {
    background: rgba(255,255,255,0.03) !important;
    border: 2px solid rgba(233,72,77,0.2) !important;
    border-radius: 20px !important; padding: 32px 20px !important;
    text-align: center !important; transition: all 0.3s !important;
  }
  .n8i-node:hover {
    background: rgba(233,72,77,0.06) !important;
    border-color: var(--color-2) !important;
  }
  .n8i-node-dot {
    width: 12px !important; height: 12px !important; border-radius: 50% !important;
    background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important;
    margin: 0 auto 16px !important;
    box-shadow: 0 0 16px rgba(233,72,77,0.4) !important;
  }
  .n8i-node-label {
    color: white !important; font-size: 11px !important;
    font-weight: 800 !important; font-family: var(--font-mono) !important;
    letter-spacing: 0.1em !important;
  }
</style>

<section id="n8-infra">
  <div class="n8i-grid-bg"></div>
  <div class="n8i-glow"></div>
  <div class="n8i-glow-2"></div>

  <div class="n8i-container">
    <div class="n8i-layout">
      <div>
        <div class="n8i-label"><span class="n8i-dot"></span> ALWAYS-ON INFRASTRUCTURE</div>
        <h2 class="n8i-h2">Built So Your Business Never Goes Offline</h2>
        <p class="n8i-body">Most hosting is like a single lightbulb: when it pops, you're in the dark. We give you a massive generator that never blinks. We run <strong>three identical live copies</strong> of your data at all times.</p>

        <div class="n8i-callout">
          <div class="n8i-callout-label">The Airplane Rule</div>
          <p class="n8i-callout-text">"You wouldn't fly a plane with only one engine. If that engine fails, you're in trouble. We fly with three. If one has a problem, the other two keep you in the air."</p>
        </div>

        <div class="n8i-checks">
          <div class="n8i-check"><span class="n8i-check-mark">&#10003;</span> 3 Live copies</div>
          <div class="n8i-check"><span class="n8i-check-mark">&#10003;</span> Instant Switch-over</div>
          <div class="n8i-check"><span class="n8i-check-mark">&#10003;</span> No Offline Downtime</div>
          <div class="n8i-check"><span class="n8i-check-mark">&#10003;</span> Fixes Itself Automatically</div>
        </div>
      </div>

      <div>
        <div class="n8i-cluster">
          <div class="n8i-nodes">
            <div class="n8i-node"><div class="n8i-node-dot"></div><div class="n8i-node-label">COPY 1</div></div>
            <div class="n8i-node"><div class="n8i-node-dot"></div><div class="n8i-node-label">COPY 2</div></div>
            <div class="n8i-node"><div class="n8i-node-dot"></div><div class="n8i-node-label">COPY 3</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const Infrastructure: React.FC = () => {
  return (
    <CopyWrapper blockName="Infrastructure" codeToCopy={InfraCode}>
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0e1a]">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes n8iGridPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
          @keyframes n8iFloat { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(20px, -20px); } 66% { transform: translate(-10px, 10px); } }
        ` }} />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(233,72,77,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(233,72,77,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30 animate-[n8iGridPulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-brand-accent/10 blur-[100px] rounded-full animate-[n8iFloat_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-50px] right-[10%] w-[300px] h-[300px] bg-brand-blue/[0.08] blur-[80px] rounded-full" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/[0.08] border border-brand-accent/20 text-brand-accent text-[11px] font-800 mb-6 tracking-[0.15em] uppercase">
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                ALWAYS-ON INFRASTRUCTURE
              </div>
              <h2 className="text-4xl lg:text-[52px] font-heading font-800 text-white mb-6 leading-[1.1] tracking-tight">
                Built So Your Business Never Goes Offline
              </h2>
              <p className="text-lg text-white/60 font-500 mb-8 leading-relaxed max-w-2xl">
                Most hosting is like a single lightbulb: when it pops, you're in the dark. We give you a massive generator that never blinks. We run <strong className="text-brand-accent">three identical live copies</strong> of your data at all times.
              </p>

              <div className="bg-brand-orange/[0.06] border-l-4 border-brand-orange p-7 rounded-r-2xl mb-8">
                <h4 className="text-[11px] font-800 text-brand-orange uppercase tracking-[0.15em] mb-2">The Airplane Rule</h4>
                <p className="text-base text-white/80 font-500 italic leading-relaxed font-serif">
                  "You wouldn't fly a plane with only one engine. If that engine fails, you're in trouble. We fly with three. If one has a problem, the other two keep you in the air."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {['3 Live copies', 'Instant Switch-over', 'No Offline Downtime', 'Fixes Itself Automatically'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-700 text-white bg-white/[0.03] border border-white/[0.06] p-3 rounded-lg hover:bg-brand-accent/[0.06] hover:border-brand-accent/15 transition-all cursor-default">
                    <span className="text-brand-accent">&#10003;</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-[32px] p-12 lg:p-16 relative overflow-hidden border border-white/[0.08]">
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {['COPY 1', 'COPY 2', 'COPY 3'].map((label) => (
                    <div key={label} className="bg-white/[0.03] border-2 border-brand-accent/20 rounded-2xl p-6 text-center hover:bg-brand-accent/[0.06] hover:border-brand-accent transition-all duration-500">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-brand-accent to-brand-orange mx-auto mb-4 shadow-[0_0_16px_rgba(233,72,77,0.4)]" />
                      <div className="text-[11px] font-mono font-800 text-white tracking-widest">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
