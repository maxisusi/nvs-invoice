import { db } from "@nvs-shared/firebase";
import { Client } from "@nvs-shared/types";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, {
  useState,
  FunctionComponent,
  useEffect,
  useContext,
  createContext,
} from "react";

const clientColRef = collection(db, "clients");

const FSClientContext = createContext({});

export const useFSClient = () => {
  return useContext(FSClientContext);
};

export const FSClientProvider: FunctionComponent = ({ children }) => {
  const [client, setClient] = useState<Client[] | []>([]);

  // Fetch invoice client datas
  useEffect(() => {
    const unsubscribe = onSnapshot(clientColRef, (snapshot) => {
      const clientDatas = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setClient(clientDatas as Client[]);
    });
  }, []);

  return (
    <>
      <FSClientContext.Provider value={client as Client[]}>
        {children}
      </FSClientContext.Provider>
    </>
  );
};
