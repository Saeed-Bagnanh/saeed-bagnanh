import { Metadata } from 'next';
import ContactClient from '../../components/ContactClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Contact & Architectural Consultation | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
  description: `Contact ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) about backend systems, API development, and full-stack software projects.`,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
    languages: {
      'en': getCanonicalUrl('/contact'),
      'ar': getCanonicalUrl('/contact'),
      'x-default': getCanonicalUrl('/contact'),
    },
  },
  openGraph: {
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Engineering Inquiry`,
    description: `Get in touch for backend systems, full-stack web platforms, API development, and database-backed applications.`,
    url: getCanonicalUrl('/contact'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `Contact ${SITE_CONFIG.fullName} — Engineering Consultation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_CONFIG.shortName} (${SITE_CONFIG.username}) | Engineering Consultation`,
    description: `Contact ${SITE_CONFIG.fullName} about backend, web, and mobile application development.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${getCanonicalUrl('/contact')}#webpage`,
        url: getCanonicalUrl('/contact'),
        name: `Contact & Direct Engineering Consultation — ${SITE_CONFIG.fullName}`,
        description: `Direct inquiry channel for backend systems, APIs, and full-stack software projects with ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="contact-page-jsonld"
        key="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
