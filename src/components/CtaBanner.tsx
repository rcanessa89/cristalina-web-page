import type { MappedCtaBanner } from '../lib/mapContent';

export default function CtaBanner({
  title,
  subtitle,
  cta,
  backgroundImage
}: MappedCtaBanner) {
  return (
    <section
      className="hero min-h-64 bg-primary text-primary-content"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage.url})` }
          : undefined
      }
    >
      {backgroundImage && <div className="hero-overlay bg-primary/80"></div>}
      <div className="hero-content text-center relative z-10">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="mb-6">{subtitle}</p>}
          {cta && (
            <a className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary" href={cta.url}>
              {cta.linkText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
