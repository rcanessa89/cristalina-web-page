import type { MappedCardList } from '../lib/mapContent';

export default function CardList({ title, items }: MappedCardList) {
  return (
    <section className="py-16 px-4">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((card) => (
          <div key={card.id} className="card bg-base-100 shadow-md">
            {card.image && (
              <figure>
                <img
                  src={card.image.url}
                  alt={card.image.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
            )}
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              {card.description && <p>{card.description}</p>}
              {card.cta && (
                <div className="card-actions justify-end">
                  <a className="btn btn-primary" href={card.cta.url}>
                    {card.cta.linkText}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
