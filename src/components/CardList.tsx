import type { MappedCardList } from '../lib/mapContent';
import { ArrowRight } from 'lucide-react';

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CardList({ title, items }: MappedCardList) {
  const sectionId = title ? slugify(title) : undefined;

  return (
    <section id={sectionId} className="py-20 px-4 bg-base-100">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>
      )}
      <div className="max-w-5xl mx-auto space-y-24">
        {items.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}
          >
            {card.image && (
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={card.image.url}
                  alt={card.image.title}
                  className="h-96 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4 text-secondary">{card.title}</h3>
              {card.description && (
                <p className="text-lg text-base-content/60 mb-6 leading-relaxed">
                  {card.description}
                </p>
              )}
              {card.cta && (
                <a
                  className="btn btn-primary group/btn"
                  href={card.cta.url}
                >
                  {card.cta.linkText}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
