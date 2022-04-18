import { $TSFixit } from '@nvs-shared/types';
import * as yup from 'yup';
export interface IClientName {
  firstName: string;
  lastName: string;
  id: string;
}

// * Validate the billing informations form
export const validateBillingInformations = yup.object({
  clientName: yup.object({
    name: yup.string().required(),
    id: yup.string().required(),
  }),
  invoiceDate: yup.date().required(),
  paymentDue: yup.number().required(),
  status: yup.string().required(),
});

// * Form initial values
export const initialBillingInformation = {
  clientName: '',
  invoiceDate: new Date(),
  paymentDue: '',
  status: '',
  remarks: '',
};

// * Handle the selection of the client
export const handleSelectedClient = (
  id: string,
  clients: $TSFixit,
  setFieldValue: (field: string, value: any) => void
): void => {
  const filteredClientFromList = clients.filter(
    (elem: $TSFixit) => elem.id === id
  );

  setFieldValue('clientName', filteredClientFromList[0]);
};
