/**
 * buildCourseGraph — assembles the course-state-page JSON-LD @graph.
 *
 * Per analysis §1 and locked decision #5, CoursePageLayout calls this
 * builder. The course graph carries:
 *
 *   - Course        — the course itself, with its provider, and an optional
 *                     AggregateRating.
 *   - BreadcrumbList — the trail from Home to this course page.
 *   - FAQPage       — the same questions FAQSection renders on the page.
 *   - EducationalOrganization — the publisher (ABE Education by default).
 *
 * Returns a JSON string for a <script type="application/ld+json"> via
 * `set:html`. No hand-written JSON-LD in pages (decision #5).
 */

export interface CourseGraphLink {
  name: string;
  url: string;
}

export interface CourseGraphFaq {
  question: string;
  answer: string;
}

export interface CourseGraphInput {
  /** Canonical URL of the course page. */
  url: string;
  /** Course name, e.g. "NSW Owner Builder Course". */
  courseName: string;
  /** Course description / summary. */
  description: string;
  /** The training provider — the RTO that delivers, or ABE if direct. */
  provider: CourseGraphLink;
  /** Breadcrumb trail, Home first, this page last. */
  breadcrumbs: CourseGraphLink[];
  /** FAQ entries — the same data FAQSection renders. */
  faqs?: CourseGraphFaq[];
  /** Optional aggregate rating. */
  aggregateRating?: { ratingValue: number; reviewCount: number };
  /** Publisher organisation. Defaults to ABE Education. */
  organization?: CourseGraphLink;
}

const DEFAULT_ORG: CourseGraphLink = {
  name: 'ABE Education',
  url: 'https://www.abeeducation.edu.au',
};

export function buildCourseGraph(input: CourseGraphInput): string {
  const { url, courseName, description, provider, breadcrumbs, faqs = [] } = input;
  const org = input.organization ?? DEFAULT_ORG;

  const course: Record<string, unknown> = {
    '@type': 'Course',
    '@id': `${url}#course`,
    name: courseName,
    description,
    url,
    provider: {
      '@type': 'EducationalOrganization',
      name: provider.name,
      url: provider.url,
    },
  };

  if (input.aggregateRating) {
    course.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: input.aggregateRating.ratingValue,
      reviewCount: input.aggregateRating.reviewCount,
    };
  }

  const graph: Record<string, unknown>[] = [
    course,
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
