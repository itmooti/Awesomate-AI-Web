import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactFormCode = `
<style>
  #ct-form { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .ct-form-container { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ct-form-h2.ct-form-h2.ct-form-h2.ct-form-h2 { font-family: var(--font-heading) !important; font-weight: 800 !important; font-size: 32px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 8px !important; text-align: center !important; letter-spacing: -0.02em !important; }
  .ct-form-sub { font-family: var(--font-main) !important; font-size: 16px !important; color: #6b7280 !important; text-align: center !important; margin-bottom: 40px !important; }
  .ct-form-card { background: white !important; border-radius: 24px !important; padding: 48px 40px !important; border: 1px solid #f3f4f6 !important; }
  .ct-form-row { display: grid !important; grid-template-columns: 1fr !important; gap: 20px !important; margin-bottom: 20px !important; }
  @media (min-width: 640px) { .ct-form-row-half { grid-template-columns: 1fr 1fr !important; } }
  .ct-form-label { display: block !important; font-family: var(--font-main) !important; font-size: 13px !important; font-weight: 700 !important; color: var(--color-1) !important; margin-bottom: 6px !important; }
  .ct-form-input, .ct-form-select, .ct-form-textarea {
    width: 100% !important; padding: 12px 16px !important; border: 1.5px solid #e5e7eb !important;
    border-radius: 10px !important; font-family: var(--font-main) !important;
    font-size: 15px !important; color: var(--color-1) !important;
    transition: border-color 0.2s !important; background: white !important;
    outline: none !important;
  }
  .ct-form-input:focus, .ct-form-select:focus, .ct-form-textarea:focus { border-color: var(--color-2) !important; }
  .ct-form-textarea { min-height: 120px !important; resize: vertical !important; }
  .ct-form-note { font-family: var(--font-main) !important; font-size: 13px !important; color: #9ca3af !important; text-align: center !important; margin-top: 16px !important; }
  .ct-form-btn { display: block !important; width: 100% !important; background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important; color: white !important; padding: 16px !important; border: none !important; border-radius: 10px !important; font-family: var(--font-main) !important; font-size: 14px !important; font-weight: 800 !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; cursor: pointer !important; transition: all 0.2s !important; margin-top: 32px !important; }
  .ct-form-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important; }
</style>

<section id="ct-form">
  <div class="ct-form-container">
    <h2 class="ct-form-h2">Send Us a Message</h2>
    <p class="ct-form-sub">Fill out the form below and we'll get back to you within one business day.</p>
    <div class="ct-form-card">
      <!-- Ontraport form embed placeholder -->
      <div class="ct-form-row ct-form-row-half">
        <div>
          <label class="ct-form-label">Name</label>
          <input type="text" class="ct-form-input" placeholder="Your name">
        </div>
        <div>
          <label class="ct-form-label">Email</label>
          <input type="email" class="ct-form-input" placeholder="you@company.com">
        </div>
      </div>
      <div class="ct-form-row ct-form-row-half">
        <div>
          <label class="ct-form-label">Company</label>
          <input type="text" class="ct-form-input" placeholder="Your company">
        </div>
        <div>
          <label class="ct-form-label">Service Interest</label>
          <select class="ct-form-select">
            <option value="">Select a service...</option>
            <option value="n8n">n8n Hosting</option>
            <option value="buddzee">Buddzee</option>
            <option value="vibe">Vibe Coding</option>
            <option value="general">General Enquiry</option>
          </select>
        </div>
      </div>
      <div class="ct-form-row">
        <div>
          <label class="ct-form-label">Message</label>
          <textarea class="ct-form-textarea" placeholder="Tell us about your project or question..."></textarea>
        </div>
      </div>
      <button class="ct-form-btn">Send Message</button>
      <p class="ct-form-note">This form is a placeholder. On the live site, it will be replaced with an Ontraport form.</p>
    </div>
  </div>
</section>
`;

export const ContactForm: React.FC = () => {
  return (
    <CopyWrapper blockName="ContactForm" codeToCopy={ContactFormCode}>
      <section id="ct-form-section" className="py-24 lg:py-28 bg-[#f8f9fb]">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-heading font-800 text-brand-navy text-center tracking-tight mb-2">
            Send Us a Message
          </h2>
          <p className="text-base text-gray-500 text-center mb-10">
            Fill out the form below and we'll get back to you within one business day.
          </p>
          <div className="bg-white rounded-3xl p-12 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Company</label>
                <input type="text" placeholder="Your company" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Service Interest</label>
                <select className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors bg-white">
                  <option value="">Select a service...</option>
                  <option value="n8n">n8n Hosting</option>
                  <option value="buddzee">Buddzee</option>
                  <option value="vibe">Vibe Coding</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Message</label>
              <textarea placeholder="Tell us about your project or question..." className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors min-h-[120px] resize-y" />
            </div>
            <button className="w-full bg-gradient-to-br from-brand-accent to-brand-orange text-white py-4 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all mt-4">
              Send Message
            </button>
            <p className="text-[13px] text-gray-400 text-center mt-4">
              This form is a placeholder. On the live site, it will be replaced with an Ontraport form.
            </p>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
