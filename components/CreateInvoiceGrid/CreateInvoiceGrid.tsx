import React, { useState } from "react";
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

export const CreateInvoiceGrid = () => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [client, setClient] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");

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
  return (
    <Box sx={{ minWidth: 20 }}>
      {/* Time picker */}
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
  );
};
