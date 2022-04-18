import { useEffect, useState } from 'react';
import { Chip } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import { IInvoiceLabelGrid } from './helper';
import { useFSDoc } from '@nvs-shared/useFSDoc';

export const useDataGrid = () => {
  // const invoiceList = useInvoiceList() as Array<IInvoiceData>;
  const [rows, setRows] = useState<IInvoiceLabelGrid[]>([]);

  const { useGetCollection } = useFSDoc();
  const invoices = useGetCollection('invoices');

  useEffect(() => {
    if (!invoices.isLoading) {
      // Query Firebase to retreive all of the invoices
      let invoiceList = invoices?.data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const tempObj: Array<IInvoiceLabelGrid> = [];

      // Format Datas from Invoice Firebase to display them as Label on the Invoice Grid
      invoiceList?.forEach((elem) => {
        const tempRow: IInvoiceLabelGrid = {
          id: elem.id,
          col1: `#${elem.billingDetails.id}`,
          col2: `${elem.client.firstName} ${elem.client.lastName}`,
          col3: elem.billingDetails.invoiceDate.toDate().toLocaleDateString(),
          col4: `${elem.billingDetails.totalPrice} CHF`,
          col5: elem.billingDetails.status,
        };
        tempObj.push(tempRow);
      });

      return setRows(tempObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoices.isLoading, invoices.isFetching]);

  // Columns of the Invoice grid
  const columns = [
    { field: 'col1', headerName: 'ID', flex: 1 },
    { field: 'col2', headerName: 'Client', flex: 1 },
    { field: 'col3', headerName: 'Date', flex: 1 },
    { field: 'col4', headerName: 'Total', flex: 1 },
    {
      field: 'col5',
      headerName: 'Status',
      renderCell: (cellValues: GridCellParams) => {
        const invoiceStatus = cellValues.value;
        return (
          <Chip
            label={invoiceStatus}
            color={invoiceStatus === 'pending' ? 'warning' : 'success'}
          />
        );
      },
    },
  ];

  return {
    rows,
    setRows,
    columns,
  };
};
