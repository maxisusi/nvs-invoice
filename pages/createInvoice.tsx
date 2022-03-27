import { CreateInvoiceGrid } from "@nvs-component/CreateInvoiceGrid";
import { TitleApp } from "@nvs-widget/TitleApp";
import { NextPage } from "next";
import React from "react";

const createInvoice: NextPage = () => {
  return (
    <>
      <TitleApp title={"Create Invoice"} />
      <CreateInvoiceGrid />
    </>
  );
};

export default createInvoice;
