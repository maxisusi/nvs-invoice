import React, { FunctionComponent } from "react";
import { Avatar, Box, Button, Link, Stack, Typography } from "@mui/material";
import { stringToColor } from "@nvs-shared/utils";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import { Props, style } from "./helper";
import { ClientContactPointForm } from "@nvs-component/ClientContactPointForm";

export const ClientContactPoint: FunctionComponent<Props> = ({ client }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pointOfContact = (
    <>
      {client.contactPoint?.map((elem) => (
        <Box
          key={elem.firstName}
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
                  `${elem.firstName || ""} ${elem.lastName || ""}`
                ),
              }}
              alt={`${elem.firstName || ""} ${elem.lastName || ""}`}
              src="/"
            ></Avatar>
            <Box>
              <Typography variant="subtitle2">
                {elem.firstName || ""} {elem.lastName || ""}
              </Typography>
              <Link variant="body2" color={"text.secondary"}>
                {elem.email}
              </Link>
              <Typography variant="body2" color={"text.secondary"}>
                {elem.phone}
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                {elem.mobile}
              </Typography>
            </Box>
          </Box>

          <IconButton>
            <SettingsIcon />
          </IconButton>
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
      {client.contactPoint && <CardContent>{pointOfContact}</CardContent>}
    </>
  );

  return (
    <>
      <Box>
        <Box>
          <Card variant="outlined">{card}</Card>
        </Box>
      </Box>

      {/* Edit Modal */}
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
    </>
  );
};
