export const take = function*<T>(
  iterator: IterableIterator<T>,
  n: number
): IterableIterator<T> {
  let read = 0;
  for (const t of iterator) {
    if (read >= n) {
      break;
    }
    yield t;
    read++;
  }
  return;
};
