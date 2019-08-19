import { Interval } from "./interval";
import { Pitch } from "./pitch";
import { PitchClass } from "./pitch-class";

describe("Interval", () => {
  const c0 = new Pitch(PitchClass.C, 0);
  const c1 = new Pitch(PitchClass.C, 1);
  const d0 = new Pitch(PitchClass.D, 0);
  const d1 = new Pitch(PitchClass.D, 1);

  test("value", () => {
    expect(Interval.of(c0, c0)).toEqual(new Interval(0));
    expect(Interval.of(c0, d0)).toEqual(new Interval(2));
  });

  test("commutive law", () => {
    expect(Interval.of(c0, d0)).toEqual(Interval.of(d0, c0));
  });

  test("simplify", () => {
    expect(Interval.of(c0, c1).simplify()).toEqual(new Interval(0));
    expect(Interval.of(c0, d1).simplify()).toEqual(new Interval(2));
  });
});
