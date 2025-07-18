import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup class="rowRadio-grid"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
        <FormControlLabel value="elementary" control={<Radio />} label="Elementary" />
        <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
        <FormControlLabel value="proficient" control={<Radio />} label="Proficient"/>
        <FormControlLabel value="advanced" control={<Radio />} label="Advanced"/>
        <FormControlLabel value="upperIntermediate" control={<Radio />} label="Upper Intermediate"/>
      </RadioGroup>
    </FormControl>
  );
}