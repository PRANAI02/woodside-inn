"use client";

import { useEffect, useState } from "react";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery">
        {GALLERY.map((src, i) => (
          <button key={src} onClick={() => setActive(src)} aria-label="View photo">
            <img
              src={src}
              alt={`Woodside Inn Bengaluru — photo ${i + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="close" aria-label="Close">
            ✕
          </button>
          <img src={active} alt="Woodside Inn Bengaluru" />
        </div>
      )}
    </>
  );
}
