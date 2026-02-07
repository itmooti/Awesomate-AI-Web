import React from 'react';
import { BuddzeeHero } from '../components/buddzee/BuddzeeHero';
import { BuddzeeProblem } from '../components/buddzee/BuddzeeProblem';
import { BuddzeeHowItWorks } from '../components/buddzee/BuddzeeHowItWorks';
import { BuddzeeFeatures } from '../components/buddzee/BuddzeeFeatures';
import { BuddzeeUseCases } from '../components/buddzee/BuddzeeUseCases';
import { BuddzeePricing } from '../components/buddzee/BuddzeePricing';
import { BuddzeeFAQ } from '../components/buddzee/BuddzeeFAQ';
import { BuddzeeCTA } from '../components/buddzee/BuddzeeCTA';

export const BuddzeePage: React.FC = () => {
  return (
    <>
      <BuddzeeHero />
      <BuddzeeProblem />
      <BuddzeeHowItWorks />
      <BuddzeeFeatures />
      <BuddzeeUseCases />
      <BuddzeePricing />
      <BuddzeeFAQ />
      <BuddzeeCTA />
    </>
  );
};
