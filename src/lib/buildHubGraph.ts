/**
 * buildHubGraph — assembles the hub-page JSON-LD @graph.
 *
 * Per analysis §3.6 and locked decision #5, each archetype layout calls its
 * own schema builder; HubLayout calls this one. The hub graph carries four
 * connected nodes:
 *
 *   - CollectionPage   — the hub page itself, with an ItemList as mainEntity
 *                        (the state spoke pages it links down to).
 *   - BreadcrumbList   — the trail from Home to this hub.
 *   - FAQPage          — the same questions FAQSection renders on the page.
 *   - EducationalOrganization — ABE Education (defaults below).
 *
 * Returns a JSON string ready to drop into a <script type="application/ld+json">
 * via `set:html`. No hand-written JSON-LD in pages or layouts (decision #5).
 */

export interface HubGraphLink {
  name: string;
  url: string;
}

export interface HubGraphFaq {
  question: string;
  answer: string;
}

export interface HubGraphInput {
  /** Canonical URL of the hub page. */
  url: string;
  /** Hub page name, e.g. "Owner Builder Course". */
  name: string;
  /** Hub meta description / summary. */
  description: string;
  /** Breadcrumb trail, Home first, this hub last. */
  breadcrumbs: HubGraphLink[];
  /** State spoke pages the hub links down to — become the ItemList. */
  items: HubGraphLink[];
  /** FAQ entries — the same data FAQSection renders. */
  faqs?: HubGraphFaq[];
  /** Publisher organisation. Defaults to ABE Education. */
  organization?: HubGraphLink;
}

const DEFAULT_ORG: HubGraphLink = {
  name: 'ABE Education',
  url: 'https://www.abeeducation.edu.au',
};

export function buildHubGraph(input: HubGraphInput): string {
  const { url, name, description, breadcrumbs, items, faqs = [] } = input;
  const org = input.organization ?? DEFAULT_ORG;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description,
      isPartOf: { '@id': `${org.url}#organization` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          url: item.url,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${org.url}#organization`,
      name: org.name,
      url: org.url,
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
