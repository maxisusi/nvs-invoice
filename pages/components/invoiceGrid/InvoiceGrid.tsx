import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TitleApp } from "../titleApp";
import { useDataGrid } from "./useDataGrid";
import { Props } from "../invoiceDetails/helper";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// Dynamic import of Invoice details for better perfomance
const InvoiceDetails = dynamic<Props>(() =>
  import("../invoiceDetails").then((mod) => mod.InvoiceDetails)
);

export const InvoiceGrid: FunctionComponent = () => {
  const { setOpenInvoice, rows, openInvoice, invoiceDetails, columns } =
    useDataGrid();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleApp
          title={"Latest Invoices"}
          info={"Manage and store invoices from your client list"}
        />
        <Button size="medium" variant="contained" startIcon={<AddCircleIcon />}>
          Create Invoice
        </Button>
      </Box>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

      {invoiceDetails && (
        <InvoiceDetails
          open={openInvoice}
          setOpen={setOpenInvoice}
          invoice={invoiceDetails}
        />
      )}
    </>
  );
};