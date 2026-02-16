import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const PrivacyPolicyCode = `
<style>
  #pv-policy {
    padding: 80px 0 100px !important;
    background: var(--color-5, #ffffff) !important;
  }
  .pv-container {
    max-width: 900px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .pv-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .pv-h1.pv-h1.pv-h1.pv-h1 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 12px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .pv-h1.pv-h1.pv-h1.pv-h1 { font-size: 44px !important; }
  }
  .pv-updated {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; margin-bottom: 16px !important;
  }
  .pv-accent-line {
    width: 80px !important; height: 3px !important; border-radius: 3px !important;
    background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important;
    margin-bottom: 48px !important;
  }
  .pv-h2.pv-h2.pv-h2.pv-h2 {
    font-family: var(--font-heading) !important;
    font-size: 22px !important; line-height: 1.3 !important;
    color: var(--color-1) !important; margin: 48px 0 16px !important;
    letter-spacing: -0.01em !important;
  }
  .pv-h3.pv-h3.pv-h3.pv-h3 {
    font-family: var(--font-heading) !important;
    font-size: 18px !important; line-height: 1.4 !important;
    color: var(--color-1) !important; margin: 28px 0 12px !important;
  }
  .pv-p {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #374151 !important; line-height: 1.7 !important;
    margin: 0 0 16px !important;
  }
  .pv-ul {
    list-style: none !important; padding-left: 0 !important; margin: 0 0 16px !important;
  }
  .pv-ul li {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #374151 !important; line-height: 1.7 !important;
    padding-left: 20px !important; position: relative !important;
    margin-bottom: 8px !important;
  }
  .pv-ul li::before {
    content: '' !important; position: absolute !important;
    left: 0 !important; top: 11px !important;
    width: 6px !important; height: 6px !important;
    border-radius: 50% !important; background: var(--color-2) !important;
  }
  .pv-strong { font-weight: 700 !important; color: var(--color-1) !important; }
  .pv-link {
    color: var(--color-2) !important; text-decoration: underline !important;
    transition: color 0.2s !important;
  }
  .pv-link:hover { color: var(--color-3) !important; }
  .pv-table {
    width: 100% !important; border-collapse: collapse !important;
    margin: 16px 0 24px !important;
  }
  .pv-table th, .pv-table td {
    font-family: var(--font-main) !important; font-size: 15px !important;
    color: #374151 !important; line-height: 1.6 !important;
    padding: 12px 16px !important; text-align: left !important;
    border-bottom: 1px solid #f3f4f6 !important;
  }
  .pv-table th {
    font-weight: 700 !important; color: var(--color-1) !important;
    background: #f9fafb !important;
  }
</style>

<section id="pv-policy">
  <div class="pv-container">
    <div class="pv-label">Legal</div>
    <h1 class="pv-h1">Privacy Policy</h1>
    <div class="pv-updated">Last updated: February 2026</div>
    <div class="pv-accent-line"></div>

    <h2 class="pv-h2">1. About This Policy</h2>
    <p class="pv-p">Awesomate.ai (&ldquo;Awesomate&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
    <p class="pv-p">This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or otherwise interact with us. It applies to all of our services, including managed n8n hosting, the Buddzee data platform, and Vibe Coding application development.</p>
    <p class="pv-p">By using our services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our services.</p>

    <h2 class="pv-h2">2. Information We Collect</h2>

    <h3 class="pv-h3">Personal Information</h3>
    <p class="pv-p">We may collect the following personal information directly from you:</p>
    <ul class="pv-ul">
      <li>Name (first and last)</li>
      <li>Email address</li>
      <li>Phone or SMS number</li>
      <li>Company name and job title</li>
      <li>Billing and payment information</li>
      <li>Account login credentials</li>
    </ul>

    <h3 class="pv-h3">Usage and Technical Data</h3>
    <p class="pv-p">When you visit our website or use our services, we may automatically collect:</p>
    <ul class="pv-ul">
      <li>IP address and approximate location</li>
      <li>Browser type and version</li>
      <li>Device type and operating system</li>
      <li>Pages visited, session duration, and navigation paths</li>
      <li>Referring website or source</li>
    </ul>

    <h3 class="pv-h3">Service Data</h3>
    <p class="pv-p">Depending on which services you use, we may process:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">n8n Hosting:</span> Workflow configurations, execution logs, and connected service credentials (encrypted)</li>
      <li><span class="pv-strong">Buddzee:</span> Database connection details, query history, and generated reports</li>
      <li><span class="pv-strong">Vibe Coding:</span> Application specifications, design requirements, and project files</li>
    </ul>

    <h3 class="pv-h3">Communication Data</h3>
    <p class="pv-p">We collect information from your interactions with us, including support tickets, contact form submissions, email correspondence, and feedback you provide.</p>

    <h2 class="pv-h2">3. How We Collect Information</h2>
    <ul class="pv-ul">
      <li><span class="pv-strong">Directly from you</span> &mdash; when you fill out forms on our website, register an account, contact us for support, or provide information during onboarding.</li>
      <li><span class="pv-strong">Automatically</span> &mdash; through cookies, analytics tools, and server logs when you visit our website or use our services.</li>
      <li><span class="pv-strong">From third parties</span> &mdash; from payment processors (transaction confirmations), referral partners, and publicly available business directories.</li>
    </ul>

    <h2 class="pv-h2">4. Why We Collect Information</h2>
    <p class="pv-p">We collect and use personal information for the following purposes:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Service delivery</span> &mdash; to set up, maintain, and support your account and the services you subscribe to.</li>
      <li><span class="pv-strong">Payments and billing</span> &mdash; to process transactions, send invoices, and manage subscriptions.</li>
      <li><span class="pv-strong">Communication</span> &mdash; to respond to enquiries, send service updates, and provide technical support.</li>
      <li><span class="pv-strong">Marketing</span> &mdash; to send promotional material with your consent. You can opt out at any time.</li>
      <li><span class="pv-strong">Improvement</span> &mdash; to analyse usage patterns, improve our services, and develop new features.</li>
      <li><span class="pv-strong">Security</span> &mdash; to detect, prevent, and respond to security incidents, fraud, and abuse.</li>
      <li><span class="pv-strong">Legal compliance</span> &mdash; to comply with applicable laws, regulations, and legal processes.</li>
    </ul>

    <h2 class="pv-h2">5. How We Use AI and Automated Systems</h2>
    <p class="pv-p">Our Buddzee platform uses artificial intelligence and machine learning technologies to help you query and analyse your business data using natural language. Here is how AI is used within our services:</p>
    <ul class="pv-ul">
      <li>AI processes your data to generate insights, reports, and query results based on your instructions.</li>
      <li>AI does not make autonomous decisions that affect your rights or interests &mdash; it produces informational outputs that you choose how to act on.</li>
      <li>We do not use automated decision-making that produces legal effects or similarly significant effects on individuals without human oversight.</li>
      <li>AI processing may involve third-party AI providers (such as OpenAI or Anthropic). Data sent to these providers is used solely to process your requests and is subject to their data processing agreements.</li>
    </ul>
    <p class="pv-p">We are committed to transparency about how AI is used in our services and will update this section as our use of AI evolves, in accordance with the automated decision-making transparency requirements under the Privacy Act.</p>

    <h2 class="pv-h2">6. Who We Share Information With</h2>
    <p class="pv-p"><span class="pv-strong">We never sell your personal information.</span></p>
    <p class="pv-p">We may share your information with the following categories of third parties, only to the extent necessary to deliver our services:</p>

    <table class="pv-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Provider</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Infrastructure hosting</td>
          <td>OVHcloud (US data centres)</td>
          <td>Server and database hosting</td>
        </tr>
        <tr>
          <td>CRM and marketing</td>
          <td>Ontraport</td>
          <td>Contact management, forms, email</td>
        </tr>
        <tr>
          <td>AI providers</td>
          <td>OpenAI, Anthropic, Google</td>
          <td>AI-powered features in Buddzee</td>
        </tr>
        <tr>
          <td>Payment processing</td>
          <td>Stripe, Eway</td>
          <td>Secure payment transactions</td>
        </tr>
        <tr>
          <td>Analytics</td>
          <td>Cloudflare, Google Analytics</td>
          <td>Website performance and usage insights</td>
        </tr>
      </tbody>
    </table>

    <p class="pv-p">We may also disclose personal information to professional advisors (legal, accounting), law enforcement or government agencies when required by law, or to a potential buyer in the event of a business sale or merger.</p>

    <h2 class="pv-h2">7. International Data Transfers</h2>
    <p class="pv-p">Your personal information may be transferred to and processed in countries outside of Australia. Specifically:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">United States</span> &mdash; our primary hosting infrastructure runs on OVHcloud enterprise data centres in the US. AI API providers (OpenAI, Anthropic, Google) also process data in the US.</li>
      <li><span class="pv-strong">Regional options</span> &mdash; if you require data to be hosted in a specific region for compliance reasons, we can deploy infrastructure across North America, Asia Pacific, or Europe.</li>
    </ul>
    <p class="pv-p">Before disclosing personal information overseas, we take reasonable steps to ensure the recipient handles your information in accordance with the APPs (APP 8). All our third-party providers are bound by data processing agreements that require appropriate security and privacy safeguards.</p>

    <h2 class="pv-h2">8. Data Security</h2>
    <p class="pv-p">We take the security of your data seriously. Our infrastructure includes multiple layers of protection:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">3x hot database replicas</span> &mdash; three live copies of your data running at all times, with automatic failover in 1&ndash;2 seconds.</li>
      <li><span class="pv-strong">30-minute local snapshots</span> &mdash; automatic backups every 30 minutes with a 3-day rolling window.</li>
      <li><span class="pv-strong">Offsite point-in-time recovery</span> &mdash; the ability to restore data to any minute, with a 10-day rolling window.</li>
      <li><span class="pv-strong">Encryption</span> &mdash; data encrypted at rest and in transit using industry-standard protocols.</li>
      <li><span class="pv-strong">Access controls</span> &mdash; strict role-based access, multi-factor authentication, and least-privilege principles.</li>
      <li><span class="pv-strong">24/7 monitoring</span> &mdash; proactive infrastructure monitoring to detect and respond to issues before they affect you.</li>
    </ul>
    <p class="pv-p">While we implement robust security measures, no system is completely immune to risk. We encourage you to use strong, unique passwords and keep your account credentials secure.</p>

    <h2 class="pv-h2">9. Data Retention</h2>
    <p class="pv-p">We retain your personal information only as long as necessary for the purposes outlined in this policy:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Active accounts</span> &mdash; data is retained for the duration of your service.</li>
      <li><span class="pv-strong">After cancellation</span> &mdash; your data remains available for export for 30 days after service termination, then is securely deleted.</li>
      <li><span class="pv-strong">Billing records</span> &mdash; retained for 7 years to comply with Australian tax and financial reporting requirements.</li>
      <li><span class="pv-strong">Server logs</span> &mdash; retained for 90 days, then automatically purged.</li>
      <li><span class="pv-strong">Marketing data</span> &mdash; retained until you withdraw consent or unsubscribe.</li>
    </ul>

    <h2 class="pv-h2">10. Cookies and Tracking</h2>
    <p class="pv-p">Our website uses cookies and similar technologies to enhance your experience:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Essential cookies</span> &mdash; required for the website to function (session management, authentication). These cannot be disabled.</li>
      <li><span class="pv-strong">Analytics cookies</span> &mdash; help us understand how visitors use our website so we can improve it.</li>
      <li><span class="pv-strong">Marketing cookies</span> &mdash; used with your consent to deliver relevant content and track campaign effectiveness (including Ontraport tracking and UTM parameters).</li>
    </ul>
    <p class="pv-p">You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>

    <h2 class="pv-h2">11. Your Rights</h2>
    <p class="pv-p">Under the Australian Privacy Act, you have the right to:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Access</span> your personal information that we hold about you.</li>
      <li><span class="pv-strong">Correct</span> any inaccurate, incomplete, or out-of-date information.</li>
      <li><span class="pv-strong">Request deletion</span> of your personal information, subject to our legal obligations to retain certain records.</li>
      <li><span class="pv-strong">Withdraw consent</span> for marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.</li>
      <li><span class="pv-strong">Complain</span> to us about how we handle your personal information. If you are not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" class="pv-link" target="_blank" rel="noopener">www.oaic.gov.au</a>.</li>
    </ul>
    <p class="pv-p">To exercise any of these rights, contact us at <a href="mailto:hello@awesomate.ai" class="pv-link">hello@awesomate.ai</a>. We will respond to your request within 30 days.</p>

    <h2 class="pv-h2">12. Notifiable Data Breaches</h2>
    <p class="pv-p">In the event of a data breach that is likely to result in serious harm to any individual whose personal information is involved, we will:</p>
    <ul class="pv-ul">
      <li>Promptly assess the breach to determine its nature and severity.</li>
      <li>Take immediate steps to contain the breach and mitigate any harm.</li>
      <li>Notify affected individuals and the OAIC as required under the Notifiable Data Breaches (NDB) scheme.</li>
      <li>Provide clear information about what happened, what data was affected, and what steps individuals can take to protect themselves.</li>
    </ul>

    <h2 class="pv-h2">13. Children&rsquo;s Privacy</h2>
    <p class="pv-p">Our services are designed for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.</p>

    <h2 class="pv-h2">14. Changes to This Policy</h2>
    <p class="pv-p">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by email or by posting a prominent notice on our website. We encourage you to review this page periodically.</p>

    <h2 class="pv-h2">15. Contact Us</h2>
    <p class="pv-p">If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Email:</span> <a href="mailto:hello@awesomate.ai" class="pv-link">hello@awesomate.ai</a></li>
      <li><span class="pv-strong">Website:</span> <a href="https://awesomate.ai/contact" class="pv-link">awesomate.ai/contact</a></li>
    </ul>
    <p class="pv-p">If you are not satisfied with our response to a privacy concern, you can contact the Office of the Australian Information Commissioner:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Website:</span> <a href="https://www.oaic.gov.au" class="pv-link" target="_blank" rel="noopener">www.oaic.gov.au</a></li>
      <li><span class="pv-strong">Phone:</span> 1300 363 992</li>
    </ul>
  </div>
</section>
`;

export const PrivacyPolicy: React.FC = () => {
  return (
    <CopyWrapper blockName="PrivacyPolicy" codeToCopy={PrivacyPolicyCode}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Legal</div>
          <h1 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-3">
            Privacy Policy
          </h1>
          <div className="text-sm text-gray-400 mb-4">Last updated: February 2026</div>
          <div className="w-20 h-[3px] rounded-[3px] bg-gradient-to-r from-brand-accent to-brand-orange mb-12" />

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">1. About This Policy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Awesomate.ai ("Awesomate", "we", "us", or "our") is committed to protecting your personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or otherwise interact with us. It applies to all of our services, including managed n8n hosting, the Buddzee data platform, and Vibe Coding application development.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            By using our services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our services.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">2. Information We Collect</h2>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Personal Information</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We may collect the following personal information directly from you:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {['Name (first and last)', 'Email address', 'Phone or SMS number', 'Company name and job title', 'Billing and payment information', 'Account login credentials'].map(item => (
              <li key={item} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Usage and Technical Data</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">When you visit our website or use our services, we may automatically collect:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {['IP address and approximate location', 'Browser type and version', 'Device type and operating system', 'Pages visited, session duration, and navigation paths', 'Referring website or source'].map(item => (
              <li key={item} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Service Data</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Depending on which services you use, we may process:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">n8n Hosting:</strong> Workflow configurations, execution logs, and connected service credentials (encrypted)
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Buddzee:</strong> Database connection details, query history, and generated reports
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Vibe Coding:</strong> Application specifications, design requirements, and project files
            </li>
          </ul>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Communication Data</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We collect information from your interactions with us, including support tickets, contact form submissions, email correspondence, and feedback you provide.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">3. How We Collect Information</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Directly from you</strong> — when you fill out forms on our website, register an account, contact us for support, or provide information during onboarding.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Automatically</strong> — through cookies, analytics tools, and server logs when you visit our website or use our services.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">From third parties</strong> — from payment processors (transaction confirmations), referral partners, and publicly available business directories.
            </li>
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">4. Why We Collect Information</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We collect and use personal information for the following purposes:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Service delivery', text: 'to set up, maintain, and support your account and the services you subscribe to.' },
              { bold: 'Payments and billing', text: 'to process transactions, send invoices, and manage subscriptions.' },
              { bold: 'Communication', text: 'to respond to enquiries, send service updates, and provide technical support.' },
              { bold: 'Marketing', text: 'to send promotional material with your consent. You can opt out at any time.' },
              { bold: 'Improvement', text: 'to analyse usage patterns, improve our services, and develop new features.' },
              { bold: 'Security', text: 'to detect, prevent, and respond to security incidents, fraud, and abuse.' },
              { bold: 'Legal compliance', text: 'to comply with applicable laws, regulations, and legal processes.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">5. How We Use AI and Automated Systems</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our Buddzee platform uses artificial intelligence and machine learning technologies to help you query and analyse your business data using natural language. Here is how AI is used within our services:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'AI processes your data to generate insights, reports, and query results based on your instructions.',
              'AI does not make autonomous decisions that affect your rights or interests \u2014 it produces informational outputs that you choose how to act on.',
              'We do not use automated decision-making that produces legal effects or similarly significant effects on individuals without human oversight.',
              'AI processing may involve third-party AI providers (such as OpenAI or Anthropic). Data sent to these providers is used solely to process your requests and is subject to their data processing agreements.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We are committed to transparency about how AI is used in our services and will update this section as our use of AI evolves, in accordance with the automated decision-making transparency requirements under the Privacy Act.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">6. Who We Share Information With</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">We never sell your personal information.</strong>
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may share your information with the following categories of third parties, only to the extent necessary to deliver our services:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[15px] text-gray-700">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Category</th>
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Provider</th>
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Infrastructure hosting', 'OVHcloud (US data centres)', 'Server and database hosting'],
                  ['CRM and marketing', 'Ontraport', 'Contact management, forms, email'],
                  ['AI providers', 'OpenAI, Anthropic, Google', 'AI-powered features in Buddzee'],
                  ['Payment processing', 'Stripe, Eway', 'Secure payment transactions'],
                  ['Analytics', 'Cloudflare, Google Analytics', 'Website performance and usage insights'],
                ].map(row => (
                  <tr key={row[0]}>
                    <td className="p-3 border-b border-gray-100">{row[0]}</td>
                    <td className="p-3 border-b border-gray-100">{row[1]}</td>
                    <td className="p-3 border-b border-gray-100">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may also disclose personal information to professional advisors (legal, accounting), law enforcement or government agencies when required by law, or to a potential buyer in the event of a business sale or merger.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">7. International Data Transfers</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Your personal information may be transferred to and processed in countries outside of Australia. Specifically:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">United States</strong> — our primary hosting infrastructure runs on OVHcloud enterprise data centres in the US. AI API providers (OpenAI, Anthropic, Google) also process data in the US.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Regional options</strong> — if you require data to be hosted in a specific region for compliance reasons, we can deploy infrastructure across North America, Asia Pacific, or Europe.
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Before disclosing personal information overseas, we take reasonable steps to ensure the recipient handles your information in accordance with the APPs (APP 8). All our third-party providers are bound by data processing agreements that require appropriate security and privacy safeguards.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">8. Data Security</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We take the security of your data seriously. Our infrastructure includes multiple layers of protection:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: '3x hot database replicas', text: 'three live copies of your data running at all times, with automatic failover in 1\u20132 seconds.' },
              { bold: '30-minute local snapshots', text: 'automatic backups every 30 minutes with a 3-day rolling window.' },
              { bold: 'Offsite point-in-time recovery', text: 'the ability to restore data to any minute, with a 10-day rolling window.' },
              { bold: 'Encryption', text: 'data encrypted at rest and in transit using industry-standard protocols.' },
              { bold: 'Access controls', text: 'strict role-based access, multi-factor authentication, and least-privilege principles.' },
              { bold: '24/7 monitoring', text: 'proactive infrastructure monitoring to detect and respond to issues before they affect you.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            While we implement robust security measures, no system is completely immune to risk. We encourage you to use strong, unique passwords and keep your account credentials secure.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">9. Data Retention</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We retain your personal information only as long as necessary for the purposes outlined in this policy:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Active accounts', text: 'data is retained for the duration of your service.' },
              { bold: 'After cancellation', text: 'your data remains available for export for 30 days after service termination, then is securely deleted.' },
              { bold: 'Billing records', text: 'retained for 7 years to comply with Australian tax and financial reporting requirements.' },
              { bold: 'Server logs', text: 'retained for 90 days, then automatically purged.' },
              { bold: 'Marketing data', text: 'retained until you withdraw consent or unsubscribe.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">10. Cookies and Tracking</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Our website uses cookies and similar technologies to enhance your experience:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Essential cookies', text: 'required for the website to function (session management, authentication). These cannot be disabled.' },
              { bold: 'Analytics cookies', text: 'help us understand how visitors use our website so we can improve it.' },
              { bold: 'Marketing cookies', text: 'used with your consent to deliver relevant content and track campaign effectiveness (including Ontraport tracking and UTM parameters).' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">11. Your Rights</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Under the Australian Privacy Act, you have the right to:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Access', text: 'your personal information that we hold about you.' },
              { bold: 'Correct', text: 'any inaccurate, incomplete, or out-of-date information.' },
              { bold: 'Request deletion', text: 'of your personal information, subject to our legal obligations to retain certain records.' },
              { bold: 'Withdraw consent', text: 'for marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.' },
              { bold: 'Complain', text: 'to us about how we handle your personal information. If you are not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC).' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            To exercise any of these rights, contact us at <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a>. We will respond to your request within 30 days.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">12. Notifiable Data Breaches</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">In the event of a data breach that is likely to result in serious harm to any individual whose personal information is involved, we will:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Promptly assess the breach to determine its nature and severity.',
              'Take immediate steps to contain the breach and mitigate any harm.',
              'Notify affected individuals and the OAIC as required under the Notifiable Data Breaches (NDB) scheme.',
              'Provide clear information about what happened, what data was affected, and what steps individuals can take to protect themselves.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">13. Children's Privacy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our services are designed for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">14. Changes to This Policy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by email or by posting a prominent notice on our website. We encourage you to review this page periodically.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">15. Contact Us</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Email:</strong> <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a>
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Website:</strong> <a href="https://awesomate.ai/contact" className="text-brand-accent underline hover:text-brand-orange transition-colors">awesomate.ai/contact</a>
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">If you are not satisfied with our response to a privacy concern, you can contact the Office of the Australian Information Commissioner:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Website:</strong> <a href="https://www.oaic.gov.au" className="text-brand-accent underline hover:text-brand-orange transition-colors" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Phone:</strong> 1300 363 992
            </li>
          </ul>
        </div>
      </section>
    </CopyWrapper>
  );
};
