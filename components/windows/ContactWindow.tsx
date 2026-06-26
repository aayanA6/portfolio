import { profile, socials } from "@/lib/content";

export default function ContactWindow() {
  return (
    <div className="content">
      <p>The fastest way to reach me is email — I reply quickly.</p>
      <fieldset>
        <legend>Contact</legend>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 6 }}>
          <div>
            📧 <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            💼{" "}
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/AayanAtif
            </a>
          </div>
          <div>
            💻{" "}
            <a href={socials.github} target="_blank" rel="noreferrer">
              github.com/aayanA6
            </a>
          </div>
          {profile.phone && <div>📞 {profile.phone}</div>}
        </div>
      </fieldset>
      <div style={{ marginTop: 12 }}>
        <a href={`mailto:${profile.email}`}>
          <button>Send Email</button>
        </a>
      </div>
    </div>
  );
}
