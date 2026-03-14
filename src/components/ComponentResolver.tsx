import type { MappedComponent } from '../lib/mapContent';
import Hero from './Hero';

const componentMap: Record<string, React.ComponentType<any>> = {
  heroComponent: Hero
};

interface ComponentResolverProps {
  components: MappedComponent[];
}

export default function ComponentResolver({
  components
}: ComponentResolverProps) {
  return (
    <>
      {components.map((component) => {
        const Component = componentMap[component.type];

        if (!Component) {
          console.warn(`No component found for content type: ${component.type}`);
          return null;
        }

        return <Component key={component.id} {...component} />;
      })}
    </>
  );
}
