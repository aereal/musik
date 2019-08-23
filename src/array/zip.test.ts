import { zip } from "./zip";

describe("zip", () => {
  test("ok", () => {
    const xs = [1, 2, 3];
    const ys = ["a", "b", "c"];
    const zipped = zip(xs, ys);
    expect(zipped).toStrictEqual([[1, "a"], [2, "b"], [3, "c"]]);
  });
});
