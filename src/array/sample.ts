export const sample = <T>(array: readonly T[]): T =>
  array[Math.floor(Math.random() * array.length)];
