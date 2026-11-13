import { custom } from "../data/content";
import Img from "./Img";
import Arrow from "./Arrow";
import "./CustomOrders.css";

export default function CustomOrders() {
  return (
    <section className="custom" id="custom">
      <div className="custom__hero">
        <p className="custom__note">{custom.leftNote.map((l) => <span key={l}>{l}</span>)}</p>
        <Img className="custom__main" src={custom.imageMain} alt="Tiered wedding cake with sugar flowers and candles" tone="#d9d2c3" />
      </div>

      <div className="custom__text">
        <p className="eyebrow">{custom.eyebrow}</p>
        <h2 className="h-display">{custom.title}</h2>
        <p className="custom__body">{custom.text}</p>
        <a href="#contact" className="btn btn--solid">{custom.cta} <Arrow /></a>
      </div>

      <figure className="custom__side">
        <Img className="custom__baker" src={custom.imageSide} alt="Baker adding the final touch to a cake" tone="#e4d9c9" />
        <figcaption>{custom.sideNote.map((l) => <span key={l}>{l}</span>)}</figcaption>
      </figure>
    </section>
  );
}
