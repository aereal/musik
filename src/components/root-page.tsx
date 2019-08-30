import React, { FC, useState } from "react";
import { Layout } from "./layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { BPM } from "./bpm";
import { ScaleSelector } from "./scale-selector";
import { ScaleType } from "../domain/models/scale";
import { PitchClass } from "../domain/models/pitch-class";

export const RootPage: FC = () => {
  const [bpm, setBPM] = useState(80);
  const [scaleType, setScaleType] = useState<ScaleType>("major");
  const [pitchClass, setPitchClass] = useState<PitchClass>(PitchClass.C);
  const onChangeBPM = (nextBPM: number): void => setBPM(nextBPM);
  const handleChangeScaleType = (scaleType: ScaleType): void =>
    setScaleType(scaleType);
  const handlePitchClassChange = (pitchClass: PitchClass): void =>
    setPitchClass(pitchClass);

  return (
    <Layout>
      <Grid item container xs={12} md={6}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Musik
          </Typography>
        </Grid>
        <BPM bpm={bpm} onChange={onChangeBPM} />
        <ScaleSelector
          scaleType={scaleType}
          pitchClass={pitchClass}
          onChangeScaleType={handleChangeScaleType}
          onChangePitchClass={handlePitchClassChange}
        />
      </Grid>
    </Layout>
  );
};
