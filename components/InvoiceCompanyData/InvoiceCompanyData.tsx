import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';

export const InvoiceCompanyData = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
      <Typography variant="subtitle2">Invoice from</Typography>
      <Card variant="outlined" sx={{ backgroundColor: grey[300] }}>
        <CardContent>
          <Typography variant="subtitle1">
            <strong>Nadine&apos;s Verbier Services</strong>
          </Typography>
          <Typography>1947 Versegeres</Typography>
          <Typography>Chemin des Places 1</Typography>
          <Typography>kbalej@netplus.ch</Typography>
          <Typography>027 778 10 93</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
