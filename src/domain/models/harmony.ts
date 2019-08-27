import { Pitch } from "./pitch";
import { zip } from "../../array/zip";
import { Interval } from "./interval";

export class Harmony {
  private tones: Pitch[];

  constructor(base: Pitch, second: Pitch, ...tones: Pitch[]) {
    this.tones = [base, second, ...tones].sort((a, b) => a.compare(b));
  }

  equals(other: Harmony): boolean {
    return zip(this.tones, other.tones).every(([a, b]) => a.equals(b));
  }

  intervals(): Interval[] {
    return this.tones.reduceRight<Interval[]>((intervals, pitch, i) => {
      const next = this.tones[i - 1];
      if (next === undefined) {
        return intervals;
      } else {
        const interval = Interval.of(pitch, next);
        return [interval, ...intervals];
      }
    }, []);
  }
}
