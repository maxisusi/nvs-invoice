import { Box, Button, Modal, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { IClientData } from "@nvs-shared/types";
import { Props, style } from "./helper";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@nvs-shared/firebase";
import { useComponentStatus } from "@nvs-context/ClientModifyContext";
import { useClientData } from "@nvs-context/ClientModifyContext";

export const ClientDetails: FunctionComponent<Props> = ({
  open,
  setOpenClient,
  clientDetails,
  setRows,
}) => {
  const handleClose = () => setOpenClient(false);
  const { setModifyClient }: any = useComponentStatus();
  const { setClientModifyData }: any = useClientData();

  const router = useRouter();

  const {
    address,
    city,
    email,
    firstName,
    lastName,
    npa,
    phone,
    id,
  }: IClientData = clientDetails;

  const handleDelete = async () => {
    await deleteDoc(doc(db, "clients", id)).then(() => {
      console.log("Client successfully deleted");
      setRows((prevState: IClientData[]) =>
        prevState.filter((elem) => elem.id !== id)
      );
      handleClose();
    });
  };

  const handleModify = () => {
    // Set Client details to the context to change the "Manage client form" so that we can edit the client instead of creating a new one
    setModifyClient(true);
    setClientModifyData(clientDetails);
    router.push("/manageClient");
  };
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
        <Typography sx={{ mb: 5 }}>
          {city} - {npa}
        </Typography>

        <Button onClick={handleDelete} color="error">
          Delete Client
        </Button>

        <Button color="warning" onClick={handleModify}>
          Modify Details
        </Button>
      </Box>
    </Modal>
  );
};
