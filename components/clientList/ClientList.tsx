import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Props as CDProps } from "../ClientDetails/helper";
import { useClientList } from "./useClientList";

import dynamic from "next/dynamic";
import { useFSClient } from "@nvs-context/FSClientContext";
import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Dynamic import of Client details for better perfomance
const ClientDetails = dynamic<CDProps>(() =>
  import("../ClientDetails").then((mod) => mod.ClientDetails)
);

export const ClientList: FunctionComponent = () => {
  const clientList = useFSClient();

  const {
    rows,
    columns,
    clientDetails,
    openClient,
    setOpenClient,
    setRows,
    openClientDetails,
    useStyles,
  } = useClientList(clientList);

  const classes = useStyles();

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          className={classes.root}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          isCellEditable={() => false}
          onRowClick={(params) => {
            openClientDetails(params.id as string);
          }}
        />

        {openClient && (
          <ClientDetails
            open={openClient}
            setOpenClient={setOpenClient}
            clientDetails={clientDetails}
            setRows={setRows}
          />
        )}
      </div>
    </>
  );
};
