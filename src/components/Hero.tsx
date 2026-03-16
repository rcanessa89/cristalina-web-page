import { useState, useEffect } from 'react';
import type { MappedHero } from '../lib/mapContent';

const INTERVAL_MS = 4000;
const TRANSITION_MS = 1000;

export default function Hero({
  title,
  subtitle,
  backgroundImages,
  cta,
  variant = 'full'
}: MappedHero) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCompact = variant === 'compact';

  useEffect(() => {
    if (isCompact || backgroundImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % backgroundImages.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [backgroundImages.length, isCompact]);

  if (isCompact) {
    return (
      <section
        className="hero min-h-64 bg-primary text-primary-content"
        style={
          backgroundImages.length > 0
            ? { backgroundImage: `url(${backgroundImages[0].url})` }
            : undefined
        }
      >
        {backgroundImages.length > 0 && (
          <div className="hero-overlay bg-primary/80"></div>
        )}
        <div className="hero-content text-center relative z-10">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="mb-6">{subtitle}</p>}
            {cta && (
              <a
                className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
                href={cta.url}
              >
                {cta.linkText}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

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
