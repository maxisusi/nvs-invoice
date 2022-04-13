import { ClientContact } from "@nvs-shared/types";
import * as yup from "yup";

export const clientValidationSchema = yup.object({
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
});

export type Props = {
  payload?: ClientContact;
};
