import type { MappedStats } from '../lib/mapContent';

export default function Stats({ title, items }: MappedStats) {
  return (
    <section className="bg-neutral text-neutral-content py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        )}
        <div className="stats stats-vertical lg:stats-horizontal w-full bg-neutral text-neutral-content">
        {items.map((item) => (
          <div key={item.id} className="stat place-items-center">
            <div className="stat-title text-neutral-content/70">{item.title}</div>
            <div className="stat-value text-primary">{item.value}</div>
            {item.description && (
              <div className="stat-desc text-neutral-content/60">{item.description}</div>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
