import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ghBase = 'https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/about';

const AboutTeamCode = `
<style>
  #ab-team {
    padding: 0 !important; background: var(--color-1, #0f1128) !important;
    position: relative !important; overflow: hidden !important;
  }
  .ab-tm-top {
    padding: 80px 24px 0 !important;
    max-width: 1440px !important; margin: 0 auto !important;
  }
  .ab-tm-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .ab-tm-h2.ab-tm-h2.ab-tm-h2.ab-tm-h2 {
    font-family: var(--font-heading) !important;
    font-size: 48px !important; line-height: 1.1 !important;
    margin: 0 0 16px !important; letter-spacing: -0.02em !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  @media (min-width: 768px) {
    .ab-tm-h2.ab-tm-h2.ab-tm-h2.ab-tm-h2 { font-size: 64px !important; }
  }
  .ab-tm-sub {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: rgba(255,255,255,0.5) !important; line-height: 1.7 !important;
    max-width: 500px !important; margin-bottom: 56px !important;
  }

  .ab-tm-card {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .ab-tm-inner {
    background: rgba(255,255,255,0.04) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 24px 24px 0 0 !important;
    padding: 48px 48px 0 !important;
    overflow: hidden !important;
  }
  .ab-tm-grid {
    display: grid !important; grid-template-columns: 1fr !important;
    gap: 32px !important; max-width: 800px !important;
  }
  @media (min-width: 640px) {
    .ab-tm-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 48px !important; }
  }

  .ab-tm-member { text-align: center !important; }
  .ab-tm-name {
    font-family: var(--font-heading) !important; font-size: 22px !important;
    color: white !important; margin-bottom: 4px !important;
  }
  .ab-tm-role {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: rgba(255,255,255,0.45) !important; margin-bottom: 28px !important;
  }
  .ab-tm-photo {
    position: relative !important; overflow: hidden !important;
    border-radius: 20px 20px 0 0 !important;
  }
  .ab-tm-photo-bg {
    position: absolute !important; inset: 0 !important;
    background: linear-gradient(180deg, rgba(233,72,77,0.08) 0%, rgba(239,149,99,0.12) 100%) !important;
  }
  .ab-tm-photo img {
    position: relative !important; z-index: 1 !important;
    width: 100% !important; height: auto !important;
    display: block !important; object-fit: cover !important;
    object-position: top center !important;
  }
</style>

<section id="ab-team">
  <div class="ab-tm-top">
    <div class="ab-tm-label">Our People</div>
    <h2 class="ab-tm-h2">Team</h2>
    <p class="ab-tm-sub">The humans behind the automation. We\u2019re a small team that punches well above its weight.</p>
  </div>
  <div class="ab-tm-card">
    <div class="ab-tm-inner">
      <div class="ab-tm-grid">
        <div class="ab-tm-member">
          <div class="ab-tm-name">Andrew Wadsworth</div>
          <div class="ab-tm-role">Founder</div>
          <div class="ab-tm-photo">
            <div class="ab-tm-photo-bg"></div>
            <img src="${ghBase}/andrew-transparent.png" alt="Andrew Wadsworth — Founder">
          </div>
        </div>
        <div class="ab-tm-member">
          <div class="ab-tm-name">Tenzin Wadsworth</div>
          <div class="ab-tm-role">n8n Specialist</div>
          <div class="ab-tm-photo">
            <div class="ab-tm-photo-bg"></div>
            <img src="${ghBase}/tenzin-transparent.png" alt="Tenzin Wadsworth — n8n Specialist">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const team = [
  { name: 'Andrew Wadsworth', role: 'Founder', img: 'andrew-transparent.png', alt: 'Andrew Wadsworth — Founder' },
  { name: 'Tenzin Wadsworth', role: 'n8n Specialist', img: 'tenzin-transparent.png', alt: 'Tenzin Wadsworth — n8n Specialist' },
];

export const AboutTeam: React.FC = () => {
  return (
    <CopyWrapper blockName="AboutTeam" codeToCopy={AboutTeamCode}>
      <section className="relative overflow-hidden" style={{ background: '#0f1128' }}>
        {/* Header area */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 lg:pt-24">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Our People</div>
          <h2 className="text-[48px] md:text-[64px] font-heading font-800 leading-[1.1] tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">
            Team
          </h2>
          <p className="text-[17px] text-white/50 leading-relaxed max-w-[500px] mb-14">
            The humans behind the automation. We're a small team that punches well above its weight.
          </p>
        </div>

        {/* Team card */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-t-3xl pt-12 px-8 md:px-12 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-[800px]">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  <div className="text-[22px] font-heading font-800 text-white mb-1">{m.name}</div>
                  <div className="text-sm text-white/45 mb-7">{m.role}</div>
                  <div className="relative rounded-t-[20px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.08] to-brand-orange/[0.12]" />
                    <img
                      src={`/src/assets/images/about/${m.img}`}
                      alt={m.alt}
                      className="relative z-10 w-full h-auto block object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
