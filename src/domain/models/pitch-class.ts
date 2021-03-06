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

  constructor(public index: number) {}

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

  toString(): string {
    switch (this.index) {
      case 0:
        return "C";
      case 1:
        return "Cis";
      case 2:
        return "D";
      case 3:
        return "Es";
      case 4:
        return "E";
      case 5:
        return "F";
      case 6:
        return "Fis";
      case 7:
        return "G";
      case 8:
        return "As";
      case 9:
        return "A";
      case 10:
        return "B";
      case 11:
        return "H";
      default:
        throw new Error("invalid value");
    }
  }

  get baseFrequency(): number {
    switch (this.index) {
      case PitchClass.C.index:
        return 261.63;
      case PitchClass.Cis.index:
        return 277.18;
      case PitchClass.D.index:
        return 293.66;
      case PitchClass.Es.index:
        return 311.13;
      case PitchClass.E.index:
        return 329.63;
      case PitchClass.F.index:
        return 349.23;
      case PitchClass.Fis.index:
        return 369.99;
      case PitchClass.G.index:
        return 392.0;
      case PitchClass.As.index:
        return 415.3;
      case PitchClass.A.index:
        return 440;
      case PitchClass.B.index:
        return 466.16;
      case PitchClass.H.index:
        return 493.88;
      default:
        throw new Error(`invalid pitch class`);
    }
  }

  private next(): PitchClass {
    return this.equals(PitchClass.H)
      ? PitchClass.C
      : new PitchClass(this.index + 1);
  }
}
