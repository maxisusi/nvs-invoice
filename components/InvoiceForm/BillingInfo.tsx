import { DatePicker, LocalizationProvider } from '@mui/lab';
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
import React from 'react';

function BillingInfo({
  client,
  firstName,
  dispatch,
  AdapterDateFns,
  dateInvoice,
  dueDate,
  status,
}) {
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
            value={client?.firstName}
            label="Choose a client"
            onChange={(event) => {
              dispatch({
                type: 'FIELD',
                field: 'client',
                value: clientNameList.filter(
                  (elem) => elem.id === event.target.value
                ),
              });
            }}
          >
            {/* {clientNameList.map((client: IClientName) => (
            <MenuItem key={client.id} value={client.id}>
            {client.firstName} {client.lastName}
            </MenuItem>
            ))} */}
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
                value={dateInvoice}
                onChange={(newValue) => {
                  dispatch({
                    type: 'FIELD',
                    field: 'dateInvoice',
                    value: newValue,
                  });
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
                value={dueDate}
                label="Payment due date"
                onChange={(event) => {
                  dispatch({
                    type: 'FIELD',
                    field: 'dueDate',
                    value: event.target.value,
                  });
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
              value={status}
              label="Status"
              onChange={(event) => {
                dispatch({
                  type: 'FIELD',
                  field: 'status',
                  value: event.target.value,
                });
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
