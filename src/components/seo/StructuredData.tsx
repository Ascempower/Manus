interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleData {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

interface OrganizationData {
  name: string;
  description?: string;
  url: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}

type StructuredDataType = 'organization' | 'localBusiness' | 'article' | 'breadcrumb';

interface StructuredDataProps {
  type: StructuredDataType;
  data: BreadcrumbItem[] | ArticleData | OrganizationData | Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          name: 'Choice Insurance Hub',
          url: 'https://choiceinsurancehub.com',
          logo: 'https://choiceinsurancehub.com/assets/logos/main-logo-orange.png',
          description: 'Expert Health, Life & Medicare Insurance Solutions',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressRegion: ['IL', 'GA', 'TX', 'AL', 'OH', 'KY', 'MS', 'SC'],
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'English',
          },
          sameAs: [
            // Add social media URLs when available
          ],
          ...data,
        };

      case 'localBusiness':
        return {
          ...baseSchema,
          '@type': 'InsuranceAgency',
          name: 'Choice Insurance Hub',
          url: 'https://choiceinsurancehub.com',
          logo: 'https://choiceinsurancehub.com/assets/logos/main-logo-orange.png',
          description:
            'Independent insurance agency specializing in Medicare, Life & Health insurance',
          priceRange: '$$',
          areaServed: [
            'Illinois',
            'Georgia',
            'Texas',
            'Alabama',
            'Ohio',
            'Kentucky',
            'Mississippi',
            'South Carolina',
          ],
          serviceType: [
            'Medicare Supplement Insurance',
            'Medicare Advantage Plans',
            'Life Insurance',
            'Health Insurance',
            'Final Expense Insurance',
            'Annuities',
            'Hospital Indemnity Insurance',
          ],
          ...data,
        };

      case 'article':
        return {
          ...baseSchema,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Choice Insurance Hub',
            logo: {
              '@type': 'ImageObject',
              url: 'https://choiceinsurancehub.com/assets/logos/main-logo-orange.png',
            },
          },
          ...data,
        };

      case 'breadcrumb':
        return {
          ...baseSchema,
          '@type': 'BreadcrumbList',
          itemListElement: (data as BreadcrumbItem[]).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return { ...baseSchema, ...data };
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Convenience components for common schemas
export function OrganizationSchema() {
  return <StructuredData type="organization" data={{}} />;
}

export function LocalBusinessSchema() {
  return <StructuredData type="localBusiness" data={{}} />;
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return (
    <StructuredData
      type="article"
      data={{
        headline,
        description,
        author: {
          '@type': 'Person',
          name: author,
        },
        datePublished,
        dateModified: dateModified || datePublished,
        image: image || 'https://choiceinsurancehub.com/images/og-image.jpg',
      }}
    />
  );
}
