/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import { TextFieldInput } from "./TextFieldInput";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/router";

import { useCreateClient } from "./useCreateClient";
import { Client } from "@nvs-shared/types";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";

import Modal from "@mui/material/Modal";

import Radio from "@mui/material/Radio";
import { countries } from "./helper";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};
type Props = {
  payload?: Client;
};

export const CreateNewClient: FunctionComponent<Props> = ({ payload }) => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Formik Functions
  const { formik } = useCreateClient(payload);
  const { country, type, martialStatus }: Client = formik.values;
  const router = useRouter();
  return (
    <>
      <Paper
        sx={{
          p: 5,
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 5,
          }}
        >
          {/* Stack 1 */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <FaceIcon sx={{ color: "grey.500" }} />
              <Typography variant={"h6"}>Personnal details</Typography>
            </Box>

            <Stack spacing={3}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onChange={(event) =>
                    formik.setFieldValue("type", event.target.value)
                  }
                >
                  <FormControlLabel
                    value="individual"
                    control={<Radio />}
                    label="Individual"
                  />
                  <FormControlLabel
                    value="company"
                    control={<Radio />}
                    label="Company"
                  />
                </RadioGroup>
              </FormControl>

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <FormControl sx={{ minWidth: 90 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={martialStatus}
                    label="Status"
                    onChange={(event) =>
                      formik.setFieldValue("martialStatus", event.target.value)
                    }
                  >
                    <MenuItem value={"Mr"}>Mr.</MenuItem>
                    <MenuItem value={"Ms"}>Ms.</MenuItem>
                    <MenuItem value={"Prof"}>Prof.</MenuItem>
                    <MenuItem value={"Dr"}>Dr.</MenuItem>
                  </Select>
                </FormControl>

                <TextFieldInput
                  name="First name"
                  formik={formik}
                  field="firstName"
                />

                <TextFieldInput
                  name="Last name"
                  formik={formik}
                  field={"lastName"}
                />
              </Box>

              <Box>
                <TextFieldInput name="Email" formik={formik} field={"email"} />
              </Box>

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <TextFieldInput name="Phone" formik={formik} field={"phone"} />
              </Box>
            </Stack>
          </Box>

          {/* Stack 2 */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <HomeIcon sx={{ color: "grey.500" }} />
              <Typography variant={"h6"}>Contact Informations</Typography>
            </Box>

            <Stack spacing={3}>
              <Autocomplete
                id="country-select"
                options={countries}
                autoHighlight
                value={country}
                onChange={(event: any, newValue: string | null) => {
                  formik.setFieldValue("country", newValue);
                }}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code})
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <TextFieldInput name="NPA" formik={formik} field={"npa"} />

                <TextFieldInput name="City" formik={formik} field={"city"} />
              </Box>

              <Box>
                <TextFieldInput
                  name="Address"
                  formik={formik}
                  field={"address"}
                />
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "right",
            gap: 3,
          }}
        >
          {!payload ? (
            <Button
              startIcon={<ClearIcon />}
              color="error"
              variant="outlined"
              onClick={handleOpen}
            >
              Cancel
            </Button>
          ) : (
            ""
          )}

          <Button
            startIcon={<AddCircleIcon />}
            color="primary"
            variant="contained"
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            {!payload ? "Create new Client" : "Update client"}
          </Button>
        </Box>
      </Paper>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ mb: 1 }}
          >
            Are you sure you want to cancel?
          </Typography>

          <Typography id="modal-modal-title" variant="body1" sx={{ mb: 3 }}>
            All the data will be lost permanently.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                router.push("/clients");
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
