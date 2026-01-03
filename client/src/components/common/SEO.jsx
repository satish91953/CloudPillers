import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  type = 'website',
  serviceType,
  breadcrumbs,
}) => {
  const siteUrl = 'https://cloudpillers.com';
  const fullTitle = title ? `${title} | CloudPillers` : 'CloudPillers - Enterprise Cloud Services';
  const fullDescription = description || 'Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses.';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage || `${siteUrl}/og-image.jpg`;

  useEffect(() => {
    // Update document title (keep under 60 characters for optimal display)
    const optimizedTitle = fullTitle.length > 60 ? fullTitle.substring(0, 57) + '...' : fullTitle;
    document.title = optimizedTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // Primary Meta Tags
    updateMetaTag('title', optimizedTitle);
    // Meta description should be 150-160 characters for optimal CTR
    const optimizedDescription = fullDescription.length > 160 ? fullDescription.substring(0, 157) + '...' : fullDescription;
    updateMetaTag('description', optimizedDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Additional SEO meta tags
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('author', 'CloudPillers');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullCanonical, true);
    updateMetaTag('og:title', optimizedTitle, true);
    updateMetaTag('og:description', optimizedDescription, true);
    updateMetaTag('og:image', fullOgImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title || 'CloudPillers Services', true);
    updateMetaTag('og:site_name', 'CloudPillers', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', fullCanonical, true);
    updateMetaTag('twitter:title', optimizedTitle, true);
    updateMetaTag('twitter:description', optimizedDescription, true);
    updateMetaTag('twitter:image', fullOgImage, true);
    updateMetaTag('twitter:image:alt', title || 'CloudPillers Services', true);
    updateMetaTag('twitter:site', '@cloudpillers', true);
    updateMetaTag('twitter:creator', '@cloudpillers', true);

    // Organization Schema (always include)
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CloudPillers',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: 'Enterprise-grade DevOps, Security, Compliance, and Cost Optimization services for cloud-native businesses.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'contact@cloudpillers.com',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://twitter.com/cloudpillers',
        'https://linkedin.com/company/cloudpillers',
        'https://github.com/cloudpillers',
      ],
    };

    // Service Schema
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title || 'Cloud Services',
      description: optimizedDescription,
      provider: {
        '@type': 'Organization',
        name: 'CloudPillers',
        url: siteUrl,
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      serviceType: serviceType || 'Cloud Computing Services',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
      },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${siteUrl}${crumb.url}`,
      })),
    } : null;

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add Organization Schema
    const orgScript = document.createElement('script');
    orgScript.setAttribute('type', 'application/ld+json');
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Add Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.setAttribute('type', 'application/ld+json');
    serviceScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    // Add Breadcrumb Schema if provided
    if (breadcrumbSchema) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }
  }, [title, description, keywords, canonical, ogImage, type, serviceType, breadcrumbs, fullTitle, fullDescription, fullCanonical, fullOgImage]);

  return null;
};

export default SEO;

