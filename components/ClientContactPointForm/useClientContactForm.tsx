import React, { useEffect } from "react";
import { useFormik } from "formik";
import { clientValidationSchema } from "./helper";
import { ClientContact, ClientContactForm } from "@nvs-shared/types";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";

export const useClientContactForm = (
  clientID: string,
  payload?: ClientContact
) => {
  const { updateDocument, setDocument } = useFSDoc();
  const [initialValues, setInitialValues] = React.useState<ClientContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    mobile: "",
  });
  useEffect(() => {
    if (!payload) return;
    setInitialValues({ ...payload.contactPoint });
  }, [payload]);

  console.log(payload?.contactPoint);

  const handleSubmit = async (values: ClientContactForm) => {
    if (payload) {
      setDocument(`clients/${clientID}/contactPoint/`, payload.id, values);

      return;
    } else {
      await addDoc(collection(db, `clients/${clientID}/contactPoint`), {
        contactPoint: values,
      })
        .then(() => {
          console.log(`Doc: ${clientID} has been updated successfully`);
        })
        .catch((e) => console.log("There is an error"));
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: clientValidationSchema,
    onSubmit: async (values) => {
      handleSubmit(values);
      console.log(values);
    },
  });
  return {
    formik,
  };
};
