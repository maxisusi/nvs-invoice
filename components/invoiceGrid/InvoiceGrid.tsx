import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDataGrid } from "./useDataGrid";
import { Props } from "../InvoiceDetails/helper";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useStyles } from "@nvs-shared/styles";

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

  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onRowClick={(params) => {
            router.push(`/invoices/${params.id}`);
          }}
        />
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
