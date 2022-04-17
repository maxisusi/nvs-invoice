import { $TSFixit } from '@nvs-shared/types';
import * as yup from 'yup';
export interface IClientName {
  firstName: string;
  lastName: string;
  id: string;
}

// * Validate the billing informations form
export const validateBillingInformations = yup.object({
  clientName: yup.string().required(),
  invoiceDate: yup.date().required(),
  paymentDue: yup.string().required(),
  status: yup.string().required(),
});

// * Handle the selection of the client
export const handleSelectedClient = (
  id: string,
  clients: $TSFixit,
  setFieldValue: (field: string, value: any) => void
): void => {
  const filteredClientFromList = clients.filter(
    (elem: $TSFixit) => elem.id === id
  );

  console.log(filteredClientFromList[0].name);

  setFieldValue('clientName', filteredClientFromList[0].name);
};
