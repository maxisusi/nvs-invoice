import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ClientContact } from "@nvs-shared/types";
import { useClientContactPoint } from "./useClientContactPoint";
import { stringToColor } from "@nvs-shared/utils";
import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { ContactPointKind, style } from "./helper";
import { ClientContactPointForm } from "@nvs-component/ClientContactPointForm";
import { ModalProvider, useModal } from "@nvs-context/ModalContext";
export const PointOfContactLabels = () => {
  const { dispatch, state, openMenu, anchorEl, handleCloseMenu, handleClick } =
    useClientContactPoint();
  const { contactPointData, contactPointEdit, modalOpen } = state;

  return (
    <>
      {contactPointData?.map(({ contactPoint, id }: ClientContact) => (
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
              dispatch({ type: ContactPointKind.GET_ID, payload: id });
              handleClick(event);
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
                dispatch({ type: ContactPointKind.SET_EDIT });
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                dispatch({ type: ContactPointKind.DELETE });
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </Box>
      ))}

      {/* Edit Modal */}
      <ModalProvider>
        <Modal
          open={modalOpen}
          onClose={() => dispatch({ type: ContactPointKind.CLOSE })}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ClientContactPointForm payload={contactPointEdit} />
          </Box>
        </Modal>
      </ModalProvider>
    </>
  );
};
