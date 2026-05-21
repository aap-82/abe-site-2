/**
 * buildPersonGraph — assembles the expert-profile-page JSON-LD @graph.
 *
 * Per locked decision #5, ExpertPageLayout calls this builder. The person
 * graph carries:
 *
 *   - Person        — the expert, with jobTitle, worksFor, knowsAbout
 *                     (their verified credentials), and an optional image
 *                     and sameAs.
 *   - BreadcrumbList — the trail from Home to this profile page.
 *   - EducationalOrganization — the publisher (ABE Education by default).
 *
 * Returns a JSON string for a <script type="application/ld+json"> via
 * `set:html`. No hand-written JSON-LD in pages (decision #5).
 */

export interface PersonGraphLink {
  name: string;
  url: string;
}

export interface PersonGraphInput {
  /** Canonical URL of the profile page. */
  url: string;
  /** The expert's full name. */
  name: string;
  /** Job title, e.g. "Compliance Reviewer, ABE Education". */
  jobTitle: string;
  /** Short profile description / summary. */
  description: string;
  /** Verified credentials — become schema knowsAbout. */
  credentials: string[];
  /** Breadcrumb trail, Home first, this page last. */
  breadcrumbs: PersonGraphLink[];
  /** Optional external profile URLs (LinkedIn, etc.). */
  sameAs?: string[];
  /** Optional headshot image URL. */
  image?: string;
  /** Publisher organisation. Defaults to ABE Education. */
  organization?: PersonGraphLink;
}

const DEFAULT_ORG: PersonGraphLink = {
  name: 'ABE Education',
  url: 'https://www.abeeducation.edu.au',
};

export function buildPersonGraph(input: PersonGraphInput): string {
  const { url, name, jobTitle, description, credentials, breadcrumbs } = input;
  const org = input.organization ?? DEFAULT_ORG;

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': `${url}#person`,
    name,
    jobTitle,
    description,
    url,
    worksFor: {
      '@type': 'EducationalOrganization',
      name: org.name,
      url: org.url,
    },
    knowsAbout: credentials,
  };

  if (input.sameAs && input.sameAs.length > 0) {
    person.sameAs = input.sameAs;
  }
  if (input.image) {
    person.image = input.image;
  }

  const graph: Record<string, unknown>[] = [
    person,
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

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
