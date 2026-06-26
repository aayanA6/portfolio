import { profile, extras } from "@/lib/content";

export default function AboutWindow() {
  return (
    <div className="content">
      <p style={{ fontWeight: 700 }}>About Me</p>
      <p>
        I&apos;m a Computer Science student at Wilfrid Laurier who learns by building. My favourite
        kind of work is the full loop — designing the data model, wiring the backend, then sweating
        the front-end details until it feels effortless.
      </p>
      <p>
        Most of what I&apos;ve shipped started at a hackathon under a deadline — an AI accessibility
        auditor, a self-healing infrastructure dashboard, a charity video platform. I like taking an
        idea from zero to a working demo, fast, and lately that means leaning hard into AI.
      </p>
      <p>Outside the editor you&apos;ll find me into {extras.interests.map((x) => x.toLowerCase()).join(", ")}.</p>
      <p style={{ color: "#444" }}>
        — {profile.name}, {profile.location}
      </p>
    </div>
  );
}
