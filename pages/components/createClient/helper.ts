import * as yup from "yup";
import { IClientData } from "../../../types";

export const clientData: IClientData = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  email: "",
  npa: "",
  phone: "",
};

export type Props = {
  name: string;
  formik: any;
};

export const clientValidationSchema = yup.object({
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  npa: yup.string().required("NPA is required"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
});
