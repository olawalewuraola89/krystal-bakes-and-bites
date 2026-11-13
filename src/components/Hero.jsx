import { useEffect, useState } from "react";
import { brand, hero } from "../data/content";
import Img from "./Img";
import Arrow from "./Arrow";
import "./Hero.css";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = hero.slides.length;

  // Auto-rotate. Pauses on hover/focus, and is skipped if the visitor prefers reduced motion.
  // `index` is a dependency so clicking a dot restarts the timer.
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), hero.slideInterval);
    return () => clearInterval(id);
  }, [paused, count, index]);

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero__slides">
        {hero.slides.map((s, i) => (
          <Img
            key={s.image}
            className={`hero__slide ${i === index ? "is-active" : ""}`}
            src={s.image}
            alt={i === index ? s.alt : ""}
            tone={s.tone}
            style={{ "--pos": s.position }}
          />
        ))}
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <h1 className="hero__title" aria-label={`${brand.name} ${brand.descriptor}`}>
        {brand.name}
      </h1>

      <div className="hero__copy">
        <h2 className="h-display hero__lead">{hero.title}</h2>
        <ul className="hero__points">
          {hero.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
        <div className="hero__actions">
          <a href="#custom" className="btn btn--solid">Order a cake <Arrow /></a>
          <a href="#collection" className="link-line">View collection</a>
        </div>
      </div>

      <p className="script hero__script">{hero.script}</p>

      {count > 1 && (
        <div className="hero__dots" role="group" aria-label="Choose slide">
          {hero.slides.map((s, i) => (
            <button
              key={s.image}
              className={i === index ? "is-active" : ""}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
