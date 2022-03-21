import { NextPage } from "next";
import React from "react";
import { useComponentStatus } from "./components/context/ClientModifyContext";
import { ManageClientFrom } from "./components/manageClientFrom";
import { TitleApp } from "./components/titleApp";

const createInvoice: NextPage = () => {
  return (
    <>
      <ManageClientFrom />
    </>
  );
};

export default createInvoice;
