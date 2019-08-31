import { zip } from "../../array/zip";
import { Interval } from "./interval";
import { PitchClass } from "./pitch-class";
import { Pitch } from "./pitch";

export class Chord {
  public notes: readonly PitchClass[];

  constructor(base: PitchClass, second: PitchClass, ...tones: PitchClass[]) {
    this.notes = [base, second, ...tones];
  }

  pitches(baseOctave = 4): readonly Pitch[] {
    return this.notes.reduce<readonly Pitch[]>((a, b, i) => {
      const prev = a[i - 1];
      let current = new Pitch(b, prev !== undefined ? prev.octave : baseOctave);
      current =
        prev && prev.index > current.index // prev > current
          ? new Pitch(b, current.octave + 1)
          : current;
      return [...a, current];
    }, []);
  }

  get sortedNotes(): PitchClass[] {
    return [...this.notes].sort((a, b) => a.compare(b));
  }

  isTriad(): boolean {
    return this.notes.length === 3;
  }

  isTetrad(): boolean {
    return this.notes.length === 4;
  }

  equals(other: Chord): boolean {
    return zip(this.sortedNotes, other.sortedNotes).every(([a, b]) =>
      a.equals(b)
    );
  }

  intervals(): Interval[] {
    return this.notes.reduceRight<Interval[]>(
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

  toString(): string {
    return this.notes.map(note => note.toString()).join(", ");
  }
}
