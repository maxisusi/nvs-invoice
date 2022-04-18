import { Box, Button, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { useReducer } from 'react';

import BillingInfo from './BillingInfo';

import { Subdetails } from './Subdetails';
import CreateIcon from '@mui/icons-material/Create';
import { EntryGenerator } from '@nvs-component/EntryGenerator';
import { InvoiceTable } from '@nvs-component/InvoiceTable';
import { InvoiceProvider } from '@nvs-context/InvoiceContext';
import { useInvoiceForm } from './useInvoiceForm';
import { Formik, Form } from 'formik';
import {
  initialBillingInformation,
  validateBillingInformations,
} from './helper';

/**
 * TODO: Submit the form and store it to the "invoice"
 * ! Formik doesn't allow us to create context with useFormik
 * ! We can't submit to the server
 * ? We may have to create subfolders for components
 */

export const InvoiceForm = () => {
  const { handleServerSubmit } = useInvoiceForm();
  return (
    <>
      <Paper
        sx={{
          padding: 5,
          width: '80%',
        }}
      >
        <Formik
          initialValues={{ ...initialBillingInformation }}
          // validationSchema={validateBillingInformations}
          onSubmit={(values) => {
            handleServerSubmit(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              {/* Head menu */}
              <BillingInfo />
              <Divider sx={{ mt: 5, mb: 5 }} />

              <Typography variant="h6" sx={{ mb: 3 }}>
                Items
              </Typography>
              <EntryGenerator />
              <InvoiceTable />
              <Subdetails />
              <Divider sx={{ mt: 5, mb: 4 }} />
              <Box
                sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}
              >
                <Button
                  onClick={() => handleSubmit()}
                  startIcon={<CreateIcon />}
                  variant="contained"
                >
                  Create Invoice
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>

      {/* Action button */}
    </>
  );
};
