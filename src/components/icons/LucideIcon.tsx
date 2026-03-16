import type { LucideProps } from 'lucide-react';
import {
  Droplets,
  GlassWater,
  ShieldCheck,
  Wrench,
  Leaf,
  Gauge,
  FlaskConical,
  Filter,
  HeartPulse,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  Users
} from 'lucide-react';

// Add icons here as needed. Use the exact name as the key in Contentful's icon field.
// Browse available icons at: https://lucide.dev/icons
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Droplets,
  GlassWater,
  ShieldCheck,
  Wrench,
  Leaf,
  Gauge,
  FlaskConical,
  Filter,
  HeartPulse,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  Users
};

interface LucideIconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in icon map. Add it to LucideIcon.tsx`);
    return null;
  }

  return <Icon {...props} />;
}
