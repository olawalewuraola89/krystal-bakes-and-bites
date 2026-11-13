import { brand, nav, socials, footerNote } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <a href="#top" className="footer__logo">
        <span>{brand.name}</span>
        <small>{brand.descriptor}</small>
      </a>

      <nav className="footer__nav" aria-label="Footer">
        {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
      </nav>

      <ul className="footer__social">
        {socials.map((s) => (
          <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
        ))}
      </ul>

      <p className="footer__note">{footerNote}</p>
      <a className="footer__mail" href={`mailto:${brand.email}`}>{brand.email}</a>
    </footer>
  );
}
