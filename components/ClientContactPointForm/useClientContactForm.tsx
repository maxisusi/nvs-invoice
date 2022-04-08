import React from "react";
import { useFormik } from "formik";
import { clientValidationSchema } from "./helper";
import { ClientContact } from "@nvs-shared/types";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";

export const useClientContactForm = (clientID: string) => {
  const { updateDocument } = useFSDoc();
  const [initialValues, setInitialValues] = React.useState<ClientContact>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    mobile: "",
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: clientValidationSchema,
    onSubmit: async (values) => {
      const updateContactPoint = [{ ...values }];
      const clientRef = doc(db, "clients", clientID);
      await updateDoc(clientRef, {
        contactPoint: arrayUnion(values),
      }).then(() =>
        console.log(`Doc: ${clientID} has been updated successfully`)
      );
    },
  });
  return {
    formik,
  };
};
