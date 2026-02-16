import React from 'react';
import { Hero } from '../components/n8n-hosting/Hero';
import { N8nProblem } from '../components/n8n-hosting/N8nProblem';
import { WhyAwesomate } from '../components/n8n-hosting/WhyAwesomate';
import { Comparison } from '../components/n8n-hosting/Comparison';
import { WhoItIsFor } from '../components/n8n-hosting/WhoItIsFor';
import { Pricing } from '../components/n8n-hosting/Pricing';
import { DiscountPricing } from '../components/n8n-hosting/DiscountPricing';
import { FAQ } from '../components/n8n-hosting/FAQ';
import { N8nCTA } from '../components/n8n-hosting/N8nCTA';

export const N8nHostingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <N8nProblem />
      <WhyAwesomate />
      <Comparison />
      <WhoItIsFor />
      <Pricing />
      <DiscountPricing />
      <FAQ />
      <N8nCTA />
    </>
  );
};
