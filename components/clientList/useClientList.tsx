import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useFSDoc } from '@nvs-shared/useFSDoc';

import { stringToColor } from '@nvs-shared/utils';

export const useClientList = () => {
  const [rows, setRows] = useState<any>([]);

  // Fetch Datas
  const { useGetCollection } = useFSDoc();
  const client = useGetCollection('clients');

  // Format Datas from Invoice Firebase to display them as Label on the Client Grid
  useEffect(() => {
    if (!client.isLoading) {
      const clientData = client?.data?.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const trim = clientData?.map((elem) => {
        return {
          id: elem.id,
          firstName: elem.firstName,
          lastName: elem.lastName,
          email: elem.email,
          phone: elem.phone,
        };
      });
      setRows(trim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.isLoading, client.isFetching]);

  // Columns of the Client grid
  const columns: GridColDef[] = [
    {
      field: 'avatar',
      headerName: 'Avatar',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 0.2,
      renderCell: (params) => {
        return (
          <Avatar
            sx={{
              width: 35,
              height: 35,
              bgcolor: stringToColor(params.row.firstName),
            }}
            alt={`${params.row.firstName || ''} ${params.row.lastName || ''}`}
            src="/"
          ></Avatar>
        );
      },
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone number',
      flex: 1,
      editable: true,
    },
  ];

  return {
    rows,
    columns,
    useClientList,
  };
};
