import type { MappedStats } from '../lib/mapContent';

export default function Stats({ title, items }: MappedStats) {
  return (
    <section className="relative bg-neutral text-neutral-content py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #01a89e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #31cdcf 0%, transparent 50%)'
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 tracking-tight">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`text-center relative animate-fade-in-up delay-${(index + 1) * 100} ${
                index < items.length - 1 ? 'md:border-r md:border-neutral-content/10' : ''
              }`}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
                {item.value}
              </div>
              <div className="text-lg font-semibold text-neutral-content/90 mb-1">
                {item.title}
              </div>
              {item.description && (
                <div className="text-sm text-neutral-content/50">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
