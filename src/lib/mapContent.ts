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
}

export type MappedComponent = MappedHero;

export interface MappedPage {
  title: string;
  slug: string;
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
      : []
  };
}

const mappers: Record<string, (entry: Entry) => MappedComponent> = {
  heroComponent: mapHero
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

export function mapPage(fields: Record<string, any>): MappedPage {
  const content = fields.content ?? [];

  return {
    title: fields.title ?? '',
    slug: fields.slug ?? '',
    components: Array.isArray(content)
      ? (content.map(mapEntry).filter(Boolean) as MappedComponent[])
      : []
  };
}
