import { Box, Button, Paper, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { TextFieldInput } from "@nvs-component/TextFieldInput";
import { useClientContactForm } from "./useClientContactForm";
import { useRouter } from "next/router";
export const ClientContactPointForm = ({ payload }) => {
  const router = useRouter();
  const { formik } = useClientContactForm(router.query.id as string, payload);

  return (
    <div>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <TextFieldInput
              field={"firstName"}
              name={"First Name"}
              formik={formik}
            />
            <TextFieldInput
              field={"lastName"}
              name={"Last Name"}
              formik={formik}
            />
          </Box>

          <TextFieldInput field={"email"} name={"email"} formik={formik} />

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <TextFieldInput field={"phone"} name={"Phone"} formik={formik} />
            <TextFieldInput field={"mobile"} name={"Mobile"} formik={formik} />
          </Box>

          <Button
            startIcon={<AddCircleIcon />}
            color="primary"
            variant="contained"
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            Create New contact
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};
