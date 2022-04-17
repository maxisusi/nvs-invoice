import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { $TSFixit } from '@nvs-shared/types';
import React from 'react';
import { handleSelectedClient } from './helper';
import { useInvoiceForm } from './useInvoiceForm';

function BillingInfo() {
  const { formik, clients } = useInvoiceForm();
  const { values, setFieldValue } = formik;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {/* Billing section */}
      <Box
        sx={{
          flexGrow: 0.4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
          }}
        >
          Bill to
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose a client</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose a client"
            onChange={(event) => {
              handleSelectedClient(
                event.target.value as string,
                clients,
                setFieldValue
              );
            }}
          >
            {clients.map((client: $TSFixit) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Invoice details section */}
      <Box
        sx={{
          flexGrow: 0.4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
          }}
        >
          Invoice details
        </Typography>

        <Stack spacing={3}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'space-between',
            }}
          >
            {/* Date picker */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Invoice Date"
                value={values.invoiceDate}
                onChange={(newValue) => {
                  setFieldValue('invoiceDate', newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>

            {/* Due date */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Payment due date
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.paymentDue}
                label="Payment due date"
                onChange={(event) => {
                  setFieldValue('paymentDue', event.target.value);
                }}
              >
                <MenuItem value={15}>Net 15 days</MenuItem>
                <MenuItem value={30}>Net 30 days</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Invoice status */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.status}
              label="Status"
              onChange={(event) => {
                setFieldValue('status', event.target.value);
              }}
            >
              <MenuItem value={'pending'}>Pending</MenuItem>
              <MenuItem value={'paid'}>Paid</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
}

export default BillingInfo;
