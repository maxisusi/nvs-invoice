import { deleteDoc, doc } from "firebase/firestore";
import React, { FunctionComponent } from "react";
import { db } from "./firebase";

export const useFSDoc = () => {
  const deleteDocument = async (collection: string, params: string) => {
    console.log(params);
    await deleteDoc(doc(db, collection, params)).then(() => {
      console.log("Doc has been deleted");
    });
  };
  const updateDocument = () => {};
  const createDocument = () => {};
  return {
    useFSDoc,
    deleteDocument,
  };
};
