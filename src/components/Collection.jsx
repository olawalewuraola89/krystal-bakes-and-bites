import { products, brand } from "../data/content";
import Img from "./Img";
import Arrow from "./Arrow";
import "./Collection.css";

const money = (n) =>
  new Intl.NumberFormat(brand.locale, { style: "currency", currency: brand.currency, maximumFractionDigits: 0 }).format(n);

export default function Collection({ onAdd }) {
  return (
    <section className="collection" id="collection">
      <header className="collection__head">
        <p className="eyebrow">Signature collection</p>
        <a href="#collection" className="collection__all">View full collection <Arrow /></a>
      </header>

      <ul className="collection__grid">
        {products.map((p) => (
          <li key={p.id} className="product">
            <Img className="product__img" src={p.image} alt={p.name} tone={p.tone} />
            <h3 className="product__name">{p.name}</h3>
            <p className="product__tag">{p.tag}</p>
            <p className="product__price">{money(p.price)}</p>
            <button className="product__add" onClick={() => onAdd(p)}>Add to bag</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
