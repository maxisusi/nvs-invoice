import React from 'react';
import type { NextPage } from 'next';
import { InvoiceGrid } from '@nvs-component/InvoiceGrid';
import { CreateButton } from '@nvs-widget/CreateButton';
import { TitleApp } from '@nvs-widget/TitleApp';

const InvoicePage: NextPage = () => {
  return (
    <>
      <TitleApp title={'All of the invoices'} />
      <InvoiceGrid />
      <CreateButton urlPage={'/invoices/createInvoice'} />
    </>
  );
};

export default InvoicePage;
