import React, { FC, ChangeEvent } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Scale, ScaleType } from "../domain/models/scale";

interface Props {
  scaleType: ScaleType;
  onChange: (scaleType: ScaleType) => void;
}

export const ScaleTypeSelector: FC<Props> = ({ scaleType, onChange }) => {
  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>): void => {
    onChange(event.target.value as any);
  };

  return (
    <FormControl>
      <InputLabel htmlFor="">Type</InputLabel>
      <Select onChange={handleSelectChange} value={scaleType}>
        {Scale.scaleTypes.map(t => (
          <MenuItem key={t} value={t}>
            {t}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
