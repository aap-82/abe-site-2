import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * /sitemap.xml — build-time XML sitemap.
 *
 * Every URL is derived from the four page content collections, so adding a
 * page (a new markdown entry under src/content/) lists it here with no
 * manual step. The page's `canonical` field is the <loc>; `lastUpdated` is
 * the <lastmod>.
 *
 * Pages flagged `noIndex: true` in frontmatter are excluded — the same flag
 * that drives the page's <meta name="robots"> tag, so the sitemap and the
 * page can never disagree about indexability.
 *
 * Internal routes (/styleguide, /sample) are not content-collection backed,
 * so they never appear here; robots.txt also disallows them.
 *
 * Astro renders this to a static /sitemap.xml at build time (output:
 * 'static'). The endpoint pattern: a `.ts` file whose name carries the
 * target extension, exporting a `GET` that returns a Response.
 */

const xmlEscape = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const [homepage, hubs, courseState, experts] = await Promise.all([
    getCollection('pages-homepage'),
    getCollection('pages-hub'),
    getCollection('pages-course-state'),
    getCollection('pages-expert'),
  ]);

  const urls = [...homepage, ...hubs, ...courseState, ...experts]
    .filter((entry) => !entry.data.noIndex)
    .map((entry) => ({
      loc: entry.data.canonical,
      lastmod: entry.data.lastUpdated,
    }))
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${xmlEscape(url.loc)}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
