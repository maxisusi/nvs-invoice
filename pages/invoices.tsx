import React from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Skeleton from "@mui/material/Skeleton";
import { InvoiceGrid } from "@nvs-component/InvoiceGrid";
import { useInvoiceList } from "@nvs-context/InvoiceContext";

const InvoicePage: NextPage = () => {
  const loading = () => {
    return (
      <>
        <Typography variant="h4">Loading...</Typography>
        <Skeleton animation="wave" height={"600px"}></Skeleton>
      </>
    );
  };

  return (
    <>
      <InvoiceGrid />
    </>
  );
};

export default InvoicePage;
