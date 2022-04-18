import { IconButton, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useInvoice } from '@nvs-context/InvoiceContext';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useInvoiceTable } from './useInvoiceTable';

export const InvoiceTable = () => {
  const [entries] = useInvoice();
  const { handleDeleteEntry } = useInvoiceTable();

  return (
    <TableContainer component={Paper} sx={{ mb: 7 }}>
      <Table
        sx={{
          minWidth: 300,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Quantity / Hours</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow
              key={entry.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {entry.description}
              </TableCell>
              <TableCell align="right">
                {entry.date.toLocaleDateString()}
              </TableCell>
              <TableCell align="right">{entry.qty}</TableCell>
              <TableCell align="right">{entry.rate}</TableCell>
              <TableCell align="right">{entry.total}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleDeleteEntry(entry.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

{
  /* Entries */
}

{
  /* Entries listing */
}
{
  /* <Stack
        sx={{
          mt: 10,
        }}
        spacing={2}
      >
        {entries.map((elem: any, index: number) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: '15px',
            }}
          >
            <Typography>{elem.date.toLocaleDateString()}</Typography>
            <Typography>{elem.type}</Typography>
            <Typography>{elem.qty}</Typography>
            <Typography>{elem.rate}</Typography>
            <Typography>{elem.total}</Typography>
            <Button
              color="error"
              onClick={() => {
                handleRemoveEntry(index);
              }}
            >
              Delete Entry
            </Button>
          </Box>
        ))}
      </Stack> */
}
