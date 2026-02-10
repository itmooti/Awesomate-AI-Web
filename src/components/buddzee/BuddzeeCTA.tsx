import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const BuddzeeCTACode = `
<style>
  :root { --bz-navy:#09142B; --bz-blue:#5284FF; --bz-blue-light:#ABC1FF; --bz-cloud:#EDEFF7; }
  #bz-cta {
    padding: 100px 0 !important;
    background: var(--bz-navy) !important;
    position: relative !important;
    overflow: hidden !important;
  }
  .bzc-glow {
    position: absolute !important; top: 50% !important; left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(82,132,255,0.12) 0%, transparent 60%) !important;
    pointer-events: none !important;
  }
  .bzc-mark {
    position: absolute !important; right: -50px !important; top: 50% !important;
    transform: translateY(-50%) rotate(15deg) !important;
    width: 400px !important; height: 400px !important;
    opacity: 0.04 !important; pointer-events: none !important;
  }
  .bzc-logo {
    display: block !important; width: 200px !important; height: auto !important;
    margin: 0 auto 28px !important;
  }
  .bzc-container {
    max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important;
    text-align: center !important; position: relative !important; z-index: 1 !important;
  }
  .bzc-h2.bzc-h2.bzc-h2.bzc-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: white !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .bzc-h2.bzc-h2.bzc-h2.bzc-h2 { font-size: 48px !important; }
  }
  .bzc-sub {
    font-family: var(--font-main) !important; font-size: 17px !important;
    color: rgba(255,255,255,0.5) !important; line-height: 1.7 !important;
    max-width: 520px !important; margin: 0 auto 36px !important;
  }
  .bzc-btn {
    display: inline-flex !important; align-items: center !important; gap: 8px !important;
    background: var(--bz-blue) !important; color: white !important;
    padding: 16px 36px !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 15px !important;
    text-decoration: none !important;
    text-transform: uppercase !important; letter-spacing: 0.05em !important;
    transition: all 0.2s !important; border: none !important; cursor: pointer !important;
  }
  .bzc-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 16px 40px rgba(82,132,255,0.4) !important;
  }
  .bzc-note {
    font-family: var(--font-main) !important; font-size: 13px !important;
    color: rgba(255,255,255,0.3) !important; margin-top: 20px !important;
  }
</style>

<section id="bz-cta">
  <div class="bzc-glow"></div>
  <svg class="bzc-mark" viewBox="0 0 853.09 840.92" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M6.09,420.46c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63c-20.4,91.48-86,165.63-146.52,165.63S-14.31,511.93,6.09,420.46Z"/><path fill="#fff" d="M520.31,0c91.48,0,154.69,49.06,141.2,109.58-13.5,60.52-98.59,109.58-190.07,109.58s-154.69-49.06-141.2-109.58C343.74,49.06,428.83,0,520.31,0Z"/><path fill="#fff" d="M847.01,420.46c-20.4,91.48-86,165.63-146.52,165.63s-93.05-74.16-72.65-165.63c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63Z"/><path fill="#fff" d="M441.19,593.48l.67-3c3.73-16.74,16.39-31.73,32.69-40.28,73.66-38.63,126.4-124.71,99.72-210.56-6.25-20.09-18.72-36.86-36.25-47.81-102-63.7-237.85,18.75-262.35,128.63-12.33,55.29,6.68,103.56,45.18,129.81,12.44,8.48,18.29,23.49,14.57,40.14l-.68,3.06c-4.2,18.83-19.39,36.08-38.49,42.75-54.06,18.88-95.58,54.38-104.66,95.11-13.5,60.52,49.72,109.58,141.2,109.58s176.57-49.06,190.07-109.58c9.08-40.73-16.6-76.23-62.24-95.11-16.12-6.67-23.62-23.92-19.42-42.75Z"/></svg>
  <div class="bzc-container">
    <svg class="bzc-logo" viewBox="688 484 534 98" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="bz-clogo-g1" x1="796.86" y1="453.87" x2="713.56" y2="534.91" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#abc1ff"/><stop offset="1" stop-color="#5284ff"/></linearGradient><linearGradient id="bz-clogo-g2" x1="800.4" y1="457.52" x2="717.11" y2="538.56" xlink:href="#bz-clogo-g1"/><linearGradient id="bz-clogo-g3" x1="833.23" y1="491.26" x2="749.93" y2="572.29" xlink:href="#bz-clogo-g1"/><linearGradient id="bz-clogo-g4" x1="822.18" y1="479.91" x2="738.89" y2="560.94" xlink:href="#bz-clogo-g1"/></defs><path fill="url(#bz-clogo-g1)" d="M695.15,540c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93-10.35,19.93-17.63,19.93-11.19-8.92-8.74-19.93Z"/><path fill="url(#bz-clogo-g2)" d="M757.01,489.42c11,0,18.61,5.9,16.99,13.18s-11.86,13.18-22.87,13.18-18.61-5.9-16.99-13.18c1.62-7.28,11.86-13.18,22.87-13.18Z"/><path fill="url(#bz-clogo-g3)" d="M796.31,540c-2.45,11-10.35,19.93-17.63,19.93s-11.19-8.92-8.74-19.93c2.45-11,10.35-19.93,17.63-19.93s11.19,8.92,8.74,19.93Z"/><path fill="url(#bz-clogo-g4)" d="M747.49,560.81l.08-.36c.45-2.01,1.97-3.82,3.93-4.85,8.86-4.65,15.21-15,12-25.33-.75-2.42-2.25-4.43-4.36-5.75-12.27-7.66-28.61,2.26-31.56,15.47-1.48,6.65.8,12.46,5.44,15.62,1.5,1.02,2.2,2.83,1.75,4.83l-.08.37c-.51,2.27-2.33,4.34-4.63,5.14-6.5,2.27-11.5,6.54-12.59,11.44-1.62,7.28,5.98,13.18,16.99,13.18s21.24-5.9,22.87-13.18c1.09-4.9-2-9.17-7.49-11.44-1.94-.8-2.84-2.88-2.34-5.14Z"/><path fill="#fff" d="M827.05,507.83h28.91c13.19,0,20.66,6.31,20.66,17.46,0,6.89-2.91,11.35-9.02,14.07,7.67,2.33,11.25,8.83,11.25,17.17,0,11.93-8.25,19.21-22.51,19.21h-29.3v-67.91ZM854.7,535.77c7.96,0,10.87-3.2,10.87-8.73,0-5.92-3.1-8.73-10.96-8.73h-16.59v17.46h16.69ZM856.06,565.26c8.93,0,11.74-3.78,11.74-9.6,0-6.21-2.91-9.8-11.84-9.8h-17.95v19.4h18.05Z"/><path fill="#fff" d="M933.42,522.38v53.36h-10.96v-8.83c-3.78,6.11-9.51,9.99-17.75,9.99-11.84,0-18.92-7.86-18.92-20.86v-33.67h10.96v31.43c0,8.25,3.49,12.61,11.45,12.61,9.12,0,14.26-6.11,14.26-16.4v-27.65h10.96Z"/><path fill="#fff" d="M940.04,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM983.41,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#fff" d="M1000.64,549.06c0-16.3,10.57-27.84,24.55-27.84,8.44,0,14.94,4.17,18.82,10.28v-28.4h10.96v72.64h-10.96v-9.02c-3.88,6.11-10.38,10.19-18.73,10.19-14.26,0-24.64-11.55-24.64-27.85ZM1044.01,549.06c0-10.19-7.08-17.37-16.4-17.37s-15.91,7.18-15.91,17.37,6.69,17.37,15.91,17.37,16.4-7.08,16.4-17.37Z"/><path fill="#fff" d="M1105.81,532.76l-30.56,32.7,31.05-.1v10.38h-45.02v-10.38l30.46-32.7-28.72.1v-10.38h42.79v10.38Z"/><path fill="#fff" d="M1111.12,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1153.9,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/><path fill="#fff" d="M1170.99,549.16c0-16.11,11.45-27.94,27.55-27.94,17.17,0,28.04,13.29,26.97,30.85h-43.27c.78,9.8,7.66,15.23,16.59,15.23,6.4,0,11.74-2.72,14.26-7.96h11.35c-4.17,11.93-14.36,17.46-25.71,17.46-16.2,0-27.75-11.54-27.75-27.65ZM1213.78,543.14c-1.65-7.37-7.08-12.42-15.23-12.42s-13.97,5.14-15.72,12.42h30.95Z"/></svg>
    <h2 class="bzc-h2">Meet Buddzee. Your Business Data Buddy.</h2>
    <p class="bzc-sub">Book a demo and we\u2019ll connect your tools live. Ask Buddzee anything \u2014 and see the answers for yourself.</p>
    <a href="/contact" class="bzc-btn">Book a Free Demo \u2192</a>
    <p class="bzc-note">Free demo. No commitment. Your data stays private.</p>
  </div>
</section>
`;

export const BuddzeeCTA: React.FC = () => {
  return (
    <CopyWrapper blockName="BuddzeeCTA" codeToCopy={BuddzeeCTACode}>
      <section id="bz-cta" className="py-24 lg:py-28 relative overflow-hidden" style={{ background: '#09142B' }}>
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(82,132,255,0.12) 0%, transparent 60%)' }}
        />

        {/* Buddzee emblem watermark */}
        <svg
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 rotate-[15deg] w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
          viewBox="0 0 853.09 840.92"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#fff" d="M6.09,420.46c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63c-20.4,91.48-86,165.63-146.52,165.63S-14.31,511.93,6.09,420.46Z" />
          <path fill="#fff" d="M520.31,0c91.48,0,154.69,49.06,141.2,109.58-13.5,60.52-98.59,109.58-190.07,109.58s-154.69-49.06-141.2-109.58C343.74,49.06,428.83,0,520.31,0Z" />
          <path fill="#fff" d="M847.01,420.46c-20.4,91.48-86,165.63-146.52,165.63s-93.05-74.16-72.65-165.63c20.4-91.48,86-165.63,146.52-165.63s93.05,74.16,72.65,165.63Z" />
          <path fill="#fff" d="M441.19,593.48l.67-3c3.73-16.74,16.39-31.73,32.69-40.28,73.66-38.63,126.4-124.71,99.72-210.56-6.25-20.09-18.72-36.86-36.25-47.81-102-63.7-237.85,18.75-262.35,128.63-12.33,55.29,6.68,103.56,45.18,129.81,12.44,8.48,18.29,23.49,14.57,40.14l-.68,3.06c-4.2,18.83-19.39,36.08-38.49,42.75-54.06,18.88-95.58,54.38-104.66,95.11-13.5,60.52,49.72,109.58,141.2,109.58s176.57-49.06,190.07-109.58c9.08-40.73-16.6-76.23-62.24-95.11-16.12-6.67-23.62-23.92-19.42-42.75Z" />
        </svg>

        <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-800 text-white leading-[1.15] tracking-tight mb-5">
            Meet Buddzee. Your Business Data Buddy.
          </h2>
          <p
            className="text-[17px] leading-relaxed max-w-[520px] mx-auto mb-9"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Book a demo and we'll connect your tools live. Ask Buddzee anything — and see the answers for yourself.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-9 py-4 rounded-[10px] text-[15px] font-800 uppercase tracking-wider transition-all no-underline hover:-translate-y-0.5"
            style={{
              background: '#5284FF',
              boxShadow: '0 8px 24px rgba(82,132,255,0.3)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 16px 40px rgba(82,132,255,0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(82,132,255,0.3)'}
          >
            Book a Free Demo →
          </a>
          <p
            className="text-[13px] mt-5"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Free demo. No commitment. Your data stays private.
          </p>
        </div>
      </section>
    </CopyWrapper>
  );
};
