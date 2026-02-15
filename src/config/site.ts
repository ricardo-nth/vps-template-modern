/**
 * Global site configuration
 *
 * Update values here to customize for the project.
 * Used for base Schema.org structured data on every page.
 */

export interface SiteConfig {
  /** Human-friendly site name used in base Schema.org */
  name: string;
  /** Site-wide description */
  description: string;
}

export const siteConfig: SiteConfig = {
  name: 'Team Care Support & Accommodation',
  description:
    'Person-centred domiciliary care and supported living services for adults across Nottinghamshire. Building independence, not dependence.',
};

/**
 * Build base site-wide Schema.org objects that should appear on every page.
 *
 * Returns two nodes:
 *  - Organization
 *  - WebSite (minimal: no potentialAction to avoid clashing with page-level schema)
 */
export function getBaseSchemas(site: URL) {
  const siteUrl = site.toString().replace(/\/$/, '');
  const orgId = `${siteUrl}#organization`;
  const websiteId = `${siteUrl}#website`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: siteConfig.name,
      url: siteUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      url: siteUrl,
    },
  ];
}
