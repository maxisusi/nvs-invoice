import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

export const InvoiceClientData = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
      <Typography variant="subtitle2">Invoice to</Typography>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="subtitle1">
              <strong>Max Balej</strong>
            </Typography>
            <Typography>90210 California</Typography>
            <Typography>Groove street</Typography>
            <Typography>mbalej34@gmail.com</Typography>
            <Typography>+41 79 245 60 22</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
