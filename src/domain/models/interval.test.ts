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
    interface Describe {
      method: keyof Interval;
      expected: boolean;
    }
    interface TestCase {
      args: [PitchClass, PitchClass];
      describes: Describe[];
    }

    const testCases: TestCase[] = [
      {
        args: [C, C],
        describes: [
          { method: "isMajor", expected: false },
          { method: "isMinor", expected: false },
          { method: "isUnison", expected: true }
        ]
      },
      {
        args: [C, E],
        describes: [
          { method: "isMajor", expected: true },
          { method: "isMinor", expected: false },
          { method: "isUnison", expected: false }
        ]
      },
      {
        args: [C, Es],
        describes: [
          { method: "isMajor", expected: false },
          { method: "isMinor", expected: true },
          { method: "isUnison", expected: false }
        ]
      }
    ];

    for (const testCase of testCases) {
      const [lhs, rhs] = testCase.args;
      for (const describe of testCase.describes) {
        expect(Interval.of(lhs, rhs)[describe.method]()).toBe(
          describe.expected
        );
      }
    }
  });
});
