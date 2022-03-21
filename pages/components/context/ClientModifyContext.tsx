import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";

const ClientDataModifyContext = React.createContext({});
const ClientComponentStatus = React.createContext({});

export const useClientData = () => {
  return useContext(ClientDataModifyContext);
};

export const useComponentStatus = () => {
  return useContext(ClientComponentStatus);
};

export const ClientDataProvider: FunctionComponent = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const clientValue = { clientData, setClientData };
  const [modifyClient, setModifyClient] = useState(false);
  const componentValue = { modifyClient, setModifyClient };

  useEffect(() => {
    if (!modifyClient) return setClientData([]);
  }, [modifyClient]);
  return (
    <ClientDataModifyContext.Provider value={clientValue}>
      <ClientComponentStatus.Provider value={componentValue}>
        {children}
      </ClientComponentStatus.Provider>
    </ClientDataModifyContext.Provider>
  );
};
