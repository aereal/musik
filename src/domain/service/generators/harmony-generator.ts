import { sample } from "../../../array/sample";
import { Chord } from "../../models/chord";
import { ChordPosition } from "../../models/chord-position";
import { ChordGenerator } from "./chord-generator";

const suggestNextChordPosition = (prev: ChordPosition): Set<ChordPosition> => {
  switch (prev) {
    case 1:
      return new Set([2, 3, 4, 5, 6, 7]);
    case 2:
      return new Set([5]);
    case 3:
      return new Set([4]);
    case 4:
      return new Set([1, 2, 5]);
    case 5:
      return new Set([1, 6]);
    case 6:
      return new Set([2, 3, 4, 5, 7]);
    case 7:
      return new Set([3]);
    default:
      return new Set([1, 4, 5]);
  }
};

export const harmonyGenerator = function*(
  chordGenerator: ChordGenerator
): Generator<Chord, Chord> {
  let currentPosition = sample<ChordPosition>([1, 4, 5]);
  while (true) {
    const chord = chordGenerator.generate(currentPosition);
    yield chord;
    const candidates = suggestNextChordPosition(currentPosition);
    currentPosition = sample([...candidates]);
  }
};
