import { Box, Stack, Typography, Chip } from '@mui/material';
import { useInvoice } from '@nvs-context/InvoiceContext';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import React from 'react';

export const InvoiceInfo = () => {
  const { useGetDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);

  const { dueDate, dateCreated, status } = invoice.data.data();

  return (
    <Stack sx={{ textAlign: 'right' }}>
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Invoice No.</Typography>
        <Typography variant="h5">#4322-NV</Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          Date: {dateCreated.toDate().toLocaleDateString()}
        </Typography>
        <Typography variant="body1">
          Status:{' '}
          <Chip
            color={status === 'pending' ? 'warning' : 'success'}
            label={status}
          />
        </Typography>
      </Box>
    </Stack>
  );
};
