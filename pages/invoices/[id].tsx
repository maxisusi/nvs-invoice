import { InvoicePage } from '@nvs-component/InvoicePage';
import React from 'react';
import { InvoiceProvider } from '@nvs-context/InvoiceContext';
import { $TSFixit } from '@nvs-shared/types';

function InvoiceIndex({ params }: $TSFixit) {
  return (
    <InvoiceProvider>
      <div>
        <InvoicePage params={params} />
      </div>
    </InvoiceProvider>
  );
}

export function getServerSideProps(context: $TSFixit) {
  return {
    props: { params: context.params },
  };
}

export default InvoiceIndex;
