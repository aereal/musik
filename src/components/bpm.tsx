import React, { FC, ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface Props {
  bpm: number;
  onChange: (bpm: number) => void;
}

const useStyles = makeStyles(theme => ({
  input: { width: 42 }
}));

export const BPM: FC<Props> = ({ bpm, onChange }) => {
  const styles = useStyles();

  const handleSliderChange = (
    ev: ChangeEvent<{}>,
    value: number | number[]
  ): void => {
    const committedValue = Array.isArray(value) ? value[0] : value;
    onChange(committedValue);
  };

  return (
    <Grid xs={12} item container>
      <Typography variant="h5" component="h2">
        BPM
      </Typography>
      <Grid spacing={2} alignItems="center" container>
        <Grid item xs>
          <Slider
            value={bpm}
            min={40}
            max={240}
            valueLabelDisplay="auto"
            onChange={handleSliderChange}
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            className={styles.input}
            margin="dense"
            value={bpm}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
