import { Pitch } from "./pitch";
import { zip } from "../../array/zip";

export class Harmony {
  private tones: Array<Pitch>;

  constructor(base: Pitch, second: Pitch, ...tones: Array<Pitch>) {
    this.tones = [base, second, ...tones].sort((a, b) =>
      a.equals(b) ? 0 : a.index < b.index ? -1 : 1
    );
  }

  equals(other: Harmony): boolean {
    return zip(this.tones, other.tones).every(([a, b]) => a.equals(b));
  }
}
