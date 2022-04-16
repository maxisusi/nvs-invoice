import { Box, Card, CardContent, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

export function Subdetails({}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        height: '150px',
        mb: 4,
      }}
    >
      <Box
        sx={{
          flex: 0.45,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
          }}
        >
          Remarks
        </Typography>
        <TextField
          fullWidth
          rows={3}
          multiline
          placeholder="Write remarks about this invoice"
        ></TextField>
      </Box>

      <Box
        sx={{
          flex: 0.2,
          height: '100%',
        }}
      >
        <Card
          variant="outlined"
          sx={{
            height: '100%',
            backgroundColor: grey[200],
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="subtitle2">net value:</Typography>
                <Typography variant="subtitle2">4000.-</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="subtitle2" color="text.secondary">
                  Taxes:
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  220.-
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 4,
              }}
            >
              <Typography variant="h5">Total:</Typography>
              <Typography variant="h5">4220.-</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
