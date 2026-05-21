import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Content Collection schemas for the ABE site.
 *
 * Astro 6 API — each collection uses a `loader` instead of `type: 'content'`.
 * The `glob` loader scans the named folder for markdown files and validates
 * each one against the schema. Missing folders are fine — the loader simply
 * finds zero entries.
 *
 * Mirrors the locked frontmatter contract in
 * ../component-library-analysis.md §6.
 *
 * Locked API decisions reflected here:
 *   #2 — Astro Content Collections (this file)
 *   #6 — lastUpdated is required, ISO date string, never git-derived
 *   #8 — rtoPartner is a single object (not array)
 */

// -- Shared field shapes ------------------------------------------------------

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Must be ISO date YYYY-MM-DD');

const rtoPartner = z.object({
  name: z.string(),
  code: z.string(),               // e.g. "RTO 91826"
  url: z.string().url(),          // training.gov.au listing
});

const reviewer = z.object({
  name: z.string(),
  date: isoDate,
  profileSlug: z.string(),        // e.g. "warwick-smith"
});

const seoFields = {
  title: z.string().min(20).max(70),
  description: z.string().min(120).max(170),
  slug: z.string(),
  canonical: z.string().url(),
  lastUpdated: isoDate,
  ogImage: z.string().optional(),
};

// -- Collections --------------------------------------------------------------

const pagesHomepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages-homepage' }),
  schema: z.object({
    ...seoFields,
    pageType: z.literal('homepage'),
  }),
});

const pagesHub = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages-hub' }),
  schema: z.object({
    ...seoFields,
    pageType: z.literal('hub'),
    reviewer: reviewer.optional(),
  }),
});

const pagesCourseState = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages-course-state' }),
  schema: z.object({
    ...seoFields,
    pageType: z.literal('course-state'),
    rtoPartner: rtoPartner.optional(),
    reviewer: reviewer.optional(),
    state: z.enum(['NSW', 'QLD', 'WA', 'TAS', 'ACT']),
    courseStream: z.enum(['owner-builder', 'white-card', 'cpd']),
  }),
});

const pagesExpert = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages-expert' }),
  schema: z.object({
    ...seoFields,
    pageType: z.literal('expert'),
    name: z.string(),                 // the person's full name
    role: z.string(),
    credentials: z.array(z.string()),
    linkedin: z.string().url().optional(),
    headshot: z.string().optional(),
    pagesReviewed: z                  // ABE pages this expert reviewed / developed
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),
  }),
});

export const collections = {
  'pages-homepage': pagesHomepage,
  'pages-hub': pagesHub,
  'pages-course-state': pagesCourseState,
  'pages-expert': pagesExpert,
};
