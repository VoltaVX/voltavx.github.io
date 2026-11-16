export type WorkCategory = 'client' | 'commerce' | 'research';

/** Unknown controls safely restore the complete portfolio in its source order. */
export function selectWorkItems<T extends { category: WorkCategory }>(
  items: readonly T[],
  filter: string,
): readonly T[] {
  if (filter !== 'client' && filter !== 'commerce' && filter !== 'research') return items;
  return items.filter((item) => item.category === filter);
}
