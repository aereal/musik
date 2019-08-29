import { Scale } from "../../models/scale";
import { Chord } from "../../models/chord";
import { ChordPosition } from "../../models/chord-position";
import { drop } from "../../../iterator/drop";

export class ChordGenerator {
  constructor(private scale: Scale) {}

  generate(position: ChordPosition): Chord {
    const offset = position - 1;
    const [tonic, , second, , third] = drop(this.scale.notes(), offset);
    return new Chord(tonic, second, third);
  }
}
