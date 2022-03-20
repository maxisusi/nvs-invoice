import { Box, Modal, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { IClientData } from "../../../types";
import { Props, style } from "./helper";

export const ClientDetails: FunctionComponent<Props> = ({
  open,
  setOpenClient,
  clientDetails,
}) => {
  const handleClose = () => setOpenClient(false);

  const { address, city, email, firstName, lastName, npa, phone }: IClientData =
    clientDetails;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h2"
          sx={{ mb: 2 }}
        >
          {firstName} {lastName}
        </Typography>

        <Typography>{email}</Typography>
        <Typography sx={{ mb: 2 }}>{phone}</Typography>
        <Typography>{address}</Typography>
        <Typography>
          {city} - {npa}
        </Typography>
      </Box>
    </Modal>
  );
};
