import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CheckIcon from '@mui/icons-material/Check';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';

export const InvoiceSubDetails = () => {
  const { useGetDocument, useUpdateDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);
  const { dueDate, status } = invoice.data.data();

  const mutation = useUpdateDocument('invoices', router.query.id as string);

  const handleChangeStatus = () => {
    if (status == 'pending') {
      mutation.mutate({
        status: 'paid',
      });
    } else {
      mutation.mutate({
        status: 'pending',
      });
    }
  };

  const StatusButton = () => {
    if (status == 'pending') {
      return (
        <Button
          onClick={() => {
            handleChangeStatus();
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
            handleChangeStatus();
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
        <Typography variant="subtitle1">
          <strong>Due date: </strong>
          {dueDate.toDate().toLocaleDateString()}
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
