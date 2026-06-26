"use client";

import { useState } from "react";
import { useOS } from "@/lib/os-store";
import { useIsMobile } from "./useIsMobile";
import { Glyph } from "./Glyphs";
import type { DesktopItem } from "@/lib/windows";

export default function DesktopIcon({ item }: { item: DesktopItem }) {
  const open = useOS((s) => s.openWindow);
  const mobile = useIsMobile();
  const [selected, setSelected] = useState(false);

  const activate = () => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }
    if (item.type) open(item.type);
  };

  return (
    <div
      className={`desktop-icon ${selected ? "selected" : ""}`}
      tabIndex={0}
      onClick={() => {
        setSelected(true);
        if (mobile) activate();
      }}
      onDoubleClick={activate}
      onBlur={() => setSelected(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter") activate();
      }}
    >
      <Glyph name={item.icon} />
      <span>{item.label}</span>
    </div>
  );
}
