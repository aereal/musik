import { PitchClass } from "./pitch-class";

const SUBCONTRA = 0;
const ONELINE = 4;
const OCTAVE_OFFSET = 11;

export class Pitch {
  private static CONCERT_A = new Pitch(PitchClass.A, 4);
  constructor(public pitchClass: PitchClass, public octave: number) {}

  get index(): number {
    return this.pitchClass.index + this.octave * OCTAVE_OFFSET;
  }

  get frequency(): number {
    const baseFrequency = this.pitchClass.baseFrequency;
    const octaveRatio = this.octave === ONELINE ? 1 : 1;
    return baseFrequency * octaveRatio;
  }

  equals(other: Pitch): boolean {
    return (
      this.pitchClass.equals(other.pitchClass) && this.octave === other.octave
    );
  }

  compare(other: Pitch): -1 | 0 | 1 {
    return this.equals(other) ? 0 : this.index < other.index ? -1 : 1;
  }

  ottavaSopra(): Pitch {
    return new Pitch(this.pitchClass, this.octave + 1);
  }

  ottavaBassa(): Pitch | undefined {
    return this.octave === SUBCONTRA
      ? undefined
      : new Pitch(this.pitchClass, this.octave - 1);
  }
}
