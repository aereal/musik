import React, { FC } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Chord } from "../domain/models/chord";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

interface Props {
  current: boolean;
  chord: Chord;
}

export const ChordChip: FC<Props> = ({ chord, current }) => {
  const styles = useStyles();
  return (
    <Chip
      color={current ? "primary" : undefined}
      label={chord.toString()}
      className={styles.chip}
    />
  );
};
