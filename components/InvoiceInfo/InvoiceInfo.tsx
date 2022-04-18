import { Box, Stack, Typography, Chip } from '@mui/material';
import { useInvoice } from '@nvs-context/InvoiceContext';
import { $TSFixit } from '@nvs-shared/types';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const InvoiceInfo = () => {
  const { useGetDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);

  const { invoiceDate, status, id }: $TSFixit =
    invoice?.data?.data().billingDetails;

  const [stat, setStat] = useState();

  console.log(invoiceDate.toDate().toLocaleDateString());
  useEffect(() => {
    setStat(status);
  }, []);

  return (
    <Stack sx={{ textAlign: 'right' }}>
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Invoice No.</Typography>
        <Typography variant="h5">#{id}</Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Date: {invoiceDate.toDate().toLocaleDateString()}
        </Typography>
        <Typography variant="body1">
          Status:{' '}
          <Chip
            color={stat === 'pending' ? 'warning' : 'success'}
            label={stat}
          />
        </Typography>
      </Box>
    </Stack>
  );
};
