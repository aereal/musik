import { PitchClass } from "./pitch-class";
import { take } from "../../iterator/take";

const scaleTypes = ["major" as const, "naturalMinor" as const];
type ScaleType = typeof scaleTypes[number];
type ScaleConstructor = (tonic: PitchClass) => Scale;

export class Scale {
  private static constructors: Record<ScaleType, ScaleConstructor> = {
    major: Scale.major.bind(Scale),
    naturalMinor: Scale.naturalMinor.bind(Scale)
  };

  static scaleTypes = scaleTypes;

  static build = (scaleType: ScaleType, tonic: PitchClass): Scale =>
    Scale.constructors[scaleType](tonic);

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
