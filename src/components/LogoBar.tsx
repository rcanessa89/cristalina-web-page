import type { MappedLogoBar } from '../lib/mapContent';

export default function LogoBar({ title, logos }: MappedLogoBar) {
  if (logos.length === 0) return null;

  const tripled = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 px-4 bg-base-100">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-base-content/80">
          {title}
        </h2>
      )}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-100 to-transparent z-10" />
        <div className="animate-marquee flex items-center gap-16 w-max">
          {tripled.map((logo, i) => (
            <img
              key={`${logo.url}-${i}`}
              src={logo.url}
              alt={logo.title}
              className="h-10 md:h-12 w-auto shrink-0 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
