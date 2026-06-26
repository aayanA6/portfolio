"use client";

import { useOS } from "@/lib/os-store";
import { projects } from "@/lib/content";
import { Glyph } from "@/components/os/Glyphs";
import { useIsMobile } from "@/components/os/useIsMobile";

export default function ProjectsWindow() {
  const open = useOS((s) => s.openWindow);
  const mobile = useIsMobile();

  const openProject = (index: number, title: string) =>
    open("project", { id: `project:${title}`, title: `${title} - Project`, props: { index } });

  return (
    <div>
      <p style={{ padding: "8px 10px 2px", color: "#444" }}>
        {projects.length} items. Double click a project to open it (or tap, on mobile).
      </p>
      <div className="folder-grid">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="folder-item"
            tabIndex={0}
            onClick={() => mobile && openProject(i, p.title)}
            onDoubleClick={() => openProject(i, p.title)}
            onKeyDown={(e) => e.key === "Enter" && openProject(i, p.title)}
          >
            <Glyph name="project" />
            <span>{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
