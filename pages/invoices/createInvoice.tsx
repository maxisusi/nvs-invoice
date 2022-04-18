import { InvoiceForm } from '@nvs-component/InvoiceForm';
import { TitleApp } from '@nvs-widget/TitleApp';
import { NextPage } from 'next';
import React from 'react';
import { InvoiceProvider } from '@nvs-context/InvoiceContext';
const createInvoice: NextPage = () => {
  return (
    <>
      <InvoiceProvider>
        <TitleApp title={'Create Invoice'} />
        <InvoiceForm />
      </InvoiceProvider>
    </>
  );
};

export default createInvoice;
