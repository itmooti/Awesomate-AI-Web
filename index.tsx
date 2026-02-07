
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Header';
import { Hero } from './Hero';
import { Infrastructure } from './Infrastructure';
import { WhoItIsFor } from './WhoItIsFor';
import { PerformanceScale } from './PerformanceScale';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import { DeploymentHub } from './DeploymentHub';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Infrastructure />
      <WhoItIsFor />
      <PerformanceScale />
      <Pricing />
      <FAQ />
      <Footer />
      <DeploymentHub />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
