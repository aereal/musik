import { PitchClass } from "./pitch-class";

describe("PitchClass", () => {
  test("equality", () => {
    expect(PitchClass.Fis.equals(PitchClass.Ges)).toBe(true);
    expect(PitchClass.B.equals(PitchClass.H)).toBe(false);
  });
});
