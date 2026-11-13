import { stats, statsCta } from "../data/content";
import Arrow from "./Arrow";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <dl className="stats__list">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
      <p className="stats__cta">{statsCta}</p>
      <a href="#custom" className="stats__go" aria-label="Start an order"><Arrow /></a>
    </section>
  );
}
