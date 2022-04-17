import AddIcon from '@mui/icons-material/Add';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEntryGenerator } from './useEntryGenerator';

export function EntryGenerator() {
  const { formik } = useEntryGenerator();
  const { setFieldValue, values } = formik;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        mb: 7,
        width: '100%',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={values.date}
          onChange={(newValue) => {
            setFieldValue('date', newValue);
          }}
          renderInput={(params) => (
            <TextField required variant="filled" {...params} />
          )}
        />
      </LocalizationProvider>
      <TextField
        fullWidth
        value={values.description}
        onChange={(event) => setFieldValue('description', event.target.value)}
        variant="filled"
        required
        id="outlined-required"
        label="Description"
      />
      <TextField
        value={values.qty}
        onChange={(event) => setFieldValue('qty', event.target.value)}
        required
        variant="filled"
        id="outlined-required"
        label="QTY/H"
      />
      <TextField
        value={values.rate}
        variant="filled"
        onChange={(event) => setFieldValue('rate', event.target.value)}
        required
        id="outlined-required"
        label="Rate"
      />

      <IconButton
        color="primary"
        sx={{
          flex: 1,
        }}
        onClick={(event) => {
          formik.handleSubmit();
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
