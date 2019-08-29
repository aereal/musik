export const drop = function*<T>(
  iterator: IterableIterator<T>,
  skip: number
): IterableIterator<T> {
  let skipped = 0;
  for (const t of iterator) {
    skipped++;
    if (skipped <= skip) {
      continue;
    }
    yield t;
  }
};
