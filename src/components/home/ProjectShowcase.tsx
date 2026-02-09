import React, { useRef } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const projects = [
  {
    name: 'SEED NORTHERN RIVERS',
    logo: 'seednorthernrivers.png',
    image: 'seed-northern-rivers.png',
    color: '#289A47',
    gradient: 'linear-gradient(135deg, #289A47, #50A5DF)',
    tagline: 'Empowering a Network of Changemakers',
    description: 'Website, CRM and custom Giving Circle app for a grassroots environmental organisation.',
    tags: ['Website Build', 'CRM', 'Vibe-Coded App'],
  },
  {
    name: 'PHYX',
    logo: 'phyx.png',
    image: 'phyx.png',
    color: '#27BAA6',
    gradient: 'linear-gradient(135deg, #176A7A, #27BAA6)',
    tagline: 'The Home of Longevity, Built to Scale',
    description: 'Online store, CRM, admin interface and mobile app for personalised telehealth.',
    tags: ['Website', 'Online Store', 'CRM', 'Mobile App'],
  },
  {
    name: 'AWARDEE',
    logo: 'awardee.png',
    image: 'awardee.png',
    color: '#0079FE',
    gradient: 'linear-gradient(135deg, #212b45, #0079FE)',
    tagline: 'From Startup Idea to Live Platform',
    description: 'End-to-end SaaS build with QR-powered support, AI chatbots and smart badge tech.',
    tags: ['Platform Build', 'Startup to Live'],
  },
  {
    name: 'AUSTRALIAN WRITERS\u2019 CENTRE',
    logo: 'awc.png',
    image: 'australian-writers-centre.png',
    color: '#E31B23',
    gradient: 'linear-gradient(135deg, #E31B23, #FF6B6B)',
    tagline: 'Australia\u2019s Leading Writing Community, Connected',
    description: 'CRM and learning platform powering tens of thousands of student enrolments and alumni engagement.',
    tags: ['CRM', 'Learning Platform'],
  },
  {
    name: 'MCG',
    logo: 'mcgqs.png',
    image: 'mcg.png',
    color: '#E9484D',
    gradient: 'linear-gradient(135deg, #1a1a1a, #444444)',
    tagline: 'Scaling Australia\u2019s Fastest-Growing QS Firm',
    description: 'Business dashboards, customer app, referrer portal and Tax Depreciation Calculator.',
    tags: ['Automation', 'Business Dashboards', 'Apps'],
  },
  {
    name: 'REAL ESTATE GYM',
    logo: 'realestategym.png',
    image: 'real-estate-gym.png',
    color: '#19ffb4',
    gradient: 'linear-gradient(135deg, #1d1d20, #2a2a30)',
    tagline: 'Train Like an Athlete, Scale Like a Business',
    description: 'Mobile app, CRM and automation platform for Australia\u2019s top real estate coach.',
    tags: ['Mobile App', 'CRM', 'Automation'],
  },
  {
    name: 'FILTERMAX',
    logo: 'filtermax.png',
    image: 'filtermax.png',
    color: '#fd5b2a',
    gradient: 'linear-gradient(135deg, #232323, #fd5b2a)',
    logoDark: true,
    tagline: 'Custom-Built to Supply Australia\u2019s Hardest Workers',
    description: 'Bespoke platform powering industrial filter distribution across mining, agriculture and transport.',
    tags: ['Platform Build', 'Custom Application'],
  },
  {
    name: 'RESICERT',
    logo: 'resicert.png',
    image: 'resicert.png',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
    logoDark: true,
    tagline: 'From Solo Operator to National Franchise',
    description: 'CRM automation that scaled from one inspector to 50+ businesses Australia-wide.',
    tags: ['CRM', 'Automation', 'Franchise Scale'],
  },
  {
    name: 'THE HAPPY CLINIC',
    logo: 'thehappyclinic.png',
    image: 'the-happy-clinic.png',
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #0097A7, #00BCD4)',
    tagline: 'Modern Wellness, Fully Automated',
    description: 'Ontraport customer portal, custom shop, AI chatbots and n8n automations for a holistic health clinic.',
    tags: ['Customer Portal', 'AI Chatbots', 'Automation', 'E-commerce'],
  },
];

const ProjectShowcaseCode = `
<style>
  #hm-proj {
    padding: 100px 0 !important;
    background: var(--color-5, #ffffff) !important;
    overflow: hidden !important;
  }
  .hm-proj-container {
    max-width: 1440px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .hm-proj-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; font-weight: 800 !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .hm-proj-header {
    display: flex !important; justify-content: space-between !important;
    align-items: flex-end !important; margin-bottom: 48px !important;
  }
  .hm-proj-h2.hm-proj-h2.hm-proj-h2.hm-proj-h2 {
    font-family: var(--font-heading) !important; font-weight: 800 !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .hm-proj-h2.hm-proj-h2.hm-proj-h2.hm-proj-h2 { font-size: 44px !important; }
  }
  .hm-proj-arrows {
    display: none !important; gap: 8px !important;
  }
  @media (min-width: 768px) {
    .hm-proj-arrows { display: flex !important; }
  }
  .hm-proj-arrow {
    width: 48px !important; height: 48px !important; border-radius: 50% !important;
    border: 1.5px solid #e5e7eb !important; background: white !important;
    cursor: pointer !important; display: flex !important; align-items: center !important;
    justify-content: center !important; transition: all 0.2s !important;
    color: var(--color-1) !important;
  }
  .hm-proj-arrow:hover {
    border-color: var(--color-2) !important; color: var(--color-2) !important;
    box-shadow: 0 4px 12px rgba(233,72,77,0.15) !important;
  }
  .hm-proj-track {
    display: flex !important; gap: 24px !important;
    overflow-x: auto !important; scroll-snap-type: x mandatory !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important; padding-bottom: 8px !important;
    margin-left: calc(-1 * max(24px, calc((100vw - 1440px) / 2 + 24px))) !important;
    margin-right: calc(-1 * max(24px, calc((100vw - 1440px) / 2 + 24px))) !important;
    padding-left: max(24px, calc((100vw - 1440px) / 2 + 24px)) !important;
  }
  .hm-proj-track::-webkit-scrollbar { display: none !important; }
  .hm-proj-card {
    flex: 0 0 340px !important; scroll-snap-align: start !important;
    border-radius: 20px !important; overflow: hidden !important;
    border: 1px solid #f3f4f6 !important; background: white !important;
    transition: transform 0.3s, box-shadow 0.3s !important;
  }
  @media (min-width: 768px) {
    .hm-proj-card { flex: 0 0 380px !important; }
  }
  .hm-proj-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
  }
  .hm-proj-img {
    width: 100% !important; height: 220px !important;
    position: relative !important; overflow: hidden !important;
    background: #f3f4f6 !important;
  }
  .hm-proj-img img {
    width: 100% !important; height: 100% !important;
    object-fit: cover !important;
  }
  .hm-proj-body {
    padding: 24px !important;
  }
  .hm-proj-logo {
    height: 48px !important; width: auto !important;
    object-fit: contain !important; margin-bottom: 16px !important;
  }
  .hm-proj-logo-dark {
    display: inline-flex !important; align-items: center !important;
    background: var(--color-1, #0f1128) !important;
    padding: 10px 20px !important; border-radius: 10px !important;
    margin-bottom: 16px !important;
  }
  .hm-proj-tagline {
    font-family: var(--font-heading) !important; font-weight: 700 !important;
    font-size: 17px !important; color: var(--color-1) !important;
    margin-bottom: 8px !important; line-height: 1.3 !important;
  }
  .hm-proj-desc {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #6b7280 !important; line-height: 1.6 !important;
    margin-bottom: 16px !important;
  }
  .hm-proj-tags {
    display: flex !important; flex-wrap: wrap !important; gap: 6px !important;
  }
  .hm-proj-tag {
    font-family: var(--font-main) !important; font-size: 11px !important;
    font-weight: 700 !important; padding: 4px 10px !important;
    border-radius: 6px !important; background: #f3f4f6 !important;
    color: #6b7280 !important; white-space: nowrap !important;
  }
</style>

<section id="hm-proj">
  <div class="hm-proj-container">
    <div class="hm-proj-label">Our Work</div>
    <div class="hm-proj-header">
      <h2 class="hm-proj-h2">Projects That Prove It</h2>
      <div class="hm-proj-arrows">
        <button class="hm-proj-arrow" onclick="document.getElementById('hm-proj-track').scrollBy({left:-404,behavior:'smooth'})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="hm-proj-arrow" onclick="document.getElementById('hm-proj-track').scrollBy({left:404,behavior:'smooth'})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>

    <div class="hm-proj-track" id="hm-proj-track">
      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/seed-northern-rivers.png" alt="SEED NORTHERN RIVERS"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/seednorthernrivers.png" alt="SEED NORTHERN RIVERS" class="hm-proj-logo">
          <div class="hm-proj-tagline">Empowering a Network of Changemakers</div>
          <div class="hm-proj-desc">Website, CRM and custom Giving Circle app for a grassroots environmental organisation.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Website Build</span>
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Vibe-Coded App</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/phyx.png" alt="PHYX"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/phyx.png" alt="PHYX" class="hm-proj-logo">
          <div class="hm-proj-tagline">The Home of Longevity, Built to Scale</div>
          <div class="hm-proj-desc">Online store, CRM, admin interface and mobile app for personalised telehealth.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Website</span>
            <span class="hm-proj-tag">Online Store</span>
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Mobile App</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/awardee.png" alt="AWARDEE"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/awardee.png" alt="AWARDEE" class="hm-proj-logo">
          <div class="hm-proj-tagline">From Startup Idea to Live Platform</div>
          <div class="hm-proj-desc">End-to-end SaaS build with QR-powered support, AI chatbots and smart badge tech.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Platform Build</span>
            <span class="hm-proj-tag">Startup to Live</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/australian-writers-centre.png" alt="AUSTRALIAN WRITERS\u2019 CENTRE"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/awc.png" alt="AUSTRALIAN WRITERS\u2019 CENTRE" class="hm-proj-logo">
          <div class="hm-proj-tagline">Australia\u2019s Leading Writing Community, Connected</div>
          <div class="hm-proj-desc">CRM and learning platform powering tens of thousands of student enrolments and alumni engagement.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Learning Platform</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/mcg.png" alt="MCG"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/mcgqs.png" alt="MCG" class="hm-proj-logo">
          <div class="hm-proj-tagline">Scaling Australia\u2019s Fastest-Growing QS Firm</div>
          <div class="hm-proj-desc">Business dashboards, customer app, referrer portal and Tax Depreciation Calculator.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Automation</span>
            <span class="hm-proj-tag">Business Dashboards</span>
            <span class="hm-proj-tag">Apps</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/real-estate-gym.png" alt="REAL ESTATE GYM"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/realestategym.png" alt="REAL ESTATE GYM" class="hm-proj-logo">
          <div class="hm-proj-tagline">Train Like an Athlete, Scale Like a Business</div>
          <div class="hm-proj-desc">Mobile app, CRM and automation platform for Australia\u2019s top real estate coach.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Mobile App</span>
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Automation</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/filtermax.png" alt="FILTERMAX"></div>
        <div class="hm-proj-body">
          <div class="hm-proj-logo-dark"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/filtermax.png" alt="FILTERMAX" class="hm-proj-logo" style="margin-bottom:0 !important;"></div>
          <div class="hm-proj-tagline">Custom-Built to Supply Australia\u2019s Hardest Workers</div>
          <div class="hm-proj-desc">Bespoke platform powering industrial filter distribution across mining, agriculture and transport.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Platform Build</span>
            <span class="hm-proj-tag">Custom Application</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/resicert.png" alt="RESICERT"></div>
        <div class="hm-proj-body">
          <div class="hm-proj-logo-dark"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/resicert.png" alt="RESICERT" class="hm-proj-logo" style="margin-bottom:0 !important;"></div>
          <div class="hm-proj-tagline">From Solo Operator to National Franchise</div>
          <div class="hm-proj-desc">CRM automation that scaled from one inspector to 50+ businesses Australia-wide.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Automation</span>
            <span class="hm-proj-tag">Franchise Scale</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/the-happy-clinic.png" alt="THE HAPPY CLINIC"></div>
        <div class="hm-proj-body">
          <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/thehappyclinic.png" alt="THE HAPPY CLINIC" class="hm-proj-logo">
          <div class="hm-proj-tagline">Modern Wellness, Fully Automated</div>
          <div class="hm-proj-desc">Ontraport customer portal, custom shop, AI chatbots and n8n automations for a holistic health clinic.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Customer Portal</span>
            <span class="hm-proj-tag">AI Chatbots</span>
            <span class="hm-proj-tag">Automation</span>
            <span class="hm-proj-tag">E-commerce</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const ProjectShowcase: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -404 : 404;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <CopyWrapper blockName="ProjectShowcase" codeToCopy={ProjectShowcaseCode}>
      <section className="py-24 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Our Work</div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight">
              Projects That Prove It
            </h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border-[1.5px] border-gray-200 bg-white flex items-center justify-center hover:border-brand-accent hover:text-brand-accent hover:shadow-lg hover:shadow-brand-accent/15 transition-all text-brand-navy"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border-[1.5px] border-gray-200 bg-white flex items-center justify-center hover:border-brand-accent hover:text-brand-accent hover:shadow-lg hover:shadow-brand-accent/15 transition-all text-brand-navy"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              marginLeft: 'calc(-1 * max(24px, calc((100vw - 1440px) / 2 + 24px)))',
              marginRight: 'calc(-1 * max(24px, calc((100vw - 1440px) / 2 + 24px)))',
              paddingLeft: 'max(24px, calc((100vw - 1440px) / 2 + 24px))'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-shrink-0 w-[340px] md:w-[380px] snap-start rounded-[20px] overflow-hidden border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-[220px] relative overflow-hidden bg-gray-100">
                  <img
                    src={`/src/assets/images/work/${project.image}`}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {(project as any).logoDark ? (
                    <div className="inline-flex items-center bg-brand-navy px-5 py-2.5 rounded-[10px] mb-4">
                      <img
                        src={`/src/assets/project-logos/${project.logo}`}
                        alt={project.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={`/src/assets/project-logos/${project.logo}`}
                      alt={project.name}
                      className="h-12 w-auto object-contain mb-4"
                    />
                  )}
                  <div className="font-heading font-700 text-[17px] text-brand-navy mb-2 leading-snug">{project.tagline}</div>
                  <div className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-700 px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
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
