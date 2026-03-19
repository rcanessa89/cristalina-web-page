// Slug mapping between ES and EN for hreflang alternates
const slugMap: Record<string, Record<string, string>> = {
  es: {
    inicio: 'home',
    'water-tec-premium': 'water-tec-premium',
    'water-tec-pro': 'water-tec-pro',
    'como-funciona': 'how-it-works',
    nosotros: 'about-us',
    contacto: 'contact'
  },
  en: {
    home: 'inicio',
    'water-tec-premium': 'water-tec-premium',
    'water-tec-pro': 'water-tec-pro',
    'how-it-works': 'como-funciona',
    'about-us': 'nosotros',
    contact: 'contacto'
  }
};

export function getAlternateSlug(
  slug: string,
  fromLocale: 'es' | 'en'
): string {
  return slugMap[fromLocale]?.[slug] ?? slug;
}

// Default meta descriptions per page (fallback when Contentful field is empty)
const defaultDescriptions: Record<string, Record<string, string>> = {
  es: {
    inicio:
      'Cristalina ofrece soluciones de tratamiento y purificacion de agua en Costa Rica. Sistemas Water-Tec para hogares y empresas.',
    'water-tec-premium':
      'Water-Tec Premium: sistema avanzado de purificacion de agua para el hogar con tecnologia de filtracion multi-etapa.',
    'water-tec-pro':
      'Water-Tec Pro: solucion de tratamiento de agua de grado comercial para empresas y entornos de alta demanda.',
    'como-funciona':
      'Descubra como funcionan nuestros sistemas de purificacion de agua Water-Tec con tecnologia avanzada de filtracion.',
    nosotros:
      'Conozca Cristalina, empresa costarricense dedicada al tratamiento y purificacion de agua desde San Jose, Costa Rica.',
    contacto:
      'Contacte a Cristalina para una cotizacion de su sistema de purificacion de agua. Atencion personalizada en Costa Rica.'
  },
  en: {
    home: 'Cristalina offers water treatment and purification solutions in Costa Rica. Water-Tec systems for homes and businesses.',
    'water-tec-premium':
      'Water-Tec Premium: advanced home water purification system with multi-stage filtration technology.',
    'water-tec-pro':
      'Water-Tec Pro: commercial-grade water treatment solution for businesses and high-demand environments.',
    'how-it-works':
      'Discover how our Water-Tec water purification systems work with advanced filtration technology.',
    'about-us':
      'Learn about Cristalina, a Costa Rican company dedicated to water treatment and purification from San Jose, Costa Rica.',
    contact:
      'Contact Cristalina for a water purification system quote. Personalized service in Costa Rica.'
  }
};

export function getDefaultDescription(
  slug: string,
  locale: 'es' | 'en'
): string {
  return (
    defaultDescriptions[locale]?.[slug] ??
    (locale === 'es'
      ? 'Cristalina - Soluciones de tratamiento de agua en Costa Rica.'
      : 'Cristalina - Water treatment solutions in Costa Rica.')
  );
}
