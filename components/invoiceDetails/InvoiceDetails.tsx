import { Box, Button, Modal, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { InvoiceTable } from "../InvoiceTable";
import { style, Props } from "./helper";
import { useDataGrid } from "@nvs-component/InvoiceGrid/useDataGrid";
import { useSetInvoiceList } from "@nvs-context/InvoiceContext";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";

export const InvoiceDetails: FunctionComponent<Props> = ({
  open,
  setOpen,
  invoice,
  setInvoice,
}) => {
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
    status,
  } = invoice;

  // Close the modal
  const handleClose = () => setOpen(false);
  const { invoiceList } = useDataGrid();

  const invoiceDocRef = doc(db, "invoices", id);
  const handleToggle = async () => {
    let finalStatus;
    // if (status === "pending") {
    //   finalStatus = "paid";
    // } else {
    //   finalStatus = "pending";
    // }

    console.log(finalStatus);

    console.log(newRow);
    // await updateDoc(invoiceDocRef, {
    //   status: finalStatus,
    // }).then(() => {
    //   console.log("Invoice successfully changed");
    //   setInvoice(newRow);
    //   setOpen(false);
    // });
  };

  const handleDelete = async () => {
    const newRow = invoiceList.filter((elem) => elem.id !== id);

    setInvoice(newRow);
    setOpen(false);

    await deleteDoc(doc(db, "invoices", id)).then(() => {
      console.log("Invice successfully deleted");
      setInvoice(newRow);
      setOpen(false);
    });
  };

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

        <Button color="error" onClick={handleDelete}>
          Delete Invoice
        </Button>

        <Button color="error" onClick={handleToggle}>
          Toggle Invoice Status
        </Button>
      </Box>
    </Modal>
  );
};
