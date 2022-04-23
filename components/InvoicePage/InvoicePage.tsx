import { Box, Skeleton } from '@mui/material';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import React from 'react';
import { $TSFixit } from '@nvs-shared/types';

// import { useInvoice } from '@nvs-context/InvoiceContext';
import { InvoiceView } from './InvoiceView';

const LoadingComponent = () => (
  <Box sx={{ width: '100%', height: '100vh' }}>
    <Skeleton variant="rectangular" sx={{ height: '70vh' }} />
  </Box>
);

export const InvoicePage = ({ params }: $TSFixit) => {
  const { useGetDocument } = useFSDoc();
  const invoice = useGetDocument('invoices', params.id);

  return (
    <div>
      {invoice.isLoading ? (
        <LoadingComponent />
      ) : (
        <InvoiceView clientID={params.id} />
      )}
    </div>
  );
};
