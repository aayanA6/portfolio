"use client";

import { useOS } from "@/lib/os-store";
import StartMenu from "./StartMenu";
import Clock from "./Clock";
import { WindowsLogo } from "./Glyphs";

export default function Taskbar() {
  const { windows, startOpen, setStartOpen, focusWindow, minimizeWindow, topZ } = useOS();

  return (
    <>
      {startOpen && <StartMenu />}
      <div className="taskbar">
        <button
          className={startOpen ? "pressed" : ""}
          style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 4, minWidth: 0, paddingInline: 6 }}
          onClick={() => setStartOpen(!startOpen)}
        >
          <WindowsLogo /> Start
        </button>
        <div className="vertical-bar" />
        <div className="taskbar-tasks">
          {windows.map((w) => {
            const isActive = w.z === topZ && !w.minimized;
            return (
              <button
                key={w.id}
                className={`taskbar-task ${isActive ? "pressed" : ""}`}
                title={w.title}
                onClick={() => (isActive ? minimizeWindow(w.id) : focusWindow(w.id))}
              >
                {w.title}
              </button>
            );
          })}
        </div>
        <div className="tray">
          <Clock />
        </div>
      </div>
    </>
  );
}
