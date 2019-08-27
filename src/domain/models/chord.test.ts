import { Chord } from "./chord";
import { Pitch } from "./pitch";
import { PitchClass } from "./pitch-class";
import { Interval } from "./interval";

describe("Chord", () => {
  const c0 = new Pitch(PitchClass.C, 0);
  const e0 = new Pitch(PitchClass.E, 0);
  const g0 = new Pitch(PitchClass.G, 0);
  const chord1 = new Chord(c0, e0, g0);
  const chord2 = new Chord(e0, g0, c0);
  const chord3 = new Chord(e0, g0, new Pitch(PitchClass.C, 1));

  test("constructor", () => {
    expect(chord1).toStrictEqual(chord2);
    expect(chord1.equals(chord2)).toBe(true);
    expect(chord1.equals(chord3)).toBe(false);
  });

  test("intervals", () => {
    expect(chord1.intervals()).toStrictEqual([
      new Interval(4),
      new Interval(3)
    ]);
  });
});
