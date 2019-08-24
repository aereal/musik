/* eslint react/prop-types: 0 */
import React, { FC } from "react";

interface Props {
  started: boolean;
  toggleStarted: () => void;
}

export const StartStopControl: FC<Props> = ({ started, toggleStarted }) => {
  return <button onClick={toggleStarted}>{started ? "Stop" : "Start"}</button>;
};
