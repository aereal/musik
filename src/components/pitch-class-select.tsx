import React, { FC, ChangeEvent } from "react";
import { PitchClass } from "../domain/models/pitch-class";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { take } from "../iterator/take";

interface Props {
  defaultPitchClass: PitchClass;
  onChange: (pitchClass: PitchClass) => void;
}

export const PitchClassSelect: FC<Props> = ({
  defaultPitchClass,
  onChange
}) => {
  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>): void =>
    onChange(new PitchClass(Number(event.target.value)));

  return (
    <FormControl>
      <InputLabel htmlFor="">Pitch Class</InputLabel>
      <Select onChange={handleSelectChange} value={defaultPitchClass.index}>
        {Array.from(take(PitchClass.pitchClasses(PitchClass.H), 12)).map(
          pitchClass => (
            <MenuItem key={pitchClass.index} value={pitchClass.index}>
              {pitchClass.toString()}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
