import { useFormik } from 'formik';
import { validateInvoiceItemList } from './helper';
import { useInvoice } from '@nvs-context/InvoiceContext';
import { v4 as uuidv4 } from 'uuid';

// * Form entries initial values
const initialEntries = {
  id: '',
  date: new Date(),
  description: '',
  qty: '',
  rate: '',
};
export const useEntryGenerator = () => {
  const [entries, setEntries] = useInvoice();
  // * Formik form entries handler
  const formik = useFormik({
    initialValues: initialEntries,
    validationSchema: validateInvoiceItemList,
    enableReinitialize: true,

    onSubmit: (values) => {
      // * Redefine the entry values to add a custom ID
      const entriesFinalValues = {
        id: uuidv4(),
        date: values.date,
        description: values.description,
        qty: values.qty,
        rate: values.rate,
      };
      setEntries(() => [...entries, entriesFinalValues]);
      formik.resetForm();
    },
  });

  return {
    useEntryGenerator,
    formik,
  };
};
