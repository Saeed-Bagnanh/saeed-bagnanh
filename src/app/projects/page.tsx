import { Metadata } from 'next';
import ProjectsClient from '../../components/ProjectsClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Engineering Projects & Architecture Case Studies | ${SITE_CONFIG.shortName}`,
  description: `Explore software projects by ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}), covering backend systems, APIs, databases, and full-stack applications.`,
  alternates: {
    canonical: getCanonicalUrl('/projects'),
    languages: {
      'en': getCanonicalUrl('/projects'),
      'ar': getCanonicalUrl('/projects'),
      'x-default': getCanonicalUrl('/projects'),
    },
  },
  openGraph: {
    title: `Engineering Projects & Case Studies | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Software case studies spanning backend development, APIs, databases, and full-stack applications.`,
    url: getCanonicalUrl('/projects'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Engineering Projects and Architecture Case Studies`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Projects & Case Studies | ${SITE_CONFIG.shortName}`,
    description: `Software case studies in Laravel, Django, Python, ASP.NET, JavaScript, TypeScript, and API development.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ProjectsPage() {
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${getCanonicalUrl('/projects')}#webpage`,
        url: getCanonicalUrl('/projects'),
        name: 'Web Platforms & Software Projects',
        description: `Portfolio of web platforms and software applications developed by ${SITE_CONFIG.fullName}.`,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="projects-collection-jsonld"
        key="projects-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}
