import * as React from "react";
import TextField from "@mui/material/TextField";

type MuiTextfieldProps = {
  label: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
};

const MuiTextfield: React.FC<MuiTextfieldProps> = ({
  label,
  value,
  handleChange,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      label={label}
      variant="filled"
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default MuiTextfield;
