"use client";

import { useOS } from "@/lib/os-store";
import { certifications } from "@/lib/content";
import { Glyph } from "@/components/os/Glyphs";
import { useIsMobile } from "@/components/os/useIsMobile";

export default function CertificationsWindow() {
  const open = useOS((s) => s.openWindow);
  const mobile = useIsMobile();

  const openCert = (index: number, title: string) =>
    open("certificate", { id: `certificate:${title}`, title: `${title} - Certificate`, props: { index } });

  return (
    <div>
      <p style={{ padding: "8px 10px 2px", color: "#444" }}>
        {certifications.length} item{certifications.length === 1 ? "" : "s"}. Double click to open it (or tap, on mobile).
      </p>
      <div className="folder-grid">
        {certifications.map((c, i) => (
          <div
            key={c.title}
            className="folder-item"
            tabIndex={0}
            onClick={() => mobile && openCert(i, c.title)}
            onDoubleClick={() => openCert(i, c.title)}
            onKeyDown={(e) => e.key === "Enter" && openCert(i, c.title)}
          >
            <Glyph name="cert" />
            <span>{c.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
