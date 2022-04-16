import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';

export const InvoiceTable = () => {
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
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
          <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
          ))} */}
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
