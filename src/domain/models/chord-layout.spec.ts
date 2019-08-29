import { ChordLayout } from "./chord-layout";
import { Interval } from "./interval";
import { PitchClass } from "./pitch-class";
import { Chord } from "./chord";

describe("ChordLayout", () => {
  test("build C-major", () => {
    const { C, E, G } = PitchClass;
    const layout = new ChordLayout([
      Interval.MajorThird,
      Interval.PerfectFifth
    ]);
    const got = layout.build(C);
    expect(got).toStrictEqual(new Chord(C, E, G));
  });

  test("build A-minor", () => {
    const { A, C, E } = PitchClass;
    const layout = new ChordLayout([
      Interval.MinorThird,
      Interval.PerfectFifth
    ]);
    const got = layout.build(A);
    expect(got).toStrictEqual(new Chord(A, C, E));
  });
});
