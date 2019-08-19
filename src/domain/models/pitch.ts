import { PitchClass } from "./pitch-class";

const SUBCONTRA = 0;

export class Pitch {
  constructor(public pitchClass: PitchClass, public octave: number) {}

  equals(other: Pitch): boolean {
    return (
      this.pitchClass.equals(other.pitchClass) && this.octave === other.octave
    );
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
