import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useInvoice } from '@nvs-context/InvoiceContext';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import { useInvoiceRows } from './useInvoiceRows';
export const InvoiceRows = () => {
  const { useGetDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);
  const { ccyFormat, row, invoiceTotal } = useInvoiceRows(
    invoice.data?.data()?.entries
  );
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow></TableRow>
            {/* Title of the column */}
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Datas of the rows */}
            {row.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            {/* Total of the invoice */}
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
