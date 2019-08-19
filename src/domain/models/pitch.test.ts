import { Pitch } from "./pitch";
import { PitchClass } from "./pitch-class";

describe("Pitch", () => {
  test("equality", () => {
    expect(new Pitch(PitchClass.C, 0).equals(new Pitch(PitchClass.C, 0))).toBe(
      true
    );
    expect(new Pitch(PitchClass.C, 0).equals(new Pitch(PitchClass.C, 1))).toBe(
      false
    );
    expect(new Pitch(PitchClass.C, 0).equals(new Pitch(PitchClass.H, 0))).toBe(
      false
    );
  });

  test("ottavaSopra", () => {
    expect(new Pitch(PitchClass.C, 0).ottavaSopra()).toEqual(
      new Pitch(PitchClass.C, 1)
    );
  });

  test("ottavaBassa", () => {
    expect(new Pitch(PitchClass.C, 0).ottavaBassa()).toBeUndefined();
    expect(new Pitch(PitchClass.C, 1).ottavaBassa()).toEqual(
      new Pitch(PitchClass.C, 0)
    );
  });
});
