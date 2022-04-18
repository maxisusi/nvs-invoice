import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

import { useFSDoc } from '@nvs-shared/useFSDoc';
import { useRouter } from 'next/router';
import { $TSFixit } from '@nvs-shared/types';
export const InvoiceClientData = () => {
  const { useGetDocument } = useFSDoc();
  const router = useRouter();
  const invoice = useGetDocument('invoices', router.query.id as string);

  const {
    firstName,
    lastName,
    city,
    npa,
    address,
    email,
    phone,
    mobile,
  }: $TSFixit = invoice.data?.data().client;

  console.log(firstName);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
      <Typography variant="subtitle2">Invoice to</Typography>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1">
              <strong>
                {firstName || ''} {lastName || ''}
              </strong>
            </Typography>
            <Typography>
              {npa || ''} {city || ''}
            </Typography>
            <Typography>{address}</Typography>
            <Typography>{email}</Typography>
            <Typography>{phone}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
