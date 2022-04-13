import React, { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import { useRouter } from "next/router";
import { Client } from "@nvs-shared/types";

export const useClientDetails = () => {
  const [client, setClient] = React.useState<Client | []>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    if (!id) return;
    else {
      const unsub = onSnapshot(
        doc(db, "clients", id as string),
        (doc) => {
          return setClient(doc.data() as Client);
        },
        (error) => {
          console.log("error");
        }
      );
    }
  }, [id]);

  return {
    useClientDetails,
    client,
    open,
    handleOpen,
    handleClose,
  };
};
