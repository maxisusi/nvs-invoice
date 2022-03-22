import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Props } from "./helper";
import { useClientList } from "./useClientList";
import { ClientDetails } from "../ClientDetails";

export const ClientList: FunctionComponent<Props> = ({ clientList }) => {
  const { rows, columns, clientDetails, openClient, setOpenClient, setRows } =
    useClientList(clientList);

  return (
    <>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
        <ClientDetails
          open={openClient}
          setOpenClient={setOpenClient}
          clientDetails={clientDetails}
          setRows={setRows}
        />
      </div>
    </>
  );
};
