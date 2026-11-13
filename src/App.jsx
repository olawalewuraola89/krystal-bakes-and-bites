import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Collection from "./components/Collection";
import Seasonal from "./components/Seasonal";
import CustomOrders from "./components/CustomOrders";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  // Minimal cart state. Swap for Context/Zustand + a checkout when you're ready.
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart((c) => [...c, product]);

  return (
    <>
      <Header cartCount={cart.length} />
      <main>
        <Hero />
        <About />
        <Collection onAdd={addToCart} />
        <Seasonal />
        <CustomOrders />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
