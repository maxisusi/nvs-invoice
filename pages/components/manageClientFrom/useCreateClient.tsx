import { useRouter } from "next/router";
import { useFormik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { clientValidationSchema } from "./helper";

import { IClientData } from "../../../types";
import {
  useClientData,
  useComponentStatus,
} from "../context/ClientModifyContext";

export const useCreateClient = () => {
  const { modifyClient, setModifyClient }: any = useComponentStatus();
  const { clientData }: any = useClientData();

  const { id } = clientData;

  const addToDatabase = async (values: IClientData) => {
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
  };

  const handleSubmit = (values: IClientData) => {
    if (!modifyClient) {
      formik.resetForm();
      addToDatabase(values);
      console.log("MODIFY STATE");
    } else {
      editDatabase(values);

      console.log("CREATING STATE");
    }
  };

  const editDatabase = async (values: IClientData) => {
    const clientDocRef = doc(db, "clients", id);
    await updateDoc(clientDocRef, {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      city: values.city,
      npa: values.npa,
      address: values.address,
    }).then(() => {
      setModifyClient(false);
      formik.resetForm();
      router.push("/clients");
    });
  };
  const router = useRouter();
  const formik = useFormik({
    initialValues: clientData,
    validationSchema: clientValidationSchema,
    onSubmit: async (values) => {
      handleSubmit(values);
    },
  });

  return {
    formik,
  };
};
