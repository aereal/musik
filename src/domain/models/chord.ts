import { zip } from "../../array/zip";
import { Interval } from "./interval";
import { PitchClass } from "./pitch-class";

export class Chord {
  private notes: Set<PitchClass>;

  constructor(base: PitchClass, second: PitchClass, ...tones: PitchClass[]) {
    this.notes = new Set([base, second, ...tones]);
  }

  private get sortedNotes(): PitchClass[] {
    return Array.from(this.notes).sort((a, b) => a.compare(b));
  }

  equals(other: Chord): boolean {
    return zip(this.sortedNotes, other.sortedNotes).every(([a, b]) =>
      a.equals(b)
    );
  }

  intervals(): Interval[] {
    return this.sortedNotes.reduceRight<Interval[]>(
      (intervals, pitchClass, i, notesArray) => {
        const next = notesArray[i - 1];
        if (next === undefined) {
          return intervals;
        } else {
          const interval = Interval.of(pitchClass, next);
          return [interval, ...intervals];
        }
      },
      []
    );
  }
}
