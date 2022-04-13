import React from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import { ClientDetails } from '@nvs-component/ClientDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import { ClientContactPoint } from '@nvs-component/ClientContactPoint';
import style from './helper';
import { useClientPage } from './useClientPage';

export default function ClientPage() {
  const { deleteDocument } = useFSDoc();
  const { handleOpen, handleClose, open } = useClientPage();
  const router = useRouter();

  return (
    <>
      {/* Components */}
      <Box sx={{ maxWidth: '30%' }}>
        <Stack spacing={5}>
          <ClientDetails />
          <ClientContactPoint />
        </Stack>
      </Box>
      {/* Action bar */}
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
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
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                deleteDocument('clients', router.query.id as string);
                router.push('/clients');
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
