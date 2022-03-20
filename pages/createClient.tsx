import { NextPage } from "next";
import React from "react";
import { CreateClient } from "./components/createClient";
import { TitleApp } from "./components/titleApp";

const createInvoice: NextPage = () => {
  return (
    <>
      <TitleApp title={"Create Client"} info={"Create an new client"} />
      <CreateClient />
    </>
  );
};

export default createInvoice;
