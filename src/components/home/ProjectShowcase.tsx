import React, { useRef } from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const projects = [
  {
    name: 'SEED NORTHERN RIVERS',
    logo: 'seednorthernrivers.png',
    color: '#289A47',
    gradient: 'linear-gradient(135deg, #289A47, #50A5DF)',
    tagline: 'Empowering a Network of Changemakers',
    description: 'Website, CRM and custom Giving Circle app for a grassroots environmental organisation.',
    tags: ['Website Build', 'CRM', 'Vibe-Coded App'],
  },
  {
    name: 'PHYX',
    logo: 'phyx.png',
    color: '#27BAA6',
    gradient: 'linear-gradient(135deg, #176A7A, #27BAA6)',
    tagline: 'The Home of Longevity, Built to Scale',
    description: 'Magento storefront, CRM, admin interface and mobile app for personalised telehealth.',
    tags: ['Website', 'Magento', 'CRM', 'Mobile App'],
  },
  {
    name: 'AWARDEE',
    logo: 'awardee.png',
    color: '#0079FE',
    gradient: 'linear-gradient(135deg, #212b45, #0079FE)',
    tagline: 'From Startup Idea to Live Platform',
    description: 'End-to-end SaaS build with QR-powered support, AI chatbots and smart badge tech.',
    tags: ['Platform Build', 'SaaS', 'Startup to Live'],
  },
  {
    name: 'AUSTRALIAN WRITERS\u2019 CENTRE',
    logo: 'awc.png',
    color: '#E31B23',
    gradient: 'linear-gradient(135deg, #E31B23, #FF6B6B)',
    tagline: 'Australia\u2019s Leading Writing Community, Connected',
    description: 'CRM and LMS powering tens of thousands of student enrolments and alumni engagement.',
    tags: ['CRM', 'LMS Integration'],
  },
  {
    name: 'MCG',
    logo: 'mcgqs.png',
    color: '#E9484D',
    gradient: 'linear-gradient(135deg, #1a1a1a, #444444)',
    tagline: 'Scaling Australia\u2019s Fastest-Growing QS Firm',
    description: 'BI dashboards, customer app, referrer portal and Tax Depreciation Calculator API.',
    tags: ['Automation', 'BI Dashboards', 'Apps', 'API'],
  },
  {
    name: 'REAL ESTATE GYM',
    logo: 'realestategym.png',
    color: '#19ffb4',
    gradient: 'linear-gradient(135deg, #1d1d20, #2a2a30)',
    tagline: 'Train Like an Athlete, Scale Like a Business',
    description: 'Flutter app, CRM and automation platform for Australia\u2019s top real estate coach.',
    tags: ['Flutter App', 'CRM', 'Automation'],
  },
  {
    name: 'FILTERMAX',
    logo: 'filtermax.png',
    color: '#fd5b2a',
    gradient: 'linear-gradient(135deg, #232323, #fd5b2a)',
    tagline: 'Custom-Built to Supply Australia\u2019s Hardest Workers',
    description: 'Bespoke platform powering industrial filter distribution across mining, agriculture and transport.',
    tags: ['Platform Build', 'Custom Application'],
  },
  {
    name: 'RESICERT',
    logo: 'resicert.png',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
    tagline: 'From Solo Operator to National Franchise',
    description: 'CRM automation that scaled from one inspector to 50+ businesses Australia-wide.',
    tags: ['CRM', 'Automation', 'Franchise Scale'],
  },
  {
    name: 'THE HAPPY CLINIC',
    logo: 'thehappyclinic.png',
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
    display: flex !important; align-items: center !important; justify-content: center !important;
    position: relative !important; overflow: hidden !important;
  }
  .hm-proj-img::after {
    content: '' !important; position: absolute !important;
    inset: 0 !important; background: rgba(0,0,0,0.15) !important;
    pointer-events: none !important;
  }
  .hm-proj-img-logo {
    max-width: 70% !important; height: auto !important;
    max-height: 80px !important; object-fit: contain !important;
    position: relative !important; z-index: 1 !important;
    filter: brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.3)) !important;
  }
  .hm-proj-body {
    padding: 24px !important;
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
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #289A47, #50A5DF);">
          <div class="hm-proj-img-logo">SEED NORTHERN RIVERS</div>
        </div>
        <div class="hm-proj-body">
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
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #176A7A, #27BAA6);">
          <div class="hm-proj-img-logo">PHYX</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">The Home of Longevity, Built to Scale</div>
          <div class="hm-proj-desc">Magento storefront, CRM, admin interface and mobile app for personalised telehealth.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Website</span>
            <span class="hm-proj-tag">Magento</span>
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Mobile App</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #212b45, #0079FE);">
          <div class="hm-proj-img-logo">AWARDEE</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">From Startup Idea to Live Platform</div>
          <div class="hm-proj-desc">End-to-end SaaS build with QR-powered support, AI chatbots and smart badge tech.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Platform Build</span>
            <span class="hm-proj-tag">SaaS</span>
            <span class="hm-proj-tag">Startup to Live</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #E31B23, #FF6B6B);">
          <div class="hm-proj-img-logo">AUSTRALIAN WRITERS\u2019 CENTRE</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">Australia\u2019s Leading Writing Community, Connected</div>
          <div class="hm-proj-desc">CRM and LMS powering tens of thousands of student enrolments and alumni engagement.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">LMS Integration</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #1a1a1a, #444444);">
          <div class="hm-proj-img-logo">MCG</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">Scaling Australia\u2019s Fastest-Growing QS Firm</div>
          <div class="hm-proj-desc">BI dashboards, customer app, referrer portal and Tax Depreciation Calculator API.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Automation</span>
            <span class="hm-proj-tag">BI Dashboards</span>
            <span class="hm-proj-tag">Apps</span>
            <span class="hm-proj-tag">API</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #1d1d20, #2a2a30);">
          <div class="hm-proj-img-logo" style="color: #19ffb4 !important;">REAL ESTATE GYM</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">Train Like an Athlete, Scale Like a Business</div>
          <div class="hm-proj-desc">Flutter app, CRM and automation platform for Australia\u2019s top real estate coach.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Flutter App</span>
            <span class="hm-proj-tag">CRM</span>
            <span class="hm-proj-tag">Automation</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #232323, #fd5b2a);">
          <div class="hm-proj-img-logo">FILTERMAX</div>
        </div>
        <div class="hm-proj-body">
          <div class="hm-proj-tagline">Custom-Built to Supply Australia\u2019s Hardest Workers</div>
          <div class="hm-proj-desc">Bespoke platform powering industrial filter distribution across mining, agriculture and transport.</div>
          <div class="hm-proj-tags">
            <span class="hm-proj-tag">Platform Build</span>
            <span class="hm-proj-tag">Custom Application</span>
          </div>
        </div>
      </div>

      <div class="hm-proj-card">
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #2E7D32, #4CAF50);">
          <div class="hm-proj-img-logo">RESICERT</div>
        </div>
        <div class="hm-proj-body">
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
        <div class="hm-proj-img" style="background: linear-gradient(135deg, #0097A7, #00BCD4);">
          <div class="hm-proj-img-logo">THE HAPPY CLINIC</div>
        </div>
        <div class="hm-proj-body">
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
                <div
                  className="w-full h-[220px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute inset-0 bg-black/15" />
                  <img
                    src={`/src/assets/project-logos/${project.logo}`}
                    alt={project.name}
                    className="relative z-10 max-w-[70%] h-auto max-h-20 object-contain"
                    style={{ filter: 'brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                  />
                </div>
                <div className="p-6">
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
