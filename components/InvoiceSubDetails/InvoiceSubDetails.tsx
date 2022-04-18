import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CheckIcon from '@mui/icons-material/Check';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import { $TSFixit } from '@nvs-shared/types';

export const InvoiceSubDetails = () => {
  const [stat, setStat] = useState();
  const { useGetDocument, useUpdateDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);
  const { remarks, paymentDue, status }: $TSFixit =
    invoice?.data?.data().billingDetails;

  const mutation = useUpdateDocument('invoices', router.query.id as string);

  useEffect(() => {
    setStat(status);
  }, []);

  const StatusButton = () => {
    if (stat == 'pending') {
      return (
        <Button
          onClick={() => {
            setStat('paid');
            mutation.mutate({
              status: 'paid',
            });
          }}
          startIcon={<CheckIcon />}
          variant="outlined"
          color="warning"
        >
          Marked as Paid
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => {
            setStat('pending');
            mutation.mutate({
              status: 'pending',
            });
          }}
          startIcon={<CheckIcon />}
          variant="outlined"
          color="success"
        >
          Marked as pending
        </Button>
      );
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
      }}
    >
      <Box>
        <Typography variant="subtitle2">"{remarks}"</Typography>
        <Typography variant="subtitle1">
          <strong>Due date: </strong>
          {paymentDue.toDate().toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Payment type:</strong> BICS
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <StatusButton />
        <Button startIcon={<LocalPrintshopIcon />} variant="outlined">
          Print Invoice
        </Button>
      </Box>
    </Box>
  );
};
