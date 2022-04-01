import React, { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import { Props } from "./helper";

export const TextFieldInput: FunctionComponent<Props> = ({
  name,
  formik,
  field,
}) => {
  return (
    <TextField
      fullWidth
      id="outlined-controlled"
      name={field}
      label={name}
      value={formik.values[field]}
      onChange={formik.handleChange}
      error={formik.touched[field] && Boolean(formik.errors[field])}
      // helperText={formik.touched[field] && formik.errors[field]}
    />
  );
};
