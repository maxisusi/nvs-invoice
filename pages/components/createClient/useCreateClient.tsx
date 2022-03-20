import { useRouter } from "next/router";
import { useFormik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import { clientData, clientValidationSchema } from "./helper";

export const useCreateClient = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: clientData,
    validationSchema: clientValidationSchema,
    onSubmit: async (values) => {
      await addDoc(collection(db, "clients"), {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        city: values.city,
        npa: values.npa,
        address: values.address,
        phone: values.phone,
      }).then(() => {
        formik.resetForm();
        router.push("/clients");
      });
    },
  });

  return {
    formik,
  };
};
