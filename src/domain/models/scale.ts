import { PitchClass } from "./pitch-class";

export class Scale {
  static major(tonic: PitchClass): Scale {
    const [, ii, , iii, iv, , v, , vi, , vii] = PitchClass.pitchClasses(tonic);
    return new Scale(new Set([tonic, ii, iii, iv, v, vi, vii]));
  }

  static naturalMinor(tonic: PitchClass): Scale {
    const [, ii, iii, , iv, , v, vi, , vii] = PitchClass.pitchClasses(tonic);
    return new Scale(new Set([tonic, ii, iii, iv, v, vi, vii]));
  }

  static harmonicMinor(tonic: PitchClass): Scale {
    const [, ii, iii, , iv, , v, vi, , , vii] = PitchClass.pitchClasses(tonic);
    return new Scale(new Set([tonic, ii, iii, iv, v, vi, vii]));
  }

  constructor(private readonly notes: Set<PitchClass>) {}

  get notesSet(): Set<PitchClass> {
    return this.notes;
  }
}
