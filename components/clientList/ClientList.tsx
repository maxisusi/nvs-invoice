import React, { FunctionComponent } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Props as CDProps } from "../ClientDetails/helper";
import { Props } from "./helper";
import { useClientList } from "./useClientList";

import dynamic from "next/dynamic";

// Dynamic import of Client details for better perfomance
const ClientDetails = dynamic<CDProps>(() =>
  import("../ClientDetails").then((mod) => mod.ClientDetails)
);

export const ClientList: FunctionComponent<Props> = ({ clientList }) => {
  const { rows, columns, clientDetails, openClient, setOpenClient, setRows } =
    useClientList(clientList);

  return (
    <>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />

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
