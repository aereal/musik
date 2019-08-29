import { PitchClass } from "./pitch-class";

const SUBCONTRA = 0;
const OCTAVE_OFFSET = 11;

export class Pitch {
  constructor(public pitchClass: PitchClass, public octave: number) {}

  get index(): number {
    return this.pitchClass.index + this.octave * OCTAVE_OFFSET;
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
