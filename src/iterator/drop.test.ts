import { drop } from "./drop";
import { take } from "./take";

const naturalGenerator = function*(): IterableIterator<number> {
  let current = 0;
  while (true) {
    yield current;
    current++;
  }
};

describe("drop", () => {
  test("skip=0", () => {
    const got = Array.from(take(drop(naturalGenerator(), 0), 3));
    expect(got).toStrictEqual([0, 1, 2]);
  });

  test("n=3", () => {
    const got = Array.from(take(drop(naturalGenerator(), 3), 3));
    expect(got).toStrictEqual([3, 4, 5]);
  });
});
