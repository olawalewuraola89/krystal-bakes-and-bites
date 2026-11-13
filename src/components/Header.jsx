import { useState } from "react";
import { brand, nav } from "../data/content";
import "./Header.css";

export default function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <button className="header__toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>

      <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Main">
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
      </nav>

      <a href="#top" className="header__logo" aria-label={`${brand.name} ${brand.descriptor}`}>
        <span className="header__name">{brand.name}</span>
        <span className="header__desc">{brand.descriptor}</span>
      </a>

      <div className="header__right">
        <span className="header__tagline">{brand.tagline}</span>
        <button className="header__bag" aria-label={`Bag, ${cartCount} items`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
          ({cartCount})
        </button>
      </div>
    </header>
  );
}
