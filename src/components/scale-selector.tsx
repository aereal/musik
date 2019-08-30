import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ScaleTypeSelector } from "./scale-type-select";
import { ScaleType } from "../domain/models/scale";
import { PitchClassSelect } from "./pitch-class-select";
import { PitchClass } from "../domain/models/pitch-class";

interface Props {
  scaleType: ScaleType;
  pitchClass: PitchClass;
  onChangeScaleType: (scaleType: ScaleType) => void;
  onChangePitchClass: (pitchClass: PitchClass) => void;
}

export const ScaleSelector: FC<Props> = ({
  scaleType,
  pitchClass,
  onChangeScaleType,
  onChangePitchClass
}) => {
  const handleScaleTypeChange = (scaleType: ScaleType): void =>
    onChangeScaleType(scaleType);
  const handlePitchClassChange = (pitchClass: PitchClass): void =>
    onChangePitchClass(pitchClass);

  return (
    <Grid xs={12} item container>
      <Typography variant="h5" component="h2">
        Scale
      </Typography>
      <ScaleTypeSelector
        scaleType={scaleType}
        onChange={handleScaleTypeChange}
      />
      <PitchClassSelect
        defaultPitchClass={pitchClass}
        onChange={handlePitchClassChange}
      />
    </Grid>
  );
};
