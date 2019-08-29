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

export class Interval {
  static PerfectUnison = new Interval(Distance.PERFECT_UNISON);
  static MinorSecond = new Interval(Distance.MINOR_SECOND);
  static MajorSecond = new Interval(Distance.MAJOR_SECOND);
  static MinorThird = new Interval(Distance.MINOR_THIRD);
  static MajorThird = new Interval(Distance.MAJOR_THIRD);
  static PerfectFourth = new Interval(Distance.PERFECT_FOURTH);
  static DiminishedFourth = new Interval(Distance.DIMINISHED_FIFTH);
  static PerfectFifth = new Interval(Distance.PERFECT_FIFTH);
  static MinorSixth = new Interval(Distance.MINOR_SIXTH);
  static MajorSixth = new Interval(Distance.MAJOR_SIXTH);
  static MinorSeventh = new Interval(Distance.MINOR_SEVENTH);
  static MajorSeventh = new Interval(Distance.MAJOR_SEVENTH);
  static PerfectOctave = new Interval(Distance.PERFECT_OCTAVE);

  static of(a: PitchClass, b: PitchClass): Interval {
    return new Interval(Math.abs(a.index - b.index));
  }

  constructor(private distance: number) {}

  simplify(): Interval {
    return new Interval(this.distance % Interval.PerfectOctave.distance);
  }

  equals(other: Interval): boolean {
    return this.distance === other.distance;
  }

  isUnison(): boolean {
    return this.equals(Interval.PerfectUnison);
  }

  isMajor(): boolean {
    return this.equals(Interval.MajorThird);
  }

  isMinor(): boolean {
    return this.equals(Interval.MinorThird);
  }
}
