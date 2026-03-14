import type { MappedStats } from '../lib/mapContent';

export default function Stats({ title, items }: MappedStats) {
  return (
    <section className="py-16 px-4">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      )}
      <div className="stats stats-vertical lg:stats-horizontal w-full">
        {items.map((item) => (
          <div key={item.id} className="stat place-items-center">
            <div className="stat-title">{item.title}</div>
            <div className="stat-value">{item.value}</div>
            {item.description && (
              <div className="stat-desc">{item.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
