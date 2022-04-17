import * as yup from 'yup';

export const validateInvoiceItemList = yup.object({
  date: yup.date().required(),
  description: yup.string().required(),
  qty: yup.number().required(),
  rate: yup.number().required(),
});
