import React, { createContext, useContext, useState } from 'react';

const InvoiceContext = createContext({});

export const useInvoice = () => {
  return useContext(InvoiceContext);
};

export const InvoiceProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <InvoiceContext.Provider value={[entries, setEntries]}>
      {children}
    </InvoiceContext.Provider>
  );
};
