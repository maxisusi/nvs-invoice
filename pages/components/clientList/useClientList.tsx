import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { IClientData } from "../../../types";

export const useClientList = (clientList: IClientData[]) => {
  const [rows, setRows] = useState<any>([]);
  const [openClient, setOpenClient] = useState(false);
  const [clientDetails, setClientDetails] = useState<IClientData | []>([]);

  // Format Datas from Invoice Firebase to display them as Label on the Client Grid
  useEffect(() => {
    const trim = clientList.map((elem) => {
      return {
        id: elem.id,
        firstName: elem.firstName,
        lastName: elem.lastName,
        email: elem.email,
        phone: elem.phone,
      };
    });
    setRows(trim);
  }, [clientList]);

  const openClientDetails = (id: string) => {
    const filteredList = clientList.filter((elem) => elem.id == id);

    // Send the selected client details
    setOpenClient(true);
    setClientDetails(filteredList[0]);
  };

  // Columns of the Client grid
  const columns: GridColDef[] = [
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone number",
      width: 150,
      editable: true,
    },
    {
      field: "view",
      headerName: "View",
      renderCell: (cellValues: GridCellParams) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={(event) => {
              const id = cellValues.id as string;
              openClientDetails(id);
            }}
          >
            View
          </Button>
        );
      },
    },
  ];

  return {
    rows,
    columns,
    useClientList,
    openClientDetails,
    clientDetails,
    openClient,
    setOpenClient,
    setRows,
  };
};
