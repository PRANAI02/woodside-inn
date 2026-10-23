"use client";

import { useEffect, useState } from "react";
import { INFO } from "@/lib/data";

const LINKS = [
  { href: "/#story", label: "Story" },
  { href: "/menu", label: "Menu" },
  { href: "/#tap", label: "On Tap" },
  { href: "/#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="/#top" className="brand" aria-label="Woodside Inn home">
            <b>Woodside Inn</b>
            <span>Bengaluru · Est. 2026</span>
          </a>
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="/#reserve" className="btn btn-primary">
            Reserve
          </a>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`drawer${open ? " open" : ""}`}>
        <button
          className="lightbox close"
          style={{ position: "absolute", top: 22, right: 26 }}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={`tel:+${INFO.phoneRaw}`}
          onClick={() => setOpen(false)}
          className="gold"
        >
          Call to Reserve
        </a>
      </div>
    </>
  );
}
