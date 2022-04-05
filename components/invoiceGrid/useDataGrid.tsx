import { useEffect, useState } from "react";
import { useInvoiceList } from "@nvs-context/InvoiceContext";
import { IInvoiceData } from "@nvs-shared/types";
import { Button, Chip, Theme } from "@mui/material";
import { GridCellParams } from "@mui/x-data-grid";
import { IInvoiceLabelGrid } from "./helper";

import { db } from "@nvs-shared/firebase";
import { collection, getDocs } from "firebase/firestore";

const invoicesColRef = collection(db, "invoices");

export const useDataGrid = () => {
  // const invoiceList = useInvoiceList() as Array<IInvoiceData>;
  const [rows, setRows] = useState<IInvoiceLabelGrid[]>([]);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState<IInvoiceData | null>(
    null
  );
  const [invoiceList, setInvoiceList] = useState<any>();

  useEffect(() => {
    // Query Firebase to retreive all of the invoices
    const getInvoices = async () => {
      const data = await getDocs(invoicesColRef);
      const invoiceList = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return setInvoiceList(invoiceList);
    };
    getInvoices();
  }, []);

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

    if (!invoiceList) return;

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
    { field: "col1", headerName: "ID", flex: 1 },
    { field: "col2", headerName: "Client", flex: 1 },
    { field: "col3", headerName: "Date", flex: 1 },
    { field: "col4", headerName: "Total", flex: 1 },
    {
      field: "col5",
      headerName: "Status",
      renderCell: (cellValues: GridCellParams) => {
        const invoiceStatus = cellValues.value;
        return (
          <Chip
            label={invoiceStatus}
            color={invoiceStatus === "pending" ? "warning" : "success"}
          />
        );
      },
    },
  ];

  return {
    invoiceList,
    setInvoiceList,
    setOpenInvoice,
    rows,
    setRows,
    openInvoice,
    invoiceDetails,
    openInvoiceDetails,
    columns,
  };
};
