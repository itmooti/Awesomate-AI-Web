import React from 'react';
import { Hero } from '../components/n8n-hosting/Hero';
import { N8nProblem } from '../components/n8n-hosting/N8nProblem';
import { Infrastructure } from '../components/n8n-hosting/Infrastructure';
import { WhoItIsFor } from '../components/n8n-hosting/WhoItIsFor';
import { PerformanceScale } from '../components/n8n-hosting/PerformanceScale';
import { Pricing } from '../components/n8n-hosting/Pricing';
import { FAQ } from '../components/n8n-hosting/FAQ';
import { N8nCTA } from '../components/n8n-hosting/N8nCTA';

export const N8nHostingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <N8nProblem />
      <Infrastructure />
      <WhoItIsFor />
      <PerformanceScale />
      <Pricing />
      <FAQ />
      <N8nCTA />
    </>
  );
};
