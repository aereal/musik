import { Scale } from "./scale";
import { PitchClass } from "./pitch-class";

describe("Scale", () => {
  test("major", () => {
    const cMajor = Scale.major(PitchClass.C);
    expect(cMajor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.C,
          PitchClass.D,
          PitchClass.E,
          PitchClass.F,
          PitchClass.G,
          PitchClass.A,
          PitchClass.H
        ])
      )
    );

    const aMajor = Scale.major(PitchClass.A);
    expect(aMajor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.A,
          PitchClass.H,
          PitchClass.Cis,
          PitchClass.D,
          PitchClass.E,
          PitchClass.Fis,
          PitchClass.Gis
        ])
      )
    );
  });

  test("naturalMinor", () => {
    const cMinor = Scale.naturalMinor(PitchClass.C);
    expect(cMinor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.C,
          PitchClass.D,
          PitchClass.Es,
          PitchClass.F,
          PitchClass.G,
          PitchClass.As,
          PitchClass.B
        ])
      )
    );

    const aMinor = Scale.naturalMinor(PitchClass.A);
    expect(aMinor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.A,
          PitchClass.H,
          PitchClass.C,
          PitchClass.D,
          PitchClass.E,
          PitchClass.F,
          PitchClass.G
        ])
      )
    );
  });

  test("harmonicMinor", () => {
    const cMinor = Scale.harmonicMinor(PitchClass.C);
    expect(cMinor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.C,
          PitchClass.D,
          PitchClass.Es,
          PitchClass.F,
          PitchClass.G,
          PitchClass.As,
          PitchClass.H
        ])
      )
    );

    const aMinor = Scale.harmonicMinor(PitchClass.A);
    expect(aMinor).toStrictEqual(
      new Scale(
        new Set([
          PitchClass.A,
          PitchClass.H,
          PitchClass.C,
          PitchClass.D,
          PitchClass.E,
          PitchClass.F,
          PitchClass.Gis
        ])
      )
    );
  });
});
