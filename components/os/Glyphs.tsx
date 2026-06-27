import type { JSX } from "react";

/** Small retro-styled icons used on the desktop, in folders, and on the taskbar. */
const glyphs: Record<string, JSX.Element> = {
  folder: (
    <>
      <path d="M3 9h9l2 2h15v15a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1V9z" fill="#e7c84b" stroke="#7a5c00" strokeWidth="1" />
      <path d="M3 13h26v14a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1V13z" fill="#ffe27a" stroke="#7a5c00" strokeWidth="1" />
    </>
  ),
  notepad: (
    <>
      <rect x="6" y="3" width="20" height="26" fill="#fff" stroke="#000" />
      <rect x="6" y="3" width="20" height="5" fill="#1084d0" stroke="#000" />
      <path d="M9 13h14M9 17h14M9 21h10" stroke="#3a3aff" strokeWidth="1.4" />
    </>
  ),
  controls: (
    <>
      <rect x="4" y="5" width="24" height="22" rx="1" fill="#c9c9c9" stroke="#000" />
      <path d="M8 11h16M8 16h16M8 21h16" stroke="#000" strokeWidth="1" />
      <rect x="10" y="9" width="4" height="4" fill="#1084d0" stroke="#000" />
      <rect x="18" y="14" width="4" height="4" fill="#008000" stroke="#000" />
      <rect x="13" y="19" width="4" height="4" fill="#c00" stroke="#000" />
    </>
  ),
  briefcase: (
    <>
      <path d="M11 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" fill="none" stroke="#000" strokeWidth="1.6" />
      <rect x="4" y="9" width="24" height="17" rx="1" fill="#c98a3a" stroke="#000" />
      <rect x="4" y="15" width="24" height="3" fill="#9c6a26" stroke="#000" />
      <rect x="14" y="14" width="4" height="5" fill="#ffe27a" stroke="#000" />
    </>
  ),
  pdf: (
    <>
      <path d="M7 3h13l5 5v21H7z" fill="#fff" stroke="#000" />
      <path d="M20 3v5h5" fill="#ddd" stroke="#000" />
      <rect x="5" y="17" width="22" height="9" rx="1" fill="#c00" />
      <text x="16" y="24" fontSize="7" fill="#fff" textAnchor="middle" fontFamily="Arial" fontWeight="bold">
        PDF
      </text>
    </>
  ),
  mail: (
    <>
      <rect x="3" y="7" width="26" height="18" rx="1" fill="#fff" stroke="#000" />
      <path d="M3 8l13 9 13-9" fill="none" stroke="#000" strokeWidth="1.4" />
    </>
  ),
  mine: (
    <>
      <circle cx="16" cy="17" r="9" fill="#111" />
      <path d="M16 4v6M16 24v4M5 17h6M21 17h6M9 10l4 4M23 24l-4-4M23 10l-4 4M9 24l4-4" stroke="#111" strokeWidth="2" />
      <circle cx="13" cy="14" r="2.4" fill="#fff" />
    </>
  ),
  globe: (
    <>
      <circle cx="16" cy="16" r="12" fill="#1ea0e6" stroke="#003a5c" />
      <path d="M16 4c5 4 5 20 0 24M16 4c-5 4-5 20 0 24M4 16h24M6 10h20M6 22h20" fill="none" stroke="#fff" strokeWidth="0.9" />
    </>
  ),
  recycle: (
    <>
      <path d="M9 11h14l-1.5 16a2 2 0 0 1-2 1.8H12.5a2 2 0 0 1-2-1.8L9 11z" fill="#bdbdbd" stroke="#000" />
      <ellipse cx="16" cy="11" rx="7" ry="2.2" fill="#d8d8d8" stroke="#000" />
      <path d="M13 15l1 10M16 15v10M19 15l-1 10" stroke="#5a5a5a" strokeWidth="1" />
      <path d="M14 6h4l1 3h-6z" fill="#2faa4f" stroke="#000" />
    </>
  ),
  computer: (
    <>
      <rect x="5" y="5" width="22" height="16" rx="1" fill="#c9c9c9" stroke="#000" />
      <rect x="7" y="7" width="18" height="12" fill="#1ea0e6" />
      <rect x="9" y="22" width="14" height="5" fill="#c9c9c9" stroke="#000" />
      <rect x="3" y="27" width="26" height="3" fill="#9a9a9a" stroke="#000" />
    </>
  ),
  project: (
    <>
      <rect x="5" y="5" width="22" height="22" rx="1" fill="#fff" stroke="#000" />
      <rect x="5" y="5" width="22" height="5" fill="#1084d0" stroke="#000" />
      <path d="M11 16l-3 3 3 3M21 16l3 3-3 3M17 14l-3 10" stroke="#008000" strokeWidth="1.6" fill="none" />
    </>
  ),
  info: (
    <>
      <circle cx="16" cy="16" r="12" fill="#fff" stroke="#000" />
      <circle cx="16" cy="16" r="12" fill="none" stroke="#1084d0" strokeWidth="2" />
      <circle cx="16" cy="10" r="1.8" fill="#1084d0" />
      <rect x="14.4" y="13" width="3.2" height="10" fill="#1084d0" />
    </>
  ),
  cert: (
    <>
      <rect x="6" y="3" width="20" height="26" rx="1" fill="#fff" stroke="#000" />
      <path d="M10 9h12M10 13h12M10 17h7" stroke="#9a9a9a" strokeWidth="1.2" />
      <path d="M18 24l-1.5 5 3.5-2 3.5 2-1.5-5" fill="#c0392b" stroke="#7a1f17" strokeWidth="0.8" />
      <circle cx="20" cy="21" r="5" fill="#ffd23f" stroke="#a8791a" />
      <circle cx="20" cy="21" r="2.2" fill="#fff3c4" stroke="#a8791a" strokeWidth="0.8" />
    </>
  ),
};

/** The wavy 4-pane Windows flag, used on the Start button and boot screen. */
export function WindowsLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 7l11-2v11H4z" fill="#ff3b30" />
      <path d="M16 4.8L29 3v13H16z" fill="#34c759" />
      <path d="M4 17h11v10L4 25z" fill="#0a84ff" />
      <path d="M16 17h13v12l-13-2z" fill="#ffcc00" />
    </svg>
  );
}

export function Glyph({ name, size = 32, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {glyphs[name] ?? glyphs.notepad}
    </svg>
  );
}
