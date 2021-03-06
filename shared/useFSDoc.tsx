import {
  useFirestoreDocument,
  useFirestoreDocumentMutation,
  useFirestoreQuery,
} from '@react-query-firebase/firestore';
import {
  deleteDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
  setDoc,
  getDoc,
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

  const useUpdateDocument = (document: string, params: string) => {
    const col = collection(db, document);
    const ref = doc(col, params);
    const mutation = useFirestoreDocumentMutation(ref, { merge: true });

    return mutation;
  };

  // Update a document
  const updateDocument = async (
    collection: string,
    params: string,
    payload: any
  ) => {
    await updateDoc(doc(db, collection, params), {
      ...payload,
    }).then(() => {
      console.log(`Doc: ${params} has been updated successfully`);
    });
  };

  const useGetCollection = (col: string) => {
    const ref = collection(db, col);

    const query = useFirestoreQuery([col], ref);

    return query;
  };

  const useGetDocument = (collection: string, params: string) => {
    const ref = doc(db, collection, params);
    const query = useFirestoreDocument([collection, params], ref, {
      subscribe: true,
    });
    return query;
  };

  const setDocument = async (
    collection: string,
    params: string,
    payload: any
  ) => {
    await setDoc(doc(db, collection, params), {
      contactPoint: payload,
    });
  };

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
    useGetCollection,
    setDocument,
    useGetDocument,
    useUpdateDocument,
  };
};
