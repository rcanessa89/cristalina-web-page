import { useState, useEffect } from 'react';
import type { MappedHero } from '../lib/mapContent';

const INTERVAL_MS = 4000;
const TRANSITION_MS = 1000;

export default function Hero({
  title,
  subtitle,
  backgroundImages,
  cta
}: MappedHero) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);
 
  return (
    <section className="hero relative min-h-[80vh] overflow-hidden">
      {backgroundImages.map((img, i) => (
        <div
          key={img.url}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img.url})`,
            opacity: i === activeIndex ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease-in-out`
          }}
        />
      ))}
      <div className="hero-overlay relative z-10"></div>
      <div className="hero-content text-neutral-content relative z-20 text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subtitle}</p>
          {cta && (
            <a className="btn btn-primary" href={cta.url}>
              {cta.linkText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
