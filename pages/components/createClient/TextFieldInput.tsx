import React, { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import { Props } from "./helper";

export const TextFieldInput: FunctionComponent<Props> = ({ name, formik }) => {
  return (
    <TextField
      id={name}
      name={name}
      label={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );
};
