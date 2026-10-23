import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import ReserveForm from "@/components/ReserveForm";
import Footer from "@/components/Footer";
import {
  INFO,
  SIGNATURES,
  MENU,
  BREWS,
  COCKTAILS,
  REVIEWS,
  ORDER_LINKS,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <header className="hero">
          <div className="hero-bg">
            <img src="/images/hero-bar.png" alt="The bar at Woodside Inn, Bengaluru" />
          </div>
          <div className="wrap hero-content">
            <p className="eyebrow">Indiranagar · Bengaluru</p>
            <h1 className="display">
              An ode to Bengaluru&apos;s <span className="gold serif-italic">pub culture</span>
            </h1>
            <p className="lead">
              Mumbai&apos;s legendary gastropub has found its second home in
              Indiranagar — refined comfort food, fourteen beers on tap and
              freezer-door cocktails, under warm wood and a wall of framed
              memories.
            </p>
            <div className="hero-cta">
              <a href="#reserve" className="btn btn-primary">
                Reserve a Table
              </a>
              <a href="/menu" className="btn btn-ghost">
                View the Menu
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <i />
                {INFO.hours}
              </span>
              <span>
                <i />
                14 Beers on Tap
              </span>
              <span>
                <i />
                {INFO.rating}★ · {INFO.ratingCount} reviews
              </span>
            </div>
          </div>
        </header>

        {/* ---------------- MARQUEE ---------------- */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>
              Wood-Fired Comfort Food · Fourteen Beers on Tap · Freezer-Door
              Cocktails · The Live Grill · From Mumbai, With Love ·
            </span>
            <span>
              Wood-Fired Comfort Food · Fourteen Beers on Tap · Freezer-Door
              Cocktails · The Live Grill · From Mumbai, With Love ·
            </span>
          </div>
        </div>

        {/* ---------------- STORY ---------------- */}
        <section className="section" id="story">
          <div className="wrap story-grid">
            <div className="story-figure reveal">
              <img
                src="/images/interior.jpg"
                alt="Warm wood-panelled interior of Woodside Inn"
              />
              <span className="tag">Two floors · 2,800 sq ft · A balcony</span>
            </div>
            <div className="story reveal">
              <p className="eyebrow">The House</p>
              <h2 className="h2">
                Comfort food, refined — without losing its soul.
              </h2>
              <p className="lead">
                Born in Colaba and raised across Mumbai, Woodside Inn built its
                name on honest, brilliantly-cooked food and a bar that knows its
                craft. In Indiranagar we&apos;ve carried that spirit south.
              </p>
              <p className="muted">
                Light-wood finishes, communal tables and hand-laid interlocking
                floors sit beneath tall arched windows that look out onto an old
                rain tree. On the walls, 144 frames — around twenty of them a
                quiet tribute to the legends that built this city&apos;s
                nightlife: The Pub, NASA, Purple Haze, Black Cadillac.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <b>14</b>
                  <span>Beers on tap</span>
                </div>
                <div className="stat">
                  <b>144</b>
                  <span>Framed memories</span>
                </div>
                <div className="stat">
                  <b>−5°C</b>
                  <span>Freezer-door cocktails</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SIGNATURES ---------------- */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">The Plates</p>
                <h2 className="h2">Signatures worth the trip</h2>
              </div>
              <a href="/menu" className="btn btn-ghost">
                Full Menu
              </a>
            </div>
            <div className="dish-grid">
              {SIGNATURES.map((d) => (
                <article className="dish reveal" key={d.name}>
                  <img src={d.img} alt={d.name} loading="lazy" />
                  <div className="dish-body">
                    <div className="k">{d.key}</div>
                    <h3>{d.name}</h3>
                    <p>{d.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- MENU PREVIEW ---------------- */}
        <section
          className="section"
          style={{
            background: "var(--ink-2)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow center">Eat &amp; Drink</p>
              <h2 className="h2">A menu built for lingering</h2>
            </div>
            <div className="menu-cats reveal">
              {MENU.map((cat) => (
                <div className="menu-cat" key={cat.title}>
                  <h3>
                    {cat.title}
                    <em>{cat.kicker}</em>
                  </h3>
                  {cat.items.slice(0, 4).map((it) => (
                    <div className="menu-item" key={it.name}>
                      <div>
                        <span className={`veg ${it.veg ? "v" : "n"}`} />
                        <span className="nm">{it.name}</span>
                        {it.desc && <div className="ds">{it.desc}</div>}
                      </div>
                      <span className="dots" />
                      <span className="pr">{it.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="/menu" className="btn btn-primary">
                See the Full Menu
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- ON TAP ---------------- */}
        <section className="section tap" id="tap">
          <div className="wrap tap-grid">
            <div className="reveal">
              <p className="eyebrow">The Bar</p>
              <h2 className="h2">Fourteen on tap, and a −5°C freezer door.</h2>
              <p className="lead">
                A rotating line of craft and classic pours — local heroes beside
                the names you love. Then there&apos;s the cocktail programme:
                classics served ice-cold straight from the freezer door, and
                house originals built around Indian botanicals.
              </p>
              <div className="brew-list">
                {BREWS.map((b) => (
                  <span className="brew" key={b}>
                    {b}
                  </span>
                ))}
                <span className="brew">+ more</span>
              </div>
              <div className="pour">
                {COCKTAILS.slice(0, 6).map((c) => (
                  <div className="p-title" key={c.name}>
                    <b>{c.name}</b>
                    <span>{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tap-figure reveal">
              <img
                src="/images/beer-taps.jpg"
                alt="Craft beer taps at Woodside Inn"
              />
            </div>
          </div>
        </section>

        {/* ---------------- REVIEWS ---------------- */}
        <section
          className="section"
          style={{
            background: "var(--ink-2)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="rev-top">
              <span className="rev-score">{INFO.rating}</span>
              <div>
                <div className="stars">★★★★★</div>
                <p className="muted" style={{ margin: "6px 0 0" }}>
                  {INFO.ratingCount} Google reviews
                </p>
              </div>
            </div>
            <div className="rev-grid">
              {REVIEWS.map((r, i) => (
                <div className="rev reveal" key={i}>
                  <span className="stars">★★★★★</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="who">— {r.who}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- LOCATION ---------------- */}
        <section className="section" id="visit">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Find Us</p>
                <h2 className="h2">Pull up a stool</h2>
              </div>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                Get Directions
              </a>
            </div>
            <div className="loc-grid reveal">
              <div className="loc-info">
                <div className="loc-row">
                  <div className="k">Address</div>
                  <div className="v">{INFO.address}</div>
                </div>
                <div className="loc-row">
                  <div className="k">Hours</div>
                  <div className="v">{INFO.hours}</div>
                </div>
                <div className="loc-row">
                  <div className="k">Reservations</div>
                  <div className="v">
                    <a href={`tel:+${INFO.phoneRaw}`} className="gold">
                      {INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="loc-row">
                  <div className="k">Good to know</div>
                  <div className="v muted">
                    {INFO.costForTwo} · Happy hours 4–8 PM, 1+1 on beers
                  </div>
                </div>
              </div>
              <div className="loc-map">
                <iframe
                  title="Woodside Inn Bengaluru map"
                  src={INFO.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- RESERVE ---------------- */}
        <section className="section reserve" id="reserve">
          <div className="wrap" style={{ maxWidth: 780 }}>
            <div className="sec-head center">
              <p className="eyebrow center">Reservations</p>
              <h2 className="h2">Book your table</h2>
              <p className="lead" style={{ textAlign: "center" }}>
                Tell us when you&apos;re coming and we&apos;ll have a table
                waiting. We confirm every booking personally.
              </p>
            </div>
            <ReserveForm />
          </div>
        </section>

        {/* ---------------- ORDER ONLINE ---------------- */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow center">Can&apos;t Make It In?</p>
              <h2 className="h2">Order in, or book ahead</h2>
            </div>
            <div className="order-grid">
              {ORDER_LINKS.map((o) => (
                <a
                  key={o.name}
                  href={o.href}
                  target="_blank"
                  rel="noopener"
                  className="order-card reveal"
                >
                  <b>{o.name}</b>
                  <span>{o.desc}</span>
                  <span className="go">Open {o.name} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
