import { Interval } from "./interval";
import { PitchClass } from "./pitch-class";

describe("Interval", () => {
  const { C, D, E, Es } = PitchClass;

  test("value", () => {
    expect(Interval.of(C, C)).toEqual(new Interval(0));
    expect(Interval.of(C, D)).toEqual(new Interval(2));
  });

  test("commutive law", () => {
    expect(Interval.of(C, D)).toEqual(Interval.of(D, C));
  });

  test("simplify", () => {
    expect(Interval.of(C, C).simplify()).toEqual(new Interval(0));
    expect(Interval.of(C, D).simplify()).toEqual(new Interval(2));
  });

  test("describe methods", () => {
    interface TestCase {
      args: [PitchClass, PitchClass];
      method: keyof Interval;
      expected: boolean;
    }

    const testCases: TestCase[] = [
      { args: [C, C], method: "isMajor", expected: false },
      { args: [C, E], method: "isMajor", expected: true },
      { args: [E, C], method: "isMajor", expected: true },
      { args: [C, Es], method: "isMajor", expected: false },
      { args: [C, C], method: "isMinor", expected: false },
      { args: [C, E], method: "isMinor", expected: false },
      { args: [C, Es], method: "isMinor", expected: true },
      { args: [Es, C], method: "isMinor", expected: true },
      { args: [C, C], method: "isUnison", expected: true },
      { args: [C, E], method: "isUnison", expected: false },
      { args: [C, Es], method: "isUnison", expected: false }
    ];

    for (const testCase of testCases) {
      const [lhs, rhs] = testCase.args;
      expect(Interval.of(lhs, rhs)[testCase.method]()).toBe(testCase.expected);
    }
  });
});
