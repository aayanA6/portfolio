import { certifications } from "@/lib/content";

export default function CertificateWindow({ index }: { index: number }) {
  const c = certifications[index];
  if (!c) return <div className="content">Certificate not found.</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", gap: 8, padding: 6, alignItems: "center", flexWrap: "wrap" }}>
        <strong>{c.title}</strong>
        <span style={{ color: "#444" }}>
          {c.issuer} · {c.year}
        </span>
        <span style={{ flex: 1 }} />
        <a href={c.file} download>
          <button>Download .pdf</button>
        </a>
        <a href={c.file} target="_blank" rel="noreferrer">
          <button>Open in new tab</button>
        </a>
      </div>
      <iframe
        src={c.file}
        title={`${c.title} certificate`}
        style={{ flex: 1, border: "none", background: "#fff", minHeight: 320 }}
      />
    </div>
  );
}
