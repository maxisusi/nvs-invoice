import React, { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import { TextFieldInput } from "./TextFieldInput";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useCreateClient } from "./useCreateClient";

export const CreateClient: FunctionComponent = () => {
  const { formik } = useCreateClient();

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="firstName" formik={formik} />
          <TextFieldInput name="lastName" formik={formik} />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="npa" formik={formik} />

          <TextFieldInput name="city" formik={formik} />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "52ch" },
          }}
        >
          <TextFieldInput name="address" formik={formik} />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="email" formik={formik} />
          <TextFieldInput name="phone" formik={formik} />
        </Box>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};
