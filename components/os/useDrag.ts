"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useRef } from "react";

/**
 * Pointer-based drag for window title bars. Reports incremental deltas so the
 * caller can move the window from its current position. Ignores presses on
 * buttons (so the min/max/close controls still work) and is a no-op when disabled.
 */
export function useDrag(onMove: (dx: number, dy: number) => void, onStart?: () => void, disabled?: boolean) {
  const last = useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: ReactPointerEvent) => {
    if (disabled) return;
    if ((e.target as HTMLElement).closest("button")) return;
    e.preventDefault();
    try {
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      // synthetic/expired pointer — capture is a nice-to-have, drag still works
    }
    last.current = { x: e.clientX, y: e.clientY };
    onStart?.();
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!last.current) return;
    onMove(e.clientX - last.current.x, e.clientY - last.current.y);
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: ReactPointerEvent) => {
    last.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // capture may never have been acquired; ignore
    }
  };

  return { onPointerDown, onPointerMove, onPointerUp };
}
