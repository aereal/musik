import { ChordGenerator } from "./chord-generator";
import { Scale } from "../../models/scale";
import { PitchClass } from "../../models/pitch-class";

describe("ChordGenerator", () => {
  test("C-major", () => {
    const { C, D, E, F, G, A } = PitchClass;
    const cMajor = Scale.major(C);
    const gen = new ChordGenerator(cMajor);
    const i = gen.generate(1);
    expect(i).toStrictEqual([C, E, G]);
    const ii = gen.generate(2);
    expect(ii).toStrictEqual([D, F, A]);
  });

  test("A-minor", () => {
    const { C, D, E, F, A, H } = PitchClass;
    const aMinor = Scale.naturalMinor(A);
    const gen = new ChordGenerator(aMinor);
    const i = gen.generate(1);
    expect(i).toStrictEqual([A, C, E]);
    const ii = gen.generate(2);
    expect(ii).toStrictEqual([H, D, F]);
  });
});
