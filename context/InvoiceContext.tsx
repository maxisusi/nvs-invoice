import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  useReducer,
} from 'react';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import { Invoice } from '@nvs-shared/types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@nvs-shared/firebase';
const InvoiceContext = createContext({});

export const useInvoice = () => {
  return useContext(InvoiceContext);
};
export const InvoiceProvider = ({ children }) => {
  const [invoice, setInvoice] = useState<Invoice | undefined>([]);
  const router = useRouter();

  const initialState = {
    lastFetched: '',
    data: {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      mobile: '',
      entries: [{}],
    },
    loading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'GET_DATAS':
        return {
          ...state,
          loading: true,
        };

      case 'SET_DATAS':
        return {
          lastFetched: new Date(),
          data: action.payload,
          loading: false,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_DATAS' });

    if (!router) return;
    const getDocument = async () => {
      const document: any = await getDoc(
        doc(db, `invoices/${router.query.id}`)
      );

      try {
        const data = document.data();
        dispatch({ type: 'SET_DATAS', payload: data });
      } catch (e) {
        console.log(e);
      }
    };
    getDocument();
  }, [router.query.id]);

  return (
    <InvoiceContext.Provider value={[state, dispatch]}>
      {children}
    </InvoiceContext.Provider>
  );
};
