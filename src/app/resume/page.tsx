import { Metadata } from 'next';
import ResumeClient from '../../components/ResumeClient';
import { SITE_CONFIG, SITE_URL, getCanonicalUrl, getOgImageUrl, generateBreadcrumbJsonLd } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: `Curriculum Vitae (CV) | ${SITE_CONFIG.shortName}`,
  description: `Official Curriculum Vitae of ${SITE_CONFIG.fullName} (${SITE_CONFIG.username}) — Full-Stack Software Developer focused on Laravel, Django, Python, APIs, databases, and modern web applications.`,
  alternates: {
    canonical: getCanonicalUrl('/resume'),
    languages: {
      'en': getCanonicalUrl('/resume'),
      'ar': getCanonicalUrl('/resume'),
      'x-default': getCanonicalUrl('/resume'),
    },
  },
  openGraph: {
    title: `Curriculum Vitae | ${SITE_CONFIG.fullName} (${SITE_CONFIG.username})`,
    description: `Full-Stack Software Developer CV, technical competencies, and academic credentials.`,
    url: getCanonicalUrl('/resume'),
    type: 'profile',
    firstName: 'Saeed',
    lastName: 'Bagnanh',
    username: SITE_CONFIG.username,
    gender: 'male',
    images: [
      {
        url: getOgImageUrl('/og-image.png'),
        secureUrl: getOgImageUrl('/og-image.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${SITE_CONFIG.fullName} Curriculum Vitae`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Curriculum Vitae | ${SITE_CONFIG.shortName} (${SITE_CONFIG.username})`,
    description: `Full-Stack Software Developer specializing in backend systems, APIs, and modern web applications.`,
    images: [getOgImageUrl('/og-image.png')],
    creator: `@${SITE_CONFIG.username}`,
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${getCanonicalUrl('/resume')}#webpage`,
        url: getCanonicalUrl('/resume'),
        name: `Curriculum Vitae — ${SITE_CONFIG.fullName}`,
        description: `CV detailing backend and full-stack software development experience of ${SITE_CONFIG.fullName}.`,
        mainEntity: {
          '@id': `${SITE_URL}/#person`,
        },
      },
      generateBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Resume', path: '/resume' },
      ]),
    ],
  };

  return (
    <>
      <script
        id="resume-profile-jsonld"
        key="resume-profile-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      <ResumeClient />
    </>
  );
}
