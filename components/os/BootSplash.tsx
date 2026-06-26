"use client";

import { useEffect } from "react";
import { useOS } from "@/lib/os-store";
import { WindowsLogo } from "./Glyphs";

export default function BootSplash() {
  const setBooted = useOS((s) => s.setBooted);

  useEffect(() => {
    const id = setTimeout(() => setBooted(), 2300);
    return () => clearTimeout(id);
  }, [setBooted]);

  return (
    <div className="boot" onClick={() => setBooted()}>
      <div className="boot-logo">
        <WindowsLogo size={120} />
        <div className="boot-words">
          <div style={{ fontSize: 13, opacity: 0.8 }}>Microsoft</div>
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1 }}>
            Windows<span style={{ fontSize: 18, verticalAlign: "super" }}>95</span>
          </div>
        </div>
      </div>
      <div className="boot-bar">
        <div className="boot-bar-fill" />
      </div>
      <div className="boot-hint">click anywhere to skip</div>
    </div>
  );
}
