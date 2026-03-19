import type { Entry, Asset } from 'contentful';

// --- Mapped types (flat, easy to consume in components) ---

export interface MappedAsset {
  url: string;
  title: string;
  width?: number;
  height?: number;
  contentType?: string;
}

export interface MappedLink {
  id: string;
  type: 'link';
  linkText: string;
  url?: string;
  children?: MappedLink[];
}

export interface MappedHero {
  id: string;
  type: 'heroComponent';
  title?: string;
  subtitle?: string;
  cta?: MappedLink;
  image?: MappedAsset;
  imageReverse?: boolean;
  backgroundImages: MappedAsset[];
  variant?: 'full' | 'compact';
}

export interface MappedStatItem {
  id: string;
  type: 'stat';
  title: string;
  value: string;
  description?: string;
}

export interface MappedStats {
  id: string;
  type: 'stats';
  title?: string;
  items: MappedStatItem[];
}

export interface MappedCard {
  id: string;
  type: 'card';
  title: string;
  description?: string;
  image?: MappedAsset;
  cta?: MappedLink;
}

export interface MappedCardList {
  id: string;
  type: 'cardList';
  title?: string;
  items: MappedCard[];
}

export interface MappedFeature {
  id: string;
  type: 'feature';
  title: string;
  description?: string;
  icon?: string;
  image?: MappedAsset;
}

export interface MappedFeatureList {
  id: string;
  type: 'featuredList';
  title?: string;
  items: MappedFeature[];
}

export interface MappedCtaBanner {
  id: string;
  type: 'ctaBanner';
  title: string;
  subtitle?: string;
  cta?: MappedLink;
  backgroundImage?: MappedAsset;
}

export interface MappedLogoBar {
  id: string;
  type: 'logoBar';
  title?: string;
  logos: MappedAsset[];
}

export type MappedComponent = MappedHero | MappedStats | MappedCardList | MappedFeatureList | MappedCtaBanner | MappedLogoBar;

export interface MappedPage {
  title: string;
  slug: string;
  metaDescription?: string;
  ogImage?: MappedAsset;
  components: MappedComponent[];
}

// --- Mapping helpers ---

function isAsset(value: unknown): value is Asset {
  return (
    typeof value === 'object' &&
    value !== null &&
    'sys' in value &&
    (value as any).sys?.type === 'Asset'
  );
}

function isEntry(value: unknown): value is Entry {
  return (
    typeof value === 'object' &&
    value !== null &&
    'sys' in value &&
    (value as any).sys?.type === 'Entry'
  );
}

function mapAsset(asset: Asset): MappedAsset {
  const file = asset.fields?.file as any;
  const details = file?.details?.image;

  return {
    url: file?.url ? `https:${file.url}` : '',
    title: (asset.fields?.title as string) ?? '',
    width: details?.width,
    height: details?.height,
    contentType: file?.contentType
  };
}

function mapLink(entry: Entry): MappedLink {
  const fields = entry.fields as Record<string, any>;
  const children = Array.isArray(fields.children)
    ? fields.children.filter(isEntry).map(mapLink)
    : undefined;

  return {
    id: entry.sys.id,
    type: 'link',
    linkText: fields.linkText ?? '',
    url: fields.url,
    children: children?.length ? children : undefined
  };
}

function mapHero(entry: Entry): MappedHero {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'heroComponent',
    title: fields.title,
    subtitle: fields.subtitle,
    cta: isEntry(fields.cta) ? mapLink(fields.cta) : undefined,
    image: isAsset(fields.image) ? mapAsset(fields.image) : undefined,
    imageReverse: fields.imageReverse,
    backgroundImages: Array.isArray(fields.backgroundImage)
      ? fields.backgroundImage.filter(isAsset).map(mapAsset)
      : [],
    variant: fields.variant ?? 'full'
  };
}

function mapStatItem(entry: Entry): MappedStatItem {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'stat',
    title: fields.title ?? '',
    value: fields.value ?? '',
    description: fields.description
  };
}

function mapStats(entry: Entry): MappedStats {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'stats',
    title: fields.title,
    items: Array.isArray(fields.items)
      ? fields.items.filter(isEntry).map(mapStatItem)
      : []
  };
}

function mapCard(entry: Entry): MappedCard {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'card',
    title: fields.title ?? '',
    description: fields.description,
    image: isAsset(fields.image) ? mapAsset(fields.image) : undefined,
    cta: isEntry(fields.cta) ? mapLink(fields.cta) : undefined
  };
}

function mapCardList(entry: Entry): MappedCardList {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'cardList',
    title: fields.title,
    items: Array.isArray(fields.items)
      ? fields.items.filter(isEntry).map(mapCard)
      : []
  };
}

function mapFeature(entry: Entry): MappedFeature {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'feature',
    title: fields.title ?? '',
    description: fields.description,
    icon: fields.icon,
    image: isAsset(fields.image) ? mapAsset(fields.image) : undefined
  };
}

function mapFeatureList(entry: Entry): MappedFeatureList {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'featuredList',
    title: fields.title,
    items: Array.isArray(fields.items)
      ? fields.items.filter(isEntry).map(mapFeature)
      : []
  };
}

function mapCtaBanner(entry: Entry): MappedCtaBanner {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'ctaBanner',
    title: fields.title ?? '',
    subtitle: fields.subtitle,
    cta: isEntry(fields.cta) ? mapLink(fields.cta) : undefined,
    backgroundImage: isAsset(fields.backgroundImage)
      ? mapAsset(fields.backgroundImage)
      : undefined
  };
}

function mapLogoBar(entry: Entry): MappedLogoBar {
  const fields = entry.fields as Record<string, any>;
  return {
    id: entry.sys.id,
    type: 'logoBar',
    title: fields.title,
    logos: Array.isArray(fields.logos)
      ? fields.logos.filter(isAsset).map(mapAsset)
      : []
  };
}

const mappers: Record<string, (entry: Entry) => MappedComponent> = {
  heroComponent: mapHero,
  stats: mapStats,
  cardList: mapCardList,
  featuredList: mapFeatureList,
  ctaBanner: mapCtaBanner,
  logoBar: mapLogoBar
};

function mapEntry(entry: Entry): MappedComponent | null {
  const contentType = entry.sys.contentType.sys.id;
  const mapper = mappers[contentType];

  if (!mapper) {
    console.warn(`No mapper for content type: ${contentType}`);
    return null;
  }

  return mapper(entry);
}

export interface MappedNavigation {
  links: MappedLink[];
}

export function mapNavigation(fields: Record<string, any>): MappedNavigation {
  const links = fields.links ?? [];

  return {
    links: Array.isArray(links) ? links.filter(isEntry).map(mapLink) : []
  };
}

export interface MappedFooter {
  companyName: string;
  description?: string;
  links?: MappedLink[];
  email?: string;
  phone?: string;
  address?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}

export function mapFooter(fields: Record<string, any>): MappedFooter {
  const links = fields.links ?? [];

  return {
    companyName: fields.companyName ?? '',
    description: fields.description,
    links: Array.isArray(links) ? links.filter(isEntry).map(mapLink) : undefined,
    email: fields.email,
    phone: fields.phone,
    address: fields.address,
    facebook: fields.facebook,
    instagram: fields.instagram,
    whatsapp: fields.whatsapp
  };
}

export function mapPage(fields: Record<string, any>): MappedPage {
  const content = fields.content ?? [];

  return {
    title: fields.title ?? '',
    slug: fields.slug ?? '',
    metaDescription: fields.metaDescription,
    ogImage: isAsset(fields.ogImage) ? mapAsset(fields.ogImage) : undefined,
    components: Array.isArray(content)
      ? (content.map(mapEntry).filter(Boolean) as MappedComponent[])
      : []
  };
}
