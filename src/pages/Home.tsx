import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { ServicesSolutions } from '../components/home/ServicesSolutions';
import { WhyAwesomate } from '../components/home/WhyAwesomate';
import { SocialProof } from '../components/home/SocialProof';
import { ProjectShowcase } from '../components/home/ProjectShowcase';
import { HomeCTA } from '../components/home/HomeCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <ServicesSolutions />
      <WhyAwesomate />
      <SocialProof />
      <ProjectShowcase />
      <HomeCTA />
    </>
  );
};
