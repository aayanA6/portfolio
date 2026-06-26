# Aayan Atif — Portfolio

An interactive **Windows 95/98 desktop** as a personal portfolio. Recruiters land on a teal
desktop and double-click icons (tap on mobile) to open draggable windows for projects, résumé,
skills, experience, and contact — plus a working Start menu, live taskbar clock, boot splash, and a
playable Minesweeper.

Built with **Next.js 16 · React 19 · Tailwind CSS v4 · zustand** (window manager) · **98.css** (UI chrome).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

All copy/data lives in one file: [`lib/content.ts`](lib/content.ts) — profile, projects, skills,
experience, socials. Window definitions and desktop icons are in [`lib/windows.ts`](lib/windows.ts).

## Structure

- `app/` — layout (imports `98.css` + fonts), global theme, page (renders the desktop)
- `lib/os-store.ts` — zustand window manager (open / focus / minimize / maximize / drag)
- `components/os/` — Desktop, Window, Taskbar, StartMenu, BootSplash, Clock, icons, hooks
- `components/windows/` — the content of each window (About, Projects, Skills, Résumé, Minesweeper, …)
- `public/` — résumé PDF + MS Sans Serif fonts

## Deploy

Static Next.js app — deploys to Vercel with zero config (import the repo at
[vercel.com/new](https://vercel.com/new)).
