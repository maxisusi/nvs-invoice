import { IClientData } from "@nvs-shared/types";
import { useFetchClient } from "@nvs-shared/useFetchClient";
import React, { useState } from "react";
import { useEffect } from "react";
import { IClientName } from "./helper";

export const useCreateInvoice = () => {
  const { clientList } = useFetchClient();
  const [clientNameList, setClientNameList] = useState([]);

  useEffect(() => {
    // const trim = clientList.map((elem: IClientData) => {
    //   return {
    //     firstName: elem.firstName,

    //     lastName: elem.lastName,
    //     id: elem.id,
    //   };
    // });
    setClientNameList(clientList);
  }, [clientList]);

  return {
    clientNameList,
    useCreateInvoice,
  };
};
