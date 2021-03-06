import { Box } from '@mui/system';
import React from 'react';
import { TitleApp } from '@nvs-widget/TitleApp';
import { ClientList } from '@nvs-component/ClientList';
import { CreateButton } from '@nvs-widget/CreateButton';

function Clients() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TitleApp title="All of the clients" />
      </Box>

      <ClientList />
      <CreateButton urlPage="/clients/create" />
    </>
  );
}

export default Clients;
