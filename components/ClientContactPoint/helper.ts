import { Client, ClientContact, ClientContactForm } from "@nvs-shared/types";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export enum ContactPointKind {
  CLOSE = "CLOSE_MODAL",
  OPEN = "OPEN_MODAL",
  GET_DATAS = "GET_CONTACT_POINT_DATAS",
  GET_ID = "GET_CONTACT_POINT_ID",
  SET_EDIT = "SET_CONTACT_POINT_EDIT",
  DELETE = "DELETE_CONTACT_POINT",
}

export type ContactPointAction = {
  type: ContactPointKind;
  payload?: any;
};

export type InitState = {
  contactPointID: string;
  contactPointData: ClientContact[] | null;
  contactPointEdit: ClientContactForm | any;
  modalOpen: boolean;
};
