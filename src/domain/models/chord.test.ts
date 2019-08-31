import { Chord } from "./chord";
import { PitchClass } from "./pitch-class";
import { Interval } from "./interval";

describe("Chord", () => {
  const { C, E, G, B } = PitchClass;
  const chord1 = new Chord(C, E, G);
  const chord2 = new Chord(E, G, C);

  test("constructor", () => {
    expect(chord1).not.toStrictEqual(chord2);
    expect(chord1.equals(chord2)).toBe(true);
  });

  test("intervals", () => {
    expect(chord1.intervals()).toStrictEqual([
      new Interval(4),
      new Interval(3)
    ]);
  });

  test("describe methods", () => {
    interface Describe {
      method: "isTriad" | "isTetrad";
      expected: boolean;
    }
    interface TestCase {
      args: Chord;
      describes: Describe[];
    }

    const testCases: TestCase[] = [
      {
        args: new Chord(C, E, G),
        describes: [
          { method: "isTriad", expected: true },
          { method: "isTetrad", expected: false }
        ]
      },
      {
        args: new Chord(C, E, G, B),
        describes: [
          { method: "isTriad", expected: false },
          { method: "isTetrad", expected: true }
        ]
      }
    ];

    for (const testCase of testCases) {
      for (const describe of testCase.describes) {
        expect(testCase.args[describe.method]()).toBe(describe.expected);
      }
    }
  });
});
