import { useState, useEffect } from 'react';
import type { MappedHero } from '../lib/mapContent';
import { ChevronDown } from 'lucide-react';

const INTERVAL_MS = 5000;
const TRANSITION_MS = 1200;

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
        className="relative overflow-hidden py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #004a59 0%, #01a89e 50%, #31cdcf 100%)'
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 text-white/85 animate-fade-in-up delay-200">
              {subtitle}
            </p>
          )}
          {cta && (
            <a
              className="btn btn-lg bg-white text-secondary border-none hover:bg-base-200 shadow-xl shadow-black/20 px-8 animate-fade-in-up delay-300"
              href={cta.url}
            >
              {cta.linkText}
            </a>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="hero relative min-h-screen overflow-hidden">
      {backgroundImages.map((img, i) => (
        <div
          key={img.url}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img.url})`,
            opacity: i === activeIndex ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease-in-out`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,74,89,0.5) 0%, rgba(0,74,89,0.3) 50%, rgba(26,26,46,0.7) 100%)'
        }}
      />
      <div className="hero-content relative z-20 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-white/80 font-light animate-fade-in-up delay-200">
              {subtitle}
            </p>
          )}
          {cta && (
            <a
              className="btn btn-primary btn-lg shadow-lg shadow-primary/30 animate-fade-in-up delay-300"
              href={cta.url}
            >
              {cta.linkText}
            </a>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-scroll-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
}
