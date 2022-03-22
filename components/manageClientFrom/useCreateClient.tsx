import { useRouter } from "next/router";
import { useFormik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { clientValidationSchema } from "./helper";

import { IClientData } from "../../types";
import {
  useClientData,
  useComponentStatus,
} from "../context/ClientModifyContext";
import { useEffect, useState } from "react";

export const useCreateClient = () => {
  const { modifyClient, setModifyClient }: any = useComponentStatus();
  const { clientModifyData }: any = useClientData();
  const { id, firstName, lastName, npa, address, city, email, phone } =
    clientModifyData;

  const initialClientValue = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    npa: "",
    address: "",
    phone: "",
  };

  //Change the inital values of the
  const [clientData, setClientData] = useState(initialClientValue);
  useEffect(() => {
    const dataSet = {
      firstName,
      lastName,
      npa,
      address,
      city,
      email,
      phone,
    };
    setClientData(dataSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modifyClient]);

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

  const handleSubmit = (values: IClientData) => {
    if (!modifyClient) {
      formik.resetForm();
      addToDatabase(values);
      console.log("CREATE STATE");
    } else {
      editDatabase(values);
      console.log("MODIFY STATE");
    }
  };

  const router = useRouter();
  const formik = useFormik({
    initialValues: clientData,
    enableReinitialize: true,
    validationSchema: clientValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return {
    formik,
  };
};
