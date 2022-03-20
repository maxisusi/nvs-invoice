import { useEffect, useState } from "react";
import { useInvoiceList } from "../context/InvoiceContext";
import { IInvoiceData } from "../../../types";
import { Button, Chip } from "@mui/material";
import { GridCellParams } from "@mui/x-data-grid";
import { IInvoiceLabelGrid } from "./helper";

export const useDataGrid = () => {
  const invoiceList = useInvoiceList() as Array<IInvoiceData>;
  const [rows, setRows] = useState<IInvoiceLabelGrid[]>([]);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState<IInvoiceData | null>(
    null
  );

  // Opens the invoice details
  const openInvoiceDetails = (invoiceId: string) => {
    const filteredList = invoiceList.filter((elem) => elem.id == invoiceId);

    // Send the selected invoice details to the invoice sheet
    setOpenInvoice(true);
    setInvoiceDetails(filteredList[0]);
  };

  // Format Datas from Invoice Firebase to display them as Label on the Invoice Grid
  useEffect(() => {
    const tempObj: Array<IInvoiceLabelGrid> = [];

    invoiceList.forEach((elem) => {
      const tempRow: IInvoiceLabelGrid = {
        id: elem.id,
        col1: elem.id,
        col2: `${elem.firstName} ${elem.lastName}`,
        col3: elem.dateCreated.toDate().toLocaleDateString(),
        col4: `${elem.entries
          .map(({ total }) => total)
          .reduce((sum, i) => sum + i, 0)} CHF`,
        col5: elem.status,
      };
      tempObj.push(tempRow);
    });
    return setRows(tempObj);
  }, [invoiceList]);

  // Columns of the Invoice grid
  const columns = [
    { field: "col1", headerName: "ID", width: 100 },
    { field: "col2", headerName: "Client", width: 150 },
    { field: "col3", headerName: "Date", width: 150 },
    { field: "col4", headerName: "Total", width: 150 },
    {
      field: "col5",
      headerName: "Status",
      renderCell: (cellValues: GridCellParams) => {
        const invoiceStatus = cellValues.value;
        return (
          <Chip
            label={invoiceStatus}
            color={invoiceStatus === "pending" ? "primary" : "success"}
          />
        );
      },
    },
    {
      field: "col6",
      headerName: "View",
      renderCell: (cellValues: GridCellParams) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={(event) => {
              const id = cellValues.id as string;
              openInvoiceDetails(id);
            }}
          >
            View
          </Button>
        );
      },
    },
  ];

  return {
    invoiceList,
    setOpenInvoice,
    rows,
    openInvoice,
    invoiceDetails,
    openInvoiceDetails,
    columns,
  };
};
