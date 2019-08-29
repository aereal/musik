import { Scale } from "../../models/scale";
import { ChordPosition } from "../../models/chord-position";
import { drop } from "../../../iterator/drop";
import { PitchClass } from "../../models/pitch-class";

export class ChordGenerator {
  constructor(private scale: Scale) {}

  generate(position: ChordPosition): readonly PitchClass[] {
    const offset = position - 1;
    const [tonic, , second, , third] = drop(this.scale.notes(), offset);
    return [tonic, second, third];
  }
}
