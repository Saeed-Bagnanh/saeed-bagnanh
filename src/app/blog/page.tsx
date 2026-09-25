import { Metadata } from 'next';
import BlogListClient from '../../components/BlogListClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
  description: `Technical notes on backend development, API design, databases, and full-stack software by ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}).`,
  alternates: {
    canonical: getCanonicalUrl('/blog'),
    languages: {
      'en': getCanonicalUrl('/blog'),
      'ar': getCanonicalUrl('/blog'),
      'x-default': getCanonicalUrl('/blog'),
    },
  },
  openGraph: {
    title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
    description: `Technical articles and practical guides on backend systems, APIs, databases, and full-stack software delivery.`,
    url: getCanonicalUrl('/blog'),
    type: 'website',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Engineering Blog`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Engineering Blog & Technical Insights | ${SITE_CONFIG.shortName}`,
    description: `Articles on backend development, web applications, and software engineering.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${getCanonicalUrl('/blog')}#blog`,
        url: getCanonicalUrl('/blog'),
        name: `${SITE_CONFIG.shortName} Engineering Blog`,
        description: 'Technical insights covering Laravel, Django, Python, APIs, databases, and full-stack development.',
        publisher: {
          '@id': `${SITE_URL}/#website`,
        },
        author: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="blog-collection-jsonld"
        key="blog-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogListClient />
    </>
  );
}
