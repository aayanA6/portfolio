import { profile } from "@/lib/content";

export default function ResumeWindow() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", gap: 8, padding: 6, alignItems: "center", flexWrap: "wrap" }}>
        <a href={profile.resumeUrl} download>
          <button>Download .pdf</button>
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
          <button>Open in new tab</button>
        </a>
      </div>
      <iframe
        src={profile.resumeUrl}
        title="Résumé — Aayan Atif"
        style={{ flex: 1, border: "none", background: "#fff", minHeight: 280 }}
      />
    </div>
  );
}
