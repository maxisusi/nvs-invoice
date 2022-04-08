import React, { FunctionComponent, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useClientList } from "./useClientList";
import { useRouter } from "next/router";

import { useStyles } from "@nvs-shared/styles";
import { useMachine } from "@xstate/react";
import { clientList } from "@nvs-shared/smFetchClients";

export const ClientList: FunctionComponent = () => {
  const [{ context, matches }, send] = useMachine(clientList);
  const { results } = context;
  const { rows, columns } = useClientList(results as any);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    send("FETCH");
  }, [send]);

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          loading={matches("loading")}
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
