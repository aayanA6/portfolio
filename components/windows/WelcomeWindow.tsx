"use client";

import { useOS } from "@/lib/os-store";
import { profile } from "@/lib/content";

export default function WelcomeWindow() {
  const open = useOS((s) => s.openWindow);
  return (
    <div className="content">
      <p style={{ fontSize: 13, fontWeight: 700 }}>👋 Hi, I&apos;m {profile.name}.</p>
      <p>{profile.blurb}</p>
      <p>
        This whole desktop is my portfolio. Double click the icons to look around (or tap, on mobile).
        Good places to start:
      </p>
      <div style={{ display: "flex", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
        <button onClick={() => open("projects")}>My Projects</button>
        <button onClick={() => open("resume")}>Résumé</button>
        <button onClick={() => open("contact")}>Contact</button>
      </div>
    </div>
  );
}
