import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TitleApp } from "./components/titleApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NextPage } from "next";
import Link from "next/link";
import { ClientList } from "./components/clientList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useComponentStatus } from "./components/context/ClientModifyContext";

const clientColRef = collection(db, "clients");
const Clients: NextPage = () => {
  const { modifyClient, setModifyClient }: any = useComponentStatus();
  const [clientList, setClientList] = useState<any>();

  useEffect(() => {
    const getClients = async () => {
      const data = await getDocs(clientColRef);
      const clientData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return setClientList(clientData);
    };
    getClients();
  }, []);

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
