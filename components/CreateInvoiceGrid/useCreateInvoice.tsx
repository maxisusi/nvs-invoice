import { useFetchClient } from "@nvs-shared/useFetchClient";
import React, { useState } from "react";
import { useEffect } from "react";
import { IClientName } from "./helper";

export const useCreateInvoice = () => {
  const { clientList } = useFetchClient();
  const [clientNameList, setClientNameList] = useState([]);

  useEffect(() => {
    const trim = clientList.map((elem: IClientName) => {
      return {
        firstName: elem.firstName,
        lastName: elem.lastName,
        id: elem.id,
      };
    });
    setClientNameList(trim);
  }, [clientList]);

  return {
    clientNameList,
    useCreateInvoice,
  };
};
