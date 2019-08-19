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

  private index: number;

  private constructor(index: number) {
    this.index = index;
  }

  equals(other: PitchClass): boolean {
    return this.index === other.index;
  }
}
