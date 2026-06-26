import { Glyph } from "@/components/os/Glyphs";

export default function RecycleWindow() {
  return (
    <div>
      <p style={{ padding: "8px 10px 2px", color: "#444" }}>1 item</p>
      <div className="folder-grid">
        <div className="folder-item" tabIndex={0}>
          <Glyph name="notepad" />
          <span>old_portfolio.zip</span>
        </div>
      </div>
      <p style={{ padding: "8px 12px", color: "#444" }}>
        (The previous 3D chrome-blob site. Kept here for sentimental reasons.)
      </p>
    </div>
  );
}
