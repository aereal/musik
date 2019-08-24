/* eslint react/prop-types: 0 */
import React, { FC, useState, ChangeEvent, useEffect } from "react";

interface Props {
  name: string;
  audioContext: AudioContext;
  started: boolean;
  frequnecy: number;
}

export const ToneControl: FC<Props> = ({
  name,
  audioContext,
  started,
  frequnecy: defaultFrequency
}) => {
  const [frequency, setFrequency] = useState(defaultFrequency);
  const onChangeFreq = (event: ChangeEvent<HTMLInputElement>): void => {
    setFrequency(event.target.valueAsNumber);
  };

  const oscillator = audioContext.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
  if (started) {
    oscillator.start();
  }

  useEffect(() => {
    return (): void => {
      oscillator.disconnect();
    };
  });
  return (
    <div>
      <label>
        {name}:
        <input type="number" onChange={onChangeFreq} value={frequency} />
        Hz
      </label>
    </div>
  );
};
