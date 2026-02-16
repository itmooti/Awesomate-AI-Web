import React from 'react';
import { CopyWrapper } from '../shared/CopyWrapper';

const ComparisonCode = `
<style>
  #n8-compare {
    padding: 100px 0 !important;
    background: var(--color-bg-alt, #f8f9fb) !important;
    position: relative !important; overflow: hidden !important;
    border-top: 1px solid rgba(15,17,40,0.06) !important;
    border-bottom: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8cmp-glow {
    position: absolute !important; bottom: -200px !important; left: -100px !important;
    width: 500px !important; height: 500px !important;
    background: radial-gradient(circle, rgba(233,72,77,0.04) 0%, transparent 70%) !important;
    pointer-events: none !important;
  }
  .n8cmp-container {
    max-width: 1100px !important; margin: 0 auto !important;
    padding: 0 24px !important; position: relative !important; z-index: 1 !important;
  }
  .n8cmp-header { text-align: center !important; margin-bottom: 60px !important; }
  .n8cmp-label {
    display: inline-block !important; font-family: var(--font-main) !important;
    font-size: 12px !important; color: var(--color-2) !important;
    text-transform: uppercase !important; letter-spacing: 0.15em !important;
    margin-bottom: 16px !important;
  }
  .n8cmp-h2.n8cmp-h2.n8cmp-h2.n8cmp-h2 {
    font-family: var(--font-heading) !important;
    font-size: 36px !important; line-height: 1.15 !important;
    color: var(--color-1) !important; margin: 0 0 20px !important;
    letter-spacing: -0.02em !important;
  }
  @media (min-width: 768px) {
    .n8cmp-h2.n8cmp-h2.n8cmp-h2.n8cmp-h2 { font-size: 44px !important; }
  }
  .n8cmp-sub {
    font-family: var(--font-main) !important; font-size: 18px !important;
    color: #6b7280 !important; line-height: 1.7 !important;
    max-width: 600px !important; margin: 0 auto !important;
  }

  /* Table wrapper for mobile scroll */
  .n8cmp-scroll {
    overflow-x: auto !important; -webkit-overflow-scrolling: touch !important;
    scrollbar-width: thin !important;
  }

  .n8cmp-table {
    width: 100% !important; min-width: 700px !important;
    border-collapse: separate !important; border-spacing: 0 !important;
    font-family: var(--font-main) !important;
  }
  .n8cmp-table thead th {
    padding: 16px 20px !important; font-size: 13px !important;
    font-weight: 700 !important; text-transform: uppercase !important;
    letter-spacing: 0.08em !important; color: #9ca3af !important;
    text-align: left !important; border-bottom: 2px solid rgba(15,17,40,0.08) !important;
  }
  .n8cmp-table thead th:last-child {
    color: var(--color-2) !important;
    background: rgba(233,72,77,0.04) !important;
    border-bottom-color: var(--color-2) !important;
    border-radius: 12px 12px 0 0 !important;
  }
  .n8cmp-table tbody td {
    padding: 16px 20px !important; font-size: 15px !important;
    color: #374151 !important; border-bottom: 1px solid rgba(15,17,40,0.04) !important;
    vertical-align: top !important;
  }
  .n8cmp-table tbody td:first-child {
    font-weight: 600 !important; color: var(--color-1) !important;
    font-size: 14px !important;
  }
  .n8cmp-table tbody td:last-child {
    background: rgba(233,72,77,0.04) !important;
    font-weight: 600 !important; color: var(--color-1) !important;
  }
  .n8cmp-table tbody tr:last-child td { border-bottom: none !important; }
  .n8cmp-table tbody tr:last-child td:last-child { border-radius: 0 0 12px 12px !important; }

  .n8cmp-check { color: #10b981 !important; margin-right: 6px !important; }
  .n8cmp-warn { color: #f59e0b !important; margin-right: 6px !important; }
  .n8cmp-cross { color: #ef4444 !important; margin-right: 6px !important; }

  .n8cmp-bottom {
    text-align: center !important; margin-top: 48px !important;
    padding: 24px 32px !important; background: white !important;
    border-radius: 16px !important; border: 1px solid rgba(15,17,40,0.06) !important;
  }
  .n8cmp-bottom-text {
    font-family: var(--font-main) !important; font-size: 18px !important;
    font-weight: 700 !important; color: var(--color-1) !important;
  }
  .n8cmp-bottom-text span {
    background: linear-gradient(135deg, var(--color-2), var(--color-3)) !important;
    -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }
</style>

<section id="n8-compare">
  <div class="n8cmp-glow"></div>
  <div class="n8cmp-container">
    <div class="n8cmp-header">
      <div class="n8cmp-label">Compare</div>
      <h2 class="n8cmp-h2">How We Compare</h2>
      <p class="n8cmp-sub">See why businesses are switching to Awesomate for their automation infrastructure.</p>
    </div>

    <div class="n8cmp-scroll">
      <table class="n8cmp-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Cloud Platforms</th>
            <th>DIY Self-Hosting</th>
            <th>Awesomate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Executions</td>
            <td><span class="n8cmp-cross">\u2717</span> Capped (2,500\u201310,000/mo)</td>
            <td><span class="n8cmp-warn">\u26A0</span> Unlimited*</td>
            <td><span class="n8cmp-check">\u2713</span> Uncapped (flat rate)</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td><span class="n8cmp-cross">\u2717</span> Shared servers (320MB RAM)</td>
            <td><span class="n8cmp-warn">\u26A0</span> Single server, no failover</td>
            <td><span class="n8cmp-check">\u2713</span> Kubernetes cluster (HA)</td>
          </tr>
          <tr>
            <td>Data Retention</td>
            <td><span class="n8cmp-cross">\u2717</span> 7\u201330 days</td>
            <td><span class="n8cmp-warn">\u26A0</span> You manage backups</td>
            <td><span class="n8cmp-check">\u2713</span> 3x hot replicas + snapshots + PITR</td>
          </tr>
          <tr>
            <td>Customisation</td>
            <td><span class="n8cmp-cross">\u2717</span> Restricted</td>
            <td><span class="n8cmp-warn">\u26A0</span> Full (you configure)</td>
            <td><span class="n8cmp-check">\u2713</span> Full (we configure)</td>
          </tr>
          <tr>
            <td>Data Location</td>
            <td><span class="n8cmp-cross">\u2717</span> EU only (Frankfurt)</td>
            <td><span class="n8cmp-warn">\u26A0</span> You choose (you manage)</td>
            <td><span class="n8cmp-check">\u2713</span> US default + regional options</td>
          </tr>
          <tr>
            <td>Support</td>
            <td><span class="n8cmp-cross">\u2717</span> Forum / email only</td>
            <td><span class="n8cmp-cross">\u2717</span> Server support only</td>
            <td><span class="n8cmp-check">\u2713</span> Onboarding + ticketed + AI</td>
          </tr>
          <tr>
            <td>Setup Time</td>
            <td><span class="n8cmp-warn">\u26A0</span> Minutes (but limited)</td>
            <td><span class="n8cmp-cross">\u2717</span> Hours\u2013days of DevOps</td>
            <td><span class="n8cmp-check">\u2713</span> Seconds \u2014 one click</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="n8cmp-bottom">
      <p class="n8cmp-bottom-text">The bottom line: <span>the freedom of self-hosting with none of the headaches.</span></p>
    </div>
  </div>
</section>
`;

const rows = [
  { feature: 'Executions', cloud: 'Capped (2,500\u201310,000/mo)', diy: 'Unlimited*', awesomate: 'Uncapped (flat rate)', cloudIcon: 'cross', diyIcon: 'warn' },
  { feature: 'Performance', cloud: 'Shared servers (320MB RAM)', diy: 'Single server, no failover', awesomate: 'Kubernetes cluster (HA)', cloudIcon: 'cross', diyIcon: 'warn' },
  { feature: 'Data Retention', cloud: '7\u201330 days', diy: 'You manage backups', awesomate: '3x hot replicas + snapshots + PITR', cloudIcon: 'cross', diyIcon: 'warn' },
  { feature: 'Customisation', cloud: 'Restricted', diy: 'Full (you configure)', awesomate: 'Full (we configure)', cloudIcon: 'cross', diyIcon: 'warn' },
  { feature: 'Data Location', cloud: 'EU only (Frankfurt)', diy: 'You choose (you manage)', awesomate: 'US default + regional options', cloudIcon: 'cross', diyIcon: 'warn' },
  { feature: 'Support', cloud: 'Forum / email only', diy: 'Server support only', awesomate: 'Onboarding + ticketed + AI', cloudIcon: 'cross', diyIcon: 'cross' },
  { feature: 'Setup Time', cloud: 'Minutes (but limited)', diy: 'Hours\u2013days of DevOps', awesomate: 'Seconds \u2014 one click', cloudIcon: 'warn', diyIcon: 'cross' },
];

const icons = {
  check: <span className="text-emerald-500 mr-1.5">&#10003;</span>,
  warn: <span className="text-amber-500 mr-1.5">&#9888;</span>,
  cross: <span className="text-red-500 mr-1.5">&#10007;</span>,
};

export const Comparison: React.FC = () => {
  return (
    <CopyWrapper blockName="Comparison" codeToCopy={ComparisonCode}>
      <section className="py-24 lg:py-28 bg-[#f8f9fb] border-y border-brand-navy/[0.06] relative overflow-hidden">
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(233,72,77,0.04)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-14">
            <div className="text-xs font-800 text-brand-accent uppercase tracking-[0.15em] mb-4">Compare</div>
            <h2 className="text-4xl md:text-[44px] font-heading font-800 text-brand-navy leading-[1.15] tracking-tight mb-5">
              How We Compare
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto font-500">
              See why businesses are switching to Awesomate for their automation infrastructure.
            </p>
          </div>

          <div className="overflow-x-auto -mx-6 px-6" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-[13px] font-700 uppercase tracking-wider text-gray-400 border-b-2 border-brand-navy/[0.08]">Feature</th>
                  <th className="text-left py-4 px-5 text-[13px] font-700 uppercase tracking-wider text-gray-400 border-b-2 border-brand-navy/[0.08]">Cloud Platforms</th>
                  <th className="text-left py-4 px-5 text-[13px] font-700 uppercase tracking-wider text-gray-400 border-b-2 border-brand-navy/[0.08]">DIY Self-Hosting</th>
                  <th className="text-left py-4 px-5 text-[13px] font-700 uppercase tracking-wider text-brand-accent border-b-2 border-brand-accent bg-brand-accent/[0.04] rounded-t-xl">Awesomate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature}>
                    <td className="py-4 px-5 text-sm font-600 text-brand-navy border-b border-brand-navy/[0.04]">{row.feature}</td>
                    <td className="py-4 px-5 text-[15px] text-gray-600 border-b border-brand-navy/[0.04]">
                      {icons[row.cloudIcon as keyof typeof icons]}{row.cloud}
                    </td>
                    <td className="py-4 px-5 text-[15px] text-gray-600 border-b border-brand-navy/[0.04]">
                      {icons[row.diyIcon as keyof typeof icons]}{row.diy}
                    </td>
                    <td className={`py-4 px-5 text-[15px] font-600 text-brand-navy bg-brand-accent/[0.04] border-b border-brand-navy/[0.04] ${i === rows.length - 1 ? 'rounded-b-xl' : ''}`}>
                      {icons.check}{row.awesomate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12 p-6 bg-white rounded-2xl border border-brand-navy/[0.06]">
            <p className="text-lg font-700 text-brand-navy">
              The bottom line: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-orange">the freedom of self-hosting with none of the headaches.</span>
            </p>
          </div>
        </div>
      </section>
    </CopyWrapper>
  );
};
