import type { MappedFeatureList } from '../lib/mapContent';
import LucideIcon from './icons/LucideIcon';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function FeatureList({ title, items }: MappedFeatureList) {
  const sectionId = title ? slugify(title) : undefined;

  return (
    <section id={sectionId} className="py-20 px-4 bg-base-200">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((feature, index) => (
          <div
            key={feature.id}
            className={`group bg-base-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(index % 3 + 1) * 100}`}
          >
            {feature.icon && (
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <LucideIcon name={feature.icon} size={28} strokeWidth={1.5} className="text-primary" />
              </div>
            )}
            {feature.image && (
              <figure className="mb-5 flex justify-start">
                <img
                  src={feature.image.url}
                  alt={feature.image.title}
                  className="w-14 h-14 object-contain"
                />
              </figure>
            )}
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            {feature.description && (
              <p className="text-base-content/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
