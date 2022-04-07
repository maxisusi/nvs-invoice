import React, { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { stringToColor } from "@nvs-shared/utils";
import { useFSDoc } from "@nvs-shared/useFSDoc";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import { Client } from "@nvs-shared/types";
import { ClientDetails } from "@nvs-component/ClientDetails";
import { NextPage } from "next/types";

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

type Props = {
  client: Client;
  id: string;
};

const ClientPage: NextPage<Props> = () => {
  const { deleteDocument } = useFSDoc();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [client, setClient] = React.useState<Client | []>([]);

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

  const { email, firstName, lastName } = client as Client;

  return (
    <>
      <Container>
        <Stack spacing={6}>
          {/* Header name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 70,
                  height: 70,
                  bgcolor: stringToColor(firstName),
                }}
                alt={`${firstName || ""} ${lastName || ""}`}
                src="/"
              ></Avatar>
              <Box>
                <Typography variant="h4">
                  {firstName + " " + lastName}
                </Typography>
                <Link variant="body2">{email}</Link>
              </Box>
            </Box>

            <Box sx={{ textAlign: "right" }}>
              <Typography variant="h4">43,428CHF</Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography variant="body1">number of invoices :</Typography>
                <Chip label="320" size="small" color="primary" />
              </Box>
            </Box>
          </Box>

          <ClientDetails client={client as Client} />

          {/* Latest Invoices */}
          <Paper variant="outlined">
            <Container
              sx={{
                pt: 3,
                pb: 5,
              }}
            >
              {/* PD Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <InsertDriveFileIcon sx={{ color: "grey.500" }} />
                  <Typography variant={"h6"}>Latest Invoices</Typography>
                </Box>
              </Box>
            </Container>
          </Paper>

          {/* Action Buttons */}
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
        </Stack>
      </Container>

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
