import React from 'react';
import { VibeHero } from '../components/vibe-coding/VibeHero';
import { VibeExplainer } from '../components/vibe-coding/VibeExplainer';
import { VibeProcess } from '../components/vibe-coding/VibeProcess';
import { VibeFeatures } from '../components/vibe-coding/VibeFeatures';
import { VibeWhoItsFor } from '../components/vibe-coding/VibeWhoItsFor';
import { VibePricing } from '../components/vibe-coding/VibePricing';
import { VibeFAQ } from '../components/vibe-coding/VibeFAQ';
import { VibeCTA } from '../components/vibe-coding/VibeCTA';

export const VibeCodingPage: React.FC = () => {
  return (
    <>
      <VibeHero />
      <VibeExplainer />
      <VibeProcess />
      <VibeFeatures />
      <VibeWhoItsFor />
      <VibePricing />
      <VibeFAQ />
      <VibeCTA />
    </>
  );
};
