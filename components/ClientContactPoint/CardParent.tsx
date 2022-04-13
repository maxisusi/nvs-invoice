import React from "react";
import { PointOfContactLabels } from "./PointOfContactLabels";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, Box } from "@mui/material";
import { useClientContactPoint } from "./useClientContactPoint";
import { ContactPointKind, style } from "./helper";
import Modal from "@mui/material/Modal";
import { ClientContactPointForm } from "@nvs-component/ClientContactPointForm";

export const CardParent = () => {
  const { dispatch, state } = useClientContactPoint();
  const { modalOpen } = state;

  return (
    <>
      {/* Header */}
      <CardActions>
        <Button
          onClick={() => dispatch({ type: ContactPointKind.OPEN })}
          size="small"
        >
          Add People to contact
        </Button>
      </CardActions>

      {/* Content */}
      <CardContent>
        <PointOfContactLabels />
      </CardContent>
      {/* Add Modal */}
      <Modal
        open={modalOpen}
        onClose={() => dispatch({ type: ContactPointKind.CLOSE })}
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
