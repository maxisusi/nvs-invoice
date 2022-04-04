import { useRouter } from "next/router";
import { useFormik } from "formik";
import { clientValidationSchema } from "./helper";
import { Client } from "@nvs-shared/types";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useCreateClient = (payload: Client) => {
  const { createDocument, updateDocument } = useFSDoc();
  const router = useRouter();
  const [initialValues, setInitialValues] = useState<Client>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    npa: "",
    address: "",
    phone: "",
    mobile: "",
    type: "individual",
    martialStatus: "",
    country: "",
  });
  useEffect(() => {
    if (!payload) return;

    setInitialValues(payload);
  }, [payload]);

  const handleSubmit = (values: Client) => {
    if (payload) {
      const clientID = router.query.id as string;
      updateDocument("clients", clientID, values).then(() => {
        router.push(`/clients/${clientID}`);
      });
    } else {
      const todayDate = new Date();
      const client: Client = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        city: values.city,
        npa: values.npa,
        address: values.address,
        phone: values.phone,
        country: values.country,
        type: values.type,
        martialStatus: values.martialStatus,
        mobile: values.mobile,
        timeCreated: todayDate.toDateString(),
      };

      createDocument("clients", client).then(() => {
        router.push("/clients");
      });
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: clientValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      console.log("called");
      console.log(values);
    },
  });

  return {
    formik,
  };
};
