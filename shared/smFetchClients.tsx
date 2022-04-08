import { db } from "@nvs-shared/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { assign, createMachine, StateMachine, DoneInvokeEvent } from "xstate";
import { Client } from "./types";

type ClientListEvents = { type: "FETCH" };
type ClientListStates =
  | { value: "idle"; context: ClientListContext }
  | { value: "loading"; context: ClientListContext }
  | { value: "success"; context: ClientListContext }
  | { value: "error"; context: ClientListContext & { error: string } };

type ClientListContext = {
  results: Client[] | any;
  error?: string;
};

export const clientList = createMachine({
  id: "fetchClients",
  initial: "idle",
  context: {
    results: "",
  },
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    error: {
      on: { FETCH: "loading" },
    },
    success: {},
    loading: {
      invoke: {
        id: "fetchClients",
        src: () => fetchClients(),
        onDone: {
          target: "success",
          actions: assign({
            results: (context: any, event: any) => event.data,
          }),
        },
        onError: {
          target: "error",
          actions: assign<ClientListContext, DoneInvokeEvent<Error>>({
            error: (context, event) => event.data.message,
          }),
        },
      },
    },
  },
});

const fetchClients = async () => {
  const data: any = await getDocs(collection(db, "clients"));

  try {
    const clientData = data.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return clientData;
  } catch (e) {
    return "Error loading clients";
  }
};
