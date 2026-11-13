import { about, brand } from "../data/content";
import Img from "./Img";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="studio">
      <div className="about__text">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="h-display">{about.title}</h2>
        <p className="about__body">{about.text}</p>
        <a href="#studio" className="link-line">{about.linkLabel}</a>
      </div>

      <Img className="about__image" src={about.image} alt="Close-up of a petal-topped cake with raspberries" tone="#8d9467" />

      <aside className="about__side">
        <p className="about__tag">{about.side.map((l) => <span key={l}>{l}</span>)}</p>
        <p className="about__est">Est. {brand.founded}</p>
      </aside>
    </section>
  );
}
