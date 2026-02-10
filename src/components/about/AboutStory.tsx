import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const AboutStoryCode = `
<style>
  #ab-story { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .ab-story-container { max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ab-story-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 56px !important; align-items: center !important; }
  @media (min-width: 768px) { .ab-story-grid { grid-template-columns: 1fr 1fr !important; } }
  .ab-story-label { display: inline-block !important; font-family: var(--font-main) !important; font-size: 12px !important; color: var(--color-2) !important; text-transform: uppercase !important; letter-spacing: 0.15em !important; margin-bottom: 16px !important; }
  .ab-story-h2.ab-story-h2.ab-story-h2.ab-story-h2 { font-family: var(--font-heading) !important; font-size: 36px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 24px !important; letter-spacing: -0.02em !important; }
  @media (min-width: 768px) { .ab-story-h2.ab-story-h2.ab-story-h2.ab-story-h2 { font-size: 44px !important; } }
  .ab-story-text { font-family: var(--font-main) !important; font-size: 16px !important; color: #6b7280 !important; line-height: 1.8 !important; margin-bottom: 20px !important; }
  .ab-story-highlight { font-family: var(--font-main) !important; font-size: 18px !important; color: var(--color-1) !important; line-height: 1.6 !important; padding-left: 20px !important; border-left: 3px solid transparent !important; border-image: linear-gradient(to bottom, var(--color-2), var(--color-3)) 1 !important; margin-top: 32px !important; }
  .ab-story-img { border-radius: 24px !important; width: 100% !important; height: 400px !important; object-fit: cover !important; box-shadow: 0 20px 60px rgba(0,0,0,0.08) !important; }
</style>

<section id="ab-story">
  <div class="ab-story-container">
    <div class="ab-story-grid">
      <div>
        <div class="ab-story-label">Our Story</div>
        <h2 class="ab-story-h2">Born From Frustration</h2>
        <p class="ab-story-text">We watched small businesses get sold enterprise-grade solutions they didn't need, locked into contracts they couldn't escape, and charged premium rates for basic technology that should just work.</p>
        <p class="ab-story-text">So we built something different. Awesomate exists to give Australian businesses access to powerful technology without the jargon, the lock-in, or the six-figure price tags.</p>
        <p class="ab-story-text">Every solution we build comes with training. Every price is transparent. Every tool we deploy is designed so you can maintain it yourself — because your business shouldn't depend on us to keep running.</p>
        <div class="ab-story-highlight">"We don't just build things. We build things that last — and we teach you how to keep them running."</div>
      </div>
      <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/about/about-story.jpg" alt="Our Story" class="ab-story-img">
    </div>
  </div>
</section>
`;

export const AboutStory: React.FC = () => {
  return (
    <CopyWrapper blockName="AboutStory" codeToCopy={AboutStoryCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Our Story</div>
              <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-6">
                Born From Frustration
              </h2>
              <p className="text-base text-gray-500 leading-[1.8] mb-5">
                We watched small businesses get sold enterprise-grade solutions they didn't need, locked into contracts they couldn't escape, and charged premium rates for basic technology that should just work.
              </p>
              <p className="text-base text-gray-500 leading-[1.8] mb-5">
                So we built something different. Awesomate exists to give Australian businesses access to powerful technology without the jargon, the lock-in, or the six-figure price tags.
              </p>
              <p className="text-base text-gray-500 leading-[1.8] mb-5">
                Every solution we build comes with training. Every price is transparent. Every tool we deploy is designed so you can maintain it yourself — because your business shouldn't depend on us to keep running.
              </p>
              <div className="text-lg font-700 text-brand-navy leading-relaxed pl-5 border-l-[3px] mt-8" style={{ borderImage: 'linear-gradient(to bottom, #e9484d, #ef9563) 1' }}>
                "We don't just build things. We build things that last — and we teach you how to keep them running."
              </div>
            </div>
            <img
              src="/src/assets/images/about/about-story.jpg"
              alt="Our Story"
              className="rounded-3xl w-full h-[400px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
