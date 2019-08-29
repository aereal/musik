import { ChordGenerator } from "./chord-generator";
import { Scale } from "../../models/scale";
import { PitchClass } from "../../models/pitch-class";
import { Chord } from "../../models/chord";

describe("ChordGenerator", () => {
  test("C-major", () => {
    const { C, D, E, F, G, A } = PitchClass;
    const cMajor = Scale.major(C);
    const gen = new ChordGenerator(cMajor);
    const i = gen.generate(1);
    expect(i).toStrictEqual(new Chord(C, E, G));
    const ii = gen.generate(2);
    expect(ii).toStrictEqual(new Chord(D, F, A));
  });

  test("A-minor", () => {
    const { C, D, E, F, A, H } = PitchClass;
    const aMinor = Scale.naturalMinor(A);
    const gen = new ChordGenerator(aMinor);
    const i = gen.generate(1);
    expect(i).toStrictEqual(new Chord(A, C, E));
    const ii = gen.generate(2);
    expect(ii).toStrictEqual(new Chord(H, D, F));
  });
});
