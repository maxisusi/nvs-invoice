import React, { FunctionComponent } from "react";
import FaceIcon from "@mui/icons-material/Face";
import EditIcon from "@mui/icons-material/Edit";
import { CreateNewClient } from "@nvs-component/CreateNewClient";
import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
} from "@mui/material";

import { Label } from "@nvs-widget/Label";
import { Client } from "@nvs-shared/types";
import { styleEdit, Props } from "./helper";

export const ClientDetails: FunctionComponent<Props> = ({ client }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    address,
    city,
    country,
    email,
    firstName,
    lastName,
    npa,
    mobile,
    phone,
    timeCreated,
  } = client;
  return (
    <Paper variant="outlined">
      <Container
        sx={{
          pt: 3,
          pb: 5,
        }}
      >
        {/* Personnal details header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <FaceIcon sx={{ color: "grey.500" }} />
            <Typography variant={"h6"}>Personnal Details</Typography>
          </Box>

          {/* Edit Button */}
          <Box>
            <Button
              onClick={() => {
                handleOpen();
              }}
              startIcon={<EditIcon />}
              variant="outlined"
            >
              Edit
            </Button>
          </Box>
        </Box>

        {/* Label informations  */}
        <Label
          firstTitle="First name"
          lastTitle="Last name"
          firstElem={firstName}
          lastElem={lastName}
        />

        <Label
          firstTitle="Email"
          lastTitle="Country"
          firstElem={email}
          lastElem={country?.label}
        />

        <Label
          firstTitle="NPA"
          lastTitle="City"
          firstElem={npa}
          lastElem={city}
        />

        <Label
          firstTitle="Address"
          lastTitle="Phone"
          firstElem={address}
          lastElem={phone}
          isLast
        />

        {/* <Label
          firstTitle="Mobile"
          firstElem={mobile}
          lastTitle="Client since"
          lastElem={timeCreated}
          isLast
        /> */}
      </Container>

      {/* Edit Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleEdit}>
          <CreateNewClient
            payload={client as Client}
            handleCloseDetails={handleClose}
          />
        </Box>
      </Modal>
    </Paper>
  );
};
