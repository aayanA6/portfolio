import { socials } from "@/lib/content";

/** Window types. `project` is multi-instance; the rest are single-window. */
export type WinType =
  | "welcome"
  | "about"
  | "projects"
  | "project"
  | "skills"
  | "experience"
  | "resume"
  | "contact"
  | "minesweeper"
  | "recycle";

export type WinDef = { title: string; w: number; h: number; single?: boolean };

export const WINDOW_DEFS: Record<WinType, WinDef> = {
  welcome: { title: "Welcome.txt - Notepad", w: 470, h: 330, single: true },
  about: { title: "About Me.txt - Notepad", w: 470, h: 360, single: true },
  projects: { title: "My Projects", w: 500, h: 330, single: true },
  project: { title: "Project", w: 470, h: 400 },
  skills: { title: "Skills - Control Panel", w: 460, h: 360, single: true },
  experience: { title: "Experience", w: 540, h: 400, single: true },
  resume: { title: "Résumé - Aayan_Atif.pdf", w: 660, h: 580, single: true },
  contact: { title: "Contact", w: 390, h: 320, single: true },
  minesweeper: { title: "Minesweeper", w: 210, h: 300, single: true },
  recycle: { title: "Recycle Bin", w: 420, h: 280, single: true },
};

export type DesktopItem = {
  id: string;
  label: string;
  icon: string; // glyph key in components/os/Glyphs.tsx
  type?: WinType;
  href?: string; // external shortcut (opens a link instead of a window)
};

export const DESKTOP_ITEMS: DesktopItem[] = [
  { id: "projects", label: "My Projects", icon: "folder", type: "projects" },
  { id: "about", label: "About Me", icon: "notepad", type: "about" },
  { id: "skills", label: "Skills", icon: "controls", type: "skills" },
  { id: "experience", label: "Experience", icon: "briefcase", type: "experience" },
  { id: "resume", label: "Résumé", icon: "pdf", type: "resume" },
  { id: "contact", label: "Contact", icon: "mail", type: "contact" },
  { id: "minesweeper", label: "Minesweeper", icon: "mine", type: "minesweeper" },
  { id: "github", label: "GitHub", icon: "globe", href: socials.github },
  { id: "linkedin", label: "LinkedIn", icon: "globe", href: socials.linkedin },
  { id: "recycle", label: "Recycle Bin", icon: "recycle", type: "recycle" },
];
