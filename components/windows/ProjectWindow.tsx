import { projects } from "@/lib/content";

export default function ProjectWindow({ index }: { index: number }) {
  const p = projects[index];
  if (!p) return <div className="content">Project not found.</div>;

  return (
    <div className="content">
      <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{p.title}</p>
      <p style={{ color: "#000080", margin: "2px 0 10px" }}>{p.tagline}</p>
      <p>{p.description}</p>

      <fieldset style={{ marginTop: 6 }}>
        <legend>Built with</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: 4 }}>
          {p.tags.map((t) => (
            <span key={t} className="tag98">
              {t}
            </span>
          ))}
        </div>
      </fieldset>

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer">
            <button>Open Source on GitHub</button>
          </a>
        )}
        {p.href && (
          <a href={p.href} target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
}
