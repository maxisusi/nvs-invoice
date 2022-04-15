import React, { FunctionComponent, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useClientList } from './useClientList';
import { useRouter } from 'next/router';

import { useFSDoc } from '@nvs-shared/useFSDoc';

export const ClientList: FunctionComponent = () => {
  const { rows, columns } = useClientList();
  const { useGetCollection } = useFSDoc();
  const client = useGetCollection('clients');
  const router = useRouter();

  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          loading={client.isLoading}
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          isCellEditable={() => false}
          onRowClick={(params) => {
            router.push(`/clients/${params.id}`);
          }}
        />
      </div>
    </>
  );
};
