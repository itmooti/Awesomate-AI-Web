import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ContactFormCode = `
<style>
  #ct-form { padding: 100px 0 !important; background: var(--color-bg-alt, #f8f9fb) !important; }
  .ct-form-container { max-width: 720px !important; margin: 0 auto !important; padding: 0 24px !important; }
  .ct-form-h2.ct-form-h2.ct-form-h2.ct-form-h2 { font-family: var(--font-heading) !important; font-size: 32px !important; line-height: 1.15 !important; color: var(--color-1) !important; margin: 0 0 8px !important; text-align: center !important; letter-spacing: -0.02em !important; }
  .ct-form-sub { font-family: var(--font-main) !important; font-size: 16px !important; color: #6b7280 !important; text-align: center !important; margin-bottom: 40px !important; }
  .ct-form-card { background: white !important; border-radius: 24px !important; padding: 48px 40px !important; border: 1px solid #f3f4f6 !important; }

  /* Override Ontraport Moonray form styles to match brand */
  .ct-form-card .moonray-form { font-family: var(--font-main) !important; }
  .ct-form-card .moonray-form-label {
    display: block !important; font-family: var(--font-main) !important; font-size: 13px !important;
    font-weight: 700 !important; color: var(--color-1) !important; margin-bottom: 6px !important;
  }
  .ct-form-card .moonray-form-input {
    width: 100% !important; padding: 12px 16px !important;
    border: 1.5px solid #e5e7eb !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: var(--color-1) !important; background: white !important;
    transition: border-color 0.2s !important; outline: none !important;
    box-sizing: border-box !important;
  }
  .ct-form-card .moonray-form-input:focus { border-color: var(--color-2) !important; }
  .ct-form-card textarea.moonray-form-input { min-height: 120px !important; resize: vertical !important; }
  .ct-form-card .moonray-form-element-wrapper { margin-bottom: 20px !important; }
  .ct-form-card .moonray-form-input-type-hidden { margin-bottom: 0 !important; }
  .ct-form-card input[type="submit"].moonray-form-input {
    display: block !important; width: 100% !important;
    background: linear-gradient(135deg, var(--color-2) 0%, var(--color-3) 100%) !important;
    color: white !important; padding: 16px !important;
    border: none !important; border-radius: 10px !important;
    font-family: var(--font-main) !important; font-size: 14px !important;
    font-weight: 800 !important; text-transform: uppercase !important;
    letter-spacing: 0.05em !important; cursor: pointer !important;
    transition: all 0.2s !important; margin-top: 12px !important;
  }
  .ct-form-card input[type="submit"].moonray-form-input:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 32px rgba(233,72,77,0.3) !important;
  }
  /* Two-column layout for name and contact rows */
  .ct-form-row { display: grid !important; grid-template-columns: 1fr !important; gap: 20px !important; }
  @media (min-width: 640px) { .ct-form-row { grid-template-columns: 1fr 1fr !important; } }
  .ct-form-row .moonray-form-element-wrapper { margin-bottom: 0 !important; }
</style>

<section id="ct-form">
  <div class="ct-form-container">
    <h2 class="ct-form-h2">Send Us a Message</h2>
    <p class="ct-form-sub">Fill out the form below and we\\u2019ll get back to you within one business day.</p>
    <div class="ct-form-card">
      <div class="moonray-form-p2c20316f161 ussr">
        <div class="moonray-form moonray-form-label-pos-stacked">
          <form class="moonray-form-clearfix" action="https://forms.ontraport.com/v2.4/form_processor.php?" method="post" accept-charset="UTF-8">
            <div class="ct-form-row" style="margin-bottom: 20px;">
              <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                <label for="mr-field-element-878997933239" class="moonray-form-label">First Name</label>
                <input name="firstname" type="text" class="moonray-form-input" id="mr-field-element-878997933239"/>
              </div>
              <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
                <label for="mr-field-element-784054620788" class="moonray-form-label">Last Name</label>
                <input name="lastname" type="text" class="moonray-form-input" id="mr-field-element-784054620788"/>
              </div>
            </div>
            <div class="ct-form-row" style="margin-bottom: 20px;">
              <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-email">
                <label for="mr-field-element-484694768931" class="moonray-form-label">Email</label>
                <input name="email" type="email" class="moonray-form-input" id="mr-field-element-484694768931"/>
              </div>
              <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-tel">
                <label for="mr-field-element-606587795604" class="moonray-form-label">SMS Number</label>
                <input name="sms_number" type="tel" class="moonray-form-input" id="mr-field-element-606587795604"/>
              </div>
            </div>
            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
              <label for="mr-field-element-105420810747" class="moonray-form-label">Company</label>
              <input name="company" type="text" class="moonray-form-input" id="mr-field-element-105420810747"/>
            </div>
            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-textarea">
              <label for="mr-field-element-407646200134" class="moonray-form-label">Message</label>
              <textarea name="f3780" class="moonray-form-input" id="mr-field-element-407646200134"></textarea>
            </div>
            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-submit">
              <input type="submit" name="submit-button" value="Send Message" class="moonray-form-input" id="mr-field-element-480000287490"/>
            </div>
            <!-- Hidden tracking fields -->
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="afft_" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="aff_" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="sess_" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="ref_" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="own_" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="oprid" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="contact_id" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="utm_source" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="utm_medium" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="utm_term" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="utm_content" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="utm_campaign" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="referral_page" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_op_gclid" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_op_gcid" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_op_gsid" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_op_gsn" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_fbc" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_fbp" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_op_li_fat_id" type="hidden" value=""/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="uid" type="hidden" value="p2c20316f161"/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="uniquep2c20316f161" type="hidden" value="0"/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="mopsbbk" type="hidden" value="893579B31EA401C81B3A5B18:0CA5CAE75579E0474E382606"/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="mopbelg" type="hidden" value="0185189:0AA0A4CB1AFE39569645E401:A4238F868FAC2E04E2887614"/></div>
            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden"><input name="_vcid" type="hidden" value="NDg0Mjg2fCQyYSQwOCR1b09nUjR5SC8xLi5ycWxxT3lncDdPQzdOWHJjQVIuR3hiaHR4VUNibmxRTno3Zy9ZVkwzUw=="/></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<script type="text/javascript" src="https://forms.ontraport.com/v2.4/include/formEditor/genjs-v3.php?html=false&uid=p2c20316f161"></script>
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
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">First Name</label>
                <input type="text" placeholder="First name" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Last Name</label>
                <input type="text" placeholder="Last name" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-700 text-brand-navy mb-1.5">SMS Number</label>
                <input type="tel" placeholder="+61 400 000 000" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Company</label>
              <input type="text" placeholder="Your company" className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors" />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] font-700 text-brand-navy mb-1.5">Message</label>
              <textarea placeholder="Tell us about your project or question..." className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-brand-navy focus:border-brand-accent outline-none transition-colors min-h-[120px] resize-y" />
            </div>
            <button className="w-full bg-gradient-to-br from-brand-accent to-brand-orange text-white py-4 rounded-[10px] text-sm font-800 uppercase tracking-wider shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 transition-all mt-3">
              Send Message
            </button>
            <p className="text-[13px] text-gray-400 text-center mt-4">
              Preview only — the live site uses the Ontraport form (UID: p2c20316f161)
            </p>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
