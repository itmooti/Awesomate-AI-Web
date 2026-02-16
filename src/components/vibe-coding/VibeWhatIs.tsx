import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const VibeWhatIsCode = `
<style>
  #vcw-section { padding: 80px 0 !important; background: var(--color-bg-dark, #0a0e1a) !important; position: relative !important; overflow: hidden !important; }
  .vcw-aurora { position: absolute !important; inset: 0 !important; pointer-events: none !important; overflow: hidden !important; }
  .vcw-aurora svg { position: absolute !important; width: 100% !important; height: 100% !important; }
  .vcw-container { max-width: 900px !important; margin: 0 auto !important; padding: 0 24px !important; text-align: center !important; position: relative !important; z-index: 1 !important; }
  .vcw-h2.vcw-h2.vcw-h2.vcw-h2 { font-family: var(--font-heading) !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-5, #ffffff) !important; margin: 0 0 12px !important; letter-spacing: -0.02em !important; text-shadow: 0 2px 16px rgba(0,0,0,0.5) !important; }
  @media (min-width: 768px) { .vcw-h2.vcw-h2.vcw-h2.vcw-h2 { font-size: 44px !important; } }
  .vcw-sub { font-family: var(--font-main) !important; font-size: 17px !important; color: rgba(255,255,255,0.55) !important; line-height: 1.7 !important; max-width: 600px !important; margin: 0 auto 56px !important; }
  .vcw-flow { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 32px !important; }
  @media (min-width: 768px) { .vcw-flow { flex-direction: row !important; justify-content: center !important; align-items: flex-start !important; gap: 0 !important; } }
  .vcw-step { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; flex: 1 !important; max-width: 220px !important; }
  .vcw-icon { width: 100px !important; height: 100px !important; margin-bottom: 20px !important; }
  .vcw-step-label { font-family: var(--font-main) !important; font-size: 11px !important; text-transform: uppercase !important; letter-spacing: 0.1em !important; color: var(--color-3) !important; margin-bottom: 8px !important; }
  .vcw-step-title { font-family: var(--font-heading) !important; font-size: 20px !important; color: #ffffff !important; margin-bottom: 8px !important; }
  .vcw-step-desc { font-family: var(--font-main) !important; font-size: 14px !important; color: rgba(255,255,255,0.45) !important; line-height: 1.6 !important; }
  .vcw-arrow { display: none !important; }
  @media (min-width: 768px) {
    .vcw-arrow { display: flex !important; align-items: center !important; padding-top: 40px !important; margin: 0 20px !important; }
  }
  .vcw-arrow svg { width: 40px !important; height: 24px !important; }
  .vcw-footnote { font-family: var(--font-main) !important; font-size: 14px !important; color: rgba(255,255,255,0.35) !important; margin-top: 48px !important; font-style: italic !important; }
  .vcw-footnote strong { color: var(--color-3) !important; font-style: normal !important; }
</style>

<section id="vcw-section">
  <!-- Aurora background -->
  <div class="vcw-aurora">
    <svg viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="vcw-blur1" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="70"/></filter>
        <filter id="vcw-blur2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="50"/></filter>
        <filter id="vcw-blur3" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="90"/></filter>
      </defs>
      <!-- Main neon orange sweep -->
      <ellipse cx="720" cy="380" rx="650" ry="200" fill="#ff8a2b" opacity="0.18" filter="url(#vcw-blur1)"/>
      <!-- Hot red accent left -->
      <ellipse cx="250" cy="320" rx="380" ry="160" fill="#ff3d4a" opacity="0.14" filter="url(#vcw-blur2)"/>
      <!-- Neon orange accent right -->
      <ellipse cx="1150" cy="350" rx="320" ry="140" fill="#ffaa3b" opacity="0.12" filter="url(#vcw-blur2)"/>
      <!-- Blue accent top -->
      <ellipse cx="720" cy="80" rx="550" ry="120" fill="#3b7fff" opacity="0.08" filter="url(#vcw-blur3)"/>
      <!-- Hot centre glow -->
      <ellipse cx="720" cy="300" rx="250" ry="100" fill="#ff6b35" opacity="0.2" filter="url(#vcw-blur3)"/>
      <!-- Tight neon core -->
      <ellipse cx="720" cy="350" rx="120" ry="50" fill="#ffcc44" opacity="0.12" filter="url(#vcw-blur2)"/>
    </svg>
  </div>

  <div class="vcw-container">
    <h2 class="vcw-h2" style="color: var(--color-5, #ffffff) !important;">So... What Is <span style="background: linear-gradient(135deg, var(--color-3) 0%, var(--color-2) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Vibe Coding</span>?</h2>
    <p class="vcw-sub">It's exactly what it sounds like. You tell us the vibe — we turn it into a real app. No jargon. No code. Just results.</p>

    <div class="vcw-flow">
      <!-- Step 1: You Describe -->
      <div class="vcw-step">
        <div class="vcw-icon">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" stroke-width="1.5" stroke-dasharray="4 3"/>
            <rect x="22" y="28" width="56" height="38" rx="12" fill="rgba(255,255,255,0.1)" stroke="#ef9563" stroke-width="2"/>
            <polygon points="38,66 44,66 36,76" fill="rgba(255,255,255,0.1)" stroke="#ef9563" stroke-width="2" stroke-linejoin="round"/>
            <rect x="32" y="39" width="28" height="3" rx="1.5" fill="#ffaa3b"/>
            <rect x="32" y="46" width="36" height="3" rx="1.5" fill="#ef9563" opacity="0.7"/>
            <rect x="32" y="53" width="20" height="3" rx="1.5" fill="#ef9563" opacity="0.45"/>
          </svg>
        </div>
        <div class="vcw-step-label">Step 1</div>
        <div class="vcw-step-title">You Describe It</div>
        <div class="vcw-step-desc">"I want an app where clients can book appointments and get reminders."</div>
      </div>

      <!-- Arrow -->
      <div class="vcw-arrow">
        <svg viewBox="0 0 40 24" fill="none"><path d="M2 12h32M28 5l8 7-8 7" stroke="#ffaa3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>
      </div>

      <!-- Step 2: AI Builds -->
      <div class="vcw-step">
        <div class="vcw-icon">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" stroke-width="1.5" stroke-dasharray="4 3"/>
            <rect x="28" y="30" width="44" height="40" rx="6" fill="rgba(255,255,255,0.1)" stroke="#ef9563" stroke-width="2"/>
            <rect x="34" y="38" width="14" height="2.5" rx="1" fill="#ff6b6b"/>
            <rect x="34" y="43" width="20" height="2.5" rx="1" fill="#ffaa3b"/>
            <rect x="34" y="48" width="10" height="2.5" rx="1" fill="#ff6b6b" opacity="0.8"/>
            <rect x="34" y="53" width="24" height="2.5" rx="1" fill="#ffaa3b" opacity="0.8"/>
            <rect x="34" y="58" width="16" height="2.5" rx="1" fill="#ff6b6b" opacity="0.6"/>
            <!-- sparkle top-right -->
            <path d="M76 20l1.5 4 1.5-4 4 1.5-4 1.5 4 1.5-4-1.5-1.5 4-1.5-4-4 1.5 4-1.5-4-1.5z" fill="#ffaa3b"/>
            <!-- sparkle bottom-left -->
            <path d="M18 70l1 3 1-3 3 1-3 1 3 1-3-1-1 3-1-3-3 1 3-1-3-1z" fill="#ff6b6b" opacity="0.8"/>
          </svg>
        </div>
        <div class="vcw-step-label">Step 2</div>
        <div class="vcw-step-title">AI Helps Us Build It</div>
        <div class="vcw-step-desc">We use AI-powered tools to build your app at incredible speed — no shortcuts on quality.</div>
      </div>

      <!-- Arrow -->
      <div class="vcw-arrow">
        <svg viewBox="0 0 40 24" fill="none"><path d="M2 12h32M28 5l8 7-8 7" stroke="#ffaa3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/></svg>
      </div>

      <!-- Step 3: You Get an App -->
      <div class="vcw-step">
        <div class="vcw-icon">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" stroke-width="1.5" stroke-dasharray="4 3"/>
            <!-- phone body -->
            <rect x="33" y="22" width="34" height="56" rx="8" fill="rgba(255,255,255,0.1)" stroke="#ef9563" stroke-width="2"/>
            <!-- screen -->
            <rect x="37" y="30" width="26" height="38" rx="3" fill="rgba(239,149,99,0.12)"/>
            <!-- screen content -->
            <rect x="40" y="34" width="20" height="4" rx="2" fill="#ffaa3b" opacity="0.8"/>
            <rect x="40" y="41" width="9" height="9" rx="2" fill="#ff6b6b" opacity="0.45"/>
            <rect x="51" y="41" width="9" height="9" rx="2" fill="#ef9563" opacity="0.45"/>
            <rect x="40" y="53" width="20" height="3" rx="1.5" fill="#ef9563" opacity="0.6"/>
            <rect x="40" y="58" width="14" height="3" rx="1.5" fill="#ff6b6b" opacity="0.4"/>
            <!-- notch -->
            <rect x="45" y="24" width="10" height="3" rx="1.5" fill="#ef9563" opacity="0.5"/>
            <!-- home indicator -->
            <rect x="44" y="72" width="12" height="2.5" rx="1.25" fill="#ef9563" opacity="0.5"/>
            <!-- check badge -->
            <circle cx="67" cy="28" r="9" fill="#ffaa3b"/>
            <path d="M62.5 28l3 3 5.5-5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="vcw-step-label">Step 3</div>
        <div class="vcw-step-title">You Get a Real App</div>
        <div class="vcw-step-desc">A proper app your clients will love — on their phones, fast, and fully yours.</div>
      </div>
    </div>

    <p class="vcw-footnote"><strong>Vibe Coding</strong> = you bring the vision, we bring the tech. That's it.</p>
  </div>
</section>
`;

export const VibeWhatIs: React.FC = () => {
  return (
    <CopyWrapper blockName="VibeWhatIs" codeToCopy={VibeWhatIsCode}>
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: '#0a0e1a' }}>
        {/* Aurora background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="vcw-blur1-jsx" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="70"/></filter>
              <filter id="vcw-blur2-jsx" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="50"/></filter>
              <filter id="vcw-blur3-jsx" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="90"/></filter>
            </defs>
            {/* Main neon orange sweep */}
            <ellipse cx="720" cy="380" rx="650" ry="200" fill="#ff8a2b" opacity="0.18" filter="url(#vcw-blur1-jsx)"/>
            {/* Hot red accent left */}
            <ellipse cx="250" cy="320" rx="380" ry="160" fill="#ff3d4a" opacity="0.14" filter="url(#vcw-blur2-jsx)"/>
            {/* Neon orange accent right */}
            <ellipse cx="1150" cy="350" rx="320" ry="140" fill="#ffaa3b" opacity="0.12" filter="url(#vcw-blur2-jsx)"/>
            {/* Blue accent top */}
            <ellipse cx="720" cy="80" rx="550" ry="120" fill="#3b7fff" opacity="0.08" filter="url(#vcw-blur3-jsx)"/>
            {/* Hot centre glow */}
            <ellipse cx="720" cy="300" rx="250" ry="100" fill="#ff6b35" opacity="0.2" filter="url(#vcw-blur3-jsx)"/>
            {/* Tight neon core */}
            <ellipse cx="720" cy="350" rx="120" ry="50" fill="#ffcc44" opacity="0.12" filter="url(#vcw-blur2-jsx)"/>
          </svg>
        </div>

        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-[44px] font-heading font-800 leading-[1.15] tracking-tight mb-3" style={{ color: '#ffffff', textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
            So... What Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-accent">Vibe Coding</span>?
          </h2>
          <p className="text-[17px] leading-relaxed max-w-[600px] mx-auto mb-14" style={{ color: 'rgba(255,255,255,0.55)' }}>
            It's exactly what it sounds like. You tell us the vibe — we turn it into a real app. No jargon. No code. Just results.
          </p>

          {/* 3-step flow */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-[100px] h-[100px] mb-5">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <rect x="22" y="28" width="56" height="38" rx="12" fill="rgba(255,255,255,0.1)" stroke="#ef9563" strokeWidth="2"/>
                  <polygon points="38,66 44,66 36,76" fill="rgba(255,255,255,0.1)" stroke="#ef9563" strokeWidth="2" strokeLinejoin="round"/>
                  <rect x="32" y="39" width="28" height="3" rx="1.5" fill="#ffaa3b"/>
                  <rect x="32" y="46" width="36" height="3" rx="1.5" fill="#ef9563" opacity="0.7"/>
                  <rect x="32" y="53" width="20" height="3" rx="1.5" fill="#ef9563" opacity="0.45"/>
                </svg>
              </div>
              <div className="text-[11px] font-800 text-brand-orange uppercase tracking-wider mb-2">Step 1</div>
              <div className="text-xl font-heading font-800 text-white mb-2">You Describe It</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>"I want an app where clients can book appointments and get reminders."</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center pt-10 mx-5">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none"><path d="M2 12h32M28 5l8 7-8 7" stroke="#ffaa3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-[100px] h-[100px] mb-5">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <rect x="28" y="30" width="44" height="40" rx="6" fill="rgba(255,255,255,0.1)" stroke="#ef9563" strokeWidth="2"/>
                  <rect x="34" y="38" width="14" height="2.5" rx="1" fill="#ff6b6b"/>
                  <rect x="34" y="43" width="20" height="2.5" rx="1" fill="#ffaa3b"/>
                  <rect x="34" y="48" width="10" height="2.5" rx="1" fill="#ff6b6b" opacity="0.8"/>
                  <rect x="34" y="53" width="24" height="2.5" rx="1" fill="#ffaa3b" opacity="0.8"/>
                  <rect x="34" y="58" width="16" height="2.5" rx="1" fill="#ff6b6b" opacity="0.6"/>
                  {/* sparkle top-right */}
                  <path d="M76 20l1.5 4 1.5-4 4 1.5-4 1.5 4 1.5-4-1.5-1.5 4-1.5-4-4 1.5 4-1.5-4-1.5z" fill="#ffaa3b"/>
                  {/* sparkle bottom-left */}
                  <path d="M18 70l1 3 1-3 3 1-3 1 3 1-3-1-1 3-1-3-3 1 3-1-3-1z" fill="#ff6b6b" opacity="0.8"/>
                </svg>
              </div>
              <div className="text-[11px] font-800 text-brand-orange uppercase tracking-wider mb-2">Step 2</div>
              <div className="text-xl font-heading font-800 text-white mb-2">AI Helps Us Build It</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>We use AI-powered tools to build your app at incredible speed — no shortcuts on quality.</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center pt-10 mx-5">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none"><path d="M2 12h32M28 5l8 7-8 7" stroke="#ffaa3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/></svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[220px]">
              <div className="w-[100px] h-[100px] mb-5">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="rgba(239,149,99,0.12)" stroke="#ef9563" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <rect x="33" y="22" width="34" height="56" rx="8" fill="rgba(255,255,255,0.1)" stroke="#ef9563" strokeWidth="2"/>
                  <rect x="37" y="30" width="26" height="38" rx="3" fill="rgba(239,149,99,0.12)"/>
                  <rect x="40" y="34" width="20" height="4" rx="2" fill="#ffaa3b" opacity="0.8"/>
                  <rect x="40" y="41" width="9" height="9" rx="2" fill="#ff6b6b" opacity="0.45"/>
                  <rect x="51" y="41" width="9" height="9" rx="2" fill="#ef9563" opacity="0.45"/>
                  <rect x="40" y="53" width="20" height="3" rx="1.5" fill="#ef9563" opacity="0.6"/>
                  <rect x="40" y="58" width="14" height="3" rx="1.5" fill="#ff6b6b" opacity="0.4"/>
                  <rect x="45" y="24" width="10" height="3" rx="1.5" fill="#ef9563" opacity="0.5"/>
                  <rect x="44" y="72" width="12" height="2.5" rx="1.25" fill="#ef9563" opacity="0.5"/>
                  <circle cx="67" cy="28" r="9" fill="#ffaa3b"/>
                  <path d="M62.5 28l3 3 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[11px] font-800 text-brand-orange uppercase tracking-wider mb-2">Step 3</div>
              <div className="text-xl font-heading font-800 text-white mb-2">You Get a Real App</div>
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>A proper app your clients will love — on their phones, fast, and fully yours.</div>
            </div>
          </div>

          <p className="text-sm mt-12 italic" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <strong className="text-brand-orange not-italic">Vibe Coding</strong> = you bring the vision, we bring the tech. That's it.
          </p>
        </div>
      </section>
    </CopyWrapper>
  );
};
