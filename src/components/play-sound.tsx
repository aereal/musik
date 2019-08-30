import React, { FC } from "react";
import { Chord } from "../domain/models/chord";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface Props {
  chords: readonly Chord[];
}

export const PlaySound: FC<Props> = ({ chords }) => {
  return (
    <Grid xs={12} item container>
      <Typography variant="h5" component="h2">
        Play
      </Typography>
      <Grid spacing={2} xs={12}>
        <Button
          disabled={chords.length < 1}
          variant="contained"
          color="primary"
        >
          Play
        </Button>
      </Grid>
    </Grid>
  );
};
