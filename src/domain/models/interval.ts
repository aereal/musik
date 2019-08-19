import { Pitch } from "./pitch";

export class Interval {
  static OCTAVE = 11;
  static of(a: Pitch, b: Pitch): Interval {
    return new Interval(Math.abs(a.index - b.index));
  }

  constructor(private value: number) {}

  simplify(): Interval {
    return new Interval(this.value % Interval.OCTAVE);
  }
}
