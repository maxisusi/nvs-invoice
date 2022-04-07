import React, { useEffect, useState } from "react";
import { Avatar, Theme } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Client } from "@nvs-shared/types";

import { stringToColor } from "@nvs-shared/utils";

export const useClientList = (clientList: Client[]) => {
  const [rows, setRows] = useState<any>([]);

  // Format Datas from Invoice Firebase to display them as Label on the Client Grid
  useEffect(() => {
    if (!clientList) return;
    const trim = clientList?.map((elem) => {
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

  // Columns of the Client grid
  const columns: GridColDef[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 0.2,
      renderCell: (params) => {
        return (
          <Avatar
            sx={{
              width: 35,
              height: 35,
              bgcolor: stringToColor(params.row.firstName),
            }}
            alt={`${params.row.firstName || ""} ${params.row.lastName || ""}`}
            src="/"
          ></Avatar>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
      editable: true,
    },
  ];

  return {
    rows,
    columns,
    useClientList,
  };
};
