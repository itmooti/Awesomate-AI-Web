
import React, { useState } from 'react';

interface CopyWrapperProps {
  children: React.ReactNode;
  blockName: string;
  codeToCopy: string;
}

export const CopyWrapper: React.FC<CopyWrapperProps> = ({ children, blockName, codeToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group">
      {/* Hidden storage for Deployment Hub */}
      <div id={`${blockName.toLowerCase()}-code`} className="hidden">{codeToCopy}</div>
      
      {children}
      <button
        onClick={handleCopy}
        className="dev-copy-utility absolute bottom-4 right-4 z-50 flex items-center gap-2 bg-brand-navy text-white px-3 py-2 rounded-lg shadow-xl opacity-20 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 border border-white/10"
        title={`Copy HTML for ${blockName}`}
      >
        <span className="text-xs font-bold uppercase tracking-widest">
          {copied ? 'COPIED!' : `COPY ${blockName}`}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </button>
    </div>
  );
};
