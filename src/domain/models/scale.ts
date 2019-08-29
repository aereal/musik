import { PitchClass } from "./pitch-class";
import { take } from "../../iterator/take";

export class Scale {
  static major(tonic: PitchClass): Scale {
    return new Scale(function*(): IterableIterator<PitchClass> {
      while (true) {
        const [, ii, , iii, iv, , v, , vi, , vii] = PitchClass.pitchClasses(
          tonic
        );
        yield tonic;
        yield ii;
        yield iii;
        yield iv;
        yield v;
        yield vi;
        yield vii;
      }
    });
  }

  static naturalMinor(tonic: PitchClass): Scale {
    return new Scale(function*(): IterableIterator<PitchClass> {
      while (true) {
        const [, ii, iii, , iv, , v, vi, , vii] = PitchClass.pitchClasses(
          tonic
        );
        yield tonic;
        yield ii;
        yield iii;
        yield iv;
        yield v;
        yield vi;
        yield vii;
      }
    });
  }

  static harmonicMinor(tonic: PitchClass): Scale {
    return new Scale(function*(): IterableIterator<PitchClass> {
      while (true) {
        const [, ii, iii, , iv, , v, vi, , , vii] = PitchClass.pitchClasses(
          tonic
        );
        yield tonic;
        yield ii;
        yield iii;
        yield iv;
        yield v;
        yield vi;
        yield vii;
      }
    });
  }

  constructor(public notes: () => IterableIterator<PitchClass>) {}

  get notesSet(): Set<PitchClass> {
    return new Set(take(this.notes(), 8));
  }
}
