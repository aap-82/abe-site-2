/**
 * buildHomepageGraph — assembles the homepage JSON-LD @graph.
 *
 * Per analysis §1 and locked decision #5, HomepageLayout calls this builder.
 * The homepage graph carries:
 *
 *   - WebSite                — the site itself.
 *   - EducationalOrganization — the publisher (ABE Education).
 *   - SiteNavigationElement  — one node per primary hub the homepage links
 *                              down to (the hub-of-hubs navigation).
 *
 * Returns a JSON string for a <script type="application/ld+json"> via
 * `set:html`. No hand-written JSON-LD in pages (decision #5).
 */

export interface HomepageGraphLink {
  name: string;
  url: string;
}

export interface HomepageGraphInput {
  /** Site root URL. */
  url: string;
  /** Site / organisation name, e.g. "ABE Education". */
  name: string;
  /** Site description. */
  description: string;
  /** Primary hub links — become SiteNavigationElement nodes. */
  navItems: HomepageGraphLink[];
  /** Publisher organisation. Defaults to ABE Education. */
  organization?: HomepageGraphLink;
}

const DEFAULT_ORG: HomepageGraphLink = {
  name: 'ABE Education',
  url: 'https://www.abeeducation.edu.au',
};

export function buildHomepageGraph(input: HomepageGraphInput): string {
  const { url, name, description, navItems } = input;
  const org = input.organization ?? DEFAULT_ORG;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${url}#website`,
      url,
      name,
      description,
      publisher: { '@id': `${org.url}#organization` },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${org.url}#organization`,
      name: org.name,
      url: org.url,
    },
    ...navItems.map((item, i) => ({
      '@type': 'SiteNavigationElement',
      '@id': `${url}#nav-${i + 1}`,
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  ];

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
