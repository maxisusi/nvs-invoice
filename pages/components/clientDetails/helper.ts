import { IClientData } from "../../../types";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export type Props = {
  open: boolean;
  setOpenClient(param: boolean): void;
  clientDetails: IClientData | any;
};
