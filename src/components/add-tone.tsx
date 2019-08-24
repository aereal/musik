/* eslint react/prop-types: 0 */
import React, { FC } from "react";

interface Props {
  onAdded: () => void;
}

export const AddTone: FC<Props> = ({ onAdded }) => {
  return <button onClick={onAdded}>Add Tone</button>;
};
