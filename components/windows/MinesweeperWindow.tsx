"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = 9;
const COLS = 9;
const MINES = 10;

type Cell = { mine: boolean; adj: number; revealed: boolean; flagged: boolean };
type Status = "playing" | "won" | "lost";

function buildBoard(): Cell[][] {
  const g: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({ mine: false, adj: 0, revealed: false, flagged: false })),
  );
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!g[r][c].mine) {
      g[r][c].mine = true;
      placed++;
    }
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (g[r][c].mine) continue;
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && g[nr][nc].mine) n++;
        }
      }
      g[r][c].adj = n;
    }
  }
  return g;
}

const pad = (n: number) => Math.max(0, Math.min(999, n)).toString().padStart(3, "0");
const clone = (g: Cell[][]) => g.map((row) => row.map((c) => ({ ...c })));

export default function MinesweeperWindow() {
  const [grid, setGrid] = useState<Cell[][]>(() => buildBoard());
  const [status, setStatus] = useState<Status>("playing");
  const [flags, setFlags] = useState(0);
  const [time, setTime] = useState(0);
  const running = useRef(false);

  const reset = () => {
    setGrid(buildBoard());
    setStatus("playing");
    setFlags(0);
    setTime(0);
    running.current = false;
  };

  useEffect(() => {
    if (status !== "playing") return;
    const id = setInterval(() => {
      if (running.current) setTime((t) => Math.min(999, t + 1));
    }, 1000);
    return () => clearInterval(id);
  }, [status]);

  const reveal = (r: number, c: number) => {
    if (status !== "playing") return;
    const cell = grid[r][c];
    if (!cell || cell.revealed || cell.flagged) return;
    running.current = true;
    const g = clone(grid);

    if (g[r][c].mine) {
      g.forEach((row) => row.forEach((x) => (x.revealed = x.revealed || x.mine)));
      setGrid(g);
      setStatus("lost");
      return;
    }

    const stack: [number, number][] = [[r, c]];
    while (stack.length) {
      const [cr, cc] = stack.pop()!;
      const cur = g[cr][cc];
      if (cur.revealed || cur.flagged) continue;
      cur.revealed = true;
      if (cur.adj === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !g[nr][nc].revealed && !g[nr][nc].mine) {
              stack.push([nr, nc]);
            }
          }
        }
      }
    }

    const won = g.every((row) => row.every((x) => x.mine || x.revealed));
    setGrid(g);
    if (won) setStatus("won");
  };

  const flag = (e: React.MouseEvent, r: number, c: number) => {
    e.preventDefault();
    if (status !== "playing" || grid[r]?.[c]?.revealed) return;
    const g = clone(grid);
    g[r][c].flagged = !g[r][c].flagged;
    setGrid(g);
    setFlags((f) => f + (g[r][c].flagged ? 1 : -1));
  };

  const face = status === "won" ? "😎" : status === "lost" ? "😵" : "🙂";

  return (
    <div className="ms">
      <div className="ms-head">
        <span className="ms-lcd">{pad(MINES - flags)}</span>
        <button className="ms-face" onClick={reset} aria-label="New game">
          {face}
        </button>
        <span className="ms-lcd">{pad(time)}</span>
      </div>
      <div className="ms-grid" onContextMenu={(e) => e.preventDefault()}>
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const cls = ["ms-cell"];
            if (cell.revealed) cls.push("revealed");
            if (cell.revealed && cell.mine) cls.push("mine");
            if (cell.revealed && !cell.mine && cell.adj > 0) cls.push(`ms-${cell.adj}`);
            return (
              <div
                key={`${r}-${c}`}
                className={cls.join(" ")}
                onClick={() => reveal(r, c)}
                onContextMenu={(e) => flag(e, r, c)}
              >
                {cell.revealed
                  ? cell.mine
                    ? "💣"
                    : cell.adj > 0
                      ? cell.adj
                      : ""
                  : cell.flagged
                    ? "🚩"
                    : ""}
              </div>
            );
          }),
        )}
      </div>
      <p style={{ fontSize: 10, color: "#444", marginTop: 4, textAlign: "center" }}>
        left-click reveal · right-click flag
      </p>
    </div>
  );
}
