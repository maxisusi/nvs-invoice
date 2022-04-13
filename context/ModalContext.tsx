import React, {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";

const ModalContext = createContext({});

export const useModal = () => {
  return useContext(ModalContext);
};

export enum ModalActionKind {
  OPEN = "OPEN_MODAL",
  CLOSE = "CLOSE_MODAL",
}

export interface ModalAction {
  type: ModalActionKind;
}

const initialState = {
  modalOpen: false,
};

export const ModalProvider: FunctionComponent = ({ children }) => {
  const reducer = (state: boolean, action: ModalAction) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return {
          modalOpen: true,
        };

      case "CLOSE_MODAL":
        return {
          modalOpen: false,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  );
};
