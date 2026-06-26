import { skills } from "@/lib/content";

export default function SkillsWindow() {
  return (
    <div className="content">
      <p>The tools I reach for, grouped by job:</p>
      {skills.map((g) => (
        <fieldset key={g.group} style={{ marginBottom: 8 }}>
          <legend>{g.group}</legend>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: 4 }}>
            {g.items.map((it) => (
              <span key={it} className="tag98">
                {it}
              </span>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
