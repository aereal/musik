import { PitchClass } from "./pitch-class";

describe("PitchClass", () => {
  test("equality", () => {
    expect(PitchClass.Fis.equals(PitchClass.Ges)).toBe(true);
    expect(PitchClass.B.equals(PitchClass.H)).toBe(false);
  });

  test("pitchClasses", () => {
    const gen1 = PitchClass.pitchClasses();
    expect(gen1.next()).toStrictEqual({
      done: false,
      value: PitchClass.Cis
    });
    expect(gen1.next()).toStrictEqual({
      done: false,
      value: PitchClass.D
    });

    const gen2 = PitchClass.pitchClasses(PitchClass.B);
    expect(gen2.next()).toStrictEqual({
      done: false,
      value: PitchClass.H
    });
    expect(gen2.next()).toStrictEqual({
      done: false,
      value: PitchClass.C
    });
  });
});
