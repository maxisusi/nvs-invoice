import React, { useState, useReducer, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useCreateInvoice } from "./useCreateInvoice";
import { IClientName } from "./helper";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { IInvoiceData } from "@nvs-shared/types";

const initialState = {
  dateEntry: null,
  dateInvoice: null,
  dueDate: "",
  descr: "",
  qty: "",
  rate: "",
  total: "",
  entries: [],
  client: [],
  status: "",
};

const addEntryReducer = (state, action) => {
  switch (action.type) {
    case "FIELD": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "ADD_ENTRY": {
      return {
        ...state,
        entries: [...state.entries, action.newItem],
        dateEntry: null,
        descr: "",
        qty: "",
        rate: "",
        total: "",
      };
    }

    default:
      break;
  }
  return state;
};

const totalEntry = (qty: number, rate: number) => {
  return qty * rate;
};

export const CreateInvoiceGrid = () => {
  const [state, dispatch] = useReducer(addEntryReducer, initialState);
  const { clientNameList } = useCreateInvoice();

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
  console.log(state);

  return (
    <>
      <Box sx={{ minWidth: 20 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={dateInvoice}
            onChange={(newValue) => {
              dispatch({
                type: "FIELD",
                field: "dateInvoice",
                value: newValue,
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        {/* Client Section */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Client</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={client?.firstName}
            label="Client"
            onChange={(event) => {
              dispatch({
                type: "FIELD",
                field: "client",
                value: clientNameList.filter(
                  (elem) => elem.id === event.target.value
                ),
              });
            }}
          >
            {clientNameList.map((client: IClientName) => (
              <MenuItem key={client.id} value={client.id}>
                {client.firstName} {client.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={(event) => {
              dispatch({
                type: "FIELD",
                field: "status",
                value: event.target.value,
              });
            }}
          >
            <MenuItem value={"pending"}>Pending</MenuItem>
            <MenuItem value={"paid"}>Paid</MenuItem>
          </Select>
        </FormControl>

        {/* Due date */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Due Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dueDate}
            label="Due Date"
            onChange={(event) => {
              dispatch({
                type: "FIELD",
                field: "dueDate",
                value: event.target.value,
              });
            }}
          >
            <MenuItem value={15}>Net 15 days</MenuItem>
            <MenuItem value={30}>Net 30 days</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mt: 10 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={dateEntry}
            onChange={(newValue) => {
              {
                dispatch({
                  type: "FIELD",
                  field: "dateEntry",
                  value: newValue,
                });
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          value={descr}
          onChange={(e) =>
            dispatch({
              type: "FIELD",
              field: "descr",
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
              type: "FIELD",
              field: "qty",
              value: e.target.value,
            })
          }
          required
          id="outlined-required"
          label="QTY/H"
        />
        <TextField
          value={rate}
          onChange={(e) =>
            dispatch({
              type: "FIELD",
              field: "rate",
              value: e.target.value,
            })
          }
          required
          id="outlined-required"
          label="Rate"
        />

        <Button
          onClick={(event) => {
            dispatch({
              type: "ADD_ENTRY",
              field: "entries",
              newItem: [
                {
                  date: dateEntry.toLocaleDateString(),
                  type: descr,
                  qty: qty,
                  rate: rate,
                  total: totalEntry(qty, rate),
                },
              ],
            });
            event.stopPropagation();
          }}
        >
          Submit
        </Button>
      </Box>

      <Stack sx={{ mt: 10 }} spacing={2}>
        {entries.map((elem: any) => (
          <Box
            key={Math.floor(Math.random() * 10000)}
            sx={{ display: "flex", gap: "15px" }}
          >
            {console.log(elem[0].date)}
            <Typography>{elem[0].date}</Typography>
            <Typography>{elem[0].type}</Typography>
            <Typography>{elem[0].qty}</Typography>
            <Typography>{elem[0].rate}</Typography>
            <Typography>{elem[0].total}</Typography>
          </Box>
        ))}
      </Stack>

      <Button>Submit Invoice</Button>
    </>
  );
};
