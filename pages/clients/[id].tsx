import React from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import FaceIcon from "@mui/icons-material/Face";
import EditIcon from "@mui/icons-material/Edit";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Label } from "@nvs-widget/Label";

import { stringToColor } from "@nvs-shared/utils";
import { GetStaticPropsContext, NextPage } from "next";

const clientColRef = collection(db, "clients");

export const getStaticPaths = async () => {
  const data = await getDocs(clientColRef);
  const paths = data.docs.map((doc) => {
    return {
      params: { id: doc.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "clients", id);
  const res = await getDoc(docRef);

  const data = res.data();
  return {
    props: { client: data },
  };
};

const ClientPage = ({ client }) => {
  console.log(client);

  const { address, city, email, firstName, lastName, phone, npa }: Client =
    client;
  return (
    <>
      <Container>
        <Stack spacing={6}>
          {/* Header */}
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
              <Typography variant="body1">number of invoices : 320</Typography>
            </Box>
          </Box>
          {/* Personnal Datas */}
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
                  <FaceIcon sx={{ color: "grey.500" }} />
                  <Typography variant={"h6"}>Personnal Details</Typography>
                </Box>

                <Box>
                  <Button endIcon={<EditIcon />} variant="outlined">
                    Edit
                  </Button>
                </Box>
              </Box>

              {/* Label  */}
              <Label
                firstTitle="First name"
                lastTitle="Last name"
                firstElem={firstName}
                lastElem={lastName}
              />

              <Label
                firstTitle="Npa"
                lastTitle="City"
                firstElem={npa}
                lastElem={city}
              />
              <Label
                firstTitle="Address"
                lastTitle="Phone"
                firstElem={address}
                lastElem={phone}
                isLast
              />
            </Container>
          </Paper>

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
              {/* Label  */}
            </Container>
          </Paper>
        </Stack>
      </Container>
    </>
  );
};

export default ClientPage;
