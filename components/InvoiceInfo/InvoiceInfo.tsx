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

  const { dueDate, dateCreated, status }: $TSFixit = invoice?.data?.data();

  const [stat, setStat] = useState('pending');

  useEffect(() => {
    setStat(status);
  }, [status]);

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
            color={stat === 'pending' ? 'warning' : 'success'}
            label={stat}
          />
        </Typography>
      </Box>
    </Stack>
  );
};
