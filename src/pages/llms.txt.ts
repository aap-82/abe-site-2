import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * /llms.txt — build-time llms.txt (see llmstxt.org).
 *
 * A concise, link-first map of the site for large language models and AI
 * answer engines. The link lists are derived from the four page content
 * collections, so the file stays current as pages are added with no manual
 * step. Pages flagged `noIndex: true` in frontmatter are excluded, matching
 * /sitemap.xml and the page's own robots meta tag.
 *
 * Astro renders this to a static /llms.txt at build time. Endpoint pattern:
 * a `.ts` file whose name carries the target extension, exporting a `GET`
 * that returns a Response.
 */

type PageEntry = {
  data: {
    title: string;
    description: string;
    canonical: string;
    slug: string;
    noIndex: boolean;
  };
};

/** Drop pages held out of indexing. */
const live = (entries: PageEntry[]): PageEntry[] =>
  entries.filter((entry) => !entry.data.noIndex);

/** Stable alphabetical order so the file output is deterministic. */
const bySlug = (a: PageEntry, b: PageEntry): number =>
  a.data.slug.localeCompare(b.data.slug);

/** One markdown list item: `- [Title](url): description`. */
const toLink = (entry: PageEntry): string =>
  `- [${entry.data.title}](${entry.data.canonical}): ${entry.data.description}`;

export const GET: APIRoute = async () => {
  const [homepage, hubs, courseState, experts] = await Promise.all([
    getCollection('pages-homepage'),
    getCollection('pages-hub'),
    getCollection('pages-course-state'),
    getCollection('pages-expert'),
  ]);

  const mainPages = [...live(homepage), ...live(hubs).sort(bySlug)];
  const statePages = live(courseState).sort(bySlug);
  const people = live(experts).sort(bySlug);

  const body = `# ABE Education

> ABE Education is an Australian online training provider specialising in nationally recognised construction-industry courses, including Owner Builder permit education and White Card general construction induction training.

ABE Education delivers approved construction training online to students across New South Wales, Queensland, Western Australia, Tasmania and the Australian Capital Territory. Some courses are ABE's own and are recognised directly by the relevant state regulator; others are delivered with partner registered training organisations (RTOs) that issue the nationally recognised qualification. Each course page names the responsible regulator, states whether a partner RTO is involved, and records the date the page was last reviewed.

## Main pages

${mainPages.map(toLink).join('\n')}

## Course pages by state

${statePages.map(toLink).join('\n')}

## Course developers and reviewers

${people.map(toLink).join('\n')}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
