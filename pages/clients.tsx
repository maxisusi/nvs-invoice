import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TitleApp } from "@nvs-widget/TitleApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NextPage } from "next";
import Link from "next/link";
import { ClientList } from "@nvs-component/ClientList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import { useComponentStatus } from "@nvs-context/ClientModifyContext";
import { useFetchClient } from "@nvs-shared/useFetchClient";
const Clients: NextPage = () => {
  const { setModifyClient }: any = useComponentStatus();
  const { clientList } = useFetchClient();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleApp
          title={"Client list"}
          info={"Manage and store clients from your list"}
        />
        <Link href="/manageClient" passHref>
          <Button
            size="medium"
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={() => setModifyClient(false)}
          >
            Create new client
          </Button>
        </Link>
      </Box>

      {clientList && <ClientList clientList={clientList} />}
    </>
  );
};

export default Clients;
