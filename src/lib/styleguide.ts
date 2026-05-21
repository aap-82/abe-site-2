// Discovers every component in the library by scanning the standard folder shape:
//   src/components/<Name>/<Name>.examples.astro
//   src/sections/<Name>/<Name>.examples.astro
//   src/layouts/<Name>/<Name>.examples.astro
//
// Each folder also has <Name>.astro (the component) and <Name>.md (the spec).
// The styleguide pages consume the discovered list to build the sidebar and
// dynamic routes.

export type ComponentGroup = 'components' | 'sections' | 'layouts';

export interface DiscoveredComponent {
  /** kebab-case URL slug, e.g. "answer-capsule" */
  slug: string;
  /** PascalCase component name, e.g. "AnswerCapsule" */
  name: string;
  /** Which top-level folder the component lives in */
  group: ComponentGroup;
  /** Absolute path to the examples file — used to look it up in eager globs */
  examplesPath: string;
  /** Absolute path to the spec.md file — used to look it up in eager globs */
  specPath: string;
}

const FOLDER_RE =
  /^\/src\/(components|sections|layouts)\/([A-Z][A-Za-z0-9]*)\/\2\.examples\.astro$/;

function pascalToKebab(s: string): string {
  // Two-pass: first split ACRONYM boundaries (FAQSection -> FAQ-Section),
  // then split camelCase boundaries (AnswerCapsule -> Answer-Capsule).
  return s
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

const examplesGlob = import.meta.glob(
  '/src/{components,sections,layouts}/*/*.examples.astro',
);

export function discoverComponents(): DiscoveredComponent[] {
  return Object.keys(examplesGlob)
    .map((path) => {
      const match = path.match(FOLDER_RE);
      if (!match) return null;
      const [, group, name] = match;
      return {
        slug: pascalToKebab(name),
        name,
        group: group as ComponentGroup,
        examplesPath: path,
        specPath: path.replace(/\.examples\.astro$/, '.md'),
      } satisfies DiscoveredComponent;
    })
    .filter((x): x is DiscoveredComponent => x !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function groupByCategory(
  components: DiscoveredComponent[],
): Record<ComponentGroup, DiscoveredComponent[]> {
  return {
    layouts: components.filter((c) => c.group === 'layouts'),
    sections: components.filter((c) => c.group === 'sections'),
    components: components.filter((c) => c.group === 'components'),
  };
}

export interface CompletedPage {
  /** Display name shown in the styleguide sidebar. */
  name: string;
  /** The live page route. */
  href: string;
}

/**
 * Completed pages — the validation-pass rebuilds, each composed entirely
 * from library components. Curated by hand: a page joins this list once its
 * rebuild is finished and builds clean.
 */
export const completedPages: CompletedPage[] = [
  { name: 'Homepage', href: '/' },
  { name: 'Owner Builder hub', href: '/owner-builder' },
  { name: 'White Card hub', href: '/white-card' },
  { name: 'Owner Builder NSW (course)', href: '/owner-builder-nsw' },
  { name: 'White Card NSW (course)', href: '/white-card-nsw' },
  { name: 'Warwick Smith (expert)', href: '/experts/warwick-smith' },
  { name: 'Dominic Ogburn (expert)', href: '/experts/dominic-ogburn' },
];


// ---------------------------------------------------------------------------
// Spec descriptions — eager glob of every <Name>.md so the index and detail
// pages can surface the one-line description from the spec frontmatter.
// ---------------------------------------------------------------------------

interface SpecModule {
  frontmatter?: { description?: string; summary?: string };
}

const specFrontmatterGlob = import.meta.glob(
  '/src/{components,sections,layouts}/*/*.md',
  { eager: true },
);

/** One-line description for a component, read from its spec .md frontmatter. */
export function getDescription(specPath: string): string {
  const mod = specFrontmatterGlob[specPath] as SpecModule | undefined;
  const fm = mod?.frontmatter;
  return (fm?.description ?? fm?.summary ?? '').trim();
}
