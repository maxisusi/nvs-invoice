import React from 'react';
import { Box, Button, Container, Paper, Skeleton } from '@mui/material';
import { InvoiceInfo } from '@nvs-component/InvoiceInfo';
import { InvoiceClientData } from '@nvs-component/InvoiceClientData';
import { InvoiceCompanyData } from '@nvs-component/InvoiceCompanyData';
import { InvoiceDetails } from '@nvs-component/InvoiceDetails';
import { InvoiceSubDetails } from '@nvs-component/InvoiceSubDetails';
import Image from 'next/image';

export const InvoiceView = () => {
  return (
    <Box>
      <Paper sx={{ padding: 3, minHeight: '70vh', width: '80%' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}
          >
            <Box>
              <Image
                src="https://verbierservices.net/images/logoVS.jpg"
                height={100}
                width={300}
                alt="logo"
              />
            </Box>
            <InvoiceInfo />
          </Box>

          {/* Client and company datas */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <InvoiceCompanyData />
            <InvoiceClientData />
          </Box>

          {/* Invoice Details */}
          <Box sx={{ marginBottom: 8 }}>
            <InvoiceDetails />
          </Box>

          <InvoiceSubDetails />
        </Container>
      </Paper>
      <Button color="error" sx={{ mt: 3 }}>
        Delete Invoice
      </Button>
    </Box>
  );
};
