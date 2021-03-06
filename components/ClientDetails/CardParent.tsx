import React, { FunctionComponent } from "react";
import { CreateNewClient } from "@nvs-component/CreateNewClient";
import { Avatar, Box, Button, Link, Stack, Typography } from "@mui/material";
import { stringToColor } from "@nvs-shared/utils";
import Modal from "@mui/material/Modal";
import { Client, CountryType } from "@nvs-shared/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { style } from "./helper";
import { useClientDetails } from "./useClientDetails";

export const CardParent = () => {
  const { client, open, handleOpen, handleClose } = useClientDetails();

  const {
    email,
    firstName,
    lastName,
    timeCreated,
    address,
    npa,
    city,
    country,
    phone,
    mobile,
    type,
  } = client as Client;
  return (
    <>
      <CardContent sx={{ height: "30vh" }}>
        <Stack>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
            <Avatar
              sx={{
                width: 50,
                height: 50,
                bgcolor: stringToColor(firstName),
              }}
              alt={`${firstName || ""} ${lastName || ""}`}
              src="/"
            ></Avatar>
            <Box>
              <Typography variant="h5">{firstName + " " + lastName}</Typography>
              <Typography variant="body2" color={"text.secondary"}>
                Since {timeCreated}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography variant={"subtitle2"}>Personnal Details</Typography>
          </Box>

          <Typography variant="body2">
            {country?.label as CountryType}
          </Typography>
          <Typography variant="body2">{address}</Typography>
          <Typography variant="body2">{npa + " " + city}</Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography variant={"subtitle2"}>More Informations</Typography>
          </Box>

          <Typography variant="body2">{type}</Typography>
          <Link variant="body2">{email}</Link>
          <Typography variant="body2">{phone}</Typography>
          <Typography variant="body2">{mobile}</Typography>
        </Stack>
      </CardContent>

      <CardActions>
        <Button onClick={handleOpen} size="small">
          Edit infos
        </Button>
      </CardActions>

      {/* Edit Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateNewClient
            payload={client as Client}
            handleCloseDetails={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};
