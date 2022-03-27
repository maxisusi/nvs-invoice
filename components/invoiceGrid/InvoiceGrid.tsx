import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TitleApp } from "@nvs-widget/TitleApp";
import { useDataGrid } from "./useDataGrid";
import { Props } from "../InvoiceDetails/helper";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Link from "next/link";

// Dynamic import of Invoice details for better perfomance
const InvoiceDetails = dynamic<Props>(() =>
  import("../InvoiceDetails").then((mod) => mod.InvoiceDetails)
);

export const InvoiceGrid: FunctionComponent = () => {
  const {
    setOpenInvoice,
    rows,
    openInvoice,
    invoiceDetails,
    columns,
    setInvoiceList,
  } = useDataGrid();

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

        <Link href="/createInvoice" passHref>
          <Button
            size="medium"
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            Create Invoice
          </Button>
        </Link>
      </Box>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

      {invoiceDetails && (
        <InvoiceDetails
          open={openInvoice}
          setOpen={setOpenInvoice}
          invoice={invoiceDetails}
          setInvoice={setInvoiceList}
        />
      )}
    </>
  );
};
