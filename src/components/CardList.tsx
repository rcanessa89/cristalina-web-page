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
  const isFew = items.length <= 3;

  return (
    <section id={sectionId} className="py-20 px-4 bg-base-100">
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">
          {title}
        </h2>
      )}
      {isFew ? (
        <div className={`grid grid-cols-1 ${items.length === 1 ? 'max-w-lg' : 'md:grid-cols-2'} max-w-5xl mx-auto`}>
          {items.map((card, index) => (
            <div
              key={card.id}
              className={`group flex flex-col items-center text-center px-8 py-10 ${
                index < items.length - 1 ? 'md:border-r md:border-base-300/50' : ''
              }`}
            >
              {card.image && (
                <div className="relative mb-8">
                  <img
                    src={card.image.url}
                    alt={card.image.title}
                    className="h-72 md:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h3 className="text-2xl font-extrabold mb-3 text-secondary tracking-tight">
                {card.title}
              </h3>
              {card.description && (
                <p className="text-base-content/60 mb-6 leading-relaxed max-w-sm">
                  {card.description}
                </p>
              )}
              {card.cta && (
                <a
                  className="btn btn-primary group/btn mt-auto"
                  href={card.cta.url}
                >
                  {card.cta.linkText}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-16">
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
                <h3 className="text-3xl font-extrabold mb-4 text-secondary tracking-tight">{card.title}</h3>
                {card.description && (
                  <p className="text-lg text-base-content/60 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                )}
                {card.cta && (
                  <a className="btn btn-primary group/btn" href={card.cta.url}>
                    {card.cta.linkText}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
