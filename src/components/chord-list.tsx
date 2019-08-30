import React, { FC } from "react";
import { Chord } from "../domain/models/chord";
import { ChordChip } from "./chord-chip";

interface Props {
  chords: readonly Chord[];
  seekPosition?: number;
}

export const ChordList: FC<Props> = ({ chords, seekPosition }) => {
  return (
    <>
      {chords.map((chord, i) => (
        <ChordChip
          current={seekPosition === i}
          chord={chord}
          key={chord.toString() + `${i}`}
        />
      ))}
    </>
  );
};
