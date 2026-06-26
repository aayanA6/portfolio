import { profile } from "@/lib/content";

export default function AboutWindow() {
  return (
    <div className="content">
      <p style={{ fontWeight: 700 }}>About Me</p>
      <p>
        I&apos;m a Computer Science student at Wilfrid Laurier, and I learn by building. My favorite
        work is the full loop: design the data model, wire up the backend, then sweat the front end
        until it feels effortless.
      </p>
      <p>
        Most of what I ship starts at a hackathon. An accessibility auditor, a self healing dashboard,
        a charity video platform. I like getting an idea from zero to a working demo fast, and lately
        that means leaning into AI.
      </p>
      <p>Outside the editor I&apos;m into photography, tennis, hardware, and soccer.</p>
      <p style={{ color: "#444" }}>
        {profile.name}, {profile.location}
      </p>
    </div>
  );
}
