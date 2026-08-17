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
  .pv-ul.pv-ul.pv-ul.pv-ul {
    list-style: none !important; padding-left: 0 !important; margin: 0 0 16px !important;
  }
  .pv-ul.pv-ul.pv-ul.pv-ul li {
    list-style: none !important;
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
    <p class="pv-p">Awesomate.ai (&ldquo;Awesomate&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
    <p class="pv-p">This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website, use our services, or otherwise interact with us. It applies to all of our services, including managed n8n hosting, the Buddzee data platform, and Vibe Coding application development.</p>
    <p class="pv-p">By using our services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our services.</p>

    <h2 class="pv-h2">2. Our Role: Data Controller and Data Processor</h2>
    <p class="pv-p">Awesomate operates in two capacities depending on the type of data involved:</p>
    <p class="pv-p"><span class="pv-strong">As a data controller:</span> We collect and manage personal information about our customers for account management, billing, communications, and service delivery (e.g., your name, email, payment details). We determine the purposes and means of processing this data, and this Privacy Policy governs that processing.</p>
    <p class="pv-p"><span class="pv-strong">As a data processor:</span> When you use our services &mdash; including n8n hosting, Buddzee, and Vibe Coding &mdash; we process data on your behalf according to your instructions. This may include your customers&rsquo; data, business records, and other information you choose to store or process through our platforms. In this capacity, you remain the data controller and are responsible for ensuring that your use of our services complies with applicable privacy laws. We process this data solely to deliver the services you have engaged us to provide and in accordance with any Data Processing Addendum (DPA) agreed between us.</p>
    <p class="pv-p">This distinction is important: our obligations and your rights differ depending on whether Awesomate is acting as a controller or a processor. The remainder of this policy covers both roles, with specific sections noting where distinctions apply.</p>

    <h2 class="pv-h2">3. Information We Collect</h2>

    <h3 class="pv-h3">Personal Information (Awesomate as Controller)</h3>
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

    <h3 class="pv-h3">Service Data (Awesomate as Processor)</h3>
    <p class="pv-p">Depending on which services you use, we may process data on your behalf, including:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">n8n Hosting:</span> Workflow configurations, execution logs, and connected service credentials (encrypted at rest)</li>
      <li><span class="pv-strong">Buddzee:</span> Database connection details, query history, and generated reports</li>
      <li><span class="pv-strong">Vibe Coding:</span> Application specifications, design requirements, and project files</li>
    </ul>
    <p class="pv-p">This service data belongs to you. We do not access, use, or disclose it except as necessary to deliver the services you have requested, or as required by law.</p>

    <h3 class="pv-h3">Sensitive Information</h3>
    <p class="pv-p">We recognise that some clients use our services to process sensitive information as defined under the Privacy Act, which may include biometric data, health information, racial or ethnic origin, political opinions, religious beliefs, sexual orientation, criminal records, or trade union membership.</p>
    <p class="pv-p">When Awesomate processes sensitive information on your behalf as a data processor:</p>
    <ul class="pv-ul">
      <li>We do so only under your instruction and in accordance with any agreed Data Processing Addendum.</li>
      <li>We apply additional safeguards, including the option for fully isolated infrastructure deployments (see Section 9: Data Isolation).</li>
      <li>We do not collect, use, or disclose sensitive information for any purpose other than delivering the services you have engaged us to provide.</li>
      <li>We require explicit consent or lawful authority before processing sensitive information, in compliance with APP 3.3.</li>
    </ul>
    <p class="pv-p">If your use case involves sensitive information &mdash; particularly in regulated industries such as government, healthcare, or financial services &mdash; we strongly recommend engaging with us to establish a Data Processing Addendum tailored to your compliance requirements.</p>

    <h3 class="pv-h3">Communication Data</h3>
    <p class="pv-p">We collect information from your interactions with us, including support tickets, contact form submissions, email correspondence, and feedback you provide.</p>

    <h2 class="pv-h2">4. How We Collect Information</h2>
    <ul class="pv-ul">
      <li><span class="pv-strong">Directly from you</span> &mdash; when you fill out forms on our website, register an account, contact us for support, or provide information during onboarding.</li>
      <li><span class="pv-strong">Automatically</span> &mdash; through cookies, analytics tools, and server logs when you visit our website or use our services.</li>
      <li><span class="pv-strong">From third parties</span> &mdash; from payment processors (transaction confirmations), referral partners, and publicly available business directories.</li>
    </ul>

    <h2 class="pv-h2">5. Why We Collect Information</h2>
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

    <h2 class="pv-h2">6. How We Use AI and Automated Systems</h2>
    <p class="pv-p">Our Buddzee platform and related services use artificial intelligence and machine learning technologies to help you query and analyse your business data using natural language. Here is how AI is used within our services:</p>
    <ul class="pv-ul">
      <li>AI processes your data to generate insights, reports, and query results based on your instructions.</li>
      <li>AI does not make autonomous decisions that affect your rights or interests &mdash; it produces informational outputs that you choose how to act on.</li>
      <li>We do not use automated decision-making that produces legal effects or similarly significant effects on individuals without human oversight.</li>
    </ul>

    <h3 class="pv-h3">AI Data Protection Commitments</h3>
    <p class="pv-p">AI processing may involve third-party AI providers. Our current AI sub-processors and their data commitments are:</p>
    <table class="pv-table">
      <thead>
        <tr>
          <th>Provider</th>
          <th>Data Training</th>
          <th>Data Retention</th>
          <th>Governing Terms</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google (Gemini)</td>
          <td>Your data is <span class="pv-strong">not used</span> to train Google&rsquo;s models</td>
          <td>Data is processed transiently and not retained beyond request fulfilment</td>
          <td><a href="https://docs.cloud.google.com/gemini/docs/discover/data-governance" class="pv-link" target="_blank" rel="noopener">Google Cloud Data Governance</a></td>
        </tr>
        <tr>
          <td>Anthropic (Claude)</td>
          <td>Your data is <span class="pv-strong">not used</span> to train Anthropic&rsquo;s models when accessed via the API</td>
          <td>Data may be retained for up to 30 days for trust and safety purposes</td>
          <td><a href="https://www.anthropic.com/policies" class="pv-link" target="_blank" rel="noopener">Anthropic API Data Usage Policy</a></td>
        </tr>
        <tr>
          <td>OpenAI</td>
          <td>Your data is <span class="pv-strong">not used</span> to train OpenAI&rsquo;s models when accessed via the API</td>
          <td>Data may be retained for up to 30 days for abuse monitoring</td>
          <td><a href="https://openai.com/policies" class="pv-link" target="_blank" rel="noopener">OpenAI API Data Usage Policy</a></td>
        </tr>
      </tbody>
    </table>
    <p class="pv-p">All data transmitted to AI providers is encrypted in transit. We do not send personally identifiable information to AI providers unless it is contained within the data you have instructed us to process on your behalf.</p>
    <p class="pv-p">We are committed to transparency about how AI is used in our services and will update this section as our use of AI evolves, in accordance with the automated decision-making transparency requirements under the Privacy Act.</p>

    <h2 class="pv-h2">7. Who We Share Information With</h2>
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
          <td>OVHcloud</td>
          <td>Dedicated server and database hosting</td>
        </tr>
        <tr>
          <td>Offsite backup storage</td>
          <td>Amazon Web Services (S3)</td>
          <td>Encrypted database backups</td>
        </tr>
        <tr>
          <td>Edge security</td>
          <td>Cloudflare</td>
          <td>DDoS protection, web application firewall, and secure traffic delivery</td>
        </tr>
        <tr>
          <td>CRM and marketing</td>
          <td>Ontraport</td>
          <td>Contact management, forms, email</td>
        </tr>
        <tr>
          <td>AI providers</td>
          <td>OpenAI, Anthropic, Google</td>
          <td>AI-powered features</td>
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

    <h2 class="pv-h2">8. International Data Transfers</h2>
    <p class="pv-p">Your personal information may be transferred to and processed in countries outside of Australia. Specifically:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">United States</span> &mdash; our default hosting infrastructure is located in the US. AI API providers (OpenAI, Anthropic, Google) also process data in the US.</li>
      <li><span class="pv-strong">Australian hosting</span> &mdash; for clients with data sovereignty requirements, we can deploy fully isolated infrastructure within Australian-region data centres. Contact us to discuss Australian-hosted deployment options.</li>
      <li><span class="pv-strong">Other regions</span> &mdash; we can deploy infrastructure across North America, Asia Pacific, or Europe depending on your compliance requirements. All inter-datacenter traffic travels over private network infrastructure and never traverses the public internet.</li>
    </ul>
    <p class="pv-p">Before disclosing personal information overseas, we take reasonable steps to ensure the recipient handles your information in accordance with the APPs (APP 8). All our third-party providers are bound by data processing agreements that require appropriate security and privacy safeguards.</p>
    <p class="pv-p">For clients in regulated industries, data residency requirements &mdash; including the jurisdiction of backups and disaster recovery &mdash; can be addressed as part of a Data Processing Addendum.</p>

    <h2 class="pv-h2">9. Data Isolation</h2>
    <p class="pv-p">Awesomate&rsquo;s infrastructure is designed to support varying levels of data isolation depending on client requirements.</p>
    <p class="pv-p"><span class="pv-strong">Standard deployments:</span> Client services are deployed within shared infrastructure groups with logical separation between accounts. Access controls ensure that each client can only access their own data.</p>
    <p class="pv-p"><span class="pv-strong">Isolated deployments:</span> For clients with enhanced security or compliance requirements &mdash; including government, healthcare, and financial services &mdash; we offer fully isolated infrastructure deployments. In an isolated deployment:</p>
    <ul class="pv-ul">
      <li>Your services run on dedicated infrastructure components (database, caching, web server, and search services) that are not shared with any other client.</li>
      <li>No other client is deployed within your infrastructure group.</li>
      <li>Network-level segmentation enforced at the firewall layer ensures that traffic between isolated environments is prohibited by default. This isolation is not dependent on application-level controls.</li>
      <li>All traffic within your deployment is encrypted at the network layer.</li>
    </ul>
    <p class="pv-p">This isolation model applies to both our n8n hosting and application hosting services. Isolated deployments can be combined with regional hosting to meet both data sovereignty and data segregation requirements simultaneously.</p>
    <p class="pv-p">Detailed technical specifications of our isolation architecture are available under NDA as part of our security documentation. To discuss isolated deployment options, contact us at <a href="mailto:hello@awesomate.ai" class="pv-link">hello@awesomate.ai</a>.</p>

    <h2 class="pv-h2">10. Data Security</h2>
    <p class="pv-p">We take the security of your data seriously. Our infrastructure is purpose-built for workloads that require the highest levels of security and compliance. Key security measures include:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Dedicated infrastructure</span> &mdash; our private cloud runs on dedicated physical servers exclusively allocated to Awesomate. We do not share compute, network, or storage resources with any third party at the physical infrastructure level.</li>
      <li><span class="pv-strong">No public exposure</span> &mdash; no server in our infrastructure has a public IP address. All user traffic enters through a secure, outbound-initiated tunnel. There are no open inbound ports.</li>
      <li><span class="pv-strong">Encryption in transit</span> &mdash; all traffic between services within our infrastructure is encrypted at the network layer. External traffic is encrypted via TLS. Backup transfers to offsite storage use TLS with certificate verification enforced.</li>
      <li><span class="pv-strong">Encryption at rest</span> &mdash; encryption at rest is available for all persistent volumes. Secrets such as API keys and database credentials are encrypted and never stored in plaintext.</li>
      <li><span class="pv-strong">High-availability firewalling</span> &mdash; all traffic is governed by a redundant firewall pair with instant failover. There is no single point of failure in the network security layer.</li>
      <li><span class="pv-strong">Mandatory VPN for administration</span> &mdash; all administrative access to production infrastructure requires an authenticated VPN connection. No management interface is accessible from the public internet.</li>
      <li><span class="pv-strong">Automated credential rotation</span> &mdash; administrative credentials are automatically rotated on a scheduled basis across all infrastructure.</li>
      <li><span class="pv-strong">Database redundancy</span> &mdash; production databases run as multi-replica clusters distributed across separate physical servers with automatic failover. No single hardware failure causes data loss or service interruption.</li>
      <li><span class="pv-strong">Multi-layered backup strategy</span> &mdash; frequent automated snapshots provide rapid on-host recovery, supplemented by daily encrypted offsite backups with multi-day retention.</li>
      <li><span class="pv-strong">Full-stack monitoring</span> &mdash; real-time monitoring and alerting across all infrastructure components, with network flow analysis for detecting anomalous traffic and supporting forensic investigation.</li>
      <li><span class="pv-strong">Infrastructure as Code</span> &mdash; every configuration across the entire infrastructure is version-controlled and auditable. Every change has an author, timestamp, and review history. The complete infrastructure can be rebuilt from scratch in a disaster recovery scenario.</li>
      <li><span class="pv-strong">Firewall audit logs</span> &mdash; retained for 30 days, covering all accepted and rejected traffic across network boundaries.</li>
    </ul>
    <p class="pv-p">Detailed technical specifications of our security architecture, including encryption protocols, network design, and access control implementation, are available under NDA as part of our security documentation for enterprise and government clients.</p>
    <p class="pv-p">While we implement robust security measures, no system is completely immune to risk. We encourage you to use strong, unique passwords and keep your account credentials secure.</p>

    <h2 class="pv-h2">11. Data Retention</h2>
    <p class="pv-p">We retain personal information only as long as necessary for the purposes outlined in this policy:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Active accounts</span> &mdash; data is retained for the duration of your service.</li>
      <li><span class="pv-strong">After cancellation</span> &mdash; your data remains available for export for 30 days after service termination, then is securely deleted. Extended retention periods can be agreed contractually for enterprise and government clients.</li>
      <li><span class="pv-strong">Billing records</span> &mdash; retained for 7 years to comply with Australian tax and financial reporting requirements.</li>
      <li><span class="pv-strong">Server logs</span> &mdash; retained for 90 days, then automatically purged.</li>
      <li><span class="pv-strong">Firewall audit logs</span> &mdash; retained for 30 days.</li>
      <li><span class="pv-strong">Automated snapshots and backups</span> &mdash; retained on a rolling basis in accordance with our backup schedule. All backups are included in the data deletion process upon service termination.</li>
      <li><span class="pv-strong">Marketing data</span> &mdash; retained until you withdraw consent or unsubscribe.</li>
    </ul>
    <p class="pv-p">Upon termination of services, we securely delete all service data, including backups, within the agreed timeframe. For clients requiring certified deletion, this can be arranged as part of a Data Processing Addendum.</p>

    <h2 class="pv-h2">12. Cookies and Tracking</h2>
    <p class="pv-p">Our website uses cookies and similar technologies to enhance your experience:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Essential cookies</span> &mdash; required for the website to function (session management, authentication). These cannot be disabled.</li>
      <li><span class="pv-strong">Analytics cookies</span> &mdash; help us understand how visitors use our website so we can improve it.</li>
      <li><span class="pv-strong">Marketing cookies</span> &mdash; used with your consent to deliver relevant content and track campaign effectiveness (including Ontraport tracking and UTM parameters).</li>
    </ul>
    <p class="pv-p">You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>

    <h2 class="pv-h2">13. Your Rights</h2>
    <p class="pv-p">Under the Australian Privacy Act, you have the right to:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Access</span> your personal information that we hold about you.</li>
      <li><span class="pv-strong">Correct</span> any inaccurate, incomplete, or out-of-date information.</li>
      <li><span class="pv-strong">Request deletion</span> of your personal information, subject to our legal obligations to retain certain records.</li>
      <li><span class="pv-strong">Data portability</span> &mdash; request an export of your data in a standard, machine-readable format.</li>
      <li><span class="pv-strong">Withdraw consent</span> for marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.</li>
      <li><span class="pv-strong">Complain</span> to us about how we handle your personal information. If you are not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" class="pv-link" target="_blank" rel="noopener">www.oaic.gov.au</a>.</li>
    </ul>
    <p class="pv-p">To exercise any of these rights, contact us at <a href="mailto:hello@awesomate.ai" class="pv-link">hello@awesomate.ai</a>. We will respond to your request within 30 days.</p>

    <h2 class="pv-h2">14. Notifiable Data Breaches</h2>
    <p class="pv-p">In the event of a data breach that is likely to result in serious harm to any individual whose personal information is involved, we will:</p>
    <ul class="pv-ul">
      <li>Conduct an initial assessment within 24 hours of becoming aware of the breach.</li>
      <li>Take immediate steps to contain the breach and mitigate any harm.</li>
      <li>Notify affected clients within 72 hours of confirming that the breach meets the notification threshold.</li>
      <li>Notify the Office of the Australian Information Commissioner (OAIC) as required under the Notifiable Data Breaches (NDB) scheme.</li>
      <li>Provide clear information about what happened, what data was affected, and what steps individuals can take to protect themselves.</li>
    </ul>
    <p class="pv-p">For clients with a Data Processing Addendum, breach notification timelines may be further tightened in accordance with your contractual requirements.</p>

    <h2 class="pv-h2">15. Enterprise and Government Clients</h2>
    <p class="pv-p">We recognise that clients in regulated industries &mdash; including government, healthcare, defence, and financial services &mdash; have compliance requirements that go beyond what a standard privacy policy can address.</p>
    <p class="pv-p">Our infrastructure is purpose-built for sensitive and regulated workloads, running on dedicated physical servers with no shared resources, a zero-public-exposure network architecture, encryption at every layer, and full auditability through Infrastructure as Code.</p>
    <p class="pv-p">Our hosting provider holds internationally recognised certifications at the data centre level, including ISO 27001, ISO 27017, ISO 27018, ISO 27701, SOC 1 Type 2, SOC 2, SOC 3, CSA STAR, HIPAA, and PCI DSS. Certification documentation is available upon request.</p>
    <p class="pv-p">For regulated-industry clients, we offer:</p>
    <ul class="pv-ul">
      <li><span class="pv-strong">Data Processing Addendum (DPA)</span> &mdash; a contractual agreement covering data handling obligations, permitted use, sub-processor management, audit rights, breach notification timelines, and data deletion procedures.</li>
      <li><span class="pv-strong">Fully isolated infrastructure</span> &mdash; dedicated compute, database, caching, and networking with firewall-enforced separation and no resource sharing (see Section 9).</li>
      <li><span class="pv-strong">Regional data hosting</span> &mdash; deployment within Australian or other specified jurisdictions, with all data including backups remaining within the agreed region.</li>
      <li><span class="pv-strong">Security documentation</span> &mdash; detailed infrastructure architecture, data flow diagrams, network design, encryption specifications, and security control documentation available under NDA.</li>
      <li><span class="pv-strong">Audit support</span> &mdash; cooperation with your security assessments, penetration testing (by arrangement), and compliance audits.</li>
      <li><span class="pv-strong">Government framework alignment</span> &mdash; our technical controls align with major government and enterprise security frameworks covering access control, audit and accountability, configuration management, identification and authentication, incident response, system and communications protection, system integrity, and contingency planning.</li>
    </ul>
    <p class="pv-p">To discuss enterprise or government requirements, contact us at <a href="mailto:hello@awesomate.ai" class="pv-link">hello@awesomate.ai</a>.</p>

    <h2 class="pv-h2">16. Children&rsquo;s Privacy</h2>
    <p class="pv-p">Our services are designed for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.</p>

    <h2 class="pv-h2">17. Changes to This Policy</h2>
    <p class="pv-p">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by email or by posting a prominent notice on our website. We encourage you to review this page periodically.</p>

    <h2 class="pv-h2">18. Contact Us</h2>
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

          {/* ── 1. About This Policy ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">1. About This Policy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Awesomate.ai ("Awesomate", "we", "us", or "our") is committed to protecting personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our website, use our services, or otherwise interact with us. It applies to all of our services, including managed n8n hosting, the Buddzee data platform, and Vibe Coding application development.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            By using our services, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our services.
          </p>

          {/* ── 2. Our Role: Data Controller and Data Processor ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">2. Our Role: Data Controller and Data Processor</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Awesomate operates in two capacities depending on the type of data involved:</p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">As a data controller:</strong> We collect and manage personal information about our customers for account management, billing, communications, and service delivery (e.g., your name, email, payment details). We determine the purposes and means of processing this data, and this Privacy Policy governs that processing.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">As a data processor:</strong> When you use our services — including n8n hosting, Buddzee, and Vibe Coding — we process data on your behalf according to your instructions. This may include your customers' data, business records, and other information you choose to store or process through our platforms. In this capacity, you remain the data controller and are responsible for ensuring that your use of our services complies with applicable privacy laws. We process this data solely to deliver the services you have engaged us to provide and in accordance with any Data Processing Addendum (DPA) agreed between us.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            This distinction is important: our obligations and your rights differ depending on whether Awesomate is acting as a controller or a processor. The remainder of this policy covers both roles, with specific sections noting where distinctions apply.
          </p>

          {/* ── 3. Information We Collect ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">3. Information We Collect</h2>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Personal Information (Awesomate as Controller)</h3>
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

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Service Data (Awesomate as Processor)</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Depending on which services you use, we may process data on your behalf, including:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">n8n Hosting:</strong> Workflow configurations, execution logs, and connected service credentials (encrypted at rest)
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Buddzee:</strong> Database connection details, query history, and generated reports
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Vibe Coding:</strong> Application specifications, design requirements, and project files
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            This service data belongs to you. We do not access, use, or disclose it except as necessary to deliver the services you have requested, or as required by law.
          </p>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Sensitive Information</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We recognise that some clients use our services to process sensitive information as defined under the Privacy Act, which may include biometric data, health information, racial or ethnic origin, political opinions, religious beliefs, sexual orientation, criminal records, or trade union membership.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">When Awesomate processes sensitive information on your behalf as a data processor:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'We do so only under your instruction and in accordance with any agreed Data Processing Addendum.',
              'We apply additional safeguards, including the option for fully isolated infrastructure deployments (see Section 9: Data Isolation).',
              'We do not collect, use, or disclose sensitive information for any purpose other than delivering the services you have engaged us to provide.',
              'We require explicit consent or lawful authority before processing sensitive information, in compliance with APP 3.3.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            If your use case involves sensitive information — particularly in regulated industries such as government, healthcare, or financial services — we strongly recommend engaging with us to establish a Data Processing Addendum tailored to your compliance requirements.
          </p>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">Communication Data</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We collect information from your interactions with us, including support tickets, contact form submissions, email correspondence, and feedback you provide.
          </p>

          {/* ── 4. How We Collect Information ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">4. How We Collect Information</h2>
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

          {/* ── 5. Why We Collect Information ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">5. Why We Collect Information</h2>
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

          {/* ── 6. How We Use AI and Automated Systems ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">6. How We Use AI and Automated Systems</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our Buddzee platform and related services use artificial intelligence and machine learning technologies to help you query and analyse your business data using natural language. Here is how AI is used within our services:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'AI processes your data to generate insights, reports, and query results based on your instructions.',
              'AI does not make autonomous decisions that affect your rights or interests \u2014 it produces informational outputs that you choose how to act on.',
              'We do not use automated decision-making that produces legal effects or similarly significant effects on individuals without human oversight.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-heading font-800 text-brand-navy mt-7 mb-3">AI Data Protection Commitments</h3>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">AI processing may involve third-party AI providers. Our current AI sub-processors and their data commitments are:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[15px] text-gray-700">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Provider</th>
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Data Training</th>
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Data Retention</th>
                  <th className="text-left font-700 text-brand-navy p-3 border-b border-gray-100">Governing Terms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-100">Google (Gemini)</td>
                  <td className="p-3 border-b border-gray-100">Your data is <strong className="text-brand-navy">not used</strong> to train Google's models</td>
                  <td className="p-3 border-b border-gray-100">Data is processed transiently and not retained beyond request fulfilment</td>
                  <td className="p-3 border-b border-gray-100"><a href="https://docs.cloud.google.com/gemini/docs/discover/data-governance" className="text-brand-accent underline hover:text-brand-orange transition-colors" target="_blank" rel="noopener noreferrer">Google Cloud Data Governance</a></td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">Anthropic (Claude)</td>
                  <td className="p-3 border-b border-gray-100">Your data is <strong className="text-brand-navy">not used</strong> to train Anthropic's models when accessed via the API</td>
                  <td className="p-3 border-b border-gray-100">Data may be retained for up to 30 days for trust and safety purposes</td>
                  <td className="p-3 border-b border-gray-100"><a href="https://www.anthropic.com/policies" className="text-brand-accent underline hover:text-brand-orange transition-colors" target="_blank" rel="noopener noreferrer">Anthropic API Data Usage Policy</a></td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-100">OpenAI</td>
                  <td className="p-3 border-b border-gray-100">Your data is <strong className="text-brand-navy">not used</strong> to train OpenAI's models when accessed via the API</td>
                  <td className="p-3 border-b border-gray-100">Data may be retained for up to 30 days for abuse monitoring</td>
                  <td className="p-3 border-b border-gray-100"><a href="https://openai.com/policies" className="text-brand-accent underline hover:text-brand-orange transition-colors" target="_blank" rel="noopener noreferrer">OpenAI API Data Usage Policy</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            All data transmitted to AI providers is encrypted in transit. We do not send personally identifiable information to AI providers unless it is contained within the data you have instructed us to process on your behalf.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We are committed to transparency about how AI is used in our services and will update this section as our use of AI evolves, in accordance with the automated decision-making transparency requirements under the Privacy Act.
          </p>

          {/* ── 7. Who We Share Information With ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">7. Who We Share Information With</h2>
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
                  ['Infrastructure hosting', 'OVHcloud', 'Dedicated server and database hosting'],
                  ['Offsite backup storage', 'Amazon Web Services (S3)', 'Encrypted database backups'],
                  ['Edge security', 'Cloudflare', 'DDoS protection, web application firewall, and secure traffic delivery'],
                  ['CRM and marketing', 'Ontraport', 'Contact management, forms, email'],
                  ['AI providers', 'OpenAI, Anthropic, Google', 'AI-powered features'],
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

          {/* ── 8. International Data Transfers ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">8. International Data Transfers</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Your personal information may be transferred to and processed in countries outside of Australia. Specifically:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">United States</strong> — our default hosting infrastructure is located in the US. AI API providers (OpenAI, Anthropic, Google) also process data in the US.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Australian hosting</strong> — for clients with data sovereignty requirements, we can deploy fully isolated infrastructure within Australian-region data centres. Contact us to discuss Australian-hosted deployment options.
            </li>
            <li className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
              <strong className="text-brand-navy">Other regions</strong> — we can deploy infrastructure across North America, Asia Pacific, or Europe depending on your compliance requirements. All inter-datacenter traffic travels over private network infrastructure and never traverses the public internet.
            </li>
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Before disclosing personal information overseas, we take reasonable steps to ensure the recipient handles your information in accordance with the APPs (APP 8). All our third-party providers are bound by data processing agreements that require appropriate security and privacy safeguards.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            For clients in regulated industries, data residency requirements — including the jurisdiction of backups and disaster recovery — can be addressed as part of a Data Processing Addendum.
          </p>

          {/* ── 9. Data Isolation ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">9. Data Isolation</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Awesomate's infrastructure is designed to support varying levels of data isolation depending on client requirements.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">Standard deployments:</strong> Client services are deployed within shared infrastructure groups with logical separation between accounts. Access controls ensure that each client can only access their own data.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            <strong className="text-brand-navy">Isolated deployments:</strong> For clients with enhanced security or compliance requirements — including government, healthcare, and financial services — we offer fully isolated infrastructure deployments. In an isolated deployment:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Your services run on dedicated infrastructure components (database, caching, web server, and search services) that are not shared with any other client.',
              'No other client is deployed within your infrastructure group.',
              'Network-level segmentation enforced at the firewall layer ensures that traffic between isolated environments is prohibited by default. This isolation is not dependent on application-level controls.',
              'All traffic within your deployment is encrypted at the network layer.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            This isolation model applies to both our n8n hosting and application hosting services. Isolated deployments can be combined with regional hosting to meet both data sovereignty and data segregation requirements simultaneously.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Detailed technical specifications of our isolation architecture are available under NDA as part of our security documentation. To discuss isolated deployment options, contact us at <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a>.
          </p>

          {/* ── 10. Data Security ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">10. Data Security</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We take the security of your data seriously. Our infrastructure is purpose-built for workloads that require the highest levels of security and compliance. Key security measures include:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Dedicated infrastructure', text: 'our private cloud runs on dedicated physical servers exclusively allocated to Awesomate. We do not share compute, network, or storage resources with any third party at the physical infrastructure level.' },
              { bold: 'No public exposure', text: 'no server in our infrastructure has a public IP address. All user traffic enters through a secure, outbound-initiated tunnel. There are no open inbound ports.' },
              { bold: 'Encryption in transit', text: 'all traffic between services within our infrastructure is encrypted at the network layer. External traffic is encrypted via TLS. Backup transfers to offsite storage use TLS with certificate verification enforced.' },
              { bold: 'Encryption at rest', text: 'encryption at rest is available for all persistent volumes. Secrets such as API keys and database credentials are encrypted and never stored in plaintext.' },
              { bold: 'High-availability firewalling', text: 'all traffic is governed by a redundant firewall pair with instant failover. There is no single point of failure in the network security layer.' },
              { bold: 'Mandatory VPN for administration', text: 'all administrative access to production infrastructure requires an authenticated VPN connection. No management interface is accessible from the public internet.' },
              { bold: 'Automated credential rotation', text: 'administrative credentials are automatically rotated on a scheduled basis across all infrastructure.' },
              { bold: 'Database redundancy', text: 'production databases run as multi-replica clusters distributed across separate physical servers with automatic failover. No single hardware failure causes data loss or service interruption.' },
              { bold: 'Multi-layered backup strategy', text: 'frequent automated snapshots provide rapid on-host recovery, supplemented by daily encrypted offsite backups with multi-day retention.' },
              { bold: 'Full-stack monitoring', text: 'real-time monitoring and alerting across all infrastructure components, with network flow analysis for detecting anomalous traffic and supporting forensic investigation.' },
              { bold: 'Infrastructure as Code', text: 'every configuration across the entire infrastructure is version-controlled and auditable. Every change has an author, timestamp, and review history. The complete infrastructure can be rebuilt from scratch in a disaster recovery scenario.' },
              { bold: 'Firewall audit logs', text: 'retained for 30 days, covering all accepted and rejected traffic across network boundaries.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Detailed technical specifications of our security architecture, including encryption protocols, network design, and access control implementation, are available under NDA as part of our security documentation for enterprise and government clients.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            While we implement robust security measures, no system is completely immune to risk. We encourage you to use strong, unique passwords and keep your account credentials secure.
          </p>

          {/* ── 11. Data Retention ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">11. Data Retention</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">We retain personal information only as long as necessary for the purposes outlined in this policy:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Active accounts', text: 'data is retained for the duration of your service.' },
              { bold: 'After cancellation', text: 'your data remains available for export for 30 days after service termination, then is securely deleted. Extended retention periods can be agreed contractually for enterprise and government clients.' },
              { bold: 'Billing records', text: 'retained for 7 years to comply with Australian tax and financial reporting requirements.' },
              { bold: 'Server logs', text: 'retained for 90 days, then automatically purged.' },
              { bold: 'Firewall audit logs', text: 'retained for 30 days.' },
              { bold: 'Automated snapshots and backups', text: 'retained on a rolling basis in accordance with our backup schedule. All backups are included in the data deletion process upon service termination.' },
              { bold: 'Marketing data', text: 'retained until you withdraw consent or unsubscribe.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Upon termination of services, we securely delete all service data, including backups, within the agreed timeframe. For clients requiring certified deletion, this can be arranged as part of a Data Processing Addendum.
          </p>

          {/* ── 12. Cookies and Tracking ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">12. Cookies and Tracking</h2>
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

          {/* ── 13. Your Rights ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">13. Your Rights</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">Under the Australian Privacy Act, you have the right to:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Access', text: 'your personal information that we hold about you.' },
              { bold: 'Correct', text: 'any inaccurate, incomplete, or out-of-date information.' },
              { bold: 'Request deletion', text: 'of your personal information, subject to our legal obligations to retain certain records.' },
              { bold: 'Data portability', text: 'request an export of your data in a standard, machine-readable format.' },
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

          {/* ── 14. Notifiable Data Breaches ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">14. Notifiable Data Breaches</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">In the event of a data breach that is likely to result in serious harm to any individual whose personal information is involved, we will:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              'Conduct an initial assessment within 24 hours of becoming aware of the breach.',
              'Take immediate steps to contain the breach and mitigate any harm.',
              'Notify affected clients within 72 hours of confirming that the breach meets the notification threshold.',
              'Notify the Office of the Australian Information Commissioner (OAIC) as required under the Notifiable Data Breaches (NDB) scheme.',
              'Provide clear information about what happened, what data was affected, and what steps individuals can take to protect themselves.',
            ].map(item => (
              <li key={item.slice(0, 30)} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">{item}</li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            For clients with a Data Processing Addendum, breach notification timelines may be further tightened in accordance with your contractual requirements.
          </p>

          {/* ── 15. Enterprise and Government Clients ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">15. Enterprise and Government Clients</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We recognise that clients in regulated industries — including government, healthcare, defence, and financial services — have compliance requirements that go beyond what a standard privacy policy can address.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our infrastructure is purpose-built for sensitive and regulated workloads, running on dedicated physical servers with no shared resources, a zero-public-exposure network architecture, encryption at every layer, and full auditability through Infrastructure as Code.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our hosting provider holds internationally recognised certifications at the data centre level, including ISO 27001, ISO 27017, ISO 27018, ISO 27701, SOC 1 Type 2, SOC 2, SOC 3, CSA STAR, HIPAA, and PCI DSS. Certification documentation is available upon request.
          </p>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">For regulated-industry clients, we offer:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="space-y-2 mb-4">
            {[
              { bold: 'Data Processing Addendum (DPA)', text: 'a contractual agreement covering data handling obligations, permitted use, sub-processor management, audit rights, breach notification timelines, and data deletion procedures.' },
              { bold: 'Fully isolated infrastructure', text: 'dedicated compute, database, caching, and networking with firewall-enforced separation and no resource sharing (see Section 9).' },
              { bold: 'Regional data hosting', text: 'deployment within Australian or other specified jurisdictions, with all data including backups remaining within the agreed region.' },
              { bold: 'Security documentation', text: 'detailed infrastructure architecture, data flow diagrams, network design, encryption specifications, and security control documentation available under NDA.' },
              { bold: 'Audit support', text: 'cooperation with your security assessments, penetration testing (by arrangement), and compliance audits.' },
              { bold: 'Government framework alignment', text: 'our technical controls align with major government and enterprise security frameworks covering access control, audit and accountability, configuration management, identification and authentication, incident response, system and communications protection, system integrity, and contingency planning.' },
            ].map(item => (
              <li key={item.bold} className="text-base text-gray-700 leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-accent">
                <strong className="text-brand-navy">{item.bold}</strong> — {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            To discuss enterprise or government requirements, contact us at <a href="mailto:hello@awesomate.ai" className="text-brand-accent underline hover:text-brand-orange transition-colors">hello@awesomate.ai</a>.
          </p>

          {/* ── 16. Children's Privacy ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">16. Children's Privacy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            Our services are designed for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.
          </p>

          {/* ── 17. Changes to This Policy ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">17. Changes to This Policy</h2>
          <p className="text-base text-gray-700 leading-[1.7] mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by email or by posting a prominent notice on our website. We encourage you to review this page periodically.
          </p>

          {/* ── 18. Contact Us ── */}
          <h2 className="text-[22px] font-heading font-800 text-brand-navy mt-12 mb-4">18. Contact Us</h2>
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
