import { db } from "@nvs-shared/firebase";
import { Middleware } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

const api: Middleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type != "apiCallBegan") return next(action);

    console.log("i was called");
    // const { onSuccess, onError } = action.type;
    // const data: any = await getDocs(collection(db, "clients"));
    // try {
    //   //   const clientData = data.docs.map((doc: any) => ({
    //   //     //   ...doc.data(),
    //   //     //   id: doc.id,
    //   //   }));
    // } catch (error) {
    //   console.log(error);
    // }
  };

export default api;
