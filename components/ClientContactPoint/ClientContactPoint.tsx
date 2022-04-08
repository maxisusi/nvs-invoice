import React, { FunctionComponent, useEffect, useState } from "react";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import { stringToColor } from "@nvs-shared/utils";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Props, style } from "./helper";
import { ClientContactPointForm } from "@nvs-component/ClientContactPointForm";
import { useRouter } from "next/router";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "@nvs-shared/firebase";
import { ClientContact } from "@nvs-shared/types";
import { eventNames } from "process";

export const ClientContactPoint: FunctionComponent<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
  };
  const [selPointContact, setSelPointContact] = useState(null);

  const handleOpenEdit = () => {
    setSelPointContact(pointContact.filter((elem) => elem.id === contactID));

    setOpenEdit(true);
  };

  const [pointContact, setPointContact] = useState([]);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [contactID, setContactID] = useState(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const clientID = router.query.id;
  useEffect(() => {
    const contactPointRef = collection(
      db,
      "clients",
      `${clientID}`,
      "contactPoint"
    );

    onSnapshot(contactPointRef, (querySnapshot) => {
      let contactPoint;

      contactPoint = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setPointContact(contactPoint as any);
    });
  }, [clientID]);

  const pointOfContact = (
    <>
      {pointContact?.map(({ contactPoint, id }) => (
        <Box
          key={id}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: stringToColor(
                  `${contactPoint.firstName || ""} ${
                    contactPoint.lastName || ""
                  }`
                ),
              }}
              alt={`${contactPoint.firstName || ""} ${
                contactPoint.lastName || ""
              }`}
              src="/"
            ></Avatar>
            <Box>
              <Typography variant="subtitle2">
                {contactPoint.firstName || ""} {contactPoint.lastName || ""}
              </Typography>
              <Link variant="body2" color={"text.secondary"}>
                {contactPoint.email}
              </Link>
              <Typography variant="body2" color={"text.secondary"}>
                {contactPoint.phone}
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                {contactPoint.mobile}
              </Typography>
            </Box>
          </Box>

          <IconButton
            id="basic-button-menu"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={(event) => {
              handleClick(event);
              setContactID(id);
            }}
          >
            <SettingsIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button-menu",
            }}
          >
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                handleOpenEdit();
              }}
            >
              Edit
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>
          </Menu>
        </Box>
      ))}
    </>
  );

  const card = (
    <>
      <CardActions>
        <Button onClick={handleOpen} size="small">
          Add People to contact
        </Button>
      </CardActions>
      {pointContact && <CardContent>{pointOfContact}</CardContent>}
    </>
  );

  return (
    <>
      <Box>
        <Box>
          <Card variant="outlined">{card}</Card>
        </Box>
      </Box>

      {/* Add Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClientContactPointForm />
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClientContactPointForm payload={selPointContact} />
        </Box>
      </Modal>
    </>
  );
};
