import React, { FC } from "react";
import { Chord } from "../domain/models/chord";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

interface Props {
  chords: readonly Chord[];
}

export const ChordList: FC<Props> = ({ chords }) => {
  const styles = useStyles();
  return (
    <>
      {chords.map((chord, i) => (
        <Chip
          key={chord.toString() + `${i}`}
          label={chord.toString()}
          className={styles.chip}
        />
      ))}
    </>
  );
};
