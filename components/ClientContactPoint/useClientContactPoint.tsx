import React, { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { ContactPointAction, ContactPointKind, InitState } from "./helper";

const initialState: InitState = {
  contactPointID: "",
  contactPointData: null,
  contactPointEdit: null,
  modalOpen: false,
};

export const useClientContactPoint = () => {
  const { deleteDocument } = useFSDoc();

  // Gather user ID based on the URL
  const router = useRouter();
  const clientID = router.query.id;
  // Reducer

  function reducer(state: InitState, action: ContactPointAction): InitState {
    const { contactPointData, contactPointID } = state;
    switch (action.type) {
      case ContactPointKind.CLOSE:
        return { ...state, modalOpen: false };

      case ContactPointKind.OPEN:
        return { ...state, modalOpen: true };

      case ContactPointKind.GET_DATAS:
        return { ...state, contactPointData: action.payload };
      case ContactPointKind.GET_ID:
        return { ...state, contactPointID: action.payload };

      case ContactPointKind.SET_EDIT:
        const filteredContactPoint: any = contactPointData?.filter(
          (elem) => elem.id === contactPointID
        );

        return {
          ...state,
          contactPointEdit: filteredContactPoint[0],
          modalOpen: true,
        };

      case ContactPointKind.DELETE:
        deleteDocument(`clients/${clientID}/contactPoint/`, contactPointID);
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sub menu UI
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Gather Datas for the point of contact
  useEffect(() => {
    const contactPointRef = collection(
      db,
      "clients",
      `${clientID}`,
      "contactPoint"
    );

    onSnapshot(contactPointRef, (querySnapshot) => {
      let contactPoint;

      contactPoint = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch({ type: ContactPointKind.GET_DATAS, payload: contactPoint });
    });
  }, [clientID]);

  return {
    dispatch,
    state,
    useClientContactPoint,
    openMenu,
    anchorEl,
    handleCloseMenu,
    handleClick,
  };
};
