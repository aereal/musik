import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Scale } from "../domain/models/scale";
import { Chord } from "../domain/models/chord";
import { ChordGenerator } from "../domain/service/generators/chord-generator";
import { harmonyGenerator } from "../domain/service/generators/harmony-generator";
import { take } from "../iterator/take";

interface Props {
  bpm: number;
  scale: Scale;
  onGenaratedChords: (chords: readonly Chord[]) => void;
}

export const Harmony: FC<Props> = ({ bpm, scale, onGenaratedChords }) => {
  const onClick = (): void => {
    const [...chords] = take(harmonyGenerator(new ChordGenerator(scale)), 8);
    onGenaratedChords(chords);
  };

  return (
    <Grid item container xs={12}>
      <Typography variant="h5" component="h2">
        Harmony
      </Typography>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={onClick}>
          Generate
        </Button>
      </Grid>
    </Grid>
  );
};
