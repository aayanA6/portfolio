"use client";

import { useOS, type WindowState } from "@/lib/os-store";
import { useDrag } from "./useDrag";
import { useIsMobile } from "./useIsMobile";
import { renderWindowContent } from "@/components/windows-registry";

export default function Window({ win }: { win: WindowState }) {
  const { focusWindow, closeWindow, minimizeWindow, toggleMaximize, moveWindow, topZ } = useOS();
  const mobile = useIsMobile();
  const maximized = win.maximized && !mobile;
  const active = win.z === topZ;

  const drag = useDrag(
    (dx, dy) => moveWindow(win.id, Math.max(-40, win.x + dx), Math.max(0, win.y + dy)),
    () => focusWindow(win.id),
    mobile || maximized,
  );

  if (win.minimized) return null;

  const style = mobile
    ? { zIndex: win.z }
    : maximized
      ? { left: 0, top: 0, width: "100%", height: "calc(100% - 32px)", zIndex: win.z }
      : { left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z };

  return (
    <div
      className={`window win fade-in ${mobile ? "mobile" : ""}`}
      style={style}
      onPointerDown={() => focusWindow(win.id)}
    >
      <div
        className={`title-bar ${active ? "" : "inactive"}`}
        onPointerDown={drag.onPointerDown}
        onPointerMove={drag.onPointerMove}
        onPointerUp={drag.onPointerUp}
        onDoubleClick={() => !mobile && toggleMaximize(win.id)}
      >
        <div className="title-bar-text">{win.title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => minimizeWindow(win.id)} />
          {!mobile && <button aria-label="Maximize" onClick={() => toggleMaximize(win.id)} />}
          <button aria-label="Close" onClick={() => closeWindow(win.id)} />
        </div>
      </div>
      <div className="window-body">{renderWindowContent(win)}</div>
    </div>
  );
}
