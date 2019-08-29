import { PitchClass } from "./pitch-class";

export class Scale {
  static major(tonic: PitchClass): Scale {
    return new Scale(
      tonic,
      (tones: IterableIterator<PitchClass>): readonly PitchClass[] => {
        const [, ii, , iii, iv, , v, , vi, , vii] = tones;
        return [tonic, ii, iii, iv, v, vi, vii];
      }
    );
  }

  static naturalMinor(tonic: PitchClass): Scale {
    return new Scale(
      tonic,
      (tones: IterableIterator<PitchClass>): readonly PitchClass[] => {
        const [, ii, iii, , iv, , v, vi, , vii] = tones;
        return [tonic, ii, iii, iv, v, vi, vii];
      }
    );
  }

  static harmonicMinor(tonic: PitchClass): Scale {
    return new Scale(
      tonic,
      (tones: IterableIterator<PitchClass>): readonly PitchClass[] => {
        const [, ii, iii, , iv, , v, vi, , , vii] = tones;
        return [tonic, ii, iii, iv, v, vi, vii];
      }
    );
  }

  constructor(
    private tonic: PitchClass,
    private toneConsumer: (
      iterator: IterableIterator<PitchClass>
    ) => readonly PitchClass[]
  ) {}

  get notes(): readonly PitchClass[] {
    return this.toneConsumer(PitchClass.pitchClasses(this.tonic));
  }

  get notesSet(): Set<PitchClass> {
    return new Set(this.notes);
  }
}
