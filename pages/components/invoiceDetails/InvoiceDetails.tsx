import { Box, Modal, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { InvoiceTable } from "../InvoiceTable";
import { style, Props } from "./helper";

export const InvoiceDetails: FunctionComponent<Props> = ({
  open,
  setOpen,
  invoice,
}) => {
  // Close the modal
  const handleClose = () => setOpen(false);

  // Extracting datas from the invoice
  const {
    firstName,
    lastName,
    city,
    phone,
    address,
    npa,
    dateCreated,
    dueDate,
    id,
    entries,
  } = invoice;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 10,
          }}
        >
          <Box>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography>{city}</Typography>
            <Typography>{phone}</Typography>
            <Typography>{address}</Typography>
            <Typography>{npa}</Typography>
          </Box>
          <Box>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              {dateCreated.toDate().toLocaleDateString()}
            </Typography>
            <Typography>
              Due Date: {dueDate.toDate().toLocaleDateString()}
            </Typography>
            <Typography>Invoice ID: {id}</Typography>
          </Box>
        </Box>
        <InvoiceTable list={entries} />
      </Box>
    </Modal>
  );
};
