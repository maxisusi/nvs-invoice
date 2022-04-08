import React, { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import { Box, Button, Stack, Typography } from "@mui/material";

import { useFSDoc } from "@nvs-shared/useFSDoc";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import { Client } from "@nvs-shared/types";

import { NextPage } from "next/types";

import { ClientDetails } from "@nvs-component/ClientDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClientContactPoint } from "@nvs-component/ClientContactPoint";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export const styleEdit = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

type Props = {
  client: Client;
  id: string;
};

const ClientPage: NextPage<Props> = () => {
  const { deleteDocument } = useFSDoc();
  const router = useRouter();
  const [client, setClient] = React.useState<Client | []>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get datas for a single client
  const id = router.query.id;
  useEffect(() => {
    if (!id) return;
    else {
      const unsub = onSnapshot(doc(db, "clients", id as string), (doc) => {
        return setClient(doc.data() as Client);
      });
    }
  }, [id]);

  return (
    <>
      <Box sx={{ maxWidth: "30%" }}>
        <Stack spacing={5}>
          <ClientDetails client={client as Client} />
          <ClientContactPoint client={client as Client} />
        </Stack>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Button
          onClick={() => {
            handleOpen();
          }}
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete Client
        </Button>
      </Box>

      {/* Delete client modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ mb: 1 }}
          >
            Are you sure you want to delete?
          </Typography>

          <Typography id="modal-modal-title" variant="body1" sx={{ mb: 3 }}>
            This client will be removed permanently.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                console.log(id);
                deleteDocument("clients", id as string);
                router.push("/clients");
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ClientPage;
