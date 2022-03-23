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
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const initialState = {
  date: null,
  descr: "",
  qty: "",
  rate: "",
  total: "",
  entries: [],
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
        date: null,
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

export const CreateInvoiceGrid = () => {
  const [state, dispatch] = useReducer(addEntryReducer, initialState);
  const [client, setClient] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [value, setValue] = React.useState<Date | null>(null);

  const { clientNameList } = useCreateInvoice();

  const handleClientChange = (event: SelectChangeEvent) => {
    setClient(event.target.value as string);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleDueDateChange = (event: SelectChangeEvent) => {
    setDueDate(event.target.value as string);
  };

  const totalEntry = (qty: number, rate: number): number => {
    return qty * rate;
  };

  const { descr, qty, rate, entries, total, date } = state;

  return (
    <>
      <Box sx={{ minWidth: 20 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
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
            value={client}
            label="Client"
            onChange={handleClientChange}
          >
            {clientNameList.map((client: IClientName) => (
              <MenuItem key={client.id} value={client.id}>
                {client.firstName} {client.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Status section */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleStatusChange}
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
            onChange={handleDueDateChange}
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
            value={date}
            onChange={(newValue) => {
              {
                dispatch({ type: "FIELD", field: "date", value: newValue });
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
                date.toLocaleDateString(),
                descr,
                qty,
                rate,
                totalEntry(qty, rate),
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
            <p>{elem[0]}</p>
            <p>{elem[1]}</p>
            <p>{elem[2]}</p>
            <p>{elem[3]}</p>
            <p>{elem[4]}</p>
          </Box>
        ))}
      </Stack>

      <Button>Submit Invoice</Button>
    </>
  );
};
