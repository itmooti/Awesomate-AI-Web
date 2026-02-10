import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeHeroCode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-hero {
    position: relative !important; padding: 100px 0 80px !important;
    background: #ffffff !important; overflow: hidden !important;
  }
  .bz-hero-glow {
    position: absolute !important; top: -200px !important; left: 50% !important;
    transform: translateX(-50%) !important; width: 900px !important; height: 900px !important;
    background: radial-gradient(circle, rgba(82,132,255,0.08) 0%, rgba(82,132,255,0.03) 40%, transparent 70%) !important;
    pointer-events: none !important; z-index: 0 !important;
  }
  .bz-hero-grid-overlay {
    position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
    background-image: linear-gradient(rgba(82,132,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,132,255,0.03) 1px, transparent 1px) !important;
    background-size: 60px 60px !important; pointer-events: none !important; z-index: 0 !important;
  }
  .bz-hero-emblem {
    position: absolute !important; bottom: -40px !important; right: -20px !important;
    width: 400px !important; height: 400px !important; opacity: 0.03 !important;
    transform: rotate(15deg) !important; pointer-events: none !important; z-index: 0 !important;
  }
  .bz-hero-container {
    max-width: 1440px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
    text-align: center !important;
  }
  .bz-hero-logo {
    display: block !important; width: 240px !important; height: auto !important;
    margin: 0 auto 32px !important;
  }
  .bz-hero-breadcrumb {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    font-family: var(--font-main) !important; font-size: 12px !important;
    color: #9ca3af !important; margin-bottom: 24px !important;
  }
  .bz-hero-breadcrumb a { color: #9ca3af !important; text-decoration: none !important; }
  .bz-hero-breadcrumb a:hover { color: var(--bz-blue) !important; }
  .bz-hero-breadcrumb span.bz-hero-crumb-active { color: var(--bz-blue) !important; }
  .bz-hero-h1.bz-hero-h1.bz-hero-h1.bz-hero-h1 {
    font-family: var(--font-heading) !important;
    font-size: 48px !important; line-height: 1.05 !important;
    color: var(--bz-navy) !important; margin: 0 0 24px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) { .bz-hero-h1.bz-hero-h1.bz-hero-h1.bz-hero-h1 { font-size: 64px !important; } }
  @media (min-width: 1024px) { .bz-hero-h1.bz-hero-h1.bz-hero-h1.bz-hero-h1 { font-size: 72px !important; } }
  .bz-hero-gradient {
    background: linear-gradient(135deg, var(--bz-blue-light) 0%, var(--bz-blue) 100%) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
  .bz-hero-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 680px !important; margin: 0 auto 40px !important;
  }
  .bz-hero-actions {
    display: flex !important; flex-direction: column !important;
    align-items: center !important; gap: 12px !important;
  }
  @media (min-width: 640px) {
    .bz-hero-actions { flex-direction: row !important; justify-content: center !important; gap: 16px !important; }
  }
  .bz-hero-cta {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: linear-gradient(135deg, var(--bz-blue) 0%, var(--bz-blue-light) 100%) !important;
    color: white !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .bz-hero-cta:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 32px rgba(82,132,255,0.3) !important;
  }
  .bz-hero-secondary {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    color: var(--bz-navy) !important; padding: 14px 28px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    text-decoration: none !important;
    border: 1.5px solid rgba(9,20,43,0.12) !important; transition: all 0.2s !important;
    background: transparent !important; cursor: pointer !important;
  }
  .bz-hero-secondary:hover {
    border-color: var(--bz-blue) !important; color: var(--bz-blue) !important;
  }
</style>

<section id="bz-hero">
  <div class="bz-hero-glow"></div>
  <div class="bz-hero-grid-overlay"></div>
  <div class="bz-hero-emblem">
    <svg viewBox="0 0 853.09 840.92" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bz-emb-g1" x1="851.56" y1="-295.48" x2="159.17" y2="378.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ABC1FF"/><stop offset="1" stop-color="#5284FF"/></linearGradient><linearGradient id="bz-emb-g2" x1="881.06" y1="-265.16" x2="188.67" y2="408.45" xlink:href="#bz-emb-g1"/><linearGradient id="bz-emb-g3" x1="1153.9" y1="15.29" x2="461.51" y2="688.9" xlink:href="#bz-emb-g1"/><linearGradient id="bz-emb-g4" x1="1062.1" y1="-79.06" x2="369.72" y2="594.55" xlink:href="#bz-emb-g1"/></defs><path fill="url(#bz-emb-g1)" d="M6.09,420.46c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63c-20.4,91.48-86,165.63-146.52,165.63S-14.31,511.93,6.09,420.46Z"/><path fill="url(#bz-emb-g2)" d="M520.31,0c91.48,0,154.69,49.06,141.2,109.58-13.5,60.52-98.59,109.58-190.07,109.58s-154.69-49.06-141.2-109.58C343.74,49.06,428.83,0,520.31,0Z"/><path fill="url(#bz-emb-g3)" d="M847.01,420.46c-20.4,91.48-86,165.63-146.52,165.63s-93.05-74.16-72.65-165.63c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63Z"/><path fill="url(#bz-emb-g4)" d="M441.19,593.48l.67-3c3.73-16.74,16.39-31.73,32.69-40.28,73.66-38.63,126.4-124.71,99.72-210.56-6.25-20.09-18.72-36.86-36.25-47.81-102-63.7-237.85,18.75-262.35,128.63-12.33,55.29,6.68,103.56,45.18,129.81,12.44,8.48,18.29,23.49,14.57,40.14l-.68,3.06c-4.2,18.83-19.39,36.08-38.49,42.75-54.06,18.88-95.58,54.38-104.66,95.11-13.5,60.52,49.72,109.58,141.2,109.58s176.57-49.06,190.07-109.58c9.08-40.73-16.6-76.23-62.24-95.11-16.12-6.67-23.62-23.92-19.42-42.75Z"/></svg>
  </div>
  <div class="bz-hero-container">
    <div class="bz-hero-breadcrumb"><a href="/">Home</a> / <a href="/services">Services</a> / <span class="bz-hero-crumb-active">Buddzee</span></div>
    <svg class="bz-hero-logo" viewBox="688 484 534 98" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bz-hlogo-g1" x1="796.86" y1="453.87" x2="713.56" y2="534.91" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#abc1ff"/><stop offset="1" stop-color="#5284ff"/></linearGradient><linearGradient id="bz-hlogo-g2" x1="800.4" y1="457.52" x2="717.11" y2="538.56" xlink:href="#bz-hlogo-g1"/><linearGradient id="bz-hlogo-g3" x1="833.23" y1="491.26" x2="749.93" y2="572.29" xlink:href="#bz-hlogo-g1"/><linearGradient id="bz-hlogo-g4" x1="822.18" y1="479.91" x2="738.89" y2="560.94" xlink:href="#bz-hlogo-g1"/></defs><path fill="url(#bz-hlogo-g1)" d="M695.15,540c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93-10.35,19.93-17.63,19.93-11.19-8.92-8.74-19.93Z"/><path fill="url(#bz-hlogo-g2)" d="M757.01,489.42c11,0,18.61,5.9,16.99,13.18s-11.86,13.18-22.87,13.18-18.61-5.9-16.99-13.18c1.62-7.28,11.86-13.18,22.87-13.18Z"/><path fill="url(#bz-hlogo-g3)" d="M796.31,540c-2.45,11-10.35,19.93-17.63,19.93s-11.19-8.92-8.74-19.93c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93Z"/><path fill="url(#bz-hlogo-g4)" d="M747.49,560.81l.08-.36c.45-2.01,1.97-3.82,3.93-4.85,8.86-4.65,15.21-15,12-25.33-.75-2.42-2.25-4.43-4.36-5.75-12.27-7.66-28.61,2.26-31.56,15.47-1.48,6.65.8,12.46,5.44,15.62,1.5,1.02,2.2,2.83,1.75,4.83l-.08.37c-.51,2.27-2.33,4.34-4.63,5.14-6.5,2.27-11.5,6.54-12.59,11.44-1.62,7.28,5.98,13.18,16.99,13.18s21.24-5.9,22.87-13.18c1.09-4.9-2-9.17-7.49-11.44-1.94-.8-2.84-2.88-2.34-5.14Z"/><path fill="#09142b" d="M827.05,507.83h28.91c13.19,0,20.66,6.31,20.66,17.46,0,6.89-2.91,11.35-9.02,14.07,7.67,2.33,11.25,8.83,11.25,17.17,0,11.93-8.25,19.21-22.51,19.21h-29.3v-67.91ZM854.7,535.77c7.96,0,10.87-3.2,10.87-8.73,0-5.92-3.1-8.73-10.96-8.73h-16.59v17.46h16.69ZM856.06,565.26c8.93,0,11.74-3.78,11.74-9.6,0-6.21-2.91-9.8-11.84-9.8h-17.95v19.4h18.05Z"/><path fill="#09142b" d="M933.42,522.38v53.36h-10.96v-8.83c-3.78,6.11-9.51,9.99-17.75,9.99-11.84,0-18.92-7.86-18.92-20.86v-33.67h10.96v31.43c0,8.25,3.49,12.61,11.45,12.61,9.12,0,14.26-6.11,14.26-16.4v-27.65h10.96Z"/><path fill="#09142b" d="M940.04,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM983.41,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#09142b" d="M1000.64,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM1044.01,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#09142b" d="M1105.81,532.76l-30.56,32.7,31.05-.1v10.38h-45.02v-10.38l30.46-32.7-28.72.1v-10.38h42.79v10.38Z"/><path fill="#09142b" d="M1111.12,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1153.9,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/><path fill="#09142b" d="M1170.99,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1213.78,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/></svg>
    <h1 class="bz-hero-h1">The Employee That Never Sleeps.<br><span class="bz-hero-gradient">Ask Anything. Know Everything.</span></h1>
    <p class="bz-hero-sub">Buddzee knows your entire business inside out — sales, finances, customers, projects. Ask it anything in plain English and get instant, accurate answers. Like cloning your best team member.</p>
    <div class="bz-hero-actions">
      <a href="#bz-how" class="bz-hero-cta">See How It Works</a>
      <a href="/contact" class="bz-hero-secondary">Book a Free Demo</a>
    </div>
  </div>
</section>
`;

export const BuddzeeHero: React.FC = () => {
  return (
    <CopyWrapper blockName="BuddzeeHero" codeToCopy={BuddzeeHeroCode}>
      <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
        {/* Radial gradient glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(82,132,255,0.08) 0%, rgba(82,132,255,0.03) 40%, transparent 70%)' }} />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(rgba(82,132,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(82,132,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Buddzee emblem watermark */}
        <div className="absolute bottom-[-40px] right-[-20px] w-[400px] h-[400px] opacity-[0.03] pointer-events-none z-0" style={{ transform: 'rotate(15deg)' }}>
          <svg viewBox="0 0 853.09 840.92" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bz-emb-g1-jsx" x1="851.56" y1="-295.48" x2="159.17" y2="378.13" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ABC1FF"/><stop offset="1" stopColor="#5284FF"/></linearGradient><linearGradient id="bz-emb-g2-jsx" x1="881.06" y1="-265.16" x2="188.67" y2="408.45" xlinkHref="#bz-emb-g1-jsx"/><linearGradient id="bz-emb-g3-jsx" x1="1153.9" y1="15.29" x2="461.51" y2="688.9" xlinkHref="#bz-emb-g1-jsx"/><linearGradient id="bz-emb-g4-jsx" x1="1062.1" y1="-79.06" x2="369.72" y2="594.55" xlinkHref="#bz-emb-g1-jsx"/></defs><path fill="url(#bz-emb-g1-jsx)" d="M6.09,420.46c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63c-20.4,91.48-86,165.63-146.52,165.63S-14.31,511.93,6.09,420.46Z"/><path fill="url(#bz-emb-g2-jsx)" d="M520.31,0c91.48,0,154.69,49.06,141.2,109.58-13.5,60.52-98.59,109.58-190.07,109.58s-154.69-49.06-141.2-109.58C343.74,49.06,428.83,0,520.31,0Z"/><path fill="url(#bz-emb-g3-jsx)" d="M847.01,420.46c-20.4,91.48-86,165.63-146.52,165.63s-93.05-74.16-72.65-165.63c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63Z"/><path fill="url(#bz-emb-g4-jsx)" d="M441.19,593.48l.67-3c3.73-16.74,16.39-31.73,32.69-40.28,73.66-38.63,126.4-124.71,99.72-210.56-6.25-20.09-18.72-36.86-36.25-47.81-102-63.7-237.85,18.75-262.35,128.63-12.33,55.29,6.68,103.56,45.18,129.81,12.44,8.48,18.29,23.49,14.57,40.14l-.68,3.06c-4.2,18.83-19.39,36.08-38.49,42.75-54.06,18.88-95.58,54.38-104.66,95.11-13.5,60.52,49.72,109.58,141.2,109.58s176.57-49.06,190.07-109.58c9.08-40.73-16.6-76.23-62.24-95.11-16.12-6.67-23.62-23.92-19.42-42.75Z"/></svg>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="#home" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Home</a>
            <span>/</span>
            <a href="#services" className="hover:opacity-80 transition-colors no-underline text-gray-400" style={{ color: '#9ca3af' }}>Services</a>
            <span>/</span>
            <span className="font-bold" style={{ color: '#5284FF' }}>Buddzee</span>
          </div>
          {/* Buddzee Logo */}
          <svg className="block w-[240px] h-auto mx-auto mb-8" viewBox="688 484 534 98" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bz-hlogo-g1-jsx" x1="796.86" y1="453.87" x2="713.56" y2="534.91" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#abc1ff"/><stop offset="1" stopColor="#5284ff"/></linearGradient><linearGradient id="bz-hlogo-g2-jsx" x1="800.4" y1="457.52" x2="717.11" y2="538.56" xlinkHref="#bz-hlogo-g1-jsx"/><linearGradient id="bz-hlogo-g3-jsx" x1="833.23" y1="491.26" x2="749.93" y2="572.29" xlinkHref="#bz-hlogo-g1-jsx"/><linearGradient id="bz-hlogo-g4-jsx" x1="822.18" y1="479.91" x2="738.89" y2="560.94" xlinkHref="#bz-hlogo-g1-jsx"/></defs><path fill="url(#bz-hlogo-g1-jsx)" d="M695.15,540c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93-10.35,19.93-17.63,19.93-11.19-8.92-8.74-19.93Z"/><path fill="url(#bz-hlogo-g2-jsx)" d="M757.01,489.42c11,0,18.61,5.9,16.99,13.18s-11.86,13.18-22.87,13.18-18.61-5.9-16.99-13.18c1.62-7.28,11.86-13.18,22.87-13.18Z"/><path fill="url(#bz-hlogo-g3-jsx)" d="M796.31,540c-2.45,11-10.35,19.93-17.63,19.93s-11.19-8.92-8.74-19.93c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93Z"/><path fill="url(#bz-hlogo-g4-jsx)" d="M747.49,560.81l.08-.36c.45-2.01,1.97-3.82,3.93-4.85,8.86-4.65,15.21-15,12-25.33-.75-2.42-2.25-4.43-4.36-5.75-12.27-7.66-28.61,2.26-31.56,15.47-1.48,6.65.8,12.46,5.44,15.62,1.5,1.02,2.2,2.83,1.75,4.83l-.08.37c-.51,2.27-2.33,4.34-4.63,5.14-6.5,2.27-11.5,6.54-12.59,11.44-1.62,7.28,5.98,13.18,16.99,13.18s21.24-5.9,22.87-13.18c1.09-4.9-2-9.17-7.49-11.44-1.94-.8-2.84-2.88-2.34-5.14Z"/><path fill="#09142b" d="M827.05,507.83h28.91c13.19,0,20.66,6.31,20.66,17.46,0,6.89-2.91,11.35-9.02,14.07,7.67,2.33,11.25,8.83,11.25,17.17,0,11.93-8.25,19.21-22.51,19.21h-29.3v-67.91ZM854.7,535.77c7.96,0,10.87-3.2,10.87-8.73,0-5.92-3.1-8.73-10.96-8.73h-16.59v17.46h16.69ZM856.06,565.26c8.93,0,11.74-3.78,11.74-9.6,0-6.21-2.91-9.8-11.84-9.8h-17.95v19.4h18.05Z"/><path fill="#09142b" d="M933.42,522.38v53.36h-10.96v-8.83c-3.78,6.11-9.51,9.99-17.75,9.99-11.84,0-18.92-7.86-18.92-20.86v-33.67h10.96v31.43c0,8.25,3.49,12.61,11.45,12.61,9.12,0,14.26-6.11,14.26-16.4v-27.65h10.96Z"/><path fill="#09142b" d="M940.04,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM983.41,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#09142b" d="M1000.64,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM1044.01,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#09142b" d="M1105.81,532.76l-30.56,32.7,31.05-.1v10.38h-45.02v-10.38l30.46-32.7-28.72.1v-10.38h42.79v10.38Z"/><path fill="#09142b" d="M1111.12,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1153.9,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/><path fill="#09142b" d="M1170.99,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1213.78,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/></svg>
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-800 leading-[1.05] tracking-tight mb-6" style={{ color: '#09142B' }}>
            The Employee That Never Sleeps.<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ABC1FF 0%, #5284FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Ask Anything. Know Everything.
            </span>
          </h1>
          {/* Subtext */}
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-[680px] mx-auto mb-10">
            Buddzee knows your entire business inside out — sales, finances, customers, projects. Ask it anything in plain English and get instant, accurate answers. Like cloning your best team member.
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#bz-how"
              className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-[10px] text-sm font-extrabold uppercase tracking-wider hover:-translate-y-0.5 transition-all no-underline"
              style={{ background: 'linear-gradient(135deg, #5284FF 0%, #ABC1FF 100%)', boxShadow: '0 12px 32px rgba(82,132,255,0.2)' }}
            >
              See How It Works
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-sm font-bold transition-all no-underline"
              style={{ color: '#09142B', border: '1.5px solid rgba(9,20,43,0.12)' }}
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
