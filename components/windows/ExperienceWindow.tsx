import { timeline } from "@/lib/content";

export default function ExperienceWindow() {
  return (
    <div className="content">
      {timeline.map((t) => (
        <fieldset key={t.title + t.when} style={{ marginBottom: 10 }}>
          <legend>{t.when}</legend>
          <div style={{ padding: 4 }}>
            <div style={{ fontWeight: 700 }}>
              {t.title} — {t.org}
            </div>
            <div style={{ color: "#444", marginBottom: 5 }}>{t.where}</div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {t.points.map((pt, i) => (
                <li key={i} style={{ marginBottom: 3 }}>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </fieldset>
      ))}
    </div>
  );
}
