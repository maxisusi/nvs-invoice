import { DatePicker, LocalizationProvider } from '@mui/lab';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
export function EntryGenerator({
  AdapterDateFns,
  dateEntry,
  newValue,
  dispatch,
  params,
  descr,
  e,
  qty,
  rate,
  event,
  totalEntry,
}) {
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
          value={dateEntry}
          onChange={(newValue) => {
            {
              dispatch({
                type: 'FIELD',
                field: 'dateEntry',
                value: newValue,
              });
            }
          }}
          renderInput={(params) => (
            <TextField required variant="filled" {...params} />
          )}
        />
      </LocalizationProvider>
      <TextField
        fullWidth
        value={descr}
        variant="filled"
        onChange={(e) =>
          dispatch({
            type: 'FIELD',
            field: 'descr',
            value: e.target.value,
          })
        }
        required
        id="outlined-required"
        label="Description"
      />
      <TextField
        value={qty}
        onChange={(e) =>
          dispatch({
            type: 'FIELD',
            field: 'qty',
            value: e.target.value,
          })
        }
        required
        variant="filled"
        id="outlined-required"
        label="QTY/H"
      />
      <TextField
        value={rate}
        variant="filled"
        onChange={(e) =>
          dispatch({
            type: 'FIELD',
            field: 'rate',
            value: e.target.value,
          })
        }
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
          dispatch({
            type: 'ADD_ENTRY',
            field: 'entries',
            newItem: {
              date: dateEntry,
              type: descr,
              qty: qty,
              rate: rate,
              total: totalEntry(qty, rate),
            },
          });
          event.stopPropagation();
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
