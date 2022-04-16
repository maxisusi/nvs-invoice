import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Button, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { useReducer } from 'react';
import { EntryGenerator } from './EntryGenerator';
import BillingInfo from './BillingInfo';
import { InvoiceTable } from './InvoiceTable';
import { Subdetails } from './Subdetails';
import CreateIcon from '@mui/icons-material/Create';

const initialState = {
  dateEntry: null,
  dateInvoice: null,
  dueDate: '',
  descr: '',
  qty: '',
  rate: '',
  total: '',
  entries: [],
  client: [],
  status: '',
};

const addEntryReducer = (state, action) => {
  switch (action.type) {
    case 'FIELD': {
      return { ...state, [action.field]: action.value };
    }

    case 'ADD_ENTRY': {
      return {
        ...state,
        entries: [...state.entries, action.newItem],
        dateEntry: null,
        descr: '',
        qty: '',
        rate: '',
        total: '',
      };
    }

    case 'REMOVE_ENTRY': {
      return { ...state, entries: [...state.entries] };
    }

    default:
      break;
  }

  return state;
};

const totalEntry = (qty: number, rate: number) => {
  return qty * rate;
};

export const InvoiceForm = () => {
  const [state, dispatch] = useReducer(addEntryReducer, initialState);
  // const { clientNameList } = useInvoiceForm();

  const handleRemoveEntry = (index: number) => {
    console.log(index);
    dispatch({
      type: 'REMOVE_ENTRY',
      entries: entries.splice(index, 1),
    });
  };

  const {
    descr,
    qty,
    rate,
    entries,
    dateEntry,
    dateInvoice,
    client,
    status,
    dueDate,
  } = state;

  return (
    <>
      <Paper
        sx={{
          padding: 5,
          width: '80%',
        }}
      >
        {/* Head menu */}
        <BillingInfo
          client={client}
          dispatch={dispatch}
          AdapterDateFns={AdapterDateFns}
          dateInvoice={dateInvoice}
          dueDate={dueDate}
          status={status}
        />
        <Divider sx={{ mt: 5, mb: 5 }} />
        {/* Client Section */}
        <Typography variant="h6" sx={{ mb: 3 }}>
          Items
        </Typography>
        <EntryGenerator
          AdapterDateFns={AdapterDateFns}
          dateEntry={dateEntry}
          dispatch={dispatch}
          descr={descr}
          qty={qty}
          rate={rate}
          totalEntry={totalEntry}
        />
        <InvoiceTable />

        <Subdetails />
        <Divider sx={{ mt: 5, mb: 4 }} />
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
          <Button
            startIcon={<CreateIcon />}
            variant="contained"
            onClick={() => handleSubmitInvoice()}
          >
            Create Invoice
          </Button>
        </Box>
      </Paper>

      {/* Action button */}
    </>
  );
};