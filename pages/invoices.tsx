import React from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Skeleton from "@mui/material/Skeleton";
import { InvoiceGrid } from "./components/invoiceGrid";
import { useInvoiceList } from "./components/context/InvoiceContext";

const InvoicePage: NextPage = () => {
  const invoiceList = useInvoiceList();
  const loading = () => {
    return (
      <>
        <Typography variant="h4">Loading...</Typography>
        <Skeleton animation="wave" height={"600px"}></Skeleton>
      </>
    );
  };

  return <>{!invoiceList ? loading() : <InvoiceGrid />}</>;
};

export default InvoicePage;
