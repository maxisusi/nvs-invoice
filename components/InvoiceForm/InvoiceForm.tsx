import { Box, Button, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { useReducer } from 'react';

import BillingInfo from './BillingInfo';

import { Subdetails } from './Subdetails';
import CreateIcon from '@mui/icons-material/Create';
import { EntryGenerator } from '@nvs-component/EntryGenerator';
import { InvoiceTable } from '@nvs-component/InvoiceTable';
import { InvoiceProvider } from '@nvs-context/InvoiceContext';

/**
 * TODO: Define the plan to manage the state
 * TODO: Fetch the client names
 * TODO: Create a validation schema for the invoice and the items
 * TODO: Submit the form and store it to the "invoice"
 * ! We can't submit to the server
 * ? We may have to create subfolders for components
 */

export const InvoiceForm = () => {
  return (
    <>
      <Paper
        sx={{
          padding: 5,
          width: '80%',
        }}
      >
        {/* Head menu */}
        <BillingInfo />
        <Divider sx={{ mt: 5, mb: 5 }} />

        <Typography variant="h6" sx={{ mb: 3 }}>
          Items
        </Typography>
        <InvoiceProvider>
          <EntryGenerator />
          <InvoiceTable />
          <Subdetails />
        </InvoiceProvider>
        <Divider sx={{ mt: 5, mb: 4 }} />
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
          <Button startIcon={<CreateIcon />} variant="contained">
            Create Invoice
          </Button>
        </Box>
      </Paper>

      {/* Action button */}
    </>
  );
};
