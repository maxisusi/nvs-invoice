import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { TitleInfo } from './helper';

export const TitleApp: FunctionComponent<TitleInfo> = ({ title }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};
