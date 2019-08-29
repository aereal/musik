import { Interval } from "./interval";

export class PitchClass {
  static C = new PitchClass(0);
  static Cis = new PitchClass(1);
  static get Des(): PitchClass {
    return this.Cis;
  }
  static D = new PitchClass(2);
  static Dis = new PitchClass(3);
  static get Es(): PitchClass {
    return this.Dis;
  }
  static E = new PitchClass(4);
  static F = new PitchClass(5);
  static Fis = new PitchClass(6);
  static get Ges(): PitchClass {
    return this.Fis;
  }
  static G = new PitchClass(7);
  static Gis = new PitchClass(8);
  static get As(): PitchClass {
    return this.Gis;
  }
  static A = new PitchClass(9);
  static B = new PitchClass(10);
  static get Ais(): PitchClass {
    return this.B;
  }
  static H = new PitchClass(11);

  static pitchClasses = function*(
    from: PitchClass = PitchClass.C
  ): IterableIterator<PitchClass> {
    let current = from;
    while (true) {
      current = current.next();
      yield current;
    }
  };

  private constructor(public index: number) {}

  equals(other: PitchClass): boolean {
    return this.index === other.index;
  }

  compare(other: PitchClass): -1 | 0 | 1 {
    return this.equals(other) ? 0 : this.index < other.index ? -1 : 1;
  }

  farFrom(interval: Interval): PitchClass {
    let distance = 0;
    // FIXME: refer Interval
    for (const next of PitchClass.pitchClasses(this)) {
      distance++;
      if (interval.distance === distance) {
        return next;
      }
    }
    throw new Error("[BUG] corresponding PitchClass not found");
  }

  private next(): PitchClass {
    return this.equals(PitchClass.H)
      ? PitchClass.C
      : new PitchClass(this.index + 1);
  }
}
