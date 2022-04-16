import { InvoiceForm } from '@nvs-component/InvoiceForm';
import { TitleApp } from '@nvs-widget/TitleApp';
import { NextPage } from 'next';
import React from 'react';

const createInvoice: NextPage = () => {
  return (
    <>
      <TitleApp title={'Create Invoice'} />
      <InvoiceForm />
    </>
  );
};

export default createInvoice;
