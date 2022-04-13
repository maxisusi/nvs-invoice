import {
  deleteDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export const useFSDoc = () => {
  // Delete a document
  const deleteDocument = async (collection: string, params: string) => {
    console.log(params);
    await deleteDoc(doc(db, collection, params)).then(() => {
      console.log(`Doc: ${params} has been deleted successfully`);
    });
  };

  // Update a document
  const updateDocument = async (
    collection: string,
    params: string,
    payload: any,
  ) => {
    await updateDoc(doc(db, collection, params), {
      ...payload,
    }).then(() => {
      console.log(`Doc: ${params} has been updated successfully`);
    });
  };

  const setDocument = async (
    collection: string,
    params: string,
    payload: any,
  ) => {
    await setDoc(doc(db, collection, params), {
      contactPoint: payload,
    });
  };

  // Create a document
  const createDocument = async (documents: string, payload: any) => {
    await addDoc(collection(db, documents), {
      ...payload,
    }).then(() => {
      console.log(`Doc: ${payload} has been created successfully`);
    });
  };
  return {
    useFSDoc,
    deleteDocument,
    createDocument,
    updateDocument,
    setDocument,
  };
};
