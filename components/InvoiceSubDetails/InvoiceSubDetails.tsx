import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CheckIcon from '@mui/icons-material/Check';

export const InvoiceSubDetails = () => {
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
          <strong>Amount Due:</strong> 4000 CHF
        </Typography>

        <Typography variant="subtitle1">
          <strong>Due date:</strong> 22 Mars 2022
        </Typography>
        <Typography variant="subtitle1">
          <strong>Payment type:</strong> BICS
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Button startIcon={<CheckIcon />} variant="outlined" color="warning">
          Marked as Paid
        </Button>
        <Button startIcon={<LocalPrintshopIcon />} variant="outlined">
          Print Invoice
        </Button>
      </Box>
    </Box>
  );
};
