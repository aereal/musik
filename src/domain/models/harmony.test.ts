import { Harmony } from "./harmony";
import { Pitch } from "./pitch";
import { PitchClass } from "./pitch-class";

describe("Harmony", () => {
  test("constructor", () => {
    const c0 = new Pitch(PitchClass.C, 0);
    const e0 = new Pitch(PitchClass.E, 0);
    const g0 = new Pitch(PitchClass.G, 0);
    const harmony1 = new Harmony(c0, e0, g0);
    const harmony2 = new Harmony(e0, g0, c0);
    const harmony3 = new Harmony(e0, g0, new Pitch(PitchClass.C, 1));
    expect(harmony1).toStrictEqual(harmony2);
    expect(harmony1.equals(harmony2)).toBe(true);
    expect(harmony1.equals(harmony3)).toBe(false);
  });
});
