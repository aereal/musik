import React, { FC, useState, useEffect } from "react";
import { Layout } from "./layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { BPM } from "./bpm";
import { ScaleSelector } from "./scale-selector";
import { ScaleType, Scale } from "../domain/models/scale";
import { PitchClass } from "../domain/models/pitch-class";
import { Harmony } from "./harmony";
import { Chord } from "../domain/models/chord";
import { ChordList } from "./chord-list";
import { PlaySound } from "./play-sound";
import { Pitch } from "../domain/models/pitch";

export const RootPage: FC = () => {
  const [bpm, setBPM] = useState(80);
  const [scaleType, setScaleType] = useState<ScaleType>("major");
  const [pitchClass, setPitchClass] = useState<PitchClass>(PitchClass.C);
  const [chords, setChords] = useState<readonly Chord[]>([]);
  const [seekPosition, setSeekPosition] = useState<number>();
  useEffect(() => {
    if (seekPosition === undefined) {
      return;
    }
    const currentChord = chords[seekPosition];
    if (currentChord === undefined) {
      return;
    }
    const audioCtx = new AudioContext();
    const oscillators = currentChord.sortedNotes.map(note => {
      const pitch = new Pitch(note, 5);
      const oscillator = audioCtx.createOscillator();
      oscillator.type = "square";
      oscillator.connect(audioCtx.destination);
      console.log(
        `pitch = ${pitch.pitchClass} (octave: ${pitch.octave}) frequency: ${pitch.frequency}`
      );
      oscillator.frequency.value = pitch.frequency;
      return oscillator;
    });
    oscillators.forEach(o => o.start());
    return (): void => {
      oscillators.forEach(o => o.stop());
    };
  }, [seekPosition, chords]);
  const onChangeBPM = (nextBPM: number): void => setBPM(nextBPM);
  const handleChangeScaleType = (scaleType: ScaleType): void =>
    setScaleType(scaleType);
  const handlePitchClassChange = (pitchClass: PitchClass): void =>
    setPitchClass(pitchClass);
  const handleChordsGenerated = (generated: readonly Chord[]): void =>
    setChords(generated);
  const beats = 4;
  const onPlay = (currentChords: readonly Chord[]): void => {
    const intervalInMilliSecond = (60 * 1000 * beats) / bpm;
    setSeekPosition(0);
    setInterval(() => {
      setSeekPosition(prev =>
        prev !== undefined
          ? prev >= currentChords.length
            ? undefined
            : prev + 1
          : 0
      );
    }, intervalInMilliSecond);
  };

  const scale = Scale.build(scaleType, pitchClass);

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
        <Harmony
          scale={scale}
          bpm={bpm}
          onGenaratedChords={handleChordsGenerated}
        />
        <ChordList chords={chords} seekPosition={seekPosition} />
        <PlaySound chords={chords} onPlay={onPlay} />
      </Grid>
    </Layout>
  );
};
