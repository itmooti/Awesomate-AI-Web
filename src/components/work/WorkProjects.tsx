import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const workProjects = [
  {
    name: 'SEED NORTHERN RIVERS',
    logo: 'seednorthernrivers.png',
    image: 'seed-northern-rivers.png',
    color: '#289A47',
    gradient: 'linear-gradient(135deg, #289A47, #50A5DF)',
    tagline: 'Empowering a Network of Changemakers',
    description: 'Seed Northern Rivers supports 35+ member organisations distributing over $8M to grassroots environmental initiatives. We built their digital backbone \u2014 a modern website showcasing their collective impact, a CRM connecting their network of changemakers, and a bespoke Giving Circle application (vibe-coded) that streamlines community grant distribution. The result: a unified platform that scales with their mission to regenerate ecosystems across Northern NSW.',
    tags: ['Website Build', 'CRM', 'Vibe-Coded App'],
    stats: ['35+ Organisations', '$8M+ Distributed', '16 Years Running'],
  },
  {
    name: 'PHYX',
    logo: 'phyx.png',
    image: 'phyx.png',
    color: '#27BAA6',
    gradient: 'linear-gradient(135deg, #176A7A, #27BAA6)',
    tagline: 'The Home of Longevity, Built to Scale',
    description: 'PHYX is redefining preventative health with compounded therapeutics and telehealth consultations. We built the complete technology stack \u2014 a Magento e-commerce storefront handling complex product bundling and subscriptions, a CRM automating the patient journey from questionnaire to delivery, a custom admin interface for clinical staff, and a mobile app bringing the PHYX experience to patients\u2019 pockets. Every touchpoint is optimised for the regulatory precision that telehealth demands.',
    tags: ['Website Build', 'Magento', 'CRM', 'Automation', 'Mobile App'],
    stats: ['100% Australian-Owned', 'AHPRA Registered', 'Full-Stack Build'],
  },
  {
    name: 'AWARDEE',
    logo: 'awardee.png',
    image: 'awardee.png',
    color: '#0079FE',
    gradient: 'linear-gradient(135deg, #212b45, #0079FE)',
    tagline: 'From Startup Idea to Live Platform',
    description: 'Awardee came to us with a vision: eliminate unnecessary staff interruptions through smart QR technology. We took them from startup concept to a fully live SaaS platform \u2014 building a responsive web application optimised for speed, integrating AI-powered chatbots trained on business content, and engineering the smart badge system that tags support tickets by location. The platform now serves retail, hospitality, and accommodation businesses with a "built for you in 24 hours" setup promise.',
    tags: ['Platform Build', 'SaaS', 'Startup to Live'],
    stats: ['Concept to Launch', 'AI-Powered', 'Multi-Industry'],
  },
  {
    name: 'AUSTRALIAN WRITERS\u2019 CENTRE',
    logo: 'awc.png',
    image: 'australian-writers-centre.png',
    color: '#E31B23',
    gradient: 'linear-gradient(135deg, #E31B23, #FF6B6B)',
    tagline: 'Australia\u2019s Leading Writing Community, Connected',
    description: 'The Australian Writers\u2019 Centre is the country\u2019s leading provider of writing courses, with tens of thousands of graduates and alumni who\u2019ve gone on to be published by major houses. We architected their CRM and LMS integration \u2014 connecting the full student lifecycle from course discovery and enrolment through lesson delivery, progress tracking, and alumni community engagement. The system handles multiple course formats (self-paced, tutor-led, live Zoom) while keeping the creative, welcoming experience their brand demands.',
    tags: ['CRM', 'LMS Integration'],
    stats: ['Tens of Thousands of Students', '15+ Years Running', 'Multi-Format Courses'],
  },
  {
    name: 'MCG',
    logo: 'mcgqs.png',
    image: 'mcg.png',
    color: '#E9484D',
    gradient: 'linear-gradient(135deg, #1a1a1a, #444444)',
    imageStyle: 'transform:scale(1.1);object-position:center 35%;',
    tagline: 'Scaling Australia\u2019s Fastest-Growing QS Firm',
    description: 'MCG Quantity Surveyors \u2014 recognised in the AFR Fast 100 as Australia\u2019s fastest-growing QS firm \u2014 needed technology to match their ambition. We built the complete automation layer: business intelligence dashboards giving directors real-time visibility, a customer and agent app streamlining property inspections, a referrer portal for accountants and buyers\u2019 agents, and a Tax Depreciation Calculator application with API service that powers their "double your fee back" guarantee. The result: a firm that scaled from boutique to national without scaling headcount.',
    tags: ['Business Automation', 'BI Dashboards', 'Apps', 'API Service'],
    stats: ['AFR Fast 100', 'National Scale', 'Money-Back Guarantee'],
  },
  {
    name: 'REAL ESTATE GYM',
    logo: 'realestategym.png',
    image: 'real-estate-gym.png',
    color: '#19ffb4',
    gradient: 'linear-gradient(135deg, #1d1d20, #2a2a30)',
    tagline: 'Train Like an Athlete, Scale Like a Business',
    description: 'Tom Panos\u2019 Real Estate Gym trains thousands of Australian agents to boost listings and close deals faster \u2014 backed by endorsements from McGrath and Ray White leadership. We built the technology platform powering it all: a Flutter mobile app delivering coaching content and weekly training sessions, a CRM managing the full member lifecycle from signup through renewal, and an automation engine handling personalised engagement at scale. Corporate packages, assessment quizzes, and multi-tier pricing all run seamlessly through the integrated stack.',
    tags: ['Flutter App', 'CRM', 'Automation Platform'],
    stats: ['Thousands of Agents', 'Industry-Endorsed', 'Multi-Tier Platform'],
  },
  {
    name: 'FILTERMAX',
    logo: 'filtermax.png',
    image: 'filtermax.png',
    color: '#fd5b2a',
    gradient: 'linear-gradient(135deg, #232323, #fd5b2a)',
    logoDark: true,
    tagline: 'Custom-Built to Supply Australia\u2019s Hardest Workers',
    description: 'Filtermax supplies filters to Australia\u2019s hardest-working fleets across mining, agriculture, heavy transport, and earthmoving. Off-the-shelf e-commerce couldn\u2019t handle their complexity \u2014 custom service kits, fleet-specific ordering, wholesale portal (FleetMax), and industry-specific catalogues. We built a purpose-engineered platform application that scales with demand: intelligent product search, fleet management tools, wholesale enquiry workflows, and a backend designed for the operational reality of industrial supply. From Albury to every mine site and farm in the country.',
    tags: ['Platform Build', 'Custom Application'],
    stats: ['Multi-Industry', 'Wholesale Portal', 'Fleet Management'],
  },
  {
    name: 'RESICERT',
    logo: 'resicert.png',
    image: 'resicert.png',
    color: '#4CAF50',
    gradient: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
    logoDark: true,
    tagline: 'From Solo Operator to National Franchise',
    description: 'Resicert\u2019s growth story is remarkable: from a single property inspector to an ISO 9001-certified national franchise with 50+ businesses across every state and territory. We built the CRM automation engine that made it possible \u2014 automating the inspection lifecycle from online booking through report delivery, managing franchisee operations, coordinating inspector dispatch across Perth to Sydney, and maintaining the 9.4/10 customer rating and 48-hour turnaround guarantee at scale. Over 141,000 inspections processed through the system since 2009. Their "Don\u2019t Expect, Inspect!" promise, delivered by technology.',
    tags: ['CRM', 'Automation', 'Franchise Scale'],
    stats: ['141,000+ Inspections', '50+ Franchises', '9.4/10 Rating'],
  },
  {
    name: 'THE HAPPY CLINIC',
    logo: 'thehappyclinic.png',
    image: 'the-happy-clinic.png',
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #0097A7, #00BCD4)',
    tagline: 'Modern Wellness, Fully Automated',
    description: 'The Happy Clinic takes a holistic approach to health and wellness — combining naturopathy, nutrition, and integrative medicine to help patients thrive. We built their complete digital ecosystem: an Ontraport-powered customer portal streamlining patient engagement from first contact through ongoing care, a custom online shop handling supplements and wellness products with automated fulfilment, AI chatbots trained on clinic protocols to answer common questions 24/7, and n8n automation workflows connecting appointments, inventory, patient communications, and billing. The result: a wellness practice that scales personalised care without scaling admin overhead.',
    tags: ['Customer Portal', 'AI Chatbots', 'Automation', 'E-commerce'],
    stats: ['Holistic Health', 'Full Automation', 'Patient-First'],
  },
];

// Generate the HTML cards with alternating layout
const generateProjectCards = () => {
  return workProjects.map((p, i) => {
    const isEven = i % 2 === 0;
    return `
      <div class="wk-proj-card">
        <div class="wk-proj-card-inner${isEven ? '' : ' wk-proj-reverse'}">
          <div class="wk-proj-img">
            <img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/images/work/${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;${(p as any).imageStyle || ''}">
          </div>
          <div class="wk-proj-content">
            ${p.logoDark ? `<div class="wk-proj-logo-dark"><img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/${p.logo}" alt="${p.name}" class="wk-proj-logo" style="margin-bottom:0 !important;"></div>` : `<img src="https://raw.githubusercontent.com/itmooti/Awesomate-AI-Web/main/src/assets/project-logos/${p.logo}" alt="${p.name}" class="wk-proj-logo">`}
            <div class="wk-proj-tagline">${p.tagline}</div>
            <div class="wk-proj-desc">${p.description}</div>
            <div class="wk-proj-stats">
              ${p.stats.map(s => `<div class="wk-proj-stat">${s}</div>`).join('\n              ')}
            </div>
            <div class="wk-proj-tags">
              ${p.tags.map(t => `<span class="wk-proj-tag">${t}</span>`).join('\n              ')}
            </div>
          </div>
        </div>
      </div>`;
  }).join('\n');
};

const WorkProjectsCode = `
<style>
  #wk-proj {
    padding: 80px 0 120px !important;
    background: var(--color-5, #ffffff) !important;
  }
  .wk-proj-container {
    max-width: 1200px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .wk-proj-card {
    margin-bottom: 64px !important;
  }
  .wk-proj-card:last-child { margin-bottom: 0 !important; }
  .wk-proj-card-inner {
    display: flex !important; flex-direction: column !important;
    gap: 0 !important; border-radius: 24px !important;
    overflow: hidden !important; border: 1px solid #f3f4f6 !important;
    background: white !important;
    transition: transform 0.3s, box-shadow 0.3s !important;
  }
  .wk-proj-card-inner:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 24px 48px rgba(0,0,0,0.08) !important;
  }
  @media (min-width: 768px) {
    .wk-proj-card-inner {
      flex-direction: row !important;
    }
    .wk-proj-card-inner.wk-proj-reverse {
      flex-direction: row-reverse !important;
    }
  }
  .wk-proj-img {
    width: 100% !important; min-height: 280px !important;
    position: relative !important; overflow: hidden !important;
    background: #f3f4f6 !important;
  }
  @media (min-width: 768px) {
    .wk-proj-img {
      width: 45% !important; flex-shrink: 0 !important; min-height: 400px !important;
    }
  }
  .wk-proj-logo {
    height: 48px !important; width: auto !important;
    object-fit: contain !important; margin-bottom: 16px !important;
  }
  .wk-proj-logo-dark {
    display: inline-flex !important; align-items: center !important;
    background: var(--color-1, #0f1128) !important;
    padding: 10px 20px !important; border-radius: 10px !important;
    margin-bottom: 16px !important; align-self: flex-start !important;
  }
  .wk-proj-content {
    padding: 32px !important; display: flex !important;
    flex-direction: column !important; justify-content: center !important;
  }
  @media (min-width: 768px) {
    .wk-proj-content { padding: 40px 48px !important; flex: 1 !important; }
  }
  .wk-proj-tagline {
    font-family: var(--font-heading) !important;
    font-size: 22px !important; color: var(--color-1) !important;
    margin-bottom: 16px !important; line-height: 1.25 !important;
    letter-spacing: -0.01em !important;
  }
  @media (min-width: 768px) {
    .wk-proj-tagline { font-size: 26px !important; }
  }
  .wk-proj-desc {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    margin-bottom: 24px !important;
  }
  .wk-proj-stats {
    display: flex !important; flex-wrap: wrap !important; gap: 16px !important;
    margin-bottom: 20px !important;
  }
  .wk-proj-stat {
    font-family: var(--font-main) !important; font-size: 13px !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .wk-proj-tags {
    display: flex !important; flex-wrap: wrap !important; gap: 6px !important;
  }
  .wk-proj-tag {
    font-family: var(--font-main) !important; font-size: 11px !important;
    padding: 5px 12px !important;
    border-radius: 6px !important; background: #f3f4f6 !important;
    color: #6b7280 !important; white-space: nowrap !important;
  }
</style>

<section id="wk-proj">
  <div class="wk-proj-container">
${generateProjectCards()}
  </div>
</section>
`;

export const WorkProjects: React.FC = () => {
  return (
    <CopyWrapper blockName="WorkProjects" codeToCopy={WorkProjectsCode}>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {workProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.name} className="mb-16 last:mb-0">
                <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} rounded-3xl overflow-hidden border border-gray-100 bg-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300`}>
                  {/* Project image */}
                  <div className="w-full md:w-[45%] md:flex-shrink-0 min-h-[280px] md:min-h-[400px] relative overflow-hidden bg-gray-100">
                    <img
                      src={`/src/assets/images/work/${project.image}`}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      style={(project as any).imageStyle ? { transform: 'scale(1.1)', objectPosition: 'center 35%' } : undefined}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 lg:px-12 flex flex-col justify-center flex-1">
                    {(project as any).logoDark ? (
                      <div className="inline-flex items-center bg-brand-navy px-5 py-2.5 rounded-[10px] mb-4 self-start">
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
                    <h3 className="font-heading font-800 text-[22px] md:text-[26px] text-brand-navy mb-4 leading-tight tracking-tight">
                      {project.tagline}
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-5">
                      {project.stats.map((stat) => (
                        <span key={stat} className="text-[13px] font-800 text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-orange">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-700 px-3 py-1.5 rounded-md bg-gray-100 text-gray-500 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </CopyWrapper>
  );
};
