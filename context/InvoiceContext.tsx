import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import { db } from "@nvs-shared/firebase";
import { collection, getDocs } from "firebase/firestore";

const InvoiceContext = React.createContext({});
const InvoiceContextModify = React.createContext({});
const invoicesColRef = collection(db, "invoices");

export const useInvoiceList = () => {
  return useContext(InvoiceContext);
};

export const useSetInvoiceList = () => {
  return useContext(InvoiceContextModify);
};

export const InvoiceDataProvider: FunctionComponent = ({ children }) => {
  const [invoices, setInvoices] = useState<any>();

  return (
    <InvoiceContext.Provider value={invoices}>
      <InvoiceContextModify.Provider value={setInvoices}>
        {children}
      </InvoiceContextModify.Provider>
    </InvoiceContext.Provider>
  );
};
