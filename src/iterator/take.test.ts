import { take } from "./take";

const naturalGenerator = function*(): IterableIterator<number> {
  let current = 0;
  while (true) {
    yield current;
    current++;
  }
};

describe("take", () => {
  test("n=0", () => {
    const got = Array.from(take(naturalGenerator(), 0));
    expect(got).toStrictEqual([]);
  });

  test("n=3", () => {
    const got = Array.from(take(naturalGenerator(), 3));
    expect(got).toStrictEqual([0, 1, 2]);
  });
});
