import { create } from "zustand";
import { WINDOW_DEFS, type WinType } from "@/lib/windows";

export type WindowState = {
  id: string; // unique instance id ("about", or "project:a11y.sense")
  type: WinType;
  title: string;
  z: number;
  x: number;
  y: number;
  w: number;
  h: number;
  minimized: boolean;
  maximized: boolean;
  props?: Record<string, unknown>;
};

type OpenOpts = { id?: string; title?: string; props?: Record<string, unknown> };

type OSStore = {
  windows: WindowState[];
  topZ: number;
  booted: boolean;
  startOpen: boolean;
  shutdown: boolean;
  spawnCount: number;
  setBooted: () => void;
  setStartOpen: (open: boolean) => void;
  setShutdown: (v: boolean) => void;
  openWindow: (type: WinType, opts?: OpenOpts) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
};

export const useOS = create<OSStore>((set) => ({
  windows: [],
  topZ: 10,
  booted: false,
  startOpen: false,
  shutdown: false,
  spawnCount: 0,

  setBooted: () => set({ booted: true }),
  setStartOpen: (open) => set({ startOpen: open }),
  setShutdown: (v) => set({ shutdown: v, startOpen: false }),

  openWindow: (type, opts = {}) =>
    set((s) => {
      const def = WINDOW_DEFS[type];
      const id = opts.id ?? type;
      const existing = s.windows.find((w) => w.id === id);
      const z = s.topZ + 1;

      // Already open → focus and restore.
      if (existing) {
        return {
          topZ: z,
          startOpen: false,
          windows: s.windows.map((w) => (w.id === id ? { ...w, z, minimized: false } : w)),
        };
      }

      // Cascade new windows so they don't stack exactly.
      const n = s.spawnCount % 7;
      const win: WindowState = {
        id,
        type,
        title: opts.title ?? def.title,
        z,
        x: 116 + n * 26,
        y: 24 + n * 22,
        w: def.w,
        h: def.h,
        minimized: false,
        maximized: false,
        props: opts.props,
      };
      return { windows: [...s.windows, win], topZ: z, spawnCount: s.spawnCount + 1, startOpen: false };
    }),

  closeWindow: (id) => set((s) => ({ windows: s.windows.filter((w) => w.id !== id) })),

  focusWindow: (id) =>
    set((s) => {
      const z = s.topZ + 1;
      return { topZ: z, windows: s.windows.map((w) => (w.id === id ? { ...w, z, minimized: false } : w)) };
    }),

  minimizeWindow: (id) =>
    set((s) => ({ windows: s.windows.map((w) => (w.id === id ? { ...w, minimized: true } : w)) })),

  toggleMaximize: (id) =>
    set((s) => {
      const z = s.topZ + 1;
      return {
        topZ: z,
        windows: s.windows.map((w) => (w.id === id ? { ...w, maximized: !w.maximized, z, minimized: false } : w)),
      };
    }),

  moveWindow: (id, x, y) =>
    set((s) => ({ windows: s.windows.map((w) => (w.id === id ? { ...w, x, y } : w)) })),
}));
