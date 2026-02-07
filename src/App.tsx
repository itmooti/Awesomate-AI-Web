import React, { useState, useEffect } from 'react';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { DeploymentHub } from './components/shared/DeploymentHub';
import { HomePage } from './pages/Home';
import { N8nHostingPage } from './pages/N8nHosting';
import { BuddzeePage } from './pages/Buddzee';
import { VibeCodingPage } from './pages/VibeCoding';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { WorkPage } from './pages/Work';

type PageKey = 'home' | 'n8n-hosting' | 'buddzee' | 'vibe-coding' | 'about' | 'contact' | 'work';

const pages: Record<PageKey, { label: string; component: React.FC }> = {
  'home': { label: 'Home', component: HomePage },
  'n8n-hosting': { label: 'n8n Hosting', component: N8nHostingPage },
  'buddzee': { label: 'Buddzee', component: BuddzeePage },
  'vibe-coding': { label: 'Vibe Coding', component: VibeCodingPage },
  'about': { label: 'About', component: AboutPage },
  'contact': { label: 'Contact', component: ContactPage },
  'work': { label: 'Work', component: WorkPage },
};

function getPageFromHash(): PageKey {
  const hash = window.location.hash.replace('#', '');
  if (hash in pages) return hash as PageKey;
  return 'home';
}

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: PageKey) => {
    window.location.hash = page;
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const PageComponent = pages[activePage].component;

  return (
    <div className="min-h-screen">
      {/* Dev page switcher */}
      <div className="fixed top-0 left-0 right-0 z-[99999] bg-brand-navy/95 backdrop-blur-md border-b border-white/10 px-4 py-2 flex items-center gap-2 justify-center">
        <span className="text-[9px] text-white/40 font-800 uppercase tracking-widest mr-3">Page:</span>
        {(Object.keys(pages) as PageKey[]).map((key) => (
          <button
            key={key}
            onClick={() => navigate(key)}
            className={`text-[10px] font-800 uppercase tracking-wider px-3 py-1.5 rounded-md transition-all ${
              activePage === key
                ? 'bg-brand-accent text-white'
                : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            {pages[key].label}
          </button>
        ))}
      </div>

      {/* Spacer for dev nav */}
      <div className="h-10" />

      <Header />
      <PageComponent />
      <Footer />
      <DeploymentHub />
    </div>
  );
};
