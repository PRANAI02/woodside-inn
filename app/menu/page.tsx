import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { INFO, MENU, COCKTAILS, BREWS, MenuItem } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu — Woodside Inn, Bengaluru",
  description:
    "The Woodside Inn Bengaluru menu — charcoal-grill small plates, wood-fired 11\" pizzas, signature cocktails and 14 beers on tap in Indiranagar.",
};

function List({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map((it) => (
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
    </>
  );
}

export default function MenuPage() {
  const [smallPlates, vegPizza, nonVegPizza] = MENU;

  return (
    <>
      <Nav />
      <ScrollReveal />
      <main>
        <section className="menu-hero">
          <div className="wrap">
            <a href="/" className="back-link">
              ← Back to Woodside Inn
            </a>
            <h1 className="display" style={{ marginTop: 20 }}>
              The Menu
            </h1>
            <p className="lead" style={{ marginTop: 18 }}>
              Comfort food, refined — from the charcoal grill and the wood-fired
              oven, with a bar programme to match. A selection is shown below;
              the full card lives in-house.
            </p>
            <p className="note" style={{ marginTop: 14 }}>
              <span className="veg v" style={{ marginRight: 6 }} />
              Vegetarian
              <span className="veg n" style={{ margin: "0 6px 0 20px" }} />
              Non-vegetarian
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 64 }}>
          <div className="wrap menu-page-grid">
            {/* Left column */}
            <div>
              <div className="menu-cat menu-block reveal">
                <h3>
                  {smallPlates.title}
                  <em>{smallPlates.kicker}</em>
                </h3>
                <List items={smallPlates.items} />
              </div>
              <div className="menu-cat menu-block reveal">
                <h3>
                  {vegPizza.title}
                  <em>{vegPizza.kicker}</em>
                </h3>
                <List items={vegPizza.items} />
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="menu-cat menu-block reveal">
                <h3>
                  {nonVegPizza.title}
                  <em>{nonVegPizza.kicker}</em>
                </h3>
                <List items={nonVegPizza.items} />
              </div>

              <div className="menu-cat menu-block reveal">
                <h3>
                  Signature Cocktails<em>60ml spirit</em>
                </h3>
                {COCKTAILS.map((c) => (
                  <div className="menu-item" key={c.name}>
                    <div>
                      <span className="nm">{c.name}</span>
                      {c.desc && <div className="ds">{c.desc}</div>}
                    </div>
                    <span className="dots" />
                    <span className="pr">{c.price}</span>
                  </div>
                ))}
              </div>

              <div className="menu-cat menu-block reveal">
                <h3>
                  On Tap<em>14 Beers</em>
                </h3>
                <p className="muted" style={{ marginTop: 14 }}>
                  A rotating line-up featuring {BREWS.join(", ")} and more.
                  Happy hours 4–8 PM daily, 1+1 on beers.
                </p>
              </div>
            </div>
          </div>

          <div className="wrap">
            <p className="note" style={{ marginTop: 8, textAlign: "center" }}>
              Prices in ₹. A 10% service charge is applicable. {INFO.costForTwo}.
            </p>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="/#reserve" className="btn btn-primary">
                Reserve a Table
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
