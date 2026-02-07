
import React from 'react';
import { CopyWrapper } from './CopyWrapper';

const InfraCode = `
<style>
  /* High Availability Section - Redesigned for Ontraport Context */
  #how-it-works {
    position: relative !important;
    padding: 120px 0 !important;
    background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 50%, #0a0e1a 100%) !important;
    color: #ffffff !important;
    overflow: hidden !important;
  }

  /* Inherit fonts but override colors for dark section */
  #how-it-works .h2.h2.h2.h2 { color: #ffffff !important; font-size: 64px !important; }
  #how-it-works .body-text.body-text.body-text.body-text { color: #cbd5e1 !important; }
  #how-it-works .label.label.label.label { color: #10b981 !important; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); padding: 8px 16px; border-radius: 100px; }

  .bg-grid {
    position: absolute !important; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px) !important;
    background-size: 50px 50px !important; opacity: 0.5 !important; animation: gridPulse 8s ease-in-out infinite !important; pointer-events: none !important;
  }

  @keyframes gridPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }

  .glow-orb { position: absolute !important; border-radius: 50% !important; filter: blur(80px) !important; animation: float 20s ease-in-out infinite !important; z-index: 0 !important; pointer-events: none !important; }
  .glow-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(16,185,129,0.15), transparent) !important; top: -100px; left: -100px; }

  @keyframes float { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(30px, -30px); } 66% { transform: translate(-20px, 20px); } }

  .i-container { max-width: 1400px !important; margin: 0 auto !important; padding: 0 40px !important; position: relative !important; z-index: 1 !important; }
  .i-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 100px !important; align-items: center !important; }
  @media (max-width: 1024px) { .i-grid { grid-template-columns: 1fr !important; gap: 60px !important; } }

  .cluster-wrap {
    position: relative !important; padding: 60px 50px !important; background: rgba(15, 23, 42, 0.6) !important;
    border-radius: 32px !important; border: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5) !important; backdrop-filter: blur(20px) !important;
  }

  .node { background: rgba(255, 255, 255, 0.03) !important; border: 2px solid rgba(16, 185, 129, 0.3) !important; border-radius: 20px !important; padding: 32px 20px !important; text-align: center !important; }
  .node-label { color: white !important; font-size: 13px !important; font-weight: 800 !important; font-family: var(--font-mono) !important; }
</style>

<section id="how-it-works">
  <div class="bg-grid"></div>
  <div class="glow-orb glow-orb-1"></div>
  
  <div class="i-container">
    <div class="i-grid">
      <div>
        <div class="label">HIGH-AVAILABILITY ARCHITECTURE</div>
        
        <h2 class="h2">If your automation stops, your business stops.</h2>
        
        <p class="body-text" style="font-size: 20px; margin-bottom: 32px;">
          Most hosting is like a single lightbulb: when it pops, you're in the dark. We give you a massive generator that never blinks. We run <strong>three identical live copies</strong> of your data at all times.
        </p>
        
        <div style="background: rgba(239, 149, 99, 0.05); border-left: 4px solid #ef9563; padding: 28px 32px; border-radius: 0 16px 16px 0; margin-bottom: 40px;">
          <h4 class="label" style="color: #ef9563 !important;">The Airplane Rule</h4>
          <p class="body-text" style="font-style: italic; color: #e2e8f0 !important; font-family: serif !important;">"You wouldn't fly a plane with only one engine. If that engine fails, you're in trouble. We fly with three. If one has a problem, the other two keep you in the air."</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="body-text" style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); color: #fff !important; font-weight: 700;">✓ 3 Live copies</div>
          <div class="body-text" style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); color: #fff !important; font-weight: 700;">✓ 1-Sec Switch-over</div>
        </div>
      </div>

      <div style="position: relative;">
        <div class="cluster-wrap">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
            <div class="node"><div class="node-label">MASTER 1</div></div>
            <div class="node"><div class="node-label">MASTER 2</div></div>
            <div class="node"><div class="node-label">MASTER 3</div></div>
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
      <section id="how-it-works-preview" className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0e1a]">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes gridPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
          @keyframes float { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(20px, -20px); } 66% { transform: translate(-10px, 10px); } }
          @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes dash { to { stroke-dashoffset: -100; } }
          @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }
        ` }} />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30 animate-[gridPulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full animate-[float_20s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-50px] right-[10%] w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full animate-[float_20s_ease-in-out_infinite_5s]"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[11px] font-900 mb-8 tracking-widest uppercase">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                HIGH-AVAILABILITY ARCHITECTURE
              </div>
              <h2 className="text-4xl lg:text-7xl font-heading font-800 text-white mb-8 leading-[1.05] tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                If your automation stops, your business stops.
              </h2>
              <p className="text-xl text-slate-300 font-medium mb-10 leading-relaxed max-w-2xl">
                Most hosting is like a single lightbulb: when it pops, you're in the dark. We give you a massive generator that never blinks. We run <strong className="text-green-500">three identical live copies</strong> of your data at all times.
              </p>
              
              <div className="bg-orange-500/5 border-l-4 border-orange-400 p-8 rounded-r-2xl mb-10 backdrop-blur-md">
                <h4 className="text-xs font-900 text-orange-400 uppercase tracking-widest mb-3">The Airplane Rule</h4>
                <p className="text-lg text-slate-200 font-medium italic leading-relaxed font-serif">
                  "You wouldn't fly a plane with only one engine. If that engine fails, you're in trouble. We fly with three. If one has a problem, the other two keep you in the air without anyone even noticing."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  "3 Live copies (Always On)",
                  "1-Second Switch-over",
                  "No 'Offline' Downtime",
                  "Self-Healing Technology"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] font-800 text-slate-100 bg-white/5 border border-white/5 p-3 rounded-lg hover:bg-green-500/5 hover:border-green-500/20 transition-all cursor-default">
                    <span className="text-green-500">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-[40px] p-12 lg:p-20 relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] animate-[rotate_20s_linear_infinite]"></div>
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {["MASTER 1", "MASTER 2", "MASTER 3"].map((label, i) => (
                    <div key={i} className="bg-white/5 border-2 border-green-500/30 rounded-3xl p-6 text-center hover:bg-green-500/10 hover:border-green-500 transition-all duration-500 group">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-5 shadow-[0_0_20px_#10b981] animate-pulse"></div>
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
