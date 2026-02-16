import { useState, useEffect, useRef } from "react";

const PLANS = {
  essentials: { name: "Essentials", price: 75, yearlyPrice: 63, color: "#1a1a2e" },
  "support-plus": { name: "Support Plus", price: 150, yearlyPrice: 125, color: "#1a1a2e" },
  pro: { name: "Automations Pro", price: 370, yearlyPrice: 308, color: "#ff6b6b" },
  embedded: { name: "Embedded Team", price: 3500, yearlyPrice: 2917, color: "#e8464e" },
};

const PHASES = [
  { label: "Business Discovery", steps: [1, 2, 3] },
  { label: "Package Fit", steps: [4, 5, 6] },
  { label: "Add-Ons", steps: [7, 8, 9, 10, 11, 12, 13] },
  { label: "Business Profile", steps: [14, 15] },
  { label: "Confirmation", steps: [16] },
];

const AUTOMATION_AREAS = [
  { icon: "📧", label: "Email & Communications" },
  { icon: "📱", label: "Social Media" },
  { icon: "🤖", label: "AI Chat Agents" },
  { icon: "📊", label: "Reporting & Analytics" },
  { icon: "💰", label: "Invoicing & Payments" },
  { icon: "👥", label: "Lead Management & CRM" },
  { icon: "📝", label: "Document Processing" },
  { icon: "🔄", label: "Data Sync Between Apps" },
  { icon: "📅", label: "Scheduling & Calendars" },
  { icon: "🛒", label: "E-Commerce & Orders" },
  { icon: "🎯", label: "Marketing Campaigns" },
  { icon: "📞", label: "Customer Support" },
  { icon: "👨‍💼", label: "HR & Onboarding" },
  { icon: "🔒", label: "Compliance & Approvals" },
  { icon: "📦", label: "Inventory & Supply Chain" },
  { icon: "🧠", label: "AI Content Creation" },
  { icon: "🔗", label: "API & Integrations" },
  { icon: "💬", label: "Team Notifications" },
];

const ROLES = ["Sales", "Marketing", "Operations", "Customer Support", "Finance", "HR", "IT", "Executive", "Other"];

export default function AwesomateOnboarding() {
  const [step, setStep] = useState(1);
  const [animDir, setAnimDir] = useState("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  
  const [data, setData] = useState({
    website_url: "",
    slug: "",
    slugAvailable: null,
    logo_url: null,
    color1: "#ff6b6b",
    color2: "#1a1a2e",
    company_trading_name: "",
    company_legal_name: "",
    email: "",
    sms_number: "",
    contact_first_name: "",
    contact_last_name: "",
    country: "Australia",
    initial_plan: "pro",
    technical_level: null,
    workflow_volume: null,
    recommended_plan: null,
    final_plan: null,
    billing: "monthly",
    credential_setup: null,
    has_openrouter: null,
    openrouter_setup_clicked: false,
    ai_agent_setup: null,
    workflow_setup: null,
    local_hosting: null,
    website_hosting: null,
    detected_cms: null,
    business_summary: "",
    team_size: null,
    roles: [],
    automation_areas: [],
    websiteFetched: false,
  });

  const update = (fields) => setData((d) => ({ ...d, ...fields }));

  const goTo = (s) => {
    setAnimDir(s > step ? "forward" : "back");
    setIsAnimating(true);
    setTimeout(() => {
      setStep(s);
      setIsAnimating(false);
    }, 250);
  };

  const next = () => goTo(step + 1);
  const prev = () => goTo(step - 1);

  const currentPhase = PHASES.findIndex((p) => p.steps.includes(step));
  const totalSteps = 16;
  const progress = (step / totalSteps) * 100;

  const isPaidAddon = (plan) => plan === "essentials" || plan === "support-plus";
  const activePlan = data.final_plan || data.recommended_plan || data.initial_plan;

  const calcCosts = () => {
    const plan = PLANS[activePlan] || PLANS.pro;
    const monthly = data.billing === "yearly" ? plan.yearlyPrice : plan.price;
    let oneTime = 0;
    let addOnMonthly = 0;
    if (data.credential_setup === "assisted" && isPaidAddon(activePlan)) oneTime += 100;
    if (data.ai_agent_setup === "assisted" && isPaidAddon(activePlan)) oneTime += 100;
    if (data.workflow_setup === "assisted" && isPaidAddon(activePlan)) oneTime += 100;
    if (data.local_hosting === true) { oneTime += 1000; addOnMonthly += 50; }
    return { monthly: monthly + addOnMonthly, oneTime, planMonthly: monthly };
  };

  // Simulate website fetch
  const simulateFetch = () => {
    update({ websiteFetched: true });
    if (data.website_url) {
      const domain = data.website_url.replace(/https?:\/\//, "").replace(/www\./, "").split("/")[0].split(".")[0];
      const name = domain.charAt(0).toUpperCase() + domain.slice(1);
      update({
        company_trading_name: name + " Co",
        email: "hello@" + domain + ".com",
        slug: domain.toLowerCase(),
        slugAvailable: true,
        color1: "#ff6b6b",
        color2: "#1a1a2e",
        business_summary: `${name} Co is a business that provides professional services. Based on their website, they appear to offer solutions to their customers with a focus on quality and reliability.`,
        websiteFetched: true,
      });
    }
  };

  // Recommend plan based on answers
  useEffect(() => {
    if (data.technical_level && data.workflow_volume) {
      let rec = "essentials";
      if (data.technical_level === "full-service") rec = "pro";
      else if (data.technical_level === "some-help") rec = "support-plus";
      if (data.workflow_volume === "full-engine") rec = data.technical_level === "full-service" ? "embedded" : "pro";
      else if (data.workflow_volume === "growing" && rec === "essentials") rec = "support-plus";
      update({ recommended_plan: rec, final_plan: rec });
    }
  }, [data.technical_level, data.workflow_volume]);

  const VideoPlaceholder = ({ title, duration }) => (
    <div style={{
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)",
      borderRadius: 16, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", minHeight: 260,
      position: "relative", overflow: "hidden", border: "1px solid rgba(255,107,107,0.15)",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,107,107,0.3) 10px, rgba(255,107,107,0.3) 11px)",
      }} />
      <div style={{
        width: 56, height: 56, borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, #ff6b6b, #e8464e)",
        boxShadow: "0 0 30px rgba(255,107,107,0.3)", cursor: "pointer", marginBottom: 16,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="8,5 20,12 8,19" /></svg>
      </div>
      <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, opacity: 0.9, letterSpacing: "0.02em" }}>{title}</span>
      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4, fontFamily: "monospace" }}>{duration}</span>
      <div style={{
        position: "absolute", bottom: 12, left: 16, right: 16, height: 3,
        background: "rgba(255,255,255,0.1)", borderRadius: 2,
      }}>
        <div style={{ width: "35%", height: "100%", background: "linear-gradient(90deg, #ff6b6b, #e8464e)", borderRadius: 2 }} />
      </div>
    </div>
  );

  const SplitLayout = ({ video, children }) => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
      <div>{video}</div>
      <div>{children}</div>
    </div>
  );

  const Card = ({ selected, onClick, children, accent }) => (
    <div onClick={onClick} style={{
      background: selected ? "linear-gradient(135deg, rgba(255,107,107,0.08), rgba(232,70,78,0.04))" : "#fff",
      border: selected ? "2px solid #ff6b6b" : "2px solid #e5e7eb",
      borderRadius: 14, padding: "20px 22px", cursor: "pointer",
      transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
      transform: selected ? "scale(1.01)" : "scale(1)",
      boxShadow: selected ? "0 4px 20px rgba(255,107,107,0.15)" : "0 1px 3px rgba(0,0,0,0.06)",
    }}>
      {children}
      {selected && (
        <div style={{
          position: "absolute", top: 12, right: 12, width: 24, height: 24, borderRadius: "50%",
          background: "linear-gradient(135deg, #ff6b6b, #e8464e)", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20,6 9,17 4,12" /></svg>
        </div>
      )}
    </div>
  );

  const SelectionCard = ({ selected, onClick, emoji, title, subtitle, badge }) => (
    <div onClick={onClick} style={{
      background: selected ? "linear-gradient(135deg, rgba(255,107,107,0.06), rgba(232,70,78,0.03))" : "#fff",
      border: selected ? "2px solid #ff6b6b" : "2px solid #eef0f2",
      borderRadius: 16, padding: 24, cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      transform: selected ? "translateY(-2px)" : "translateY(0)",
      boxShadow: selected ? "0 8px 25px rgba(255,107,107,0.12)" : "0 1px 4px rgba(0,0,0,0.04)",
      position: "relative", overflow: "hidden",
    }}>
      {badge && (
        <span style={{
          position: "absolute", top: 12, right: 12, background: badge === "FREE" ? "#22c55e" : "#ff6b6b",
          color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
          letterSpacing: "0.05em",
        }}>{badge}</span>
      )}
      <div style={{ fontSize: 28, marginBottom: 10 }}>{emoji}</div>
      <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 16, marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>{title}</div>
      <div style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>{subtitle}</div>
    </div>
  );

  const Btn = ({ children, onClick, variant = "primary", disabled, style: s = {} }) => (
    <button onClick={onClick} disabled={disabled} style={{
      padding: variant === "sm" ? "10px 20px" : "14px 32px",
      borderRadius: 12,
      border: variant === "ghost" ? "2px solid #e5e7eb" : "none",
      background: variant === "primary" ? (disabled ? "#ccc" : "linear-gradient(135deg, #ff6b6b, #e8464e)") : variant === "ghost" ? "transparent" : "#1a1a2e",
      color: variant === "ghost" ? "#1a1a2e" : "#fff",
      fontWeight: 700, fontSize: variant === "sm" ? 13 : 15, cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif",
      letterSpacing: "0.01em", ...s,
    }}>{children}</button>
  );

  const Input = ({ label, value, onChange, type = "text", placeholder, ...props }) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: "100%", padding: "12px 16px", borderRadius: 10, border: "2px solid #eef0f2",
          fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: "none", transition: "border 0.2s",
          background: "#fafbfc", boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#ff6b6b")}
        onBlur={(e) => (e.target.style.borderColor = "#eef0f2")}
        {...props}
      />
    </div>
  );

  const StepHeading = ({ title, subtitle }) => (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a2e", margin: 0, lineHeight: 1.2, fontFamily: "'Outfit', sans-serif" }}>{title}</h2>
      {subtitle && <p style={{ color: "#6b7280", fontSize: 15, marginTop: 8, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{subtitle}</p>}
    </div>
  );

  // ─── STEP RENDERERS ───────────────────────────────

  const renderStep1 = () => (
    <SplitLayout video={<VideoPlaceholder title="Welcome to Awesomate" duration="0:15" />}>
      <StepHeading title="Let's start with your website" subtitle="We'll use this to auto-fill your business details so you don't have to type everything out." />
      <Input label="Website URL" value={data.website_url} onChange={(v) => update({ website_url: v })} placeholder="https://yourbusiness.com" />
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Btn onClick={() => { simulateFetch(); next(); }}>Fetch My Details →</Btn>
      </div>
      <button onClick={() => { update({ websiteFetched: false }); next(); }} style={{
        background: "none", border: "none", color: "#ff6b6b", cursor: "pointer",
        marginTop: 16, fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
        textDecoration: "underline", textUnderlineOffset: 3,
      }}>I don't have a website yet</button>
    </SplitLayout>
  );

  const renderStep2 = () => (
    <>
      <StepHeading
        title={data.websiteFetched ? "We found these details — look right?" : "Tell us about your business"}
        subtitle={data.websiteFetched ? "Everything's editable if something's off." : "Fill in your basic business details below."}
      />
      {data.websiteFetched && (
        <div style={{
          display: "flex", gap: 16, alignItems: "center", padding: 16,
          background: "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(34,197,94,0.02))",
          borderRadius: 12, border: "1px solid rgba(34,197,94,0.2)", marginBottom: 24,
        }}>
          <span style={{ fontSize: 20 }}>✅</span>
          <span style={{ color: "#166534", fontSize: 14, fontWeight: 600 }}>Auto-filled from your website</span>
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
        <div style={{ display: "flex", gap: 12, gridColumn: "1 / -1", marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 10, background: data.color1, border: "2px solid #eef0f2" }} />
          <div style={{ width: 48, height: 48, borderRadius: 10, background: data.color2, border: "2px solid #eef0f2" }} />
          <span style={{ alignSelf: "center", fontSize: 12, color: "#6b7280" }}>Brand colours (click to edit)</span>
        </div>
        <Input label="Company Trading Name" value={data.company_trading_name} onChange={(v) => update({ company_trading_name: v })} placeholder="Acme Corp" />
        <Input label="Company Legal Name" value={data.company_legal_name} onChange={(v) => update({ company_legal_name: v })} placeholder="Acme Corp Pty Ltd (optional)" />
        <Input label="Contact First Name" value={data.contact_first_name} onChange={(v) => update({ contact_first_name: v })} placeholder="Jane" />
        <Input label="Contact Last Name" value={data.contact_last_name} onChange={(v) => update({ contact_last_name: v })} placeholder="Smith" />
        <Input label="Email Address" value={data.email} onChange={(v) => update({ email: v })} placeholder="jane@acmecorp.com" type="email" />
        <Input label="SMS / Mobile Number" value={data.sms_number} onChange={(v) => update({ sms_number: v })} placeholder="+61 400 000 000" type="tel" />
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next}>Continue →</Btn>
      </div>
    </>
  );

  const renderStep3 = () => (
    <SplitLayout video={<VideoPlaceholder title="Your Workspace URL" duration="0:12" />}>
      <StepHeading title="Pick your workspace URL" subtitle="This is where you'll access your n8n instance." />
      <div style={{
        background: "#0f0f23", borderRadius: 14, padding: "14px 20px", marginBottom: 20,
        fontFamily: "monospace", fontSize: 16, color: "#fff", display: "flex", alignItems: "center",
        border: "1px solid rgba(255,107,107,0.2)",
      }}>
        <span style={{ color: "#ff6b6b", fontWeight: 700 }}>{data.slug || "yourname"}</span>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>.awesomate.io</span>
      </div>
      <Input label="Subdomain" value={data.slug} onChange={(v) => update({ slug: v.toLowerCase().replace(/[^a-z0-9-]/g, ""), slugAvailable: v.length > 2 ? true : null })} placeholder="yourname" />
      {data.slugAvailable === true && data.slug.length > 2 && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#22c55e", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
          <span>✓</span> This one's yours!
        </div>
      )}
      {data.slugAvailable === false && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#ef4444", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
          <span>✗</span> Already taken — try another
        </div>
      )}
      <div style={{ display: "flex", gap: 12 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={!data.slug || data.slug.length < 3}>Lock It In →</Btn>
      </div>
    </SplitLayout>
  );

  const renderStep4 = () => (
    <SplitLayout video={<VideoPlaceholder title="Your Comfort Level" duration="0:18" />}>
      <StepHeading title="How technical are you?" subtitle="No wrong answer — this helps us match you with the right support level." />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SelectionCard selected={data.technical_level === "self-sufficient"} onClick={() => update({ technical_level: "self-sufficient" })}
          emoji="🛠️" title="I've Got This" subtitle="I'm technical (or have a tech team) and comfortable managing n8n myself." />
        <SelectionCard selected={data.technical_level === "some-help"} onClick={() => update({ technical_level: "some-help" })}
          emoji="🤝" title="Some Help Please" subtitle="I can handle most things but want expert backup when I get stuck." />
        <SelectionCard selected={data.technical_level === "full-service"} onClick={() => update({ technical_level: "full-service" })}
          emoji="✨" title="Handle It For Me" subtitle="I'm not technical and want the Awesomate team to manage everything." />
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={!data.technical_level}>Continue →</Btn>
      </div>
    </SplitLayout>
  );

  const renderStep5 = () => (
    <>
      <StepHeading title="How many automations are you thinking?" subtitle="Give us a rough idea so we can size your plan right." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <SelectionCard selected={data.workflow_volume === "starter"} onClick={() => update({ workflow_volume: "starter" })}
          emoji="🌱" title="Just Getting Started" subtitle="1–3 simple workflows to begin with." />
        <SelectionCard selected={data.workflow_volume === "growing"} onClick={() => update({ workflow_volume: "growing" })}
          emoji="🚀" title="Growing Fast" subtitle="5–10 workflows, some complex logic." />
        <SelectionCard selected={data.workflow_volume === "full-engine"} onClick={() => update({ workflow_volume: "full-engine" })}
          emoji="⚡" title="Full Automation Engine" subtitle="10+ workflows, AI agents, multi-step." />
        <SelectionCard selected={data.workflow_volume === "unsure"} onClick={() => update({ workflow_volume: "unsure" })}
          emoji="🤔" title="I'm Not Sure Yet" subtitle="I need some guidance on what's possible." />
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={!data.workflow_volume}>See My Recommendation →</Btn>
      </div>
    </>
  );

  const renderStep6 = () => {
    const rec = PLANS[data.recommended_plan];
    const initial = PLANS[data.initial_plan];
    const isDifferent = data.recommended_plan !== data.initial_plan;
    return (
      <>
        <StepHeading title="Your Recommended Plan" />
        <div style={{
          background: "linear-gradient(135deg, rgba(255,107,107,0.06), rgba(232,70,78,0.02))",
          border: "2px solid #ff6b6b", borderRadius: 20, padding: 32, marginBottom: 20, position: "relative",
        }}>
          <div style={{
            position: "absolute", top: -12, left: 24, background: "linear-gradient(135deg, #ff6b6b, #e8464e)",
            color: "#fff", fontWeight: 700, fontSize: 11, padding: "4px 14px", borderRadius: 8,
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>RECOMMENDED FOR YOU</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", margin: 0, fontFamily: "'Outfit', sans-serif" }}>{rec?.name}</h3>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#ff6b6b", margin: "8px 0", fontFamily: "'Outfit', sans-serif" }}>
            AU${rec?.price}<span style={{ fontSize: 16, color: "#6b7280", fontWeight: 500 }}>/mo</span>
          </div>
          {isDifferent && (
            <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: "12px 0 0" }}>
              You originally selected <strong>{initial?.name}</strong> — based on your answers, we think <strong>{rec?.name}</strong> is a better fit for your needs.
            </p>
          )}
        </div>
        {isDifferent && (
          <button onClick={() => update({ final_plan: data.initial_plan })} style={{
            background: "none", border: "none", color: "#6b7280", cursor: "pointer",
            fontSize: 13, textDecoration: "underline", marginBottom: 16, fontFamily: "'DM Sans', sans-serif",
          }}>Keep my original choice ({initial?.name}) instead</button>
        )}
        <div style={{ display: "flex", gap: 12 }}>
          <Btn variant="ghost" onClick={prev}>← Back</Btn>
          <Btn onClick={next}>Continue with {rec?.name} →</Btn>
        </div>
      </>
    );
  };

  const AddonStep = ({ title, subtitle, videoTitle, videoDuration, selfLabel, selfSubtitle, assistedLabel, assistedSubtitle, field, freeForHigher = true }) => {
    const isFree = freeForHigher && (activePlan === "pro" || activePlan === "embedded");
    return (
      <SplitLayout video={<VideoPlaceholder title={videoTitle} duration={videoDuration} />}>
        <StepHeading title={title} subtitle={subtitle} />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <SelectionCard selected={data[field] === "self"} onClick={() => update({ [field]: "self" })}
            emoji="💪" title={selfLabel} subtitle={selfSubtitle} />
          <SelectionCard selected={data[field] === "assisted"} onClick={() => update({ [field]: "assisted" })}
            emoji="🎯" title={assistedLabel} subtitle={assistedSubtitle}
            badge={isFree ? "FREE" : "+ AU$100"} />
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <Btn variant="ghost" onClick={prev}>← Back</Btn>
          <Btn onClick={next} disabled={!data[field]}>Continue →</Btn>
        </div>
      </SplitLayout>
    );
  };

  const renderStep7 = () => (
    <AddonStep
      title="Credential Setup" subtitle="Connecting your apps to n8n can be tricky the first time. We can do it with you."
      videoTitle="Credential Setup" videoDuration="0:15"
      selfLabel="I'll set them up myself" selfSubtitle="Access our docs and knowledge base."
      assistedLabel="Book a setup session" assistedSubtitle="1-hour video call — we connect all your tools together."
      field="credential_setup" />
  );

  const renderStep8 = () => (
    <SplitLayout video={<VideoPlaceholder title="What is OpenRouter?" duration="0:20" />}>
      <StepHeading title="Do you have an OpenRouter account?"
        subtitle="OpenRouter is like a universal key for AI — it gives your n8n workflows access to ChatGPT, Claude, Gemini and more through one account. Essential for any AI-powered automation." />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SelectionCard selected={data.has_openrouter === true} onClick={() => update({ has_openrouter: true })}
          emoji="✅" title="Yes, I'm all set" subtitle="I already have an OpenRouter account." />
        <SelectionCard selected={data.has_openrouter === false} onClick={() => update({ has_openrouter: false })}
          emoji="🔑" title="No, what's that?" subtitle="I need to set one up (takes 2 minutes)." />
      </div>
      {data.has_openrouter === false && (
        <div style={{
          marginTop: 16, padding: 20, background: "#fffbeb", border: "1px solid #fbbf24",
          borderRadius: 12,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>
            <strong>Quick setup:</strong> Click below to create your free OpenRouter account in a new tab, then come back here to continue.
          </p>
          <button onClick={() => update({ openrouter_setup_clicked: true })} style={{
            marginTop: 12, padding: "10px 20px", background: "#1a1a2e", color: "#fff",
            border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: 13,
          }}>Open OpenRouter ↗</button>
        </div>
      )}
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={data.has_openrouter === null}>Continue →</Btn>
      </div>
    </SplitLayout>
  );

  const renderStep9 = () => (
    <AddonStep
      title="AI Chat Agent Templates" subtitle="Pre-built chat agents for support, lead qualification, and more — installed and configured for your business."
      videoTitle="AI Chat Agents" videoDuration="0:15"
      selfLabel="I'll explore on my own" selfSubtitle="Full access to our template library."
      assistedLabel="Set up my AI agents for me" assistedSubtitle="We install the right templates + 1-hour training session."
      field="ai_agent_setup" />
  );

  const renderStep10 = () => (
    <AddonStep
      title="Workflow Setup" subtitle="Want to see results from day one? We'll configure your first automations so they're ready to go live."
      videoTitle="Workflow Templates" videoDuration="0:15"
      selfLabel="I'll build my own" selfSubtitle="Access to 900+ community templates."
      assistedLabel="Set up my first workflows" assistedSubtitle="We configure your top-priority workflows."
      field="workflow_setup" />
  );

  const renderStep11 = () => (
    <SplitLayout video={<VideoPlaceholder title="Data Sovereignty" duration="0:15" />}>
      <StepHeading title={`Do you need hosting in ${data.country || "your country"}?`}
        subtitle="By default, your instance runs on our secure cloud. For compliance or preference, we can host locally." />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SelectionCard selected={data.local_hosting === false} onClick={() => update({ local_hosting: false })}
          emoji="☁️" title="Standard hosting is fine" subtitle="Secure cloud infrastructure — great for most businesses." />
        <SelectionCard selected={data.local_hosting === true} onClick={() => update({ local_hosting: true })}
          emoji="🏠" title={`Yes, host in ${data.country || "my country"}`} subtitle="Dedicated local instance for compliance needs." />
      </div>
      {data.local_hosting === true && (
        <div style={{
          marginTop: 16, padding: 20, background: "rgba(255,107,107,0.04)",
          border: "1px solid rgba(255,107,107,0.2)", borderRadius: 12,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: "#1a1a2e", lineHeight: 1.6 }}>
            <strong>Local hosting:</strong> AU$1,000 one-time setup + AU$50/month additional. Includes dedicated infrastructure provisioning and ongoing management.
          </p>
        </div>
      )}
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={data.local_hosting === null}>Continue →</Btn>
      </div>
    </SplitLayout>
  );

  const renderStep12 = () => (
    <>
      <StepHeading title="Want us to host your website too?" subtitle="If you're running WordPress, we can host it alongside your n8n instance at no extra cost." />
      <div style={{
        background: "linear-gradient(135deg, rgba(34,197,94,0.05), rgba(34,197,94,0.02))",
        border: "1px solid rgba(34,197,94,0.2)", borderRadius: 14, padding: 24, marginBottom: 20,
        display: "flex", alignItems: "center", gap: 16,
      }}>
        <span style={{ fontSize: 32 }}>🎁</span>
        <div>
          <div style={{ fontWeight: 700, color: "#166534", fontSize: 16 }}>No extra cost</div>
          <div style={{ color: "#6b7280", fontSize: 13 }}>WordPress sites hosted free with any plan.</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <SelectionCard selected={data.website_hosting === true} onClick={() => update({ website_hosting: true, detected_cms: "WordPress" })}
          emoji="✅" title="Yes, I'm interested!" subtitle={data.website_url ? `We'll check ${data.website_url}` : "We'll check your site's platform."} />
        <SelectionCard selected={data.website_hosting === false} onClick={() => update({ website_hosting: false })}
          emoji="⏭️" title="No thanks" subtitle="I'll keep my current hosting." />
      </div>
      {data.website_hosting === true && data.detected_cms && (
        <div style={{
          marginTop: 16, padding: 16, background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 12,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: "#166534" }}>
            ✅ <strong>Great news!</strong> Your site appears to be WordPress — we can host it for you. We'll arrange the migration after setup.
          </p>
        </div>
      )}
      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next} disabled={data.website_hosting === null}>Continue →</Btn>
      </div>
    </>
  );

  const renderStep13 = () => {
    const costs = calcCosts();
    const addons = [];
    if (data.credential_setup === "assisted" && isPaidAddon(activePlan)) addons.push({ label: "Credential setup session", cost: "AU$100" });
    if (data.ai_agent_setup === "assisted" && isPaidAddon(activePlan)) addons.push({ label: "AI agent setup session", cost: "AU$100" });
    if (data.workflow_setup === "assisted" && isPaidAddon(activePlan)) addons.push({ label: "Workflow setup session", cost: "AU$100" });
    if (data.credential_setup === "assisted" && !isPaidAddon(activePlan)) addons.push({ label: "Credential setup session", cost: "Included ✓" });
    if (data.ai_agent_setup === "assisted" && !isPaidAddon(activePlan)) addons.push({ label: "AI agent setup session", cost: "Included ✓" });
    if (data.workflow_setup === "assisted" && !isPaidAddon(activePlan)) addons.push({ label: "Workflow setup session", cost: "Included ✓" });
    if (data.local_hosting) addons.push({ label: "Local hosting setup", cost: "AU$1,000" });
    if (data.local_hosting) addons.push({ label: "Local hosting (monthly)", cost: "AU$50/mo" });
    if (data.website_hosting) addons.push({ label: "WordPress hosting", cost: "Free ✓" });

    return (
      <>
        <StepHeading title="Your Setup Summary" subtitle="Review everything before we move to the final step." />
        <div style={{
          background: "#fff", border: "2px solid #eef0f2", borderRadius: 20, overflow: "hidden",
        }}>
          <div style={{
            background: "linear-gradient(135deg, #1a1a2e, #2a2a4e)", padding: "24px 28px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>YOUR PLAN</div>
              <div style={{ color: "#fff", fontSize: 22, fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>{PLANS[activePlan]?.name}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: "#ff6b6b", fontSize: 28, fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>AU${costs.planMonthly}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>/month</div>
            </div>
          </div>

          <div style={{ padding: "20px 28px" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {["monthly", "yearly"].map((b) => (
                <button key={b} onClick={() => update({ billing: b })} style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  background: data.billing === b ? "#1a1a2e" : "#f3f4f6",
                  color: data.billing === b ? "#fff" : "#6b7280",
                  fontWeight: 700, fontSize: 13, fontFamily: "'DM Sans', sans-serif",
                }}>{b === "monthly" ? "Monthly" : "Yearly (2 mo free)"}</button>
              ))}
            </div>

            {addons.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>ADD-ONS</div>
                {addons.map((a, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                    <span style={{ fontSize: 14, color: "#1a1a2e" }}>{a.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: a.cost.includes("Included") || a.cost.includes("Free") ? "#22c55e" : "#1a1a2e" }}>{a.cost}</span>
                  </div>
                ))}
              </>
            )}

            <div style={{ marginTop: 20, padding: 16, background: "#fafbfc", borderRadius: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontWeight: 600, color: "#6b7280", fontSize: 14 }}>Monthly total</span>
                <span style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 20, fontFamily: "'Outfit', sans-serif" }}>AU${costs.monthly}/mo</span>
              </div>
              {costs.oneTime > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600, color: "#6b7280", fontSize: 14 }}>One-time costs</span>
                  <span style={{ fontWeight: 800, color: "#ff6b6b", fontSize: 20, fontFamily: "'Outfit', sans-serif" }}>AU${costs.oneTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <Btn variant="ghost" onClick={prev}>← Back</Btn>
          <Btn onClick={next}>Continue to Business Profile →</Btn>
        </div>
      </>
    );
  };

  const renderStep14 = () => (
    <SplitLayout video={<VideoPlaceholder title="About Your Business" duration="0:18" />}>
      <StepHeading title="Tell us about your business" subtitle={data.business_summary ? "We put together a summary from your website — edit anything that's off." : "A brief description helps us recommend the right automations."} />
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>BUSINESS SUMMARY</label>
        <textarea value={data.business_summary} onChange={(e) => update({ business_summary: e.target.value })}
          rows={4} placeholder="What does your business do? Who are your customers?"
          style={{
            width: "100%", padding: "12px 16px", borderRadius: 10, border: "2px solid #eef0f2",
            fontSize: 14, fontFamily: "'DM Sans', sans-serif", resize: "vertical",
            background: "#fafbfc", outline: "none", boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>TEAM SIZE</label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[{ v: "solo", l: "Just me" }, { v: "2-5", l: "2–5" }, { v: "6-20", l: "6–20" }, { v: "20+", l: "20+" }].map((o) => (
            <button key={o.v} onClick={() => update({ team_size: o.v })} style={{
              padding: "10px 20px", borderRadius: 10, border: data.team_size === o.v ? "2px solid #ff6b6b" : "2px solid #eef0f2",
              background: data.team_size === o.v ? "rgba(255,107,107,0.06)" : "#fff",
              fontWeight: 700, fontSize: 14, cursor: "pointer", color: "#1a1a2e",
              fontFamily: "'DM Sans', sans-serif",
            }}>{o.l}</button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>ROLES NEEDING AUTOMATION</label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {ROLES.map((r) => (
            <button key={r} onClick={() => update({ roles: data.roles.includes(r) ? data.roles.filter((x) => x !== r) : [...data.roles, r] })} style={{
              padding: "8px 16px", borderRadius: 8,
              border: data.roles.includes(r) ? "2px solid #ff6b6b" : "2px solid #eef0f2",
              background: data.roles.includes(r) ? "rgba(255,107,107,0.06)" : "#fff",
              fontWeight: 600, fontSize: 13, cursor: "pointer", color: "#1a1a2e",
            }}>{r}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next}>Continue →</Btn>
      </div>
    </SplitLayout>
  );

  const renderStep15 = () => (
    <>
      <StepHeading title="What areas could use some automation?" subtitle="Select all that apply — this helps us prioritise your setup and recommend the right templates." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {AUTOMATION_AREAS.map((a) => {
          const sel = data.automation_areas.includes(a.label);
          return (
            <button key={a.label} onClick={() => update({
              automation_areas: sel ? data.automation_areas.filter((x) => x !== a.label) : [...data.automation_areas, a.label],
            })} style={{
              padding: "14px 12px", borderRadius: 12, border: sel ? "2px solid #ff6b6b" : "2px solid #eef0f2",
              background: sel ? "rgba(255,107,107,0.06)" : "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s",
              transform: sel ? "scale(1.02)" : "scale(1)",
            }}>
              <span style={{ fontSize: 18 }}>{a.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#1a1a2e", textAlign: "left", lineHeight: 1.3 }}>{a.label}</span>
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <Btn variant="ghost" onClick={prev}>← Back</Btn>
        <Btn onClick={next}>Finish Setup →</Btn>
      </div>
    </>
  );

  const renderStep16 = () => {
    const costs = calcCosts();
    const needsBooking = data.credential_setup === "assisted" || data.ai_agent_setup === "assisted" || data.workflow_setup === "assisted";
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#1a1a2e", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
          {needsBooking ? "You're all set! Let's book your first session." : "Welcome to Awesomate!"}
        </h2>
        <p style={{ color: "#6b7280", fontSize: 16, marginTop: 12, lineHeight: 1.6, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          {needsBooking
            ? "Click below to choose a time that works for you. We'll send a confirmation to " + data.email + "."
            : `Your n8n instance is being provisioned at ${data.slug}.awesomate.io — you'll receive an email when it's ready (usually within the hour).`}
        </p>

        <div style={{
          background: "#fff", border: "2px solid #eef0f2", borderRadius: 16, padding: 24,
          maxWidth: 400, margin: "28px auto", textAlign: "left",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#6b7280", fontSize: 13 }}>Plan</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>{PLANS[activePlan]?.name}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#6b7280", fontSize: 13 }}>Monthly</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>AU${costs.monthly}/mo</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#6b7280", fontSize: 13 }}>Workspace</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#ff6b6b", fontFamily: "monospace" }}>{data.slug}.awesomate.io</span>
          </div>
          {costs.oneTime > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#6b7280", fontSize: 13 }}>One-time</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>AU${costs.oneTime}</span>
            </div>
          )}
        </div>

        <Btn onClick={() => {}} style={{ fontSize: 17, padding: "16px 48px" }}>
          {needsBooking ? "Book My Session →" : "Go to Dashboard →"}
        </Btn>
      </div>
    );
  };

  const stepRenderers = {
    1: renderStep1, 2: renderStep2, 3: renderStep3,
    4: renderStep4, 5: renderStep5, 6: renderStep6,
    7: renderStep7, 8: renderStep8, 9: renderStep9,
    10: renderStep10, 11: renderStep11, 12: renderStep12,
    13: renderStep13, 14: renderStep14, 15: renderStep15, 16: renderStep16,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f8f9fc 0%, #f0f1f5 100%)",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "#fff", borderBottom: "1px solid #eef0f2", padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #ff6b6b, #e8464e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, color: "#fff", fontSize: 16, fontFamily: "'Outfit', sans-serif",
          }}>A</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e", fontFamily: "'Outfit', sans-serif" }}>Awesomate</span>
          <span style={{ color: "#6b7280", fontSize: 13, marginLeft: 8 }}>n8n Hosting Setup</span>
        </div>
        <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 600 }}>
          Step {step} of {totalSteps}
        </div>
      </div>

      {/* Progress */}
      <div style={{ padding: "0 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 0 0" }}>
          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
            {PHASES.map((p, i) => (
              <div key={i} style={{
                flex: 1, height: 4, borderRadius: 2,
                background: i <= currentPhase ? "linear-gradient(90deg, #ff6b6b, #e8464e)" : "#e5e7eb",
                transition: "all 0.4s ease",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {PHASES.map((p, i) => (
              <span key={i} style={{
                fontSize: 10, fontWeight: 700, color: i <= currentPhase ? "#ff6b6b" : "#c0c4cc",
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>{p.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: 800, margin: "0 auto", padding: "32px 32px 80px",
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? (animDir === "forward" ? "translateX(30px)" : "translateX(-30px)") : "translateX(0)",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}>
        {stepRenderers[step]?.()}
      </div>
    </div>
  );
}
