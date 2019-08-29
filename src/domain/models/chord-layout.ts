import { Interval } from "./interval";
import { PitchClass } from "./pitch-class";
import { Chord } from "./chord";

export class ChordLayout {
  constructor(public intervals: readonly Interval[]) {}

  build(tonic: PitchClass): Chord {
    const [second, ...notes] = this.intervals.map(interval =>
      tonic.farFrom(interval)
    );
    return new Chord(tonic, second, ...notes);
  }
}
