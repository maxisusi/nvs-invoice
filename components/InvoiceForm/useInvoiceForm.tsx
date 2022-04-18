import { useInvoice } from '@nvs-context/InvoiceContext';
import { db } from '@nvs-shared/firebase';
import { $TSFixit } from '@nvs-shared/types';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { validateBillingInformations } from './helper';

/**
 * * Validation Shema [Client, Invoice date, Payment due Date] - DONE
 * * Get client infos from Firebase - DONE
 * * Gather data from useEntryGenerator - DONE
 * * Submit Data to Firebase
 */

export const useInvoiceForm = () => {
  /**
   * Submit form to firebase
   */

  const handleServerSubmit = (values: any) => {
    // * Get details from selected client
    const formattedSingleClient: $TSFixit = clientRawData?.data?.docs
      .map((doc: $TSFixit) => ({
        ...doc.data(),
        id: doc.id,
      }))
      .filter((elem) => elem.id == values.clientName.id);

    // * Format Billing Details object
    const formattedBillingDetails = {
      invoiceDate: values.invoiceDate,
      paymentDue: values.paymentDue,
      status: values.status,
      remarks: values.remarks,
    };

    // * Push entries and single client to the invoice object
    const invoice = {
      billingDetails: formattedBillingDetails,
      client: formattedSingleClient[0],
      entries: entries,
    };

    // * Send invoice to Firebase
    // submitInvoiceToServer(invoice);
    console.log(invoice);
  };

  /**
   * Billing info logic
   */

  // * Get clients from the server
  const { useGetCollection } = useFSDoc();
  const clientRawData = useGetCollection('clients');
  const [clients, setClients] = useState([]);

  // * Format clients to [{id: "ydYAsydyayay", name: "Joe Rogean" }]
  useEffect(() => {
    if (!clientRawData.isLoading) {
      const formatedClient: $TSFixit = clientRawData?.data?.docs.map(
        (doc: $TSFixit) => ({
          name: doc.data().firstName + ' ' + doc.data().lastName,
          id: doc.id,
        })
      );
      setClients(formatedClient);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientRawData.isLoading, clientRawData.isFetching]);

  /**
   * Invoice subdetails Total
   */

  // * Set the total state
  const [total, setTotal] = useState(0);
  const [entries] = useInvoice();

  // * Calculate the sum of the entries
  useEffect(() => {
    const sumOfEntries = entries
      .map(({ total }: $TSFixit) => parseFloat(total))
      .reduce((sum: number, i: number) => sum + i, 0);

    setTotal(sumOfEntries);
  }, [entries]);

  /**
   * Invoice subdetails remarks
   */

  const [remark, setRemark] = useState('');

  return {
    remark,
    setRemark,
    useInvoiceForm,
    total,
    clients,
    handleServerSubmit,
  };
};
const submitInvoiceToServer = async (payload: any) => {
  await addDoc(collection(db, 'invoices'), {
    ...payload,
  }).then(() => {
    console.log('Success');
    // router.push('/invoices');
  });
};
