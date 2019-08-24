/* eslint react/prop-types: 0 */

import React, { FC, useState } from "react";
import { StartStopControl } from "./start-stop-control";
import { AddTone } from "./add-tone";
import { ToneControl } from "./tone-control";

interface Tone {
  name: string;
  frequency: number;
}

export const OscillatorConsole: FC = () => {
  const [tones, setTones] = useState<readonly Tone[]>([
    { name: "Base", frequency: 440 }
  ]);
  const [started, setStarted] = useState(false);
  const toggleStarted = (): void => setStarted(prev => !prev);
  const onAddTone = (): void => {
    setTones(prev => [
      ...prev,
      { name: `Tone ${prev.length + 1}`, frequency: prev[0].frequency * 1.15 }
    ]);
  };
  const audioCtx = new AudioContext();
  return (
    <>
      {tones.map(({ name, frequency }) => (
        <ToneControl
          audioContext={audioCtx}
          name={name}
          started={started}
          frequnecy={frequency}
          key={name}
        />
      ))}
      <div>
        <AddTone onAdded={onAddTone} />
      </div>
      <StartStopControl started={started} toggleStarted={toggleStarted} />
    </>
  );
};
