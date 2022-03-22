import React, { useEffect, useState } from "react";
import { db } from "@nvs-shared/firebase";
import { collection, getDocs } from "firebase/firestore";

export const useFetchClient = () => {
  const [clientList, setClientList] = useState<any>([]);
  const clientColRef = collection(db, "clients");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    useFetchClient,
    clientList,
  };
};
