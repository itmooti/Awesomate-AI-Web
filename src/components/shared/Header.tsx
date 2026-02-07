
import React, { useState } from 'react';
import { CopyWrapper } from './CopyWrapper';

const HeaderCode = `
<style>
    #awesomate-header {
      position: sticky !important; top: 0 !important; left: 0 !important; right: 0 !important;
      z-index: 99999 !important; background: rgba(255,255,255,0.95) !important;
      backdrop-filter: blur(20px) !important; -webkit-backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid rgba(243,244,246,0.8) !important; width: 100% !important;
      margin: 0 !important; padding: 0 !important;
    }
    .hdr-inner {
      max-width: 1440px !important; margin: 0 auto !important;
      padding: 0 24px !important; display: flex !important;
      justify-content: space-between !important; align-items: center !important;
      height: 72px !important;
    }
    .hdr-logo {
      display: inline-flex !important; align-items: center !important;
      text-decoration: none !important;
    }
    .hdr-logo svg { height: 26px !important; width: auto !important; }

    .hdr-nav { display: none !important; align-items: center !important; gap: 8px !important; }
    @media (min-width: 1024px) { .hdr-nav { display: flex !important; } }

    .hdr-link {
      font-size: 13px !important; font-weight: 600 !important;
      color: #6b7280 !important; text-decoration: none !important;
      transition: all 0.2s !important; padding: 8px 14px !important;
      border-radius: 8px !important;
    }
    .hdr-link:hover { color: var(--color-2) !important; background: rgba(233,72,77,0.04) !important; }

    .hdr-services { position: relative !important; }
    .hdr-services-btn {
      font-size: 13px !important; font-weight: 600 !important;
      color: #6b7280 !important; padding: 8px 14px !important;
      border-radius: 8px !important; border: none !important;
      background: none !important; cursor: pointer !important;
      display: flex !important; align-items: center !important; gap: 4px !important;
      transition: all 0.2s !important;
    }
    .hdr-services-btn:hover { color: var(--color-2) !important; background: rgba(233,72,77,0.04) !important; }
    .hdr-services-btn svg { width: 12px !important; height: 12px !important; transition: transform 0.2s !important; }
    .hdr-services.open .hdr-services-btn svg { transform: rotate(180deg) !important; }

    .hdr-dropdown {
      position: absolute !important; top: calc(100% + 8px) !important; left: 50% !important;
      transform: translateX(-50%) !important; background: white !important;
      border: 1px solid #f3f4f6 !important; border-radius: 16px !important;
      box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02) !important;
      padding: 8px !important; min-width: 340px !important;
      opacity: 0 !important; visibility: hidden !important;
      transition: all 0.2s !important; pointer-events: none !important;
    }
    .hdr-services.open .hdr-dropdown {
      opacity: 1 !important; visibility: visible !important; pointer-events: auto !important;
    }

    .hdr-drop-item {
      display: flex !important; gap: 12px !important; padding: 12px 16px !important;
      border-radius: 12px !important; text-decoration: none !important;
      transition: background 0.15s !important; align-items: flex-start !important;
    }
    .hdr-drop-item:hover { background: #f9fafb !important; }
    .hdr-drop-icon {
      width: 36px !important; height: 36px !important; border-radius: 10px !important;
      display: flex !important; align-items: center !important; justify-content: center !important;
      font-size: 14px !important; font-weight: 800 !important; flex-shrink: 0 !important;
    }
    .hdr-drop-title { font-size: 14px !important; font-weight: 700 !important; color: var(--color-1) !important; margin-bottom: 2px !important; }
    .hdr-drop-desc { font-size: 12px !important; color: #9ca3af !important; line-height: 1.4 !important; }

    .hdr-cta {
      background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
      color: white !important; padding: 10px 20px !important;
      border-radius: 8px !important; font-size: 13px !important;
      font-weight: 800 !important; text-decoration: none !important;
      transition: all 0.2s !important; display: inline-block !important;
      text-transform: uppercase !important; letter-spacing: 0.05em !important;
    }
    .hdr-cta:hover { transform: translateY(-1px) !important; box-shadow: 0 8px 20px rgba(233,72,77,0.25) !important; }

    .hdr-mobile-toggle { display: flex !important; }
    @media (min-width: 1024px) { .hdr-mobile-toggle { display: none !important; } }
</style>

<header id="awesomate-header">
    <div class="hdr-inner">
        <a href="/" class="hdr-logo"><svg viewBox="568 478 762 125" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hdr-lg" x1="595" y1="590" x2="725" y2="480" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fe3346"/><stop offset="1" stop-color="#ff9257"/></linearGradient></defs><path fill="url(#hdr-lg)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/><path fill="#0f112a" d="M770.28,509.49h14.93l30.46,79.96h-15.53l-6.14-16.86h-33.35l-6.02,16.86h-14.57l30.22-79.96ZM764.86,560.79h24.93l-12.52-34.8-12.4,34.8Z"/><polygon fill="#0f112a" points="845.58 530.44 859.31 530.44 869.79 571.99 878.58 530.44 893.03 530.44 877.01 589.45 864.37 589.45 852.45 546.1 840.64 589.45 828 589.45 811.99 530.44 826.44 530.44 835.23 571.99 845.58 530.44"/><path fill="#0f112a" d="M892.87,560.06c0-18.18,11.68-30.83,29.14-30.83,18.78,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M906.35,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/><path fill="#0f112a" d="M994.99,548.62c-1.33-5.78-6.62-9.27-14.09-9.27-6.02,0-11.08,2.17-11.08,6.14,0,3.73,3.61,5.78,9.15,6.98l6.99,1.45c12.04,2.65,22.28,6.02,22.28,17.58,0,12.52-11.8,19.39-25.77,19.39-15.53,0-25.53-8.79-26.73-19.51l13.01-1.93c1.08,6.38,5.66,11.32,14.21,11.32,7.35,0,12.16-2.65,12.16-7.47s-5.18-6.5-11.32-7.83l-7.83-1.69c-10.36-2.17-18.79-6.38-18.79-17.46s11.2-17.1,24.69-17.1c12.4,0,23.36,6.14,25.65,17.7l-12.52,1.68Z"/><path fill="#0f112a" d="M1067.12,542.38l-7.54,7.52c-1.63,1.63-2.34,3.91-2.1,6.2.13,1.25.2,2.58.2,3.99,0,13.36-6.15,20.1-15.17,20.1-2.14,0-4.12-.4-5.9-1.18-2.65-1.16-5.76-.36-7.81,1.68l-4.45,4.45c5.07,3.9,11.47,5.76,18.15,5.76,15.17,0,28.9-9.63,28.9-30.82,0-7.21-1.59-13.11-4.29-17.71M1027.34,560.09c0-13.39,6.26-20.13,15.17-20.13,2.16,0,4.16.38,5.95,1.16,2.65,1.15,5.75.33,7.79-1.71l4.38-4.38c-5.07-3.93-11.47-5.79-18.12-5.79-15.17,0-28.9,9.63-28.9,30.85,0,7.21,1.59,13.06,4.29,17.68l7.56-7.56c1.62-1.62,2.33-3.89,2.08-6.17-.13-1.24-.2-2.56-.2-3.95"/><path fill="#0f112a" d="M1077.41,530.44h13.37v7.35c3.25-5.42,9.03-8.55,17.34-8.55,9.99,0,14.45,4.46,17.1,9.63,4.58-6.38,10.72-9.63,20.11-9.63,6.74,0,12.04,2.29,15.17,6.02,3.25,3.85,4.7,9.39,4.7,17.7v36.49h-13.37v-33.6c0-5.66-.6-9.63-2.53-12.04-1.69-2.29-4.33-3.49-8.55-3.49-9.75,0-12.76,7.95-12.76,18.3v30.83h-13.37v-33.6c0-5.78-.6-9.75-2.53-12.16-1.81-2.17-4.46-3.37-8.43-3.37-9.87,0-12.88,7.95-12.88,18.3v30.83h-13.37v-59Z"/><path fill="#0f112a" d="M1176.41,548.38c.84-11.68,10.36-19.39,25.89-19.39,17.1,0,24.44,6.14,24.44,22.64,0,3.85-.24,13.73-.24,16.98,0,7.59.36,13.73,1.2,20.83h-12.52l-.36-7.1c-3.73,5.54-9.51,8.55-19.15,8.55-13.61,0-21.31-9.15-21.31-19.27,0-5.78,2.65-10.11,6.5-12.76,5.3-3.61,12.52-5.06,21.56-6.14l11.08-1.2v-2.05c0-8.07-4.82-10.48-11.92-10.48-7.59,0-12.16,3.49-12.76,9.75l-12.4-.36ZM1213.98,561.27l-11.2,1.2c-10.11,1.08-14.57,3.85-14.57,9.27,0,5.06,3.97,8.67,10.36,8.67,7.83,0,15.41-4.46,15.41-15.53v-3.61Z"/><path fill="#0f112a" d="M1239.51,513.34h13.37v17.1h12.04v10.23h-12.04v30.59c0,6.14,1.44,7.58,7.1,7.58h4.82v10.6h-9.75c-12.88,0-15.53-3.49-15.53-15.77v-32.99h-8.91v-10.23h8.91v-17.1Z"/><path fill="#0f112a" d="M1268.73,560.06c0-18.18,11.68-30.83,29.14-30.83,18.79,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M1282.22,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/></svg></a>

        <nav class="hdr-nav">
            <div class="hdr-services" id="hdr-services">
                <button class="hdr-services-btn" onclick="document.getElementById('hdr-services').classList.toggle('open')">
                    Services
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div class="hdr-dropdown">
                    <a href="/n8n-hosting" class="hdr-drop-item">
                        <div class="hdr-drop-icon" style="background: rgba(233,72,77,0.08); color: var(--color-2);">n8</div>
                        <div>
                            <div class="hdr-drop-title">n8n Hosting</div>
                            <div class="hdr-drop-desc">Triple-redundant managed hosting that never goes down</div>
                        </div>
                    </a>
                    <a href="/buddzee" class="hdr-drop-item">
                        <div class="hdr-drop-icon" style="background: rgba(82,132,255,0.08); color: #5284FF;">Bz</div>
                        <div>
                            <div class="hdr-drop-title">Buddzee</div>
                            <div class="hdr-drop-desc">Your business data buddy — AI insights and automation</div>
                        </div>
                    </a>
                    <a href="/vibe-coding" class="hdr-drop-item">
                        <div class="hdr-drop-icon" style="background: rgba(239,149,99,0.08); color: var(--color-3);">Vc</div>
                        <div>
                            <div class="hdr-drop-title">Vibe Coding</div>
                            <div class="hdr-drop-desc">AI-powered app development at a fraction of the cost</div>
                        </div>
                    </a>
                </div>
            </div>
            <a href="/work" class="hdr-link">Work</a>
            <a href="/about" class="hdr-link">About</a>
            <a href="/contact" class="hdr-link">Contact</a>
            <a href="/contact" class="hdr-cta button" style="margin-left: 8px;">Get Started</a>
        </nav>

        <div class="hdr-mobile-toggle">
            <a href="/contact" class="hdr-cta button">Get Started</a>
        </div>
    </div>
</header>

<script>
    document.addEventListener('click', function(e) {
        var services = document.getElementById('hdr-services');
        if (services && !services.contains(e.target)) {
            services.classList.remove('open');
        }
    });
</script>
`;

export const Header: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <CopyWrapper blockName="Header" codeToCopy={HeaderCode}>
      <header className="sticky top-0 z-[10000] bg-white/95 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-[72px]">
            <a href="#home" className="inline-flex items-center no-underline">
              <svg viewBox="568 478 762 125" className="h-[26px] w-auto" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hdr-lg-preview" x1="595" y1="590" x2="725" y2="480" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fe3346"/><stop offset="1" stopColor="#ff9257"/></linearGradient></defs><path fill="url(#hdr-lg-preview)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/><path fill="#0f112a" d="M770.28,509.49h14.93l30.46,79.96h-15.53l-6.14-16.86h-33.35l-6.02,16.86h-14.57l30.22-79.96ZM764.86,560.79h24.93l-12.52-34.8-12.4,34.8Z"/><polygon fill="#0f112a" points="845.58 530.44 859.31 530.44 869.79 571.99 878.58 530.44 893.03 530.44 877.01 589.45 864.37 589.45 852.45 546.1 840.64 589.45 828 589.45 811.99 530.44 826.44 530.44 835.23 571.99 845.58 530.44"/><path fill="#0f112a" d="M892.87,560.06c0-18.18,11.68-30.83,29.14-30.83,18.78,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M906.35,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/><path fill="#0f112a" d="M994.99,548.62c-1.33-5.78-6.62-9.27-14.09-9.27-6.02,0-11.08,2.17-11.08,6.14,0,3.73,3.61,5.78,9.15,6.98l6.99,1.45c12.04,2.65,22.28,6.02,22.28,17.58,0,12.52-11.8,19.39-25.77,19.39-15.53,0-25.53-8.79-26.73-19.51l13.01-1.93c1.08,6.38,5.66,11.32,14.21,11.32,7.35,0,12.16-2.65,12.16-7.47s-5.18-6.5-11.32-7.83l-7.83-1.69c-10.36-2.17-18.79-6.38-18.79-17.46s11.2-17.1,24.69-17.1c12.4,0,23.36,6.14,25.65,17.7l-12.52,1.68Z"/><path fill="#0f112a" d="M1067.12,542.38l-7.54,7.52c-1.63,1.63-2.34,3.91-2.1,6.2.13,1.25.2,2.58.2,3.99,0,13.36-6.15,20.1-15.17,20.1-2.14,0-4.12-.4-5.9-1.18-2.65-1.16-5.76-.36-7.81,1.68l-4.45,4.45c5.07,3.9,11.47,5.76,18.15,5.76,15.17,0,28.9-9.63,28.9-30.82,0-7.21-1.59-13.11-4.29-17.71M1027.34,560.09c0-13.39,6.26-20.13,15.17-20.13,2.16,0,4.16.38,5.95,1.16,2.65,1.15,5.75.33,7.79-1.71l4.38-4.38c-5.07-3.93-11.47-5.79-18.12-5.79-15.17,0-28.9,9.63-28.9,30.85,0,7.21,1.59,13.06,4.29,17.68l7.56-7.56c1.62-1.62,2.33-3.89,2.08-6.17-.13-1.24-.2-2.56-.2-3.95"/><path fill="#0f112a" d="M1077.41,530.44h13.37v7.35c3.25-5.42,9.03-8.55,17.34-8.55,9.99,0,14.45,4.46,17.1,9.63,4.58-6.38,10.72-9.63,20.11-9.63,6.74,0,12.04,2.29,15.17,6.02,3.25,3.85,4.7,9.39,4.7,17.7v36.49h-13.37v-33.6c0-5.66-.6-9.63-2.53-12.04-1.69-2.29-4.33-3.49-8.55-3.49-9.75,0-12.76,7.95-12.76,18.3v30.83h-13.37v-33.6c0-5.78-.6-9.75-2.53-12.16-1.81-2.17-4.46-3.37-8.43-3.37-9.87,0-12.88,7.95-12.88,18.3v30.83h-13.37v-59Z"/><path fill="#0f112a" d="M1176.41,548.38c.84-11.68,10.36-19.39,25.89-19.39,17.1,0,24.44,6.14,24.44,22.64,0,3.85-.24,13.73-.24,16.98,0,7.59.36,13.73,1.2,20.83h-12.52l-.36-7.1c-3.73,5.54-9.51,8.55-19.15,8.55-13.61,0-21.31-9.15-21.31-19.27,0-5.78,2.65-10.11,6.5-12.76,5.3-3.61,12.52-5.06,21.56-6.14l11.08-1.2v-2.05c0-8.07-4.82-10.48-11.92-10.48-7.59,0-12.16,3.49-12.76,9.75l-12.4-.36ZM1213.98,561.27l-11.2,1.2c-10.11,1.08-14.57,3.85-14.57,9.27,0,5.06,3.97,8.67,10.36,8.67,7.83,0,15.41-4.46,15.41-15.53v-3.61Z"/><path fill="#0f112a" d="M1239.51,513.34h13.37v17.1h12.04v10.23h-12.04v30.59c0,6.14,1.44,7.58,7.1,7.58h4.82v10.6h-9.75c-12.88,0-15.53-3.49-15.53-15.77v-32.99h-8.91v-10.23h8.91v-17.1Z"/><path fill="#0f112a" d="M1268.73,560.06c0-18.18,11.68-30.83,29.14-30.83,18.79,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M1282.22,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/></svg>
            </a>

            <nav className="hidden lg:flex items-center gap-2">
              <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 text-[13px] font-600 text-gray-500 hover:text-brand-accent hover:bg-brand-accent/5 px-3.5 py-2 rounded-lg transition-all"
                >
                  Services
                  <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 min-w-[340px] z-50">
                    <a href="#n8n-hosting" onClick={() => setServicesOpen(false)} className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors no-underline items-start">
                      <div className="w-9 h-9 rounded-[10px] bg-brand-accent/10 text-brand-accent flex items-center justify-center text-sm font-800 flex-shrink-0">n8</div>
                      <div>
                        <div className="text-sm font-700 text-brand-navy">n8n Hosting</div>
                        <div className="text-xs text-gray-400 leading-snug">Triple-redundant managed hosting that never goes down</div>
                      </div>
                    </a>
                    <a href="#buddzee" onClick={() => setServicesOpen(false)} className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors no-underline items-start">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-800 flex-shrink-0" style={{ background: 'rgba(82,132,255,0.1)', color: '#5284FF' }}>Bz</div>
                      <div>
                        <div className="text-sm font-700 text-brand-navy">Buddzee</div>
                        <div className="text-xs text-gray-400 leading-snug">Your business data buddy — AI insights and automation</div>
                      </div>
                    </a>
                    <a href="#vibe-coding" onClick={() => setServicesOpen(false)} className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors no-underline items-start">
                      <div className="w-9 h-9 rounded-[10px] bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm font-800 flex-shrink-0">Vc</div>
                      <div>
                        <div className="text-sm font-700 text-brand-navy">Vibe Coding</div>
                        <div className="text-xs text-gray-400 leading-snug">AI-powered app development at a fraction of the cost</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              <a href="#work" className="text-[13px] font-600 text-gray-500 hover:text-brand-accent hover:bg-brand-accent/5 px-3.5 py-2 rounded-lg transition-all no-underline">Work</a>
              <a href="#about" className="text-[13px] font-600 text-gray-500 hover:text-brand-accent hover:bg-brand-accent/5 px-3.5 py-2 rounded-lg transition-all no-underline">About</a>
              <a href="#contact" className="text-[13px] font-600 text-gray-500 hover:text-brand-accent hover:bg-brand-accent/5 px-3.5 py-2 rounded-lg transition-all no-underline">Contact</a>

              <a href="#contact" className="ml-2 bg-gradient-to-br from-brand-accent to-brand-orange text-white px-5 py-2.5 rounded-lg text-[13px] font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all no-underline whitespace-nowrap">
                Get Started
              </a>
            </nav>

            <div className="lg:hidden">
              <a href="#contact" className="bg-gradient-to-br from-brand-accent to-brand-orange text-white px-5 py-2.5 rounded-lg text-[13px] font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 no-underline whitespace-nowrap">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </CopyWrapper>
  );
};
