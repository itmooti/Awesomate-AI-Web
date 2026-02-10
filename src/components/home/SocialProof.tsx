import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const SocialProofCode = `
<style>
  #hm-trust {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
  }
  .hm-trust-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
    text-align: center !important;
  }
  .hm-trust-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-trust-h2.hm-trust-h2.hm-trust-h2.hm-trust-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 56px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .hm-trust-h2.hm-trust-h2.hm-trust-h2.hm-trust-h2 { font-size: 44px !important; }
  }

  /* Stats */
  .hm-trust-stats {
    display: grid !important; grid-template-columns: 1fr !important; gap: 32px !important;
    margin-bottom: 64px !important;
  }
  @media (min-width: 640px) { .hm-trust-stats { grid-template-columns: repeat(3, 1fr) !important; } }
  .hm-trust-stat-num {
    font-family: var(--font-heading) !important; font-size: 48px !important;
    margin-bottom: 4px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .hm-trust-stat-label {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important;
  }

  /* Logo strip */
  .hm-trust-logos {
    display: flex !important; flex-wrap: wrap !important;
    justify-content: center !important; align-items: center !important;
    gap: 40px !important; margin-bottom: 64px !important;
  }
  .hm-trust-logo-img {
    height: 40px !important; width: auto !important;
    object-fit: contain !important; filter: grayscale(100%) !important;
  }

  /* Testimonials */
  .hm-trust-cards {
    display: grid !important; grid-template-columns: 1fr !important; gap: 24px !important;
    text-align: left !important;
  }
  @media (min-width: 768px) { .hm-trust-cards { grid-template-columns: repeat(3, 1fr) !important; } }
  .hm-trust-card {
    background: white !important; border: 1px solid #f3f4f6 !important;
    border-radius: 20px !important; padding: 32px !important;
  }
  .hm-trust-stars { color: #fbbf24 !important; font-size: 16px !important; margin-bottom: 16px !important; letter-spacing: 2px !important; }
  .hm-trust-quote {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #4b5563 !important; line-height: 1.7 !important; margin-bottom: 20px !important;
    font-style: italic !important;
  }
  .hm-trust-author { display: flex !important; align-items: center !important; gap: 12px !important; }
  .hm-trust-avatar {
    width: 40px !important; height: 40px !important; border-radius: 12px !important;
    background: linear-gradient(135deg, rgba(233,72,77,0.1), rgba(239,149,99,0.1)) !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: var(--color-2) !important;
  }
  .hm-trust-name {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: var(--color-1) !important;
  }
  .hm-trust-role {
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important;
  }
</style>

<section id="hm-trust">
  <div class="hm-trust-container">
    <div class="hm-trust-label">Trusted by Businesses Across Australia</div>
    <h2 class="hm-trust-h2">Results That Speak for Themselves</h2>

    <div class="hm-trust-stats">
      <div>
        <div class="hm-trust-stat-num">99.99%</div>
        <div class="hm-trust-stat-label">Uptime guarantee</div>
      </div>
      <div>
        <div class="hm-trust-stat-num">500+</div>
        <div class="hm-trust-stat-label">Workflows automated</div>
      </div>
      <div>
        <div class="hm-trust-stat-num">50+</div>
        <div class="hm-trust-stat-label">Businesses served</div>
      </div>
    </div>

    <div class="hm-trust-logos">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/awc.png" alt="Australian Writers' Centre" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/filtermax.png" alt="Filtermax" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/mcgqs.png" alt="MCG Quantity Surveyors" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/phyx.png" alt="PHYX" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/resicert.png" alt="Resicert" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/awardee.png" alt="Awardee" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/seednorthernrivers.png" alt="SEED Northern Rivers" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/realestategym.png" alt="Real Estate Gym" class="hm-trust-logo-img">
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/client-logos/thehappyclinic.png" alt="The Happy Clinic" class="hm-trust-logo-img">
    </div>

    <div class="hm-trust-cards">
      <div class="hm-trust-card">
        <div class="hm-trust-stars">★★★★★</div>
        <div class="hm-trust-quote">"Awesomate took our chaotic automation setup and turned it into something we actually trust. Haven't had a single outage since we switched."</div>
        <div class="hm-trust-author">
          <div class="hm-trust-avatar">JM</div>
          <div>
            <div class="hm-trust-name">James M.</div>
            <div class="hm-trust-role">Operations Director, Sydney</div>
          </div>
        </div>
      </div>

      <div class="hm-trust-card">
        <div class="hm-trust-stars">★★★★★</div>
        <div class="hm-trust-quote">"Buddzee changed how we make decisions. I just ask a question and get the answer — no more digging through spreadsheets."</div>
        <div class="hm-trust-author">
          <div class="hm-trust-avatar">SK</div>
          <div>
            <div class="hm-trust-name">Sarah K.</div>
            <div class="hm-trust-role">CEO, Melbourne</div>
          </div>
        </div>
      </div>

      <div class="hm-trust-card">
        <div class="hm-trust-stars">★★★★★</div>
        <div class="hm-trust-quote">"They built us an internal tool in two weeks that would have cost $80k from a traditional agency. And then they taught us how to update it ourselves."</div>
        <div class="hm-trust-author">
          <div class="hm-trust-avatar">DP</div>
          <div>
            <div class="hm-trust-name">David P.</div>
            <div class="hm-trust-role">Founder, Brisbane</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const SocialProof: React.FC = () => {
  const stats = [
    { num: '99.99%', label: 'Uptime guarantee' },
    { num: '500+', label: 'Workflows automated' },
    { num: '50+', label: 'Businesses served' },
  ];

  // Use local paths for dev preview (Vite will handle these)
  const logos = [
    { src: '/src/assets/client-logos/awc.png', alt: 'Australian Writers\' Centre' },
    { src: '/src/assets/client-logos/filtermax.png', alt: 'Filtermax' },
    { src: '/src/assets/client-logos/mcgqs.png', alt: 'MCG Quantity Surveyors' },
    { src: '/src/assets/client-logos/phyx.png', alt: 'PHYX' },
    { src: '/src/assets/client-logos/resicert.png', alt: 'Resicert' },
    { src: '/src/assets/client-logos/awardee.png', alt: 'Awardee' },
    { src: '/src/assets/client-logos/seednorthernrivers.png', alt: 'SEED Northern Rivers' },
    { src: '/src/assets/client-logos/realestategym.png', alt: 'Real Estate Gym' },
    { src: '/src/assets/client-logos/thehappyclinic.png', alt: 'The Happy Clinic' },
  ];

  const testimonials = [
    {
      quote: '\u201CAwesomate took our chaotic automation setup and turned it into something we actually trust. Haven\u2019t had a single outage since we switched.\u201D',
      initials: 'JM',
      name: 'James M.',
      role: 'Operations Director, Sydney',
    },
    {
      quote: '\u201CBuddzee changed how we make decisions. I just ask a question and get the answer \u2014 no more digging through spreadsheets.\u201D',
      initials: 'SK',
      name: 'Sarah K.',
      role: 'CEO, Melbourne',
    },
    {
      quote: '\u201CThey built us an internal tool in two weeks that would have cost $80k from a traditional agency. And then they taught us how to update it ourselves.\u201D',
      initials: 'DP',
      name: 'David P.',
      role: 'Founder, Brisbane',
    },
  ];

  return (
    <CopyWrapper blockName="SocialProof" codeToCopy={SocialProofCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb] text-center">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Trusted by Businesses Across Australia</div>
          <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-14">
            Results That Speak for Themselves
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-800 text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange mb-1">{s.num}</div>
                <div className="text-sm text-gray-400 font-600">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Logo strip */}
          <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain grayscale"
              />
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-[20px] p-8">
                <div className="text-yellow-400 text-base mb-4 tracking-widest">{'\u2605\u2605\u2605\u2605\u2605'}</div>
                <div className="text-[15px] text-gray-600 leading-relaxed mb-5 italic">{t.quote}</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent/10 to-brand-orange/10 flex items-center justify-center text-sm font-800 text-brand-accent">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-700 text-brand-navy">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
