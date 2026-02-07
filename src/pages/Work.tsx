import React from 'react';
import { WorkHero } from '../components/work/WorkHero';
import { WorkProjects } from '../components/work/WorkProjects';

export const WorkPage: React.FC = () => {
  return (
    <>
      <WorkHero />
      <WorkProjects />
    </>
  );
};
