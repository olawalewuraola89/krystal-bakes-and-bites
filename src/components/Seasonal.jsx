import { seasonal } from "../data/content";
import Img from "./Img";
import Arrow from "./Arrow";
import "./Seasonal.css";

export default function Seasonal() {
  return (
    <section className="seasonal">
      <Img className="seasonal__bg" src={seasonal.bg} alt="" tone="#7d8764" />
      <div className="seasonal__shade" aria-hidden="true" />

      <div className="seasonal__copy">
        <p className="eyebrow">{seasonal.eyebrow}</p>
        <h2 className="h-display">{seasonal.title}</h2>
        <p>{seasonal.text}</p>
        <a href="#collection" className="btn btn--light">{seasonal.cta} <Arrow /></a>
      </div>

      <p className="script seasonal__script">{seasonal.script}</p>

      <Img className="seasonal__cake" src={seasonal.image} alt="Spring cake on a pedestal stand" tone="transparent" />
    </section>
  );
}
