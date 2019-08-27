import { Chord } from "./chord";
import { PitchClass } from "./pitch-class";
import { Interval } from "./interval";

describe("Chord", () => {
  const chord1 = new Chord(PitchClass.C, PitchClass.E, PitchClass.G);
  const chord2 = new Chord(PitchClass.E, PitchClass.G, PitchClass.C);

  test("constructor", () => {
    expect(chord1).toStrictEqual(chord2);
    expect(chord1.equals(chord2)).toBe(true);
  });

  test("intervals", () => {
    expect(chord1.intervals()).toStrictEqual([
      new Interval(4),
      new Interval(3)
    ]);
  });
});
