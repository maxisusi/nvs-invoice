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
import { CreateButton } from "@nvs-widget/CreateButton";
import { useFSClient } from "@nvs-context/FSClientContext";
const Clients: NextPage = () => {
  const { setModifyClient }: any = useComponentStatus();
  // const { clientList } = useFetchClient();

  const clientList = useFSClient();

  console.log(clientList);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleApp title={"All of the clients"} />
        <CreateButton urlPage={"/manageClient"} />
      </Box>

      {clientList && <ClientList clientList={clientList} />}
    </>
  );
};

export default Clients;
