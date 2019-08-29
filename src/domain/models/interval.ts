import { PitchClass } from "./pitch-class";

enum Distance {
  PERFECT_UNISON = 0,
  MINOR_SECOND,
  MAJOR_SECOND,
  MINOR_THIRD,
  MAJOR_THIRD,
  PERFECT_FOURTH,
  DIMINISHED_FIFTH,
  PERFECT_FIFTH,
  MINOR_SIXTH,
  MAJOR_SIXTH,
  MINOR_SEVENTH,
  MAJOR_SEVENTH,
  PERFECT_OCTAVE
}

const OCTAVE = 11;

export class Interval {
  static of(a: PitchClass, b: PitchClass): Interval {
    return new Interval(Math.abs(a.index - b.index));
  }

  constructor(private distance: number) {}

  simplify(): Interval {
    return new Interval(this.distance % OCTAVE);
  }

  isUnison(): boolean {
    return this.distance === Distance.PERFECT_UNISON;
  }

  isMajor(): boolean {
    return this.distance === Distance.MAJOR_THIRD;
  }

  isMinor(): boolean {
    return this.distance === Distance.MINOR_THIRD;
  }
}
