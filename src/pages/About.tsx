import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutStory } from '../components/about/AboutStory';
import { AboutValues } from '../components/about/AboutValues';
import { AboutProcess } from '../components/about/AboutProcess';
import { AboutCTA } from '../components/about/AboutCTA';

export const AboutPage: React.FC = () => (
  <>
    <AboutHero />
    <AboutStory />
    <AboutValues />
    <AboutProcess />
    <AboutCTA />
  </>
);
