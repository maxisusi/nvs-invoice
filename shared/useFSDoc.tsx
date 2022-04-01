import { deleteDoc, doc, addDoc, collection } from "firebase/firestore";
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

  const createDocument = async (documents: string, payload: any) => {
    await addDoc(collection(db, documents), {
      ...payload,
    }).then(() => {
      console.log("Doc has been created");
    });
  };
  return {
    useFSDoc,
    deleteDocument,
    createDocument,
  };
};
