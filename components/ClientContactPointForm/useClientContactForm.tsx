import React, { useEffect } from "react";
import { useFormik } from "formik";
import { clientValidationSchema } from "./helper";
import { ClientContact, ClientContactForm } from "@nvs-shared/types";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@nvs-shared/firebase";

export const useClientContactForm = (
  clientID: string,
  payload: ClientContact
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
    setInitialValues({ ...payload[0].contactPoint });
  }, [payload]);

  const handleSubmit = async (values: ClientContact) => {
    if (payload) {
      setDocument(`clients/${clientID}/contactPoint/`, payload[0].id, values);

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
    },
  });
  return {
    formik,
  };
};
