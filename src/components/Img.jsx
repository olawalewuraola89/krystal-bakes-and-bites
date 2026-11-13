import { useState } from "react";

// Renders a photo; if the file is missing it shows a soft colour block instead.
export default function Img({ src, alt = "", className = "", tone, style }) {
  const [missing, setMissing] = useState(false);
  return (
    <div
      className={`img ${missing ? "is-missing" : ""} ${className}`}
      style={{ ...style, ...(tone ? { "--tone": tone } : {}) }}
      role={missing ? "img" : undefined}
      aria-label={missing ? alt : undefined}
    >
      {!missing && <img src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />}
    </div>
  );
}
