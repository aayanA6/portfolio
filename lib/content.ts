/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT YOUR PORTFOLIO HERE.
 *  Everything the site shows lives in this one file. Change text, add a
 *  project, swap links — no need to touch any component.
 *  Anything marked  // TODO  is a placeholder waiting for your real value.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Aayan Atif",
  // Short, punchy role line under your name.
  role: "Full Stack Developer",
  // The rotating words in the hero (kept short).
  taglines: ["Full Stack Developer", "AI tinkerer", "CS @ Laurier", "Hackathon shipper"],
  location: "Waterloo & Milton, Ontario 🇨🇦",
  // One or two sentences. No jargon. Who you are, plainly.
  blurb:
    "I build full-stack web apps — and lately, AI-powered tools — that are fast, useful, and actually solve the problem. Computer Science student at Wilfrid Laurier who ships at hackathons: an accessibility auditor, a self-healing infra dashboard, and a charity video platform, all built under deadline.",
  email: "atif4919@mylaurier.ca",
  // Optional — set to "" to hide the phone everywhere.
  phone: "437-450-0677",
  resumeUrl: "/Aayan_Atif_Resume.pdf", // PDF lives in /public
};

export const socials = {
  github: "https://github.com/aayanA6",
  linkedin: "https://linkedin.com/in/AayanAtif",
  email: `mailto:${profile.email}`,
};

/** Quick at-a-glance stats — the things a recruiter scans for first. Keep them honest. */
export const stats = [
  { value: "🍁 Canada", label: "Based & authorized to work · remote-friendly" },
  { value: "Full-stack", label: "React · Next.js · Node · FastAPI" },
  { value: "Open", label: "Internships, co-op & freelance" },
  { value: "2027", label: "B.Sc Computer Science — Wilfrid Laurier" },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  href?: string; // live link
  repo?: string; // source link
  highlight?: boolean; // featured (bigger) card
  accent?: string; // css color for the card glow
};

export const projects: Project[] = [
  {
    title: "a11y.sense",
    tagline: "AI accessibility QA sandbox · GenAIGenesis 2026",
    description:
      "Paste any live URL and get a full WCAG audit. A Playwright + Gemini pipeline runs 5 parallel accessibility audits over the DOM, screenshots, and element coordinates — then maps every issue onto an interactive 3D human skeleton across five disability-focused body systems. One click exports a developer-ready Markdown/PDF report with CSS selectors and exact fixes.",
    tags: ["Next.js", "Three.js", "Gemini AI", "Playwright", "WCAG"],
    repo: "https://github.com/ebad66/a11y.sense",
    highlight: true,
    accent: "#22d3ee",
  },
  {
    title: "Ts-Rx",
    tagline: "Self-healing dashboard for Tailscale networks · HackCanada 2026",
    description:
      "An AI monitoring agent that watches up to 100 self-hosted Tailscale services. It pairs Datadog telemetry with Gemini diagnostics to detect failures and generate targeted fixes — surfaced through a custom 'Doctor' tab injected into the Tailscale UI. A self-improving pipeline saves each fix into service-specific knowledge bases so recurring incidents resolve faster.",
    tags: ["Python", "FastAPI", "React", "Gemini AI", "Datadog"],
    repo: "https://github.com/Shay350/Ts-Rx",
    accent: "#a78bfa",
  },
  {
    title: "Scroll4Good",
    tagline: "Charity impact platform · UmmahHacks 2026",
    description:
      "A TikTok-style short-form video platform that connects donors directly to people in need — driving 15+ completed donations across 20+ early users via Stripe. Backend hardened with JWT auth, role-based access, rate limiting, Zod validation, and a Gemini risk-scoring pipeline, plus a gamified seed-to-forest system that visualizes each donor's impact.",
    tags: ["Node.js", "Express", "MongoDB", "Stripe", "Gemini AI"],
    repo: "https://github.com/zaidsaiyed/Scroll4Good",
    accent: "#f472b6",
  },
];

/** Grouped skills, straight from the résumé. Edit freely. */
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Three.js", "Tailwind CSS", "HTML/CSS"] },
  { group: "Backend & APIs", items: ["Node.js", "Express", "FastAPI", "MongoDB", "REST APIs"] },
  { group: "AI / ML", items: ["Gemini AI", "PyTorch", "Playwright", "Machine Learning"] },
  { group: "DevOps & Cloud", items: ["Git", "Docker", "AWS", "Azure", "CI/CD"] },
];

export type TimelineItem = {
  when: string;
  title: string;
  org: string;
  where: string;
  points: string[];
  kind: "education" | "work" | "leadership";
};

export const timeline: TimelineItem[] = [
  {
    when: "Sep 2023 — May 2027",
    title: "B.Sc, Computer Science",
    org: "Wilfrid Laurier University",
    where: "Waterloo, ON",
    kind: "education",
    points: [
      "Bachelor of Science in Computer Science (in progress).",
      "Coursework: Data Structures & Algorithms I & II, Discrete Math, OOP, Microprocessors, Linear Algebra.",
    ],
  },
  {
    when: "2026",
    title: "Shipped 3 projects at 3 hackathons",
    org: "GenAIGenesis · HackCanada · UmmahHacks",
    where: "Ontario & Canada",
    kind: "leadership",
    points: [
      "Took each idea from zero to a working, demoable product under a deadline.",
      "Heavy on AI: Gemini-powered audits, diagnostics, and risk-scoring across all three builds.",
    ],
  },
  {
    when: "Jun 2024 — Present",
    title: "Customer Experience Representative",
    org: "Canadian Green Tech",
    where: "Burlington, ON",
    kind: "work",
    points: [
      "Ran residential solar feasibility analysis — converting household energy use and site constraints into PV system sizing and ROI projections using utility tariff data and shading/production models.",
      "Operated Salesforce CRM to maintain the pipeline and keep clean handoffs between sales and technical design teams.",
    ],
  },
];

/** Light, human details for the footer / about. */
export const extras = {
  interests: ["Photography", "Tennis", "Hardware", "Soccer"],
};
