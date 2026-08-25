const PLACEHOLDER_VARIANTS = [
  "from-chili to-turmeric",
  "from-herb to-turmeric",
  "from-amber to-chili",
] as const;

/** Deterministic (not random) placeholder pick so it's stable across renders/rebuilds. */
export function placeholderGradientFor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return PLACEHOLDER_VARIANTS[hash % PLACEHOLDER_VARIANTS.length];
}
