
import React, { useState } from 'react';

const GlobalCode = `
<!-- Paste this in Page Settings > Custom Code > Header -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

<style>
  /* ONTRAPORT COLOR PALETTE MAPPING */
  :root {
    --color-1: #0f1128; /* Navy (Primary Text/Dark) */
    --color-2: #e9484d; /* Red (Accent 1) */
    --color-3: #ef9563; /* Orange (Accent 2) */
    --color-4: #1e63e9; /* Blue (Link/Info) */
    --color-5: #ffffff; /* White (Background) */
    --color-bg-alt: #f8f9fb; /* Alternating section backgrounds */
    --color-bg-dark: #0a0e1a; /* Dark sections */

    --font-main: 'Inter', sans-serif;
    --font-heading: 'Bricolage Grotesque', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --font-buddzee: 'Manrope', sans-serif;
  }

  /* INTERACTION & ACCESSIBILITY RESETS */
  * {
    box-sizing: border-box !important;
    -webkit-tap-highlight-color: transparent !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  *:focus-visible {
    outline: 2px solid var(--color-2) !important;
    outline-offset: 4px !important;
  }

  /* ONTRAPORT TYPOGRAPHY OVERRIDES (4x SPECIFICITY) — font-weight left to Ontraport UI */
  .h1.h1.h1.h1 { font-family: var(--font-heading); color: var(--color-1); line-height: 1.1; }
  .h2.h2.h2.h2 { font-family: var(--font-heading); color: var(--color-1); line-height: 1.2; }
  .h3.h3.h3.h3 { font-family: var(--font-heading); color: var(--color-1); }
  .body-text.body-text.body-text.body-text { font-family: var(--font-main); font-size: 16px; color: #4b5563; line-height: 1.6; }
  .button.button.button.button { font-family: var(--font-main); text-transform: uppercase; letter-spacing: 0.05em; border-radius: 8px; }
  .label.label.label.label { font-family: var(--font-main); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }

  /* UNIVERSAL RESET FOR CUSTOM HTML BLOCKS */
  html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; overflow-x: hidden !important; scroll-behavior: smooth; }

  .accent-gradient-text {
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
</style>

<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            navy: '#0f1128',
            accent: '#e9484d',
            orange: '#ef9563',
            blue: '#1e63e9'
          },
          buddzee: {
            navy: '#09142B',
            blue: '#5284FF',
            'blue-light': '#ABC1FF',
            cloud: '#EDEFF7'
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Bricolage Grotesque', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
          buddzee: ['Manrope', 'sans-serif']
        }
      }
    }
  }
</script>
`;

const FooterBlockCode = `
<style>
  #awesomate-footer { background: var(--color-5); padding: 80px 0 40px; border-top: 1px solid #f3f4f6; }
  .ft-container { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
  .ft-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
  @media (min-width: 768px) { .ft-grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }
  .ft-logo { display: inline-flex; align-items: center; text-decoration: none; margin-bottom: 16px; }
  .ft-logo svg { height: 28px; width: auto; }
  .ft-desc { font-family: var(--font-main); font-size: 14px; color: #9ca3af; line-height: 1.7; max-width: 320px; }
  .ft-heading { font-family: var(--font-main); font-size: 12px; color: var(--color-1); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px; }
  .ft-link { display: block; font-family: var(--font-main); font-size: 14px; color: #6b7280; text-decoration: none; margin-bottom: 14px; transition: color 0.2s; }
  .ft-link:hover { color: var(--color-2); }
  .ft-bottom { margin-top: 60px; padding-top: 32px; border-top: 1px solid #f3f4f6; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; }
  .ft-copyright { font-family: var(--font-main); font-size: 13px; color: #d1d5db; }
  .ft-legal { display: flex; gap: 24px; }
  .ft-legal a { font-family: var(--font-main); font-size: 13px; color: #d1d5db; text-decoration: none; transition: color 0.2s; }
  .ft-legal a:hover { color: var(--color-2); }
</style>

<footer id="awesomate-footer">
  <div class="ft-container">
    <div class="ft-grid">
      <div>
        <a href="/" class="ft-logo"><svg viewBox="568 478 762 125" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ft-lg" x1="595" y1="590" x2="725" y2="480" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fe3346"/><stop offset="1" stop-color="#ff9257"/></linearGradient></defs><path fill="url(#ft-lg)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/><path fill="#0f112a" d="M770.28,509.49h14.93l30.46,79.96h-15.53l-6.14-16.86h-33.35l-6.02,16.86h-14.57l30.22-79.96ZM764.86,560.79h24.93l-12.52-34.8-12.4,34.8Z"/><polygon fill="#0f112a" points="845.58 530.44 859.31 530.44 869.79 571.99 878.58 530.44 893.03 530.44 877.01 589.45 864.37 589.45 852.45 546.1 840.64 589.45 828 589.45 811.99 530.44 826.44 530.44 835.23 571.99 845.58 530.44"/><path fill="#0f112a" d="M892.87,560.06c0-18.18,11.68-30.83,29.14-30.83,18.78,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M906.35,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/><path fill="#0f112a" d="M994.99,548.62c-1.33-5.78-6.62-9.27-14.09-9.27-6.02,0-11.08,2.17-11.08,6.14,0,3.73,3.61,5.78,9.15,6.98l6.99,1.45c12.04,2.65,22.28,6.02,22.28,17.58,0,12.52-11.8,19.39-25.77,19.39-15.53,0-25.53-8.79-26.73-19.51l13.01-1.93c1.08,6.38,5.66,11.32,14.21,11.32,7.35,0,12.16-2.65,12.16-7.47s-5.18-6.5-11.32-7.83l-7.83-1.69c-10.36-2.17-18.79-6.38-18.79-17.46s11.2-17.1,24.69-17.1c12.4,0,23.36,6.14,25.65,17.7l-12.52,1.68Z"/><path fill="#0f112a" d="M1067.12,542.38l-7.54,7.52c-1.63,1.63-2.34,3.91-2.1,6.2.13,1.25.2,2.58.2,3.99,0,13.36-6.15,20.1-15.17,20.1-2.14,0-4.12-.4-5.9-1.18-2.65-1.16-5.76-.36-7.81,1.68l-4.45,4.45c5.07,3.9,11.47,5.76,18.15,5.76,15.17,0,28.9-9.63,28.9-30.82,0-7.21-1.59-13.11-4.29-17.71M1027.34,560.09c0-13.39,6.26-20.13,15.17-20.13,2.16,0,4.16.38,5.95,1.16,2.65,1.15,5.75.33,7.79-1.71l4.38-4.38c-5.07-3.93-11.47-5.79-18.12-5.79-15.17,0-28.9,9.63-28.9,30.85,0,7.21,1.59,13.06,4.29,17.68l7.56-7.56c1.62-1.62,2.33-3.89,2.08-6.17-.13-1.24-.2-2.56-.2-3.95"/><path fill="#0f112a" d="M1077.41,530.44h13.37v7.35c3.25-5.42,9.03-8.55,17.34-8.55,9.99,0,14.45,4.46,17.1,9.63,4.58-6.38,10.72-9.63,20.11-9.63,6.74,0,12.04,2.29,15.17,6.02,3.25,3.85,4.7,9.39,4.7,17.7v36.49h-13.37v-33.6c0-5.66-.6-9.63-2.53-12.04-1.69-2.29-4.33-3.49-8.55-3.49-9.75,0-12.76,7.95-12.76,18.3v30.83h-13.37v-33.6c0-5.78-.6-9.75-2.53-12.16-1.81-2.17-4.46-3.37-8.43-3.37-9.87,0-12.88,7.95-12.88,18.3v30.83h-13.37v-59Z"/><path fill="#0f112a" d="M1176.41,548.38c.84-11.68,10.36-19.39,25.89-19.39,17.1,0,24.44,6.14,24.44,22.64,0,3.85-.24,13.73-.24,16.98,0,7.59.36,13.73,1.2,20.83h-12.52l-.36-7.1c-3.73,5.54-9.51,8.55-19.15,8.55-13.61,0-21.31-9.15-21.31-19.27,0-5.78,2.65-10.11,6.5-12.76,5.3-3.61,12.52-5.06,21.56-6.14l11.08-1.2v-2.05c0-8.07-4.82-10.48-11.92-10.48-7.59,0-12.16,3.49-12.76,9.75l-12.4-.36ZM1213.98,561.27l-11.2,1.2c-10.11,1.08-14.57,3.85-14.57,9.27,0,5.06,3.97,8.67,10.36,8.67,7.83,0,15.41-4.46,15.41-15.53v-3.61Z"/><path fill="#0f112a" d="M1239.51,513.34h13.37v17.1h12.04v10.23h-12.04v30.59c0,6.14,1.44,7.58,7.1,7.58h4.82v10.6h-9.75c-12.88,0-15.53-3.49-15.53-15.77v-32.99h-8.91v-10.23h8.91v-17.1Z"/><path fill="#0f112a" d="M1268.73,560.06c0-18.18,11.68-30.83,29.14-30.83,18.79,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M1282.22,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/></svg></a>
        <p class="ft-desc">Your complete business technology partner. Automation hosting, unified data, and AI-powered app development — everything you need to run smarter.</p>
      </div>
      <div>
        <div class="ft-heading">Services</div>
        <a href="/n8n-hosting" class="ft-link">n8n Hosting</a>
        <a href="/buddzee" class="ft-link">Buddzee</a>
        <a href="/vibe-coding" class="ft-link">Vibe Coding</a>
      </div>
      <div>
        <div class="ft-heading">Company</div>
        <a href="/about" class="ft-link">About</a>
        <a href="/contact" class="ft-link">Contact</a>
        <a href="/privacy" class="ft-link">Privacy Policy</a>
      </div>
      <div>
        <div class="ft-heading">Support</div>
        <a href="/faq" class="ft-link">FAQ</a>
        <a href="mailto:hello@awesomate.ai" class="ft-link">hello@awesomate.ai</a>
      </div>
    </div>
    <div class="ft-bottom">
      <div class="ft-copyright">&copy; 2025 Awesomate.ai. All rights reserved.</div>
      <div class="ft-legal">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  </div>
</footer>
`;

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyGlobal = () => {
    navigator.clipboard.writeText(GlobalCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-20 relative">
      <div id="footer-code" className="hidden">{FooterBlockCode}</div>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <a href="#home" className="inline-flex items-center no-underline mb-4">
              <svg viewBox="568 478 762 125" className="h-[28px] w-auto" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ft-lg-preview" x1="595" y1="590" x2="725" y2="480" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fe3346"/><stop offset="1" stopColor="#ff9257"/></linearGradient></defs><path fill="url(#ft-lg-preview)" d="M618.27,518.66c0,3.6.54,7.07,1.55,10.33h0,0c.78,2.52,1.83,4.92,3.13,7.16h0s4.55,7.86,4.55,7.86l2.8,4.85c.32-.03.65-.05.98-.05,5.82,0,10.54,4.72,10.54,10.54s-4.72,10.55-10.54,10.55-10.54-4.72-10.54-10.55c0-2.18.66-4.2,1.79-5.88l-12.39-20.62c-10.02,5.94-16.74,16.86-16.74,29.36,0,18.84,15.27,34.1,34.1,34.1,13.7,0,25.51-8.08,30.93-19.73h0l6.79-11.69c-1.02-1.62-1.62-3.55-1.62-5.61,0-5.82,4.72-10.54,10.54-10.54s10.54,4.72,10.54,10.54-4.72,10.54-10.54,10.54c-.21,0-.43,0-.64-.02l-13.15,22.32c4.85,2.65,10.41,4.15,16.32,4.15,18.83,0,34.1-15.27,34.1-34.1,0-18.83-15.27-34.1-34.1-34.1h-13.91c-1.7,3.55-5.32,6-9.52,6-5.82,0-10.54-4.72-10.54-10.54s4.72-10.54,10.54-10.54c4.06,0,7.58,2.3,9.34,5.66h25.65c0-19.33-15.67-34.99-34.99-34.99-19.32,0-34.99,15.66-34.99,34.99"/><path fill="#0f112a" d="M770.28,509.49h14.93l30.46,79.96h-15.53l-6.14-16.86h-33.35l-6.02,16.86h-14.57l30.22-79.96ZM764.86,560.79h24.93l-12.52-34.8-12.4,34.8Z"/><polygon fill="#0f112a" points="845.58 530.44 859.31 530.44 869.79 571.99 878.58 530.44 893.03 530.44 877.01 589.45 864.37 589.45 852.45 546.1 840.64 589.45 828 589.45 811.99 530.44 826.44 530.44 835.23 571.99 845.58 530.44"/><path fill="#0f112a" d="M892.87,560.06c0-18.18,11.68-30.83,29.14-30.83,18.78,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M906.35,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/><path fill="#0f112a" d="M994.99,548.62c-1.33-5.78-6.62-9.27-14.09-9.27-6.02,0-11.08,2.17-11.08,6.14,0,3.73,3.61,5.78,9.15,6.98l6.99,1.45c12.04,2.65,22.28,6.02,22.28,17.58,0,12.52-11.8,19.39-25.77,19.39-15.53,0-25.53-8.79-26.73-19.51l13.01-1.93c1.08,6.38,5.66,11.32,14.21,11.32,7.35,0,12.16-2.65,12.16-7.47s-5.18-6.5-11.32-7.83l-7.83-1.69c-10.36-2.17-18.79-6.38-18.79-17.46s11.2-17.1,24.69-17.1c12.4,0,23.36,6.14,25.65,17.7l-12.52,1.68Z"/><path fill="#0f112a" d="M1067.12,542.38l-7.54,7.52c-1.63,1.63-2.34,3.91-2.1,6.2.13,1.25.2,2.58.2,3.99,0,13.36-6.15,20.1-15.17,20.1-2.14,0-4.12-.4-5.9-1.18-2.65-1.16-5.76-.36-7.81,1.68l-4.45,4.45c5.07,3.9,11.47,5.76,18.15,5.76,15.17,0,28.9-9.63,28.9-30.82,0-7.21-1.59-13.11-4.29-17.71M1027.34,560.09c0-13.39,6.26-20.13,15.17-20.13,2.16,0,4.16.38,5.95,1.16,2.65,1.15,5.75.33,7.79-1.71l4.38-4.38c-5.07-3.93-11.47-5.79-18.12-5.79-15.17,0-28.9,9.63-28.9,30.85,0,7.21,1.59,13.06,4.29,17.68l7.56-7.56c1.62-1.62,2.33-3.89,2.08-6.17-.13-1.24-.2-2.56-.2-3.95"/><path fill="#0f112a" d="M1077.41,530.44h13.37v7.35c3.25-5.42,9.03-8.55,17.34-8.55,9.99,0,14.45,4.46,17.1,9.63,4.58-6.38,10.72-9.63,20.11-9.63,6.74,0,12.04,2.29,15.17,6.02,3.25,3.85,4.7,9.39,4.7,17.7v36.49h-13.37v-33.6c0-5.66-.6-9.63-2.53-12.04-1.69-2.29-4.33-3.49-8.55-3.49-9.75,0-12.76,7.95-12.76,18.3v30.83h-13.37v-33.6c0-5.78-.6-9.75-2.53-12.16-1.81-2.17-4.46-3.37-8.43-3.37-9.87,0-12.88,7.95-12.88,18.3v30.83h-13.37v-59Z"/><path fill="#0f112a" d="M1176.41,548.38c.84-11.68,10.36-19.39,25.89-19.39,17.1,0,24.44,6.14,24.44,22.64,0,3.85-.24,13.73-.24,16.98,0,7.59.36,13.73,1.2,20.83h-12.52l-.36-7.1c-3.73,5.54-9.51,8.55-19.15,8.55-13.61,0-21.31-9.15-21.31-19.27,0-5.78,2.65-10.11,6.5-12.76,5.3-3.61,12.52-5.06,21.56-6.14l11.08-1.2v-2.05c0-8.07-4.82-10.48-11.92-10.48-7.59,0-12.16,3.49-12.76,9.75l-12.4-.36ZM1213.98,561.27l-11.2,1.2c-10.11,1.08-14.57,3.85-14.57,9.27,0,5.06,3.97,8.67,10.36,8.67,7.83,0,15.41-4.46,15.41-15.53v-3.61Z"/><path fill="#0f112a" d="M1239.51,513.34h13.37v17.1h12.04v10.23h-12.04v30.59c0,6.14,1.44,7.58,7.1,7.58h4.82v10.6h-9.75c-12.88,0-15.53-3.49-15.53-15.77v-32.99h-8.91v-10.23h8.91v-17.1Z"/><path fill="#0f112a" d="M1268.73,560.06c0-18.18,11.68-30.83,29.14-30.83,18.79,0,29.74,14.33,28.66,34.8h-44.31c.24,9.75,6.74,16.14,15.77,16.14,8.43,0,12.64-3.97,14.69-9.27l12.89,1.69c-2.77,8.79-11.32,18.3-27.34,18.3-19.63,0-29.5-13.61-29.5-30.83M1282.22,554.16h30.71c-.36-9.03-6.86-14.69-14.93-14.69s-15.29,4.46-15.77,14.69"/></svg>
            </a>
            <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-xs">
              Your complete business technology partner. Automation hosting, unified data, and AI-powered app development — everything you need to run smarter.
            </p>
          </div>
          <div>
            <h5 className="text-[12px] font-700 text-brand-navy uppercase tracking-[0.1em] mb-5">Services</h5>
            <ul className="space-y-3.5 text-sm text-gray-500 font-medium">
              <li><a href="#n8n-hosting" className="hover:text-brand-accent transition-colors no-underline">n8n Hosting</a></li>
              <li><a href="#buddzee" className="hover:text-brand-accent transition-colors no-underline">Buddzee</a></li>
              <li><a href="#vibe-coding" className="hover:text-brand-accent transition-colors no-underline">Vibe Coding</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[12px] font-700 text-brand-navy uppercase tracking-[0.1em] mb-5">Company</h5>
            <ul className="space-y-3.5 text-sm text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-brand-accent transition-colors no-underline">About</a></li>
              <li><a href="#contact" className="hover:text-brand-accent transition-colors no-underline">Contact</a></li>
              <li><a href="#privacy" className="hover:text-brand-accent transition-colors no-underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[12px] font-700 text-brand-navy uppercase tracking-[0.1em] mb-5">Support</h5>
            <ul className="space-y-3.5 text-sm text-gray-500 font-medium">
              <li><a href="#faq" className="hover:text-brand-accent transition-colors no-underline">FAQ</a></li>
              <li><a href="mailto:hello@awesomate.ai" className="hover:text-brand-accent transition-colors no-underline">hello@awesomate.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-300 font-medium">&copy; 2025 Awesomate.ai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex gap-6 text-[13px] text-gray-300 font-medium">
              <a href="#privacy" className="hover:text-brand-accent transition-colors no-underline">Privacy</a>
              <a href="#terms" className="hover:text-brand-accent transition-colors no-underline">Terms</a>
            </div>
            <button
              onClick={copyGlobal}
              data-global-code={GlobalCode}
              className="flex items-center gap-2 bg-brand-navy text-white px-4 py-2 rounded-lg text-[10px] font-800 uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg border border-white/10"
            >
              {copied ? 'COPIED!' : 'COPY GLOBAL CODE'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
