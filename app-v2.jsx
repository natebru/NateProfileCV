/* global React, ReactDOM */
const { useState, useEffect } = React;

// === Icons ===
const Icon = {
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6 0h3.8v1.5h.06c.53-1 1.83-2 3.77-2C20.7 9 21 11 21 13.5v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3v6.3H8.5v-11z"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7z"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 19c.6-3 3-5 6-5s5.4 2 6 5M14 19c.5-2.4 2-4 4-4s3 1.2 3 4"/></svg>,
  cog: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>,
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>,
  pulse: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M3 12h4l2-6 3 12 3-9 2 3h4"/></svg>,
  badge: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="9" r="5"/><path d="m8 13-2 8 6-3 6 3-2-8"/></svg>,
  cal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>,
  brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10v2a3 3 0 0 0 2 2.8V18a3 3 0 0 0 6 0V4a0 0 0 0 0 0 0c-1.5 0-3 0-3 0z"/><path d="M15 4a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 2.5v2a3 3 0 0 1-2 2.8V18a3 3 0 0 1-6 0"/></svg>,
};

// === DATA ===
const BRINGS = [
  {
    icon: Icon.shield,
    title: "Cryptographic-trust depth, not just talking points.",
    body: "Twenty years inside the Microsoft trust boundary — PKI, code-signing HSMs, manufacturing crypto, and confidential compute. I know where attestation breaks before it does.",
  },
  {
    icon: Icon.building,
    title: "Hyperscale infrastructure delivery.",
    body: "Architected and shipped a 9-SCID enterprise datacenter — HA networking, multi-tenant storage, and cryptographic isolation — through to stable production.",
  },
  {
    icon: Icon.users,
    title: "Global engineering leadership.",
    body: "Lead 12 engineers across three regions. Built on Model, Coach, Care — psychologically safe, accountable, and willing to ship the hard thing.",
  },
  {
    icon: Icon.spark,
    title: "AI-augmented engineering, in practice.",
    body: "Drive team adoption of GitHub Copilot, agents, and CLI automation — measured velocity gains, not vendor demos.",
  },
  {
    icon: Icon.pulse,
    title: "Incident command with zero repeats.",
    body: "Six Sev 2 incidents through IcM rotations — zero repeat occurrences. Pre-mortems and SDL drive risk into the backlog before it becomes news.",
  },
];

const IMPACT = [
  {
    num: "9-SCID",
    desc: "Enterprise datacenter architected and delivered with HA networking, multi-tenant storage, and crypto isolation.",
  },
  {
    num: "40 TB",
    desc: "SharePoint migration to O365 — 200K sites, 500K sub-sites moved to the cloud.",
  },
  {
    num: "0 repeats",
    desc: "Across 6 Sev 2 incidents under IcM command — driven by rigorous post-mortem execution.",
  },
];

const STATS = [
  { num: "20+", unit: "yrs", label: "Engineering across security, infra, and reliability.", icon: Icon.cal },
  { num: "19y", unit: "11m", label: "Tenure inside Microsoft, six progressive roles.", icon: Icon.building },
  { num: "12", unit: "", label: "Engineers led globally across three regions.", icon: Icon.users },
  { num: "100%", unit: "", label: "WebTrust compliance held across Network / Storage.", icon: Icon.shield },
];

const STACK_CHIPS = [
  "Azure", "PKI / HSM", "Confidential Compute",
  "Zero Trust", "GitHub Copilot", "C# / .NET",
  "PowerShell", "Python", "Kusto",
  "ADO CI/CD", "SIEM", "BCDR",
];

const ROLES = [
  {
    id: "r1",
    years: "2024 — Now",
    span: "Current",
    title: "Principal Security Software Manager",
    company: "Microsoft  ·  PKI / Licensing / Manufacturing / Security",
    summary: "Leads global strategy for security, networking and storage infrastructure powering enterprise-scale services.",
    bullets: [
      "Architected a hybrid Zero Trust licensing service using Confidential Compute and Managed HSMs for hardware-rooted trust and host attestation.",
      "Directed architecture and deployment of a 9-SCID Enterprise Datacenter with HA networking, multi-tenant storage, and cryptographic isolation.",
      "Commanded IcM rotations through 6 critical Sev 2 incidents with zero repeat occurrences.",
      "Achieved 100% WebTrust compliance across Network / Storage through continuous SDL, patching, and threat modeling.",
      "Drove team adoption of GitHub Copilot, CLI tooling, and autonomous agents — measurable velocity gains.",
    ],
    stack: ["Zero Trust", "Confidential Compute", "Managed HSM", "GitHub Copilot", "ADO", "Kusto"],
  },
  {
    id: "r2",
    years: "2020 — 2024",
    span: "3 yr 3 mo",
    title: "Principal Security Software Engineer",
    company: "Microsoft  ·  PKI / Licensing / Manufacturing / Security",
    summary: "Technical SRE & security lead for the hardware supply chain — monitoring, patching, T&V, SIEM, secrets, code-signing PKI on HSMs.",
    bullets: [
      "Architected security baselines for High Valued Assets (HSMs) across Windows and Azure ecosystems.",
      "Built automation framework centralizing scripts and modularizing runbooks — major team-wide time savings.",
      "Designed secure Azure DevOps CI/CD pipelines, reducing manual deployment toil.",
      "Led the build of a fully automated Azure Update Management patching system — minimized time-to-patch.",
      "Designed JIT secrets management for Windows and Linux admins, removing persistent administrators.",
      "Hackathon project lead — ADO PR cleanup bot and quantum RNG tool.",
    ],
    stack: ["Azure IaaS/PaaS", "Azure DevOps", "PowerShell", "HSM", "SIEM", "JIT"],
  },
  {
    id: "r3",
    years: "2013 — 2020",
    span: "7 yr 6 mo",
    title: "Senior Security Service Engineer",
    company: "Microsoft  ·  WDG Security",
    summary: "SRE & security lead for High Valued Assets — monitoring, patching, T&V, SIEM, secrets, code-signing PKI, and provisioning.",
    bullets: [
      "Architected security solutions for Microsoft manufacturing products.",
      "Cloud architect & automation specialist — Azure (IaaS/PaaS), Azure Automation.",
      "Built automation framework centralizing scripts and modularizing runbooks for the broader org.",
      "Led the fully automated patching effort that minimized time-to-patch and increased compliance.",
      "Designed the JIT secrets management solution that removed persistent administrators.",
      "Redefined manufacturing asset security from on-premises to a cloud model.",
    ],
    stack: ["Azure", "PowerShell", "HSM", "Code Signing", "PKI"],
  },
  {
    id: "r4",
    years: "2008 — 2013",
    span: "4 yr 8 mo",
    title: "Senior IT Service Engineer",
    company: "Microsoft  ·  SharePoint Infrastructure",
    summary: "SharePoint engineer & architect for high-traffic Microsoft internal sites — HA, provisioning, and BCDR strategy.",
    bullets: [
      "Led a SharePoint Operations team of 10 vendors, including a 50+ resource RFP contract.",
      "Led migration of Microsoft IT internal SharePoint to O365 — 40 TB, 200K sites, 500K sub-sites.",
      "Wrote an automated SharePoint deployment system — setup time cut from a week to 1–2 hours.",
      "Speaker at Microsoft TechEd and TechReady events.",
    ],
    stack: ["SharePoint", "O365", "BCDR", "PowerShell"],
  },
  {
    id: "r5",
    years: "2006 — 2008",
    span: "2 yr 5 mo",
    title: "Operations Engineer",
    company: "Microsoft  ·  Office.com / OfficeLive",
    summary: "Production reliability for office.microsoft.com, officelive.com, and Watson infrastructure.",
    bullets: [
      "Drove incident improvements, postmortems, and 24×7 on-call rotation.",
      "Developed a C# / SQL telemetry system for Windows log data — used across troubleshooting, reliability, and capacity.",
      "Wrote custom SCOM management packs that decreased incident durations.",
    ],
    stack: ["C#", "SQL", "SCOM", "Windows Server"],
  },
  {
    id: "r6",
    years: "2003 — 2006",
    span: "3 yr 4 mo",
    title: "Distributed Systems Engineer",
    company: "Catalyst Client Services  ·  University of Washington",
    summary: "Managed 200+ client workstations and developed remote deployment and patching solutions.",
    bullets: [
      "Managed 200+ client workstations across UW computing labs and offices.",
      "Developed remote deployment and patching solution to standardize and reduce manual effort.",
    ],
    stack: ["Windows", "Imaging", "Scripting"],
  },
];

const WHY = [
  {
    icon: Icon.lock,
    title: "Security is the floor, not the ceiling.",
    body: "I lead engineering teams where Zero Trust, HSM-rooted attestation, and WebTrust compliance are table stakes — and shipping velocity comes from automating the rest.",
  },
  {
    icon: Icon.spark,
    title: "AI-augmented, by default.",
    body: "Driving real Copilot and agent adoption inside Microsoft. I evaluate what actually moves velocity vs. what looks good in a demo deck.",
  },
  {
    icon: Icon.users,
    title: "Globally distributed, locally accountable.",
    body: "Twelve engineers across three regions. Model, Coach, Care isn't a poster — it's how I run reviews, postmortems, and 1:1s.",
  },
];

const FAQ = [
  {
    q: "What kind of role am I open to?",
    a: <><p>Principal IC, Principal Manager, or Engineering Director roles in <strong>security, infrastructure, platform, or SRE</strong> organizations. Strong preference for teams where cryptographic systems, datacenter infrastructure, or AI-augmented engineering is core to the strategy.</p></>,
  },
  {
    q: "Am I open to relocation?",
    a: <><p>I'm based in the <strong>Greater Seattle Area</strong> and currently prefer remote or Pacific-Northwest hybrid roles. Open to selective travel — and to conversations about the right opportunity.</p></>,
  },
  {
    q: "Where am I deepest, technically?",
    a: <><p>PKI, HSMs, and code-signing infrastructure. Hardware-rooted trust. Confidential Compute and host attestation. Datacenter delivery — networking, multi-tenant storage, BCDR. And the SRE / IcM disciplines around all of it.</p></>,
  },
  {
    q: "Do I still ship code, or only lead?",
    a: <><p>Both. I drive PowerShell, C#, and Python automation directly when the team needs it, and I prototype the AI-augmented patterns my team then productizes. The most senior leaders I trust still read PRs — so do I.</p></>,
  },
  {
    q: "What's my leadership style?",
    a: <><p><strong>Model, Coach, Care.</strong> I run psychologically safe but highly accountable teams. I expect engineers to own outcomes — and I own clearing the path. Career coaching for new staff is a personal commitment, not an HR mandate.</p></>,
  },
  {
    q: "How do I think about incident response?",
    a: <><p>Six Sev 2 incidents through IcM rotation, <strong>zero repeats</strong>. The work happens before the incident: pre-mortems on a 6-month cycle, post-mortems with real actions, and observability that surfaces resiliency risk into the backlog.</p></>,
  },
];

// === Components ===

function TopBar({ active }) {
  const items = [
    { id: "hero", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "why", label: "Why hire me" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <header className="topbar" data-screen-label="Top bar">
      <a href="#hero" className="brand">
        <div className="glyph">N</div>
        <div>
          Nate Bruneau
          <div style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 500, letterSpacing: 0.4 }}>
            Principal Engineering · Microsoft
          </div>
        </div>
      </a>
      <nav>
        {items.map(i => (
          <a key={i.id} href={`#${i.id}`} className={active === i.id ? "active" : ""}>{i.label}</a>
        ))}
      </nav>
      <a className="cta" href="https://www.linkedin.com/in/natebru" target="_blank" rel="noopener">Connect on LinkedIn ↗</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero" data-screen-label="Hero">
      <div className="hero-left">

        <div className="impact-block">
          <h4>Selected impact</h4>
          {IMPACT.map(it => (
            <div className="impact" key={it.num}>
              <div className="num">{it.num}</div>
              <div className="desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-mid">
        <h1>Nate Bruneau</h1>
        <div className="tagline">
          Principal Engineering Manager <span className="sep">•</span> PKI &amp; HSM <span className="sep">•</span> Datacenter <span className="sep">•</span> CISSP
        </div>
        <div className="contact-row">
          <a href="https://www.linkedin.com/in/natebru" target="_blank" rel="noopener">
            <span className="icn">{Icon.linkedin}</span>linkedin.com/in/natebru
          </a>
        </div>
        <p className="bio">
          I'm a CISSP-certified principal engineering leader with <strong>20+ years</strong> building cryptographic, datacenter, and PKI systems for one of the world's largest enterprise platforms. I currently lead a global team driving the strategic roadmap for security, networking, and storage infrastructure — and I'm exploring my next chapter at <strong>the intersection of trust, hyperscale infrastructure, and AI-augmented engineering</strong>.
        </p>

        <div className="section-label">What I bring to any engineering org<span className="rule"></span></div>
        <div className="brings">
          {BRINGS.map((b, i) => (
            <div className="bring" key={i}>
              <div className="icon-bubble">{b.icon}</div>
              <p><strong>{b.title}</strong> {b.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        {STATS.map((s, i) => (
          <div className="stat-card" key={i}>
            <div>
              <div className="stat-num">{s.num}{s.unit && <span className="unit">{s.unit}</span>}</div>
              <div className="label">{s.label}</div>
            </div>
            <div className="icon-bubble">{s.icon}</div>
          </div>
        ))}
        <div className="stack-card">
          <h4>Stacks I work in</h4>
          <div className="stack-grid">
            {STACK_CHIPS.map(c => <div className="stack-chip" key={c}>{c}</div>)}
          </div>
        </div>
        <div className="also-card">
          <div className="icon-bubble">{Icon.badge}</div>
          <div>
            <h4>Credentials</h4>
            <p>CISSP · Advanced Infrastructure Hacking (2019) · Ethical Hacking: System Hacking · B.S. EE, University of Washington.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyHireMe() {
  return (
    <section id="why" className="section" data-screen-label="Why hire me">
      <div className="section-label">Why hire me<span className="rule"></span></div>
      <h2>Engineering leadership at the <span className="accent">intersection of trust, scale, and AI.</span></h2>
      <div className="why-grid">
        {WHY.map((w, i) => (
          <div className="why-card" key={i}>
            <div className="icon-bubble">{w.icon}</div>
            <div>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const [openId, setOpenId] = useState(ROLES[0].id);
  return (
    <section id="experience" className="section" data-screen-label="Experience">
      <div className="section-label">Experience<span className="rule"></span></div>
      <h2>Six roles, <span className="accent">one company,</span> two decades of compounding depth.</h2>
      <div className="xp-headers">
        <div>Years</div>
        <div>Role</div>
        <div>Focus</div>
        <div style={{ textAlign: "right" }}>Detail</div>
      </div>
      {ROLES.map(r => {
        const open = r.id === openId;
        return (
          <div
            key={r.id}
            className={"role" + (open ? " open" : "")}
            onClick={() => setOpenId(open ? null : r.id)}
          >
            <div className="yr">{r.years}<span className="span">{r.span}</span></div>
            <div className="title">
              {r.title}
              <span className="co">{r.company}</span>
            </div>
            <p className="summary">{r.summary}</p>
            <div className="chev">
              {open ? "Close" : "Open"}
              <span className="arr">→</span>
            </div>
            {open && (
              <div className="role-detail">
                <ul>
                  {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="stacks">
                  {r.stack.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="faq" className="section" data-screen-label="FAQ">
      <div className="section-label">Common questions for recruiters<span className="rule"></span></div>
      <h2>The things you'd ask first — <span className="accent">answered.</span></h2>
      <div className="faq-grid">
        {FAQ.map((f, i) => {
          const open = openIdx === i;
          return (
            <div className={"faq" + (open ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpenIdx(open ? -1 : i)}>
                <span>{f.q}</span>
                <span className="chev">▾</span>
              </button>
              {open && <div className="faq-a">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Closer() {
  const rows = [
    { lbl: "LinkedIn", val: "linkedin.com/in/natebru", href: "https://www.linkedin.com/in/natebru" },
  ];
  return (
    <section id="contact" data-screen-label="Contact">
      <div className="closer">
        <div className="closer-grid">
          <div>
            <h2>Let's build something <span className="accent">resilient.</span></h2>
            <p>Currently exploring Principal IC and Engineering Director roles where security, infrastructure depth, and AI-augmented practice converge. The fastest way to reach me is on LinkedIn.</p>
          </div>
          <div className="closer-rows">
            {rows.map(r => (
              <a className="closer-row" key={r.lbl} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                <div>
                  <div className="lbl">{r.lbl}</div>
                  <div className="val">{r.val}</div>
                </div>
                <div className="arr">↗</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div>© {new Date().getFullYear()} Nate Bruneau · Greater Seattle Area</div>
        <div>Open to Principal IC &amp; Engineering Director conversations</div>
      </footer>
    </section>
  );
}

// === Scroll spy ===
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids.join("|")]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// === Tweaks ===
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "openRoles": "open"
}/*EDITMODE-END*/;

const ACCENTS = {
  blue:   { a: "#3b8bff", b: "#5aa3ff", dim: "#1f4d99", glow: "rgba(59,139,255,0.18)" },
  cyan:   { a: "#22d3ee", b: "#67e8f9", dim: "#0e7490", glow: "rgba(34,211,238,0.18)" },
  violet: { a: "#8b5cf6", b: "#a78bfa", dim: "#5b21b6", glow: "rgba(139,92,246,0.18)" },
  green:  { a: "#34d399", b: "#6ee7b7", dim: "#065f46", glow: "rgba(52,211,153,0.18)" },
};

function applyTweaks(t) {
  const r = document.documentElement.style;
  const a = ACCENTS[t.accent] || ACCENTS.blue;
  r.setProperty("--accent", a.a);
  r.setProperty("--accent-bright", a.b);
  r.setProperty("--accent-dim", a.dim);
  r.setProperty("--accent-glow", a.glow);
}

function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent">
        <TweakColor
          label="Color"
          value={ACCENTS[t.accent].a}
          options={Object.keys(ACCENTS).map(k => ACCENTS[k].a)}
          onChange={v => {
            const key = Object.keys(ACCENTS).find(k => ACCENTS[k].a === v);
            setTweak("accent", key);
          }}
        />
      </TweakSection>
      <TweakSection label="Status banner">
        <TweakRadio
          label="Looking"
          value={t.openRoles}
          options={[{ value: "open", label: "Open" }, { value: "stealth", label: "Stealth" }]}
          onChange={v => setTweak("openRoles", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// === App ===
function App() {
  useReveal();
  const active = useActiveSection(["hero", "experience", "why", "faq"]);
  return (
    <div className="page">
      <TopBar active={active} />
      <Hero />
      <WhyHireMe />
      <Experience />
      <FAQSection />
      <Closer />
      <Tweaks />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
