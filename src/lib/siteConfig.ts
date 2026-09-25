/**
 * Centralized Site Configuration & SEO Entity Constants
 * Single source of truth for domain, canonical URLs, identity graph, and schema generation.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://saeed-bagnanh.vercel.app'
).replace(/\/+$/, '');

export const SITE_CONFIG = {
  name: 'Saeed Bagnanh',
  fullName: 'Saeed Mohammed Omer Ba-gnanh',
  fullNameAr: 'سعيد محمد عمر باقنانة',
  shortName: 'Saeed Bagnanh',
  shortNameAr: 'سعيد باقنانة',
  username: 'Saeed-Bagnanh',
  
  title: 'Full-Stack Software Developer',
  titleAr: 'مطور برمجيات شامل',
  
  tagline: 'Backend systems, APIs, and dependable full-stack products',
  taglineAr: 'أنظمة خلفية وواجهات برمجية ومنتجات شاملة موثوقة',
  
  description: 'Portfolio of Saeed Mohammed Omer Ba-gnanh, a full-stack software developer from Mukalla, Yemen, experienced in backend systems, web applications, APIs, Laravel, Django, ASP.NET, and Flutter.',
  descriptionAr: 'الملف المهني لسعيد محمد عمر باقنانة، مطور برمجيات شامل من المكلا في اليمن، لديه خبرة في الأنظمة الخلفية وتطبيقات الويب وواجهات البرمجة وLaravel وDjango وASP.NET وFlutter.',
  
  location: 'Al-Mukalla, Hadhramaut, Yemen',
  locationAr: 'المكلا، حضرموت، اليمن',
  country: 'Yemen',
  countryCode: 'YE',
  
  emails: ['saeed344422@gmail.com'],
  phones: ['+967 775057438'],
  
  agency: '',
  agencyUrl: '',
  repositoryUrl: 'https://github.com/Saeed-Bagnanh/saeed-bagnanh',
  
  socials: {
    github: 'https://github.com/Saeed-Bagnanh',
    linkedin: 'https://www.linkedin.com/in/saeed-bagnanh-36b077289',
  },
  
  aliases: ['Saeed Mohammed Omer Ba-gnanh', 'Saeed Bagnanh', 'Saeed-Bagnanh'],
  
  aliasesAr: ['سعيد محمد عمر باقنانة', 'سعيد باقنانة'],
  
  coreSkills: [
    'Laravel',
    'Vue.js 3',
    'Django',
    'FastAPI',
    'ASP.NET Core',
    'Flutter',
    'Dart',
    'TypeScript',
    'PHP',
    '.NET Core',
    'C#',
    'SQL Server',
    'PostgreSQL',
    'MySQL',
    'REST APIs',
    'Flutter',
    'GetX',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'Git',
    'GitHub',
  ],
};

export function getAbsoluteUrl(path: string = ''): string {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

export function getCanonicalUrl(path: string = ''): string {
  return getAbsoluteUrl(path);
}

export function getOgImageUrl(imagePath?: string): string {
  if (imagePath) {
    return getAbsoluteUrl(imagePath);
  }
  return getAbsoluteUrl('/og-image.png');
}

/**
 * Generates the Root Person and WebSite Schema.org Graph
 */
export function generateRootJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_CONFIG.fullName,
        alternateName: [...SITE_CONFIG.aliases, ...SITE_CONFIG.aliasesAr],
        jobTitle: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        url: SITE_URL,
        image: getAbsoluteUrl('/profile.png'),
        email: `mailto:${SITE_CONFIG.emails[0]}`,
        telephone: SITE_CONFIG.phones[0],
        gender: 'Male',
        nationality: {
          '@type': 'Country',
          name: SITE_CONFIG.country,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Al-Mukalla',
          addressRegion: 'Hadhramaut',
          addressCountry: SITE_CONFIG.country,
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Al-Ahgaff University',
          url: 'https://ahgaff.edu',
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: SITE_CONFIG.title,
          occupationalCategory: '15-1252.00',
          skills: SITE_CONFIG.coreSkills.join(', '),
        },
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'Arabic',
            alternateName: 'ar',
          },
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
        ],
        sameAs: [
          SITE_CONFIG.socials.github,
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.repositoryUrl,
          'https://dhad.me',
          'https://muqtabasat.com',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: `${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Official Portfolio`,
        alternateName: [
          'Saeed Bagnanh Portfolio',
          'Saeed Mohammed Omer Ba-gnanh Portfolio',
          'موقع سعيد باقنانة',
        ],
        description: SITE_CONFIG.description,
        inLanguage: ['en-US', 'ar-YE'],
        publisher: {
          '@id': personId,
        },
      },
    ],
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}
