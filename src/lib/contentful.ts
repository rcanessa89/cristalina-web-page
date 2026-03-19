import { createClient } from 'contentful';

const usePreview =
  import.meta.env.DEV || import.meta.env.CONTENTFUL_USE_PREVIEW === 'true';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: usePreview
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: usePreview ? 'preview.contentful.com' : 'cdn.contentful.com',
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT || 'staging'
});

export const getPageContent = async (slug: string, locale: 'es' | 'en') => {
  const entries = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
    locale,
    include: 3
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

export const getFooter = async (locale: 'es' | 'en') => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'footerLayout',
      limit: 1,
      locale,
      include: 2
    });

    return entries.items[0]?.fields || null;
  } catch {
    return null;
  }
};
