import { useInvoice } from '@nvs-context/InvoiceContext';
import { $TSFixit } from '@nvs-shared/types';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useFormik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { validateBillingInformations } from './helper';

/**
 * * Validation Shema [Client, Invoice date, Payment due Date] - DONE
 * * Get client infos from Firebase - DONE
 * * Gather data from useEntryGenerator - DONE
 * * Submit Data to Firebase
 */

// * Form initial values
const initialBillingInformation = {
  clientName: '',
  invoiceDate: new Date(),
  paymentDue: '',
  status: '',
  entries: [],
};

export const useInvoiceForm = () => {
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

  // * Formik form handler
  const formik = useFormik({
    initialValues: initialBillingInformation,
    // validationSchema: validateBillingInformations,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
    formik,
    clients,
  };
};
// const handleSubmitInvoice = async () => {
//   // const invoiceObject: IInvoiceData = {
//   //   address: client[0].address,
//   //   city: client[0].city,
//   //   dateCreated: dateInvoice,
//   //   dueDate: addDays(dateInvoice, dueDate),
//   //   email: client[0].email,
//   //   entries: entries,
//   //   firstName: client[0].firstName,
//   //   lastName: client[0].lastName,
//   //   npa: client[0].npa,
//   //   phone: client[0].phone,
//   //   status: status,
//   // };

//   await addDoc(collection(db, 'invoices'), {
//     address: client[0].address,
//     city: client[0].city,
//     dateCreated: dateInvoice,
//     dueDate: addDays(dateInvoice, dueDate),
//     email: client[0].email,
//     entries: entries,
//     firstName: client[0].firstName,
//     lastName: client[0].lastName,
//     npa: client[0].npa,
//     phone: client[0].phone,
//     status: status,
//   }).then(() => {
//     router.push('/invoices');
//   });
// };
