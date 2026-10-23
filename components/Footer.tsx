import { INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <b>Woodside Inn</b>
              <span>Bengaluru · Est. 2026</span>
            </div>
            <p className="muted" style={{ marginTop: 18, maxWidth: "34ch" }}>
              {INFO.tagline}. Refined comfort food, craft beer and freezer-door
              cocktails in the heart of Indiranagar.
            </p>
          </div>
          <div className="foot-col">
            <h4>Visit</h4>
            <p>{INFO.address}</p>
            <p>{INFO.hours}</p>
            <a href={`tel:+${INFO.phoneRaw}`}>{INFO.phoneDisplay}</a>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="/#story">Our Story</a>
            <a href="/menu">Menu</a>
            <a href="/#tap">On Tap</a>
            <a href="/#reserve">Reserve</a>
            <a href={INFO.mapsUrl} target="_blank" rel="noopener">
              Directions
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Woodside Inn — Bengaluru</span>
          <span>Indiranagar · New Thippasandra</span>
        </div>
      </div>
    </footer>
  );
}
