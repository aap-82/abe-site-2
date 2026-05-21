/**
 * Shared slug generator used by every section to set anchor IDs and by
 * MicroCTA to resolve jump-link targets. Per locked decision #7, every
 * anchor on the site comes from this one function so a heading and a
 * MicroCTA pointing at it always agree on the slug.
 *
 * Output matches GitHub-flavoured markdown anchor conventions so source
 * markdown round-trips cleanly: "What's next?" -> "whats-next".
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .replace(/[^a-z0-9\s-]/g, '') // strip punctuation
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
