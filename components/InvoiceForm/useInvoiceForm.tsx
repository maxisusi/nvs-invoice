import { IClientData } from '@nvs-shared/types';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IClientName } from './helper';
export const useCreateInvoice = () => {
  const [clientNameList, setClientNameList] = useState([]);
  return {
    clientNameList,
    useCreateInvoice,
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
