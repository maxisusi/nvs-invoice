import { Box, Button, Container, Paper } from '@mui/material';
import React from 'react';
import { InvoiceInfo } from '@nvs-component/InvoiceInfo';
import { InvoiceClientData } from '@nvs-component/InvoiceClientData';
import { InvoiceCompanyData } from '@nvs-component/InvoiceCompanyData';
import { InvoiceDetails } from '@nvs-component/InvoiceDetails';
import { InvoiceSubDetails } from '@nvs-component/InvoiceSubDetails';
import Image from 'next/image';
export const InvoicePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button color="error" sx={{ marginLeft: 'auto', mb: 0.5 }}>
        Delete Invoice
      </Button>
      <Paper sx={{ padding: 3 }}>
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
    </Box>
  );
};
