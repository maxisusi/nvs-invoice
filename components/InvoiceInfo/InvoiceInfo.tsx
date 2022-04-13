import { Box, Stack, Typography, Chip } from '@mui/material';
import React from 'react';

export const InvoiceInfo = () => {
  return (
    <Stack sx={{ textAlign: 'right' }}>
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h6">Invoice No.</Typography>
        <Typography variant="h5">#4322-NV</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Date: 15-04-2021</Typography>
        <Typography variant="body1">
          Status: <Chip color="warning" label="unpaid" />
        </Typography>
      </Box>
    </Stack>
  );
};
