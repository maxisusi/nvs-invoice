import { useState, useEffect } from 'react';
import { InvoiceEntry } from '@nvs-shared/types';
import { helper, Row } from './helper';

const { createRow, subtotal } = helper();
export const useInvoiceRows = (list: InvoiceEntry[]) => {
  const [row, setRow] = useState<Row[]>([]);

  //Format the number to remove decimals above 2
  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
  }

  // Format the datas to display the details of the selected invoice
  useEffect(() => {
    if (!list) return;
    const tempObj: Row[] = [];
    list.forEach((detail) => {
      tempObj.push(
        createRow(
          detail.description,
          detail.date.toDate().toLocaleDateString(),
          detail.qty,
          detail.rate
        )
      );
    });
    return setRow(tempObj);
  }, []);

  const invoiceSubtotal = subtotal(row);
  const invoiceTotal = invoiceSubtotal;

  return { ccyFormat, row, invoiceTotal };
};
