import { harmonyGenerator } from "./harmony-generator";
import { take } from "../../../iterator/take";
import { ChordGenerator } from "./chord-generator";
import { Scale } from "../../models/scale";
import { PitchClass } from "../../models/pitch-class";

describe("harmonyGenerator", () => {
  test("c major", () => {
    const { C } = PitchClass;
    const cMajor = Scale.major(C);
    const chordGen = new ChordGenerator(cMajor);
    const chords = take(harmonyGenerator(chordGen), 4);
    for (const c of chords) {
      expect(c).toBeDefined();
    }
  });
});
