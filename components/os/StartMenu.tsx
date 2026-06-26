"use client";

import { useOS } from "@/lib/os-store";
import { DESKTOP_ITEMS } from "@/lib/windows";
import { socials } from "@/lib/content";
import { Glyph } from "./Glyphs";

export default function StartMenu() {
  const { openWindow, setStartOpen, setShutdown } = useOS();
  const programs = DESKTOP_ITEMS.filter((i) => i.type);

  return (
    <>
      {/* Click-away catcher */}
      <div style={{ position: "fixed", inset: 0, zIndex: 9400 }} onClick={() => setStartOpen(false)} />
      <div className="start-menu fade-in">
        <div className="start-menu-rail">Aayan Atif</div>
        <div className="start-menu-items">
          {programs.map((p) => (
            <div key={p.id} className="start-item" onClick={() => openWindow(p.type!)}>
              <Glyph name={p.icon} size={20} />
              {p.label}
            </div>
          ))}
          <div className="start-divider" />
          <a className="start-item" href={socials.github} target="_blank" rel="noreferrer">
            <Glyph name="globe" size={20} />
            GitHub
          </a>
          <a className="start-item" href={socials.linkedin} target="_blank" rel="noreferrer">
            <Glyph name="globe" size={20} />
            LinkedIn
          </a>
          <div className="start-divider" />
          <div className="start-item" onClick={() => setShutdown(true)}>
            <Glyph name="computer" size={20} />
            Shut Down…
          </div>
        </div>
      </div>
    </>
  );
}
