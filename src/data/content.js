// All copy, products and image paths live here. Edit this file, not the components.

export const brand = {
  name: "Krystal",
  descriptor: "Bakes and Bites",
  tagline: "Sweet moments, big stories",
  founded: "2022",
  currency: "NGN",
  locale: "en-NG",
  email: "hello@krystalbakes.com",
  whatsapp: "https://wa.me/234XXXXXXXXXX", // replace with your number
};

export const nav = [
  { label: "Collection", href: "#collection" },
  { label: "Our studio", href: "#studio" },
  { label: "Custom orders", href: "#custom" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Desserts that turn moments into art",
  points: ["Natural ingredients", "Original recipes", "Beauty in every detail"],
  script: "More than desserts",
  // Full-bleed rotating slides. Use wide landscape photos (2000px+) for best results.
  // `position` controls which part of the photo stays visible when it is cropped.
  slideInterval: 5500, // milliseconds per slide
  slides: [
    { image: "/images/hero-cake.jpg", alt: "Black and white celebration cake with gold butterflies", position: "center 40%", tone: "#8f8f8f" },
    { image: "/images/chocolate-drip.jpg", alt: "Chocolate drip cake topped with truffle swirls", position: "center 35%", tone: "#4a3328" },
    { image: "/images/red-velvet.jpg", alt: "Slice of red velvet cake with strawberries", position: "center 45%", tone: "#6e1f2b" },
  ],
};

export const about = {
  eyebrow: "Our studio",
  title: "Inspired by the taste of life",
  text: "Krystal Bakes and Bites is a modern pastry studio where art, natural ingredients and attention to detail come together to make desserts you remember.",
  linkLabel: "Our philosophy",
  image: "/images/about-detail.jpg",
  side: ["Art in", "every layer"],
};

export const products = [
  { id: "chocolate-drip", name: "Chocolate Truffle Drip", tag: "Signature cake", price: 28500, image: "/images/chocolate-drip.jpg", tone: "#6b4a3a" },
  { id: "red-velvet", name: "Red Velvet Cream", tag: "Fan favourite", price: 22000, image: "/images/red-velvet.jpg", tone: "#8a2a35" },
  { id: "raspberry-silk", name: "Raspberry Silk", tag: "Delicate classic", price: 24500, image: "/images/raspberry-silk.jpg", tone: "#ecd9d6" },
];

export const seasonal = {
  eyebrow: "Seasonal collection",
  title: "Spring in every flavour",
  text: "Light as the first warm days. New desserts made with seasonal berries and flowers.",
  cta: "Explore the collection",
  script: "Season of inspiration",
  bg: "/images/seasonal-bg.jpg",
  image: "/images/seasonal-cake.jpg",
};

export const custom = {
  eyebrow: "Custom cakes",
  title: "Your stories, in dessert",
  text: "Weddings, birthdays, small gatherings and corporate events. We design one-of-a-kind cakes that tell your story.",
  cta: "Place an order",
  imageMain: "/images/wedding-cake.jpg",
  imageSide: "/images/baker.jpg",
  sideNote: ["Individual design", "Premium taste", "No compromises"],
  leftNote: ["Special", "occasions", "deserve special", "desserts"],
};

export const stats = [
  { value: "500+", label: "Happy clients" },
  { value: "4.9", label: "Average review score" },
  { value: "100%", label: "Natural ingredients" },
];

export const statsCta = "Let's make your moment special";

export const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "WhatsApp", href: brand.whatsapp },
];

export const footerNote = "Taste matters";
