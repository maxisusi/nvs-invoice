import { useRouter } from "next/router";
import { useFormik } from "formik";
import { clientValidationSchema } from "./helper";
import { Client } from "@nvs-shared/types";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { Timestamp } from "firebase/firestore";

export const useCreateClient = () => {
  const { createDocument } = useFSDoc();
  const router = useRouter();

  const initialClientValue: Client = {
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
  };

  const formik = useFormik({
    initialValues: initialClientValue,
    enableReinitialize: true,
    validationSchema: clientValidationSchema,

    onSubmit: async (values) => {
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
    },
  });

  return {
    formik,
  };
};
