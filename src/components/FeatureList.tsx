import type { MappedFeatureList } from '../lib/mapContent';
import LucideIcon from './icons/LucideIcon';

export default function FeatureList({ title, items }: MappedFeatureList) {
  return (
    <section className="bg-base-200 py-16 px-4">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((feature) => (
          <div key={feature.id} className="text-center px-4">
            {feature.icon && (
              <div className="mb-4 flex justify-center text-primary">
                <LucideIcon name={feature.icon} size={48} strokeWidth={1.5} />
              </div>
            )}
            {feature.image && (
              <figure className="mb-4 flex justify-center">
                <img
                  src={feature.image.url}
                  alt={feature.image.title}
                  className="w-16 h-16 object-contain"
                />
              </figure>
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            {feature.description && (
              <p className="text-base-content/70">{feature.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
