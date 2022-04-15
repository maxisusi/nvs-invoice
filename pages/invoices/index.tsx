import React from 'react';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Skeleton from '@mui/material/Skeleton';
import { InvoiceGrid } from '@nvs-component/InvoiceGrid';

import { CreateButton } from '@nvs-widget/CreateButton';
import { TitleApp } from '@nvs-widget/TitleApp';

const InvoicePage: NextPage = () => {
  return (
    <>
      <TitleApp title={'All of the invoices'} />
      <InvoiceGrid />
      <CreateButton urlPage={'/createInvoice'} />
    </>
  );
};

export default InvoicePage;
