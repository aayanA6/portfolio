"use client";

import { useEffect } from "react";
import { useOS } from "@/lib/os-store";
import { DESKTOP_ITEMS } from "@/lib/windows";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";
import BootSplash from "./BootSplash";

export default function Desktop() {
  const booted = useOS((s) => s.booted);
  const windows = useOS((s) => s.windows);
  const shutdown = useOS((s) => s.shutdown);
  const openWindow = useOS((s) => s.openWindow);
  const setShutdown = useOS((s) => s.setShutdown);

  // Auto-open the Welcome window once the desktop finishes "booting".
  useEffect(() => {
    if (!booted) return;
    const t = setTimeout(() => openWindow("welcome"), 250);
    return () => clearTimeout(t);
  }, [booted, openWindow]);

  if (shutdown) {
    return (
      <div className="shutdown" onClick={() => setShutdown(false)}>
        <p>It&apos;s now safe to turn off your computer.</p>
        <button onClick={() => setShutdown(false)}>← Back to desktop</button>
      </div>
    );
  }

  return (
    <div className="desktop">
      {!booted && <BootSplash />}
      <div className="desktop-icons">
        {DESKTOP_ITEMS.map((item) => (
          <DesktopIcon key={item.id} item={item} />
        ))}
      </div>
      {windows.map((w) => (
        <Window key={w.id} win={w} />
      ))}
      <Taskbar />
    </div>
  );
}
