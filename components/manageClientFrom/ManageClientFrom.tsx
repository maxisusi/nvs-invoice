import React, { FunctionComponent } from "react";
import { TextFieldInput } from "./TextFieldInput";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useCreateClient } from "./useCreateClient";
import { TitleApp } from "../titleApp";
import {
  useClientData,
  useComponentStatus,
} from "../context/ClientModifyContext";
import { IClientData } from "../../types";

export const ManageClientFrom: FunctionComponent = () => {
  const { formik } = useCreateClient();
  const { modifyClient }: any = useComponentStatus();
  const { clientModifyData }: any = useClientData();

  const { firstName, lastName, npa, address, phone, city, email }: IClientData =
    clientModifyData;

  return (
    <>
      {modifyClient ? (
        <TitleApp title={"Modify Client"} info={"Modify a specific client"} />
      ) : (
        <TitleApp title={"Create Client"} info={"Create an new client"} />
      )}

      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="firstName" formik={formik} value={firstName} />
          <TextFieldInput name="lastName" formik={formik} value={lastName} />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="npa" formik={formik} value={npa} />

          <TextFieldInput name="city" formik={formik} value={city} />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "52ch" },
          }}
        >
          <TextFieldInput name="address" formik={formik} value={address} />
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextFieldInput name="email" formik={formik} value={email} />
          <TextFieldInput name="phone" formik={formik} value={phone} />
        </Box>

        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};
