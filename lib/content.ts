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
  taglines: ["Full Stack Developer", "Problem Solver", "CS Student", "Builder"],
  location: "Waterloo & Milton, Ontario 🍁",
  // One or two sentences. No jargon. Who you are, plainly.
  blurb:
    "Full stack dev, CS student at Laurier, and a sucker for a good hackathon deadline. I build web apps that are fast, useful, and actually do something. Recent ones: an AI accessibility auditor, a self healing infra dashboard, and a charity video app.",
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
  { value: "🍁 Canada", label: "Based in Canada, open to remote" },
  { value: "Full-stack", label: "React, Next.js, Node, FastAPI" },
  { value: "Open", label: "Open to internships" },
  { value: "2028", label: "B.Sc Computer Science, Laurier" },
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
      "Paste any live URL and get a full accessibility audit. It runs five Gemini powered checks in parallel over the page's DOM, screenshots, and layout, then maps every issue onto an interactive 3D human body, one system per disability type. When you're done it exports a clean Markdown or PDF report with the exact CSS selectors and fixes, ready to drop straight into a pull request.",
    tags: ["Next.js", "Three.js", "Gemini AI", "Playwright", "WCAG"],
    repo: "https://github.com/ebad66/a11y.sense",
    highlight: true,
    accent: "#22d3ee",
  },
  {
    title: "Ts-Rx",
    tagline: "Self-healing dashboard for Tailscale networks · HackCanada 2026",
    description:
      "An AI monitoring agent that watches up to 100 self hosted Tailscale services. It pairs Datadog telemetry with Gemini diagnostics to catch failures and suggest targeted fixes, all surfaced in a custom Doctor tab built right into the Tailscale UI. Every fix it generates gets saved to a service specific knowledge base, so repeat incidents get solved faster over time.",
    tags: ["Python", "FastAPI", "React", "Gemini AI", "Datadog"],
    repo: "https://github.com/Shay350/Ts-Rx",
    accent: "#a78bfa",
  },
  {
    title: "Scroll4Good",
    tagline: "Charity impact platform · UmmahHacks 2026",
    description:
      "A TikTok style platform for charitable giving. Verified people in need post short video requests, and donors give to them directly through Stripe. It drove 15+ donations across 20+ early users, kept safe with JWT auth, role based access, rate limiting, and a Gemini risk scoring pipeline. It even has a seed to forest system that grows as you give.",
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
    when: "Sep 2023 to May 2028",
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
    when: "Oct 2022 to Jul 2023",
    title: "Robotics Team Member",
    org: "CKSS Robotics Club",
    where: "Milton, ON",
    kind: "leadership",
    points: [
      "Built a competition robot with a 20-person team for the FIRST Robotics Competition, working across design, programming, and assembly.",
      "Diagnosed and fixed 30+ technical issues through design and testing to keep it running reliably under pressure.",
      "Took 1st place at the Ontario Regional FIRST Robotics Competition.",
    ],
  },
];

/** Light, human details for the footer / about. */
export const extras = {
  interests: ["Photography", "Tennis", "Hardware", "Soccer"],
};
