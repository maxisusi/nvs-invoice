import { useInvoice } from '@nvs-context/InvoiceContext';
import React from 'react';

export const useInvoiceTable = () => {
  const [entries, setEntries] = useInvoice();

  // * Delete the entry
  const handleDeleteEntry = (id: string) => {
    setEntries(() => entries.filter((entry) => entry.id !== id));
  };
  return {
    useInvoiceTable,
    handleDeleteEntry,
  };
};
