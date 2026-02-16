import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const TermsOfServiceCode = `
<style>
  #tm-terms {
    padding: 80px 0 100px !important;
    background: var(--color-5, #ffffff) !important;
  }
  .tm-container {
    max-width: 900px !important; margin: 0 auto !important; padding: 0 24px !important;
  }
  .tm-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .tm-h1.tm-h1.tm-h1.tm-h1 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 12px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .tm-h1.tm-h1.tm-h1.tm-h1 { font-size: 44px !important; }
  }
  .tm-updated {
    font-family: var(--font-main) !important; font-size: 14px !important;
    color: #9ca3af !important; margin-bottom: 16px !important;
  }
  .tm-accent-line {
    width: 80px !important; height: 3px !important; border-radius: 3px !important;
    background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important;
    margin-bottom: 48px !important;
  }
  .tm-h2.tm-h2.tm-h2.tm-h2 {
    font-family: var(--font-heading) !important;
    font-size: 22px !important; line-height: 1.3 !important;
    color: var(--color-1) !important; margin: 48px 0 16px !important;
    letter-spacing: -0.01em !important;
  }
  .tm-h3.tm-h3.tm-h3.tm-h3 {
    font-family: var(--font-heading) !important;
    font-size: 18px !important; line-height: 1.4 !important;
    color: var(--color-1) !important; margin: 28px 0 12px !important;
  }
  .tm-p {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #374151 !important; line-height: 1.7 !important;
    margin: 0 0 16px !important;
  }
  .tm-ul {
    list-style: none !important; padding-left: 0 !important; margin: 0 0 16px !important;
  }
  .tm-ul li {
    font-family: var(--font-main) !important; font-size: 16px !important;
    color: #374151 !important; line-height: 1.7 !important;
    padding-left: 20px !important; position: relative !important;
    margin-bottom: 8px !important;
  }
  .tm-ul li::before {
    content: '' !important; position: absolute !important;
    left: 0 !important; top: 11px !important;
    width: 6px !important; height: 6px !important;
    border-radius: 50% !important; background: var(--color-2) !important;
  }
  .tm-strong { font-weight: 700 !important; color: var(--color-1) !important; }
  .tm-link {
    color: var(--color-2) !important; text-decoration: underline !important;
    transition: color 0.2s !important;
  }
  .tm-link:hover { color: var(--color-3) !important; }
</style>

<section id="tm-terms">
  <div class="tm-container">
    <div class="tm-label">Legal</div>
    <h1 class="tm-h1">Terms of Service</h1>
    <div class="tm-updated">Last updated: February 2026</div>
    <div class="tm-accent-line"></div>

    <h2 class="tm-h2">1. Agreement to Terms</h2>
    <p class="tm-p">These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the services provided by Awesomate.ai (&ldquo;Awesomate&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using our services, you agree to be bound by these Terms and our <a href="/privacy-policy" class="tm-link">Privacy Policy</a>.</p>
    <p class="tm-p">If you do not agree to these Terms, you must not access or use our services. If you are using our services on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms.</p>

    <h2 class="tm-h2">2. About Awesomate</h2>
    <p class="tm-p">Awesomate is a business technology partner offering three core services:</p>
    <ul class="tm-ul">
      <li><span class="tm-strong">n8n Hosting</span> &mdash; managed workflow automation hosting on enterprise-grade Kubernetes infrastructure.</li>
      <li><span class="tm-strong">Buddzee</span> &mdash; an AI-powered data platform that connects to your business databases and lets you query them in plain English.</li>
      <li><span class="tm-strong">Vibe Coding</span> &mdash; custom application development, hosting, and ongoing support.</li>
    </ul>

    <h2 class="tm-h2">3. Eligibility</h2>
    <p class="tm-p">You must be at least 18 years of age to use our services. By using our services, you represent that you meet this requirement and, if acting on behalf of an entity, that you have the authority to accept these Terms on its behalf.</p>

    <h2 class="tm-h2">4. Account Registration</h2>
    <p class="tm-p">To access certain services, you may need to create an account. You agree to:</p>
    <ul class="tm-ul">
      <li>Provide accurate, current, and complete information during registration.</li>
      <li>Maintain the security and confidentiality of your account credentials.</li>
      <li>Promptly update your account information if it changes.</li>
      <li>Accept responsibility for all activity that occurs under your account.</li>
    </ul>
    <p class="tm-p">You must notify us immediately at <a href="mailto:hello@awesomate.ai" class="tm-link">hello@awesomate.ai</a> if you suspect any unauthorised use of your account.</p>

    <h2 class="tm-h2">5. Description of Services</h2>

    <h3 class="tm-h3">n8n Hosting</h3>
    <p class="tm-p">We provide managed hosting of n8n workflow automation instances on our Kubernetes infrastructure. Each plan includes a specified allocation of resources (vCPU, RAM, storage) and uncapped workflow executions. We handle server provisioning, maintenance, security patching, backups, and monitoring.</p>

    <h3 class="tm-h3">Buddzee</h3>
    <p class="tm-p">Buddzee connects to your business databases and uses AI to let you query your data using natural language. We host and manage the platform infrastructure, including database connections, query processing, and report generation. You retain full ownership of your data at all times.</p>

    <h3 class="tm-h3">Vibe Coding</h3>
    <p class="tm-p">We design, build, and host custom web applications tailored to your business requirements. Projects include a one-time development fee and an ongoing monthly hosting and support fee. We also offer AI-assisted development training for teams that want to build their own applications.</p>

    <h2 class="tm-h2">6. Acceptable Use Policy</h2>
    <p class="tm-p">You agree not to use our services to:</p>
    <ul class="tm-ul">
      <li>Violate any applicable law, regulation, or third-party rights.</li>
      <li>Transmit malware, viruses, or any other harmful code.</li>
      <li>Send unsolicited bulk messages (spam) or facilitate phishing.</li>
      <li>Mine cryptocurrency or run computationally abusive workloads.</li>
      <li>Attempt to gain unauthorised access to our systems or other users&rsquo; accounts.</li>
      <li>Circumvent, disable, or interfere with security features of our services.</li>
      <li>Consume resources significantly beyond your plan&rsquo;s intended capacity.</li>
      <li>Store or process data subject to specific regulatory requirements (e.g., HIPAA, PCI-DSS) without an appropriate plan and prior written agreement.</li>
    </ul>
    <p class="tm-p">We reserve the right to suspend or terminate access to any account that violates this Acceptable Use Policy, with or without notice depending on the severity of the violation.</p>

    <h2 class="tm-h2">7. Customer Data</h2>
    <p class="tm-p"><span class="tm-strong">You retain full ownership of all data you provide to us.</span> We do not claim any ownership rights over your data.</p>
    <ul class="tm-ul">
      <li>We process your data solely to deliver the services you have subscribed to.</li>
      <li>You may export your data at any time through the tools and interfaces we provide.</li>
      <li>Upon cancellation or termination, your data will remain available for export for 30 days, after which it will be securely deleted from our systems.</li>
      <li>We will not access your data except as necessary to provide the service, respond to support requests, or comply with legal obligations.</li>
    </ul>

    <h2 class="tm-h2">8. Intellectual Property</h2>

    <h3 class="tm-h3">Our Property</h3>
    <p class="tm-p">The Awesomate platform, including all software, branding, documentation, website content, and proprietary tools, is owned by or licensed to Awesomate and is protected under Australian and international intellectual property laws. Nothing in these Terms grants you any right to use our trademarks, logos, or branding without prior written consent.</p>

    <h3 class="tm-h3">Your Property</h3>
    <ul class="tm-ul">
      <li><span class="tm-strong">n8n workflows:</span> You own your workflow configurations and any custom logic you create.</li>
      <li><span class="tm-strong">Buddzee outputs:</span> You own all reports, insights, and query results generated from your data.</li>
      <li><span class="tm-strong">Vibe Coding applications:</span> You own the custom application we build for you. Awesomate retains rights to any underlying reusable frameworks, libraries, or tools that are not specific to your project.</li>
    </ul>

    <h2 class="tm-h2">9. Payment and Billing</h2>
    <ul class="tm-ul">
      <li>Pricing for all services is as published on our website at the time of purchase.</li>
      <li>Subscriptions are billed monthly in advance. Vibe Coding project fees are billed as agreed in your project proposal.</li>
      <li>All prices are in Australian dollars (AUD) unless otherwise stated.</li>
      <li>We may adjust pricing with at least 30 days&rsquo; written notice. Existing subscriptions will honour current pricing until the end of the current billing period.</li>
      <li>If a payment fails, you will have a 7-day grace period to resolve the issue before we suspend access to your services.</li>
    </ul>

    <h2 class="tm-h2">10. Service Levels</h2>
    <p class="tm-p">We target 99.99% uptime for all hosted services. This excludes:</p>
    <ul class="tm-ul">
      <li>Scheduled maintenance (we will provide at least 24 hours&rsquo; notice where possible).</li>
      <li>Force majeure events (natural disasters, widespread internet outages, government actions).</li>
      <li>Issues caused by your actions, your code, or your third-party integrations.</li>
      <li>Failures of third-party services beyond our control.</li>
    </ul>
    <p class="tm-p">We proactively monitor all infrastructure 24/7 and will notify you promptly of any service disruptions that may affect you.</p>

    <h2 class="tm-h2">11. Cancellation and Refunds</h2>
    <ul class="tm-ul">
      <li><span class="tm-strong">No lock-in contracts.</span> You may cancel your subscription at any time.</li>
      <li>Cancellation takes effect at the end of your current billing period. You will continue to have access until then.</li>
      <li>We do not provide refunds for partial billing periods.</li>
      <li>Vibe Coding project fees are non-refundable once development work has commenced, as agreed in your project proposal.</li>
      <li>If you cancel within the first 14 days and have not used the service, you may request a full refund.</li>
    </ul>

    <h2 class="tm-h2">12. Limitation of Liability</h2>
    <p class="tm-p">To the maximum extent permitted by law:</p>
    <ul class="tm-ul">
      <li>Our total aggregate liability arising out of or in connection with these Terms or your use of our services is limited to the total fees you have paid to us in the <span class="tm-strong">12 months immediately preceding the event giving rise to the claim</span>.</li>
      <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill.</li>
      <li>We are not liable for any loss or damage resulting from events beyond our reasonable control.</li>
    </ul>
    <p class="tm-p">Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability under the Australian Consumer Law for failure to comply with consumer guarantees.</p>

    <h2 class="tm-h2">13. Disclaimer</h2>
    <p class="tm-p">To the extent permitted by applicable law, our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, express or implied, regarding the reliability, availability, accuracy, or fitness for a particular purpose of our services.</p>
    <p class="tm-p">Nothing in these Terms is intended to exclude, restrict, or modify any consumer guarantee under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) that cannot be excluded, restricted, or modified by agreement.</p>

    <h2 class="tm-h2">14. Indemnification</h2>
    <p class="tm-p">You agree to indemnify, defend, and hold harmless Awesomate and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with:</p>
    <ul class="tm-ul">
      <li>Your use of the services in violation of these Terms.</li>
      <li>Your data or content that you process through our services.</li>
      <li>Your violation of any applicable law or third-party rights.</li>
    </ul>

    <h2 class="tm-h2">15. Suspension and Termination</h2>
    <p class="tm-p">We may suspend or restrict access to your account if:</p>
    <ul class="tm-ul">
      <li>You fail to pay fees when due (after the 7-day grace period).</li>
      <li>You breach the Acceptable Use Policy or any material term of these Terms.</li>
      <li>Your use poses a security risk to our infrastructure or other customers.</li>
      <li>Required by law or a government authority.</li>
    </ul>
    <p class="tm-p">We may terminate these Terms with 30 days&rsquo; written notice for any reason. In the event of a material breach, we may terminate immediately upon notice. Upon termination, you will have 30 days to export your data before it is deleted.</p>
    <p class="tm-p">The following provisions survive termination: payment obligations, intellectual property rights, limitation of liability, indemnification, confidentiality, and governing law.</p>

    <h2 class="tm-h2">16. Confidentiality</h2>
    <p class="tm-p">Each party agrees to keep confidential any non-public information received from the other party in connection with these Terms. This obligation does not apply to information that is:</p>
    <ul class="tm-ul">
      <li>Publicly available through no fault of the receiving party.</li>
      <li>Already known to the receiving party prior to disclosure.</li>
      <li>Independently developed without reference to the confidential information.</li>
      <li>Required to be disclosed by law, regulation, or court order (with reasonable prior notice where permitted).</li>
    </ul>

    <h2 class="tm-h2">17. AI and Machine Learning</h2>
    <p class="tm-p">Certain features of our services, particularly within the Buddzee platform, use artificial intelligence and machine learning technologies. By using these features, you acknowledge and agree that:</p>
    <ul class="tm-ul">
      <li>You are responsible for the accuracy and legality of the data you provide to AI features.</li>
      <li>AI-generated outputs are informational in nature and do not constitute professional, legal, financial, or medical advice.</li>
      <li>Awesomate is not liable for business decisions made based on AI-generated outputs.</li>
      <li>AI processing may involve third-party providers whose use is governed by their own terms and data processing agreements.</li>
    </ul>

    <h2 class="tm-h2">18. Governing Law</h2>
    <p class="tm-p">These Terms are governed by and construed in accordance with the laws of New South Wales, Australia. You submit to the exclusive jurisdiction of the courts of New South Wales for the resolution of any disputes arising under or in connection with these Terms.</p>

    <h2 class="tm-h2">19. Dispute Resolution</h2>
    <p class="tm-p">In the event of a dispute, the parties agree to first attempt resolution through good faith negotiation. If the dispute cannot be resolved within 30 days, either party may refer the matter to mediation administered by the Australian Disputes Centre (ADC) before commencing court proceedings.</p>

    <h2 class="tm-h2">20. Changes to These Terms</h2>
    <p class="tm-p">We may update these Terms from time to time. We will provide at least 30 days&rsquo; notice of material changes via email or a prominent notice on our website. Your continued use of our services after the notice period constitutes acceptance of the updated Terms. If you do not agree with the changes, you may cancel your subscription before the new Terms take effect.</p>

    <h2 class="tm-h2">21. General Provisions</h2>
    <ul class="tm-ul">
      <li><span class="tm-strong">Severability:</span> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</li>
      <li><span class="tm-strong">Waiver:</span> Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
      <li><span class="tm-strong">Assignment:</span> You may not assign your rights under these Terms without our prior written consent. We may assign our rights to a successor entity in the event of a merger, acquisition, or sale of assets.</li>
      <li><span class="tm-strong">Entire Agreement:</span> These Terms, together with our <a href="/privacy-policy" class="tm-link">Privacy Policy</a> and the pricing published on our website, constitute the entire agreement between you and Awesomate regarding the use of our services.</li>
    </ul>

    <h2 class="tm-h2">22. Contact Us</h2>
    <p class="tm-p">If you have any questions about these Terms, please contact us:</p>
    <ul class="tm-ul">
      <li><span class="tm-strong">Email:</span> <a href="mailto:hello@awesomate.ai" class="tm-link">hello@awesomate.ai</a></li>
      <li><span class="tm-strong">Website:</span> <a href="https://awesomate.ai/contact" class="tm-link">awesomate.ai/contact</a></li>
    </ul>
  </div>
</section>
`;

export const TermsOfService: React.FC = () => {
  return (
    <CopyWrapper blockName="TermsOfService" codeToCopy={TermsOfServiceCode}>
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Legal</div>
          <h1 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-3">
            Terms of Service
          </h1>
          <div className="text-sm text-gray-400 mb-4">Last updated: February 2026</div>
          <div className="w-20 h-[3px] rounded-[3px] bg-gradient-to-r from-brand-accent to-brand-orange mb-12" />

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">1. Agreement to Terms</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            These Terms of Service ("Terms") govern your access to and use of the services provided by Awesomate.ai ("Awesomate", "we", "us", or "our"). By accessing or using our services, you agree to be bound by these Terms and our <a href="#privacy-policy" className="text-brand-accent underline hover:text-brand-orange transition-colors">Privacy Policy</a>.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            If you do not agree to these Terms, you must not access or use our services. If you are using our services on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">2. About Awesomate</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Awesomate is a business technology partner offering three core services:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">n8n Hosting</strong> — managed workflow automation hosting on enterprise-grade Kubernetes infrastructure.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Buddzee</strong> — an AI-powered data platform that connects to your business databases and lets you query them in plain English.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Vibe Coding</strong> — custom application development, hosting, and ongoing support.
            </li>
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">3. Eligibility</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            You must be at least 18 years of age to use our services. By using our services, you represent that you meet this requirement and, if acting on behalf of an entity, that you have the authority to accept these Terms on its behalf.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">4. Account Registration</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">To access certain services, you may need to create an account. You agree to:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Provide accurate, current, and complete information during registration.',
              'Maintain the security and confidentiality of your account credentials.',
              'Promptly update your account information if it changes.',
              'Accept responsibility for all activity that occurs under your account.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            You must notify us immediately at <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a> if you suspect any unauthorised use of your account.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">5. Description of Services</h2>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">n8n Hosting</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We provide managed hosting of n8n workflow automation instances on our Kubernetes infrastructure. Each plan includes a specified allocation of resources (vCPU, RAM, storage) and uncapped workflow executions. We handle server provisioning, maintenance, security patching, backups, and monitoring.
          </p>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Buddzee</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Buddzee connects to your business databases and uses AI to let you query your data using natural language. We host and manage the platform infrastructure, including database connections, query processing, and report generation. You retain full ownership of your data at all times.
          </p>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Vibe Coding</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We design, build, and host custom web applications tailored to your business requirements. Projects include a one-time development fee and an ongoing monthly hosting and support fee. We also offer AI-assisted development training for teams that want to build their own applications.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">6. Acceptable Use Policy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">You agree not to use our services to:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Violate any applicable law, regulation, or third-party rights.',
              'Transmit malware, viruses, or any other harmful code.',
              'Send unsolicited bulk messages (spam) or facilitate phishing.',
              'Mine cryptocurrency or run computationally abusive workloads.',
              'Attempt to gain unauthorised access to our systems or other users\u2019 accounts.',
              'Circumvent, disable, or interfere with security features of our services.',
              'Consume resources significantly beyond your plan\u2019s intended capacity.',
              'Store or process data subject to specific regulatory requirements (e.g., HIPAA, PCI-DSS) without an appropriate plan and prior written agreement.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We reserve the right to suspend or terminate access to any account that violates this Acceptable Use Policy, with or without notice depending on the severity of the violation.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">7. Customer Data</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">You retain full ownership of all data you provide to us.</strong> We do not claim any ownership rights over your data.
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'We process your data solely to deliver the services you have subscribed to.',
              'You may export your data at any time through the tools and interfaces we provide.',
              'Upon cancellation or termination, your data will remain available for export for 30 days, after which it will be securely deleted from our systems.',
              'We will not access your data except as necessary to provide the service, respond to support requests, or comply with legal obligations.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">8. Intellectual Property</h2>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Our Property</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            The Awesomate platform, including all software, branding, documentation, website content, and proprietary tools, is owned by or licensed to Awesomate and is protected under Australian and international intellectual property laws. Nothing in these Terms grants you any right to use our trademarks, logos, or branding without prior written consent.
          </p>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Your Property</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">n8n workflows:</strong> You own your workflow configurations and any custom logic you create.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Buddzee outputs:</strong> You own all reports, insights, and query results generated from your data.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Vibe Coding applications:</strong> You own the custom application we build for you. Awesomate retains rights to any underlying reusable frameworks, libraries, or tools that are not specific to your project.
            </li>
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">9. Payment and Billing</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Pricing for all services is as published on our website at the time of purchase.',
              'Subscriptions are billed monthly in advance. Vibe Coding project fees are billed as agreed in your project proposal.',
              'All prices are in Australian dollars (AUD) unless otherwise stated.',
              'We may adjust pricing with at least 30 days\u2019 written notice. Existing subscriptions will honour current pricing until the end of the current billing period.',
              'If a payment fails, you will have a 7-day grace period to resolve the issue before we suspend access to your services.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">10. Service Levels</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We target 99.99% uptime for all hosted services. This excludes:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Scheduled maintenance (we will provide at least 24 hours\u2019 notice where possible).',
              'Force majeure events (natural disasters, widespread internet outages, government actions).',
              'Issues caused by your actions, your code, or your third-party integrations.',
              'Failures of third-party services beyond our control.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We proactively monitor all infrastructure 24/7 and will notify you promptly of any service disruptions that may affect you.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">11. Cancellation and Refunds</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'No lock-in contracts.', text: ' You may cancel your subscription at any time.' },
              { bold: null, text: 'Cancellation takes effect at the end of your current billing period. You will continue to have access until then.' },
              { bold: null, text: 'We do not provide refunds for partial billing periods.' },
              { bold: null, text: 'Vibe Coding project fees are non-refundable once development work has commenced, as agreed in your project proposal.' },
              { bold: null, text: 'If you cancel within the first 14 days and have not used the service, you may request a full refund.' },
            ].map((item, i) => (
              <li key={i} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                {item.bold && <strong className="text-brand-navy">{item.bold}</strong>}{item.text}
              </li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">12. Limitation of Liability</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">To the maximum extent permitted by law:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              Our total aggregate liability arising out of or in connection with these Terms or your use of our services is limited to the total fees you have paid to us in the <strong className="text-brand-navy">12 months immediately preceding the event giving rise to the claim</strong>.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              We are not liable for any loss or damage resulting from events beyond our reasonable control.
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability under the Australian Consumer Law for failure to comply with consumer guarantees.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">13. Disclaimer</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            To the extent permitted by applicable law, our services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, availability, accuracy, or fitness for a particular purpose of our services.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Nothing in these Terms is intended to exclude, restrict, or modify any consumer guarantee under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) that cannot be excluded, restricted, or modified by agreement.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">14. Indemnification</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            You agree to indemnify, defend, and hold harmless Awesomate and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Your use of the services in violation of these Terms.',
              'Your data or content that you process through our services.',
              'Your violation of any applicable law or third-party rights.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">15. Suspension and Termination</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We may suspend or restrict access to your account if:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'You fail to pay fees when due (after the 7-day grace period).',
              'You breach the Acceptable Use Policy or any material term of these Terms.',
              'Your use poses a security risk to our infrastructure or other customers.',
              'Required by law or a government authority.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may terminate these Terms with 30 days' written notice for any reason. In the event of a material breach, we may terminate immediately upon notice. Upon termination, you will have 30 days to export your data before it is deleted.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            The following provisions survive termination: payment obligations, intellectual property rights, limitation of liability, indemnification, confidentiality, and governing law.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">16. Confidentiality</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Each party agrees to keep confidential any non-public information received from the other party in connection with these Terms. This obligation does not apply to information that is:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Publicly available through no fault of the receiving party.',
              'Already known to the receiving party prior to disclosure.',
              'Independently developed without reference to the confidential information.',
              'Required to be disclosed by law, regulation, or court order (with reasonable prior notice where permitted).',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">17. AI and Machine Learning</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Certain features of our services, particularly within the Buddzee platform, use artificial intelligence and machine learning technologies. By using these features, you acknowledge and agree that:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'You are responsible for the accuracy and legality of the data you provide to AI features.',
              'AI-generated outputs are informational in nature and do not constitute professional, legal, financial, or medical advice.',
              'Awesomate is not liable for business decisions made based on AI-generated outputs.',
              'AI processing may involve third-party providers whose use is governed by their own terms and data processing agreements.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">18. Governing Law</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            These Terms are governed by and construed in accordance with the laws of New South Wales, Australia. You submit to the exclusive jurisdiction of the courts of New South Wales for the resolution of any disputes arising under or in connection with these Terms.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">19. Dispute Resolution</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            In the event of a dispute, the parties agree to first attempt resolution through good faith negotiation. If the dispute cannot be resolved within 30 days, either party may refer the matter to mediation administered by the Australian Disputes Centre (ADC) before commencing court proceedings.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">20. Changes to These Terms</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may update these Terms from time to time. We will provide at least 30 days' notice of material changes via email or a prominent notice on our website. Your continued use of our services after the notice period constitutes acceptance of the updated Terms. If you do not agree with the changes, you may cancel your subscription before the new Terms take effect.
          </p>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">21. General Provisions</h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Severability:', text: ' If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.' },
              { bold: 'Waiver:', text: ' Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.' },
              { bold: 'Assignment:', text: ' You may not assign your rights under these Terms without our prior written consent. We may assign our rights to a successor entity in the event of a merger, acquisition, or sale of assets.' },
              { bold: 'Entire Agreement:', text: ' These Terms, together with our Privacy Policy and the pricing published on our website, constitute the entire agreement between you and Awesomate regarding the use of our services.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong>{item.text}
              </li>
            ))}
          </ul>

          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">22. Contact Us</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">If you have any questions about these Terms, please contact us:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Email:</strong> <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a>
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Website:</strong> <a href="https://awesomate.ai/contact" className="text-brand-accent underline hover:text-brand-orange transition-colors">awesomate.ai/contact</a>
            </li>
          </ul>
        </div>
      </section>
    </CopyWrapper>
  );
};
