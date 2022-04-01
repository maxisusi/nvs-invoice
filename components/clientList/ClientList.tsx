import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useClientList } from "./useClientList";
import { useFSClient } from "@nvs-context/FSClientContext";
import { useRouter } from "next/router";

import { Client } from "@nvs-shared/types";

export const ClientList: FunctionComponent = () => {
  const clientList = useFSClient();
  const { rows, columns, useStyles } = useClientList(clientList as Client[]);
  const classes = useStyles();
  const router = useRouter();

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
            router.push(`/clients/${params.id}`);
          }}
        />
      </div>
    </>
  );
};
