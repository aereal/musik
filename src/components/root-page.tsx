import React, { FC, useState } from "react";
import { Layout } from "./layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { BPM } from "./bpm";

export const RootPage: FC = () => {
  const [bpm, setBPM] = useState(80);
  const onChangeBPM = (nextBPM: number): void => setBPM(nextBPM);

  return (
    <Layout>
      <Grid item container xs={12} md={6}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Musik
          </Typography>
        </Grid>
        <BPM bpm={bpm} onChange={onChangeBPM} />
      </Grid>
    </Layout>
  );
};
