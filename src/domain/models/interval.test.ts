import { Interval } from "./interval";
import { Pitch } from "./pitch";
import { PitchClass } from "./pitch-class";

describe("Interval", () => {
  const c0 = new Pitch(PitchClass.C, 0);
  const c1 = new Pitch(PitchClass.C, 1);
  const d0 = new Pitch(PitchClass.D, 0);
  const d1 = new Pitch(PitchClass.D, 1);
  const e0 = new Pitch(PitchClass.E, 0);
  const es0 = new Pitch(PitchClass.Es, 0);

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

  test("describe methods", () => {
    interface TestCase {
      lhs: Pitch;
      rhs: Pitch;
      method: keyof Interval;
      expected: boolean;
    }

    const testCases: Array<TestCase> = [
      { lhs: c0, rhs: c0, method: "isMajor", expected: false },
      { lhs: c0, rhs: e0, method: "isMajor", expected: true },
      { lhs: c0, rhs: es0, method: "isMajor", expected: false },
      { lhs: c0, rhs: c0, method: "isMinor", expected: false },
      { lhs: c0, rhs: e0, method: "isMinor", expected: false },
      { lhs: c0, rhs: es0, method: "isMinor", expected: true },
      { lhs: c0, rhs: c0, method: "isUnison", expected: true },
      { lhs: c0, rhs: e0, method: "isUnison", expected: false },
      { lhs: c0, rhs: es0, method: "isUnison", expected: false }
    ];

    for (const testCase of testCases) {
      expect(Interval.of(testCase.lhs, testCase.rhs)[testCase.method]()).toBe(
        testCase.expected
      );
    }
  });
});
