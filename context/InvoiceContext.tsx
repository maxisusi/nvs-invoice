import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import { db } from "@nvs-shared/firebase";
import { collection, getDocs } from "firebase/firestore";

const InvoiceContext = React.createContext({});
const invoicesColRef = collection(db, "invoices");

export const useInvoiceList = () => {
  return useContext(InvoiceContext);
};

export const InvoiceDataProvider: FunctionComponent = ({ children }) => {
  const [invoices, setInvoices] = useState<any>();
  useEffect(() => {
    // Query Firebase to retreive all of the invoices
    const getInvoices = async () => {
      const data = await getDocs(invoicesColRef);
      const invoiceList = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return setInvoices(invoiceList);
    };
    getInvoices();
  }, []);

  return (
    <InvoiceContext.Provider value={invoices}>
      {children}
    </InvoiceContext.Provider>
  );
};
