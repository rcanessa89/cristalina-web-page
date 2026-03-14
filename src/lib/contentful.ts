import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV
    ? 'preview.contentful.com'
    : 'cdn.contentful.com',
});

export const getPageContent = async (slug: string, locale: 'es' | 'en') => {
  const entries = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
    locale
  });

  return entries.items[0]?.fields || null;
};

export const getNavigation = async (locale: 'es' | 'en') => {
  const entries = await contentfulClient.getEntries({
    content_type: 'layoutNavigation',
    limit: 1,
    locale,
    include: 2
  });

  return entries.items[0]?.fields || null;
};
